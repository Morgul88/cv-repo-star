import React from 'react';
import './TimelineKnobs.css';

const TimelineToggle = ({ version, setVersion }) => {
  const toggleVersion = () => {
    setVersion(prev => (prev === 'KORT VERSION' ? 'LÅNG VERSION' : 'KORT VERSION'));
  };

  return (
    <div className="timeline-container">
      <div className="label-container">
        <span className="label">{version}</span>
        <div className="toggle-container">
          <div
            className={`toggle-switch ${version === 'LÅNG VERSION' ? 'active' : ''}`}
            onClick={toggleVersion}
          >
            <div className={`toggle-knob ${version === 'LÅNG VERSION' ? 'move-right' : ''}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineToggle;
