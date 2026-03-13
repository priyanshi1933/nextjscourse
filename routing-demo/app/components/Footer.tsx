import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer style={{
          backgroundColor:'ghostwhite',
          padding:'1rem'
        }}>
          <p>&copy; {new Date().getFullYear()} My Next.js App. All rights reserved.</p>
        </footer>
    </div>
  )
}

export default Footer