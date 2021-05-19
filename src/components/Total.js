const Total = (props) =>{
    const total = props.exercises.reduce((s, p) => s + p)


    return(
        
        <>
        <b>Number of exercises {total}</b>
        </>
      )

  }
  export {Total}