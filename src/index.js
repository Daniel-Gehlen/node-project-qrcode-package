import prompts from "prompts";
import promptSchemaMain from "./prompts-schema/prompt-schema-main.js";
import promptSchemaQRCode from "./prompts-schema/prompt-schema-qrcode.js";
import handlePasswordGeneration from "./services/password/handle.js";
import handleQRCodeGeneration from "./services/qr-code/handle.js";

const main = async () => {
  const response = await prompts(promptSchemaMain);

  switch (response.select) {
    case "1":
      const qrCodeResponse = await prompts(promptSchemaQRCode);
      handleQRCodeGeneration(qrCodeResponse.link);
      break;
    case "2":
      const passwordLength = 12; // Example password length
      handlePasswordGeneration(passwordLength);
      break;
    default:
      console.log("Invalid choice.");
  }
};

main();
