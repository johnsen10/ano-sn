import { useNavigate } from "react-router-dom";


export default function AutoItem({...propsValues}){
    const navigate = useNavigate();
    
    return(
        <div className="bg-white border rounded-lg border-gray-150 transform transition duration-700 hover:shadow-xl hover:scale-105 p-4 relative">
            <span className='bg-blue-100 border border-blue-500 rounded-full text-sms px-4 py-1 inline-block mb-4'>{propsValues.transmission}</span>
            <img className='w-64 mx-auto transform transition duration-300 hover:scale-105' src={propsValues.image[0].url} alt='img'/>
            <div className='flex flex-col items-center my-3 space-y-2'>
                <h1 className='text-gray-900 text-2xl font-bold'>{propsValues.title}</h1>
                <p className='text-gray-500 text-sm text-center'>{propsValues.description.slice(0,50)}</p>
                {/* <h2 className='text-gray-900 text-2xl font-bold'>{price}</h2> */}
                <button className='bg-blue-500 text-white rounded-lg px-8 py-2 transform transition duration-300 hover:scale-105' onClick={()=>navigate(`/auto-detail/${propsValues.id}`)}>Details</button>
            </div>

        </div>
    );
}