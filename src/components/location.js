import React from 'react';
import logo_mtl from '../assets/img/logo-location/mtl-logo.png'
import logo_lux from '../assets/img/logo-location/lux-logo.png'
import logo_austin from '../assets/img/logo-location/austin-logo.png'
// import {Link} from 'react-router-dom';

class Location extends React.Component{
    render(){
        return(
            <div class="my-20 flex flex-col items-center text-center lg:flex-row lg:justify-around">
                <div class="my-5">
                    <img src={logo_mtl} alt="Montreal Logo" class="h-52 w-52  rounded-full" />
                    <p class="my-5">Montreal</p>
                    <a href="/our_store#canada"> <button  class="bg-purple-200 flex-shrink-0 py-2 px-3 text-lg rounded-md ease-in-out duration-500 transform hover:scale-110">See Location</button></a>
                </div>
                <div class="my-5">
                    <img src={logo_lux} alt="Luxembourg Logo" class="h-52 w-52  rounded-full" />
                    <p class="my-5">Luxembourg</p>
                    <a href="/our_store#benin"><button class="bg-purple-200 flex-shrink-0 py-2 px-3 text-lg rounded-md ease-in-out duration-500 transform hover:scale-110">See Location</button></a>
                </div>
                <div class="my-5">
                    <img src={logo_austin} alt="Austin Logo" class="h-52 w-52  rounded-full" />
                    <p class="my-5">Austin</p>
                    <a href="/our_store#usa"><button class="bg-purple-200 flex-shrink-0 py-2 px-3 text-lg rounded-md ease-in-out duration-500 transform hover:scale-110">See Location</button></a>
                </div>
            </div>
            
        )
    }
}

export default Location;