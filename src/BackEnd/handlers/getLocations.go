package handlers

import (
	"encoding/json"
	"net/http"
	"API-Backend/global"
)

func GetLocations(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	json.NewEncoder(w).Encode(global.Global_locations)
}