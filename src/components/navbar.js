import React from 'react';
import {Link} from 'react-router-dom';
import logo from "../assets/svg/logo.svg"

class Navbar extends React.Component{
    render(){
        return(
            <div class="box-border overflow-hidden m-0  w-full text-center  ">
                <navbar class="p-10 pt-0  flex flex-col items-center  sm:justify-between sm:flex-row  lg:justify-evenly ">
                    <Link to="/home"><img src={logo} alt="Le logo" class="h-32" /> </Link>
                
                    <ul class="flex space-x-10">
                        <li class="bg-purple-200 flex-shrink-0 py-2 px-3 text-lg rounded-md ease-in-out duration-500 transform hover:scale-110"><Link to="/our_car" > Our Car</Link></li>
                        <li class="bg-purple-200 flex-shrink-0 py-2 px-3 text-lg rounded-md ease-in-out duration-500 transform hover:scale-110"><Link to="/our_store">Stores</Link></li>
                        <li class="bg-purple-200 flex-shrink-0 py-2 px-3 text-lg rounded-md ease-in-out duration-500 transform hover:scale-110"><Link to="our_contact">Contact</Link></li>
                    </ul>
                </navbar>
            </div>
          

          
        )
    }
}

export default Navbar;