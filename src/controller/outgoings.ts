import { FastifyReply } from 'fastify';
import { FastifyRequest } from 'fastify';
import getRawBody from 'raw-body';
import { IOutgoings } from '@type/outgoings';
import { Outgoings } from '@modules/outgoings/entity';

const getOutgoings = async (request: FastifyRequest, reply: FastifyReply) => {};
const saveOutgoings = async (request: FastifyRequest<{ Body: IOutgoings }>, reply: FastifyReply) => {
	const reqParams: IOutgoings = request.body;
	console.log(reqParams.amount, reqParams.category);

	const { amount, category } = reqParams;
	const outgoing = new Outgoings();
	outgoing.amount = amount;
	outgoing.category = category;

	console.log('saveOutgoings', request.user);

	reply.send({ test: 'thsoy' });
};
export default { getOutgoings, saveOutgoings };
