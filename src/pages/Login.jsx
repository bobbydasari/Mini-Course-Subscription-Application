import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login, signup } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Validation
    if (!formData.email || !formData.password) {
      setError("Please fill in all required fields");
      setLoading(false);
      return;
    }

    if (!isLogin && !formData.name) {
      setError("Please provide your name");
      setLoading(false);
      return;
    }

    try {
      let result;
      if (isLogin) {
        result = await login(formData.email, formData.password);
      } else {
        result = await signup(formData.name, formData.email, formData.password);
      }

      if (result.success) {
        toast.success(
          isLogin ? "Login successful!" : "Account created successfully!"
        );
        navigate("/");
      } else {
        setError(result.message);
        toast.error(result.message);
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "2rem",
        paddingBottom: "2rem",
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={5}>
            <Card className="bf-card text-light animate-fade-in-up">
              <Card.Body className="p-5">
                <div className="text-center mb-4">
                  <h2 className="fw-bold mb-2">
                    {isLogin ? "Welcome Back!" : "Create Account"}
                  </h2>
                  <p style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                    {isLogin
                      ? "Login to access your courses"
                      : "Sign up to start learning"}
                  </p>
                </div>

                {error && <Alert variant="danger">{error}</Alert>}

                <Form onSubmit={handleSubmit}>
                  {!isLogin && (
                    <Form.Group className="mb-3">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        style={{
                          background: "rgba(255, 255, 255, 0.1)",
                          border: "1px solid rgba(255, 255, 255, 0.2)",
                          color: "#fff",
                        }}
                      />
                    </Form.Group>
                  )}

                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      style={{
                        background: "rgba(255, 255, 255, 0.1)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        color: "#fff",
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleChange}
                      style={{
                        background: "rgba(255, 255, 255, 0.1)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        color: "#fff",
                      }}
                    />
                  </Form.Group>

                  <Button
                    type="submit"
                    className="bf-btn-primary w-100 mb-3"
                    disabled={loading}
                  >
                    {loading ? "Please wait..." : isLogin ? "Login" : "Sign Up"}
                  </Button>
                </Form>

                <div className="text-center">
                  <p style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                    {isLogin
                      ? "Don't have an account? "
                      : "Already have an account? "}
                    <span
                      onClick={() => {
                        setIsLogin(!isLogin);
                        setError("");
                      }}
                      style={{
                        color: "var(--bf-accent)",
                        cursor: "pointer",
                        fontWeight: "600",
                      }}
                    >
                      {isLogin ? "Sign Up" : "Login"}
                    </span>
                  </p>
                </div>

                <div
                  className="mt-4 p-3"
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    borderRadius: "8px",
                  }}
                >
                  <p className="mb-2 fw-bold" style={{ fontSize: "0.9rem" }}>
                    Test Credentials:
                  </p>
                  <p
                    className="mb-1"
                    style={{
                      fontSize: "0.85rem",
                      color: "rgba(255, 255, 255, 0.7)",
                    }}
                  >
                    📧 john@example.com | 🔑 password123
                  </p>
                  <p
                    className="mb-0"
                    style={{
                      fontSize: "0.85rem",
                      color: "rgba(255, 255, 255, 0.7)",
                    }}
                  >
                    📧 jane@example.com | 🔑 password123
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
