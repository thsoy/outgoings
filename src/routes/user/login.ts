import { user } from '@controller';
import { FastifyInstance, FastifyRequest } from 'fastify';

const signUp = async (fastify: FastifyInstance) => {
	fastify.post('/signUp', { config: { rawBody: true } }, user.signUp);
};

export default signUp;
