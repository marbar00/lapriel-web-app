import { Link } from "react-router-dom";
import homeLogo from '../assets/homeLogo.png'
import arch from '../assets/arch.png'
import { useState } from "react";

export function Home() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  return (
    <div className="container mb-5 d-flex flex-column justify-content-center align-items-center text-center">
      
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

      <div className="my-2" style={{ width: "70%"}}>
        <button
          className="btn border border-dark px-3 py-2 apricots-font faqs d-flex justify-content-between align-items-center w-100"
          onClick={() => setOpen1(!open1)}
        >
          <span>Do you have a budget minimum?</span>
          <span>{open1 ? "v" : ">"}</span>
        </button>

        {open1 && (
          <div className="mt-2 p-2 border border-dark rounded bg-light w-100">
            <p className="mb-0 apricots-font">
              I don’t! I can work with any budget to make your day special. I’ve got lots of tips to help you maximize your budget!
            </p>
          </div>
        )}
      </div>

      <div className="my-2" style={{ width: "70%"}}>
        <button
          className="btn border border-dark px-3 py-2 apricots-font faqs d-flex justify-content-between align-items-center w-100"
          onClick={() => setOpen2(!open2)}
        >
          <span>Do you have a budget minimum?</span>
          <span>{open2 ? "v" : ">"}</span>
        </button>

        {open2 && (
          <div className="mt-2 p-2 border border-dark rounded bg-light w-100">
            <p className="mb-0 apricots-font">
              I don’t! I can work with any budget to make your day special. I’ve got lots of tips to help you maximize your budget!
            </p>
          </div>
        )}
      </div>

      <div className="my-2" style={{ width: "70%"}}>
        <button
          className="btn border border-dark px-3 py-2 apricots-font faqs d-flex justify-content-between align-items-center w-100"
          onClick={() => setOpen3(!open3)}
        >
          <span>Do you have a budget minimum?</span>
          <span>{open3 ? "v" : ">"}</span>
        </button>

        {open3 && (
          <div className="mt-2 p-2 border border-dark rounded bg-light w-100">
            <p className="mb-0 apricots-font">
              I don’t! I can work with any budget to make your day special. I’ve got lots of tips to help you maximize your budget!
            </p>
          </div>
        )}
      </div>

    </div>

  )
}
