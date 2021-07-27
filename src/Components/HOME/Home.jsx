import React from 'react';
import { Link} from "react-router-dom"
import "./home.css"


const Home = () => {
    return (

        <>
        <div>
         
        <div className = "link_body">
         <Link to = "/"> <h1>HOME</h1> </Link> 
        

         <Link to = "/about"> <h1>ABOUT</h1> </Link> 
        

        
         <Link to = "/contact"> <h1>CONTACT</h1> </Link> 
      

         <Link to = "/services"> <h1>SERVICES</h1> </Link> 

         </div>  





         <h1 className = "page_heading">HOME PAGE</h1>
         <h2 className ="page_body">Welcome to the Home Page</h2>
        



          
            
        </div>

        </>
    );
}

export default Home;
