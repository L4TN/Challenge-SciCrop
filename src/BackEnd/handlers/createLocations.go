package handlers

import (
	"encoding/json"
	"net/http"
	"API-Backend/entities"
	"API-Backend/global"
)

func CreateLocations(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	var location entities.LocationEntity 
	_ = json.NewDecoder(r.Body).Decode(&location)
	location.ID = len(global.Global_locations) + 1
	global.Global_locations = append(global.Global_locations, location)
	json.NewEncoder(w).Encode(location)
}

