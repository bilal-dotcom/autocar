import React from 'react';
import Location from './location';
import logo_lambo from '../assets/img/car/logo/icon-lambo.svg';
import logo_audi from '../assets/img/car/logo/icon-audi.svg';
import logo_tesla from '../assets/img/car/logo/icon-tesla.svg';

class OurCar extends React.Component{
    render(){
        return(
            <div class="">
               <div class="bg-blue-300 text-center py-14 px-10 m-auto sm:rounded-xl md:max-w-xl xl:max-w-screen-xl ease-in-out duration-700">
                <p class="py-4 text-5xl font-extrabold">AUTOCAR</p>
                <p class="py-4 max-w-lg m-auto ">BUY YOUR CAR 100% ONLINE.
                    THE PROCESS IS SIMPLE, CONTACTLESS AND TO YOUR FULL 
                    SATISFACTION</p>
                </div>


                
                <div class="text-center py-11 xl:flex xl:flex-row xl:flex-wrap xl:max-w-7xl xl:m-auto ">

                    <div class="bg-green-100 rounded-xl my-20 ease-in-out duration-700 w-96 m-auto md:flex md:w-max md:max-w-2xl xl:flex-col xl:max-w-sm hover:bg-gray-900  hover:text-white  ">
                        <img class=" w-full  md:h-96 md:w-2/4 xl:w-auto xl:h-80 "  src={logo_lambo} alt="Le logo"  />
                        <div class=" rounded-b-xl  py-12 px-9 md:m-auto xl:py-8 ">
                            <p class="py-6 text-4xl">Lambo</p>
                            <p class="text-lg">A multi- Solving A boo cover designed for Tim Brown’s new release, ‘Change’</p>
                        </div>
                    </div>

                    <div class="bg-green-100 rounded-xl my-20 ease-in-out duration-700 w-96 m-auto md:flex md:w-max md:max-w-2xl xl:flex-col xl:max-w-sm hover:bg-gray-900  hover:text-white  ">
                        <img class=" w-full  md:h-96 md:w-2/4 xl:w-auto  xl:h-80 "  src={logo_audi} alt="Le logo"  />
                        <div class=" rounded-b-xl  py-12 px-9 md:m-auto xl:py-8 ">
                            <p class="py-6 text-4xl">Audi</p>
                            <p class="text-lg">A multi- Solving A boo cover designed for Tim Brown’s new release, ‘Change’</p>
                        </div>
                    </div>

                    <div class="bg-green-100 rounded-xl my-20 ease-in-out duration-700 w-96 m-auto md:flex md:w-max md:max-w-2xl xl:flex-col xl:max-w-sm hover:bg-gray-900  hover:text-white  ">
                        <img class=" w-full  md:h-96 md:w-2/4 xl:w-auto xl:h-80"  src={logo_tesla} alt="Le logo"  />
                        <div class=" rounded-b-xl  py-12 px-9 md:m-auto xl:py-8 ">
                            <p class="py-6 text-4xl">Tesla</p>
                            <p class="text-lg">A multi- Solving A boo cover designed for Tim Brown’s new release, ‘Change’</p>
                        </div>
                    </div>

                </div>

                <Location/>
            </div>

            
        )
    }
}

export default OurCar;