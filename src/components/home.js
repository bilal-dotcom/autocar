import React from 'react';
import logo_car from '../assets/svg/logo-car.svg';
import logo_finance from '../assets/svg/home/finance.svg';
import logo_meeting from '../assets/svg/home/meeting.svg';
import logo_mind from '../assets/svg/home/mind.svg';
// import {Link} from 'react-router-dom';

class Home extends React.Component{
    render(){
        return(
            <div>
                <div class="bg-red-200 transform ease-in-out duration-700  text-center flex flex-col items-center md:max-w-screen-md md:m-auto md:rounded-2xl lg:max-w-screen-xl lg:max-h-screen lg:p-10 lg:flex-row lg:justify-between">
                    
                    <div class="my-10 mx-10 lg:flex lg:flex-col lg:w-3/6 lg:pl-4 lg:text-left md:w-2/3">
                        <div>
                            <p class="text-2xl font-extrabold lg:text-5xl py-2 sm:pt-16 transform ease-in-out duration-700">BUY OR RENT A CAR WITH US.100% REMOTLY OR IN STORES</p>
                            <p class="py-7 lg:text-2xl">Using artificial intelligence, our specialists comprehensively assess market data to establish the right price, right from the start.
                                         Get an almost new vehicle at a fraction of the cost and save thousands!</p>
                        </div>
                    
                        <div class="py-5">
                            <button class="bg-purple-200 lg:text-xl flex-shrink-0 lg:p-4 py-2 px-3 text-lg rounded-md ease-in-out duration-500 transform hover:scale-110"><a href="our_store">Find a Car </a> </button>
                        </div>
                    </div>
    
                    <div class="pt-24 sm:pt-0  transform ease-in-out  duration-700">
                    <img class="h-60  lg:h-96" src={logo_car} alt="Logo"></img>
                    </div>
        
                </div>

                <div class="mt-10 py-20 lg:py-20 lg:flex lg:flex-row lg:justify-evenly  ">
                    <div  class="bg-lambo bg-center  rounded-xl text-transparent h-64  lg:p-0 lg:m-0  lg:h-auto lg:w-2/5 p-10 my-10 text-center  max-w-sm   m-auto md:max-w-3xl md:p-6 transform ease-in-out duration-700 hover:scale-105 hover:text-white">
                    <a href="our_car"> 
                        <p class="text-5xl lg:pt-40">Lamborghini</p>
                        <p class="pt-6 lg:pt-4">View </p>
                    </a>
                    </div>
                    <div class="lg:flex lg:flex-col lg:gap-5 text-transparent  ">
                        <div class="bg-audi bg-center rounded-xl h-64 lg:p-0 lg:m-0 lg:py-3 lg:w-96 p-10 my-10 text-center max-w-sm   m-auto md:max-w-3xl md:p-6 transform ease-in-out duration-700 hover:scale-105 hover:text-white ">
                        <a href="our_car"> 
                            <p class="text-5xl lg:pt-10">Audi</p>
                            <p class="pt-6">View </p>
                        </a>
                        </div>
                        <div class="bg-tesla bg-center rounded-xl h-64 lg:p-0 lg:m-0 lg:py-10 lg:w-96 p-10 my-10 text-center max-w-sm   m-auto md:max-w-3xl md:p-6 transform ease-in-out duration-700 hover:scale-105 hover:text-white ">
                        <a href="our_car"> 
                            <p class="text-5xl lg:pt-10">Tesla</p>
                            <p class="pt-6">View </p>
                        </a>
                        </div> 
                    </div>               
                </div>

                <div class="text-center md:text-left lg:text-center lg:flex  ">
                    <div class="   py-10 flex flex-col items-center md:flex-row lg:flex-col">
                        <img class="h-28 w-2/6  " src={logo_meeting} alt="Satisfaction"></img>
                        <div class="w-4/6 md:w-7/12">
                            <p class="py-5 " >7 DAY SATISFACTION</p>
                            <p class="">Buying a car is a big decision. That's why we offer you a 7-day money-back satisfaction guarantee. 
                                        So if you are not completely satisfied with your vehicle, simply return it.</p>
                        </div>
                    </div>
                    <div class=" py-10 flex flex-col items-center md:flex-row lg:flex-col">
                        <img class="h-28 w-2/6  " src={logo_finance} alt="Price"></img>
                        <div class="w-4/6 md:w-7/12">
                            <p class="py-5 " >INTELLIGENT PRICES</p>
                            <p class="">Using artificial intelligence, our specialists comprehensively assess market data to establish the 
                                        right price, right from the start. Get an almost new vehicle at a fraction of the cost and save thousands!</p>
                        </div>
                    </div>
                    <div class=" py-10 flex flex-col items-center md:flex-row lg:flex-col">
                        <img class="h-28 w-2/6  " src={logo_mind} alt="Mind"></img>
                        <div class="w-4/6 md:w-7/12">
                            <p class="py-5 " >PEACE OF MIND</p>
                            <p class="">Rigorously chosen one by one, all our vehicles go through an inspection in more than 150 points and come 
                                        with the CarFax history report free of charge. You therefore have everything in your hands to make an informed decision.</p>
                        </div>
                    </div>
                    </div>
                
            </div>
        )
    }
}

export default Home;