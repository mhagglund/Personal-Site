import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';

import StyledCard from '../../components/styledCard';

const Projects = () => {
  return (
    <>
      <h4 className="text-center">
        Here's some projects that I have in my github repository:
      </h4>
      <CardGroup>
        <StyledCard
          title="React To Red Pandas"
          content="Here's a quick fun React project I spun up"
          links={[{ href: "https://github.com/mhagglund/React-To-Red-Pandas", text: "Github" }, { href: "https://mhagglund.github.io/React-To-Red-Pandas/", text: "Hosted Page" }]}
        />
        <StyledCard
          title="Version Checker"
          content="A coding challenge example to check different version #s written in C#"
          links={[{ href: "https://github.com/mhagglund/VersionCheckerExample", text: "Github" }]}
        />
      </CardGroup>
    </>
  );
};

export default Projects;