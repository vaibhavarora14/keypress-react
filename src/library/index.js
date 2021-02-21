import { useContext, useEffect, useRef, useCallback } from 'react';
import { Listener } from 'keypress.js'
import { Context, KeyboardShortcutsProvider } from './state';

const listener = new Listener();

function KeybordShortcut({ combo, callback, description }) {
  const { setCombos } = useContext(Context);
  const ref = useRef(null);

  const myCallback = useCallback(
    () => {
      if (ref.current) {
        ref.current();
      }
    },
    [],
  )

  useEffect(() => {
    ref.current = callback;
  }, [callback])

  useEffect(() => {
    const object = listener.simple_combo(combo, myCallback);


    const comboObject = { combo, description, object }
    setCombos((combos) => [
      ...combos,
      comboObject
    ]);

    return () => {
      const isDifferentObject = (combo) => combo.object !== object;
      setCombos((combos) =>
        combos.filter(isDifferentObject)
      );
      listener.unregister_combo(object);
    }
  }, [combo, description, myCallback, setCombos])


  return null;
}

export default KeybordShortcut;

export { KeyboardShortcutsProvider }
