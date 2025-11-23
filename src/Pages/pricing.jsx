import arch from '../assets/arch.png'

export function Pricing() {

  return (
    <div className="container mb-5">

      {/* Hero */}
      <div className="w-100 position-relative mt-0 pt-0" style={{ height: "250px", overflow: "hidden" }}>
        <img
          src={arch}
          alt="Pricing banner"
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ objectFit: "cover" }}
        />

        <div
          className="position-absolute top-50 start-50 translate-middle bg-white py-4 px-5 shadow-sm"
          style={{ minWidth: "350px" }}
        >
          <h1 className="fw-light" style={{ letterSpacing: "2px" }}>
            Pricing Guide
          </h1>
        </div>
      </div>


      {/* Text Section */}
      <div className="text-center mt-5">
        <h3 className="fw-bold" style={{ letterSpacing: "3px" }}>
          A WORD ABOUT PRICING:
        </h3>

        <p
          className="mt-3 mx-auto"
          style={{
            maxWidth: "900px",
            fontSize: "18px",
            letterSpacing: "1px"
          }}
        >
          Depends on seasonality, availability, etc. Premium versus standard blooms.
          Dependent upon your vision, personalized quote is needed. This is a
          starting point and reference for transparency.
        </p>
      </div>

      {/* Three Images */}
      <div className="row mt-4 g-4 justify-content-center">
        <div className="col-md-4 text-center">
          <img src={arch} className="img-fluid rounded" alt="Bouquet" />
          
          <h4 className="mt-4" style={{ letterSpacing: "3px" }}>
            BRIDAL BOUQUET
          </h4>

          <p className="fst-italic" style={{ fontSize: "18px" }}>
            175+
          </p>

          <p className="mx-auto" style={{ maxWidth: "300px", letterSpacing: "1px" }}>
            Description of the thing that there is a photo of above.
          </p>
        </div>

        <div className="col-md-4 text-center">
          <img src={arch} className="img-fluid rounded" alt="Boutonniere" />

          <h4 className="mt-4" style={{ letterSpacing: "3px" }}>
            BOUTONNIERE
          </h4>

          <p className="fst-italic" style={{ fontSize: "18px" }}>
            15+
          </p>

          <p className="mx-auto" style={{ maxWidth: "300px", letterSpacing: "1px" }}>
            Description of the thing that there is a photo of above.
          </p>
        </div>

        <div className="col-md-4 text-center">
          <img src={arch} className="img-fluid rounded" alt="Table flowers" />

          <h4 className="mt-4" style={{ letterSpacing: "3px" }}>
            BUD VASE
          </h4>

          <p className="fst-italic" style={{ fontSize: "18px" }}>
            5+
          </p>

          <p className="mx-auto" style={{ maxWidth: "300px", letterSpacing: "1px" }}>
            Description of the thing that there is a photo of above.
          </p>
        </div>
      </div>

    </div>
  );
}
