import { useContext, useEffect } from 'react';
import { Listener } from 'keypress.js'
import { Context, KeyboardShortcutsProvider } from './state';

const listener = new Listener();

function KeybordShortcut({ combo, callback, description }) {
  const { setCombos } = useContext(Context);

  useEffect(() => {
    const object = listener.simple_combo(combo, callback);

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
  }, [callback, combo, description, setCombos])


  return null;
}

export default KeybordShortcut;

export { KeyboardShortcutsProvider }
