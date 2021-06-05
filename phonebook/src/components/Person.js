import React from 'react'

const Person =(props)=>
{
    return(
        <li key = {props.id}>{props.name} {props.number} <button data-id={props.id} onClick={props.handleClick}>
        Delete
      </button></li>
      )
}

const Persons = ({ persons , handleClick}) => {
    const personsList = persons.map(person => {
      return (
        <Person key={person.name} id = {person.id} name={person.name} number={person.number} handleClick = {handleClick} />
      )
    })
  
    return <div>{personsList}</div>
  }

  export default Persons;