import styles from './styles.module.scss';
import * as Icons from 'react-ionicons';
import Navbar from "../navbar";
import React from "react";

export default function Contact() {

    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.main}>
                    <div className={styles.content}>
                        <div className={styles.leftItem}>
                            <h2>Obrigado por acessar nosso site!</h2>
                            <p>Entre em contato conosco para mais informações sobre nossa platarfoma, tirar suas dúvidas e nos ajudar a melhorar cada vez mais.</p>
                            <img className={styles.image} src="../../../logo.png" alt="Logo" />
                        </div>
                        <div className={styles.rightItem}>
                            <input className={styles.input} type="text" placeholder="Nome" />
                            <input className={styles.input} type="text" placeholder="E-mail" />
                            <input className={styles.input} type="text" placeholder="Assunto" />
                            <textarea className={styles.input} style={{ height: '200px' }} type="text" placeholder="Mensagem" />
                            <button className={styles.button}>Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}