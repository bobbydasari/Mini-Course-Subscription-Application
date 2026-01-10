import React, { useState } from "react";
import { Card } from "react-bootstrap";

const FaqSection = () => {
  const faqs = [
    {
      id: 1,
      question: "What is the Black Friday course subscription?",
      answer:
        "Our Black Friday course subscription gives you exclusive access to premium courses at heavily discounted prices. This is a limited-time offer where you can enroll in multiple courses and learn new skills at a fraction of the regular cost.",
    },
    {
      id: 2,
      question: "How do I subscribe to a free course?",
      answer:
        "Simply browse our course catalog, find a course marked as 'FREE', click on 'View Details', and then click the 'Subscribe' button. You'll have instant access to all course materials once subscribed.",
    },
    {
      id: 3,
      question: "Can I use promo codes for paid courses?",
      answer:
        "Yes! During checkout for paid courses, you can enter promo codes like 'BFSALE25' to get additional discounts. Make sure to apply the code before completing your subscription.",
    },
    {
      id: 4,
      question: "Where can I find my enrolled courses?",
      answer:
        "After logging in, navigate to 'My Courses' from the top menu. This page will display all the courses you've subscribed to, along with your progress and access links to course materials.",
    },
    {
      id: 5,
      question: "What happens after the Black Friday sale ends?",
      answer:
        "Any courses you subscribe to during the Black Friday sale will remain accessible to you permanently. However, new subscriptions after the sale will be at regular prices.",
    },
    {
      id: 6,
      question: "Do I need to create an account?",
      answer:
        "Yes, you'll need to create a free account to subscribe to courses. This helps us track your progress, save your courses, and provide you with a personalized learning experience.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-5 my-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="mb-5 pb-4 border-bottom">
              <h2
                className="fw-bold mb-4 text-center"
                style={{ fontSize: "2.5rem" }}
              >
                Frequently Asked Questions
              </h2>
            </div>
            <div className="mt-4">
              {faqs.map((faq, index) => (
                <Card
                  key={faq.id}
                  className="bf-card mb-3 animate-fade-in-up"
                  style={{
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  <Card.Body>
                    <div
                      className="d-flex justify-content-between align-items-center"
                      onClick={() => toggleFaq(index)}
                    >
                      <h5
                        className="mb-0 text-white"
                        style={{ fontSize: "1.1rem", fontWeight: "600" }}
                      >
                        {faq.question}
                      </h5>
                      <div
                        style={{
                          fontSize: "1.5rem",
                          fontWeight: "bold",
                          color: "var(--bf-accent)",
                          minWidth: "30px",
                          textAlign: "center",
                        }}
                      >
                        {openIndex === index ? "−" : "+"}
                      </div>
                    </div>
                    {openIndex === index && (
                      <div
                        className="mt-3 pt-3 border-top"
                        style={{
                          color: "rgba(255, 255, 255, 0.8)",
                          lineHeight: "1.7",
                          animation: "fadeIn 0.3s ease-in",
                        }}
                      >
                        {faq.answer}
                      </div>
                    )}
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
