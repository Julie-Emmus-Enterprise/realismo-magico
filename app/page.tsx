'use client';

import React, { useState } from 'react';
import StartQuiz from './components/StartQuiz';

export default function Home() {
  const startAction = () => {
    console.log('Start Action');
  };

  return (
    <div className="relative min-h-screen bg-gray-800 flex items-center justify-center">
      <StartQuiz onStart={startAction} />
    </div>
  );
};
