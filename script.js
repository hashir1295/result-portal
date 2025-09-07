// script.js — mapping your registration number to the direct PDF download link
const db = {
  "2023-ag-10394": "https://drive.google.com/uc?export=download&id=1-8Ziqqk4Wya7X1xOax6yqpcjkSK5MZ1q"
};

const input = document.getElementById('regInput');
const btn = document.getElementById('checkBtn');
const msg = document.getElementById('msg');

btn.addEventListener('click', checkAndDownload);
input.addEventListener('keypress', (e) => { if (e.key === 'Enter') checkAndDownload(); });

function checkAndDownload() {
  const key = input.value.trim().toLowerCase();
  if (!key) {
    showMessage('Please enter your registration number.');
    return;
  }
  if (db[key]) {
    hideMessage();
    window.open(db[key], '_blank', 'noopener');
  } else {
    showMessage('Invalid registration number. Please check and try again.');
  }
}

function showMessage(t) {
  msg.textContent = t;
  msg.style.display = 'block';
}

function hideMessage() {
  msg.textContent = '';
  msg.style.display = 'none';
}
