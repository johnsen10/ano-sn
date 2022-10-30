import { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';


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
        
          <div className=" flex content-center items-center justify-center m-10">
            <form className="bg-blue-50 w-96 mt-6 p-4 rounded-lg shadow-lg " onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-10">
                  <TextField name="fullname" type="text" value={userInput.fullname} onChange={handleChange} placeholder="votre nom et prenom" />
                  <TextField name="email" type="email" value={userInput.email} onChange={handleChange} placeholder="votre email"/>
                  <SelectField name="subject" onChange={handleChange} />
                  <TextArea name="message" type="text" value={userInput.message} onChange={handleChange} placeholder="votre message svp"/>
              </div>
              <Button text="Envoyer"/>
            </form>
          </div>
          {/* <img className="w-96 object-contain banner" src={carBackground} alt="carBackground" /> */}
        </div>
        </>
    )
}