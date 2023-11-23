import React from 'react'
import BgPic from '../Assets/landing bg.png'
import { Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'


function Home() {
  return (
    <>
    <Header/>
        <div className="container-fluid" style={{backgroundColor:"black"}}>
            <Row>
                <Col sm={12} md={6}>
                    <div className="m-5 " style={{color:'#ffffff'}}>
                        {/* <h1 className='m-3' style={{color:'#F6635C'}}>Guid Hub</h1> */}
                        <h3 className='mt-5 m-3' style={{color:'#DA0C81'}}>Student Management</h3>
                        <p className='m-3 fs-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam quia ea sed hic voluptates perferendis itaque cum beatae unde assumenda fugiat commodi repudiandae, quasi aspernatur ipsam repellat quibusdam dicta maiores!</p>
                        <Link to={'/Login'} className='m-3 btn btn-primary border rounded'>Admin Login</Link>
                    </div>
                </Col>
                <Col sm={12} md={6}>
                    <div className="p-5 mt-1">
                        <img width={'500px'} height={'500px'} src={BgPic} alt="" />
                    </div>
                </Col>
            </Row>
        </div>
      
    </>
  )
}

export default Home