import React from "react";

const FooterElement = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-satoshi font-bold text-lg">Company</h1>
      <ol className="flex flex-col gap-5">
        <li>About</li>
        <li>Features</li>
        <li>Works</li>
        <li>Career</li>
      </ol>
    </div>
  );
};

export default FooterElement;
