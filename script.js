document.addEventListener('DOMContentLoaded', () => {
<<<<<<< HEAD
=======
    // Event listeners para abrir os modais
>>>>>>> ac76235caffd8fae44d03c1c675f308e42833026
    document.getElementById('openLoginModal').addEventListener('click', (e) => {
        e.preventDefault();
        openModal('loginModal');
    });
<<<<<<< HEAD

=======
>>>>>>> ac76235caffd8fae44d03c1c675f308e42833026
    document.getElementById('openRegisterModal').addEventListener('click', (e) => {
        e.preventDefault();
        openModal('registerModal');
    });
<<<<<<< HEAD

=======
>>>>>>> ac76235caffd8fae44d03c1c675f308e42833026
    document.getElementById('openSettingsModal').addEventListener('click', (e) => {
        e.preventDefault();
        openModal('settingsModal');
    });

<<<<<<< HEAD
=======
    // Event listener para fechar modais ao clicar fora
>>>>>>> ac76235caffd8fae44d03c1c675f308e42833026
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });

<<<<<<< HEAD
=======
    // Funções para manipular os modais
>>>>>>> ac76235caffd8fae44d03c1c675f308e42833026
    window.openModal = function(modalId) {
        document.getElementById(modalId).style.display = 'flex';
    };

    window.closeModal = function(modalId) {
        document.getElementById(modalId).style.display = 'none';
    };
});
