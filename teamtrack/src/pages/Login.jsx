import React from 'react';
import {
  Container, FullScreenDiv, MainDiv, InnerDiv, LogoContainer, LogoBackground, LogoImage,
  PWContainer, PWBackground, PWInnerBackground, PWCircle, PWText, IDContainer, IDBackground,
  IDCircleContainer, IDCircle, IDText, LoginButton, LoginText, RegisterButton, RegisterText,
  CircleButton, CircleInnerContainer, CircleInner, CircleImage
} from '../styles/LoginStyle';

import logo from '../images/mainlogo.png';
import chatImg from '../images/27.svg';
import KakaoLoginButton from '../components/KakaoLoginButton';

const Login = () => (
    <Container>
        <FullScreenDiv />
        <MainDiv />
        <InnerDiv />

        <LogoContainer>
            <LogoBackground />
            <LogoImage src={logo} />
        </LogoContainer>

        <PWContainer>
            <PWBackground>
                
                <PWInnerBackground>
                    
                </PWInnerBackground>
                <PWCircle>
                    <PWText>PW</PWText>
                </PWCircle>
            </PWBackground>
        </PWContainer>

    <IDContainer>
      <IDBackground />
      <IDCircleContainer>
        <IDCircle>
          <IDText>ID</IDText>
        </IDCircle>
      </IDCircleContainer>
    </IDContainer>

        <LoginButton>
            <LoginText>LOGIN</LoginText>
        </LoginButton>

        <RegisterButton>
            <RegisterText>REGISTER</RegisterText>
        </RegisterButton>

        {/* 카카오 로그인 버튼 */}
        <CircleButton>
            <KakaoLoginButton />
        </CircleButton>



    </Container>
);

export default Login;