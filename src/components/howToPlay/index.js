import React from 'react'
import { PlayContainer,PlayHead,PlayBody,PlayStep1,PlayStep2,PlayStep3,Step1Image,Step1Text,Step2Image,Step2Text,Step3Image,Step3Text } from './howelements';
import Step1 from '../../images/step1.jpg';
import Step2 from '../../images/step2.jpg';
import Step3 from '../../images/step3.jpg';

const How = () => {
  return (
    <>
      <PlayContainer id="how_to">
        <PlayHead>
          Guide To Play
        </PlayHead>
        <PlayBody>

          <PlayStep1>
            <Step1Text>1. Download The Game</Step1Text>
            <center><Step1Image src={Step1} type="iamge/jpg"></Step1Image></center>
          </PlayStep1>

          <PlayStep2>
            <Step2Text>2. Start The Game</Step2Text>
            <center><Step2Image src={Step2} type="iamge/jpg"></Step2Image></center>
          </PlayStep2>

          <PlayStep3>
            <Step3Text>3. Use The Joystick to move and Fire button to shoot</Step3Text>
            <center><Step3Image src={Step3} type="iamge/jpg"></Step3Image></center>
          </PlayStep3>

        </PlayBody>
      </PlayContainer>
    </>
  );
};

export default How