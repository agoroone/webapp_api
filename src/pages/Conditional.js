import React, { useState } from "react";

const Conditional = () => {
  const { text, setText } = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useState(false);

  return (
    <div style={{ textAlign: "center", color: "white" }}>
      <p>This is a full stack class</p>
      <button onClick={() => setText(!text)}>show text</button>
      {text && (
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
      )}

      {isLoggedIn ? (
        <p>welcome you are logged in</p>
      ) : (
        <p>welcome you are not logged in please go to login page</p>
      )}
    </div>
  );
};

export default Conditional;
