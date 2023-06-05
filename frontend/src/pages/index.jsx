import styles from '../styles/Home.module.scss';
import Navbar from '@/components/navbar';
import * as Icons from 'react-ionicons';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.component} />
        <div className={styles.firstContent}>
          <h1 className={styles.title}>Olá, Seja Bem-vindo a <p className={styles.name}>Aula Proibida</p></h1>
          <p className={styles.description}>Nós somos uma plataforma online que via disponibilizar conteúdo sobre educação sexual abertamente e de graça.</p>
        </div>
        <div className={styles.secondContent}>
          <div className={styles.block}>
            <h1 className={styles.title}>Etiologia</h1>
            <p className={styles.description}>A nossa motivação para criar a plataforma foi a falta de informação sobre educação sexual, principalmente para os jovens no Brasil.</p>
          </div>
          <div className={styles.block}>
            <h1 className={styles.title}>Por que Aula Proibida?</h1>
            <p className={styles.description}>O nome Aula Proibida foi escolhido para representar a falta de informação sobre educação sexual no Brasil principalmente nas escolas, chegando a um nivel de ser algo "proibido" até de ser falado sobre.</p>
          </div>
          <div className={styles.block}>
            <h1 className={styles.title}>O que é Aula Proibida?</h1>
            <p className={styles.description}>Nós somos uma plataforma online que fornece acesso a materiais educacionais sobre diversos assuntos do aspectro de educação sexual. Mas de maneira aberta e nada pessoal, aqui todos podem falar e opinar, até você :).</p>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#efc3e6" fillOpacity="1" d="M0,64L48,64C96,64,192,64,288,85.3C384,107,480,149,576,186.7C672,224,768,256,864,261.3C960,267,1056,245,1152,245.3C1248,245,1344,267,1392,277.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        <div className={styles.thirdContent}>
          <h1 className={styles.title}>Confira alguns materiais</h1>
          <div className={styles.content}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/XsJTCKzL-Gg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/sYC1RAeKw7w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/l_YzXUrL6Ls" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Rcnc_6UVlcM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#efc3e6" fillOpacity="1" d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,96C672,117,768,139,864,149.3C960,160,1056,160,1152,154.7C1248,149,1344,139,1392,133.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        <div className={styles.fourthContent}>
          <h1 className={styles.title}>Nosso blog</h1>
          <h3 className={styles.subtitle}>Não fique de fora, pense também o que você pensa e compartilhe materiais legais :)</h3>
          <div className={styles.content}>
            <div className={styles.post}>
              <p className={styles.postDescription}>A educação sexual é um processo de aprendizagem que visa a formação de uma consciência crítica sobre a sexualidade, ajudando a pessoa a tomar decisões responsáveis e saudáveis sobre o seu comportamento sexual.</p>
              <h5 className={styles.postAuthor}>Por: <span className={styles.author}>Aula Proibida</span></h5>
            </div>
            <div className={styles.post}>
              <p className={styles.postDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros vitae nisl aliquam aliquet. Donec euismod, nisl vitae aliquam aliquet, nisl nisl aliquam nisl, vitae aliquam nisl nisl vitae nisl. Donec euismod, nisl vitae aliquam aliquet, nisl nisl aliquam nisl, vitae aliquam nisl nisl vitae nisl. Donec euismod, nisl vitae aliquam aliquet, nisl nisl aliquam nisl, vitae aliquam nisl nisl vitae nisl.</p>
              <h5 className={styles.postAuthor}>Por: <span className={styles.author}>Aula Proibida</span></h5>
            </div>
            <div className={styles.post}>
              <p className={styles.postDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros vitae nisl aliquam aliquet. Donec euismod, nisl vitae aliquam aliquet, nisl nisl aliquam nisl, vitae aliquam nisl nisl vitae nisl. Donec euismod, nisl vitae aliquam aliquet, nisl nisl aliquam nisl, vitae aliquam nisl nisl vitae nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros vitae nisl aliquam aliquet. Donec euismod, nisl vitae aliquam aliquet, nisl nisl aliquam nisl, vitae aliquam nisl nisl vitae nisl. Donec euismod, nisl vitae aliquam aliquet, nisl nisl aliquam nisl, vitae aliquam nisl nisl vitae nisl.</p>
              <h5 className={styles.postAuthor}>Por: <span className={styles.author}>Aula Proibida</span></h5>
            </div>
            <div className={styles.post}>
              <p className={styles.postDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros vitae nisl aliquam aliquet. Donec euismod, nisl vitae aliquam aliquet, nisl nisl aliquam nisl, vitae aliquam nisl nisl vitae nisl. Donec euismod, nisl vitae aliquam aliquet, nisl nisl aliquam nisl, vitae aliquam nisl nisl vitae nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros vitae nisl aliquam aliquet. Donec euismod, nisl vitae aliquam aliquet, nisl nisl aliquam nisl, vitae aliquam nisl nisl vitae nisl. Donec euismod, nisl vitae aliquam aliquet, nisl nisl aliquam nisl, vitae aliquam nisl nisl vitae nisl.</p>
              <h5 className={styles.postAuthor}>Por: <span className={styles.author}>Aula Proibida</span></h5>
            </div>
            <div className={styles.post}>
              <p className={styles.postDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros vitae nisl aliquam aliquet. Donec euismod, nisl vitae aliquam aliquet, nisl nisl aliquam nisl, vitae aliquam nisl nisl vitae nisl. Donec euismod, nisl vitae aliquam aliquet, nisl nisl aliquam nisl, vitae aliquam nisl nisl vitae nisl. Donec euismod, nisl vitae aliquam aliquet, nisl nisl aliquam nisl, vitae aliquam nisl nisl vitae nisl.</p>
              <h5 className={styles.postAuthor}>Por: <span className={styles.author}>Aula Proibida</span></h5>
            </div>
            <div className={styles.post}>
              <p className={styles.postDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros vitae nisl aliquam aliquet. Donec euismod, nisl vitae aliquam aliquet, nisl nisl aliquam nisl, vitae aliquam nisl nisl vitae nisl. Donec euismod, nisl vitae aliquam aliquet, nisl nisl aliquam nisl, vitae aliquam nisl nisl vitae nisl. Donec euismod, nisl vitae aliquam aliquet, nisl nisl aliquam nisl, vitae aliquam nisl nisl vitae nisl.</p>
              <h5 className={styles.postAuthor}>Por: <span className={styles.author}>Aula Proibida</span></h5>
            </div>
          </div>
          <button className={styles.button} onClick={() => window.location.href = '/blog'}><p>Ver mais</p><Icons.PaperPlane color="#8C89B8" width="25px" height="25px" /></button>
        </div>
      </div>
    </>
  )
}
