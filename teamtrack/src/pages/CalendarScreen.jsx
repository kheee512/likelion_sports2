import React from "react";
import Calendar from "./Calendar";
import {
  CalendarScreenContainer, NavBar, Content, SideBar, ProfileSection, ProfileHeader,
  ProfileHeaderText, LogoutButton, LogoutButtonText, ProfileCard, ProfilePicture,
  ProfileName, AdvertisementSection, AdHeader, AdInfoCircle, AdHeaderText, AdImage, MainCalendar
} from "../styles/CalendarScreenStyle";
import ad1 from "../images/ad1.png";
import ad2 from "../images/ad2.png";
import profileimg from "../images/삼성-logo.png";

function CalendarScreen() {
  return (
    <CalendarScreenContainer>
      <NavBar />
      <Content>
        <SideBar>
          <ProfileSection>
            <ProfileHeader>
              <ProfileHeaderText>Profile</ProfileHeaderText>
              <LogoutButton>
                <LogoutButtonText>SAMSUNG Lions</LogoutButtonText>
              </LogoutButton>
            </ProfileHeader>
            <ProfileCard>
              <ProfilePicture src={profileimg} alt="Profile" />
              <ProfileName>jaekyoung</ProfileName>
            </ProfileCard>
          </ProfileSection>
          <AdvertisementSection>
            <AdHeader>
              
              
            </AdHeader>
            <AdImage src={ad1} alt="Ad 1" />
            <AdImage src={ad2} alt="Ad 2" />
          </AdvertisementSection>
        </SideBar>
        <MainCalendar>
          <Calendar />
        </MainCalendar>
      </Content>
    </CalendarScreenContainer>
  );
}

export default CalendarScreen;