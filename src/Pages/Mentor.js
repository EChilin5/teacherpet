import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import MentorCard from "../Components/MentorComponents/MentorCard";
import "./Mentor.css";

const Mentor = () => {
  let mentors = [
    { id: 1, name: "Rob", email: "rob@test.com", subject: "Math", img: "" },
    {
      id: 2,
      name: "Robe",
      email: "robe@test.com",
      subject: "English",
      img: "",
    },
    {
      id: 3,
      name: "Rober",
      email: "rober@test.com",
      subject: "Science",
      img: "",
    },
    {
      id: 4,
      name: "Robert",
      email: "robert@test.com",
      subject: "History",
      img: "",
    },
    {
      id: 5,
      name: "Roberto",
      email: "roberto@test.com",
      subject: "Advice",
      img: "",
    },
    {
      id: 6,
      name: "Ro",
      email: "ro@test.com",
      subject: "Unknown Mastery",
      img: "",
    },
    {
      id: 7,
      name: "Pa",
      email: "pa@test.com",
      subject: "History",
      img: "",
    },
    {
      id: 8,
      name: "Pablo",
      email: "pablo@test.com",
      subject: "Advice",
      img: "",
    },
    {
      id: 9,
      name: "Taco",
      email: "taco@test.com",
      subject: "Unknown Mastery",
      img: "",
    },
  ];

  return (
    <div className="mentor-finder">
      <div>
        <h1>Find A Mentor</h1>
        <div className="mentor-searcher-section">
          <div className="mentor-searcher-section-left">
            <h5>Subjects</h5>
            <hr className="dashed-line" />
            <h6>Math</h6>
            <h6>English</h6>
            <h6>Science</h6>
            <h6>Advice</h6>
          </div>
          <div className="mentor-searcher-section-right">
            <div>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control type="text" placeholder="mentor" />
                </Form.Group>
              </Form>
            </div>
            <div className="mentor-columns">
              {mentors.map((mentor) => {
                return (
                  <div className="columns">
                    <div key={mentor.id}>
                      <MentorCard mentors={mentor} />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mentor-button-section">
              <Button>Previous</Button>
              <Button>Next</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentor;
