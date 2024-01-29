import '../css/landing.css';
// import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import NavBar from './Nav/NavBar';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

const ExplorePage = () => {
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const changeValue = (value: any) => {
    setValue(value);
    console.log(value);
  };

  return (
    <div>
      <div className="bg-img">
        <div className="">
          <NavBar />
        </div>
        <div className="flex flex-col justify-center text-center items-center h-[50vh] text-white ">
          {/* <h1 className="text-4xl leading-[3rem] black-ops">
            <span className="text-primary">Explore</span> Redefined: Where Every{' '}
            <br /> Photo Finds <span className="text-primary"> Its Place.</span>
          </h1> */}
          <TextField
            placeholder="Search for images"
            variant="outlined"
            type="text"
            value={value}
            onChange={(e) => changeValue(e.target.value)}
            id="outlined-start-adornment"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                  >
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <p className="my-6 opacity-75">
            Immerse yourself in a world of test, where every photo is a window
            to moments that matter.
          </p>
          <LoadingButton
            loading={isLoading}
            onClick={() => {
              setIsLoading(true);
              setTimeout(() => {
                setIsLoading(false);
              }, 2000);
            }}
            variant="contained"
            style={{ width: '150px', borderRadius: '7px' }}
          >
            <span>Search</span>
          </LoadingButton>
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
