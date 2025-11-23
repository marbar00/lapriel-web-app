import arch from '../assets/arch.png'

export function About() {

  return (
    <div className="container mb-5">
      
      <div className="row w-100 my-4">
        <div className="col">
          <img src={arch} alt="Floral Arch" className="img-fluid"/>
        </div>

        <div className="col d-flex flex-column justify-content-center align-items-center text-center">
            <h1>Hi, I'm Abbie.</h1>
            <p className="mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt finibus diam. 
              Nulla ornare mollis risus sed mattis. Nunc at mauris ut velit sollicitudin dignissim ac 
              eget turpis. Duis quis laoreet tellus, eu condimentum mauris. Quisque sed imperdiet 
              lorem. Fusce euismod risus eu tortor dapibus vehicula. Integer rhoncus lorem nec lobortis 
              sagittis. Aenean elementum et lorem in suscipit. Suspendisse at diam eget quam laoreet viverra.
            </p>
        </div>
      </div>

    </div>
  )
}
