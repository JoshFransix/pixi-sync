/* eslint-disable react/no-unescaped-entities */
import '../assets/css/landing.css';
import Button from '@mui/material/Button';
import NavBar from './Nav/NavBar';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { pexels } from '../hooks/useAxios';
import Image from './Images/Image';
import Skeleton from '@mui/material/Skeleton';
// import { NavLink } from 'react-router-dom';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepContent from '@mui/material/StepContent';
import Typography from '@mui/material/Typography';
import StepButton from '@mui/material/StepButton';
import { TransitionGroup } from 'react-transition-group';
import Collapse from '@mui/material/Collapse';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const HomePage = () => {
  const [featured, setFeatured] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const imageAttribute = {
    width: 280,
    height: 350,
  };
  const [keyFeatures] = useState([
    {
      image: 'image-upload.jpg',
      title: 'Image Uploading',
      subText:
        'Instantly upload your favorite photos and watch as they become part of your personalized gallery in seconds.',
      link: '',
    },
    {
      image: 'search.jpg',
      title: 'Searching',
      subText:
        'Quickly discover images with our intuitive search feature. Simply enter keywords or tags and instantly discover images.',
      link: '',
    },
    {
      image: 'album.jpg',
      title: 'Albums',
      subText:
        'Create personalized albums to categorize and showcase your favorite photos. Keep your memories organized.',
      link: '',
    },
  ]);

  const [steps] = useState([
    {
      label: 'Search',
      title: 'Search for an idea.',
      description: `Find what you're looking for in a flash! Our search function lets you explore amazing photos for your collection with ease. Simply enter keywords or tags, and instantly uncover the perfect image to include.`,
    },
    {
      label: 'Save',
      title: 'Save ideas you like.',
      description: `Safeguard your favorite photos with just a click, ensuring they're always at your fingertips whenever you need them. Like any photo of your choice, it would be added to a special collection just for you.`,
    },
    {
      label: 'Create',
      title: 'Create/manage photo albums',
      description: `Seamlessly organize your memories or favorite photos into beautifully curated collections that tell your unique story, ready to be shared and cherished for years to come.`,
    },
    {
      label: 'Upload',
      title: 'Upload a photo of your choice',
      description: `Effortlessly bring your photos to life by uploading them with ease. Whether it's capturing a sunset or a candid moment, our upload feature turns your memories into captivating visuals.`,
    },
  ]);

  const [activeStep, setActiveStep] = useState(0);
  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const [faq] = useState([
    {
      question: 'How do I upload images on PixiSync?',
      answer:
        'Uploading images is simple! Just navigate to the upload section of the app, either by clicking on the upload button in the navigation bar or accessing it from the home screen. From there, you can select the images you want to upload from your device and follow the prompts to add them to your gallery.',
    },
    {
      question: 'Can I create multiple albums to organize my photos?',
      answer:
        'Absolutely! Our app allows you to create multiple albums to organize your photos based on different themes, events, or categories. Simply navigate to the albums section, click on the "Create New Album" button, give your album a name, and start adding photos to it.',
    },
    {
      question:
        'How can I share my photos with friends and family using the app?',
      answer:
        'Sharing your photos with friends and family is easy! Simply navigate to the photo you want to share, click on the share button, and choose the sharing option that suits you best.',
    },
  ]);

  useEffect(() => {
    const getImages = async () => {
      try {
        const { data } = await pexels.get('/curated');
        setIsLoading(false);
        const mainData = data?.photos.slice(0, 3);
        setFeatured(mainData);
        console.log(mainData);
      } catch (e) {
        setIsLoading(false);
        console.log(e);
      }
    };
    getImages();
  }, []);

  return (
    <div className="text-white">
      <section className="bg-img">
        <div className="">
          <NavBar />
        </div>
        {/* Hero section */}
        <div className="flex mb-[3rem] flex-col justify-center text-center items-center h-[90vh]">
          <h1 className="text-4xl leading-[3rem] black-ops">
            <span className="text-primary">Gallery</span> Redefined: Where Every{' '}
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
      </section>
      {/* Featured Images */}
      <section className="w-10/12 mx-auto my-[5rem] grid grid-cols-[30%_70%]">
        {/* <h1 className="text-xl black-ops">Featured Images</h1> */}
        <div className="mr-[2rem]">
          <span className="text-sm black-ops bg-primary text-white rounded-full px-2 py-1">
            Featured Images
          </span>
          <h2 className="text-2xl mt-3">
            Explore Our <br />
            Featured Photos
          </h2>
          <p className="opacity-65 text-sm mt-[2rem]">
            Delve into a captivating collection of curated images showcased from
            our diverse gallery.
          </p>
        </div>
        <div className="my-4 grid grid-cols-3 gap-4">
          {isLoading &&
            Array.from({ length: 3 }, (_, i) => (
              <Skeleton
                key={i}
                animation="wave"
                variant="rounded"
                width={imageAttribute.width}
                height={imageAttribute.height}
              />
            ))}
          {!isLoading &&
            featured.map((item: any) => (
              <Image
                width={imageAttribute.width}
                height={imageAttribute.height}
                key={item.id}
                item={item}
              />
            ))}
        </div>
      </section>

      {/* Key features section */}
      <section className="relative w-10/12 mx-auto my-[16rem] grid grid-cols-[65%_35%] bg-img-2">
        <div className="absolute top-0 -right-[8.5rem] select-none pointer-events-none">
          <img
            className="select-none pointer-events-none"
            src={require('../assets/images/bg-img-2.png')}
            alt=""
            style={{ transform: 'rotate(180deg)' }}
          />
        </div>
        <div className="grid grid-cols-3 gap-4 my-4">
          {keyFeatures.map((item, i) => (
            <div
              key={i}
              className="features-card cursor-pointer relative rounded-xl w-[260px] h-[370px] bg-[#151C26]  border-[rgba(255,255,255,0.2)] flex flex-col hover:shadow-2xl"
            >
              <div
                style={{
                  background: `url(${require(`../assets/images/${item.image}`)}) no-repeat center center/cover`,
                }}
                className="w-full h-full rounded-t-xl"
              ></div>
              <div className="text-section bg-[#172029] rounded-b-xl flex flex-col  bottom-0 left-0 w-full p-4">
                <h2 className="text-lg ">{item.title}</h2>

                <p className="text-sm opacity-65 my-3">{item.subText}</p>
                {/* <NavLink className="text-primary text-xs" to="/">
                  Upload
                </NavLink> */}
              </div>
            </div>
          ))}
        </div>
        <div className="ml-[0rem] text-right">
          <span className="text-sm black-ops bg-primary text-white rounded-full px-2 py-1">
            Features
          </span>
          <h2 className="text-2xl mt-3">
            Discover the powerful <br /> features that elevate your <br /> photo
            viewing experience
          </h2>
          <p className="opacity-65 text-sm mt-[2rem]">
            Explore endless possibilities with <br />
            our feature-packed photo gallery app.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="w-10/12 mx-auto my-[16rem]">
        <div className="text-center">
          <span className="text-sm black-ops bg-primary text-white rounded-full px-2 py-1">
            Usage
          </span>
          <h2 className="text-2xl mt-3">How It Works</h2>
          <p className="opacity-65 text-sm mt-[1rem] w-8/12 mx-auto">
            Unlock the full potential of our photo gallery app with our
            easy-to-follow guide. From uploading your images to organizing them
            into albums and sharing with friends, discover how simple it is to
            navigate and utilize our powerful features.
          </p>
        </div>

        <div className="grid grid-cols-[60%_40%] gap-4 mt-[4rem]">
          <Stepper nonLinear activeStep={activeStep} orientation="vertical">
            {steps.map((step: any, index) => (
              <Step key={step.label}>
                <StepButton color="inherit" onClick={handleStep(index)}>
                  <span className="text-white">{step.label}</span>
                </StepButton>
                <StepContent>
                  <Typography>
                    <div className="leading-[2rem]">
                      <h1 className="text-4xl leading-[3rem] font-semibold">
                        {step.title}
                      </h1>
                      <p className="mt-5 text-slate-300">{step.description}</p>
                    </div>
                  </Typography>
                  <Button
                    variant="outlined"
                    style={{
                      width: '150px',
                      borderRadius: '7px',
                      marginTop: '20px',
                    }}
                  >
                    Explore
                  </Button>
                </StepContent>
              </Step>
              // <Step key={step.label}>
              //   <StepLabel>
              //     <span className="text-white">{step.label}</span>
              //   </StepLabel>
              //   <StepContent>
              //     <Typography>{step.description}</Typography>
              //     <Box sx={{ mb: 2 }}>
              //       <div>
              //         <Button
              //           variant="contained"
              //           onClick={handleNext}
              //           sx={{ mt: 1, mr: 1 }}
              //         >
              //           {index === steps.length - 1 ? 'Finish' : 'Continue'}
              //         </Button>
              //         <Button
              //           disabled={index === 0}
              //           onClick={handleBack}
              //           sx={{ mt: 1, mr: 1 }}
              //         >
              //           Back
              //         </Button>
              //       </div>
              //     </Box>
              //   </StepContent>
              // </Step>
            ))}
          </Stepper>
          <div>
            <TransitionGroup>
              <Collapse>
                <div className="select-none pointer-events-none w-10/12">
                  {activeStep == 0 && (
                    <img
                      src={require('../assets/images/search-animation-2.png')}
                      alt=""
                    />
                  )}
                  {activeStep == 1 && (
                    <img
                      src={require('../assets/images/like-image.png')}
                      alt=""
                    />
                  )}
                  {activeStep == 2 && (
                    <img
                      src={require('../assets/images/image-upload-2.png')}
                      alt=""
                    />
                  )}
                  {activeStep == 3 && (
                    <img
                      src={require('../assets/images/upload-image.png')}
                      alt=""
                    />
                  )}
                </div>
              </Collapse>
            </TransitionGroup>
            {/* <img
              src={require(
                `../assets/images/${activeStep == 0 ? 'search-animation-2.png' : activeStep == 1 ? 'like-image.png' : 'image-upload-2.png'}`
              )}
              alt=""
              className="w-10/12"
            /> */}
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="relative w-10/12 mx-auto my-[16rem]">
        <div className="absolute -top-[14rem] -left-[9.5rem] select-none pointer-events-none">
          <img
            className="select-none pointer-events-none"
            src={require('../assets/images/bg-img-2.png')}
            alt=""
          />
        </div>
        <div className="text-center mb-[4rem]">
          <span className="text-sm black-ops bg-primary text-white rounded-full px-2 py-1">
            FAQ
          </span>
          <h2 className="text-2xl mt-3">Frequently Asked Questions</h2>
          <p className="opacity-65 text-sm mt-[1rem] w-8/12 mx-auto">
            Got questions? We've got answers! Dive into our FAQ section for
            everything you need to know about navigating our photo gallery app
          </p>
        </div>
        <div>
          {faq.map((item: any, i) => (
            <Accordion
              key={i}
              sx={{ backgroundColor: '#252e48', color: '#fff' }}
            >
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon sx={{ color: '#fff' }} />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography>
                  <span className="font-semibold border-b border-slate-400">
                    {item.question}
                  </span>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <span className="opacity-75">{item.answer}</span>
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </section>

      {/* Footer section */}
      <section className="footer w-[95%] mx-auto rounded-xl mt-[16rem] mb-[2rem] bg-[#252e48] py-[3rem] px-[1.5rem]">
        <div className="flex justify-between gap-6 mx-auto w-9/12">
          <div className="about ">
            <h2 className="black-ops text-xl font-semibold mb-5">
              <span className="text-primary">P</span>ixi
              <span className="text-primary">S</span>ync
              <span className="text-primary">.</span>
            </h2>
            <ul className="flex flex-col text-slate-200">
              <NavLink className="mb-4" to="/">
                Home
              </NavLink>
              <NavLink className="mb-4" to="/">
                Become a customer
              </NavLink>
              <NavLink className="mb-4" to="/">
                About Us
              </NavLink>
              <NavLink className="mb-4" to="/">
                FAQ
              </NavLink>
            </ul>
          </div>
          <div className="language">
            <h2 className="text-xl black-ops mb-5 font-semibold">Language</h2>
            <ul className="flex flex-col">
              <NavLink className="mb-4" to="/">
                Home
              </NavLink>
              <NavLink className="mb-4" to="/">
                Become a customer
              </NavLink>
              <NavLink className="mb-4" to="/">
                About Us
              </NavLink>
              <NavLink className="mb-4" to="/">
                FAQ
              </NavLink>
            </ul>
          </div>
          <div className="contact">
            <h2 className="text-xl black-ops mb-5 font-semibold">Contact Us</h2>
            <ul className="flex flex-col">
              <NavLink className="mb-4" to="/">
                Home
              </NavLink>
              <NavLink className="mb-4" to="/">
                Become a customer
              </NavLink>
              <NavLink className="mb-4" to="/">
                About Us
              </NavLink>
              <NavLink className="mb-4" to="/">
                FAQ
              </NavLink>
            </ul>
          </div>
        </div>

        <h3 className="mt-8 text-center black-ops text-sm text-primary">
          ©Copyright 2024 PixiSync.
        </h3>
      </section>
    </div>
  );
};

export default HomePage;
