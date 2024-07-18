import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleSportSelect = (sport) => {
    navigate(`/calendar/${sport}`);
  };

  return (
    <div>
      <button onClick={() => handleSportSelect('soccer')}>축구</button>
      <button onClick={() => handleSportSelect('basketball')}>농구</button>
      <button onClick={() => handleSportSelect('baseball')}>야구</button>
      <button onClick={() => handleSportSelect('volleyball')}>배구</button>
      <button onClick={() => handleSportSelect('esports')}>e스포츠</button>
      <button onClick={() => handleSportSelect('swimming')}>수영</button>
    </div>
  );
}

export default Home;
