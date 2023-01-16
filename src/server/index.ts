import fastify from 'fastify';
import routes from '@routes';
import { AppDataSource } from 'src/db/data-source';

const server = fastify({ logger: true });
server.register(routes);

AppDataSource.initialize()
	.then(() => {})
	.catch(e => console.log(e));

server
	.listen({ port: 4000 })
	.then(address => console.log(`server listening on ${address}`))
	.catch(err => {
		console.log('Error starting server:', err);
		process.exit(1);
	});

export default server;
