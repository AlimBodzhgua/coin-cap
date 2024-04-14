import { ICoin } from './coin';
import { HistoryType } from './converter';

export interface IUser {
	id: string;
	email: string;
	password: string;
	login: string;
	imageUrl: string;
	isEmailVerified: boolean;
	conversionHistory?: HistoryType[];
	watchList: IWatchList;
}

export interface IWatchList {
	ids: string[];
	coins: ICoin[];
}