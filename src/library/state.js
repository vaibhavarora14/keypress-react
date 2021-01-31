import { createContext, useState, useContext } from 'react'

export const Context = createContext({
  combos: [],
  setCombos: () => { }
});

export const KeyboardShortcutsProvider = ({ children }) => {
  const [combos, setCombos] = useState([])
  return (
    <Context.Provider value={{ combos, setCombos }}>
      {children}
    </Context.Provider>
  )
}

export const withCombos = (Component) => ({ ...props }) => {
  const { combos } = useContext(Context)
  return <Component combos={combos} {...props} />
}
