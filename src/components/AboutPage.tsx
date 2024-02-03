import '../assets/css/landing.css';
import Button from '@mui/material/Button';
import NavBar from './Nav/NavBar';

const AboutPage = () => {
  return (
    <div>
      <div className="bg-img">
        <div className="">
          <NavBar />
        </div>
        <div className="flex flex-col justify-center text-center items-center h-[50vh] text-white ">
          <h1 className="text-4xl leading-[3rem] black-ops">
            <span className="text-primary">About</span> Redefined: Where Every{' '}
            <br /> Photo Finds <span className="text-primary"> Its Place.</span>
          </h1>
          <p className="my-6 opacity-75">
            Immerse yourself in a world of frames, where every photo is a window
            to moments that matter.
          </p>
          <Button
            variant="contained"
            style={{ width: '150px', borderRadius: '7px' }}
          >
            Explore
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
