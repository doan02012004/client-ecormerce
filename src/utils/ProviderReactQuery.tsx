'use client'
import { useState } from 'react'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
type ProviderReactQueryProps = {
    children:React.ReactNode
}

const ProviderReactQuery = ({children}: ProviderReactQueryProps) => {
    const [queryClient] = useState(()=> new QueryClient())
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
        {children}
    </QueryClientProvider>
  )
}

export default ProviderReactQuery