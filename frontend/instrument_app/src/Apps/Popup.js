import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class Popup extends Component {

    state = {show:true};

    showModal = () => {
        this.setState({show:true});
    };

    hideModal = () => {
        this.setState({show:false});
    };

    render () {
        return (
            <>
                <Modal show={this.state.show} onHide={this.hideModal}>
                    <Modal.Header>
                        <Modal.Title>Enter Username</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form method="post" class="form-group">
                            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <button class="btn btn-secondary" onClick={this.hideModal}>Submit</button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
    
};

export default Popup;