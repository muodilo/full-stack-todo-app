import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <div className='footer text-center mt-5'>
      <p>Copyright &copy; Odilo {currentYear }</p>
    </div>
  )
}

export default Footer