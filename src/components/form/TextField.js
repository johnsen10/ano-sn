export default function({...propsValue}){
    return(
        <input className="w-full rounded-lg p-3 ring-blue-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl" {...propsValue} required/>
    )
}