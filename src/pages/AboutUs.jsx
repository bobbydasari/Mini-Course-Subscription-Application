import React from "react";

const AboutUs = () => {
  return (
    <div className="py-5" style={{ minHeight: "80vh" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="animate-fade-in-up">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&h=800&q=80"
                alt="About Us"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "16px",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                }}
              />
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <div className="animate-fade-in-up">
              <h2 className="fw-bold mb-4" style={{ fontSize: "2.5rem" }}>
                About Our Learning Platform
              </h2>
              <p
                style={{
                  color: "rgba(255, 255, 255, 0.8)",
                  lineHeight: "1.8",
                  marginBottom: "1.5rem",
                }}
              >
                Welcome to our premium course subscription platform! We are
                dedicated to making quality education accessible to everyone,
                especially during our exclusive Black Friday sale.
              </p>
              <p
                style={{
                  color: "rgba(255, 255, 255, 0.8)",
                  lineHeight: "1.8",
                  marginBottom: "1.5rem",
                }}
              >
                Our mission is to empower learners worldwide by providing access
                to top-tier courses across various disciplines. Whether you're
                looking to advance your career, learn a new skill, or pursue a
                passion, we have the perfect course for you.
              </p>
              <p className="fw-bold mb-3" style={{ fontSize: "1.2rem" }}>
                Why Choose Us?
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  color: "rgba(255, 255, 255, 0.8)",
                }}
              >
                <li style={{ marginBottom: "0.8rem", fontSize: "1.05rem" }}>
                  ✓ High-quality courses curated by industry experts
                </li>
                <li style={{ marginBottom: "0.8rem", fontSize: "1.05rem" }}>
                  ✓ Flexible learning at your own pace
                </li>
                <li style={{ marginBottom: "0.8rem", fontSize: "1.05rem" }}>
                  ✓ Affordable pricing with exclusive discounts
                </li>
                <li style={{ marginBottom: "0.8rem", fontSize: "1.05rem" }}>
                  ✓ Lifetime access to enrolled courses
                </li>
                <li style={{ marginBottom: "0.8rem", fontSize: "1.05rem" }}>
                  ✓ Community support and networking opportunities
                </li>
              </ul>
              <p
                style={{
                  color: "rgba(255, 255, 255, 0.8)",
                  lineHeight: "1.8",
                  marginTop: "1.5rem",
                }}
              >
                Join thousands of learners who have transformed their careers
                and lives through our platform. Start your learning journey
                today!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
