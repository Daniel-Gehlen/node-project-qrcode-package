import QRCode from "qrcode";

const generateQRCode = async (link) => {
  try {
    const qrCodeDataURL = await QRCode.toDataURL(link);
    return qrCodeDataURL;
  } catch (error) {
    console.error("Error generating QR Code:", error);
    throw new Error("Failed to generate QR Code");
  }
};

export default generateQRCode;
