import React, { useState } from "react";
import StoryComposer from "./StroyComposer";

const TextStoryForm = ({ onSubmit }) => {
  const [storyText, setStoryText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(storyText);
    setStoryText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <StoryComposer />
      <textarea
        placeholder="Type your story here..."
        value={storyText}
        onChange={(e) => setStoryText(e.target.value)}
        rows={5}
        cols={30}
        required
      />
      <button type="submit">Post Story</button>
    </form>
  );
};

export default TextStoryForm;
