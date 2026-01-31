// js/main.js

// 1. Theme Management (Dark/Light)
const themeToggleBtn = document.getElementById('themeToggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if(themeToggleBtn) updateBtnText(currentTheme);
}

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            updateBtnText('light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            updateBtnText('dark');
        }
    });
}

function updateBtnText(theme) {
    if(theme === 'dark') {
        themeToggleBtn.textContent = '☀️ Aktifkan Light Mode';
    } else {
        themeToggleBtn.textContent = '🌙 Aktifkan Dark Mode';
    }
}

// 2. Global Toast Notification
function showToast(message) {
    const toast = document.getElementById('toast');
    if(toast) {
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    } else {
        alert(message);
    }
}

// 3. Global Copy Function
function copyText(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast('Berhasil disalin: ' + text);
    }).catch(err => {
        showToast('Gagal menyalin');
    });
}

// 4. Utility Reset
function resetApp() {
    if(confirm('Yakin ingin mereset pengaturan?')) {
        localStorage.clear();
        location.reload();
    }
}
