document.addEventListener('DOMContentLoaded', () => {
    // Event listeners para abrir os modais
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

    // Event listener para fechar modais ao clicar fora
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });

    // Funções para manipular os modais
    window.openModal = function(modalId) {
        document.getElementById(modalId).style.display = 'flex';
    };

    window.closeModal = function(modalId) {
        document.getElementById(modalId).style.display = 'none';
    };
});
