import React from "react";
import { Home, SearchX } from "lucide-react";

function NotFound() {
  return (
    <div className="container text-center py-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-md-6 mb-4 flex justify-center">
          <img
            src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7888.jpg"
            alt="Not Found"
            className="img-fluid shadow-sm"
            style={{
              maxWidth: "70%",
              maxHeight: "350px",
              borderRadius: "12px",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Text Section */}
        <div className="col-md-6">
          {/* Title with icon */}
          <h1 className="fw-bold text-primary d-flex justify-content-center align-items-center gap-2 animate__animated animate__fadeInDown">
            Page Not Found!
          </h1>

          <h4 className="text-muted mb-4 animate__animated animate__fadeInUp">
            Oops! We couldn't find the page you were looking for.
          </h4>

          {/* Button with home icon */}
          <a
            href="/"
            className="btn btn-primary px-4 py-2 shadow-sm d-inline-flex align-items-center gap-2"
            style={{ borderRadius: "8px" }}
          >
            Go Home
          </a>

          <p className="text-muted mt-3" style={{ fontSize: "0.9rem" }}>
            Or use the navigation menu to find what you need.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
