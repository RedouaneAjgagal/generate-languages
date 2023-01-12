import React from 'react'

const Language = (props) => {
  const deleteHandler = () => {
    props.onRemove(props.items.id)
  }
  return (
    <li>
      <h2>{props.items.lang}</h2>
      <button onClick={deleteHandler}>Delete</button>
    </li>
  )
}

export default Language