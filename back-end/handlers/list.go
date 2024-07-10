package handlers

import (
	"encoding/json"
	"log"
	"net/http"
	"projeto-integrador-database/models"
)

func List(w http.ResponseWriter, r *http.Request) {
	pacientes, err := models.GetAll()
	if err != nil {
		log.Printf("Erro ao obter registros: %v", err)
	}

	w.Header().Add("Content-type", "application/json")
	json.NewEncoder(w).Encode(pacientes)
}
