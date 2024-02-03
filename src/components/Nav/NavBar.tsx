import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import '../../assets/css/landing.css';

const NavBar = () => {
  return (
    <div className="navbar flex justify-between text-white items-center h-[10vh] w-10/12 mx-auto bg-transparent">
      <h2 className="josefin text-xl font-semibold">
        <span className="text-primary">P</span>ixi
        <span className="text-primary">S</span>ync
        <span className="text-primary">.</span>
      </h2>
      <div>
        <NavLink className="mr-6" to="/">
          Home
        </NavLink>
        <NavLink className="mr-6" to="/about">
          About
        </NavLink>
        <NavLink to="/explore">Explore</NavLink>
      </div>
      <div className="flex items-center">
        <div className="mr-4">
          <Button
            style={{
              color: 'white',
            }}
            variant="text"
          >
            Log in
          </Button>
        </div>
        <Button
          style={{
            color: 'primary',
            borderColor: 'primary',
            borderRadius: '7px',
          }}
          variant="outlined"
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
