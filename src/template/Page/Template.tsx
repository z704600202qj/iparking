import * as React from 'react';

const Template: React.FC<any> = (props) => {
  const { children } = props;
  return (
    <div>
      {
        children
      }
    </div>
  );
};

export default Template;
