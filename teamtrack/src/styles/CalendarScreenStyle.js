import styled from "styled-components";

export const CalendarScreenContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const NavBar = styled.div`
  width: 100%;
  height: 10vh;
  background: #0021CF;
  box-shadow: 0px 0.5vh 0.5vh rgba(0, 0, 0, 0.25);
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  
  @media(min-width: 768px) {
    flex-direction: row;
  }
`;

export const SideBar = styled.div`
  width: 100%;
  background: white;
  box-shadow: 0px 0.5vh 0.5vh rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  padding: 2vh;

  @media(min-width: 768px) {
    width: 30%;
  }
`;

export const ProfileSection = styled.div`
  background: #0021CF;
  box-shadow: 0px 0.5vh 0.5vh rgba(0, 0, 0, 0.25);
  padding: 2vh;
  border-radius: 0 0 3vh 3vh;
`;

export const ProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2vh;
`;

export const ProfileHeaderText = styled.div`
  color: #0021CF;
  font-size: 4vh;
  font-family: 'Pretendard';
  font-weight: 700;
  line-height: 1;
`;

export const LogoutButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 5vh;
  background: white;
  border-radius: 3vh;
  box-shadow: 0px 0.5vh 0.5vh rgba(0, 0, 0, 0.25);
`;

export const LogoutButtonText = styled.div`
  color: #0021CF;
  font-size: 2vh;
  font-family: 'Pretendard';
  font-weight: 600;
  line-height: 1;
`;

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2vh;
`;

export const ProfilePicture = styled.img`
  width: 10vh;
  height: 10vh;
  border-radius: 50%;
  box-shadow: 0px 0.5vh 0.5vh rgba(0, 0, 0, 0.25);
`;

export const ProfileName = styled.div`
  color: #0021CF;
  font-size: 2vh;
  font-family: 'Pretendard';
  font-weight: 700;
  line-height: 1;
  margin-top: 1vh;
`;

export const AdvertisementSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AdHeader = styled.div`
  display: flex;
  top: 100%;
  align-items: center;
  margin-bottom: 2vh;
`;

export const AdInfoCircle = styled.div`
  width: 5vh;
  height: 5vh;
  background: #0021CF;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2vh;
  font-family: 'Pretendard';
  font-weight: 700;
  line-height: 1;
`;

export const AdHeaderText = styled.div`
  color: #0021CF;
  font-size: 2vh;
  font-family: 'Pretendard';
  font-weight: 700;
  line-height: 1;
  margin-left: 1vh;
`;

export const AdImage = styled.img`
  width: 90%;
  margin-bottom: 2vh;
  border-radius: 3vh;
`;

export const MainCalendar = styled.div`
  flex: 1;
  background: white;
  padding: 2vh;
  box-shadow: 0px 0.5vh 0.5vh rgba(0, 0, 0, 0.25);
  border-radius: 3vh;
`;