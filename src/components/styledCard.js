import React from 'react';
import Card from 'react-bootstrap/Card';

type Link = {
  href: string,
  text: string
};

type CardProps = {
  title: string,
  content: string,
  links?: Link[]
}
const StyledCard = ({ title, content, links }: CardProps) => {
  return (
    <Card className="bg-dark text-white m-2">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {content}
        </Card.Text>
      </Card.Body>

      {links && <Card.Footer>
        {links.map(link => {
          return (
            <Card.Link href={link.href} target="_blank" className="text-white">{link.text}</Card.Link>
          );
        })}
      </Card.Footer>
      }
    </Card >
  );
}

export default StyledCard;