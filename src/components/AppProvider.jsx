import { useState, useEffect } from "react";
import AppContext from "../AppContext";

function AppProvider(props){
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("contactList")) || []
  );
  useEffect(()=>{
    localStorage.setItem("contactList", JSON.stringify(list));

  }, [list]);

    return(
        <AppContext.Provider value={[list, setList]}>
        {props.children} 
        </AppContext.Provider> 
    )

}
export default AppProvider;