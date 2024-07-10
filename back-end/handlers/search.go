package handlers

import (
	"encoding/json"
	"log"
	"net/http"
	"projeto-integrador-database/models"

)

func Search(w http.ResponseWriter, r *http.Request) {
	query := r.URL.Query().Get("q")
	if query == "" {
		http.Error(w, "Missing search query", http.StatusBadRequest)
		return
	}

	pacientes, err := models.Search(query)
	if err != nil {
		log.Printf("Erro ao buscar registros: %v", err)
		http.Error(w, http.StatusText(http.StatusInternalServerError), http.StatusInternalServerError)
		return
	}

	w.Header().Add("Content-type", "application/json")
	json.NewEncoder(w).Encode(pacientes)
}
