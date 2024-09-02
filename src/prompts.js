import inquirer from "inquirer";

export const askLanguageQuestions = () => {
  return inquirer.prompt([
    {
      type: "list",
      name: "language",
      message: "Choose your language:",
      choices: [
        { name: "🇬🇧 English", value: "en" },
        { name: "🇷🇺 Русский", value: "ru" },
        { name: "🇵🇱 Polski", value: "pl" },
        { name: "🇩🇪 Deutsch", value: "de" },
      ],
    },
  ]);
};

export const askModuleQuestions = (messages) => {
  return inquirer.prompt([
    {
      type: "list",
      name: "moduleType",
      message: messages.selectModuleType,
      choices: [
        { name: "Page Module", value: "module-page" },
        { name: "Home Block Module", value: "module-block-home" },
        { name: "Profile Block Module", value: "module-block-profile" },
      ],
    },
    {
      type: "list",
      name: "techStack",
      message: messages.selectTechStack,
      choices: [
        { name: "React + Tailwind", value: "react-tailwind" },
        { name: "React + CSS", value: "react-css" },
        { name: "HTML + CSS", value: "html-css" },
      ],
    },
    {
      type: "input",
      name: "moduleName",
      message: messages.enterModuleName,
    },
    {
      type: "input",
      name: "version",
      message: messages.enterVersion,
      default: "1.0.0",
    },
    {
      type: "input",
      name: "author",
      message: messages.enterAuthor,
    },
  ]);
};
