import styles from './styles.module.scss';
import { Modal } from '@mui/material';
import * as Icons from 'react-ionicons';
import RegisterModal from '../register';
import React from 'react';

export default function LoginModal({ open, handleClose }) {

    const [data, setData] = React.useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const [registerModal, setRegisterModal] = React.useState(false);

    return (
        <Modal
            open={open}
            onClose={handleClose}
            hideBackdrop
            disableEscapeKeyDown
            className={styles.modal}
        >
            <div className={styles.container}>
                <RegisterModal open={registerModal} handleClose={() => setRegisterModal(false)} />
                <button className={styles.close} onClick={handleClose}>
                    <Icons.CloseOutline width="30px" height="30px" color="#8C89B8" />
                </button>
                <h1 className={styles.title}>Login</h1>
                <form autocomplete="off" className={styles.form}>
                    <input autocomplete="false" className={styles.input} type="email" name="email" placeholder="Email" onChange={handleChange} />
                    <input autocomplete="false" className={styles.input} type="password" name="password" placeholder="Senha" onChange={handleChange} />
                    <button className={styles.button} type="submit">Entrar</button>
                </form>
                <p className={styles.text}>Não tem uma conta? <span onClick={() => setRegisterModal(true)} className={styles.span}>Cadastre-se</span></p>
            </div>
        </Modal>
    );
}