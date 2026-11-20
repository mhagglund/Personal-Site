import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

import { coalesce, cirium, springbrookSenior, springbrook, intel, pge, psu } from './jobDetailsConstants';
import StyledAccordian from '../../components/styledAccordian';

const About = () => {
  return (
    <>
      <div className="text-center">
        <h4 >
          Recent Jobs
        </h4>
      </div>
      <Accordion defaultActiveKey="0">
        <StyledAccordian
          index={"0"}
          title="Coalesce (Sept 2024 - Present)"
          content="Senior Software Engineer"
          listItems={coalesce}
        />
        <StyledAccordian
          index={"1"}
          title="Cirium (Jan 2023 - Sept 2024)"
          content="Senior Software Engineer"
          listItems={cirium}
        />
        <StyledAccordian
          index={"2"}
          title="Springbrook Software (July 2019 - Jan 2023)"
          content="Senior Software Engineer (Promotion)"
          listItems={springbrookSenior}
        />
        <StyledAccordian
          index={"3"}
          title="Springbrook Software (Sept 2018 - July 2019)"
          content="Software Engineer"
          listItems={springbrook}
        />
        <StyledAccordian
          index={"4"}
          title="Intel (April 2018 - Sept 2018)"
          content="MECOP Engineering Intern"
          listItems={intel}
        />
        <StyledAccordian
          index={"5"}
          title="PGE (April 2017 - April 2018)"
          content="Applications Support Tech V (MECOP Intern)"
          listItems={pge}
        />
        <StyledAccordian
          index={"6"}
          title="PSU Office of Information Technology (March 2015 - April 2017)"
          content="IT Helpdesk Technician"
          listItems={psu}
        />
      </Accordion>
    </>
  );
};

export default About;