/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "bootstrap/dist/css/bootstrap.min.css"
import "./src/assets/scss/now-ui-kit.scss"
import 'jquery/dist/jquery.min.js'
import 'popper.js/dist/popper.min'
import 'bootstrap/dist/js/bootstrap.min.js'
import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { navigate } from 'gatsby';

const onRedirectCallback = (appState) => {
    // Use Gatsby's navigate method to replace the url
    navigate(appState?.returnTo || '/', { replace: true });
};

export const wrapRootElement = ({ element }) => {
    return (
        <Auth0Provider
            domain="alonzoalden.auth0.com"
            clientId="Kfh6brkY5nbSzMrD2Sgfvr3BpasHzzNZ"
            authorizationParams={{
                redirect_uri: 'https://wilshiregfs.com/upload-flyer/'
            }}
        >
            {element}
        </Auth0Provider>
    );
};