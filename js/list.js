let pacientesArray = [];

window.onload = function GetList(){
    loadAllData();
}


function loadAllData() {
    const url = `http://localhost:9000/`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            pacientesArray = data; // Armazena os dados recebidos no array
            console.log('Todos os dados de pacientes salvos no array:', pacientesArray);

            // Acessando cada paciente individualmente e adicionando à tabela
            pacientesArray.forEach((paciente, index) => {
                console.log(`Paciente ${index + 1}:`, paciente);
                addPacienteToTable(paciente);
            });
        })
        .catch(error => {
            console.error('Houve um problema com a operação fetch:', error);
        });
}

function addPacienteToTable(paciente) {
    const tableBody = document.querySelector('#table_body tbody');

    // Crie uma nova linha e células para cada campo de paciente
    const row = document.createElement('tr');

    // Adicione as células à linha
    const cellId = document.createElement('td');
    cellId.textContent = paciente.nome_completo;
    row.appendChild(cellId);

    const cellNome = document.createElement('td');
    cellNome.textContent = paciente.cpf;
    row.appendChild(cellNome);

    const cellDataNascimento = document.createElement('td');
    try {
        cellDataNascimento.textContent = formatDate(paciente.data_de_nascimento);
    } catch (error) {
        console.error('Erro ao formatar a data de nascimento:', error);
        cellDataNascimento.textContent = 'Data inválida';
    }
    row.appendChild(cellDataNascimento);
    

    const cellMicroarea = document.createElement('td');
    cellMicroarea.textContent = paciente.microarea;
    row.appendChild(cellMicroarea);

    // Adicione mais células conforme necessário para outros campos

    // Adicione a linha ao tbody da tabela
    tableBody.appendChild(row);
}
function formatDate(isoDate) {
    const date = new Date(isoDate);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

