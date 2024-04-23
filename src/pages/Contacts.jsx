import React from 'react'
import { Card } from 'react-bootstrap';
import Lawyer from '../assets/Lawyer.jpg'
import Socialworker from '../assets/socialworker.jpg'
import Counsellor from '../assets/counsellor.jpg'
import Lawyer2 from '../assets/lawyer2.png'
import Counsellor2 from '../assets/counsellor2.png'
import Socialworker2 from '../assets/socialworker2.png'
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

const Contacts = () => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            <Card className="contact-card">
                <Card.Img variant="top" src={Lawyer} alt="Avatar" className="avatar m-auto p-2" />
                <Card.Body>
                    <Card.Title className="text-center font-weight-bold"><b>Angela Moses</b></Card.Title>
                    <Card.Subtitle className="text-center" style={{color:'rgba(82, 85, 96, 0.8)'}}>Lawyer</Card.Subtitle>
                    <Card.Text className="card-text text-center mt-3">
                        <p>< BsTelephone/> Contact: +234 6644 231</p>
                        <p><AiOutlineMail/> Email: angelamoses@gmail.com</p>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="contact-card">
                <Card.Img variant="top" src={Socialworker} alt="Avatar" className="avatar m-auto p-2" />
                <Card.Body>
                    <Card.Title className="text-center"><b>Olawale Munna</b></Card.Title>
                    <Card.Subtitle className="text-center" style={{color:'rgba(82, 85, 96, 0.8)'}}>Social Worker</Card.Subtitle>
                    <Card.Text className="card-text text-center mt-3">
                        <p>< BsTelephone/> Contact: +234 6644 231</p>
                        <p><AiOutlineMail/> Email: olawalemunna@gmail.com</p>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="contact-card">
                <Card.Img variant="top" src={Counsellor} alt="Avatar" className="avatar m-auto p-2" />
                <Card.Body>
                    <Card.Title className="text-center"><b>Motunrayo Davis</b></Card.Title>
                    <Card.Subtitle className="text-center" style={{color:'rgba(82, 85, 96, 0.8)'}}>Counsellor</Card.Subtitle>
                    <Card.Text className="card-text text-center mt-3">
                        <p>< BsTelephone/> Contact: +234 6644 231</p>
                        <p><AiOutlineMail/> Email: motunrayodavis@gmail.com</p>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="contact-card">
                <Card.Img variant="top" src={Lawyer2} alt="Avatar" className="avatar m-auto p-2" />
                <Card.Body>
                    <Card.Title className="text-center"><b>Philip Sunday</b></Card.Title>
                    <Card.Subtitle className="text-center" style={{color:'rgba(82, 85, 96, 0.8)'}}>Lawyer</Card.Subtitle>
                    <Card.Text className="card-text text-center mt-3">
                        <p>< BsTelephone/> Contact: +234 6644 231</p>
                        <p><AiOutlineMail/> Email: motunrayodavis@gmail.com</p>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="contact-card">
                <Card.Img variant="top" src={Socialworker2} alt="Avatar" className="avatar m-auto p-2" />
                <Card.Body>
                    <Card.Title className="text-center"><b>Esther Samuel</b></Card.Title>
                    <Card.Subtitle className="text-center" style={{color:'rgba(82, 85, 96, 0.8)'}}>Social Worker</Card.Subtitle>
                    <Card.Text className="card-text text-center mt-3">
                        <p>< BsTelephone/> Contact: +234 6644 231</p>
                        <p><AiOutlineMail/> Email: esthersamuel@gmail.com</p>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="contact-card">
                <Card.Img variant="top" src={Counsellor2} alt="Avatar" className="avatar m-auto p-2" />
                <Card.Body>
                    <Card.Title className="text-center"><b>Paul Mensah</b></Card.Title>
                    <Card.Subtitle className="text-center" style={{color:'rgba(82, 85, 96, 0.8)'}}>Counsellor</Card.Subtitle>
                    <Card.Text className="card-text text-center mt-3">
                        <p>< BsTelephone/> Contact: +234 6644 231</p>
                        <p><AiOutlineMail/> Email: paulmensah@gmail.com</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Contacts