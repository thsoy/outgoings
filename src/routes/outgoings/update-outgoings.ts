import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

const updateOutgoings = async (fastify: FastifyInstance) => {
	fastify.post('/:id', async (request: FastifyRequest, reply: FastifyReply) => {
		return { hello: 'world' };
	});
};
export default updateOutgoings;
