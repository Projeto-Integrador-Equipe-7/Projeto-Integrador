
// Função para formatar o CPF
function formatCPF(value) {
    // Remove todos os caracteres que não sejam números
    value = value.replace(/\D/g, '');
    
    // Adiciona os pontos e traço conforme o formato do CPF
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    
    return value;
}

// Função para aplicar a máscara de CPF ao campo de entrada
function applyCPFFormat(event) {
    // Obtém o valor atual do campo de entrada
    let inputValue = event.target.value;
    
    // Aplica a formatação de CPF ao valor atual
    let formattedValue = formatCPF(inputValue);
    
    // Atualiza o valor do campo de entrada com o valor formatado
    event.target.value = formattedValue;
}

// Seleciona o campo de entrada do CPF
let cpfInput = document.getElementById('cpf-input');

// Adiciona um ouvinte de eventos de entrada ao campo de entrada do CPF
cpfInput.addEventListener('input', applyCPFFormat);



function formatDate(input) {
    let value = input.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    let formattedValue = '';

    if (value.length > 0) {
        formattedValue += value.substring(0, 2); // Dia
    }
    if (value.length > 2) {
        formattedValue += '/' + value.substring(2, 4); // Mês
    }
    if (value.length > 4) {
        formattedValue += '/' + value.substring(4, 8); // Ano
    }

    input.value = formattedValue;
}

// Função para enviar os dados para a API
function enviarDados(event) {
    event.preventDefault();
    var popup = document.getElementById("popup");
    popup.removeAttribute("hidden");

    let formData = {
        Nome_Completo: document.querySelector('input[name="nome"]').value,
        Endereco: document.querySelector('input[name="endereco"]').value,
        Bairro: document.querySelector('input[name="bairro"]').value,
        Cpf: document.querySelector('input[name="cpf"]').value,
        Data_De_Nascimento: formatarData(document.querySelector('input[name="nascimento"]').value), // Converte a data para o formato esperado
        Sexo: document.querySelector('select[name="sexo"]').value,
        Nome_Da_Mae: document.querySelector('input[name="nomeMae"]').value,
        Microarea: parseInt(document.querySelector('select[name="microarea"]').value),

        Email: document.querySelector('input[name="email"]').value,
        Genero: document.querySelector('select[name="genero"]').value,
        Data_Cadastro: new Date().toISOString(),
        Orientacao_Sexual: document.querySelector('select[name="orientacao"]').value,
        Possui_Deficiencia: document.querySelector('input[name="deficiencia"]').value,
        Consumo_Tabaco: document.querySelector('input[name="ConsumoTabaco"]:checked')?.value || "false",
        Consumo_Alcool:(document.querySelector('input[name="ConsumoAlcool"]:checked')?.value || "") + (document.querySelector('input[name="ConsumoVinho"]:checked')?.value || ""),
        Consome_Tabaco:document.querySelector('input[name="tabaco"]:checked')? true : false,
        Feridas_Boca: document.querySelector('input[name="feridas"]:checked')? true : false,
        consome_alcool: document.querySelector('input[name="alcool"]:checked')? true : false,
        Telefone: document.querySelector('input[name="telefone"]').value,
        Atividade: true
    };
if(formData.Consumo_Alcool == ""){
    formData.Consumo_Alcool = "false"
}
console.log(JSON.stringify(formData))
    // Opções para a requisição fetch
    let requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    };

    let url = 'http://localhost:9000/';

    fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log('Resposta da API:', data);

        })
        .catch(error => console.error('Erro ao enviar dados:', error));
}

// Função para formatar a data de dd/mm/aaaa para ISO 8601 (aaaa-mm-ddT00:00:00Z)
function formatarData(data) {
    let partes = data.split('/');
    if (partes.length === 3) {
        return `${partes[2]}-${partes[1]}-${partes[0]}T00:00:00Z`;
    } else {
        return data;
    }
}

// Adiciona um event listener para o evento de submit do formulário
document.querySelector('.form').addEventListener('submit', enviarDados);

