import Banner from "../components/header/Banner";


export default function AboutUsScreen(){

    return(
    <>
        <Banner/>
        <div >
            <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-5">
                <div className="order-1 col-span-2 flex flex-col justify-center items-center px-5 rounded-lg border-gray-150 shadow-xl bg-blue-100 m-10"> 
                    <div className="inline-flex items-baseline animate-pulse">
                        <h1 className="font-bold text-3xl text-gray-500 brush mx-10 my-5">Qui sommes nous ?</h1>
                        <svg className="w-10 h-10 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>

                    </div>
                    {/* <h1 className="font-bold text-3xl text-gray-500 brush mx-10 my-5">Qui sommes nous ?</h1> */}
                    <div className="px-12">
                        {/* <span ><AiOutlineCaretRight className="text-md text-blue-500" /></span> */}
                        <p className=" text-gray-700 my-5 font-medium text-xl"> SenCar Auto a été créé par deux jeunes entrepreuneurs pour combler un besoin notoire en matiere d'autos et de piece détachées.</p>
                        <p className=" text-gray-700 my-5 font-medium text-xl">
                            Dans un univers ou la nécessité est plus que grande de d'approvisionner les particuliers et commerçants, nous avons mis nos compétences et toute notre energie pour mettre en place cette structure en vue de faciliter l'accès à un large éventail de véhicules.
                        </p>
                    </div>
                </div>
                <div className="order-2 col-span-1">
                    <div className="container flex justify-center mx-auto mt-20 bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 animate-spin text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                </div >
                <div className="order-3 col-span-2 flex flex-col justify-center items-center px-5 rounded-lg border-gray-150 shadow-xl bg-blue-100 m-10">
                    <div className="inline-flex items-baseline animate-pulse">
                        <h1 className="font-bold text-4xl text-gray-500 brush mx-10 my-5">Notre mission</h1>
                        <svg className="w-10 h-10 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clip-rule="evenodd"></path><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path></svg>

                    </div>
                    {/* <h1 className="font-bold text-3xl text-gray-500 brush mx-10 my-5">Notre mission</h1> */}
                    <div className="flex flex-col px-12">
                        {/* <span ><AiOutlineCaretRight className="text-md text-blue-500" /></span> */}
                        <p className=" text-gray-700 my-5 font-medium text-xl"> Nous avons pour objectif de faciliter l'acquisition de vehicules et de pieces d'auto aux particuliers et aux commerçants.</p>
                          <p className=" text-gray-700 my-5 font-medium text-xl">
                            Nous proposons ainsi differents modeles de vehicules mais aussi des pieces d'auto. Pour des besoins plus specifiques, ecrivez-nous via le formulaire et il nous fera plaisir de taiter votre demande.</p>
                    </div>
                </div>
            </div>
        </div>
    </>)
}