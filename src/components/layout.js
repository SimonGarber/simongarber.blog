import React from 'react'
import { Link } from 'gatsby'
import base from './base.css'
import Container from './container'
import Navigation from './navigation'

class Template extends React.Component {
  render() {
    const { location } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <header
        style={{
          position: 'fixed',
          zIndex: '900',
          display: 'block',
          width: '100%',
        }}
      >
        <Navigation />
      </header>
    )
  }
}

export default Template
