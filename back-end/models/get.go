package models

import "projeto-integrador-database/db"

func Get(id int64) (paciente Paciente, err error) {
	conn, err := db.OpenConnection()
	if err != nil {
		return
	}
	defer conn.Close()

	row := conn.QueryRow(`SELECT * FROM pacientes WHERE id=$1`, id)

	err = row.Scan(&paciente.Id, &paciente.NomeCompleto, &paciente.Endereco, &paciente.Bairro, &paciente.Cpf, &paciente.DataDeNascimento, &paciente.Sexo, &paciente.NomeDaMae, &paciente.Microarea, &paciente.Email, &paciente.Genero, &paciente.DataCadastro, &paciente.OrientacaoSexual, &paciente.PossuiDeficiencia, &paciente.ConsumoTabaco, &paciente.ConsumoAlcool, &paciente.ConsomeTabaco, &paciente.FeridasBoca, &paciente.ConsomeAlcool, &paciente.Telefone, &paciente.Atividade)
	return
}