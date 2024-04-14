import { FC, useEffect } from 'react';
import { useAppDispatch } from 'hooks/redux';
import { fetchWatchListCoins } from 'redux/actions/userActions';
import { Page } from 'components/UI/Page/Page';
import { WatchList } from 'components/WatchList/WatchList';

import classnames from 'classnames';
import classes from './WatchListPage.module.scss';

interface WatchListPageProps {
	className?: string;
}

const WatchListPage: FC<WatchListPageProps> = ({ className }) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchWatchListCoins());
    }, [dispatch]);

    return (
        <Page className={classnames(classes.WatchListPage, className)}>
            <WatchList />
        </Page>
    );
};

export default WatchListPage;