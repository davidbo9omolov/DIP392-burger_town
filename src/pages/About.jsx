import React from 'react'
import about1 from "../assets/images/about1.png"
import about2 from "../assets/images/about2.png"
import about3 from "../assets/images/about3.png"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '@fontsource/kavoon';

const About = () => {
    return (
        <div className="bg-[#0d0d0d] text-white min-h-screen font-sans px-[50px] md:px-[100px] xl:px-[200px] py-10">
            <div className="relative flex flex-col lg:flex-row items-center max-w-7xl">
                {/* Image group left */}
                <div className="relative flex w-full justify-center lg:justify-start lg:w-[800px] min-h-[400px] lg:min-h-[600px]">
                    <div className='relative w-80 h-80 lg:w-[300px] lg:h-[500px] xl:w-[420px] xl:h-[520px]'>
                        <img
                            src={about1}
                            alt="Burger King"
                            className="rounded-xl w-full h-full object-cover shadow-xl z-[20] relative "
                        />
                        <div className='absolute top-[40%] left-[40%] w-56 h-56 lg:w-[250px] lg:h-[350px] xl:w-[300px] xl:h-[400px] rotate-[-10deg] z-30'>
                            <img
                                src={about2}
                                alt="Burger King"
                                className="rounded-xl w-full h-full object-cover shadow-xl"
                            />
                        </div>
                        {/* Top image overlapping the first two */}
                        <div className='block lg:hidden absolute top-[40%] left-[-40%] w-52 h-52 xl:w-60 xl:h-60 rotate-[-30deg] z-10'>
                            <img
                                src={about3}
                                alt="Burger King"
                                className="rounded-xl w-full h-full object-cover shadow-xl"
                            />
                        </div>
                    </div>
                </div>

                {/* Description section */}
                <div className="w-full px-4 lg:px-10 relative">
                    <p className="text-lg leading-relaxed">
                        Burger Town, nestled on Krišjāņa Valdemāra iela, was born from a passion for crafting the perfect burger. The founders, seasoned restaurateurs with a love for bold flavors, saw an opportunity to elevate the classic burger experience. What started as a small local venture has grown into a beloved spot, known for its mouthwatering burgers, fresh ingredients, and welcoming atmosphere. The restaurant’s modern design and friendly staff create a cozy environment where guests can indulge in comfort food with a twist. Burger Town continues to thrive, offering a unique dining experience to both locals and visitors alike.
                    </p>

                    {/* Third image on mobile */}
                    <div className='hidden absolute lg:block right-[-40%] top-[40%] xl:right-[-60%] w-60 h-60 xl:w-[300px] xl:h-[300px] mx-auto rotate-[20deg]'>
                        <img
                            src={about3}
                            alt="Burger King"
                            className="rounded-xl w-full h-full object-cover shadow-xl"
                        />
                    </div>
                </div>
            </div>

            <hr className="my-[80px] border-white rounded  border-t-3" />

            <h2 className="text-3xl font-bold mb-6 font-[Kavoon]">How to find us?</h2>

            <div className="flex flex-col md:flex-row justify-between w-full gap-12 ">
                <div className="md:w-2/3 max-w-3xl">
                    <p className="text-base mb-4">
                        Burger Town, located on Krišjāņa Valdemāra iela, offers a modern dining experience with intuitive ordering, seamless navigation, and a visually appealing, user-friendly interface for a delightful visit.
                    </p>
                    <button className="px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition">
                        Riga
                    </button>
                </div>
                <div className="md:w-1/3">
                    <h3 className="text-xl font-semibold font-[Kavoon]">Krišjāņa Valdemāra iela</h3>
                    <p className="mt-2">tel: +371 11111111</p>
                    <p>Mon-Sun: 8AM - 4PM</p>
                </div>
            </div>

            <div className="mt-10 mx-auto h-[400px] rounded-lg overflow-hidden shadow-lg">
                <MapContainer center={[56.9533, 24.1076]} zoom={16} scrollWheelZoom={false} className="h-full w-full">
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
                    />
                    <Marker position={[56.9533, 24.1076]}>
                        <Popup>
                            Burger Town - Krišjāņa Valdemāra iela
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    )
}

export default About