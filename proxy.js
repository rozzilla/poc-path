const fastify = require('fastify')({ logger: true });

fastify.register(require('@fastify/http-proxy'), {
  upstream: 'http://127.0.0.1:3042',
  routes: ['/foo/bar/*']
});

const start = async () => {
  const url = await fastify.listen({ port: 4032, host: '127.0.0.1' });
  console.log(`Proxy server is running on ${url}`);
};

start();