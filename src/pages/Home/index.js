import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import { BASE_URL } from "../../config/api";

const HomePage = () => {
    const [user, setUsers] = useState([]);

    useEffect(() => {
      async function fetchData(){
        const users = await fetch(`${BASE_URL}/users`, {method: "get"});
        setUsers(users);
      }

      fetchData();
    }, []);


    return (
        <div className="container-fluid" >
            <NavBar />
          <div className="row align-items-center">
            <h1>Welcome!</h1>
          </div>
        </div>
    );  
}

export default HomePage;