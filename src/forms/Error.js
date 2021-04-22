import React from 'react'


const Error = (props ) => {
    return (
        <div className="has-text-danger mb-2" style={{marginLeft: "150px"}}>
            {props.children}
        </div>
    )
}

export default Error