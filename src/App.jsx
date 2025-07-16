import "./App.css";
import NavBar from "./components/NavBar";
import AddContact from "./components/AddContact";

function App() {
  

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center">
      <div className="w-[900px] space-y-4">
      <NavBar />
      <h1 className="text-3xl text-slate-100 font-bold text-center">Contatos</h1>
      
      <AddContact />
      
      </div>
    </div>
  )
}

export default App;
