package main

import (
	"fmt"
	"net/http"
	"projeto-integrador-database/configs"
	"projeto-integrador-database/handlers"

	"github.com/go-chi/chi"
)

func main() {
	err := configs.Load()
	if err != nil {
		panic(err)
	}

	r := chi.NewRouter()
	r.Post("/", handlers.Create) //funcionando
	r.Put("/{id}", handlers.Update)  //funcionando
	r.Delete("/{id}", handlers.Delete) //funcionando
	r.Get("/{id}", handlers.Get) //funcionando
	r.Get("/", handlers.List) //funcionando

	http.ListenAndServe(fmt.Sprintf(":%s", configs.GetServerPort()), r)
}
