package models

import "projeto-integrador-database/db"

func Insert(paciente Paciente) (id int64, err error) {
	conn, err := db.OpenConnection()
	if err != nil {
		return
	}
	defer conn.Close()

	sql := `INSERT INTO pacientes (id, Nome_Completo, Endereco, Bairro, Cpf, Data_De_Nascimento, Sexo, Nome_Da_Mae, Microarea, Email, Genero, Data_Cadastro, Orientacao_Sexual, Possui_Deficiencia, Consumo_Tabaco, Consumo_Alcool, Consome_Tabaco, Feridas_Boca, Consome_Alcool, Telefone, Atividade) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21) RETURNING id`

	err = conn.QueryRow(sql, paciente.Id, paciente.NomeCompleto, paciente.Endereco, paciente.Bairro, paciente.Cpf, paciente.DataDeNascimento, paciente.Sexo, paciente.NomeDaMae, paciente.Microarea, paciente.Email, paciente.Genero, paciente.DataCadastro, paciente.OrientacaoSexual, paciente.PossuiDeficiencia, paciente.ConsumoTabaco, paciente.ConsumoAlcool, paciente.ConsomeTabaco, paciente.FeridasBoca, paciente.ConsomeAlcool, paciente.Telefone, paciente.Atividade).Scan(&id)

	return
}
