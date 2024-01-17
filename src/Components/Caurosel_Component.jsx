
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    lable: "jdh fjdhfjdh fjhdkj",
    imgPath:
    'https://f.nooncdn.com/mpcms/EN0001/assets/b461e33c-2b59-4502-885b-adab6806401b.png?auto=format&fit',
  },
  {
    imgPath:
    'https://f.nooncdn.com/mpcms/EN0001/assets/2076cf62-0b2a-4746-8858-05ad1f0aa10f.gif?auto=format&fit',
  },
  {
    imgPath:
    'https://f.nooncdn.com/ads/banner-1008x1008/en_dk_uae-hero-hp.1704947101.225968.png?auto=format&fit',
  },
  {
    imgPath:
    'https://f.nooncdn.com/mpcms/EN0001/assets/af899b2f-1f12-4c9e-a3dd-5ebb0d93b6ce.gif?auto=format&fit',
  },
  {
    imgPath:
    'https://f.nooncdn.com/mpcms/EN0001/assets/5a0e2a09-32fe-49ce-8cd6-1082c3571856.png?auto=format&fit',
  },
  {
    imgPath:
    'https://f.nooncdn.com/mpcms/EN0001/assets/52a25365-3d6c-43f1-896e-80e56cf2012b.png?auto=format&fit',
  },
];

export const Caurosel_Component = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div  className='grid grid-cols-12 gap-0 justify-around px-12 '> 
    <div className='col-span-8 ' >
    <Box sx={{ maxWidth: 1000, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 0,
          pl:  2,
          bgcolor: 'background.default',
        }}
      >
        {/* <Typography>{images[activeStep].label}</Typography> */}
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 235,
                  display: 'block',
                  maxWidth: 1000,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      {/* <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <MdOutlineKeyboardArrowLeft/>
            ) : (
              <MdOutlineKeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <MdOutlineKeyboardArrowRight />
            ) : (
              <MdOutlineKeyboardArrowLeft/>
            )}
            Back
          </Button>
        }
      /> */}
    </Box>
    </div>

        <div className='col-span-2 px-0'>
            <img src="https://f.nooncdn.com/mpcms/EN0001/assets/dc5e0648-26c1-4c73-9f6b-61c7644a7ca2.png?auto=format&fit" alt="" />
        </div>

        <div className='col-span-2 px-0'>
            <img src="https://f.nooncdn.com/mpcms/EN0001/assets/aeca53b5-4d64-4733-a911-0143b32ce237.png?auto=format&fit" alt="" />
        </div>

    </div>
  );
}
