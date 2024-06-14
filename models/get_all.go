package models

import "projeto-integrador-database/db"

func GetAll() (pacientes []Paciente, err error) {
	conn, err := db.OpenConnection()
	if err != nil {
		return
	}
	defer conn.Close()

	rows, err := conn.Query(`SELECT * FROM pacientes`)
	if err != nil{
		return
	}

	for rows.Next(){
		var paciente Paciente

		err = rows.Scan(&paciente.Id, &paciente.NomeCompleto, &paciente.Endereco, &paciente.Bairro, &paciente.Cpf, &paciente.DataDeNascimento, &paciente.Sexo, &paciente.NomeDaMae, &paciente.Microarea, &paciente.Email, &paciente.Genero, &paciente.DataCadastro, &paciente.OrientacaoSexual, &paciente.PossuiDeficiencia, &paciente.ConsumoTabaco, &paciente.ConsumoAlcool, &paciente.ConsomeTabaco, &paciente.FeridasBoca, &paciente.ConsomeAlcool, &paciente.Telefone, &paciente.Atividade)

		if err != nil{
			continue
		}

		pacientes = append(pacientes, paciente)
	}
	return
}