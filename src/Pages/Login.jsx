import React from 'react'
import logPic from '../Assets/landing bg.png'
import { Row, Col } from 'react-bootstrap'
function Login() {
  return (
    <>
      <div className="bg-black p-5">
        <div className="container ">
          <Row className="row">
            <Col className="col-md-6 mt-5">
              <div className="text">
                <h1 style={{color:"#940B92"}}>Welcome to Admin Portal</h1>
              </div>
              <img className='mt-5' src={logPic} alt="" />
            </Col>
            <Col className="col-md-6 d-flex justify-content-center align-items-center">
              <form>
                <div className="mb-3 text-center">
                  <h3 style={{color:"#DA0C81"}}>Admin Login</h3>
                </div>
                <div class="mb-3">
                  <label for="username" class="form-label">Username</label>
                  <input type="text" class="form-control" id="username" placeholder='username' required autoComplete='off'/>
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Password</label>
                  <input type="password" class="form-control" id="password"/>
                </div>
                <button type="submit" class="btn mt-3 btn-primary">Submit</button>
              </form>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default Login