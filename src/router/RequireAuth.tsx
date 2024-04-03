import { useAppSelector } from 'hooks/redux';
import {
    FC, ReactNode, useEffect, useRef,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { selectUser, selectUserMounted } from 'redux/selectors/userSelectors';
import { PageRequireAuth } from 'components/PageRequireAuth/PageRequireAuth';
import { RoutePath } from './routeConfig';

interface RequireAuthProps {
	children: ReactNode;
}

export const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
    const authData = useAppSelector(selectUser);
    const mounted = useAppSelector(selectUserMounted);
    const navigate = useNavigate();
    const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        if (!authData && mounted) {
            timer.current = setTimeout(() => {
                navigate(RoutePath.main);
            }, 3500);
        }

        return () => {
            if (timer.current) clearTimeout(timer.current);
        };
    }, [authData]);

    if (!authData && mounted) {
        return <PageRequireAuth />;
    }

    return children;
};
