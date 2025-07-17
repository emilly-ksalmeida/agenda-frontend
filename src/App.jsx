import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";

function App() {
  const [list, setList] = useState([
    {
      id: 1,
      firstName: "Emilly",
      lastName: "Almeida",
      email: "emilly@email.com",
      phone: "1234567890"
    },
    {
      id: 2,
      firstName: "Camilly",
      lastName: "Almeida",
      email: "camilly@email.com",
      phone: "1234567890"
    }
  ]);

  return (
    <div className="w-screen bg-slate-500 flex justify-center py-2">
      <div className="w-[900px] space-y-4">
      <NavBar />
      <h1 className="text-3xl text-slate-100 font-bold text-center">Contatos</h1>
      
      <AddContact />

      <ContactList
      list={list}
      />
      
      </div>
    </div>
  )
}

export default App;
