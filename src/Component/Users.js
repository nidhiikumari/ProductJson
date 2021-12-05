import React from 'react'
import { Link, Routes, Route,} from 'react-router-dom'
import Dynamic from './Dynamic'

function Users() {
    let users = [
        {id:1, name: 'nidhi', email: 'nidhi843330@gmail.com'},
        {id:2, name: 'kumari', email: 'nirmal345@gmail.com'},
        {id:3, name: 'pushpa', email: 'pushpa@34gmail.com'},
        {id:4, name: 'kanchan', email: 'kanchan34@gmail.com'},
        {id:5, name: 'fulwa', email: 'fulwa34@gmail.com'}
       
    ]
    return (
        <div>
            
            <h1>
                React dynamic web
            </h1>
            {
                users.map((item)=>
                <div><Link to={"/user/"+item.id}><h3>{item.name}</h3></Link></div>)

            }
            <Routes>
                <Route path={"/user/:id"} element={<Dynamic />} />
            </Routes>
            
        </div>
    );
}
export default Users;