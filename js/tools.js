// js/tools.js

// 1. Text Counter
const counterInput = document.getElementById('counterInput');
if(counterInput) {
    counterInput.addEventListener('input', function() {
        const text = this.value;
        const charCount = text.length;
        // Hitung kata (hapus spasi berlebih)
        const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
        document.getElementById('counterResult').textContent = `${charCount} Karakter | ${wordCount} Kata`;
    });
}

// 2. Case Converter
function convertCase(type) {
    const input = document.getElementById('caseInput').value;
    const resBox = document.getElementById('caseResult');
    if(!input) return showToast('Masukkan teks dulu!');
    
    if(type === 'upper') resBox.textContent = input.toUpperCase();
    if(type === 'lower') resBox.textContent = input.toLowerCase();
}

// 3. Password Generator
function generatePassword() {
    const length = document.getElementById('passLength').value;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    let retVal = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    document.getElementById('passResult').textContent = retVal;
}

// 4. URL Encode/Decode
function processUrl(type) {
    const input = document.getElementById('urlInput').value;
    const resBox = document.getElementById('urlResult');
    if(!input) return;

    try {
        if(type === 'encode') resBox.textContent = encodeURIComponent(input);
        if(type === 'decode') resBox.textContent = decodeURIComponent(input);
    } catch(e) {
        resBox.textContent = "Error: Invalid URL format";
    }
}

// 5. JSON Formatter
function formatJSON() {
    const input = document.getElementById('jsonInput').value;
    const resBox = document.getElementById('jsonResult');
    
    try {
        const obj = JSON.parse(input);
        resBox.textContent = JSON.stringify(obj, null, 4);
    } catch (e) {
        resBox.textContent = "Error: Invalid JSON";
        showToast("Format JSON Salah!");
    }
}

// Helper untuk copy hasil dari div result
function copyResult(element) {
    if(element.textContent && element.textContent !== '...' && element.textContent !== 'Klik tombol di atas') {
        copyText(element.textContent);
    }
}
