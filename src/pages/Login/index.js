import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import MsalInstance, { Auth, loginRequest } from "../../config/auth";

function selectAccount() {

    const currentAccounts = MsalInstance.getAllAccounts();
    if (currentAccounts.length === 0) {
        return;
    } else if (currentAccounts.length > 1) {
        console.warn("Multiple accounts detected.");
    } else if (currentAccounts.length === 1) {
       console.log(currentAccounts[0].username);;
    }
}

const handleResponse = (setRedirectToReferrer) => (response) => {

    console.log('handleResponse', response);
    
    if (response !== null) {
        Auth.isAuthenticated = true;
        Auth.accessToken = response.accessToken;
        setRedirectToReferrer(true);
    } else {
        selectAccount();
    }
}

const login = async (setRedirectToReferrer) => {
     MsalInstance.loginPopup(loginRequest)
        .then(handleResponse(setRedirectToReferrer))
        .catch(error => {
            console.error(error);
        });
}

export default function Login() {
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);
  const history = useHistory();

  const handleSubmit = async event => {
    event.preventDefault();
    await login(setRedirectToReferrer);
  };

  useEffect(() => {
    if (redirectToReferrer) {
      history.push('/')
    }
  }, [redirectToReferrer])

  return (
    <div className="container" >
      <div className="row align-items-center">
        <form onSubmit={handleSubmit}>
            <div className="mb-1">
              <label className="form-label">Username</label>  
              <input type="text" className="form-control" placeholder="Username" aria-label="Username" />
            </div>
            <div className="mb-1">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" placeholder="Server" aria-label="Password" />
            </div>
            <button className="btn btn-primary">Log in</button>
        </form>
      </div>
    </div>
  );
}



