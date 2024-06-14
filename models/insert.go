package models

import "projeto-integrador-database/db"

func Insert(paciente Paciente) (id int64, err error) {
	conn, err := db.OpenConnection()
	if err != nil {
		return 
	}
	defer conn.Close()

	sql := `INSERT INTO pacientes (id, NomeCompleto, Endereco, Bairro, Cpf, DataDeNascimento, Sexo, NomeDaMae, Microarea, Email, Genero, DataCadastro, OrientacaoSexual, PossuiDeficiencia, ConsumoTabaco, ConsumoAlcool, ConsomeTabaco, FeridasBoca, ConsomeAlcool, Telefone) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20) RETURNING id`
	
	err = conn.QueryRow(sql, paciente.Id, paciente.NomeCompleto, paciente.Endereco, paciente.Bairro, paciente.Cpf, paciente.DataDeNascimento, paciente.Sexo, paciente.NomeDaMae, paciente.Microarea, paciente.Email, paciente.Genero, paciente.DataCadastro, paciente.OrientacaoSexual, paciente.PossuiDeficiencia, paciente.ConsumoTabaco, paciente.ConsumoAlcool, paciente.ConsomeTabaco, paciente.FeridasBoca, paciente.ConsomeAlcool, paciente.Telefone, paciente.Atividade).Scan(&id)

	return
}