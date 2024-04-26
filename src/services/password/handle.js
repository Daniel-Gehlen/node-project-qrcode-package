import generateRandomPassword from "./create.js";

const handlePasswordGeneration = (length) => {
  const password = generateRandomPassword(length);
  console.log(`Generated Password: ${password}`);
};

export default handlePasswordGeneration;
