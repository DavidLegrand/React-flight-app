import React, {createContext, useState} from "react";

export const InitialContext = {
  "departure" : "Paris"
}

//Creer un ctx
export const ResaContext = createContext(InitialContext);
export const ResaProvider= ({ children })=>{
 const [resa, setresa] = useState(InitialContext);
  
  return(
    <ResaContext.Provider value={[resa, setresa]}>
      {children}
    </ResaContext.Provider>

  );
}

export default ResaContext;