package handlers

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"projeto-integrador-database/models"
)

func Create(w http.ResponseWriter, r *http.Request) {
	var paciente models.Paciente 

	err := json.NewDecoder(r.Body).Decode(&paciente)

	if err != nil{
		log.Printf("Erro ao fazer decode do json: %v", err)
		http.Error(w, http.StatusText(http.StatusInternalServerError), http.StatusInternalServerError)
		return
	}

	id, err := models.Insert(paciente)

	var resp map[string]any
	if err != nil{
		resp = map[string]any{
			"Error": true,
			"Message":fmt.Sprintf("Ocorreu um erro ao tentar inserir: %v", err),
		}
	} else {
		resp = map[string]any{
			"Error": false,
			"Message":fmt.Sprintf("Paciente inserido com sucesso! ID: %d", id),
		}
	}

	w.Header().Add("Content-type", "application/json")
	json.NewEncoder(w).Encode(resp)
}