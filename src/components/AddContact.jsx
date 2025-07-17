import { useState } from "react";

function AddContact({ onAddContact }){
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [email, setEmail] = useState("");
   const [phone, setPhone] = useState("");


    return (
        <div className="space-y-4 p-4 bg-slate-200 rounded-md shadow flex flex-col">
            <h2 className="text-1xl text-slate-600 text-left">Novo Contato:</h2>
            <input
            type="text"
            placeholder="Nome"
            value={firstName}
            className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
            onChange={(event)=> setFirstName(event.target.value)}
            />
            <input
            type="text"
            placeholder="Sobrenome"
            value={lastName}
            className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
            onChange={(event)=> setLastName(event.target.value)}
            />
            <input
            type="email"
            placeholder="E-mail"
            value={email}
            className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
            onChange={(event)=> setEmail(event.target.value)}
            />
            <input
            type="number"
            placeholder="Telefone"
            value={phone}
            className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
            onChange={(event)=> setPhone(event.target.value)}
            />
            
            <button
            className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
            onClick={()=>{
                onAddContact(firstName, lastName, email, phone);
                setFirstName("");
                setLastName("");
                setEmail("");
                setPhone("");  
            }}
            >
                Adicionar
            </button>

        </div>
    )
};
export default AddContact;