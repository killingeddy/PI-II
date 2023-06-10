import styles from './styles.module.scss';
import Modal from '@mui/material/Modal';
import * as Icons from 'react-ionicons';
import React from 'react';
import api from '@/tools/api';
import { ToastContainer, toast } from 'react-toastify';

export default function GetPostModal({ open, handleClose, id }) {

    const [data, setData] = React.useState({});
    const [comments, setComments] = React.useState([]);

    const getPost = async () => {
        api
            .get(`/posts/${id}`)
            .then((response) => {
                setData(response.data[0]);
            })
            .catch((error) => {
                toast.error('Erro ao acessar post', {
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

    const getComments = async () => {
        api
            .get(`/posts/${id}/comments`)
            .then((response) => {
                setComments(response.data);
            })
            .catch((error) => {
                toast.error('Erro ao acessar post', {
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

    React.useEffect(() => {
        getPost();
    }, [open]);

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
                <h1 className={styles.title}>{data?.title}</h1>
                <h2 className={styles.subtitle}>Autor: {data?.name}</h2>
                <p className={styles.description}>{data?.post_content}</p>
                <div className={styles.buttons}>
                    <button className={styles.button} onClick={() => setLiked(!liked)}>
                        {/* {
                            liked ? <Icons.Heart width="20px" height="20px" color="#8C89B8" /> : <Icons.HeartOutline width="20px" height="20px" color="#8C89B8" />
                        } */}
                    </button>
                    <button className={styles.button}><Icons.ChatbubbleOutline width="20px" height="20px" color="#8C89B8" /></button>
                    <button className={styles.button}><Icons.BookmarkOutline width="20px" height="20px" color="#8C89B8" /></button>
                    <button className={styles.button}><Icons.ShareSocialOutline width="20px" height="20px" color="#8C89B8" /></button>
                </div>
                <div className={styles.comments}>
                    {
                        comments?.map((item, index) => {
                            return (
                                <div className={styles.comment} key={index}>
                                    <h3 className={styles.commentTitle}>{item.name}</h3>
                                    <p className={styles.commentDescription}>{item.comment_content}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <ToastContainer />
            </div>
        </Modal>
    );
}
