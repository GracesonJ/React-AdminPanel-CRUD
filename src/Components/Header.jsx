import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header({insideDashboard}) {
  return (
    <>
        <Navbar className="pt-3" style={{backgroundColor:'black'}}>
            <Container>
              <Navbar.Brand>
                <Link to={"/"} style={{textDecoration:'none', color:"#940B92" }} className='fs-1'> Growth Hub</Link>
              </Navbar.Brand>
              {
                insideDashboard &&
                  <div  className="ms-auto btn btn-primary rounded m-1 p-2"> LOGOUT<i class="fa-solid fa-right-to-bracket fa-beat-fade ms-2"></i></div>
              }
            </Container> 
        </Navbar>
    </>
  )
}

export default Header