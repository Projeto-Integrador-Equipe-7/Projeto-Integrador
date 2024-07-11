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

            








            const paciente = data[0]; 
            pacienteData = { ...paciente }; // Copia os dados do paciente para o objeto pacienteData

            // Exemplo de como acessar e exibir dados
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