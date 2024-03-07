import { useState } from "react"

export const SearchInput = () => {

    const [searchString, setsearchString] = useState("")

  return (
    <input type="text" placeholder="Search your awesome GIF"/>
  )
}

