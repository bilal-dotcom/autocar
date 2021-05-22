import React from 'react';
import mtl_map from '../assets/img/map/mtl-map.png'
import austin_map from '../assets/img/map/austin-map.png'
import lux_map from '../assets/img/map/lux-map.png'

class OurStore extends React.Component{
    render(){
        return(
            <div>


               <div class="mb-16 md:mb-32 text-center md:flex md:flex-col md:m-auto md:max-w-screen-md  lg:flex-row lg:h-80 lg:max-w-none lg:justify-center  ">
                    <div>
                        <img class="w-full h-96 lg:h-80 lg:w-80 lg:mr-9 md:rounded-xl md:mb-9 " src={mtl_map} alt="Montreal Location" />
                    </div>

                    <div id="canada" class=" bg-red-100 rounded-md p-24 md:flex md:flex-col md:items-start lg:w-3/5  ">
                        <h1 class="text-2xl md:pb-4">Canada</h1>
                        <div class="md:flex md:items-center ">
                            <ul class="my-7 md:my-0 md:pr-16  ">
                            <li class="font-semibold">OurCar Montreal succursale</li>
                            <li>8453 Rue Goyer</li>
                            <li>Montreal, Quebec H4P 9W3 </li>
                            </ul>
                            
                            <ul class="my-7 md:my-0  md:pr-16">
                            <li class="font-semibold">Contact</li>
                            <li>514-857-0958</li>
                            <li>infomtl@ourcar.com</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div id="benin" class="mb-16 md:mb-32 text-center md:flex md:flex-col md:m-auto md:max-w-screen-md  lg:flex-row-reverse lg:h-80 lg:max-w-none lg:justify-center  ">
                    <div>
                        <img class="w-full h-96 lg:h-80 lg:w-80 lg:ml-9 md:rounded-xl md:mb-9 " src={austin_map} alt="Austin Location" />
                    </div>

                    <div class=" bg-red-100 rounded-md p-24 md:flex md:flex-col md:items-start lg:w-3/5  ">
                        <h1 class="text-2xl md:pb-4">Luxembourg</h1>
                        <div class="md:flex md:items-center ">
                            <ul class="my-7 md:my-0 md:pr-16  ">
                            <li class="font-semibold">OurCar Luxembourg succursale</li>
                            <li>35, Rue des Jardiniers</li>
                            <li>L124 Luxembourg</li>
                            </ul>
                            
                            <ul class="my-7 md:my-0  md:pr-16">
                            <li class="font-semibold">Contact</li>
                            <li>+35227862027</li>
                            <li>infolux@ourcar.com</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div id="usa" class="mb-16 md:mb-32 text-center md:flex md:flex-col md:m-auto md:max-w-screen-md  lg:flex-row lg:h-80 lg:max-w-none lg:justify-center  ">
                    <div>
                        <img class="w-full h-96 lg:h-80 lg:w-80 lg:mr-9 md:rounded-xl md:mb-9 " src={lux_map} alt="Luxembourg Location" />
                    </div>

                    <div class=" bg-red-100 rounded-md p-24 md:flex md:flex-col md:items-start lg:w-3/5  ">
                        <h1 class="text-2xl md:pb-4">Texas</h1>
                        <div class="md:flex md:items-center ">
                            <ul class="my-7 md:my-0 md:pr-16  ">
                            <li class="font-semibold">OurCar Austin succursale</li>
                            <li>1413 Newton St Austin</li>
                            <li>TX 78704, United-States</li>
                            </ul>
                            
                            <ul class="my-7 md:my-0  md:pr-16">
                            <li class="font-semibold">Contact</li>
                            <li>+1(929)218-4630</li>
                            <li>infoaustin@oucar.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OurStore;