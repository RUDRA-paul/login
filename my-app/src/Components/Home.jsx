import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'

function Home() {

    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const [third, setThird] = useState("");
    const api = axios.create({
        baseURL:`https://reqres.in/api/users`
    })

   api.get('/').then(res=>{
       console.log(res.data)
   })

    // THIS POST REQUESTION IS GIVING ERROR...
    function submitHanddler(e) {
        e.preventDefault();


    }

        
        let mail = localStorage.getItem('Email').replace(/"/g, "");
        let name = localStorage.getItem('Username').replace(/"/g, "");
        let username =localStorage.getItem('name').replace(/"/g, "");



    return (
        <div>
        <div className="mb-5">
            <h1>User Details</h1>
            <p><strong>User Name:{name}</strong></p>
            <p><strong>Name:{username}</strong></p>
            <p><strong>Email:{mail}</strong></p>

            <button className="btn btn-dark btn-lg btn-block">Adduser</button>

        </div>
        <div> 
                 <h1>Enter the User Details.</h1>
            <form onSubmit={submitHanddler}>
                <div className="form-group">
                    <label>Category</label>
                    <input type="text" className="form-control" placeholder="username" onChange={(event) => setFirst(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Language</label>
                    <input type="text" className="form-control" placeholder="name" onChange={(event) => setSecond(event.target.value)} />
                </div>


                <div className="form-group">
                    <label>Genre</label>
                    <input type="text" className="form-control" placeholder="email" onChange={(event) => setThird(event.target.value)} />
                </div>


                <button type="submit" className="btn btn-dark btn-lg btn-block">Post Request</button>
            </form>
           </div>
        
        </div>
        
    )
}

export default Home


