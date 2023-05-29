import GetPostModal from '../modals/post/getPost';
import AddPostModal from '../modals/post/addPost';
import styles from './styles.module.scss';
import * as Icons from 'react-ionicons';
import Navbar from "../navbar";
import React from "react";

export default function Blog() {

    const [getPostModal, setGetPostModal] = React.useState(false);
    const [addPostModal, setAddPostModal] = React.useState(false);

    return (
        <>
            <GetPostModal open={getPostModal} handleClose={() => setGetPostModal(false)} />
            <AddPostModal open={addPostModal} handleClose={() => setAddPostModal(false)} />
            <Navbar />
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <h1 className={styles.title}>Blog</h1>
                        <button className={styles.addButton} onClick={() => setAddPostModal(true)}><Icons.AddOutline width="35px" height="35px" color="#fff" /></button>
                    </div>
                    <div className={styles.posts}>
                        <div className={styles.post} onClick={() => setGetPostModal(true)}>
                            <p className={styles.postDescription}>A educação sexual é um processo de aprendizagem que visa a formação de uma consciência crítica sobre a sexualidade, ajudando a pessoa a tomar decisões responsáveis e saudáveis sobre o seu comportamento sexual.</p>
                            <h5 className={styles.postAuthor}>Por: <span className={styles.author}>Aula Proibida</span></h5>
                        </div>
                        <div className={styles.post} onClick={() => setGetPostModal(true)}>
                            <p className={styles.postDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros vitae nisl aliquam aliquet. Donec euismod, nisl vitae aliquam aliquet, nisl nisl aliquam nisl, vitae aliquam nisl nisl vitae nisl. Donec euismod, nisl vitae aliquam aliquet, nisl nisl aliquam nisl, vitae aliquam nisl nisl vitae nisl. Donec euismod, nisl vitae aliquam aliquet, nisl nisl aliquam nisl, vitae aliquam nisl nisl vitae nisl.</p>
                            <h5 className={styles.postAuthor}>Por: <span className={styles.author}>Aula Proibida</span></h5>
                        </div>
                        <div className={styles.post} onClick={() => setGetPostModal(true)}>
                            <p className={styles.postDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros vitae nisl aliquam aliquet. Donec euismod, nisl vitae aliquam aliquet, nisl nisl aliquam nisl, vitae aliquam nisl nisl vitae nisl. Donec euismod, nisl vitae aliquam aliquet, nisl nisl aliquam nisl, vitae aliquam nisl nisl vitae nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros vitae nisl aliquam aliquet. Donec euismod, nisl vitae aliquam aliquet, nisl nisl aliquam nisl, vitae aliquam nisl nisl vitae nisl. Donec euismod, nisl vitae aliquam aliquet, nisl nisl aliquam nisl, vitae aliquam nisl nisl vitae nisl.</p>
                            <h5 className={styles.postAuthor}>Por: <span className={styles.author}>Aula Proibida</span></h5>
                        </div>
                        <div className={styles.post} onClick={() => setGetPostModal(true)}>
                            <p className={styles.postDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros vitae nisl aliquam aliquet. Donec euismod, nisl vitae aliquam aliquet, nisl nisl aliquam nisl, vitae aliquam nisl nisl vitae nisl. Donec euismod, nisl vitae aliquam aliquet, nisl nisl aliquam nisl, vitae aliquam nisl nisl vitae nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros vitae nisl aliquam aliquet. Donec euismod, nisl vitae aliquam aliquet, nisl nisl aliquam nisl, vitae aliquam nisl nisl vitae nisl. Donec euismod, nisl vitae aliquam aliquet, nisl nisl aliquam nisl, vitae aliquam nisl nisl vitae nisl.</p>
                            <h5 className={styles.postAuthor}>Por: <span className={styles.author}>Aula Proibida</span></h5>
                        </div>
                        <div className={styles.post} onClick={() => setGetPostModal(true)}>
                            <p className={styles.postDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros vitae nisl aliquam aliquet. Donec euismod, nisl vitae aliquam aliquet, nisl nisl aliquam nisl, vitae aliquam nisl nisl vitae nisl. Donec euismod, nisl vitae aliquam aliquet, nisl nisl aliquam nisl, vitae aliquam nisl nisl vitae nisl. Donec euismod, nisl vitae aliquam aliquet, nisl nisl aliquam nisl, vitae aliquam nisl nisl vitae nisl.</p>
                            <h5 className={styles.postAuthor}>Por: <span className={styles.author}>Aula Proibida</span></h5>
                        </div>
                        <div className={styles.post} onClick={() => setGetPostModal(true)}>
                            <p className={styles.postDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros vitae nisl aliquam aliquet. Donec euismod, nisl vitae aliquam aliquet, nisl nisl aliquam nisl, vitae aliquam nisl nisl vitae nisl. Donec euismod, nisl vitae aliquam aliquet, nisl nisl aliquam nisl, vitae aliquam nisl nisl vitae nisl. Donec euismod, nisl vitae aliquam aliquet, nisl nisl aliquam nisl, vitae aliquam nisl nisl vitae nisl.</p>
                            <h5 className={styles.postAuthor}>Por: <span className={styles.author}>Aula Proibida</span></h5>
                        </div>
                        <div className={styles.post} onClick={() => setGetPostModal(true)}>
                            <p className={styles.postDescription}>A educação sexual é um processo de aprendizagem que visa a formação de uma consciência crítica sobre a sexualidade, ajudando a pessoa a tomar decisões responsáveis e saudáveis sobre o seu comportamento sexual.</p>
                            <h5 className={styles.postAuthor}>Por: <span className={styles.author}>Aula Proibida</span></h5>
                        </div>
                        <div className={styles.post} onClick={() => setGetPostModal(true)}>
                            <p className={styles.postDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros vitae nisl aliquam aliquet. Donec euismod, nisl vitae aliquam aliquet, nisl nisl aliquam nisl, vitae aliquam nisl nisl vitae nisl. Donec euismod, nisl vitae aliquam aliquet, nisl nisl aliquam nisl, vitae aliquam nisl nisl vitae nisl. Donec euismod, nisl vitae aliquam aliquet, nisl nisl aliquam nisl, vitae aliquam nisl nisl vitae nisl.</p>
                            <h5 className={styles.postAuthor}>Por: <span className={styles.author}>Aula Proibida</span></h5>
                        </div>
                        <div className={styles.post} onClick={() => setGetPostModal(true)}>
                            <p className={styles.postDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros vitae nisl aliquam aliquet. Donec euismod, nisl vitae aliquam aliquet, nisl nisl aliquam nisl, vitae aliquam nisl nisl vitae nisl. Donec euismod, nisl vitae aliquam aliquet, nisl nisl aliquam nisl, vitae aliquam nisl nisl vitae nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros vitae nisl aliquam aliquet. Donec euismod, nisl vitae aliquam aliquet, nisl nisl aliquam nisl, vitae aliquam nisl nisl vitae nisl. Donec euismod, nisl vitae aliquam aliquet, nisl nisl aliquam nisl, vitae aliquam nisl nisl vitae nisl.</p>
                            <h5 className={styles.postAuthor}>Por: <span className={styles.author}>Aula Proibida</span></h5>
                        </div>
                        <div className={styles.post} onClick={() => setGetPostModal(true)}>
                            <p className={styles.postDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros vitae nisl aliquam aliquet. Donec euismod, nisl vitae aliquam aliquet, nisl nisl aliquam nisl, vitae aliquam nisl nisl vitae nisl. Donec euismod, nisl vitae aliquam aliquet, nisl nisl aliquam nisl, vitae aliquam nisl nisl vitae nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros vitae nisl aliquam aliquet. Donec euismod, nisl vitae aliquam aliquet, nisl nisl aliquam nisl, vitae aliquam nisl nisl vitae nisl. Donec euismod, nisl vitae aliquam aliquet, nisl nisl aliquam nisl, vitae aliquam nisl nisl vitae nisl.</p>
                            <h5 className={styles.postAuthor}>Por: <span className={styles.author}>Aula Proibida</span></h5>
                        </div>
                        <div className={styles.post} onClick={() => setGetPostModal(true)}>
                            <p className={styles.postDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros vitae nisl aliquam aliquet. Donec euismod, nisl vitae aliquam aliquet, nisl nisl aliquam nisl, vitae aliquam nisl nisl vitae nisl. Donec euismod, nisl vitae aliquam aliquet, nisl nisl aliquam nisl, vitae aliquam nisl nisl vitae nisl. Donec euismod, nisl vitae aliquam aliquet, nisl nisl aliquam nisl, vitae aliquam nisl nisl vitae nisl.</p>
                            <h5 className={styles.postAuthor}>Por: <span className={styles.author}>Aula Proibida</span></h5>
                        </div>
                        <div className={styles.post} onClick={() => setGetPostModal(true)}>
                            <p className={styles.postDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros vitae nisl aliquam aliquet. Donec euismod, nisl vitae aliquam aliquet, nisl nisl aliquam nisl, vitae aliquam nisl nisl vitae nisl. Donec euismod, nisl vitae aliquam aliquet, nisl nisl aliquam nisl, vitae aliquam nisl nisl vitae nisl. Donec euismod, nisl vitae aliquam aliquet, nisl nisl aliquam nisl, vitae aliquam nisl nisl vitae nisl.</p>
                            <h5 className={styles.postAuthor}>Por: <span className={styles.author}>Aula Proibida</span></h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}