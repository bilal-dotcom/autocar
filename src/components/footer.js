import React from 'react';
import logo from "../assets/svg/logo.svg"
import logo_facebook from "../assets/svg/icon-footer/icon-facebook.svg";
import logo_linkedin from "../assets/svg/icon-footer/icon-linkedin.svg";
import logo_twitter from "../assets/svg/icon-footer/icon-twitter.svg";
import logo_youtube from "../assets/svg/icon-footer/icon-youtube.svg";
// import {Link} from 'react-router-dom';

class Footer extends React.Component{
    render(){
        return(
            <div class="bg-blue-300 text-center flex flex-col items-center pb-10 pt-40 mt-40 relative">

              <div class="bg-blue-500 rounded-md w-80 px-11 py-11 mb-5  absolute -top-20 lg:w-5/6 flex flex-col items-center lg:justify-around  lg:flex-row lg:py-20 lg:text-xl">
                  <p>
                      <h1>We are proud to be recognized for the quality of our customer experience.</h1>
                      <p>Let us help you find your ideal vehicle</p>
                  </p>

                  <button class="bg-purple-200 flex-shrink-0 py-2 px-3 text-lg rounded-md ease-in-out duration-500 transform hover:scale-110"><a href="/our_contact">Get in touch now</a></button>
                  {/* <Link to="our_contact"> <button class="bg-purple-200 flex-shrink-0 py-2 px-3 text-lg rounded-md ease-in-out duration-500 transform hover:scale-110">Get in touch now</button></Link> */}
            
              </div>

  
              <div class="text-white  w-2/3">

                      <div class="flex flex-col  lg:flex-row lg:justify-between lg:items-start ">
                            <img src={logo} alt="Logo" class="h-20" />

                        <ul class="lg:flex lg:items-center  ">
                          <a href="our_car"><li class=" pb-5 lg:pr-20 ease-in-out duration-500 transform hover:scale-110">Our Car</li></a>
                          <a href="our_store"><li class=" pb-5 lg:pr-20 ease-in-out duration-500 transform hover:scale-110">Stores</li></a>
                          <a href="our_contact"><li class=" pb-5 lg:pr-20 ease-in-out duration-500 transform hover:scale-110">Contact</li></a>
                        </ul>

                      </div>

                      <hr></hr>
                  
                      <div class="flex flex-col lg:flex-row lg:justify-start  ">
                        <p class="p-4">OurCar Montreal Office <br />8453 Rue Goyer <br />Montreal, Quebec H4P 9W3</p>

                        <p class="p-4">OurCar Austin Office 2<br />1413 Newton St Austin <br />TX 78704, United-States </p>

                        <div class="p-4 flex flex-row justify-evenly  lg:flex-1 ">
                            <a href=""><img src={logo_facebook} alt="Logo_Facebook" class="h-8 ease-in-out duration-500 transform hover:scale-150"/ ></a>
                            <a href=""><img src={logo_twitter} alt="Logo_Twitter" class="h-8 ease-in-out duration-500 transform hover:scale-150"/ ></a>
                            <a href=""><img src={logo_linkedin} alt="Logo_Linkedin" class="h-8 ease-in-out duration-500 transform hover:scale-150"/ ></a>
                            <a href=""><img src={logo_youtube} alt="Logo_Youtube" class="h-8 ease-in-out duration-500 transform hover:scale-150"/ ></a>
                          </div>
                      </div>
              </div>
        </div>

          
          
        )
    }
}

export default Footer;