import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './styles.module.scss';
import Modal from '@mui/material/Modal';
import * as Icons from 'react-ionicons';
import RegisterModal from '../register';
import api from '../../../../tools/api';
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

    const login = async () => {
        api
            .post('/auth/login', {
                ...data,
                email: data.email.toLowerCase().trim(),
                password: data.password
            },{
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((res) => {
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('user', JSON.stringify(res.data.user));
            })
            .catch((err) => {
                toast.error('Erro ao fazer login', {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            });
    };

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
                <form autoComplete="off" className={styles.form}>
                    <input autoComplete="false" className={styles.input} type="email" name="email" placeholder="Email" onChange={handleChange} />
                    <input autoComplete="false" className={styles.input} type="password" name="password" placeholder="Senha" onChange={handleChange} />
                </form>
                <button className={styles.button} onClick={() => login()}>Entrar</button>
                <p className={styles.text}>Não tem uma conta? <span onClick={() => setRegisterModal(true)} className={styles.span}>Cadastre-se</span></p>
                <ToastContainer />
            </div>
        </Modal>
    );
}