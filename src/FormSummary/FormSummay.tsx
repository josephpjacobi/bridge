export const FormSummary = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        border: '2px solid black',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <p>
          Invoice for WINTER STORAGE from NOVEMBER 15th - MAY 15th
          2025
        </p>
        <p style={{ color: 'rgb(255, 0, 0)' }}>
          Storage charge includes hauling, bottom wash, blocking,
          storing, and launching only. All other work will be billed
          based on time and materials
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <p>Rate for season:</p>
        <p>$1440.00</p>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <p>Sales tax:</p>
        <p>$124.20</p>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <p>Total payment due by SEPTEMBER 20, 2024</p>
        <p>$1564.20</p>
      </div>
    </div>
  );
};
