# SciCrop Geolocalizations-App Challenge
This repository has the objective of elaborating and solving the challenge proposed by the company SciCrop by creating an application that meets the requirements set out below:

| Functional Requiriments                | Non-Functional Requiriments                                   | 
| :----------------------:               | :----------------------------------------------------------:  | 
| User can register a new Location       | The system must run on web platform (Portability)             | 
| List     Locations                     | The system must use a Javascript library (Implementation )    |                                               
| View Locations in Map                  | the system must run with the SQL Database. (Interoperability) | 


## Software Architecture & System Architecture
![Microservices Image](https://user-images.githubusercontent.com/75400361/169652789-c16708cb-dd6e-4abb-b030-1d6dc566ace9.png)
A RESTful API example for simple todo application with Go
It is a just simple tutorial or example for making simple RESTful API with Go using **gorilla/mux** (A nice mux library) and **gorm** (An ORM for Go)

## Install Golang
Make sure you have Go 1.18 or higher installed.

https://golang.org/doc/install

## Environment Config

Set-up the standard Go environment variables according to latest guidance (see https://golang.org/doc/install#install).

## Install Dependencies

From the project root, run:
```
go build ./...
go test ./...
go mod tidy
```

## Testing
From the project root, run:
```
go test ./...
```
or
```
go test ./... -cover
```
or
```
go test -v ./... -cover
```
depending on whether you want to see test coverage and how verbose the output you want.


## Installation & Run
```bash
# Download this project
git clone https://github.com/L4TN/scicrop-geoapp.git
```

Before running API server, you should set the database config with yours or set the your database config with my values on [config.go](https://github.com/mingrammer/go-todo-rest-api-example/blob/master/config/config.go)
```go
func GetConfig() *Config {
	return &Config{
		DB: &DBConfig{
			Dialect:  "mysql",
			Username: "guest",
			Password: "Guest0000!",
			Name:     "todoapp",
			Charset:  "utf8",
		},
	}
}
```

```bash
# Build and Run
cd go-todo-rest-api-example
go build
./go-todo-rest-api-example

sqlite3
https://www.sqlite.org/download.html
https://www.prisma.io/dataguide/sqlite/setting-up-a-local-sqlite-database#setting-up-sqlite-on-linux
https://linuxhint.com/install_sqlite_browser_ubuntu_1804/
https://github.com/stefanocudini/leaflet-list-markers
https://codewithmukesh.com/blog/implementing-crud-in-golang-rest-api/#Prerequisites

# API Endpoint : http://127.0.0.1:3000
```

## Structure
```
├── app
│   ├── app.go
│   ├── handler          // Our API core handlers
│   │   ├── common.go    // Common response functions
│   │   ├── projects.go  // APIs for Project model
│   │   └── tasks.go     // APIs for Task model
│   └── model
│       └── model.go     // Models for our application
├── config
│   └── config.go        // Configuration
└── main.go
```

## API

#### /projects
* `GET` : Get all projects
* `POST` : Create a new project

#### /projects/:title
* `GET` : Get a project
* `PUT` : Update a project
* `DELETE` : Delete a project

#### /projects/:title/archive
* `PUT` : Archive a project
* `DELETE` : Restore a project 

#### /projects/:title/tasks
* `GET` : Get all tasks of a project
* `POST` : Create a new task in a project

#### /projects/:title/tasks/:id
* `GET` : Get a task of a project
* `PUT` : Update a task of a project
* `DELETE` : Delete a task of a project

#### /projects/:title/tasks/:id/complete
* `PUT` : Complete a task of a project
* `DELETE` : Undo a task of a project

## Clean Development pratices and Patterns
This section describes the set of practices in writing software for greater code readability and maintainability based on the Clean code book that were applied in this project:

## Todo

- [ ] Construct Front-End CRUD with Leaflet.js
- [x] Support basic REST APIs.
- [x] Organize the code with packages
- [ ] Make modeling Database with MER/DER and Normalization to use a Database like SQLite or MySQL.
- [ ] ORM like Gorm to interact with a Relational-Database.
- [ ] Support Authentication with user and Bearer JSON for securing the APIs.
- [ ] Make Unit Tests.
- [ ] Make docs with GoDoc.
- [ ] Building a automatic deployment process with Makefile and GitHub Pages Deploy Action 🚀 .


