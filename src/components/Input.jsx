import React from 'react';

const Input = React.forwardRef((props, ref) => (
    <input  
            className={props.className}
            id={props.id}
            ref={ref}
            type={props.type}
            onChange={props.onChange}
            required
            placeholder={props.placeholder} />
));

export default Input;