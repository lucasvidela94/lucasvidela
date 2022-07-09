import { Header, About, Projects, Footer, Skills } from "../components";

const Home = () => {
  return (
    <div className="w-full">
      <Header />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
};

export default Home;
