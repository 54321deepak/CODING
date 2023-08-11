import React, { useState } from 'react'
import Button from '@mui/material/Button';

const Createnode = (props) => {
  const [note, setnote] = useState({
    text: "",
    content: ""
  })

  const [extend, setextend] = useState(false)


  const inputevevnt = (event) => {
    let { name, value } = event.target
    setnote((prevalue) => {
      return {
        ...prevalue,
        [name]: value
      }
    })
  }

  let addevent = () => {
    props.passnote(note)
    setnote({
      text: "",
      content: ""
    })
  }

  const expandit = () => {
    setextend(true)
  }

  const double = () => {
    setextend(false)
  }

  return (
    <>
      <div onDoubleClick={double}>
        <form >
          {extend ? <input type="text" value={note.text} onChange={inputevevnt} name="text" placeholder='title' autoComplete='off' /> : null}
          <br />
          <textarea rows="" column="" value={note.content} onChange={inputevevnt} name="content" placeholder='write a note' onClick={expandit}  ></textarea>
          <br />

          <Button variant="contained" onClick={addevent}>+</Button>

        </form>
      </div>

    </>
  )
}

export default Createnode;