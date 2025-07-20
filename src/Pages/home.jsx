import { Link } from "react-router-dom";
import homeLogo from '../assets/homeLogo.png'
import arch from '../assets/arch.png'

export function Home() {

  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center text-center">
      
      <div className="row w-100 my-4">
        <div className="col">
          <div>
            <img src={arch} alt="Floral Arch"/>
          </div>
        </div>

        <div className="col">
          <div className="row my-3">
            <div className="col">
              <img src={homeLogo} alt="Lapriel Floral Design"/>
            </div>
          </div>
          <div className="row my-5">
            <div className="col cambria-font">
              <h3>ELEGANT & TIMELESS FLORALS,</h3>
              <h3>CRAFTED WITH LOVE.</h3>
            </div>
          </div>
          <div className="row my-5">
            <div className="col">
              <Link className="btn border border-dark px-2 py-2 apricots-font" to="/booking">Meet With Me</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5 mb-2">
        <div className="col cambria-font">
          <h3>FAQs</h3>
        </div>
      </div>
      <div className="row my-2">
        <div className="col">
          <button className="btn border border-dark px-2 py-2 apricots-font faqs">
            <text>Do you have a budget minimum?</text>
          </button>
        </div>
      </div>
      <div className="row my-2">
        <div className="col">
          <button className="btn border border-dark px-2 py-2 apricots-font faqs">
            <text>Do you have a budget minimum?</text>
          </button>
        </div>
      </div>
      <div className="row my-2">
        <div className="col">
          <button className="btn border border-dark px-2 py-2 apricots-font faqs">
            <text>Do you have a budget minimum?</text>
          </button>
        </div>
      </div>

    </div>

  )
}
