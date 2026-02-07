document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('openLoginModal').addEventListener('click', (e) => {
        e.preventDefault();
        openModal('loginModal');
    });

    document.getElementById('openRegisterModal').addEventListener('click', (e) => {
        e.preventDefault();
        openModal('registerModal');
    });

    document.getElementById('openSettingsModal').addEventListener('click', (e) => {
        e.preventDefault();
        openModal('settingsModal');
    });

    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });

    window.openModal = function(modalId) {
        document.getElementById(modalId).style.display = 'flex';
    };

    window.closeModal = function(modalId) {
        document.getElementById(modalId).style.display = 'none';
    };
});
