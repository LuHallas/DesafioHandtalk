import Footer from "../components/Footer";
import Header from "../components/Header";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <section className="s_profile">
          <img className="profileImage" src="/img/profile.png" alt="Foto de perfil do usuário"></img>
          <h2>Fulane</h2>
          <button className="primary-btn">Entre em contato</button>
        </section>
        <section className="s_about">
          <h2>Sobre mim</h2>
          <div>
            <p>Qualquer conteúdo textual inventado da sua preferência</p>
          </div>

          <div className="list-container">
            <h3>Habilidades</h3>
            <ul>
              <li></li>
            </ul>
          </div>

          <div className="list-container">
            <h4>Ferramentas</h4>
            <ul>
              <li>Sketch</li>
            </ul>
          </div>

          <div className="list-container">
            <h4>Metodologias</h4>
            <ul>
              <li>Duplo Diamante</li>
              <li>Scrum</li>
            </ul>
          </div>

          <div className="list-container">
            <h4>Banco de dados</h4>
            <ul>
              <li>Firebase</li>
            </ul>
          </div>
        </section>
        <section className="s_projects">
          <h2>Projetos</h2>
          <div className="project-content">
            <img src='/img/project.png' alt="Imagem de projeto" />
            <h3>Nome do Projeto</h3>
            <p>Descrição do projeto</p>
            <button className="primary-btn">Ver mais</button>
          </div>
          <button className="primary-btn">Ver todos os projetos</button>
        </section>
        <section className="s_posts">
          <h2>Últimas postagens</h2>
          <ul>
            <li>
              <p>DD/MM/yyyy - Uma postagem interessante</p>
            </li>
            <li>
              <p>DD/MM/yyyy - Outra postagem interessante</p>
            </li>
            <li>
              <p>DD/MM/yyyy - Uma postagem interessante</p>
            </li>
            <li>
              <p>DD/MM/yyyy - Outra postagem interessante</p>
            </li>
            <li>
              <p>DD/MM/yyyy - Outra postagem interessante</p>
            </li>
          </ul>
          <button className="primary-btn">Ver todos os projetos</button>  
        </section>
      </main>
      <Footer/>
    </div>
  );
};

export default Home;
