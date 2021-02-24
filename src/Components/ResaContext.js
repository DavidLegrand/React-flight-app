import React, {createContext, useState} from "react";



//Creer un ctx
export const ResaContext = createContext();
export const ResaProvider= ({ children })=>{
  const [resa, setresa] = useState();
  
  return(
    <ResaContext.Provider value={[resa, setresa]}>
      {children}
    </ResaContext.Provider>

  );
}

export default ResaContext;