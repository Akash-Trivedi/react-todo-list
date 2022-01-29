import React from 'react';
import {Github} from 'react-bootstrap-icons'

export default function Footer(props){
  return (
    <div className="container">
      <footer className="bg-light text-center text-lg-start">
      <div className="text-center p-3" style={{"backgroundColor": "rgba(0, 0, 0, 0.2)"}}>
        {`© 2022 Copyright: `}
        <a className="text-dark" href={props.link}><Github /></a>
      </div>
    </footer>
    </div>
  )
}