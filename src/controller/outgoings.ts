import { FastifyReply } from 'fastify';
import { FastifyRequest } from 'fastify';

enum OUTGOINGS_TYPE {
	INCOME = 'income',
	EXPENDITURE = 'expenditure',
}
export interface IOutgoings {
	date: Date;
	amount: number;
	category?: OUTGOINGS_TYPE;
	title?: string;
	contents?: string;
	icon?: string;
}
export const OUTGOINGS_DATA: IOutgoings[] = [
	{
		date: new Date(),
		category: OUTGOINGS_TYPE.EXPENDITURE,
		amount: 10000,
		contents: '',
		icon: '',
	},
	{
		date: new Date(),
		category: OUTGOINGS_TYPE.INCOME,
		amount: 10000,
		contents: '',
		icon: '',
	},
	{
		date: new Date(),
		category: OUTGOINGS_TYPE.INCOME,
		amount: 10000,
		contents: '',
		icon: '',
	},
	{
		date: new Date(),
		category: OUTGOINGS_TYPE.EXPENDITURE,
		amount: 10000,
		contents: '',
		icon: '',
	},
	{
		date: new Date(),
		category: OUTGOINGS_TYPE.INCOME,
		amount: 10000,
		contents: '',
		icon: '',
	},
];
const getOutgoings = async (request: FastifyRequest, reply: FastifyReply) => {};
const saveOutgoings = async (request: FastifyRequest, reply: FastifyReply) => {
	const { params } = request;
	console.log('saveOutgoings', params);
	return { hello: 'stest' };
};
export default { getOutgoings, saveOutgoings };
