import React from 'react'
import { Table } from 'react-bootstrap';

const Cases = ({ cases }) => {
    return (
        <div className="container mt-5">
            <table className="table">
                <thead>
                    <tr>
                        <th>S/N</th>
                        <th>Email</th>
                        <th>Abuse Type</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="shadow-row">
                        <td>1</td>
                        <td>kennyb@gmail.com</td>
                        <td>domestic abuse</td>
                        <td>12-03-2024</td>
                        <td style={{color:'red'}}>Pending</td>
                    </tr>
                    <tr className="shadow-row">
                        <td>2</td>
                        <td>Moyinlaw@gmail.com</td>
                        <td>physical abuse</td>
                        <td>12-03-2024</td>
                        <td style={{color:'purple'}}>Ongoing</td>
                    </tr>
                    <tr className="shadow-row">
                        <td>3</td>
                        <td>adeife@gmail.com</td>
                        <td>sexual abuse</td>
                        <td>7-03-2024</td>
                        <td style={{color:'green'}}>Done</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Cases