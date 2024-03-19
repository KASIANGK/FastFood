import Navbar from "../Navbar/Navbar"
import { useState } from "react"
import { useEffect } from "react"

function Products () {

    const [data, setData] = useState([])
    useEffect(() => {
        fetch("../../../data.json")
          .then((response) => response.json())
          .then((response) => {
            setData(response)
            setFilteredData(response)
          })
      }, [])


    return (
        <div>            
            {data.map((element, i) => (
                <div key={i}>
                    <p>{element.menus[0].name}</p>
                </div>
            ))}
        </div>
    )
}

export default Products