import permittedCharacters from "./utils/permitted-characters.js";

const generateRandomPassword = (length) => {
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * permittedCharacters.length);
    password += permittedCharacters[randomIndex];
  }
  return password;
};

export default generateRandomPassword;
