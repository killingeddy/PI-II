import styles from './styles.module.scss';
import Modal from '@mui/material/Modal';
import * as Icons from 'react-ionicons';
import React from 'react';

export default function GetPostModal({ open, handleClose }) {

    const [liked, setLiked] = React.useState(false);

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
                <h1 className={styles.title}>Lorem Ipsum</h1>
                <h2 className={styles.subtitle}>Autor: Lorens Ispsuns</h2>
                <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam tincidunt, nunc elit ultricies nunc, nec aliquam nisl nunc eget nisl. Sed euismod, diam quis aliquam tincidunt, nunc elit ultricies nunc, nec aliquam nisl nunc eget nisl.</p>
                <div className={styles.buttons}>
                    <button className={styles.button} onClick={() => setLiked(!liked)}>
                        {
                            liked ? <Icons.Heart width="20px" height="20px" color="#8C89B8" /> : <Icons.HeartOutline width="20px" height="20px" color="#8C89B8" />
                        }
                    </button>
                    <button className={styles.button}><Icons.ChatbubbleOutline width="20px" height="20px" color="#8C89B8" /></button>
                    <button className={styles.button}><Icons.BookmarkOutline width="20px" height="20px" color="#8C89B8" /></button>
                    <button className={styles.button}><Icons.ShareSocialOutline width="20px" height="20px" color="#8C89B8" /></button>
                </div>
                <div className={styles.comments}>
                    <div className={styles.comment}>
                        <h3 className={styles.commentTitle}>Lorem Ipsum</h3>
                        <p className={styles.commentDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam tincidunt, nunc elit ultricies nunc, nec aliquam nisl nunc eget nisl. Sed euismod, diam quis aliquam tincidunt, nunc elit ultricies nunc, nec aliquam nisl nunc eget nisl.</p>
                    </div>
                    <div className={styles.comment}>
                        <h3 className={styles.commentTitle}>Lorem Ipsum</h3>
                        <p className={styles.commentDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam tincidunt, nunc elit ultricies nunc, nec aliquam nisl nunc eget nisl. Sed euismod, diam quis aliquam tincidunt, nunc elit ultricies nunc, nec aliquam nisl nunc eget nisl.</p>
                    </div>
                    <div className={styles.comment}>
                        <h3 className={styles.commentTitle}>Lorem Ipsum</h3>
                        <p className={styles.commentDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam tincidunt, nunc elit ultricies nunc, nec aliquam nisl nunc eget nisl. Sed euismod, diam quis aliquam tincidunt, nunc elit ultricies nunc, nec aliquam nisl nunc eget nisl.</p>
                    </div>
                    <div className={styles.comment}>
                        <h3 className={styles.commentTitle}>Lorem Ipsum</h3>
                        <p className={styles.commentDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam tincidunt, nunc elit ultricies nunc, nec aliquam nisl nunc eget nisl. Sed euismod, diam quis aliquam tincidunt, nunc elit ultricies nunc, nec aliquam nisl nunc eget nisl.</p>
                    </div>
                    <div className={styles.comment}>
                        <h3 className={styles.commentTitle}>Lorem Ipsum</h3>
                        <p className={styles.commentDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam tincidunt, nunc elit ultricies nunc, nec aliquam nisl nunc eget nisl. Sed euismod, diam quis aliquam tincidunt, nunc elit ultricies nunc, nec aliquam nisl nunc eget nisl.</p>
                    </div>
                    <div className={styles.comment}>
                        <h3 className={styles.commentTitle}>Lorem Ipsum</h3>
                        <p className={styles.commentDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam tincidunt, nunc elit ultricies nunc, nec aliquam nisl nunc eget nisl. Sed euismod, diam quis aliquam tincidunt, nunc elit ultricies nunc, nec aliquam nisl nunc eget nisl.</p>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
