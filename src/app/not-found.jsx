import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <h2>Sorry, the page you're looking for doesn't exist!</h2>
      <Link href="/">Go back to home page</Link>
    </div>
  );
};

export default NotFound;
