
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../utils/UserSlice';
import {Link} from 'react-router-dom';
const NavBar = ({fetching}) => {
  const user = useSelector((store) => store.user);
  const dispatch=useDispatch();

 
  
  return (
    <div className="navbar bg-base-300 shadow-sm px-4">
      <div className="flex-1">
        <Link to='/' className="btn btn-ghost text-xl">
          👨‍💻 DevTinder
        </Link>
      </div>

      {user && (
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="flex items-center gap-3 cursor-pointer"
            >
              <p className="text-sm font-medium">
                Welcome, {user.firstName}
              </p>

              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Profile"
                    src={user.photoUrl}
                  />
                </div>
              </div>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li><Link to='/profile'>Profile</Link></li>
              <li><a>Settings</a></li>
              <li><a onClick={()=>{fetching(false)}}>Logout</a></li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
