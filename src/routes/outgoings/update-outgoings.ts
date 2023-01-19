import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

const updateOutgoings = async (fastify: FastifyInstance) => {
	fastify.put('/', async (request: FastifyRequest, reply: FastifyReply) => {
		return { hello: 'world' };
	});
};
export default updateOutgoings;
