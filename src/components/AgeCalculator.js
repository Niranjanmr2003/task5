import React, { useState } from "react";
import './AgeCalculator.css'
import {differenceInYears} from 'date-fns';

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState(null);
  const calculateAge = () => {
    const birthDateObj = new Date(birthDate);
    const currentDate = new Date();
    if (!isNaN(birthDateObj)) {
      const calculatedAge = differenceInYears(currentDate,birthDateObj);
      setAge(calculatedAge);
    } else {
      setAge(null);
    }
  };
  return (
    <div>
      <div>
        <input class='input'
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
      </div>
      <button class='button'onClick={calculateAge}>Calculate Age</button>
      {age !== null && <h2>Your are {age} years old</h2>}
      {age === null && <p>Please enter a valid date of birth.</p>}
    </div>
  );
};

export default AgeCalculator;
