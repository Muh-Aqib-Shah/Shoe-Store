import { createContext, useReducer } from "react"
import FilterReducer from "./FilterReducer";
import ShoeData from '../ShoeData.json'

export const StateObject = createContext(ShoeData);

export const StateProvider =({children})=>{
    let DataArr = [ShoeData,ShoeData]
    let [state,dispatch] = useReducer(FilterReducer,DataArr)
   
    let xys = Object.entries(state[1]);
    let mn = xys[1]
    console.log("Price",mn[1].sale_price);
    console.log("GLOBAL STATE:",state);
    function FilteredItems(filterType,gender){
        switch(filterType){
            case "Category":
        dispatch({
            type:"Gender-Select",
            payload:gender
        })
        break;
        case "Price(L-H)":
            dispatch({
                type:"Ascending-Price",
            }) 
            break; 
        case "Price(H-L)":
            dispatch({
                type:"Descending-Price",
            }) 
            break;
        default:
            return 0;                 
    }
    }
    return(
        <StateObject.Provider value={{
            state: state[0],
            FilteredItems
        }}>
            {children}
        </StateObject.Provider>
    )
}