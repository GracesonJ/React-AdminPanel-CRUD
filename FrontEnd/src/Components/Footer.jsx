import React from 'react'
import { Row, Col } from 'react-bootstrap'
function Footer() {
  return (
    <> 
      <footer className="text-white pt-5 pb-4" style={{backgroundColor:'black'}}>
        <div className="container text-center text-md-left">
          <Row className="text-center text-md-left">
            <Col>
              <h4 className="mb-4 font-weight-bold" style={{color:'#DA0C81'}}>Growth Hub</h4>
              <p>One Stop Destination for all Software Development Projects... Where Users can Add and Manage their Projects. As well as Access all Projects available in our Website. What are you waiting for ! ! !</p>
            </Col>
            <Col>
              <h4 className="mb-4 font-weight-bold" style={{color:'#DA0C81'}}>Links</h4>
              <ul className='me-4 gap-2'>
                <li className='p-1'><a href="/" className="text-white" style={{textDecoration:"none"}}>Home</a></li>
                <li className='p-1'><a href="/login" className="text-white" style={{textDecoration:"none"}}>Login</a></li>
                <li className='p-1'><a href="/register" className="text-white" style={{textDecoration:"none"}}>Register</a></li>
                <li className='p-1'><a href="projects" className="text-white" style={{textDecoration:"none"}}>Projects</a></li>
              </ul>
            </Col>
            <Col> 
              <h4 className="mb-4 font-weight-bold" style={{color:'#DA0C81'}}>Contact</h4>
              <ul className=''>
                <li className='p-2'><a href=""><i class="fa-solid fa-envelopes-bulk"></i></a> growthhub@gmail.com</li>
                <li className='p-2'><a href=""><i class="fa-sharp fa-solid fa-phone-volume"></i></a> 7894561230</li>
                <li></li>
              </ul>
            </Col>
          </Row>
        </div>
        <hr />
        <div className="text-center container color-white">
          <ul className='d-flex justify-content-around w-25' style={{marginLeft:"400px"}}>
            <a href=""><i class="fa-solid fa-x  fs-3" ></i></a> 
            <a href=""><i class="fa-brands fa-facebook fs-3" ></i></a>
            <a href=""><i class="fa-brands fa-square-instagram fs-3"></i></a>
            <a href=""><i class="fa-brands fa-linkedin fs-3"></i></a>
          </ul>
          <p>Copyright &copy; ProjectFair | All rights reserved.</p>
        </div>

      </footer>
    </>
  )
}

export default Footer