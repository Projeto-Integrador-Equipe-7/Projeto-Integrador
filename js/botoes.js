// Certifique-se de que o DOM está completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    var entrarBtn = document.getElementById('entrarBtn');
    
    if (entrarBtn) {
        entrarBtn.addEventListener('click', function() {
            window.location.href = 'home.html';
        });
    }
});

/* ALTERA A PÁGINA HOME PARA A PÁGINA DE NOTIFICAÇÃO
document.addEventListener('DOMContentLoaded', function() {
    var notificationIcon = document.getElementById('notification-icon');
        notificationIcon.addEventListener('click', function() {
            // Redireciona para a página desejada ou executa outra ação
            window.location.href = 'index.html';      COLOCAR O NOME DA PÁGINA AQUI QUANDO ELA ESTIVER PRONTA
        });
});
*/