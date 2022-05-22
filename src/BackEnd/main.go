package main

import (
	"API-Backend/entities"
	"API-Backend/handlers"
	"fmt"
	"log"
	"net/http"
	"github.com/gorilla/mux"
	"API-Backend/global"
)



func main() {
	r := mux.NewRouter()

	global.Global_locations = append(global.Global_locations, entities.LocationEntity{ID: 0, Name: "A", Loc: []float64{1.0, 2.0}})
	r.HandleFunc("/locations", handlers.GetLocations).Methods("GET")
	r.HandleFunc("/locations", handlers.CreateLocations).Methods("POST")

	fmt.Println("Server is running on port 8080")
	log.Fatal(http.ListenAndServe(":8080", r))
}
