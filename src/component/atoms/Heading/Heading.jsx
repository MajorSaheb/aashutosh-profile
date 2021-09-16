import React from "react";

const Heading = ({ content, Type = "h1" }) => {
  return <Type>{content}</Type>;
};

export default Heading;
