import { useLocation } from "react-router-dom";

const Search = () => {
  const location = useLocation();
  
  console.log("location", location)

  return (
    <div>
      Search
    </div>
  )
}

export default Search;