import React from 'react';
import { CookieBanner } from "@palmabit/react-cookie-law";

function Cookies() {
    return(
    <div>
        <CookieBanner
        message="Cookie banner message"
        wholeDomain={true}
        onAccept={() => {}}
        onAcceptPreferences={() => {}}
        onAcceptStatistics={() => {}}
        onAcceptMarketing={() => {}}
        />
    </div>,
        
        document.body
    )
}


export default Cookies;
