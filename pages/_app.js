import '@/styles/globals.css'
import React from 'react'

import MobileNavbar from '@/components/MobileNavbar'


export default function App({ Component, pageProps }) {
  return (
  <>
    {/* <div className='xs:h-screen'> */}
      <Component {...pageProps} />
    {/* </div> */}

    <MobileNavbar/>

  </>
  )
}
