import { NavLink } from 'react-router-dom';
import '../../assets/css/landing.css';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
const Image = ({ item, width, height }) => {
  //   const red = 'red';
  return (
    <>
      <div
        style={{
          background: `url('${item.src.original}') no-repeat center/cover`,
          width: `${width}px`,
          height: `${height}px`,
        }}
        className="card cursor-pointer relative shadow-xl rounded-xl"
      >
        <div className="overlay absolute top-0 left-0 w-full h-full flex flex-col rounded-xl justify-center items-center opacity-0">
          <h1>{item.photographer}</h1>
          <NavLink to="/">Go to Image</NavLink>

          <div className="absolute top-2 right-2">
            <IconButton title="add to favorites" aria-label="add to favorites">
              <FavoriteIcon color="red" />
            </IconButton>
          </div>
        </div>
      </div>
    </>
  );
};
export default Image;
