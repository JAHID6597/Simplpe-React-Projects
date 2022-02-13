import React, { useState, useEffect } from 'react';
import './GithubUsersStyles.css';
import GithubUserList from './GithubUserList';
import LoadingSpinner from '../common/LoadingSpinner';

const API_ENDPOINT = `https://api.github.com/users`;
const GithubUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(API_ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setUsers(data);
      });
  }, []);

  return (
    <div className="githubUsersDiv p-5">
      <h1 className="githubUserMainHeading">Github Users</h1>
      {loading ? (
        <LoadingSpinner
          mainDivclassName="githubUserSpinnerClass"
          spinnerclassName="text-success githubUserSpinnerWidthHeight"
        />
      ) : (
        <GithubUserList users={users} />
      )}
    </div>
  );
};

export default GithubUsers;
