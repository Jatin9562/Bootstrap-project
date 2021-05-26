import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export class Pricing extends Component {
    render() {
        return (
            <>
                <div className="container my-4">
                    <div className="row">
                        <Card style={{ width: '18rem', margin: '20px' }}>
                            <Card.Img variant="top" src="Omen.jpg" />
                            <Card.Body>
                                <Card.Title>Dell G3 15 Gaming Laptop</Card.Title>
                                <Card.Text><b>Price:₹ 72,989.97</b> <br />
                           <i> Description:</i><li> 10th Generation Intel® Core™ i5-10300H</li>
                                    <li>Windows 10 Home Single Language</li>
                                    <li>NVIDIA® GeForce® GTX 1650 4GB GDDR6</li>
                                    <li>8GB DDR4-2933MHz</li>

                                </Card.Text>
                                <Button variant="primary">Book Now</Button>
                            </Card.Body>
                        </Card>
                        <div>
                            <Card style={{ width: '18rem', margin: '20px' }}>
                                <Card.Img variant="top" src="Predator.jpg" />
                                <Card.Body>
                                <Card.Title>Predator Gaming Laptop</Card.Title>
                                <Card.Text><b>Price:₹ 92,989.97</b> <br />
                           <i> Description:</i><li> 10th Generation Intel® Core™ i5-10300H</li>
                                    <li>Windows 10 Home Single Language</li>
                                    <li>NVIDIA® GeForce® GTX 1650 4GB GDDR6</li>
                                    <li>8GB DDR4-2933MHz</li>

                                </Card.Text>
                                    <Button variant="warning">Book Now</Button>
                                </Card.Body>
                            </Card>


                        </div>
                        <div>
                            <Card style={{ width: '18rem', margin: '20px' }}>
                                <Card.Img variant="top" src="Hp.jpg" />
                                <Card.Body>
                                <Card.Title>Omen Gaming Laptop</Card.Title>
                                <Card.Text><b>Price:₹ 82,989.97</b> <br />
                           <i> Description:</i><li> 10th Generation Intel® Core™ i5-10300H</li>
                                    <li>Windows 10 Home Single Language</li>
                                    <li>NVIDIA® GeForce® GTX 1650 4GB GDDR6</li>
                                    <li>8GB DDR4-2933MHz</li>

                                </Card.Text>
                                    <Button variant="danger">Book Now</Button>
                                </Card.Body>
                            </Card>


                        </div>






                    </div>
                </div>

                <div className="container my-4">
                    <div className="row">
                        <Card style={{ width: '18rem', margin: '20px' }}>
                            <Card.Img variant="top" src="Dell.jpg" />
                            <Card.Body>
                            <Card.Title>AlienWare Gaming Laptop</Card.Title>
                                <Card.Text><b>Price:₹ 102,989.97</b> <br />
                           <i> Description:</i><li> 10th Generation Intel® Core™ i5-10300H</li>
                                    <li>Windows 10 Home Single Language</li>
                                    <li>NVIDIA® GeForce® GTX 1650 4GB GDDR6</li>
                                    <li>8GB DDR4-2933MHz</li>

                                </Card.Text>
                                <Button variant="success">Book Now</Button>
                            </Card.Body>
                        </Card>
                        <div>
                            <Card style={{ width: '18rem', margin: '20px' }}>
                                <Card.Img variant="top" src="Predator.jpg" />
                                <Card.Body>
                                <Card.Title>Hp Gaming Laptop</Card.Title>
                                <Card.Text><b>Price:₹ 62,989.97</b> <br />
                           <i> Description:</i><li> 10th Generation Intel® Core™ i5-10300H</li>
                                    <li>Windows 10 Home Single Language</li>
                                    <li>NVIDIA® GeForce® GTX 1650 4GB GDDR6</li>
                                    <li>8GB DDR4-2933MHz</li>

                                </Card.Text>
                                    <Button variant="info">Book Now</Button>
                                </Card.Body>
                            </Card>


                        </div>
                        <div>
                            <Card style={{ width: '18rem', margin: '20px' }}>
                                <Card.Img variant="top" src="Envy.jpg" />
                                <Card.Body>
                                <Card.Title>Asus Gaming Laptop</Card.Title>
                                <Card.Text><b>Price:₹ 92,989.97</b> <br />
                           <i> Description:</i><li> 10th Generation Intel® Core™ i5-10300H</li>
                                    <li>Windows 10 Home Single Language</li>
                                    <li>NVIDIA® GeForce® GTX 1650 4GB GDDR6</li>
                                    <li>8GB DDR4-2933MHz</li>

                                </Card.Text>
                                    <Button variant="dark">Book Now</Button>
                                </Card.Body>
                            </Card>


                        </div>






                    </div>
                </div>



            </>


        )

    }
}

export default Pricing
