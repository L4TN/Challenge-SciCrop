package entities

type LocationEntity struct {

	ID int `json:"id"`
	Name string    `json:"name"`
	Loc  []float64 `json:"loc"`
}

