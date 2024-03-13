import { useContext,useState } from "react"
import { Context } from "../Context";

export const SearchInput = () => {

    // const [searchString, setsearchString] = useState("")
    const { items, setItems } = useContext(Context);
    // const onInputChange = (event) => {

    //   setsearchString(event.target.value)
    // }
    const onSubmit = (event) => {
      event.preventDefault();
      console.log(event.target.gifSearch.value)  
      setItems(event.target.gifSearch.value)
    }
  return (

    <form onSubmit={onSubmit}>
      <input
        name="gifSearch"
        type="text" 
        placeholder="Search your awesome GIF" 
        // value={searchString}
        // onChange={onInputChange}    
      />
    </form>
  )
}

