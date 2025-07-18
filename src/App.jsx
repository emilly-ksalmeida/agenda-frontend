import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";

function App() {
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("contactList")) || []
  );

  useEffect(()=>{
    localStorage.setItem("contactList", JSON.stringify(list));

  }, [list]);

  function onAddContact (firstName, lastName, email, phone){
    const newList = {
      id: list.length + 1,
      firstName,
      lastName,
      email,
      phone
    };
    setList([...list, newList]);
  }
console.log(list);

  function onClickDelete(idContact){
    const updatedList = list.filter((contact) => {
      if(contact.id !== idContact){
        return {...contact};
      }
    });
    setList(updatedList);
  }



  return (
    <div className="w-screen bg-slate-500 flex justify-center py-2">
      <div className="w-[900px] space-y-4">
      <NavBar />
      <h1 className="text-3xl text-slate-100 font-bold text-center">Contatos</h1>
      
      <AddContact
      onAddContact={onAddContact}
      />

      <ContactList
      list={list}
      onClickDelete={onClickDelete}
      />
      
      </div>
    </div>
  )
}

export default App;
