import React from 'react';

const UserItem = (props) => {
  return (
    <>
      <li>{props.userName} ({props.userAge})</li>
    </>
  );
};

export default UserItem;