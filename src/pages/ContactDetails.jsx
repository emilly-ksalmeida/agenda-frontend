import { useNavigate, useSearchParams } from "react-router-dom";

function ContactDetails(){
    
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const firstName = searchParams.get("firstName");
    const lastName = searchParams.get("lastName");

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

                <div className="bg-slate-200 p-4 rounded-md">
                    <p className="text-slate-600">{firstName}</p>
                    <p className="text-slate-600">{lastName}</p>
                    <p className="text-slate-600">email</p>
                    <p className="text-slate-600">phone</p>
                </div>
            </div>
       </div>
    )
}

export default ContactDetails;