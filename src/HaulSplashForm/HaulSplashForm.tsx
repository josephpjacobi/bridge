import React from 'react';

export const HaulAndSplashDateForm = () => {
  const [haulDate, setHaulDate] = React.useState('');
  const [splashDate, setSplashDate] = React.useState('');

  return (
    <div>
      <label htmlFor="haulDate" style={{ color: 'red' }}>
        Requested Fall Haul Date:
        <input
          type="date"
          name="haulDate"
          id="haulDate"
          value={haulDate}
          onChange={(e) => setHaulDate(e.target.value)}
        />
      </label>
      <label htmlFor="splashDate" style={{ color: 'red' }}>
        Requested Spring Splash Date:
        <input
          type="date"
          name="splashDate"
          id="splashDate"
          value={splashDate}
          onChange={(e) => setSplashDate(e.target.value)}
        />
      </label>
    </div>
  );
};
