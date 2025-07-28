import React from 'react'

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row max-padding gy-5">
          <div className="col-md-4 text-center">
            <h4 className='text-uppercase'>Locations</h4>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className="col-md-4 text-center">
            <h4 className='text-uppercase'>AROUND THE WEB</h4>
            <div className="d-flex justify-content-center align-items-center gap-2">
              <i className='icon fa-brands fa-facebook'></i>
              <i className='icon fa-brands fa-twitter'></i>
              <i className='icon fa-brands fa-linkedin-in'></i>
              <i className='icon fa-solid fa-globe'></i>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <h4 className='text-uppercase'>ABOUT FREELANCER</h4>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
        </div>
      </div>
      <div className="copyrights text-center py-4">
        Copyright &copy; Your Website 2024
      </div>
    </footer>
  )
}

export default Footer