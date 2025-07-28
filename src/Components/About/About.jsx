import React, { useEffect } from 'react'

function About() {
  useEffect(() => {
    document.title = "About"
  }, [])

  return (
    <section>
      <div className="container text-center max-padding">
        <h2 className='text-uppercase fw-bold'>about component</h2>
        <div className="sep my-3 d-flex align-items-center justify-content-center gap-3">
          <span></span>
          <i className='fa-solid fa-star'></i>
          <span></span>
        </div>
        <div className="row">
          <div className="col-md-6 text-start">
            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
          </div>
          <div className="col-md-6 text-start">
            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
          </div>
        </div>
      </div>
    </section>
  )
}

export default About