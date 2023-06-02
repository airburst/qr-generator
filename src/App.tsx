import { useState } from "react";
import Input from "@mui/base/Input";
import { qr } from "headless-qr";
import { Row } from "./components/Row";
import { generateSvg } from "./utils/generateSvg";
import { GridType } from "./types";
import "./App.css";

const letterP = [
  [false, false, false, false, false],
  [false, true, true, true, false],
  [false, true, false, true, false],
  [false, true, true, true, false],
  [false, true, false, false, false],
  [false, true, false, false, false],
  [false, false, false, false, false],
];

console.log(generateSvg(letterP));

function App() {
  const [text, setText] = useState<string | null>(null);

  const qrData = qr(text || "") as GridType;

  // Write SVG
  const svg = generateSvg(qrData);
  console.log("🚀 ~ file: App.tsx:28 ~ App ~ svg:", svg);

  return (
    <>
      <h1>QR Code Generator</h1>

      <Input
        id="qr-value"
        className="qr-value"
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
