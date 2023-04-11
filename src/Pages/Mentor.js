import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import MentorCard from "../Components/MentorComponents/MentorCard";

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
  ];

  return (
    <div>
      <div>
        <h1>Find A Mentor</h1>
        <div>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="mentor" />
            </Form.Group>
          </Form>
        </div>
        <div>
          {mentors.map((mentor) => {
            return (
              <div key={mentor.id}>
                <MentorCard mentors={mentor} />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <Button>Previous</Button>
        <Button>Next</Button>
      </div>
    </div>
  );
};

export default Mentor;
