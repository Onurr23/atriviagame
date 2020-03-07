import CentralStore from "./CentralStore";

export function CategoryReducer(state=CentralStore.categories,action) {

    if(action.type === 'CATEGORIES'){

        return action.payload;

    }else{

        return state;

    }

}
export default CategoryReducer;