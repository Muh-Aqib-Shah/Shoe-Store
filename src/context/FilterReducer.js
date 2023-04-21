function FilterReducer(state,action){

    let listedshoes = Object.entries(state[1]);
    switch(action.type){
        case "Gender-Select": 
        state[0] = Object.fromEntries( listedshoes.filter((value) => value[1].gender === action.payload))
        return{
            ...state,      
            }
        case "Ascending-Price":
            for(let i=0;i<listedshoes.length;i++){
                for(let j=i+1;j<listedshoes.length;j++){
                    let current_value_i = listedshoes[i]
                    let current_value_j = listedshoes[j]
                    if(current_value_i[1].sale_price > current_value_j[1].sale_price){
                        let temp = listedshoes[i];
                        listedshoes[i]=listedshoes[j];
                        listedshoes[j] = temp;
                    }
            }   
        }
        state[0] = Object.fromEntries(listedshoes)
           return{
                ...state,
            }
            case "Descending-Price":
                for(let i=0;i<listedshoes.length;i++){
                    for(let j=i+1;j<listedshoes.length;j++){
                        let current_value_i = listedshoes[i]
                        let current_value_j = listedshoes[j]
                        if(current_value_i[1].sale_price < current_value_j[1].sale_price){
                            let temp = listedshoes[i];
                            listedshoes[i]=listedshoes[j];
                            listedshoes[j] = temp;
                        }
                }   
            }
            state[0] = Object.fromEntries(listedshoes)
               return{
                    ...state,
                }           
        default:
            return state    
    }
}

export default FilterReducer;