let pacienteData = {};

document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const cpf = document.getElementById("cpf-input").value;

    fetch(`http://localhost:9000/search?q=${cpf}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data); 

        if (data.length > 0) {
            var elemento = document.getElementById('popup');
            elemento.setAttribute('hidden', true);

            switch (localStorage.getItem('botaoClicado')) {
                case "endereco":
                    var elemento2 = document.getElementById('popupEndereco');
                    elemento2.removeAttribute('hidden');
                    break;
            
                case "email":
                    var elemento2 = document.getElementById('popupEmail');
                    elemento2.removeAttribute('hidden');
                    break;
                case "inativar":
                    var elemento2 = document.getElementById('popupInativar');
                    elemento2.removeAttribute('hidden');
                    break;
            }
            let h2Element = document.getElementById('nome');
            let h2Element2 = document.getElementById('nome2');
            let h2Element3 = document.getElementById('nome3')


            
            const paciente = data[0]; 
            pacienteData = { ...paciente }; // Copia os dados do paciente para o objeto pacienteData

            localStorage.setItem('id', pacienteData.id);
            localStorage.setItem('endereco', pacienteData.endereco);
            localStorage.setItem('bairro', pacienteData.bairro);
            localStorage.setItem('telefone', pacienteData.telefone);
            localStorage.setItem('email', pacienteData.email);
            localStorage.setItem('atividade', pacienteData.atividade);

            h2Element.textContent = pacienteData.nome_completo;
            h2Element2.textContent = pacienteData.nome_completo;
            h2Element3.innerHTML = 'Deseja inativar<br>' + pacienteData.nome_completo + '?';





            console.log(`Dados do paciente:`, pacienteData);
        } else {
            alert("Nenhum paciente encontrado com o CPF informado.");
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert("Erro ao buscar paciente.");
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var sim = document.getElementById('sim');
    sim.addEventListener('click', function() {
        localStorage.setItem('atividade', 'false');

            atualizarDado()
            var elemento = document.getElementById('popup3');
            elemento.removeAttribute('hidden');

            var elemento2 = document.getElementById('popupInativar');
            elemento2.setAttribute('hidden', true);
        });
});
document.addEventListener('DOMContentLoaded', function() {
    var nao = document.getElementById('nao');
    nao.addEventListener('click', function() {
            
            var elemento2 = document.getElementById('popupInativar');
            elemento2.setAttribute('hidden', true);
        });
});


function atualizarDado() {

    let formData = {
        Endereco: localStorage.getItem('endereco'),
        Bairro: localStorage.getItem('bairro'),
        Email: localStorage.getItem('email'),
        Telefone: localStorage.getItem('telefone'),
        Atividade: localStorage.getItem('atividade') === 'true'
    };
    let requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    };
    console.log(JSON.stringify(formData))
    let url = `http://localhost:9000/${localStorage.getItem('id')}`;

    fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log('Resposta da API:', data);

        })
        .catch(error => console.error('Erro ao enviar dados:', error));
}

document.getElementById('form2').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.querySelector('input[name="email"]').value;
    var telefone = document.querySelector('input[name="telefone"]').value;

    localStorage.setItem('email', email);
    localStorage.setItem('telefone', telefone);

    atualizarDado()
    var elemento = document.getElementById('popupEmail');
            elemento.setAttribute('hidden', true);
            var elemento2 = document.getElementById('popup3');
            elemento2.removeAttribute('hidden');

});
document.getElementById('form1').addEventListener('submit', function(event) {
    event.preventDefault();

    var endereco = document.querySelector('input[name="endereco"]').value;
    var bairro = document.querySelector('input[name="bairro"]').value;

    localStorage.setItem('endereco', endereco);
    localStorage.setItem('bairro', bairro);
    atualizarDado()
    var elemento = document.getElementById('popupEndereco');
    elemento.setAttribute('hidden', true);
    var elemento2 = document.getElementById('popup3');
    elemento2.removeAttribute('hidden');
});


