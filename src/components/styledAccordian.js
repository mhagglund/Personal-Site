import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

type AccordianProps = {
  index: string,
  title: string,
  content: string,
  listItems?: string[]
}
const StyledAccordian = ({ index, title, content, listItems }: AccordianProps) => {
  return (
    <Accordion.Item eventKey={index} className="bg-dark">
      <Accordion.Header>
        <div className="d-block">
          <div><strong>{title}</strong></div>
          <i>{content}</i>
        </div>
      </Accordion.Header>
      <Accordion.Body>
        {listItems &&
          <ul className="list-group-flush text-left">
            {listItems.map(item => {
              return (<li className="bg-dark text-white">{item}</li>)
            })}
          </ul>
        }

      </Accordion.Body>
    </Accordion.Item>
  );
}

export default StyledAccordian;