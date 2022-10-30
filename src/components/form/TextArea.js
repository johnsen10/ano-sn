export default function({...props}){
    return(
        <textarea rows="5" className="w-full rounded-lg p-3 ring-blue-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl" {...props} required/>
    )
}