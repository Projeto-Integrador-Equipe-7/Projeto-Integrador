let pacienteData = {};
let id = 0
let endereco = ""
let bairro = ""
let telefone = ""
let atividade = true
let email = ""

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
            endereco = pacienteData.endereco
            bairro = pacienteData.bairro
            telefone = pacienteData.telefone
            email = pacienteData.email
            atividade = pacienteData.atividade
            
            const paciente = data[0]; 
            pacienteData = { ...paciente }; // Copia os dados do paciente para o objeto pacienteData


            h2Element.textContent = pacienteData.nome_completo;





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
