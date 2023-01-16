import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

const readOutgoings = async (fastify: FastifyInstance) => {
	fastify.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
		reply.send({ hello: 'world!!!!!' });
	});
};
export default readOutgoings;
