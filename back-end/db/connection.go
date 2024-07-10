package db

import (
	"database/sql"
	"fmt"
	"projeto-integrador-database/configs"

	_ "github.com/lib/pq"
)

func OpenConnection() (*sql.DB, error) {
	conf := configs.GetDB()

	// Configurar sslmode corretamente
	sslmode := "disable" // Aqui você pode ajustar conforme necessário

	sc := fmt.Sprintf("host=%s port=%s user=%s password=%s dbname=%s sslmode=%s",
		conf.Host, conf.Port, conf.User, conf.Pass, conf.Database, sslmode)

	conn, err := sql.Open("postgres", sc)
	if err != nil {
		return nil, err
	}

	err = conn.Ping()
	if err != nil {
		conn.Close()
		return nil, err
	}

	return conn, nil
}
