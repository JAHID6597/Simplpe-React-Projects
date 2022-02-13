import React from 'react';

const BirthdayUserItem = ({ users }) => {
  return (
    <>
      {users.map((user) => (
        <div className="birthdayUserItem my-2 px-4 py-2" key={user.id}>
          <div className="d-flex align-items-center">
            <div className="flex-shrink-0">
              <img
                className="userImage rounded-circle"
                src={user.image}
                alt={user.name}
              />
            </div>
            <div className="flex-grow-1 ms-3">
              <h4 className="userName">{user.name}</h4>
              <p className="userAge">{user.age} years</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BirthdayUserItem;
