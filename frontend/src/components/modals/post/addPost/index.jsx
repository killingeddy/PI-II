import styles from './styles.module.scss';
import { Modal } from '@mui/material';
import * as Icons from 'react-ionicons';
import React from 'react';

export default function AddPostModal({ open, handleClose }) {

    const [data, setData] = React.useState({
        title: '',
        description: '',
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
                <h1 className={styles.title}>Adicionar post</h1>
                <form autocomplete="off" className={styles.form}>
                    <input autocomplete="false"
                        className={styles.input}
                        type="text"
                        name="title"
                        placeholder="Título"
                        value={data.title}
                        onChange={handleChange}
                    />
                    <textarea
                        className={styles.textarea}
                        name="description"
                        placeholder="Descrição"
                        value={data.description}
                        onChange={handleChange}
                    />
                    <button className={styles.button} type="submit">Adicionar</button>
                </form>
            </div>
        </Modal>
    );
}
