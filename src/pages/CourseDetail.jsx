import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Badge,
  Alert,
} from "react-bootstrap";
import { toast } from "react-toastify";
import api from "../services/api";

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [discountedPrice, setDiscountedPrice] = useState(null);
  const [subscribing, setSubscribing] = useState(false);

  useEffect(() => {
    fetchCourse();
  }, [id]);

  const fetchCourse = async () => {
    try {
      const response = await api.get(`/courses/${id}`);
      setCourse(response.data.course);
    } catch (error) {
      console.error("Error fetching course:", error);
      toast.error("Failed to load course details");
    } finally {
      setLoading(false);
    }
  };

  const handleApplyPromo = async () => {
    if (!promoCode.trim()) {
      toast.error("Please enter a promo code");
      return;
    }

    try {
      const response = await api.post("/subscribe/validate-promo", {
        promoCode: promoCode.trim(),
        courseId: id,
      });

      if (response.data.success) {
        setPromoApplied(true);
        setDiscountedPrice(response.data.discountedPrice);
        toast.success(
          `Promo code applied! ${response.data.discount}% discount`
        );
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Invalid promo code");
      setPromoApplied(false);
      setDiscountedPrice(null);
    }
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleSubscribe = async () => {
    setSubscribing(true);

    try {
      const isFree = course.isFree || course.price === 0;

      if (isFree) {
        // Free course - direct subscription
        const response = await api.post("/subscribe", {
          courseId: id,
        });

        if (response.data.success) {
          toast.success("Successfully subscribed to the course!");
          navigate("/my-courses");
        }
      } else {
        // Paid course - Razorpay payment
        if (!promoApplied) {
          toast.error("Please apply a promo code first");
          setSubscribing(false);
          return;
        }

        // Load Razorpay script
        const scriptLoaded = await loadRazorpayScript();
        if (!scriptLoaded) {
          toast.error("Failed to load payment gateway");
          setSubscribing(false);
          return;
        }

        // Create order
        const orderResponse = await api.post("/payment/create-order", {
          amount: discountedPrice,
          courseId: id,
        });

        const { order } = orderResponse.data;

        // Razorpay options
        const options = {
          key: "rzp_test_Rpo0EOJg7fykdF",
          amount: order.amount,
          currency: order.currency,
          name: "CourseHub",
          description: course.title,
          order_id: order.id,
          handler: async function (response) {
            try {
              // Verify payment
              const verifyResponse = await api.post("/payment/verify-payment", {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              });

              if (verifyResponse.data.success) {
                // Create subscription
                const subscribeResponse = await api.post("/subscribe", {
                  courseId: id,
                  promoCode: promoCode.trim(),
                  paymentId: response.razorpay_payment_id,
                });

                if (subscribeResponse.data.success) {
                  toast.success("Payment successful! Course subscribed.");
                  navigate("/my-courses");
                }
              }
            } catch (error) {
              toast.error("Payment verification failed");
              console.error("Payment verification error:", error);
            }
          },
          prefill: {
            name: "",
            email: "",
            contact: "",
          },
          theme: {
            color: "#667eea",
          },
        };

        const razorpay = new window.Razorpay(options);
        razorpay.open();
      }
    } catch (error) {
      console.error("Subscribe error:", error);
      toast.error(error.response?.data?.message || "Failed to subscribe");
    } finally {
      setSubscribing(false);
    }
  };

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "80vh" }}
      >
        <div className="spinner-border text-light" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <Container className="py-5">
        <Alert variant="danger">Course not found</Alert>
      </Container>
    );
  }

  const isFree = course.isFree || course.price === 0;
  const displayPrice = isFree ? "FREE" : `₹${course.price}`;

  return (
    <Container className="py-5">
      <Row>
        <Col lg={8}>
          <Card className="bf-card text-light mb-4">
            <Card.Img
              variant="top"
              src={course.image}
              alt={course.title}
              style={{ height: "400px", objectFit: "cover" }}
            />
            <Card.Body>
              <div className="d-flex justify-content-between align-items-start mb-3">
                <h2 className="fw-bold mb-0">{course.title}</h2>
                <Badge bg={isFree ? "success" : "warning"} className="fs-5">
                  {displayPrice}
                </Badge>
              </div>
              <p
                style={{
                  color: "rgba(255, 255, 255, 0.8)",
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                }}
              >
                {course.description}
              </p>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4}>
          <Card
            className="bf-card text-light sticky-top"
            style={{ top: "20px" }}
          >
            <Card.Body>
              <h4 className="mb-4">Subscribe to Course</h4>

              {isFree ? (
                <>
                  <div className="alert alert-success mb-3">
                    This is a FREE course! Subscribe now to start learning.
                  </div>
                  <Button
                    className="bf-btn-primary w-100"
                    onClick={handleSubscribe}
                    disabled={subscribing}
                  >
                    {subscribing ? "Subscribing..." : "Subscribe Now"}
                  </Button>
                </>
              ) : (
                <>
                  <div className="mb-3">
                    <p
                      className="mb-2"
                      style={{ color: "rgba(255, 255, 255, 0.7)" }}
                    >
                      Original Price:{" "}
                      <span className="text-decoration-line-through">
                        ₹{course.price}
                      </span>
                    </p>
                    {promoApplied && (
                      <p className="mb-2 text-success fw-bold">
                        Discounted Price: ₹{discountedPrice}
                      </p>
                    )}
                  </div>

                  <Form.Group className="mb-3">
                    <Form.Label>Promo Code</Form.Label>
                    <div className="d-flex gap-2">
                      <Form.Control
                        type="text"
                        placeholder="Enter promo code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        disabled={promoApplied}
                        style={{
                          background: "rgba(255, 255, 255, 0.1)",
                          border: "1px solid rgba(255, 255, 255, 0.2)",
                          color: "#fff",
                        }}
                      />
                      <Button
                        variant="outline-warning"
                        onClick={handleApplyPromo}
                        disabled={promoApplied}
                      >
                        {promoApplied ? "✓ Applied" : "Apply"}
                      </Button>
                    </div>
                    <Form.Text style={{ color: "rgba(255, 255, 255, 0.6)" }}>
                      Use code{" "}
                      <strong className="text-warning">BFSALE25</strong> for 50%
                      off
                    </Form.Text>
                  </Form.Group>

                  <Button
                    className="bf-btn-primary w-100"
                    onClick={handleSubscribe}
                    disabled={!promoApplied || subscribing}
                  >
                    {subscribing ? "Processing..." : "Subscribe"}
                  </Button>

                  {!promoApplied && (
                    <p
                      className="mt-2 mb-0 text-center"
                      style={{
                        fontSize: "0.85rem",
                        color: "rgba(255, 255, 255, 0.6)",
                      }}
                    >
                      Apply promo code to enable subscription
                    </p>
                  )}
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CourseDetail;
