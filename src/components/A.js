import React, { useCallback, useState } from 'react';
import KeyboardShortcut from '../library/index';

const BLUE = '#49c5ea40';
const RED = '#ea494940';

function A() {
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
        combo='shift a'
        callback={toggleBGColor}
        description='changes color of A component'
      />
      <div style={{ backgroundColor: bgColor, flex: 1, margin: '1rem' }}></div>
    </div>
  )
}

export default A
