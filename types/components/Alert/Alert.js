import * as React from 'react';
const Alert = (props) => {
    const { children, } = props;
    return (React.createElement("div", { className: "alert" }, children));
};
export default Alert;
