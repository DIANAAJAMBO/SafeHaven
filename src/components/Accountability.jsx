import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import "../styles/Accountability.css";
import { Doughnut } from 'react-chartjs-2';
import { ArcElement } from 'chart.js';
import { Chart } from 'chart.js';

Chart.register(ArcElement);

const Accountability = () => {

  const data = {
    labels: [],
    datasets: [
      {
        label: 'My First Dataset',
        data: [40, 35, 10, 5, 10],
        backgroundColor: [
          '#BEF3C0',
          'rgba(100, 42, 182, 0.8)',
          '#FFF0CA',
          '#F9CF64',
          '#F46188'
        ],
        hoverOffset: 4,
        borderWidth: 0
      }
    ]
  };

  const options = {
    responsive: true,
  };

  return (
    <Container fluid style={{ marginTop: '5%', backgroundColor: 'rgba(0, 0, 0, 0.9)', padding: '4%' }}>
      <Row>
        <Col>
          <h3 style={{ color: 'rgba(255, 255, 255, 1)', fontWeight: '700' }}>How we spend your donations <br />and where it goes</h3>
          <p style={{ color: 'rgba(255, 255, 255, 1)', fontWeight: '400' }}>We understand that when you make a donation you want to know exactly where your money is going and we pledge to be transparent</p>
          <p></p>
          <div className="col-6" style={{ width: '100%' }}>
            <div className="d-flex flex-row">
              <div className="d-flex align-items-center mb-2" style={{ color: 'rgba(255, 255, 255, 1)' }}>
                <div className="color-box" style={{ backgroundColor: '#BEF3C0', width: '12px', height: '11px', borderRadius: '3px' }}></div>
                <span className="ml-2" style={{ paddingLeft: '10px' }}>40% Direct Victim Service</span>
              </div>
              <div className="d-flex align-items-center mb-2  " style={{ color: 'rgba(255, 255, 255, 1)', marginLeft: '1%' }}>
                <div className="color-box " style={{ backgroundColor: 'rgba(100, 42, 182, 0.8)', width: '12px', height: '11px', borderRadius: '3px' }}></div>
                <span className="ml-2 " style={{ paddingLeft: '10px' }}>35% Legal Advocacy and Support</span>
              </div>
              <div className="d-flex align-items-center mb-2" style={{ color: 'rgba(255, 255, 255, 1)', marginLeft: '1%' }}>
                <div className="color-box" style={{ backgroundColor: '#FFF0CA', width: '12px', height: '11px', borderRadius: '3px' }}></div>
                <span className="ml-2" style={{ paddingLeft: '10px' }}>10% Medical Assistance</span>
              </div>
            </div>
            <div className="d-flex flex-row">
              <div className="d-flex align-items-center mb-2" style={{ color: 'rgba(255, 255, 255, 1)' }}>
                <div className="color-box" style={{ backgroundColor: '#F9CF64', width: '12px', height: '11px', borderRadius: '3px' }}></div>
                <span className="ml-2" style={{ paddingLeft: '10px' }}>5% Prevention and Education Programs</span>
              </div>
              <div className="d-flex align-items-center mb-2" style={{ color: 'rgba(255, 255, 255, 1)', marginLeft: '1%' }}>
                <div className="color-box" style={{ backgroundColor: '#F46188', width: '12px', height: '11px', borderRadius: '3px' }}></div>
                <span className="ml-2" style={{ paddingLeft: '10px' }}>10% Housing and Transitional Support</span>
              </div>
            </div>
          </div>
        </Col>
        <Col  className="d-flex justify-content-center align-items-center">
          <div className="doughnut-chart">
            <Doughnut data={data} options={options} />
          </div>
        </Col>
      </Row>
    </Container>

  )
}

export default Accountability