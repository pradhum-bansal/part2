import React from "react"

const Filter = (props) =>{
    return(
        <div>
          filter shown with <input onChange={props.handleFilterChange} value ={props.value}/>
        </div>
    )
}

export default Filter