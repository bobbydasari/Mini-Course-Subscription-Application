import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const CourseCard = ({ course }) => {
  const displayPrice =
    course.isFree || course.price === 0 ? "FREE" : `₹${course.price}`;
  const isFree = course.isFree || course.price === 0;

  return (
    <Card className="bf-card h-100 text-light animate-fade-in-up">
      <Card.Img
        variant="top"
        src={course.image}
        alt={course.title}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <Card.Title className="mb-0">{course.title}</Card.Title>
          <span
            className={`badge ${
              isFree ? "bg-success" : "bg-warning text-dark"
            } ms-2`}
            style={{ fontSize: "0.9rem" }}
          >
            {displayPrice}
          </span>
        </div>
        <Card.Text
          className="flex-grow-1"
          style={{ color: "rgba(255, 255, 255, 0.7)" }}
        >
          {course.description.length > 100
            ? `${course.description.substring(0, 100)}...`
            : course.description}
        </Card.Text>
        <Link
          to={`/courses/${course._id}`}
          className="btn bf-btn-primary mt-auto w-100"
        >
          View Details
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CourseCard;
