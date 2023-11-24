const { usersRoutes } = require("./users");

module.exports = (fastify) => {
    usersRoutes(fastify);
};