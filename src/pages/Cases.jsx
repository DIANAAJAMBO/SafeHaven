import React, {useState, useEffect} from 'react'
import { Table } from 'react-bootstrap';
import axios from 'axios';


const Cases = () => {
    const [cases, setCases] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://safeheaven-lnt5.onrender.com/get_reports');
                setCases(response.data);
            } catch (error) {
                console.error('Error fetching cases:', error);
            }
        };

        fetchData();
    }, []);

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
                    {cases.map((item, index) => (
                        <tr key={item.id} className="shadow-row">
                            <td>{index + 1}</td>
                            <td>{item.email}</td>
                            <td>{item.abuse_type}</td>
                            <td>{item.date}</td>
                            <td style={{ color: item.status === 'Pending' ? 'red' : item.status === 'Ongoing' ? 'purple' : 'green' }}>{item.status}</td>
                        </tr>
                    ))}
                </tbody>
                {/* <tbody>
                    <tr className="shadow-row">
                        <td>1</td>
                        <td>kennyb@gmail.com</td>
                        <td>domestic abuse</td>
                        <td>12-03-2024</td>
                        <td style={{ color: 'red' }}>Pending</td>
                    </tr>
                    <tr className="shadow-row">
                        <td>2</td>
                        <td>Moyinlaw@gmail.com</td>
                        <td>physical abuse</td>
                        <td>12-03-2024</td>
                        <td style={{ color: 'purple' }}>Ongoing</td>
                    </tr>
                    <tr className="shadow-row">
                        <td>3</td>
                        <td>adeife@gmail.com</td>
                        <td>sexual abuse</td>
                        <td>7-03-2024</td>
                        <td style={{ color: 'green' }}>Done</td>
                    </tr>
                </tbody> */}
            </table>
        </div>
    );
}

export default Cases