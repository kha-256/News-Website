import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

let API = 'https://hn.algolia.com/api/v1/search?'


const initialState = {
  isLoading: true,
  query: "HTML",
  nbPages: 0,
  page: 0,
  hits: []
}

const AppContext = React.createContext();

// create provider function

const AppProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchDataApi = async (url) => {

    dispatch({ type: "SET_LOADING" })
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data)
      dispatch({
        type: "GET_STORIES",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages
        }
      })
    } catch (error) {
      console.log(error);
    }

  }

  // to remove post

  const removePost=(id)=>{
    dispatch({type: "REMOVE_POST", payload: id})
  }



  useEffect(() => {
    fetchDataApi(`${API}query=${state.query}&page=${state.page}`)
  }, []);

  return <AppContext.Provider value={{ ...state , removePost }}>
    {children}
  </AppContext.Provider>
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext }