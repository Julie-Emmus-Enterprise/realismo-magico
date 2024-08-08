'use client';

import React, { useState } from 'react';
import StartQuiz from './components/StartQuiz';
import InfoCard from './components/InfoCard';

export default function Home() {
  const [start, setStart] = useState(true);
  const [userName, setUserName] = useState("");

  const startAction = (name: React.SetStateAction<string>) => {
    setUserName(name);
    setStart(false);
  };

  const backAction = () => {
    setStart(true);
  };

  return (
    <div className="relative min-h-screen bg-gray-800 flex items-center justify-center">
      {start && (<StartQuiz onStart={startAction} />)}
      {!start && (<InfoCard name={userName} backAction={backAction} />)}
    </div>
  );
};
