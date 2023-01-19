import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { createOutgoings, readOutgoings, removeOutgoings, updateOutgoings } from './outgoings';
import { signUp, generateAccessToken } from './user';

const routes = (fastify: FastifyInstance, opt: FastifyPluginOptions, done: (err?: Error) => void) => {
	fastify.register(generateAccessToken);
	fastify.register(signUp);
	fastify.register(createOutgoings);
	fastify.register(readOutgoings);
	fastify.register(removeOutgoings);
	fastify.register(updateOutgoings);
	done();
};

export default routes;
