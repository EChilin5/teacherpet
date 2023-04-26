import React from "react";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="container">
        <Image
          src="https://images.unsplash.com/photo-1556711905-b3f402e1ff80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="home-page-image"
          className="fluid"
        />
      </div>
      <div className="about">
        <h3>About Us</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="gethelp">
        <h3>Find Help</h3>
        <div className="subject-columns">
          <li className="subjects-columns">Math</li>
          <li className="subjects-columns">English</li>
          <li className="subjects-columns">Science</li>
          <li className="subjects-columns">Advice</li>
          <li className="subjects-columns">History</li>
          <li className="subjects-columns">Etc</li>
        </div>
        <div className="home-button-help">
          <Button>Help is on it's way</Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
