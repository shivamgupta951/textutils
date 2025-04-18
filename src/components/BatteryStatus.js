import React, { useEffect, useState } from 'react';

function BatteryStatus() {
  const [batteryLevel, setBatteryLevel] = useState(null);
  const [isCharging, setIsCharging] = useState(null);

  useEffect(() => {
    navigator.getBattery().then((battery) => {
      const updateBatteryStatus = () => {
        setBatteryLevel(Math.round(battery.level * 100));
        setIsCharging(battery.charging);
      };

      // Initial call
      updateBatteryStatus();

      // Add event listeners
      battery.addEventListener('levelchange', updateBatteryStatus);
      battery.addEventListener('chargingchange', updateBatteryStatus);

      // Clean up listeners on unmount
      return () => {
        battery.removeEventListener('levelchange', updateBatteryStatus);
        battery.removeEventListener('chargingchange', updateBatteryStatus);
      };
    });
  }, []);

  return (
    <div className="battery-status p-1 m-2 border rounded shadow-sm" style={{width: '330px'}}>
      <h6>🔋 Battery Status</h6>
      {batteryLevel !== null ? (
        <p>
          Battery Level: <strong style={{marginRight: "20px"}}>{batteryLevel}%</strong>
          Charging Status: <strong>{isCharging ? "Yes" : "No"}</strong>
        </p>
      ) : (
        <p>Fetching battery info...</p>
      )}
    </div>
  );
}

export default BatteryStatus;
