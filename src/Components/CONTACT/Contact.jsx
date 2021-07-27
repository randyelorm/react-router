import React from 'react';
import { Link} from "react-router-dom"
import "./contact.css"

const Contact = () => {
    return (
        <>
        <div className = "link_body">
           
        <Link to = "/"> <h1>HOME</h1> </Link> 
        

        <Link to = "/about"> <h1>ABOUT</h1> </Link> 
       

       
        <Link to = "/contact"> <h1>CONTACT</h1> </Link> 
     

        <Link to = "/services"> <h1>SERVICES</h1> </Link> 

       
        </div>

        <h1 className = "page_heading">CONTACTS PAGE</h1>
        <h2 className = "page_body ">Welcome to the Contacts Page</h2>
        </>
    );
}

export default Contact;
