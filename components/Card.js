import React from "react";

export default function Card({ content }) {
  return (
    <div className="px-4 pt-6 bg-white rounded-lg shadow-card sm:px-6 w-fit mx-auto my-16 ">
      <div id="container">{content}</div>
    </div>
  );
}
