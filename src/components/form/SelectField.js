export default function({...props}){
    return(
        <select defaultValue="subject" {...props} className="w-full rounded-lg p-3 ring-blue-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl">
            <option value="subject" disabled>Choisir un sujet</option>
            <option value="interet_auto" className="py-1">interesse par une auto</option>
            <option value="piece" className="py-1">Piece auto</option>
            <option value="autre" className="py-1">Autre</option>
        </select>
    )
}