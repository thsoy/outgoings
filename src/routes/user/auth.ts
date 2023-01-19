import fastify, { FastifyError } from 'fastify';
import { FastifyReply } from 'fastify';
import { FastifyInstance, FastifyRequest } from 'fastify';
interface IUser {
	loginId: string;
	loginEmail: string;
	password: string;
}

// const validateAccessToken = async (fastify: FastifyInstance) => {
// 	fastify.get('/api/validateAccessToken', { preValidation: [fastify.authenticate] });
// };
const generateAccessToken = async (fastify: FastifyInstance) => {
	fastify.post('/generateAccessToken', (request: FastifyRequest<{ Body: IUser }>, reply: FastifyReply) => {
		try {
			const { loginId, loginEmail, password } = request.body;

			const token = fastify.jwt.sign({ email: loginEmail, userid: loginId, password }, { expiresIn: 86400 });
			reply.statusCode = 200;
			reply.send({ token, email: loginEmail });
		} catch (e) {
			const error = e as FastifyError;
		}
	});
};

export default generateAccessToken;
