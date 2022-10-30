import { useNavigate } from 'react-router-dom'

import errorImg from '../404.png' 
 
export default function NotFoundScreen(){
    const navigate = useNavigate();
    return(
        <main className=" h-screen bg-blue-50">
            <div className="max-w-screen-xl py-20 mx-auto px-6 bg-white">
                <div className="flex flex-col items-center justify-center h-3/4 pt-24">
                    <img className="w-96 object-contain" src={errorImg} alt="error" />

                    <button className="bg-blue-500 text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105" onClick={() => navigate('/')}>Retour a l'accueil</button>
                </div>
                </div>
        </main>
    )
}