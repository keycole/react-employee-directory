import React from 'react';
import './style.css';
import Img from './images/placeholder_alex-harvey-y0I85D5QKvs-unsplash.jpg';

function Table() {
        return (
        <table>
            <tbody>
            <tr>
                <th>Face to a Name</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Address</th>
            </tr>
            <tr>
                <td>
                    <img 
                        src={Img}
                        alt="cool lady placeholder"
                        width="50px"
                    />
                </td>
                <td>Jane</td>
                <td>Doe</td>
                <td>jane@email.com</td>
                <td>(123) 456 - 7890</td>
                <td>
                    10 Bluebird Lane<br />
                    Bestplace, NY 10000
                </td>
            </tr>
            </tbody>
        </table>
    );
};

export default Table;