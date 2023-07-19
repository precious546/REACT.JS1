import React from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Nocomponent from './components/Nocomponent';

const App2 = () => {

    const currentPage = 'contact'

    switch (currentPage) {
        case 'About':
            return <About />
        case 'Contact'
            return <Contact />
    
        default:
            return <NoComponent />;
    }
  return (
    <div>App2</div>
  )
}

export default App2