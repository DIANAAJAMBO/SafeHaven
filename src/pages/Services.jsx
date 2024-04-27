import React from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap';
import Holdinghands from '../assets/holdinghands.png';
import Projects from '../components/Projects'
import Contribute from '../components/Contribute'
import Ourevents from '../components/Ourevents'
import { RiPsychotherapyLine } from "react-icons/ri";
import { GoLaw } from "react-icons/go";
import { CiMedicalClipboard } from "react-icons/ci";
import { SlSupport } from "react-icons/sl";
import { GrGroup } from "react-icons/gr";
import { PiBrain } from "react-icons/pi";

const Services = () => {
  return (
    <>
      <Container fluid className="services d-flex flex-column justify-content-center mt-5   text-black" >
        <Row className="">
          <Col className='' md={6} style={{ padding: '5%', width: '' }}>
            <Row >
              <div style={{ display: 'flex' }}>
                <hr style={{ width: '20%' }} />
                <p style={{ marginLeft: '15px' }}><b>KNOW ABOUT US</b></p>
              </div>
              <h5><b>We provide support for anyone going through any form of abuses</b></h5>
            </Row>
            <Row>
              <p style={{ fontSize: '.9rem' }}>Our mission is to offer a safe haven for those who have experienced such trauma, fostering a nurturing environment where survivors can heal and rebuild their lives. We strive to empower survivors to reclaim their dignity, voice, and agency.</p>
            </Row>
            <Row className="mt-1">
              <p style={{ fontSize: '.9rem' }}>Our team of trained professionals and volunteers work tirelessly to ensure that survivors receive the care, respect, and justice they deserve. Together, we stand as a beacon of hope, solidarity, and compassion, advocating for a world free from violence and oppression.</p>
            </Row>
          </Col>
          <Col className='' md={6} style={{ padding: '5%' }}>
            <div style={{}}>
              <img src={Holdinghands} alt="Hand" style={{ height: '350px', width: '100%', borderRadius: '8px' }} />
            </div>
          </Col>
        </Row>
        <Row className="mt-5 p-5" style={{ backgroundColor: 'rgba(244, 97, 136, 0.2)' }}>
          <Col className='' md={6} style={{ marginLeft: '', width: '' }}>
            <Row >
              <div style={{ display: 'flex' }}>
                <hr style={{ width: '20%', marginLeft: '10px' }} />
                <p style={{ marginLeft: '15px' }}><b>WHAT WE DO</b></p>
              </div>
              <h5><b>Some services we provide to Abused victims</b></h5>
            </Row>
            <Row>
              <div style={{ display: 'flex', fontSize: '.9rem' }}>
                <RiPsychotherapyLine style={{ margin: '' }} size={35} />
                <p><b>Counselling:</b>we offer one-on-one sessions to abuse victims to help them process their experiences, understand their emotions, and develop coping strategies.</p>
              </div>
            </Row>
            <Row className="mt-3">
              <div style={{ display: 'flex', fontSize: '.9rem' }}>
                <CiMedicalClipboard size={35} />
                <p><b>Medical Support:</b>We collaborate with healthcare professionals and other support services to provide comprehensive care.</p>
              </div>
            </Row>
            <Row className="mt-3">
              <div style={{ display: 'flex', fontSize: '.9rem' }}>
                <GrGroup size={40} />
                <p style={{}}><b>Peer Support</b>We offer survivors the opportunity to connect with others who have gone through similar experience scollaborate with healthcare professionals and other support services to provide comprehensive care.</p>
              </div>
            </Row>
          </Col>
          <Col className='' md={6} style={{ marginTop: '5%' }}>
            <Row>
              <div style={{ display: 'flex', fontSize: '.9rem' }}>
                <GoLaw size={40} />
                <p><b>Legal Advocacy:</b>We help victims ito identify their rights, discuss legal options available to them, and provide guidance on how to navigate the legal system.</p>
              </div>
            </Row>
            <Row className="mt-2">
              <div style={{ display: 'flex', fontSize: '.9rem' }}>
                <SlSupport size={40} />
                <p><b>Creating safe spaces:</b>We create safe and confidential environments where abuse victims can come together to share their experiences, emotions, and challenges without fear of judgment or retaliation.</p>
              </div>
            </Row>
            <Row className="mt-3">
              <div style={{ display: 'flex', fontSize: '.9rem' }}>
                <PiBrain size={40} />
                <p style={{ fontSize: '.9rem' }}><b>Psyco education</b>Support groups may include psychoeducational components where participants learn about the dynamics of abuse, trauma responses, coping skills, self-care techniques, and available resources.</p>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
      <Projects />
      <Contribute />
      <Ourevents />
    </>

  )
}

export default Services