import React from 'react';
import { withCombos } from "../library/state";

function Shortcuts({ combos }) {
  return (
    <div >
      <div style={{ padding: '1rem' }}>
        {combos.map(({ combo, description }) => (
          <div key={combo}>
            <b style={{textTransform: 'capitalize'}}>"{combo}"</b> : "{description}"
          </div>
        ))}
      </div>
    </div >
  )
}

export default withCombos(Shortcuts)
