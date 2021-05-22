import React from 'react';
import contact_image from "../assets/svg/draw_contact.svg";
import Location from "./location"

class OurContact extends React.Component{
    render(){
        return(
            
<div>
<div class="bg-indigo-200 p-10 pb-40 text-center flex flex-col items-center sm:flex-row sm:justify-evenly sm:rounded-xl  ">

  
        <img src={contact_image} alt="Contact svg" class="py-10 sm:w-3/6 lg:w-2/5 "/>
    

    <div class="">
      <h1 class="text-2xl">Get in touch with us</h1>

      <form class="flex flex-col">
        <input type="text" class="bg-inherit focus:outline-none focus:ring-4 focus:ring-purple-200 focus:border-transparent my-4 py-4 px-10 rounded-sm" placeholder="Name" ></input>

        <input type="email" class="focus:outline-none focus:ring-4 focus:ring-purple-200 focus:border-transparent my-4 py-4 px-10 rounded-sm" placeholder="Email" ></input>

        <input type="text" class="focus:outline-none focus:ring-4 focus:ring-purple-200 focus:border-transparent my-4 py-4 px-10 rounded-sm" placeholder="Subject" ></input>

        <textarea type="text" class="focus:outline-none focus:ring-4 focus:ring-purple-200 focus:border-transparent my-4 py-4 px-10 rounded-sm" placeholder="Message" rows="5" cols="30"></textarea>
            
        <button class="mt-10 bg-purple-200 self-center w-10/12 py-2 px-3 text-lg rounded-md ease-in-out duration-500 transform hover:scale-110">Send Message</button>
      </form>

    </div>

  </div>
      <Location/>
</div>
        )
    }
}

export default OurContact;