import React, { useEffect } from 'react'
import avatar from "../../assets/img/avatar.svg"

function Home() {
  useEffect(() => {
    document.title = "Home"
  }, [])

  return (
    <section className='home'>
      <div className="container text-center">
        <img className='mb-5' src={avatar} alt="avatar" />
        <h2 className='text-uppercase fw-bold'>start Framework</h2>
        <div className="sep my-3 d-flex align-items-center justify-content-center gap-3">
          <span></span>
          <i className='fa-solid fa-star'></i>
          <span></span>
        </div>
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </section>
  )
}

export default Home