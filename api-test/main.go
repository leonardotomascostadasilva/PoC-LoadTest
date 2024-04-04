package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func main() {
	rotas := mux.NewRouter().StrictSlash(true)

	rotas.HandleFunc("/", getAll).Methods("GET")
	var port = ":3000"
	fmt.Println("Server running in port:", port)
	log.Fatal(http.ListenAndServe(port, rotas))

}

type Person struct {
	Name string
}

var persons = []Person{

	Person{Name: "Heisenberg"},
	Person{Name: "Pinkman"},
}

func getAll(w http.ResponseWriter, r *http.Request) {

	json.NewEncoder(w).Encode(persons)
}
