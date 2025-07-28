import React, { useEffect } from 'react'

function Contact() {
  useEffect(() => {
    document.title = "Contact"
  }, [])

  return (
    <div className="contact">
      <div className="container py-4">
        <h2 className='text-uppercase fw-bold text-center'>Contact Section</h2>
        <div className="sep my-3 d-flex align-items-center justify-content-center gap-3">
          <span></span>
          <i className='fa-solid fa-star'></i>
          <span></span>
        </div>

        <form className='mx-auto max-padding'>
          <div className="form-floating mb-4">
            <input type="text" className="form-control" id="name" placeholder="Name" />
            <label for="name">Name</label>
          </div>
          <div className="form-floating mb-4">
            <input type="number" className="form-control" id="age" placeholder="Age" />
            <label for="age">Age</label>
          </div>
          <div className="form-floating mb-4">
            <input type="email" className="form-control" id="email" placeholder="Email" />
            <label for="email">Email</label>
          </div>
          <div className="form-floating mb-4">
            <input type="password" className="form-control" id="password" placeholder="Password" />
            <label for="password">Password</label>
          </div>
          <button className='btn'>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact