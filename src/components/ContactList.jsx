import { useNavigate } from "react-router-dom";


function ContactList({ list, onClickDelete }){

    const navigate = useNavigate();

    function onSeeDetailsClick(contact){
        const query = new URLSearchParams();
        query.set("id", contact.id);
        query.set("firstName", contact.firstName);
        query.set("lastName", contact.lastName);
        query.set("email", contact.email);
        query.set("phone", contact.phone);
        
        navigate(`/contact-details?${query.toString()}`);
    }

    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            <h2 className="text-1xl text-slate-600 text-left">Lista de Contatos</h2>
            <ul className="space-y-4">
                {list.map((contact)=>(
                    <li key={contact.id} className="flex gap-2">
                    
                    <div>
                    <p className="bg-slate-500 text-white p-2 rounded-md">{contact.firstName}</p>
                    <p className="bg-slate-500 text-white p-2 rounded-md">{contact.email}</p>
                    </div>

                    <button className="bg-slate-500 text-white p-2 rounded-md"
                        onClick={() => onSeeDetailsClick(contact)}
                    >Detalhes
                    </button>

                    <button
                    className="bg-slate-500 text-white p-2 rounded-md"
                    onClick={()=> onClickDelete(contact.id)}
                    >Excluir
                    </button>       
                    </li>
                ))}
            
            </ul>
        </div>
    )
};
export default ContactList;