import { OUTGOINGS_TYPE } from '@enum/outgoings';

export interface IOutgoings {
	date: Date;
	amount: number;
	category?: OUTGOINGS_TYPE;
	title?: string;
	contents?: string;
	icon?: string;
}
