import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import { BASE_URL } from "../../config/api";
import { Auth } from "../../config/auth";

const HomePage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      async function fetchData(){
        const response = await fetch(`${BASE_URL}/users`, 
        {
          method: "get",
          headers: new Headers({
            'Authorization': `Bearer ${Auth.accessToken}`, 
          }),
        });  
        
        const data = await response.json();
        console.log('USERS', data);

        setUsers(data);
      }

      fetchData();
    }, []);

    
    return (
        <div className="container-fluid" >
            <NavBar />
          <div className="row align-items-center">
            <h1>Users!</h1>
          </div>
          <ul>
            {users?.map(user => <li><b> Nome: </b> {user?.name} <b> Idade:</b> {user?.age}</li>)}
          </ul>
        </div>
    );  
}

export default HomePage;