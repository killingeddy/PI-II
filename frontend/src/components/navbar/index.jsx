import LoginModal from "../modals/auth/login";
import styles from "./styles.module.scss";
import * as Icons from 'react-ionicons';
import React from "react";

export default function Navbar() {

    const [sidebar, setSidebar] = React.useState(false);
    const [login, setLogin] = React.useState(false);

    return (
        <>
            <LoginModal open={login} handleClose={() => setLogin(false)} />
            <div className={styles.navbar}>
                <h1 onClick={() => window.location.href = '/'} className={styles.title}>A aula proibida</h1>
                <button className={styles.button} onClick={() => setSidebar(true)}><Icons.MenuOutline width="30px" height="30px" color="#8C89B8" /></button>
            </div>
            {
                sidebar &&
                <div className={styles.sidebar}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#8C89B870" fillOpacity="1" d="M0,96L48,128C96,160,192,224,288,250.7C384,277,480,267,576,245.3C672,224,768,192,864,170.7C960,149,1056,139,1152,165.3C1248,192,1344,256,1392,288L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                    <button className={styles.button} onClick={() => setSidebar(false)}><Icons.CloseOutline width="30px" height="30px" color="#000" /></button>
                    <div className={styles.itens}>
                        {
                            !localStorage.getItem('token')
                                ?
                                <button onClick={() => setLogin(true)} className={styles.item}><Icons.LogInOutline color='#8C89B8' width="25px" height="25px" /><p>Login</p></button>
                                :
                                <button onClick={() => setLogin(true)} className={styles.item}><Icons.PersonOutline color='#8C89B8' width="25px" height="25px" /><p>Meu Perfil</p></button>
                        }
                        <button onClick={() => window.location.href = '/'} className={styles.item}><Icons.HomeOutline color='#8C89B8' width="25px" height="25px" /><p>Home</p></button>
                        <a href="#about" className={styles.item}><Icons.InformationCircleOutline color='#8C89B8' width="25px" height="25px" /><p>Sobre</p></a>
                        <a href="#contact" className={styles.item}><Icons.CallOutline color='#8C89B8' width="25px" height="25px" /><p>Contato</p></a>
                        {
                            localStorage.getItem('token') &&
                            <button onClick={() => { localStorage.clear(), window.location.href = '/' }} className={styles.item}><Icons.LogOutOutline color='#8C89B8' width="25px" height="25px" /><p>Sair</p></button>
                        }
                    </div>
                </div>
            }
        </>
    );
}