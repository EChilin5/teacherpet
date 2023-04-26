import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./HelpSection.css";

const HelpSection = () => {
  const [value, setValue] = useState("");

  return (
    <div className="help-section-main">
      <div>Mentor Help Section Assitance/Work Section</div>
      <div>Timer</div>
      <div>
        <Button>Request Live Video</Button>
        <Button>Save Session</Button>
      </div>
      <div className="quill-edditor">
        <h3>Text Editor</h3>
        <div className="quill">
          <ReactQuill theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
    </div>
  );
};

export default HelpSection;
