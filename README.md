### 🦕Pitch de apresentação do projeto: https://youtu.be/f7kMKpcDsA4?si=-U3hMHPlY1Y-qhwZ

### 🦕Video de apresentação da prova de conceito e da implementação com o banco de dados:https://drive.google.com/drive/folders/14cImjhszfrjni1Ivq2j80EbacCW6lBnW?usp=sharing

# 👩🏼‍💻Configurações e implementação do software:
Dependências necessárias: 
- go version go1.22.2
- psql (15.7)
- Arquivos presentes nesse repositório

## Etapas necessárias para execução do banco de dados:
### - Criação do banco de dados:
  - Entrar no terminal do postgres: `psql -U postgres`
  - Criação do banco de dados:   `CREATE DATABASE api_projeto_integrador;`
  - Entrar no banco de dados como super usuário `psql -h localhost -p 5432 -U postgres -d api_projeto_integrador`
### - Criação do usuário:
  - Criação do usuário: `CREATE USER user_api WITH PASSWORD '1234';`
  - Atribuição de permissões para o usuário: `GRANT INSERT, SELECT, UPDATE, DELETE ON TABLE clientes TO user_api;`
### - Criação da tabela (dentro do terminal do banco de dados)
```
    CREATE TABLE Paciente (
        Id SERIAL PRIMARY KEY,
        NomeCompleto VARCHAR(255), 
        Endereco VARCHAR(255),
        Bairro VARCHAR(100), 
        Cpf VARCHAR(14), 
        DataDeNascimento DATE, 
        Sexo VARCHAR(20), 
        NomeDaMae VARCHAR(255), 
        Microarea INT,
        Email VARCHAR(100),
        Genero VARCHAR(20), 
        DataCadastro TIMESTAMP,
        OrientacaoSexual VARCHAR(50),
        PossuiDeficiencia VARCHAR(250),
        ConsumoTabaco VARCHAR(250),
        ConsumoAlcool VARCHAR(250), 
        ConsomeTabaco BOOLEAN,
        FeridasBoca BOOLEAN,
        ConsomeAlcool BOOLEAN,
        Telefone VARCHAR(20), 
        Atividade BOOLEAN
    );
```
## Execução do back-end:
 - Navegue até a pasta back-end no repositório pelo terminal
 - Utilize `go get ./...` para baixar todos os pacotes externos necessários para a execução do código
 - Executa a API com `go run main.go`
 - Acesse o frontend pelo localhost8000

## 🖌️Funcionalidades principais:
- Sistema de fácil acesso e navegabilidade;

- Cadastro detalhado de pacientes que se encaixam nos fatores de risco;

- Filtragem de dados dos pacientes para uma rápida busca entre os cadastrados;

- Possibilidade de edição de dados e inativação de pacientes;

- Mapa interativo.

