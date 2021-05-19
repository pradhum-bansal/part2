const Part = (props) =>{
    return(
      <>
      <p key = {props.id}>
       {props.name} {props.exercise} 
      </p>
      </>
    )
  }
  export {Part}