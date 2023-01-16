import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { outgoings } from '@controller';
const createOutgoings = async (fastify: FastifyInstance) => {
	fastify.post('/', {}, outgoings.saveOutgoings);
};
export default createOutgoings;
