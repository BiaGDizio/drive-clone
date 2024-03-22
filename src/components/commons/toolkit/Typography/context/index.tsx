// Bibliotecas Externas
import React, { createContext, PropsWithChildren, useContext } from 'react'

export interface TypographyContextData {
  loading: boolean
}

const TypographyContext = createContext({} as TypographyContextData)

const TypographyProvider: React.FC<
  PropsWithChildren<TypographyContextData>
> = ({ children, loading }) => {
  return (
    <TypographyContext.Provider value={{ loading }}>
      {children}
    </TypographyContext.Provider>
  )
}

function useTypography(): TypographyContextData {
  const context = useContext(TypographyContext)

  if (!context) {
    throw new Error('useTypography must be within an ContextProvider')
  }

  return context
}

export { TypographyProvider, useTypography }
