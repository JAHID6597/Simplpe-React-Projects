import React from 'react';
import { Zoom  } from 'react-reveal';

const GithubUserList = ({users}) => {
    return (
      <div className="d-flex align-items-center justify-content-around flex-wrap container py-5">
        {users.map((user) => (
          <Zoom left>
            <div className="d-flex align-items-center justify-content-center githubUserItem p-4 m-3" key={user.name}>
              <div className="flex-shrink-0">
                <img
                  className="githubUserImg rounded-circle"
                  src={user.avatar_url}
                  alt={user.login}
                />
              </div>
              <div className="flex-grow-1 ms-3">
                <h4>{user.login}</h4>
                <a href={user.html_url} className="profileLink text-muted">
                  Profile
                </a>
              </div>
            </div>
          </Zoom>
        ))}
      </div>
    );
}

export default GithubUserList
