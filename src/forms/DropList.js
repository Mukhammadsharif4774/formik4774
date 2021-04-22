import React from 'react';
import Select from 'react-select';

const DropList = (props) => {
    const handleChange = (value) => {
        props.onChange('topics', value)
    }

    const handleBlur = () => {
        props.onBlur('topics', true)
    }
    console.log(props)
    return(
        <div style={{width:"400px", marginLeft:"40px"}} className="has-text-link">
            <Select
            value={props.value}
            onChange={handleChange}
            onBlur={handleBlur}
            options={props.options}
            isMulti={true}
        />
        </div>
        
    )
}
export default DropList