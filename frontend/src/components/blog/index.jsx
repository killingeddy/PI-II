import GetPostModal from '../modals/post/getPost';
import AddPostModal from '../modals/post/addPost';
import styles from './styles.module.scss';
import * as Icons from 'react-ionicons';
import Navbar from "../navbar";
import React from "react";
import api from '@/tools/api';
import { toast } from 'react-toastify';

export default function Blog() {

    const [getPostModal, setGetPostModal] = React.useState(false);
    const [addPostModal, setAddPostModal] = React.useState(false);

    const [data, setData] = React.useState([]);

    const getPosts = async () => {
        api
            .get("/posts")
            .then((res) => {
                setData(res.data);
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
    };

    React.useEffect(() => {
        getPosts();
    }, []);

    return (
        <>
            <GetPostModal open={getPostModal} handleClose={() => setGetPostModal(false)} />
            <AddPostModal open={addPostModal} handleClose={() => setAddPostModal(false)} />
            <Navbar />
            <div className={styles.container}>
                <div className={styles.main}>
                    <div className={styles.content}>
                        <div className={styles.header}>
                            <h1 className={styles.title}>Blog</h1>
                            <button className={styles.addButton} onClick={() => setAddPostModal(true)}><Icons.AddOutline width="35px" height="35px" color="#fff" /></button>
                        </div>
                        <div className={styles.posts}>
                            {
                                data.map((item, index) => {
                                    return (
                                        <div className={styles.post} onClick={() => setGetPostModal(true)} key={index}>
                                            <p className={styles.postTitle}>{item.title}</p>
                                            <p className={styles.postDescription}>{item.post_content}</p>
                                            <h5 className={styles.postAuthor}>Por: <span className={styles.author}>{item.name}</span></h5>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}