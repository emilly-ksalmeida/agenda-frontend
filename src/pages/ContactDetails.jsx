import { useContext } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import AppContext from "../AppContext";

function ContactDetails(){
    const [list, setList] = useContext(AppContext);

    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const idSearch = searchParams.get("id");
    
    return (
       <div className="h-screen w-screen bg-slate-500 p-6">
            <div className="w-[500px] mx-auto space-y-4">
                <div className="flex justify-center relative mb-6">

                    <button
                    className="bg-slate-800 text-slate-100 p-2 rounded-md"
                    onClick={()=> navigate(-1)}>Voltar
                    </button>

                    <h1 className="text-3xl text-slate-100 font-bold text-center">
                    Detalhes do Contato
                    </h1>

                </div>

                <div className="bg-slate-200 p-4 rounded-md items-center">
                 <ul>
                     {
                  list.filter((contact)=> contact.id === idSearch)
                  .map((contact)=>(
                    <li key={contact.id} className="space-y-2">
                    
                    <p className="bg-slate-300 text-slate-800 p-2 rounded-md">{contact.firstName}</p>
                    <p className="bg-slate-300 text-slate-800 p-2 rounded-md">{contact.lastName}</p>
                    <p className="bg-slate-300 text-slate-800 p-2 rounded-md">{contact.email}</p>
                    <p className="bg-slate-300 text-slate-800 p-2 rounded-md">{contact.phone}</p>
                    
                    </li>
                  ))}
                 </ul>
                    
                </div>
                <button
                className="bg-slate-800 text-slate-100 p-2 rounded-md"
                onClick={()=> {
                    const query = new URLSearchParams();
                    query.set("id", idSearch);
                    navigate(`/update?${query.toString()}`);
                }}>
                    Editar
                </button>
            </div>
       </div>
    )
}

export default ContactDetails;