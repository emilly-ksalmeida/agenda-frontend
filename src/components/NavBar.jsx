import { NotebookTabs, LibraryBig } from "lucide-react";

function NavBar(){

    return(
       <nav className="p-5 bg-slate-800 rounded-md shadow flex gap-2 justify-between items-center">
        <h1 className="text-3xl text-slate-100 font-bold text-center">Agenda</h1>
        <div className="flex gap-2 mt-0">
            <button className="bg-slate-400 text-white p-2 rounded-md"><NotebookTabs /></button>
            <button className="bg-slate-400 text-white p-2 rounded-md"><LibraryBig /></button>
        </div>
        
       </nav>
    )
}
export default NavBar;