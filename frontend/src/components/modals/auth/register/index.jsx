import styles from './styles.module.scss';
import Modal from '@mui/material/Modal';
import * as Icons from 'react-ionicons';
import { toast } from 'react-toastify';
import api from '@/tools/api';
import React from 'react';

export default function RegisterModal({ open, handleClose }) {

    const [data, setData] = React.useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    }

    const createUser = async () => {
        api
            .post('/auth/register', {
                ...data,
                name: data.name.trim(),
                email: data.email.trim().toLowerCase(),
                password: data.password.trim(),
            })
            .then((res) => {
                api
                    .post('/auth/login', {
                        email: data.email.trim().toLowerCase(),
                        password: data.password.trim(),
                    })
                    .then((res) => {
                        localStorage.setItem('token', res.data.token);
                        localStorage.setItem('user', JSON.stringify(res.data.user));
                        setData({ name: '', email: '', password: '' });
                        handleClose();
                        toast.success('Cadastro feito com sucesso', {
                            position: "top-left",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                        });
                    })
            })
            .catch((err) => {
                toast.error('Erro ao fazer cadastro', {
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
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            hideBackdrop
            disableEscapeKeyDown
            className={styles.modal}
        >
            <div className={styles.container}>
                <button className={styles.close} onClick={handleClose}>
                    <Icons.CloseOutline width="30px" height="30px" color="#8C89B8" />
                </button>
                <h1 className={styles.title}>Cadastrar</h1>
                <form autoComplete="off" className={styles.form}>
                    <input autoComplete="false"
                        className={styles.input}
                        type="text"
                        name="name"
                        placeholder="Nome"
                        value={data.name}
                        onChange={handleChange}
                    />
                    <input autoComplete="false"
                        className={styles.input}
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        value={data.email}
                        onChange={handleChange}
                    />
                    <input autoComplete="false"
                        className={styles.input}
                        type="password"
                        name="password"
                        placeholder="Senha"
                        value={data.password}
                        onChange={handleChange}
                    />
                </form>
                <button className={styles.button} onClick={() => createUser()}>Cadastrar</button>
            </div>
        </Modal>
    );
}