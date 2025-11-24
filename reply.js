const fastify = require('fastify')({ logger: true });

fastify.register(require('@fastify/reply-from'), {
  base: 'http://127.0.0.1:3042'
});

fastify.all('/foo/bar/*', async (request, reply) => reply.from(request.url));

const start = async () => {
  const url = await fastify.listen({ port: 4032, host: '127.0.0.1' });
  console.log(`Forwarding requests to ${url}`);
};

start();