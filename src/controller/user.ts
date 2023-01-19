import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

interface IUser {
	loginId: string;
	loginEmail: string;
	password: string;
}
const signUp = async (request: FastifyRequest, reply: FastifyReply) => {};

const authenticate = (server: FastifyInstance, request: FastifyRequest) => {};

const createJWT = (server: FastifyInstance, request: FastifyRequest) => {
	const payload: IUser = {
		loginId: 'thsoy',
		loginEmail: 'fpqlt0705@gmail.com',
		password: '1qaz@WSX',
	};
	return server.jwt.sign({ payload });
};
export default { signUp };
