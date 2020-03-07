import axios from "axios"
export function getCategories() {

    return(dispatch)=>{

        axios.get('https://opentdb.com/api_category.php').then(response=>{

            dispatch({type : 'CATEGORIES',payload : response.data.trivia_categories})

        })

    }

}
export default getCategories;