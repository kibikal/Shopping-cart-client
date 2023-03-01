import React from 'react'

function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <footer>
        <div className="social-icons">
            <i className="fab fa-instagram"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
        </div>
        <p>Copyright KiShop &copy; {currentYear} </p>
    </footer>
  )
}

export default Footer