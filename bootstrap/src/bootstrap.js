import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

function bootstrap() {
  createRoot(document.getElementById("root")).render(<App />);
}

bootstrap();
