import { useState, useContext } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import AppContext from "../AppContext.js";

function ContactDetails(){
    const [list, setList] = useContext(AppContext);

    const [upFirstName, setUpFirstName] = useState();
    const [upLastName, setUpLastName] = useState();
    const [upEmail, setUpEmail] = useState();
    const [upPhone, setUpPhone] = useState();
    
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    
    const idContact = searchParams.get("id");

    const placeholder = list.filter((item) => item.id === idContact)[0]; 

    function updateContact(idContact){
        
        const novalista = list.map((item)=>{
            if(idContact === item.id){
                item.firstName = upFirstName || placeholder.firstName;
                item.lastName = upLastName || placeholder.lastName;
                item.email = upEmail || placeholder.email;
                item.phone = upPhone || placeholder.phone;
            
                return {...item} 
            }
            return {...item} 
        });
        setList(novalista);
       
    }

    return (
       <div className="h-screen w-screen bg-slate-500 p-6">
            <div className="w-[500px] mx-auto space-y-4">
                <div className="flex justify-center relative mb-6">

                    <button
                    className="bg-slate-800 text-slate-100 p-2 rounded-md"
                    onClick={()=> navigate(-1)}>Voltar
                    </button>

                    <h1 className="text-3xl text-slate-100 font-bold text-center">
                    Editar Contato
                    </h1>
                    

                </div>

                <div className="bg-slate-200 p-4 rounded-md flex flex-col">
                    <input
                        defaultValue={placeholder.firstName}
                        type="text"
                        placeholder="Nome"
                        value={upFirstName}
                        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
                        onChange={(event)=> setUpFirstName(event.target.value)}
                    />
                    <input
                        defaultValue={placeholder.lastName}
                        type="text"
                        placeholder="Sobrenome"
                        value={upLastName}
                        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
                        onChange={(event)=> setUpLastName(event.target.value)}
                    />
                    <input
                        defaultValue={placeholder.email}
                        type="email"
                        placeholder="e-mail"
                        value={upEmail}
                        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
                        onChange={(event)=> setUpEmail(event.target.value)}
                    />
                    <input
                        defaultValue={placeholder.phone}
                        type="number"
                        placeholder= "Telefone"
                        value={upPhone}
                        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
                        onChange={(event)=> setUpPhone(event.target.value)}
                    />
                </div>
                <button
                className="bg-slate-800 text-slate-100 p-2 rounded-md"
                onClick={()=> {
                    updateContact(idContact);
                    navigate(-1);
                }}
                >
                    Salvar
                </button>
            </div>
       </div>
    )
}

export default ContactDetails;