import React from 'react';
import db from './data/db';

export default class ContactList extends React.Component {
    render() {
        return (
            <table>
                <th>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>phone</td>
                    <td>image</td>
                </th>
                <tbody>
                    {db.map((item) => {
                        return (
                            <tr>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>{item.phone}</td>
                                <td><img src={item.image} alt='profile' width='50'></img></td>
                            </tr>
                        )
                        
                        })}
                </tbody>
            </table>
            )
         }
}