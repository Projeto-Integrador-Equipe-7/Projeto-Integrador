// Certifique-se de que o DOM está completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    var entrarBtn = document.getElementById('entrarBtn');
    
    if (entrarBtn) {
        entrarBtn.addEventListener('click', function() {
            window.location.href = 'home.html';
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    var ListBtn = document.getElementById('pacientList-button');
    
    if (ListBtn) {
        ListBtn.addEventListener('click', function() {
            window.location.href = 'consultarPaciente.html';
        });
    }
});

/* ALTERA A PÁGINA HOME PARA A PÁGINA DE NOTIFICAÇÃO*/
document.addEventListener('DOMContentLoaded', function() {
    var notificationIcon = document.getElementById('notification-icon');
        notificationIcon.addEventListener('click', function() {
            // Redireciona para a página desejada ou executa outra ação
            window.location.href = 'notificacoes.html';      //COLOCAR O NOME DA PÁGINA AQUI QUANDO ELA ESTIVER PRONTA
        });
});
document.addEventListener('DOMContentLoaded', function() {
    var AttBtn = document.getElementById('updatePacient-button');
    
    if (AttBtn) {
        AttBtn.addEventListener('click', function() {
            window.location.href = 'atualizarDados.html';
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    var cadastroBtn = document.getElementById('addPacient-button');
    cadastroBtn.addEventListener('click', function() {
            // Redireciona para a página desejada ou executa outra ação
            window.location.href = 'cadastro.html';      //COLOCAR O NOME DA PÁGINA AQUI QUANDO ELA ESTIVER PRONTA
        });
});
document.addEventListener('DOMContentLoaded', function() {
    var cadastroCompleto = document.getElementById('cadastroCompleto');
    cadastroCompleto.addEventListener('click', function() {
            window.location.href = 'home.html';
        });
});
