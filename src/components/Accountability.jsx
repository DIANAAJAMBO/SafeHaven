import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import "../styles/Accountability.css"

const Accountability = () => {
  return (
    <Container fluid style={{ marginTop: '5%', backgroundColor: 'rgba(0, 0, 0, 0.9)', padding:'4%' }}>
      <Row>
        <Col>
          <h3 style={{color:'rgba(255, 255, 255, 1)', fontWeight:'700'}}>How we spend your donations <br/>and where it goes</h3>
          <p style={{color:'rgba(255, 255, 255, 1)', fontWeight:'400'}}>We understand that when you make a donation you want to know exactly where your money is going and we pledge to be transparent</p>
          <p></p>
          <div className="col-6">
            <div className="d-flex flex-row">
              <div className="d-flex align-items-center mb-2" style={{color:'rgba(255, 255, 255, 1)'}}>
                <div className="color-box" style={{ backgroundColor: '#BEF3C0', width: '12px', height: '12px' }}></div>
                <span className="ml-2">40% Direct Victim Service</span>
              </div>
              <div className="d-flex align-items-center mb-2" style={{color:'rgba(255, 255, 255, 1)'}}>
                <div className="color-box" style={{ backgroundColor: 'rgba(100, 42, 182, 0.8)', width: '12px', height: '12px' }}></div>
                <span className="ml-2">35% Legal Advocacy and Support</span>
              </div>
              <div className="d-flex align-items-center mb-2" style={{color:'rgba(255, 255, 255, 1)'}}>
                <div className="color-box" style={{ backgroundColor: '#FFF0CA', width: '12px', height: '12px' }}></div>
                <span className="ml-2">10% Medical Assistance</span>
              </div>
            </div>
            <div className="d-flex flex-row">
              <div className="d-flex align-items-center mb-2" style={{color:'rgba(255, 255, 255, 1)'}}>
                <div className="color-box" style={{ backgroundColor: '#F9CF64', width: '12px', height: '12px' }}></div>
                <span className="ml-2">5% Prevention and Education Programs</span>
              </div>
              <div className="d-flex align-items-center mb-2" style={{color:'rgba(255, 255, 255, 1)'}}>
                <div className="color-box" style={{ backgroundColor: '#F46188', width: '12px', height: '12px' }}></div>
                <span className="ml-2">10% Housing and Transitional Support</span>
              </div>
            </div>
          </div>
        </Col>
        <Col>
          
          <div class="doughnut-chart">
            <div class="doughnut-chart-inner">
              <div class="doughnut-chart-slice" style={{ '--offset': 0, '--value': 25 }}></div>
              <div class="doughnut-chart-slice" style={{ '--offset': 25, '--value': 35 }}></div>
              <div class="doughnut-chart-slice" style={{ '--offset': 60, '--value': 45 }}></div>
              <div class="doughnut-chart-slice" style={{ '--offset': 105, '--value': 55 }}></div>
              <div class="doughnut-chart-slice" style={{ '--offset': 160, '--value': 70 }}></div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>

  )
}

export default Accountability