import React from 'react';

const Student = (props) => {
    return (
      <div>
        <p>Hello, my name is {props.name} and I am {props.age}</p>
      </div>
    )
  }

export default Student;