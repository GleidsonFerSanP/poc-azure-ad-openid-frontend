import * as msal from "@azure/msal-browser";

/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 * For more information about OIDC scopes, visit: 
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 */
export const loginRequest = {
    scopes: ["openid", "profile", "email"]
};

/**
 * Add here the scopes to request when obtaining an access token for MS Graph API. For more information, see:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/resources-and-scopes.md
 */
export const tokenRequest = {
    scopes: ["openid", "profile", "email"],
    forceRefresh: false
};

export const Auth = {
  isAuthenticated: false
};

const msalConfig = {
       auth: {
        clientId: "808ed646-3ddb-4b9c-9538-0cabfca6e59f",
        authority: "https://login.microsoftonline.com/9417a790-2c7e-41ed-97a2-81ed87965dee/",
        redirectUri: "https://web.poc.auth.com/",
        tenantId: "9417a790-2c7e-41ed-97a2-81ed87965dee"
    },
    cache: {
        cacheLocation: "sessionStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {	
        loggerOptions: {	
            loggerCallback: (level, message, containsPii) => {	
                if (containsPii) {		
                    return;		
                }		
                switch (level) {		
                    case msal.LogLevel.Error:		
                        console.error(message);		
                        return;		
                    case msal.LogLevel.Info:		
                        console.info(message);		
                        return;		
                    case msal.LogLevel.Verbose:		
                        console.debug(message);		
                        return;		
                    case msal.LogLevel.Warning:		
                        console.warn(message);		
                        return;		
                    default:
                        console.warn(message);		
                        return;		
                }	
            }	
        }	
    }
};

const MsalInstance = new msal.PublicClientApplication(msalConfig);

export default MsalInstance;