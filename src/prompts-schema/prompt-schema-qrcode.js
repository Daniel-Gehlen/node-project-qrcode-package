import chalk from "chalk";

const promptSchemaQRCode = [
  {
    name: "link",
    description: chalk.yellow("Enter the link to generate the QR CODE"),
    type: "input",
    pattern: /^(ftp|http|https):\/\/[^ "]+$/,
    message: chalk.red("Please enter a valid URL"),
    required: true,
  },
];

export default promptSchemaQRCode;
