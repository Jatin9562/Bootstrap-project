import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


export class Home extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://source.unsplash.com/1600x500/?python,technology"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className="btn btn-success">Welcome</h3>

                            <p><b>Dive deep into technology</b></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://source.unsplash.com/1600x500/?laptop,programming"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3 className="btn btn-success">Welcome</h3>
                            <p><b>Dive deep into technology</b></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://source.unsplash.com/1600x500/?desktop,laptop"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3 className="btn btn-success">Welcome</h3>
                            <p><b>Dive deep into technology</b></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div className="container my-4">
                    <div className="row">
                        <Card style={{ width: '18rem', margin: '20px' }}>
                            <Card.Img variant="top" src="laptop.jpg" />
                            <Card.Body>
                                <Card.Title>For Students</Card.Title>
                                <Card.Text>Laptop specially designed for Students are available!  </Card.Text>
                                <Button variant="primary">Book Now</Button>
                            </Card.Body>
                        </Card>
                        <div>
                            <Card style={{ width: '18rem', margin: '20px' }}>
                                <Card.Img variant="top" src="Premium.jpg" />
                                <Card.Body>
                                    <Card.Title>Premium</Card.Title>
                                    <Card.Text>
                                        Premium Laptops like Macbook also available!
                                        </Card.Text>
                                    <Button variant="warning">Book Now</Button>
                                </Card.Body>
                            </Card>


                        </div>
                        <div>
                            <Card style={{ width: '18rem', margin: '20px' }}>
                                <Card.Img variant="top" src="Gaming.jpg" />
                                <Card.Body>
                                    <Card.Title>Gaming</Card.Title>
                                    <Card.Text>
                                        Gaming Laptops with high end specifications available
                                        </Card.Text>
                                    <Button variant="danger">Book Now</Button>
                                </Card.Body>
                            </Card>


                        </div>






                    </div>



                </div>
                <div className="card" style={{backgroundColor:'black'}}>
                    <h5 className="card-header text-warning">Contact Us</h5>
                    <div className="card-body">
                        <p className="card-text text-info">Consumer Customers <br/>
                        1800 108 4747 <br/>
                        Business Customers <br/>
                        1800 108 4746 <br/>
                        Mon-Fri 9am - 7pm <br/>
(excl. public holidays)</p>


                    </div>


                </div>


            </div>
        )
    }
}

export default Home
