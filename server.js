const fastify = require('fastify')({ logger: true });

fastify.get('/foo/', async () => ({ message: 'foo' }))

fastify.get('/foo/bar/', async () => ({ message: 'bar' }));

fastify.get('/foo/bar/baz/', async () => ({ message: 'baz' }));

const start = async () => {
  const url = await fastify.listen({ port: 3042, host: '127.0.0.1' });
  console.log(`Server is running on ${url}`);
};

start();