import React, { useCallback, useState } from 'react';
import KeyboardShortcut from '../library/index';

const BLUE = '#16cbe8';
const RED = '#da6161';

function B() {
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
        combo='shift b'
        callback={toggleBGColor}
        description='changes color of B component'
      />
      <div style={{ backgroundColor: bgColor, flex: 1, margin: '1rem' }}></div>
    </div>
  )
}

export default B
