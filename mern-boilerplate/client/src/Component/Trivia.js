import React from "react";
import styled from "react-emotion";

// Styles
const Trivia = styled("div")({
  width: "90%"
});

const Trivia = () => {
  return (
    <Trivia>
      <Create />
      <div class="container row">
        <Categories>
          <div class="row">
            <CreateCategory />
            <CreateQuestion />
          </div>
          <div class="row">
            <DisplayCategories />
            <DisplayQuestions />
          </div>
        </Categories>
      </div>
    </Trivia>
  );
};

export default Trivia;
