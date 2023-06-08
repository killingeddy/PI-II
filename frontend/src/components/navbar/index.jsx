import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import LoginModal from "../modals/auth/login";
import styles from "./styles.module.scss";
import * as Icons from 'react-ionicons';
import { useRouter } from 'next/router';
import React from "react";
import Link from 'next/link';

export default function Navbar() {

    const [sidebar, setSidebar] = React.useState(true);
    const [login, setLogin] = React.useState(false);

    const [logged, setLogged] = React.useState(false);

    const router = useRouter();

    const localVerify = () => {
        if (localStorage.getItem("token")) {
            setLogged(true);
        }
    }

    React.useEffect(() => {
        localVerify();
    }, []);

    return (
        <div className={styles.sidebar} onMouseEnter={() => setSidebar(false)} onMouseLeave={() => setSidebar(true)}>
            <LoginModal open={login} handleClose={() => setLogin(false)} />
            <Sidebar collapsed={sidebar} style={{ backgroundColor: "#f5f5f5", height: "100vh" }} transitionDuration={800}>
                <Menu>
                    <img src="/logo.png" alt="logo" className={styles.logo} />
                </Menu>
                <Menu
                    menuItemStyles={{
                        icon: { marginTop: "10px", marginRight: "10px" },
                        label: { color: "#8C89B8" },
                        button: ({ active }) => ({
                            background: active
                                ?
                                'linear-gradient(340deg, rgba(140, 137, 184, 0.5019257703081232) 0%, rgba(239, 195, 230, 0.499124649859944) 100%);'
                                :
                                "#f5f5f5",
                            border: "none",
                            borderTopLeftRadius: "40px",
                            borderBottomLeftRadius: "40px",
                            padding: "10px 20px",
                            margin: "10px",
                            width: "100%",
                            ":hover": { background: "#c3c3c3" }
                        })
                    }}
                >
                    <Link href="/">
                        <MenuItem active={router.pathname === "/"} icon={<Icons.HomeOutline color={'#8C89B8'} />}> <p className={styles.text}>Inicio</p></MenuItem>
                    </Link>
                    {
                        !logged
                            ?
                            <MenuItem icon={<Icons.LogInOutline color={'#8C89B8'} />} onClick={() => setLogin(true)}> <p className={styles.text}>Login</p></MenuItem>
                            :
                            <MenuItem icon={<Icons.PersonOutline color={'#8C89B8'} />} onClick={() => setLogin(true)}> <p className={styles.text}>Meu perfil</p></MenuItem>
                    }
                    <Link href="/blog">
                        <MenuItem active={router.pathname === "/blog"} icon={<Icons.LibraryOutline color={'#8C89B8'} />}> <p className={styles.text}>Blog</p></MenuItem>
                    </Link>
                    <Link href="/contact">
                        <MenuItem active={router.pathname === "/contact"} icon={<Icons.CallOutline color={'#8C89B8'} />}> <p className={styles.text}>Contato</p></MenuItem>
                    </Link>
                    {
                        logged
                        &&
                        <MenuItem icon={<Icons.LogOutOutline color={'#8C89B8'} />} onClick={() => {
                            localStorage.clear();
                            setLogged(false);
                            router.push("/");
                        }}> <p className={styles.text}>Sair</p></MenuItem>
                    }
                </Menu>
            </Sidebar>
        </div>
    );
}