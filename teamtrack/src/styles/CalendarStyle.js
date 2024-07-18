import styled from "styled-components";

export const CalendarContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const CalendarBackground = styled.div`
  width: 1200px;
  height: 811px;
  left: 18px;
  top: 25px;
  position: absolute;
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
`;

export const CalendarHeader = styled.div`
  width: 284px;
  height: 126px;
  left: 18px;
  top: 25px;
  position: absolute;
  background: #0021CF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-top-left-radius: 50px;
`;

export const CalendarHeaderText = styled.div`
  left: 90px;
  top: 96px;
  position: absolute;
  text-align: center;
  color: white;
  font-size: 45px;
  font-family: 'Pretendard';
  font-weight: 700;
  line-height: 20px;
  word-wrap: break-word;
`;

export const CalendarLine = styled.div`
  width: 1200px;
  height: 7px;
  left: 18px;
  top: 144px;
  position: absolute;
  background: #0021CF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const CalendarVerticalLine = styled.div`
  width: 811px;
  height: 7px;
  left: 296px;
  top: 836px;
  position: absolute;
  transform: rotate(-90deg);
  transform-origin: 0 0;
  background: #0021CF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const MonthCircle = styled.div`
  width: 106px;
  height: 106px;
  left: 0;
  top: 0;
  position: absolute;
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 9999px;
`;

export const MonthText = styled.div`
  left: 33px;
  top: 43px;
  position: absolute;
  text-align: center;
  color: #0021CF;
  font-size: 60px;
  font-family: 'Pretendard';
  font-weight: 700;
  line-height: 20px;
  word-wrap: break-word;
`;

export const WeekdaysContainer = styled.div`
  width: 817px;
  height: 28px;
  left: 363px;
  top: 77px;
  position: absolute;
  display: flex;
  justify-content: space-between;
`;

export const Weekday = styled.div`
  text-align: center;
  color: #0021CF;
  font-size: 40px;
  font-family: 'Pretendard';
  font-weight: 600;
  line-height: 20px;
  word-wrap: break-word;
`;

export const DaysContainer = styled.div`
  width: 775px;
  height: 516px;
  left: 345px;
  top: 240px;
  position: absolute;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 80px;
`;

export const Day = styled.div`
  text-align: center;
  color: black;
  font-size: 40px;
  font-family: 'Pretendard';
  font-weight: 600;
  line-height: 20px;
  word-wrap: break-word;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const VerticalDaysContainer = styled.div`
  width: 46px;
  height: 508px;
  left: 141px;
  top: 230px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 102px;
`;

export const VerticalDay = styled.div`
  width: 100%;
  text-align: center;
  color: #0021CF;
  font-size: 70px;
  font-family: 'Pretendard';
  font-weight: 600;
  line-height: 20px;
  word-wrap: break-word;
`;