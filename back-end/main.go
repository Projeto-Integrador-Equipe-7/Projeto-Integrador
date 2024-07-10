package main

import (
	"fmt"
	"net/http"
	"projeto-integrador-database/configs"
	"projeto-integrador-database/handlers"

	"github.com/go-chi/chi"
	"github.com/go-chi/cors"
)

func main() {
	err := configs.Load()
	if err != nil {
		panic(err)
	}

	r := chi.NewRouter()

	r.Use(cors.Handler(cors.Options{
		AllowedOrigins:   []string{"*"},
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token"},
		ExposedHeaders:   []string{"Link"},
		AllowCredentials: false,
		MaxAge:           300, // Permissões CORS válidas por 5 minutos
	}))

	r.Post("/", handlers.Create)       //funcionando
	r.Put("/{id}", handlers.Update)    //funcionando
	r.Delete("/{id}", handlers.Delete) //funcionando
	r.Get("/{id}", handlers.Get)       //funcionando
	r.Get("/", handlers.List)          //funcionando
	r.Get("/search", handlers.Search)  // Adicionada rota de busca

	fs := http.FileServer(http.Dir("../front-end"))
	r.Handle("/*", fs)
	// Rota para o frontend na porta 8000
	go func() {
		fmt.Println("Servindo frontend na porta 8000...")
		http.ListenAndServe(":8000", fs)
	}()

	http.ListenAndServe(fmt.Sprintf(":%s", configs.GetServerPort()), r)
}
