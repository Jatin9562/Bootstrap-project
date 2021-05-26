
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import Loginmodal from './Loginmodal'
import SignUpModal from './SignUpModal'

import React, { Component } from 'react'

export class Header extends Component {
    
    render() {
        return (
            <>

                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/home">Info-Soft</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href='/home'>Home</Nav.Link>
                        <Nav.Link href="/features">Features</Nav.Link>
                        <Nav.Link href="/pricing">Pricing</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                    <div className="mx-2">
                        <Loginmodal/>
                    </div>
                    <div className="mx-2">
                        <SignUpModal/>
                    </div>
                </Navbar>


            </>
        )
    }
}

export default Header


