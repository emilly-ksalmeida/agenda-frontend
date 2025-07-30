import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Trash2, Info } from "lucide-react";
import AppContext from "../AppContext.js";

function ContactList({ onClickDelete }){

    const [list, setList] = useContext(AppContext);
    const navigate = useNavigate();

    function onSeeDetailsClick(contact){
        const query = new URLSearchParams();
        query.set("id", contact.id);
        
        navigate(`/contact-details?${query.toString()}`);
    }

    return (
        <div className="space-y-2 p-4 bg-slate-200 rounded-md shadow">
            <h2 className="text-1xl text-slate-600 text-left">Lista de Contatos</h2>
            <ul className="space-y-2">
                {list.map((contact)=>(
                    <li key={contact.id} className="flex justify-between">
                    
                    <div className="flex w-4/5 gap-2">
                    <p className="bg-slate-500 text-white p-2 rounded-md min-w-[250px] w-auto">{contact.firstName}</p>
                    <p className="bg-slate-500 text-white p-2 rounded-md min-w-[250px] w-auto">{contact.email}</p>
                    </div>

                    <div className="w-1/5 flex gap-4">
                        <button className="bg-slate-500 text-white p-2 rounded-md"
                        onClick={() => onSeeDetailsClick(contact)}
                        >
                        <Info />
                        </button>

                        <button
                        className="bg-slate-500 text-white p-2 rounded-md"
                        onClick={()=> onClickDelete(contact.id)}
                        >
                            <Trash2 />
                        </button>       
                    </div>
                    </li>
                ))}
            
            </ul>
        </div>
    )
};
export default ContactList;