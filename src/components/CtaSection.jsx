import React from "react";

const CtaSection = () => {
  return (
    <section
      className="position-relative overflow-hidden py-5"
      style={{ background: "rgba(255, 255, 255, 0.03)" }}
    >
      <div className="container">
        <div className="text-center mx-auto" style={{ maxWidth: "750px" }}>
          <h2 className="fw-bold mb-4" style={{ fontSize: "2.5rem" }}>
            Unlock More Courses, Achieve More Goals
          </h2>
          <p
            style={{
              fontSize: "1.3rem",
              lineHeight: "1.8",
              color: "rgba(255, 255, 255, 0.8)",
            }}
            className="my-4"
          >
            Expand your knowledge by exploring our complete course catalog. The
            more you learn, the more you{" "}
            <span className="fw-bold text-warning">GROW</span>. Don't miss out
            on exclusive{" "}
            <span className="fw-bold text-warning">Black Friday Deals</span>!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
