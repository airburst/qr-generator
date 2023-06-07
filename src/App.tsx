import { useState } from "react";
import Input from "@mui/base/Input";
import { qr } from "headless-qr";
import { Row } from "./components/Row";
import { generateSvg } from "./utils/generateSvg";
import { GridType } from "./types";
import "./App.css";

function App() {
  // const [text, setText] = useState<string | null>(null);
  const [text, setText] = useState<string | null>(
    "https://quoter-airburst.vercel.app"
  );

  const qrData = qr(text || "") as GridType;

  // Write SVG
  const svg = generateSvg(qrData);
  console.log("🚀", svg);

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

      {text && (
        <div>
          {qrData.map((row, i) => (
            <Row key={`row-${i}`} data={row} />
          ))}
        </div>
      )}
    </>
  );
}

export default App;
