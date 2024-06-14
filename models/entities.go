package models

import "time"

type Paciente struct {
	Id                int64     `json:"id"`
	NomeCompleto      string    `json:"nome_completo"`
	Endereco          string    `json:"endereco"`
	Bairro            string    `json:"bairro"`
	Cpf               string    `json:"cpf"`
	DataDeNascimento  time.Time `json:"data_de_nascimento"`
	Sexo              string    `json:"sexo"`
	NomeDaMae         string    `json:"nome_da_mae"`
	Microarea         int       `json:"microarea"`
	Email             string    `json:"email"`
	Genero            string    `json:"genero"`
	DataCadastro      time.Time `json:"data_cadastro"`
	OrientacaoSexual  string    `json:"orientacao_sexual"`
	PossuiDeficiencia bool      `json:"possui_deficiencia"`
	ConsumoTabaco     bool      `json:"consumo_tabaco"`
	ConsumoAlcool     bool      `json:"consumo_alcool"`
	ConsomeTabaco     bool      `json:"consome_tabaco"`
	FeridasBoca       bool      `json:"feridas_boca"`
	ConsomeAlcool     bool      `json:"consome_alcool"`
	Telefone          string    `json:"telefone"`
	Atividade         bool      `json:"atividade"`
}
