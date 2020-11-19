import * as React from 'react';
import noop from '../../utils/noop';
const Button = (props) => {
    const { onClick = noop, children, } = props;
    const handleClick = (event) => {
        onClick(event);
    };
    return (React.createElement("div", { className: "button", role: "button", onClick: handleClick }, children));
};
export default Button;
