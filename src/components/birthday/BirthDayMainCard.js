import React, { useState } from 'react';
import BirthdayUserItem from './BirthdayUserItem';
import { Zoom  } from 'react-reveal';
import data from './data';

const BirthDayMainCard = () => {
  const [users, setUsers] = useState(data);

  const handleClearAllUser = () => {
    setUsers([]);
  };

  return (
    <Zoom left>
      <div className="birthDayMainCard">
        <h3 className="birthdayMainTitle my-4 text-center">
          {users.length} birthdays today
        </h3>
        <BirthdayUserItem users={users} />
        <div className=" my-3 px-4 py-2">
          <button className="btn clearAllBtn p-2" onClick={handleClearAllUser}>
            Clear All
          </button>
        </div>
      </div>
    </Zoom>
  );
};

export default BirthDayMainCard;
