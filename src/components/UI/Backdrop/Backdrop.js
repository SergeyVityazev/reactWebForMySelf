import React from 'react'
import '../../../components/UI/Backdrop/Backdrop.css'

const Backdrop = props => {
    return(
    <div className="Backdrop" onClick={props.onClick} />
    )
}

export default Backdrop