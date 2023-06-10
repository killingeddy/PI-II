import { ToastContainer, toast } from 'react-toastify';
import styles from './styles.module.scss';
import Modal from '@mui/material/Modal';
import * as Icons from 'react-ionicons';
import AddComment from '../addComment';
import api from '@/tools/api';
import React from 'react';

export default function GetPostModal({ open, handleClose, id }) {

    const [comments, setComments] = React.useState([]);
    const [data, setData] = React.useState({});

    const [openAddComment, setOpenAddComment] = React.useState(false);

    const [liked, setLiked] = React.useState(false);

    const [logged, setLogged] = React.useState(false);

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

    const like = async () => {
        const user = localStorage.getItem('user');
        const userId = JSON.parse(user).id;
        api
            .post(`/posts/like/${id}`, {
                user_id: userId
            })
            .then((response) => {
                setLiked(true);
            })
            .catch((error) => {
                toast.error('Erro ao curtir post', {
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

    const dislike = async () => {
        const user = localStorage.getItem('user');
        const userId = JSON.parse(user).id;
        api
            .delete(`/posts/like/${id}`,
                {
                    data: {
                        user_id: userId
                    }
                })
            .then((response) => {
                setLiked(false);
            })
            .catch((error) => {
                toast.error('Erro ao descurtir post', {
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

    const usersWhoLiked = async () => {
        const user = localStorage.getItem('user');
        const userId = JSON.parse(user).id;
        api
            .get(`/posts/usersWhoLiked/${id}`)
            .then((response) => {
                if (response.data.find((user) => user.user_id === userId)) {
                    setLiked(true);
                }
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

    const localVerify = async () => {
        if (localStorage.getItem('user')) {
            setLogged(true);
        }
    }

    React.useEffect(() => {
        if (open) {
            getPost();
            getComments();
            localVerify();
            usersWhoLiked();
        } else {
            setComments([]);
            setData({});
            setLiked(false);
            return;
        }
    }, [open, id, openAddComment, liked]);

    return (
        <Modal
            open={open}
            onClose={handleClose}
            hideBackdrop
            disableEscapeKeyDown
            className={styles.modal}
        >
            <div className={styles.container}>
                <AddComment open={openAddComment} handleClose={() => setOpenAddComment(false)} id={id} />
                <button className={styles.close} onClick={handleClose}>
                    <Icons.CloseOutline width="30px" height="30px" color="#8C89B8" />
                </button>
                <h1 className={styles.title}>{data?.title}</h1>
                <h2 className={styles.subtitle}>Autor: {data?.name}</h2>
                <p className={styles.description}>{data?.post_content}</p>
                <div className={styles.buttons}>
                    {
                        logged ?
                            <>
                                {
                                    liked ?
                                        <button className={styles.button} onClick={() => dislike()}><Icons.Heart width="20px" height="20px" color="#8C89B8" /> {data?.n_likes}</button>
                                        :
                                        <button className={styles.button} onClick={() => like()}><Icons.HeartOutline width="20px" height="20px" color="#8C89B8" /> {data?.n_likes}</button>
                                }
                                <button onClick={() => setOpenAddComment(true)} className={styles.button}><Icons.ChatbubbleOutline width="20px" height="20px" color="#8C89B8" /> {data?.n_comments}</button>
                                <button className={styles.button}><Icons.BookmarkOutline width="20px" height="20px" color="#8C89B8" /></button>
                                <button className={styles.button}><Icons.ShareSocialOutline width="20px" height="20px" color="#8C89B8" /></button>
                            </>
                            :
                            <>
                                <h3 className={styles.login}>Faça login para curtir e comentar</h3>
                            </>
                    }
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