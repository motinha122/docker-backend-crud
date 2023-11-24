exports.usersRoutes = (fastify) => {
    fastify.get("/user", (request, reply) => {
        fastify.mysql.query(
            "SELECT id, name, email FROM users",
            function onResult(error, result){
                reply.send(error || result);
            }
        );
    });

    fastify.post("/user", (request, reply) => {
        fastify.mysql.query(
            `INSERT INTO users (id, name, email) VALUES (
            '${request.body.id}',
            '${request.body.name}',
            '${request.body.email}'
            )`,
            function onResult(error, result){
                reply.send(error || result);
            }
        );
    });

    fastify.get("/user/:id", (request, reply) => {
        fastify.mysql.query(
            `SELECT id, name, email FROM users WHERE users.id = ${Number(request.params.id)}`,
            function onResult(error, result){
                reply.send(error || result);
            }
        );
    });

    fastify.put("/user/:id", (request, reply) => {
        fastify.mysql.query(
            `UPDATE users SET
            name = '${request.body.name}',
            email = '${request.body.email}' 
            WHERE users.id = ${Number(request.params.id)}`,
            function onResult(error, result){
                reply.send(error || result);
            }
        );
    });

    fastify.delete("/user/:id", (request, reply) => {
        fastify.mysql.query(
            `DELETE FROM users WHERE users.id = ${Number(request.params.id)}`,
            function onResult(error, result){
                reply.send(error || result);
            }
        );
    });

}