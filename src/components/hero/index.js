import React from 'react'
import { HeroContainer,HeroBg,VideoBg,HeroContent,HeroPara,HeroTitle,HeroBtn } from './heroelements'
import Video from '../../videos/video.mp4';

const Hero = () => {
  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type="video/mp4"></VideoBg>
        </HeroBg>
        <HeroContent >
            <HeroTitle >
                Gaming Made More Realistic.
            </HeroTitle>
            <HeroPara>
                Join Now . Play Now . Enjoy Now !
            </HeroPara>
            <HeroBtn onClick={() => window.open("https://na.battlegrounds.pubg.com/")}>
                Lets Go....!!!!!!!!!
            </HeroBtn>
        </HeroContent>
    </HeroContainer>
  );
};

export default Hero