import { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';
import {AiOutlineCaretRight} from "react-icons/ai"


import SelectField from "../components/form/SelectField";
import TextArea from "../components/form/TextArea";
import TextField from "../components/form/TextField";
import Banner from "../components/header/Banner";
import Button from "../components/form/Button";
import carBackground from "../carbgd.png"

export default function JoinUsScreen(){

  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({
    fullname: '',
    email:'',
    subject:'',
    message:''
  })
  const handleChange = (e) =>{
    const {name, value} = e.target;
    setUserInput(prev=>{
      return{
        ...prev,
        [name]:value
      }
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, userInput, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
    .then(response => {
      swal("Succès!","Votre requete a été soumise", "success")
      setUserInput({
        fullName: '',
        email: '',
        subject: '',
        message: ''
      });
      navigate('/')
      // setStatus('SUCCESS');
    }, error => {
      swal("Echec!", "Un probleme est survenu, re-essayez plutard","error")
    });
    
  }

    return(<>
        <Banner/>
        <div className="h-screen">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">  
          {/* left grid for text */}
            <div className="order-1 flex flex-col justify-center items-center px-5">
              <h1 className="font-bold text-6xl text-gray-500 brush mx-10 my-5">Parlez nous de vos besoins specifiques</h1>
              <div className="inline-flex items-baseline ">
                <span ><AiOutlineCaretRight className="text-md text-blue-500" /></span>
                <p className=" text-gray-700 my-5 font-medium text-2xl">Avez vous trouvé ce que vous cherchez? C'est super! Ecrivez nous pour aller de l'avant avec le produit concerné</p>
              </div>
            {/* animation */}
            <div class="bg-white flex space-x-12 justify-center items-center">
              <div class="flex items-center justify-center space-x-2 animate-pulse">
                <div class="w-8 h-8 bg-indigo-500 rounded-full"></div>
                <div class="w-8 h-8 bg-indigo-500 rounded-full"></div>
                <div class="w-8 h-8 bg-indigo-500 rounded-full"></div>
              </div>
            </div>

              <div className="inline-flex items-baseline ">
                <span ><AiOutlineCaretRight className="text-md text-blue-500" /></span>
                <p className=" text-gray-700 my-5 font-medium text-2xl">Avez vous des questions, ou bien vous n'avez tout simplement pas trouvé ce que vous voulez, c'est pas grave, 
                  juste remplir le formulaire avec une description de ce que vous recherchez et vos informations de contact et vous nous répondrons sous peu
                </p>
              </div>
            </div>
            {/* right grid containing form */}
            <div className="order-2 flex content-center items-center justify-center m-10">
              <form className="bg-blue-100 w-96 p-4 rounded-lg shadow-lg md:-mt-20 lg:-mt-20" onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-10">
                    <TextField name="fullname" type="text" value={userInput.fullname} onChange={handleChange} placeholder="votre nom et prenom" />
                    <TextField name="email" type="email" value={userInput.email} onChange={handleChange} placeholder="votre email"/>
                    <SelectField name="subject" onChange={handleChange} />
                    <TextArea name="message" type="text" value={userInput.message} onChange={handleChange} placeholder="votre message svp"/>
                </div>
                <Button text="Envoyer"/>
              </form>
            </div>
          </div>
        </div>
        </>
    )
}