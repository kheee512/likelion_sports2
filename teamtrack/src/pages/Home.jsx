import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Container, WhiteDiv, LoginContainer, LoginButton, LoginCircle, LoginText, LoginButtonText,
  CrossContainer, CrossPart, InnerWhiteDiv, BlueDivContainer, BlueDiv, BlueImage,
  TextContainer, TextBackground, Text, PremiumContainer, PremiumCircle, PremiumArrow, InfoContainer, InfoCircle, InfoText, PremiumText, SmallImage,
  LargeImageContainer, LargeImage, ImageContainer
} from '../styles/HomeStyle';

import logo from '../images/14.svg';
import mainlogo from '../images/mainlogo.png';

import img1 from '../images/img1.jpeg';
import img2 from '../images/img2.jpeg';
import img3 from '../images/img3.png';
import img4 from '../images/img4.jpeg';
import img5 from '../images/img5.jpeg';
import img6 from '../images/img6.jpeg';

const Home = () => {
  const navigate = useNavigate();

  const handleSportSelect = (sport) => {
    navigate(`/calendar/${sport}`);
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <Container>
      <WhiteDiv />
      <LoginContainer onClick={handleLoginClick}>
        <LoginButton>
          <LoginCircle>
            <LoginText>L</LoginText>
          </LoginCircle>
          <LoginButtonText>Login</LoginButtonText>
        </LoginButton>
        <CrossContainer>
          <CrossPart src={logo} />
        </CrossContainer>
      </LoginContainer>

      <InnerWhiteDiv />
      <BlueDivContainer>
        <BlueDiv />
        <BlueImage src={mainlogo} />
      </BlueDivContainer>

      <TextContainer left={16} onClick={() => handleSportSelect('soccer')}>
        <TextBackground />
        <Text>Soccer</Text>
      </TextContainer>
      <TextContainer left={28} onClick={() => handleSportSelect('basketball')}>
        <TextBackground />
        <Text>Basketball</Text>
      </TextContainer>
      <TextContainer left={40} onClick={() => handleSportSelect('baseball')}>
        <TextBackground />
        <Text>Baseball</Text>
      </TextContainer>
      <TextContainer left={52} onClick={() => handleSportSelect('volleyball')}>
        <TextBackground />
        <Text>Volleyball</Text>
      </TextContainer>
      <TextContainer left={64} onClick={() => handleSportSelect('esports')}>
        <TextBackground />
        <Text>E-sports</Text>
      </TextContainer>
      <TextContainer left={76} onClick={() => handleSportSelect('swimming')}>
        <TextBackground />
        <Text>Swimming</Text>
      </TextContainer>

      <PremiumContainer>
        <PremiumCircle />
        <PremiumArrow />
      </PremiumContainer>

      <ImageContainer>
        <LargeImageContainer top="75vh" opacity="0.90" justifyContent="flex-start">
          <LargeImage src={img2} />
        </LargeImageContainer>

        <LargeImageContainer top="175vh" opacity="0.95" justifyContent="flex-end">
          <LargeImage src={img5} />
        </LargeImageContainer>

        <LargeImageContainer top="125vh" justifyContent="flex-end">
          <LargeImage src={img3} />
        </LargeImageContainer>

        <SmallImage src={img1} left="8%" />
        <SmallImage src={img6} left="38%" />
        <SmallImage src={img4} left="68%" />

        <InfoContainer>
          <InfoCircle />
          <InfoText>i</InfoText>
          <PremiumText>Click for premium mode</PremiumText>
        </InfoContainer>
      </ImageContainer>
    </Container>
  );
};

export default Home;
