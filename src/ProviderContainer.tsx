import React, { ReactNode } from 'react'
import QueryProvider from './lib/ReactQueryProvider'
import { BrowserRouter } from 'react-router-dom'
import ToastProvider from './lib/ToastProvider'
import ReduxT from './lib/ReduxT'
import { useChangeLanguage } from './Hooks/useChangeLanguage'

type ProviderContainerProps =  {
    children:ReactNode

}
function ProviderContainer({children}:ProviderContainerProps) {
    const { currentlanguage, changelanguage } = useChangeLanguage();

  return (
    <BrowserRouter basename='/'>
        <ReduxT>
     <QueryProvider>
        <ToastProvider>
             {children}
        </ToastProvider>
    </QueryProvider>
    </ReduxT>
</BrowserRouter>
    )
}

export default ProviderContainer