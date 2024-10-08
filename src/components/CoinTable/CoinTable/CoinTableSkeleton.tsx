import { FC, memo } from 'react';
import { Skeleton } from 'components/UI/Skeleton/Skeleton';

import classnames from 'classnames';
import classes from './CoinTable.module.scss';

interface CoinTableSkeletonProps {
	withHeader: boolean;
	className?: string;
}

export const CoinTableSkeleton: FC<CoinTableSkeletonProps> = memo((props) => {
	const { withHeader, className } = props;

	return (
		<table
			className={classnames(classes.table, className, classes.loading)}
		>
			{withHeader && (
				<thead className={classes.header}>
					<tr className={classes.row}>
						{new Array(7).fill(0).map((_, index) => (
							// eslint-disable-next-line react/no-array-index-key
							<th key={index}>
								<Skeleton width={125} height={30} radius='10px' />
							</th>
						))}
					</tr>
				</thead>
			)}
			<tbody>
				{new Array(12).fill(0).map((_, index) => (
					// eslint-disable-next-line react/no-array-index-key
					<tr key={index}>
						<th colSpan={7}>
							<Skeleton width='100%' height={35} radius='10px' />
						</th>
					</tr>
				))}
			</tbody>
		</table>
	);
});
