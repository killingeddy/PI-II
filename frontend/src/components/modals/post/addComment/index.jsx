import styles from './styles.module.scss';
import Modal from '@mui/material/Modal';
import * as Icons from 'react-ionicons';
import React from 'react';
import api from '@/tools/api';
import { ToastContainer, toast } from 'react-toastify';

export default function AddComment({ open, handleClose, id }) {

    const [data, setData] = React.useState({
        comment_content: '',
    });

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    }

    const addComment = () => {
        const user = localStorage.getItem('user');
        const userId = JSON.parse(user).id;
        api
            .post(`/posts/${id}/comments`, {
                ...data,
                user_id: userId,
            })
            .then((res) => {
                toast.success('Comentário adicionado com sucesso!', {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                setData({ comment_content: '' });
                handleClose();
            })
            .catch((err) => {
                toast.error('Erro ao adicionar comentário', {
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
                <h1 className={styles.title}>Adicionar comentário</h1>
                <form autoComplete="off" className={styles.form}>
                    <textarea
                        className={styles.textarea}
                        name="comment_content"
                        placeholder="Comentário"
                        value={data.comment_content}
                        onChange={handleChange}
                    />
                </form>
                <button className={styles.button} onClick={() => addComment()}>Adicionar</button>
                <ToastContainer />
            </div>
        </Modal>
    );
}
