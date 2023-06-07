import { useState } from "react";
import Input from "@mui/base/Input";
import { qr } from "headless-qr";
import { generateSvg } from "./utils/generateSvg";
import { GridType } from "./types";
import "./App.css";

function App() {
  // const [text, setText] = useState<string | null>(null);
  const [text, setText] = useState<string | null>(
    "https://quoter-airburst.vercel.app"
  );
  // Generate QR map of booleans
  const data = qr(text || "") as GridType;
  // Convert to SVG
  const svg = generateSvg({ data, spots: true });

  return (
    <>
      <h1>QR Code Generator</h1>

      <Input
        aria-label="Enter url or text"
        id="qr-value"
        className="qr-value"
        value={text}
        onChange={(e) => setText(e.currentTarget.value)}
      />

      {text && <div dangerouslySetInnerHTML={{ __html: svg }} />}
    </>
  );
}

export default App;
