import { FC, useMemo, memo } from 'react';
import { useTranslation } from 'react-i18next';

import ErrorIcon from 'assets/icons/error_mark.svg';
import SuccessIcon from 'assets/icons/success.svg';
import WarningIcon from 'assets/icons/error.svg';

import classnames from 'classnames';
import classes from './Message.module.scss';

type MessageType = 'error' | 'warn' | 'success';

interface MessageProps {
	type: MessageType;
	text: string;
	withIcon?: boolean;
	className?: string;
}

export const Message: FC<MessageProps> = memo((props) => {
    const {
        type,
        text,
        withIcon,
        className,
    } = props;
    const { t } = useTranslation();

    const title = useMemo(() => {
        switch (type) {
        case 'warn':
			    return t('Warning!');
        case 'error':
			    return t('An error occured.');
        case 'success':
            return t('Success.');
        }
    }, [type]);

    return (
        <div className={classnames(
            classes.Message,
            classes[type],
            className,
        )}
        >
            {(type === 'warn' && withIcon)
				&& <WarningIcon className={classnames(classes.icon, classes.warnIcon)} />}
            {(type === 'error' && withIcon)
				&& <ErrorIcon className={classes.icon} />}
            {(type === 'success' && withIcon)
				&& <SuccessIcon className={classes.icon} />}
            <h2 className={classes.title}>{title}</h2>
            <div className={classes.text}>{text}</div>
        </div>
    );
});
