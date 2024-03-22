import {
    FC, useCallback, useMemo, useState,
} from 'react';
import { Modal } from 'components/UI/Modal/Modal';
import { useTranslation } from 'react-i18next';
import classnames from 'classnames';
import { LoginFormAsync } from '../../AuthForms/LoginForm/LoginForm.async';
import { PasswordResetFormAsync } from '../../AuthForms/PasswordResetForm/PasswordResetForm.async';
import classes from './LoginModal.module.scss';

interface LoginModalProps {
	isOpen: boolean;
	onClose: () => void;
	className?: string;
}

type ActiveFormType = 'loginForm' | 'resetForm';

export const LoginModal: FC<LoginModalProps> = (props) => {
    const {
        isOpen,
        onClose,
        className,
    } = props;
    const { t } = useTranslation();
    const [activeForm, setAcitveForm] = useState<ActiveFormType>('loginForm');

    const onForget = useCallback(() => {
        setAcitveForm('resetForm');
    }, []);

    const backToLoginForm = useCallback(() => {
        setAcitveForm('loginForm');
    }, []);

    const ActiveForms: Record<ActiveFormType, JSX.Element> = useMemo(() => ({
        loginForm:
    <LoginFormAsync
        title={t('Login')}
        onSuccess={onClose}
        onForget={onForget}
    />,
        resetForm:
    <PasswordResetFormAsync
        title='Forget Password'
        onSuccess={backToLoginForm}
        onCancel={backToLoginForm}
    />,
    }), [onClose, onForget, backToLoginForm]);

    return (
        <Modal
            onClose={onClose}
            isOpen={isOpen}
            className={classnames(classes.LoginModal, className)}
        >
            {ActiveForms[activeForm]}
        </Modal>
    );
};
