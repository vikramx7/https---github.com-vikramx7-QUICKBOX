import React from 'react';

const size = '2.5em';
const thickness = '0.5em';
const lat = `calc(${size} - ${thickness}) / 2`;
const offset = `calc(${lat} - ${thickness})`;

const colors = [
  'hsla(337, 84, 48, 0.75)',
  'hsla(160, 50, 48, 0.75)',
  'hsla(190, 61, 65, 0.75)',
  'hsla(41, 82, 52, 0.75)',
];

const loaderStyle = {
  position: 'absolute',
  top: `calc(50% - ${size} / 2)`,
  left: `calc(50% - ${size} / 2)`,
  width: size,
  height: size,
  transform: 'rotate(165deg)',
};

const beforeAfterStyle = {
  content: "''",
  position: 'absolute',
  top: '50%',
  left: '50%',
  display: 'block',
  width: thickness,
  height: thickness,
  borderRadius: '50%',
  transform: 'translate(-50%, -50%)',
};

const keyframesBefore = `
  @keyframes before {
    0% {
      width: ${thickness};
      box-shadow:
        ${lat} -${offset} ${colors[0]},
        -${lat} ${offset} ${colors[2]};
    }
    35% {
      width: ${size};
      box-shadow:
        0 -${offset} ${colors[0]},
        0 ${offset} ${colors[2]};
    }
    70% {
      width: ${thickness};
      box-shadow:
        -${lat} -${offset} ${colors[0]},
        ${lat} ${offset} ${colors[2]};
    }
    100% {
      box-shadow:
        ${lat} -${offset} ${colors[0]},
        -${lat} ${offset} ${colors[2]};
    }
  }
`;

const keyframesAfter = `
  @keyframes after {
    0% {
      height: ${thickness};
      box-shadow:
        ${offset} ${lat} ${colors[1]},
        -${offset} -${lat} ${colors[3]};
    }
    35% {
      height: ${size};
      box-shadow:
        ${offset} 0 ${colors[1]},
        -${offset} 0 ${colors[3]};
    }
    70% {
      height: ${thickness};
      box-shadow:
        ${offset} -${lat} ${colors[1]},
        -${offset} ${lat} ${colors[3]};
    }
    100% {
      box-shadow:
        ${offset} ${lat} ${colors[1]},
        -${offset} -${lat} ${colors[3]};
    }
  }
`;

const Loader = () => (
  <div style={loaderStyle}>
    <style>
      {keyframesBefore}
      {keyframesAfter}
    </style>
    <div style={{ ...beforeAfterStyle, animation: 'before 2s infinite' }} />
    <div style={{ ...beforeAfterStyle, animation: 'after 2s infinite' }} />
  </div>
);

export default Loader;
