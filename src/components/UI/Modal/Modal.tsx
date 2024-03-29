import React, {
    FC, ReactNode, Suspense, useCallback, useEffect,
} from 'react';
import classnames from 'classnames';
import classes from './Modal.module.scss';
import { Portal } from '../Portal/Portal';
import { ColorRing } from 'react-loader-spinner';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children?: ReactNode;
	className?: string;
}

export const Modal: FC<ModalProps> = (props) => {
    const {
        isOpen,
        onClose,
        className,
        children,
    } = props;

    const closeHandler = useCallback(() => {
        if (onClose) {
            onClose();
        }
    }, [onClose]);

    const onKeydown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, []);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeydown);
        }

        return () => window.removeEventListener('keydown', onKeydown);
    }, [isOpen]);

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const onBackgroundClick = (e: React.MouseEvent) => {
    	closeHandler();
    };

    return (
        <Portal>
            <div
                className={classnames(classes.Modal, className, { [classes.opened]: isOpen })}
                onClick={onBackgroundClick}
                role='button'
                tabIndex={-1}
            >
                <div
                    className={classes.content}
                    onClick={onContentClick}
                    role='button'
                    tabIndex={0}
                >
                    <Suspense fallback={
                        <ColorRing
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="color-ring-loading"
                            wrapperStyle={{}}
                            wrapperClass="color-ring-wrapper"
                            colors={['#e6e6e6', '#cccccc', '#b3b3b3', '#bfbfbf', '#e6e6e6']}
                        />
                    }>
                        {children}
                    </Suspense>
                </div>
            </div>
        </Portal>
    );
};
