import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import Banner from "../components/header/Banner";
import { useGetAutoPostById } from "../hooks/useRequest";

export default function DetailScreen(){
    const navigate = useNavigate();
    const { id } = useParams();
    const { isLoading, error, data, refetch } = useGetAutoPostById(id); 
    console.log(data)

    if(isLoading){ return <div>Loading...</div>}
    if(error){return <div>Error...</div>}
    return(
        <>
            <Banner/>
            <section className="mx-auto px-6 my-16">
                <div className="flex flex-col justify-center items-center h-screen">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {/* left side of detail screen: image galery */}
                        <div className=" order-1 flex flex-wrap">

                            <div className="w-full p-1 md:p-2 ">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src={data.auto.image[0].url}/>
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img alt="gallery" className="transform transition duration-300 hover:scale-105 border block object-cover object-center w-full h-full rounded-lg"
                                    src={data.auto.image[1].url}/>
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img alt="gallery" className="transform transition duration-300 hover:scale-105 border block object-cover object-center w-full h-full rounded-lg"
                                    src={data.auto.image[2].url}/>
                            </div>
                        </div>

                        {/* right side of detail screen: contact Form */}
                        <div className="border order-2 flex flex-col items-center justify-center">
                            <h1 className="text-gray-500 font-extrabold text-2xl my-5">Specifications</h1>

                            {/* checkbox for specs */}
                            <div>
                                <div className="flex items-center mr-4 my-2">
                                    <input checked readOnly id="red-checkbox" type="checkbox" value="" className="w-4 h-4 text-red-600 bg-gray-100 rounded "/>
                                    <label htmlFor="red-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Transmission : {data.auto.transmission}</label>
                                </div>
                                <div className="flex items-center mr-4 my-2">
                                    <input checked readOnly id="green-checkbox" type="checkbox" value="" className="w-4 h-4 text-green-600 bg-gray-100 rounded"/>
                                    <label htmlFor="green-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Kilometrage : {data.auto.milleage} km</label>
                                </div>
                                <div className="flex items-center mr-4 my-2">
                                    <input checked readOnly id="purple-checkbox" type="checkbox" value="" className="w-4 h-4 text-purple-600 bg-gray-100 rounded"/>
                                    <label htmlFor="purple-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Options : </label>
                                </div>
                                <div className="flex items-center mr-4 my-2">
                                    <input checked readOnly id="teal-checkbox" type="checkbox" value="" className="w-4 h-4 text-teal-600 bg-gray-100 rounded"/>
                                    <label htmlFor="teal-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remarques :</label>
                                </div>

                            </div>
                            <div className="content-center text-3xl my-5 font-semibold">
                                <h1>4.500.000 CFA</h1>
                            </div>
                            {/* Description */}
                            <div className="px-10">
                                <blockquote className="items-center text-center text-xl italic font-semibold text-gray-900 dark:text-white">
                                    <svg aria-hidden="true" className="w-10 h-10 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
                                    <p>{data.auto.description}</p>
                                </blockquote>
                            </div>
                            
                            <div>
                            <button className='bg-blue-500 text-white rounded-lg px-8 py-2 my-8 transform transition duration-300 hover:scale-105' onClick={()=>navigate(`/nous-joindre`)}>Nous contacter</button>
                            </div>
                        </div>
                        

                    </div>
                </div>

            </section>
        </>
    )
}