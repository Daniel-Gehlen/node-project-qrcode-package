import generateQRCode from "./create.js";

const handleQRCodeGeneration = async (link) => {
  try {
    const qrCodeDataURL = await generateQRCode(link);
    console.log("QR Code generated successfully.");
    console.log("QR Code Data URL:", qrCodeDataURL);
  } catch (error) {
    console.error("Error generating QR Code:", error);
  }
};

export default handleQRCodeGeneration;
