import React from 'react'
import Prop from './components/Prop'
import Prop2 from './components/Prop2'

const PropApp = () => {

  const title = 'prop title';
  return (
    <div>
        <prop title={title} />
        <prop2 title={title} />
    </div>
  )
}

export default PropApp;