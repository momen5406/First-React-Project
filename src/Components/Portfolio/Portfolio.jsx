import React, { useEffect, useState } from 'react'
import img1 from "../../assets/img/port1.png"
import img2 from "../../assets/img/port2.png"
import img3 from "../../assets/img/port3.png"

function Portfolio() {
  useEffect(() => {
    document.title = "Portfolio"
  }, [])

  const imgs = [img1, img2, img3, img1, img2, img3];

  let [selectedImg, setSelectedImg] = useState(null);

  return (<>
    <div className="portfolio">
      <div className="container py-4">
        <h2 className='text-uppercase fw-bold text-center'>Portfolio Component</h2>
        <div className="sep my-3 d-flex align-items-center justify-content-center gap-3">
          <span></span>
          <i className='fa-solid fa-star'></i>
          <span></span>
        </div>
        <div className="row g-5">
          {
            imgs.map((img) =>
              <div className="col-md-4">
                <div  onClick={() => setSelectedImg(img)} className="img inner rounded overflow-hidden position-relative">
                  <img className='w-100' src={img} alt="img" />
                  <div className="overlay position-absolute top-0 start-0 w-100 h-100 align-content-center text-center">
                    <i className='fa-solid fa-plus fa-5x'></i>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>

    {selectedImg ?
      <div onClick={() => setSelectedImg(null)} className='selectedImg position-fixed start-0 top-0 w-100 h-100 z-3 align-content-center text-center'>
        <img src={selectedImg} alt="img" />
      </div> : null
    }
  </>
  )
}

export default Portfolio