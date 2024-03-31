import { FC } from 'react';
import { ColorRing } from 'react-loader-spinner';

import classes from './LoaderRing.module.scss';
import classnames from 'classnames';

interface LoaderRingProps {
	className?: string; 
}

export const LoaderRing: FC<LoaderRingProps> = ({className}) => {
	return (
		<div className={classnames(classes.LoaderRing, className)}>
			<ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={['#e6e6e6', '#cccccc', '#b3b3b3', '#bfbfbf', '#e6e6e6']}
            />
		</div>
	)
}