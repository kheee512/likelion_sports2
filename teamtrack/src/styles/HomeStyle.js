import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 260vh;
  position: relative;
  background: #0021CF;
`;

export const WhiteDiv = styled.div`
  width: 100%;
  height: 51vh;
  left: 0;
  top: 11vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const LoginContainer = styled.div`
  width: 12vw;
  height: 8vh;
  left: 2vw;
  top: 1vh;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;

`;

export const LoginButton = styled.div`
  width: 50%;
  padding: 0 1vh;
  height: 60%;
  position: relative;
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const LoginCircle = styled.div`
  width: 2vw;
  height: 3.5vh;
  background: #0021CF;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginText = styled.div`
  color: white;
  font-family: 'Pretendard';
  font-weight: 900;
  line-height: 20px;
  word-wrap: break-word;
  font-size: 2.5vh;
`;

export const LoginButtonText = styled.div`
    color: #0021CF;
    font-family: 'Pretendard-Bold';

    line-height: 20px;
    word-wrap: break-word;
    font-size: 2.3vh;
`;

export const CrossContainer = styled.div`
  
  
  position: absolute;
  left: 50%;
  top: 23%;
`;

export const CrossCircle = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 50%;
  position: absolute;
`;

export const CrossPart = styled.img`
  width: 5.5vw;
  height: 5.5vh;
  left: 2%;
  position: absolute;
  border: none;
`;






export const InnerWhiteDiv = styled.div`
  width: 85%;
  height: 15vh;
  left: 7.5%;
  top: 25vh;
  position: absolute;
  background: white;
  box-shadow: 0px 10px 4px rgba(0, 0, 0, 0.35);
  border-radius: 50px;
  border: 1vh #0021CF solid;
`;

export const BlueDivContainer = styled.div`
  width: 30%;
  height: 15vh;
  left: 35%;
  top: 17.5vh;
  position: absolute;
`;

export const BlueDiv = styled.div`
  width: 100%;
  height: 100%;
  background: #0021CF;
  border-radius: 50px;
  position: absolute;
`;

export const BlueImage = styled.img`
  width: 85%;
  height: 80%;
  left: 7%;
  top: 10%;
  position: absolute;
`;

export const TextContainer = styled.div`
  width: 10vw;
  height: 7vh;
  left: ${({ left }) => left}%;
  top: 48.5vh;
  position: absolute;
  cursor: pointer;
`;

export const TextBackground = styled.div`
  width: 100%;
  height: 100%;
  background: #CCD3F5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  position: absolute;
`;

export const Text = styled.div`
    position: absolute;
    text-align: center;
    
    color: #0021CF;
    font-family: 'Pretendard';
    font-weight: 900;
    line-height: 20px;
    word-wrap: break-word;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.15vw;
`;

export const PremiumContainer = styled.div`
  width: 5%;
  height: 7vh;
  left: 85%;
  top: 10vh;
  position: absolute;
`;

export const PremiumCircle = styled.div`
  width: 65%;
  height: 65%;
  left: 15%;
  top: 20vh;
  position: absolute;
  background: white;
  border-radius: 50%;
  border: 0.7vh #0021CF solid;
`;

export const PremiumArrow = styled.div`
  width: 2vw;
  height: 0.5vw;
  left: 4.2vw;
  top: 24.2vh;
  position: absolute;
  transform: rotate(45deg);
  transform-origin: 0 0;
  background: #0021CF;
`;










export const InfoContainer = styled.div`
  width: 30vw;
  height: 3%;
  left: 66vw;
  top: 253.5vh;
  position: absolute;
`;

export const InfoCircle = styled.div`
  width: 1.7vw;
  height: 3vh;
  left: 15.5vw;
  top: 0vh;
  position: absolute;
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
`;

export const InfoText = styled.div`
  position: absolute;
  text-align: center;
  color: #0021CF;
  font-family: 'Pretendard';
  font-weight: 700;
  line-height: 20px;
  word-wrap: break-word;
  left: 16.3vw;
  top: 9%;
  font-size: 2vh;
`;

export const PremiumText = styled.div`
  position: absolute;
  text-align: center;
  color: white;
  font-family: 'Pretendard';
  font-weight: 700;
  line-height: 20px;
  word-wrap: break-word;
  left: 60%;
  top: 10%;
  font-size: 1.5vh;
`;

export const SmallImage = styled.img`
  width: 25vw;
  height: 20vh;
  left: ${({ left }) => left};
  top: 230vh;
  position: absolute;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
`;

export const LargeImageContainer = styled.div`
  padding-right: 8px;
  left: 7.5vw;
  top: ${({ top }) => top};
  position: absolute;
  opacity: ${({ opacity }) => opacity};
  box-shadow: 0px 10px 4px rgba(0, 0, 0, 0.50);
  border-radius: 50px;
  overflow: hidden;
  display: inline-flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: center;
`;

export const LargeImage = styled.img`
    width: 85.5vw;
    height: 50vh;
    object-fit: cover;
`;

export const ImageContainer = styled.div`
    
`;

