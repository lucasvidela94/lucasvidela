import { Header, About, Projects, Footer, Skills, ButtonToTop} from "../components";



const Home = () => {
  return (
    <div className="w-full">
      <Header />
      <About />
      <Projects />
      <Skills />
      <Footer />
      <ButtonToTop />
     </div>
  );
};

export default Home;
