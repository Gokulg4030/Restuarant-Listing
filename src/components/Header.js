import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function header() {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="no logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCk9xQhb3uIhDmvY89FY-mMnhnk_M3hY7U8Q&usqp=CAU"
              width="50"
              height="40"
              
              className="d-inline-block align-top"
            />{' '}
            &nbsp;
            Find Me Here
            
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default header