
export const SortField = {
	rank: 'rank',
	name: 'name',
	price: 'price',
	change: 'change',
	'24hVolume': '24hVolume',
	marketCap: 'marketCap',
} as const;

export const SortDirection = {
	ascending: 'ascending',
	descending: 'descending',
} as const;