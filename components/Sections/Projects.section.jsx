import React from "react";
import Card from "../Elements/Card";

const Projects = () => {
  return (
    <div className="flex flex-wrap justify-center -mx-1 lg:-mx-4" id="projects">
      <Card
        texto="Amazon Spain Mockup created in React.js and deployed on firebase"
        imagen="https://media.giphy.com/media/OzsCCqkyMUpr68gSKa/giphy.gif"
        github="https://github.com/lucasvidela94/react-amazon-store"
        deploy="https://clon-de-20f60.web.app/"
        alt="Amazon mockup"
      />
      <Card
        texto="Administrative tool for time management made on Ruby on Rails"
        imagen="https://media.giphy.com/media/czOpg0e3S2UoB6bArs/giphy.gif"
        github="https://github.com/BC-MAY-21-ROR/kata-06-reloj-checador-m22-krc-t1-reilero-02"
        deploy="https://hidden-castle-14008.herokuapp.com/"
        alt="Check in clock"
      />
      <Card
        texto="Web application for small business to keep their budgets"
        imagen="https://media.giphy.com/media/7pjkNjEgl11sYfhsEX/giphy.gif"
        github="https://github.com/BC-MAY-21-ROR/proyecto-final-SAPE-m22-pf-t2"
        deploy=""
        alt="Sapec app"
      />
      <Card
        texto="Portfolio web made on NextJS and Tailwind"
        imagen="https://i.postimg.cc/N0FtL0XX/portfolio.png"
        github="https://github.com/lucasvidela94/lucasvidela"
        deploy=""
        alt="Portfolio"
      />
    </div>
  );
};

export default Projects;
