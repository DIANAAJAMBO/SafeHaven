import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import agent from '../assets/agent.jpg';
import { Bell } from 'react-bootstrap-icons';
import Badge from 'react-bootstrap/Badge';


function FormExample() {
    return (
        <Navbar className="bg-body-tertiary justify-content-between">

            <Form inline className="ms-auto ms-2">
                <Row className=''>
                    <Col xs="auto">
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            className=" mr-sm-2"
                        />
                    </Col>
                </Row>
            </Form>

            <Col xs="auto" className="d-flex align-items-center mx-5">
                <img
                    src={agent}
                    className="rounded-circle me-3"
                    alt="Avatar"
                    style={{ width: "50px", height: "50px" }}
                />
                <span className='m-auto'>Agent Adeola</span>
                <Bell size={25} className='m-auto mx-5' />
            </Col>

        </Navbar>
    );
}

export default FormExample;