import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Projects = () => {
  return (
    <>
      <h4>
        Here's some projects that I have in my github repository:
      </h4>
      <CardGroup>
        <Card style={{ width: '18rem' }} className="bg-secondary m-2">
          <Card.Body>
            <Card.Title>React To Red Pandas</Card.Title>
            <Card.Text>
              Here's a quick fun React project I spun up
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Card.Link href="https://github.com/mhagglund/React-To-Red-Pandas" className="text-white">Github</Card.Link>
            <Card.Link href="https://mhagglund.github.io/React-To-Red-Pandas/" className="text-white">Hosted Page</Card.Link>
          </Card.Footer>
        </Card>

        <Card style={{ width: '18rem' }} className="bg-secondary m-2">
          <Card.Body>
            <Card.Title>Version Checker</Card.Title>
            <Card.Text>
              A coding challenge example to check different version #s written in C#.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Card.Link href="https://github.com/mhagglund/VersionCheckerExample" className="text-white">Github</Card.Link>
          </Card.Footer>
        </Card>
      </CardGroup>
    </>
  );
};

export default Projects;