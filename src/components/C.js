import React, { useCallback, useState } from 'react';
import KeyboardShortcut from '../library/index';

const BLUE = '#0c8ca0';
const RED = '#660000';

function C() {
  const [bgColor, setBgColor] = useState(BLUE);

  const toggleBGColor = useCallback(
    () => {
      setBgColor(current => current === BLUE ? RED : BLUE)
    },
    [],
  )
  return (
    <div style={{ display: 'flex' }}>
      <KeyboardShortcut
        combo='shift c'
        callback={toggleBGColor}
        description='changes color of C component'
      />
      <div style={{ backgroundColor: bgColor, flex: 1, margin: '1rem' }}></div>
    </div>
  )
}

export default C