import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { createOutgoings, readOutgoings, removeOutgoings, updateOutgoings } from './outgoings';

const routes = (fastify: FastifyInstance, opt: FastifyPluginOptions, done: (err?: Error) => void) => {
	fastify.register(createOutgoings);
	fastify.register(readOutgoings);
	fastify.register(removeOutgoings);
	fastify.register(updateOutgoings);
	done();
};

export default routes;
