import React from 'react'
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';


function Restreview({review}) {
    const [open, setOpen] = useState(false);
  return (
   

review.map(item=>(
    <Card style={{ width: '14rem' ,
    float:'left'}} className='border m-4'>
    <Card.Body>
      <Card.Title>{item.name}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{item.date}</Card.Subtitle>
      <Card.Text>
        Rating: {item.rating}
      </Card.Text>
      <Card.Text ></Card.Text>
      <Button className='btn btn-dark'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Comments
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
        {item.comments}
        </div>
      </Collapse>
    </Card.Body>
  </Card>
))


    
  )
}

export default Restreview