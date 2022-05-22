package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

type Location struct {
	ID  int       "json:id"
	Name string    "json:name"
	Loc  []float64 "json:loc"
}

var locations []Location

func getLocations(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", origin)
  w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
  w.Header().Set("Access-Control-Allow-Headers", "Accept, Accept-Language, Content-Type, YourOwnHeader")
	json.NewEncoder(w).Encode(locations)
}

func createLocation(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", origin)
  w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
  w.Header().Set("Access-Control-Allow-Headers", "Accept, Accept-Language, Content-Type, YourOwnHeader")

	var location Location
	_ = json.NewDecoder(r.Body).Decode(&location)
	location.ID = len(locations) + 1
	locations = append(locations, location)
	json.NewEncoder(w).Encode(location)


	

}

func main() {
	r := mux.NewRouter()

	locations = append(locations, Location{ID: 0, Name: "A", Loc: []float64{1.0, 2.0}})
	r.HandleFunc("/locations", getLocations).Methods("GET")
	r.HandleFunc("/locations", createLocation).Methods("POST")

	fmt.Println("Server is running on port 8080")
	log.Fatal(http.ListenAndServe(":8080", r))
}
