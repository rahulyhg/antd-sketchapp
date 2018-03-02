import React from 'react';
import { Svg } from 'react-sketchapp-compatible';

const { G, Path } = Svg;

export default props => (
  <Svg width="8" height="6.8" viewBox="0 0 8 6.8" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <G fill={props.color} stroke={props.color} transform="translate(-2.000000, -5.000000)">
      <Path
        d="M5.07776062,6 C5.05899461,6 5.04127116,6.00104256 5.02250516,6.00417022 C4.89322824,6.02189367 4.78063222,6.09800024 4.71599376,6.21059627 L3.0552024,9.11619924 C2.94052126,9.31636995 3.0103725,9.57075356 3.21054321,9.6854347 C3.41071392,9.80011583 3.66509753,9.73026459 3.77977867,9.53009388 L5.16846297,7.0988538 L10.2874119,12.233441 C10.4500506,12.3960797 10.7138172,12.3971223 10.8774984,12.2344836 C11.0401371,12.0718449 11.0411797,11.8080783 10.878541,11.644397 L5.39261246,6.14178759 L5.3728039,6.12197903 C5.29356966,6.04274479 5.18722897,6 5.07776062,6 L5.07776062,6 Z"
        transform="translate(7.000000, 9.177971) scale(1, -1) translate(-7.000000, -9.177971) "
      />
    </G>
  </Svg>
);
