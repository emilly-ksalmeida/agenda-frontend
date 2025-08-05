import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserPlus } from "lucide-react";

const createContactFormSchema = z.object({
  
  firstName: z.string()
  .nonempty("O nome é obrigatório")
  ,
  lastName: z.string(),
  email: z.email({ 
    message: "Por favor, insira um e-mail válido",
    pattern: /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?(?:\.[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?)+$/i
    })
  ,
  phone: z.string()
});


function AddContact({ onAddContact }){
   
    const { register, 
          handleSubmit,
          reset, 
          formState: { errors }
        } = useForm({
          resolver: zodResolver(createContactFormSchema)
  });

  function enviar(dados){
    onAddContact(dados);
    reset();
    
  };

    return (
        <div className="space-y-2 p-4 bg-slate-200 rounded-md shadow flex flex-col">
            <h2 className="text-1xl text-slate-600 text-left">Novo Contato:</h2>
            
            <form
            className="flex flex-col gap-4 w-full"
            onSubmit={handleSubmit(enviar)}
            >
            
            <input
            type="text"
            placeholder="Nome"
            className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
            {...register("firstName")}
            />
            {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName.message}</span>}
            <input
            type="text"
            placeholder="Sobrenome"
            className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
            {...register("lastName")}
            />
            <input
            type="email"
            placeholder="E-mail"
            className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
            {...register("email")}
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}

            <input
            type="number"
            placeholder="Telefone"
            className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
            {...register("phone")}
            />
            
            {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
            <button
            className="flex items-center justify-between bg-slate-500 text-white px-4 py-2 rounded-md font-medium w-40"
            type="submit" 
            >
                <UserPlus />
                Adicionar
            </button>
            </form>
        </div>
    )
};
export default AddContact;