import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css";

function SignUpModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>

            <Button variant="danger" onClick={handleShow}>
                Sign Up
        </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Sign Up Here</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <form>
                            <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                                Your email</label>
                            <input type="email" id="defaultFormLoginEmailEx" className="form-control" />
                            <label htmlFor="defaultFormLoginNumber" className="grey-text">
                               Your Phone Number</label>
                            <input type="number" id="defaultFormLoginNumber" className="form-control" />
                            <label htmlFor="defaultFormLoginPassword" className="grey-text">
                               Password</label>
                            <input type="password" id="defaultFormLoginPassword" className="form-control" />
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default SignUpModal
