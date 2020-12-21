import React from 'react'
import '../../../components/Navigation/MenuToggle/MenuToggle.css'

const MenuToggle = (props)=>{
    const cls =[ 'MenuToggle',
    'fa',
    props.isOpen ? 'fa-times open' : 'fa-bars'
    ]

    return(
        <i
        className={cls.join(' ')}
        onClick={props.onToggle}
        />
    )
}

export default MenuToggle