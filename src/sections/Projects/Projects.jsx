import styles from "./ProjectsStyles.module.css";
import Vercel from "../../assets/vercel.jpeg";
import Shopsy from "../../assets/shopsy.jpeg";
import Ebook from "../../assets/ebook.jpeg";
import Coral from "../../assets/coral.jpeg";
import Amazon from "../../assets/amazon.jpeg";
import coffeShop from "../../assets/coffe-shop.jpeg";
import Arino from "../../assets/arino.jpeg";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Vercel}
          link="https://techy-two.vercel.app/"
          h3="Vercel"
        />
        <ProjectCard
          src={Shopsy}
          link="https://shopsy-clothes.netlify.app/"
          h3="Shopsy"
        />
        <ProjectCard
          src={Ebook}
          link="https://ebook-moaz.netlify.app/"
          h3="Ebook"
        />
        <ProjectCard
          src={Coral}
          link="https://coral-moaz.netlify.app/"
          h3="Coral"
        />
        <ProjectCard
          src={Amazon}
          link="https://amazon-moaz.netlify.app/"
          h3="Amazon"
        />
        <ProjectCard
          src={coffeShop}
          link="https://coffe-shop-moaz.netlify.app/#home"
          h3="Coffe Shop"
        />
        <ProjectCard
          src={Arino}
          link="https://arino-moaz.netlify.app/"
          h3="Arino"
        />
      </div>
    </section>
  );
}

export default Projects;
