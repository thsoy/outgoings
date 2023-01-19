import { FastifyInstance } from 'fastify';

const generateAccessToken = async (fastify: FastifyInstance) => {
	fastify.jwt.sign({});
};
