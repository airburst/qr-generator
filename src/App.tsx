import { useState } from "react";
import { Text } from "@twilio-paste/text";
import { Flex } from "@twilio-paste/flex";
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { Label } from "@twilio-paste/label";
import { Input } from "@twilio-paste/input";
import { Switch } from "@twilio-paste/switch";
import { qr } from "headless-qr";
import { generateSvg } from "./utils/generateSvg";
import { GridType } from "./types";
import "./App.css";

function App() {
  const [text, setText] = useState<string | null>(null);
  const [spots, setSpots] = useState<boolean>(false);

  const toggleSpots = () => setSpots(!spots);

  const downloadSvgFile = () => {
    const file = new Blob([svg], { type: "text/plain" });
    const element = document.createElement("a");

    element.href = URL.createObjectURL(file);
    element.download = "qr-code-" + Date.now() + ".svg";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  // Generate QR map of booleans
  const data = qr(text || "") as GridType;
  // Convert to SVG
  const svg = generateSvg({ data, spots });

  return (
    <>
      <Text
        as="h1"
        fontWeight="fontWeightBold"
        fontSize="fontSize80"
        marginBottom="space80"
      >
        QR Code Generator
      </Text>

      <Box textAlign="left">
        <Label htmlFor="qr_code_text">Url or text to encode</Label>
      </Box>
      <Flex marginBottom="space80" vAlignContent="center">
        <Flex grow vertical>
          <Input
            id="qr_code_text"
            name="qr_code_text"
            type="text"
            value={text || ""}
            onChange={(e) => setText(e.currentTarget.value)}
          />
        </Flex>
        <Flex>
          <Box marginLeft="space40">
            <Switch name="qrCodeStyle" checked={spots} onChange={toggleSpots}>
              Spotty
            </Switch>
          </Box>
        </Flex>
      </Flex>

      <Box marginBottom="space80">
        {text && <div dangerouslySetInnerHTML={{ __html: svg }} />}
      </Box>

      <Button id="download" variant="primary" onClick={downloadSvgFile}>
        Download
      </Button>
    </>
  );
}

export default App;
