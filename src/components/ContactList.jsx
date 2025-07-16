function ContactList(){
    
    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            <h2 className="text-1xl text-slate-600 text-left">Lista de Contatos</h2>
            <ul>
                <li className="flex gap-2">
                <p className="bg-slate-400 text-white p-2 rounded-md">Nome</p>
                <button className="bg-slate-400 text-white p-2 rounded-md">Detalhes</button>
                <button className="bg-slate-400 text-white p-2 rounded-md">Excluir</button>       
                </li>
            
            </ul>
        </div>
    )
};
export default ContactList;