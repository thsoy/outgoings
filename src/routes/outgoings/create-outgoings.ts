import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { outgoings } from '@controller';
const createOutgoings = async (fastify: FastifyInstance) => {
	fastify.hi();
	fastify.post('/', { config: { rawBody: true } }, outgoings.saveOutgoings);
};
export default createOutgoings;
