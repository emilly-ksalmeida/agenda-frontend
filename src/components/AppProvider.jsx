import { useState } from "react";
import AppContext from "../AppContext";

function AppProvider(props){
    const [list, setList] = useState(
    JSON.parse(localStorage.getItem("contactList")) || []
  );

    return(
        <AppContext.Provider value={[list, setList]}>
        {props.children} 
        </AppContext.Provider> 
    )

}
export default AppProvider;