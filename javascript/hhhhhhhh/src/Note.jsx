import React from 'react'
import Button from '@mui/material/Button'; 

const Note = (props) => {

  const deletenote=()=>{
      props.onselect(props.id);
}

  return (
    <>
    <h1>{props.title}</h1>
    <p>{props.content}</p>
    <Button variant="contained" onClick={deletenote}>delete</Button>
    </>
  )
}

export default Note
