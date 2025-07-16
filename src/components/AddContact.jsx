function AddContact(){
   
    return (
        <div className="space-y-4 p-4 bg-slate-200 rounded-md shadow flex flex-col">
            <h2 className="text-1xl text-slate-600 text-left">Novo Contato:</h2>
            <input type="text" placeholder="Nome" className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md" />
            <input type="text" placeholder="Sobrenome" className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md" />
            <input type="email" placeholder="E-mail" className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md" />
            <input type="number" placeholder="Telefone" className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md" />
            <button
            className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
            >Adicionar</button>

        </div>
    )
};
export default AddContact;