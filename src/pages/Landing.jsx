import React, {useState, useEffect} from 'react';




const LandingPage = props => {

    const [sale, setSale] = useState(false);

    useEffect(()=> {
        let today = new Date()
        let sale = new Date(2020,12,24)
        if(today === sale){
            setSale(true);
        }
    })
    return(
        <div>
            <h1>Welcome to DG Bargains!</h1>
            <div>{sale ? 'There is a sale!': 'No sale:('}</div>
        </div>

    )
}


export default LandingPage;