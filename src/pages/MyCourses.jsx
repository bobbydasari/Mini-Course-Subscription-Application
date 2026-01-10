import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { toast } from "react-toastify";
import api from "../services/api";

const MyCourses = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMyCourses();
  }, []);

  const fetchMyCourses = async () => {
    try {
      const response = await api.get("/subscribe/my-courses");
      setSubscriptions(response.data.subscriptions);
    } catch (error) {
      console.error("Error fetching subscriptions:", error);
      toast.error("Failed to load your courses");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
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

  return (
    <Container className="py-5">
      <div className="mb-5">
        <h1 className="fw-bold mb-2">My Courses</h1>
        <p style={{ color: "rgba(255, 255, 255, 0.7)" }}>
          You have subscribed to {subscriptions.length} course
          {subscriptions.length !== 1 ? "s" : ""}
        </p>
      </div>

      {subscriptions.length === 0 ? (
        <Card className="bf-card text-light text-center py-5">
          <Card.Body>
            <h3 className="mb-3">No courses yet</h3>
            <p style={{ color: "rgba(255, 255, 255, 0.7)" }}>
              You haven't subscribed to any courses. Browse our catalog to get
              started!
            </p>
            <a href="/" className="btn bf-btn-primary mt-3">
              Browse Courses
            </a>
          </Card.Body>
        </Card>
      ) : (
        <Row xs={1} md={2} lg={3} className="g-4">
          {subscriptions.map((subscription) => (
            <Col key={subscription._id}>
              <Card className="bf-card text-light h-100 animate-fade-in-up">
                <Card.Img
                  variant="top"
                  src={subscription.courseId?.image}
                  alt={subscription.courseId?.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="mb-3">
                    {subscription.courseId?.title}
                  </Card.Title>

                  <div className="mt-auto">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span
                        style={{
                          color: "rgba(255, 255, 255, 0.7)",
                          fontSize: "0.9rem",
                        }}
                      >
                        Price Paid:
                      </span>
                      <Badge
                        bg={
                          subscription.pricePaid === 0 ? "success" : "warning"
                        }
                      >
                        {subscription.pricePaid === 0
                          ? "FREE"
                          : `₹${subscription.pricePaid}`}
                      </Badge>
                    </div>

                    {subscription.promoCode && (
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span
                          style={{
                            color: "rgba(255, 255, 255, 0.7)",
                            fontSize: "0.9rem",
                          }}
                        >
                          Promo Used:
                        </span>
                        <Badge bg="info">{subscription.promoCode}</Badge>
                      </div>
                    )}

                    <div className="d-flex justify-content-between align-items-center">
                      <span
                        style={{
                          color: "rgba(255, 255, 255, 0.7)",
                          fontSize: "0.9rem",
                        }}
                      >
                        Subscribed:
                      </span>
                      <span style={{ fontSize: "0.9rem" }}>
                        {formatDate(subscription.subscribedAt)}
                      </span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default MyCourses;
