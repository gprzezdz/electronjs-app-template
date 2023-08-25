import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
function MyButton() {
  return (
    <button className="bg-slate-300 p-2 rounded-md">
      I'm a button
    </button>
  );
}
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
   <MyButton/>
  </StrictMode>
);
