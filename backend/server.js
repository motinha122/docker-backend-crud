const fastify = require('fastify')({
  logger: false
});

fastify.register(require('@fastify/mysql'), {
    connectionString: 'mysql://root:root9090@localhost:3306'
});

require('./routes/routes')(fastify);

fastify.listen({ port: 3000 }, (error, address) => {
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("servidor rodando", address);
})