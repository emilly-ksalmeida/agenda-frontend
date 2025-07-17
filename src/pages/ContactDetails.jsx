import { useNavigate } from "react-router-dom";

function ContactDetails(){
    
    const navigate = useNavigate();
   
    return (
       <div className="h-screen w-screen bg-slate-500 p-6">
            <div className="w-[500px] mx-auto space-y-4">
                <div className="flex justify-center relative mb-6">

                    <button
                    className="absolute left-0 top-0 bottom-0 bg-slate-700"
                    onClick={()=> navigate(-1)}>
                    </button>

                    <h1 className="text-3xl text-slate-100 font-bold text-center">
                    Detalhes do Contato
                    </h1>

                </div>

                <div className="bg-slate-200 p-4 rounded-md">
                    <p className="text-slate-600">firstName</p>
                    <p className="text-slate-600">lastName</p>
                    <p className="text-slate-600">email</p>
                    <p className="text-slate-600">phone</p>
                </div>
            </div>
       </div>
    )
}

export default ContactDetails;