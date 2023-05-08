import styles from './styles.module.scss';
import Modal from '@mui/material/Modal';
import * as Icons from 'react-ionicons';
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
                <form autocomplete="off" className={styles.form}>
                    <input autocomplete="false"
                        className={styles.input}
                        type="text"
                        name="name"
                        placeholder="Nome"
                        value={data.name}
                        onChange={handleChange}
                    />
                    <input autocomplete="false"
                        className={styles.input}
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        value={data.email}
                        onChange={handleChange}
                    />
                    <input autocomplete="false"
                        className={styles.input}
                        type="password"
                        name="password"
                        placeholder="Senha"
                        value={data.password}
                        onChange={handleChange}
                    />
                    <button className={styles.button} type="submit">Cadastrar</button>
                </form>
            </div>
        </Modal>
    );
}