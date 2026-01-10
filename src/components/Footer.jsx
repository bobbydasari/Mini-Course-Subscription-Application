import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
  FaSnapchatGhost,
  FaRedditAlien,
} from "react-icons/fa";
import { FaXTwitter, FaThreads } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      className="lonyo-footer-section"
      style={{
        backgroundColor: "#142d6f",
        color: "#ffffff",
        padding: "60px 0 30px",
        marginTop: "auto",
      }}
    >
      <div className="container">
        <div className="lonyo-footer-one">
          <div className="row">
            <div className="col-xxl-4 col-xl-12 col-md-6">
              <div className="lonyo-footer-textarea">
                <Link to="/">
                  <h3
                    style={{
                      background: "var(--bf-gradient)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontSize: "2rem",
                      fontWeight: "700",
                      marginBottom: "1rem",
                    }}
                  >
                    🎓 CourseHub
                  </h3>
                </Link>
                <p
                  style={{
                    color: "rgba(255, 255, 255, 0.8)",
                    marginBottom: "1.5rem",
                  }}
                >
                  Your gateway to premium courses with exclusive Black Friday
                  deals!
                </p>

                <div
                  className="lonyo-social-wrap"
                  style={{ marginTop: "20px" }}
                >
                  <h5 style={{ marginBottom: "1rem", fontSize: "1.1rem" }}>
                    Follow Us
                  </h5>
                  <ul
                    style={{
                      display: "flex",
                      gap: "15px",
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      flexWrap: "wrap",
                    }}
                    className="fs-5 fw-bold gap-4"
                  >
                    <li style={{ listStyle: "none" }}>
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "white", transition: "color 0.3s" }}
                        onMouseEnter={(e) => (e.target.style.color = "#ffd23f")}
                        onMouseLeave={(e) => (e.target.style.color = "white")}
                      >
                        <FaFacebookF />
                      </a>
                    </li>
                    <li style={{ listStyle: "none" }}>
                      <a
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "white", transition: "color 0.3s" }}
                        onMouseEnter={(e) => (e.target.style.color = "#ffd23f")}
                        onMouseLeave={(e) => (e.target.style.color = "white")}
                      >
                        <FaXTwitter />
                      </a>
                    </li>
                    <li style={{ listStyle: "none" }}>
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "white", transition: "color 0.3s" }}
                        onMouseEnter={(e) => (e.target.style.color = "#ffd23f")}
                        onMouseLeave={(e) => (e.target.style.color = "white")}
                      >
                        <FaInstagram />
                      </a>
                    </li>
                    <li style={{ listStyle: "none" }}>
                      <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "white", transition: "color 0.3s" }}
                        onMouseEnter={(e) => (e.target.style.color = "#ffd23f")}
                        onMouseLeave={(e) => (e.target.style.color = "white")}
                      >
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li style={{ listStyle: "none" }}>
                      <a
                        href="https://www.telegram.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "white", transition: "color 0.3s" }}
                        onMouseEnter={(e) => (e.target.style.color = "#ffd23f")}
                        onMouseLeave={(e) => (e.target.style.color = "white")}
                      >
                        <FaTelegramPlane />
                      </a>
                    </li>
                    <li style={{ listStyle: "none" }}>
                      <a
                        href="https://threads.net/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "white", transition: "color 0.3s" }}
                        onMouseEnter={(e) => (e.target.style.color = "#ffd23f")}
                        onMouseLeave={(e) => (e.target.style.color = "white")}
                      >
                        <FaThreads />
                      </a>
                    </li>
                    <li style={{ listStyle: "none" }}>
                      <a
                        href="https://www.snapchat.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "white", transition: "color 0.3s" }}
                        onMouseEnter={(e) => (e.target.style.color = "#ffd23f")}
                        onMouseLeave={(e) => (e.target.style.color = "white")}
                      >
                        <FaSnapchatGhost />
                      </a>
                    </li>
                    <li style={{ listStyle: "none" }}>
                      <a
                        href="https://www.reddit.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "white", transition: "color 0.3s" }}
                        onMouseEnter={(e) => (e.target.style.color = "#ffd23f")}
                        onMouseLeave={(e) => (e.target.style.color = "white")}
                      >
                        <FaRedditAlien />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-md-6">
              <div className="lonyo-footer-menu">
                <h4 style={{ marginBottom: "1.5rem", fontSize: "1.3rem" }}>
                  Quick Links
                </h4>
                <div className="lonyo-footer-menu-wrap">
                  <div className="lonyo-footer-menu1">
                    <ul style={{ listStyle: "none", padding: 0 }}>
                      <li style={{ marginBottom: "0.8rem" }}>
                        <Link
                          to="/"
                          style={{
                            color: "rgba(255, 255, 255, 0.8)",
                            textDecoration: "none",
                            transition: "color 0.3s",
                          }}
                          onMouseEnter={(e) =>
                            (e.target.style.color = "#ffd23f")
                          }
                          onMouseLeave={(e) =>
                            (e.target.style.color = "rgba(255, 255, 255, 0.8)")
                          }
                        >
                          Home
                        </Link>
                      </li>
                      <li style={{ marginBottom: "0.8rem" }}>
                        <Link
                          to="/my-courses"
                          style={{
                            color: "rgba(255, 255, 255, 0.8)",
                            textDecoration: "none",
                            transition: "color 0.3s",
                          }}
                          onMouseEnter={(e) =>
                            (e.target.style.color = "#ffd23f")
                          }
                          onMouseLeave={(e) =>
                            (e.target.style.color = "rgba(255, 255, 255, 0.8)")
                          }
                        >
                          My Courses
                        </Link>
                      </li>
                      <li style={{ marginBottom: "0.8rem" }}>
                        <a
                          href="/about-us"
                          style={{
                            color: "rgba(255, 255, 255, 0.8)",
                            textDecoration: "none",
                            transition: "color 0.3s",
                          }}
                          onMouseEnter={(e) =>
                            (e.target.style.color = "#ffd23f")
                          }
                          onMouseLeave={(e) =>
                            (e.target.style.color = "rgba(255, 255, 255, 0.8)")
                          }
                        >
                          About Us
                        </a>
                      </li>
                      <li style={{ marginBottom: "0.8rem" }}>
                        <a
                          href="/contact-us"
                          style={{
                            color: "rgba(255, 255, 255, 0.8)",
                            textDecoration: "none",
                            transition: "color 0.3s",
                          }}
                          onMouseEnter={(e) =>
                            (e.target.style.color = "#ffd23f")
                          }
                          onMouseLeave={(e) =>
                            (e.target.style.color = "rgba(255, 255, 255, 0.8)")
                          }
                        >
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-md-6">
              <div className="lonyo-footer-menu pl-30">
                <h4 style={{ marginBottom: "1.5rem", fontSize: "1.3rem" }}>
                  Privacy Links
                </h4>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  <li style={{ marginBottom: "0.8rem" }}>
                    <a
                      href="https://www.privacypolicyonline.com/"
                      style={{
                        color: "rgba(255, 255, 255, 0.8)",
                        textDecoration: "none",
                        transition: "color 0.3s",
                      }}
                      onMouseEnter={(e) => (e.target.style.color = "#ffd23f")}
                      onMouseLeave={(e) =>
                        (e.target.style.color = "rgba(255, 255, 255, 0.8)")
                      }
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li style={{ marginBottom: "0.8rem" }}>
                    <a
                      href="https://www.termsfeed.com/"
                      style={{
                        color: "rgba(255, 255, 255, 0.8)",
                        textDecoration: "none",
                        transition: "color 0.3s",
                      }}
                      onMouseEnter={(e) => (e.target.style.color = "#ffd23f")}
                      onMouseLeave={(e) =>
                        (e.target.style.color = "rgba(255, 255, 255, 0.8)")
                      }
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li style={{ marginBottom: "0.8rem" }}>
                    <a
                      href="https://www.termsfeed.com/cookie-policy-generator/"
                      style={{
                        color: "rgba(255, 255, 255, 0.8)",
                        textDecoration: "none",
                        transition: "color 0.3s",
                      }}
                      onMouseEnter={(e) => (e.target.style.color = "#ffd23f")}
                      onMouseLeave={(e) =>
                        (e.target.style.color = "rgba(255, 255, 255, 0.8)")
                      }
                    >
                      Refund Policy
                    </a>
                  </li>
                  <li style={{ marginBottom: "0.8rem" }}>
                    <a
                      href="https://www.termsfeed.com/cookie-policy-generator/"
                      style={{
                        color: "rgba(255, 255, 255, 0.8)",
                        textDecoration: "none",
                        transition: "color 0.3s",
                      }}
                      onMouseEnter={(e) => (e.target.style.color = "#ffd23f")}
                      onMouseLeave={(e) =>
                        (e.target.style.color = "rgba(255, 255, 255, 0.8)")
                      }
                    >
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="lonyo-footer-bottom-text">
          <p className="text-center mt-5 fs-6">
            <small style={{ color: "rgba(255, 255, 255, 0.7)" }}>
              © Copyright {new Date().getFullYear()} Black Friday Edition, All
              Rights Reserved. Designed and developed by{" "}
              <strong style={{ color: "#ffd23f" }}>CyberWarfare</strong>
            </small>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
