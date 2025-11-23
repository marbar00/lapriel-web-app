export function Booking() {
  
  return (
    <div className="container my-5">

      <h1 className="text-center mb-4" style={{ letterSpacing: "2px" }}>
        Book Your Consultation
      </h1>

      <div className="d-flex justify-content-center">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSekOroB0D0j10jf_JDwdLtKL8oh0hXSnQS4BnHcqIhWgJf1PQ/viewform?embedded=true"
          width="100%"
          height="1200"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          style={{
            maxWidth: "900px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            backgroundColor: "white"
          }}
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}
