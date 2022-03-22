const API = "https://api.themoviedb.org/3";

export function get(path) {
    return fetch(API + path, {
        headers: {
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MmViZDI3YmVhYTJmN2RjZmJlNjkzYTA3OGZjMmMyNyIsInN1YiI6IjYxMzRmZWMyYjdhYmI1MDA4ZTk5YmZiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hxQwZ5QuuVaQX1onSceWbLXzxLvfNdyVWVy7o6Qtd54",
                "Content-Type": "application/json;charset=utf-8", 
        },
    }).then((result) => result.json())
}