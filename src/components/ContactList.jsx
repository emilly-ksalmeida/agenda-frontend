function ContactList(props){
    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            <h2 className="text-1xl text-slate-600 text-left">Lista de Contatos</h2>
            <ul className="space-y-4">
                {props.list.map((contato)=>(
                    <li key={contato.id} className="flex gap-2">
                    
                    <div>
                    <p className="bg-slate-500 text-white p-2 rounded-md">{contato.firstName}</p>
                    <p className="bg-slate-500 text-white p-2 rounded-md">{contato.email}</p>
                    </div>

                    <button className="bg-slate-500 text-white p-2 rounded-md">Detalhes</button>
                    <button className="bg-slate-500 text-white p-2 rounded-md">Excluir</button>       
                    </li>
                ))}
            
            </ul>
        </div>
    )
};
export default ContactList;