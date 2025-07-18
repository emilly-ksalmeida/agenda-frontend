import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import ContactUpDate from "../components/ContactUpDate";

function ContactDetails(){
    
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const firstName = searchParams.get("firstName");
    const lastName = searchParams.get("lastName");
    const email = searchParams.get("email");
    const phone = searchParams.get("phone");

    const [update, setUpdate] = useState(false);

    function onClickPageUpDate(){
        const toggle = !update;
        setUpdate(toggle);
    }

    return (
       <div className="h-screen w-screen bg-slate-500 p-6">
            <div className="w-[500px] mx-auto space-y-4">
                <div className="flex justify-start relative mb-6">

                    <button
                    className="bg-slate-800 text-slate-100 p-2 rounded-md"
                    onClick={()=> navigate(-1)}>Voltar
                    </button>

                    <h1 className="text-3xl text-slate-100 font-bold text-center pl-10">
                    Detalhes do Contato
                    </h1>

                </div>

                {update? <ContactUpDate /> : <div className="bg-slate-200 p-4 rounded-md">
                    <p className="text-slate-600 text-left">{`Nome: ${firstName} ${lastName}`}</p>
                    <p className="text-slate-600 text-left">{`E-mail: ${email}`}</p>
                    <p className="text-slate-600 text-left">{`Telefone: ${phone}`}</p>
                </div>}
                
               <div className="flex justify-start relative mb-6">
                 <button className="bg-slate-800 text-slate-100 p-2 rounded-md"
                 onClick={()=> onClickPageUpDate()}
                 >
                    {update? "Salvar": "Editar"}
                </button>
               </div>

            </div>
       </div>
    )
}

export default ContactDetails;