import fastify from 'fastify';

import routes from '@routes';
// import auth from '@middleware/auth';
import { AppDataSource } from '@db/data-source';
import { FastifyInstance } from 'fastify';
import fastifyPlugin from 'fastify-plugin';

const server = fastify({ logger: true });
server.register(routes);

const greetDecorator = (fastify: FastifyInstance) => {
	fastify.decorate('greet', () => 'greet message');
};
const hiDecorator = (fastify: FastifyInstance) => {
	fastify.decorate('hi', () => 'hi message');
};
const utilityDecorator = (fastify: FastifyInstance) => {
	fastify.decorate('hi', () => `${(fastify.hi(), fastify.greet())}`);
};
server.register(fastifyPlugin(greetDecorator, { name: 'greet' }));
server.register(fastifyPlugin(hiDecorator, { name: 'hi' }));
server.register(fastifyPlugin(utilityDecorator, { dependencies: ['greet', 'hi'] }));

// server.register(auth);
// server.addHook('onRequest', async (request, reply) => {
// 	try {
// 		const response = await request.jwtVerify();
// 		console.log('onRequest', response);
// 	} catch (err) {
// 		reply.send(err);
// 	}
// });
// server.register(rawBody, {
// 	field: 'rawBody', // change the default request.rawBody property name
// 	global: false, // add the rawBody to every request. **Default true**
// 	encoding: 'utf8', // set it to false to set rawBody as a Buffer **Default utf8**
// 	runFirst: true, // get the body before any preParsing hook change/uncompress it. **Default false**
// 	routes: [], // array of routes, **`global`** will be ignored, wildcard routes not supported
// });
// server.addContentTypeParser('text/json', { parseAs: 'string' }, server.getDefaultJsonParser('ignore', 'ignore'));
// server.addContentTypeParser('application/json', { parseAs: 'string' }, function (req: FastifyRequest, body: string, done: ContentTypeParserDoneFunction) {
// 	try {
// 		done(null, JSON.parse(body as string));
// 	} catch (e) {
// 		const error = e as FastifyError;
// 		error.statusCode = 400;
// 		done(error, undefined);
// 	}
// });

// server.addContentTypeParser('text/json', { parseAs: 'string' }, server.getDefaultJsonParser('ignore', 'ignore'));
// server.addContentTypeParser(
//   "application/jsoff",
//   function (request, payload, done) {
//     jsoffParser(payload, function (err, body) {
//       done(err, body);
//     });
//   }
// );

// // Handle multiple content types with the same function
// server.addContentTypeParser(
//   ["text/xml", "application/xml"],
//   function (request, payload, done) {
//     xmlParser(payload, function (err, body) {
//       done(err, body);
//     });
//   }
// );

// // Async is also supported in Node versions >= 8.0.0
// server.addContentTypeParser(
//   "application/jsoff",
//   async function (request, payload) {
//     var res = await jsoffParserAsync(payload);

//     return res;
//   }
// );

// // Handle all content types that matches RegExp
// server.addContentTypeParser(/^image\/.*/, function (request, payload, done) {
//   imageParser(payload, function (err, body) {
//     done(err, body);
//   });
// });

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
