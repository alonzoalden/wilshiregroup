import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {

    const { logout } = useAuth0();

    return (
        <a className="btn btn-outline btn-sm" style={{ width: '110px' }}onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
        </a>
    );

};

export default LogoutButton;