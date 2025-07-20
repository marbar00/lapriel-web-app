import homeLogo from '../assets/homeLogo.png'

export function Home() {

  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center text-center">
      
      <div className="row w-100 my-5">
        <div className="col">
          <div>Row 1</div>
        </div>

        <div className="col">
          <div className="row">
            <div className="col">
              <img src={homeLogo} alt="Lapriel Floral Design"/>
            </div>
          </div>
          <div className="row">
            <div className="col">Row 2</div>
          </div>
          <div className="row">
            <div className="col">Row 3</div>
          </div>
        </div>
      </div>

      <div className="row w-100 mb-2">
        <div className="col">Row 1</div>
      </div>
      <div className="row w-100 mb-2">
        <div className="col">Row 2</div>
      </div>
      <div className="row w-100">
        <div className="col">Row 3</div>
      </div>

    </div>

  )
}
