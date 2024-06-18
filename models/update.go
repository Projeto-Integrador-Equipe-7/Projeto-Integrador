package models

import "projeto-integrador-database/db"

func Update(id int64, paciente Paciente) (int64, error) {
	conn, err := db.OpenConnection()
	if err != nil {
		return 0, err
	}
	defer conn.Close()

	res, err := conn.Exec(`UPDATE pacientes SET endereco=$1, email=$2, telefone=$3, atividade=$4 WHERE id=$5`, paciente.Endereco, paciente.Email, paciente.Telefone, paciente.Atividade, id)
	if err != nil {
		return 0, err
	}

	return res.RowsAffected()
}