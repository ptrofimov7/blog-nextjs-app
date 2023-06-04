'use client'

import React, { useCallback, useMemo } from "react"

export const ThemeContext = React.createContext()

export const ThemeProvider = ({children}) => {

   const [mode, setMode] = React.useState('light')

   const toggle = useCallback(() => setMode((prev) => (prev === 'light' ? 'dark' : 'light')), [])

   const value = useMemo(() => ({ mode, toggle }), [mode, toggle])

   return <ThemeContext.Provider value={value}>
      <div className={`theme ${mode}`}>
      {children}
      </div>
   </ThemeContext.Provider>
}