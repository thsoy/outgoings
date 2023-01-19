import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

const removeOutgoings = async (fastify: FastifyInstance) => {
	fastify.delete('/', async (request: FastifyRequest, reply: FastifyReply) => {
		return { hello: 'world' };
	});
};
export default removeOutgoings;
