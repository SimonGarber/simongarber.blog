import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export default () => (
  <nav
    style={{
      display: 'flex',
      maxWidth: '90rem',
      justifyContent: 'center',
      position: 'relative',
      zIndex: '2',
    }}
    role="navigation"
  >
    <div
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        position: 'relative',
        zIndex: '900',
        background: 'transparent',
      }}
    >
      Logo
    </div>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/">Blog</Link>
      </li>
    </ul>
  </nav>
)
