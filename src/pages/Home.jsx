import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import api from "../services/api";
import CourseCard from "../components/CourseCard";

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await api.get("/courses");
      setCourses(response.data.courses);
    } catch (error) {
      console.error("Error fetching courses:", error);
      toast.error("Failed to load courses");
    } finally {
      setLoading(false);
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

  return (
    <div style={{ minHeight: "100vh", paddingBottom: "3rem" }}>
      {/* Hero Section */}
      <div
        className="text-center py-5 mb-5"
        style={{ background: "rgba(0, 0, 0, 0.3)" }}
      >
        <Container>
          <h1 className="display-4 fw-bold mb-3 animate-fade-in-up">
            <span
              style={{
                background: "var(--bf-gradient)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Black Friday Sale! 🎉
            </span>
          </h1>
          <p
            className="lead mb-4"
            style={{ color: "rgba(255, 255, 255, 0.8)" }}
          >
            Get 50% OFF on all premium courses with code{" "}
            <strong className="text-warning">BFSALE25</strong>
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <div className="badge bg-success p-3" style={{ fontSize: "1rem" }}>
              🎓 {courses.filter((c) => c.isFree || c.price === 0).length} Free
              Courses
            </div>
            <div
              className="badge bg-warning text-dark p-3"
              style={{ fontSize: "1rem" }}
            >
              💎 {courses.filter((c) => !c.isFree && c.price > 0).length}{" "}
              Premium Courses
            </div>
          </div>
        </Container>
      </div>

      {/* Courses Grid */}
      <Container>
        <h2 className="mb-4 fw-bold">Available Courses</h2>
        {courses.length === 0 ? (
          <div className="text-center py-5">
            <p style={{ color: "rgba(255, 255, 255, 0.7)" }}>
              No courses available at the moment.
            </p>
          </div>
        ) : (
          <Row xs={1} md={2} lg={3} className="g-4">
            {courses.map((course) => (
              <Col key={course._id}>
                <CourseCard course={course} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Home;
