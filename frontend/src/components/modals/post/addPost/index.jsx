import styles from './styles.module.scss';
import Modal from '@mui/material/Modal';
import * as Icons from 'react-ionicons';
import React from 'react';
import api from '@/tools/api';
import { ToastContainer, toast } from 'react-toastify';

export default function AddPostModal({ open, handleClose }) {

    const [data, setData] = React.useState({
        title: '',
        post_content: '',
    });

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    }

    const addPost = () => {
        const user = localStorage.getItem('user');
        const userId = JSON.parse(user).id;
        api
            .post('/posts', {
                ...data,
                user_id: userId,
            })
            .then((res) => {
                toast.success('Post adicionado com sucesso!', {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                handleClose();
            })
            .catch((err) => {
                toast.error('Erro ao adicionar post', {
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
                <h1 className={styles.title}>Adicionar post</h1>
                <form autoComplete="off" className={styles.form}>
                    <input autoComplete="false"
                        className={styles.input}
                        type="text"
                        name="title"
                        placeholder="Título"
                        value={data.title}
                        onChange={handleChange}
                    />
                    <textarea
                        className={styles.textarea}
                        name="post_content"
                        placeholder="Descrição"
                        value={data.post_content}
                        onChange={handleChange}
                    />
                </form>
                <button className={styles.button} onClick={() => addPost()}>Adicionar</button>
                <ToastContainer />
            </div>
        </Modal>
    );
}
