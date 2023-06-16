import React, { useContext } from "react";

const AppContext= React.createContext();

// create proviser function

const AppProvider= ({children})=>{

    return <AppContext.Provider value={'khadija'}>
        {children}
    </AppContext.Provider>
}

const useGlobalContext=()=>{
    return useContext(AppContext)
}

export {AppContext, AppProvider, useGlobalContext}