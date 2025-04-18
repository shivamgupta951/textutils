import React from 'react'
export default function Alert(props) {
  return (
  <>
  <div className="alert alert-dark alert-dismissible fade show" role="alert" style={{margin: '0',height: '60px'}}>
    <strong>Welcome to {props.title} mode of website!</strong> colours can be set for current mode from theme pallet at right side.
    <button type="button" className="btn-close mx-2" aria-label="Close" onClick={props.dismiss}></button>
  </div>
  </>
  )
}
