const express = require('express');

const app = express();

app.use(express.json());

app.get("/course", (request, response) => {
    const query = request.query;
    console.log(query);
    return response.json(["curso 1", "curso 2", "curso 3"]);
});

app.post("/course", (request, response) => {
    const body = request.body;
    console.log(body);
    return response.json(["curso 1", "curso 2", "curso 4"]);
});

app.put("/course/:id", (request, response) => {
    const {id} = request.params;
    console.log(id)
    return response.json(["curso 5", "curso 2", "curso 4"]);
});

app.patch("/course/:id", (request, response) => {
    return response.json(["curso 5", "curso 6", "curso 4"]);
});

app.delete("/course/:id", (request, response) => {
    return response.json(["curso 5", "curso 6"]);
});


app.listen(3333);