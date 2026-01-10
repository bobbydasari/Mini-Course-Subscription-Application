import { Link, useNavigate } from "react-router-dom";
import { Navbar as BSNavbar, Container, Nav, Button } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <BSNavbar
      bg="dark"
      variant="dark"
      expand="lg"
      className="mb-4"
      style={{ background: "rgba(0, 0, 0, 0.3)", backdropFilter: "blur(10px)" }}
    >
      <Container>
        <BSNavbar.Brand as={Link} to="/" className="fw-bold">
          <span
            style={{
              background: "var(--bf-gradient)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            🎓 CourseHub
          </span>
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {isAuthenticated ? (
              <>
                <Nav.Link as={Link} to="/" className="text-light mx-2">
                  Home
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/my-courses"
                  className="text-light mx-2"
                >
                  My Courses
                </Nav.Link>
                <span className="text-light mx-3">
                  Welcome, <strong>{user?.name}</strong>
                </span>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={handleLogout}
                  className="ms-2"
                >
                  Logout
                </Button>
              </>
            ) : (
              <Nav.Link as={Link} to="/login" className="text-light">
                Login
              </Nav.Link>
            )}
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;
