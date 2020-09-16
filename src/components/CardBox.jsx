import React from 'react';
// import './Box.css';
import { Button, Card } from 'react-bootstrap';
import cardInfo from './CardInfo';

const CardBox = () => {

  const renderCard = (card, index) => {
    return (
      <Card style={{ width: '18rem' }} key={index}>
        <Card.Img
          variant='top'
          src='holder.js/100px180'
          src={card.image}
          alt='No Image'
        />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.text}</Card.Text>
          <Button variant='primary'>Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  };

  return <div className='App'>{cardInfo.map(renderCard)}</div>;
};

export default CardBox;
