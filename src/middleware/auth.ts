import { FastifyError, FastifyReply, FastifyInstance, FastifyRequest, FastifyPluginOptions } from 'fastify';
import jwt from '@fastify/jwt';
import fp from 'fastify-plugin';
import {} from 'fastify';

const authenticate = fp(async (fastify: FastifyInstance, options: FastifyPluginOptions, next: (error?: FastifyError) => void) => {
	fastify.register(jwt, { secret: 'SUPERMASTERSECRET' });
	fastify.decorate('authenticate', async (request: FastifyRequest, reply: FastifyReply) => {
		try {
			await request.jwtVerify();
		} catch (e) {
			const error = e as FastifyError;
			reply.send(error);
		}
	});
	next();
});
export default authenticate;
