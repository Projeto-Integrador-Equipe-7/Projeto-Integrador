let pacientesArray = [];

window.onload = function GetList() {
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
            pacientesArray = data;
            console.log('Todos os dados de pacientes salvos no array:', pacientesArray);


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


    const row = document.createElement('tr');

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

    tableBody.appendChild(row);
}
function formatDate(isoDate) {
    const date = new Date(isoDate);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

document.addEventListener('DOMContentLoaded', function () {
    const searchBar = document.getElementById('search-bar');

    searchBar.addEventListener('input', function () {
        const query = searchBar.value;
        if (query.length > 0) {
            fetch(`http://localhost:9000/search?q=${encodeURIComponent(query)}`)
                .then(response => response.json())
                .then(data => {
                    pacientesBuscados = data;
                    console.log('Todos os dados de pacientes salvos no array:', pacientesArray);

                    limparTabela()

                    pacientesBuscados.forEach((paciente, index) => {
                        console.log(`Paciente ${index + 1}:`, paciente);
                        addPacienteToTable(paciente);
                    });
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }
        else{
            limparTabela()
            loadAllData()
        }
    });
});
function limparTabela() {
    // Seleciona a tabela pelo ID
    const tabela = document.getElementById('table_body');
    
    // Seleciona o tbody da tabela
    const tbody = tabela.getElementsByTagName('tbody')[0];
    
    // Define o conteúdo do tbody como vazio, removendo todas as linhas
    tbody.innerHTML = '';
}