import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import AppContext from "./AppContext.js";
import NavBar from "./components/NavBar";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";

function App() {
  const [list, setList] = useContext(AppContext);

  function onAddContact (firstName, lastName, email, phone){
    const newList = {
      id: uuidv4(),
      firstName,
      lastName,
      email,
      phone
    };
    setList([...list, newList]);
  }


  function onClickDelete(idContact){
    const updatedList = list.filter((contact) => contact.id !== idContact ? true:false);
    setList(updatedList);
  }

  return (
    <div className="w-screen min-h-screen bg-slate-500 flex justify-center py-2">
      <div className="w-[900px] space-y-4">
      <NavBar />
      <h1 className="text-3xl text-slate-100 font-bold text-center">Contatos</h1>
      
      <AddContact
      onAddContact={onAddContact}
      />

      <ContactList
      onClickDelete={onClickDelete}
      />
      
      </div>
    </div>
  )
}

export default App;
