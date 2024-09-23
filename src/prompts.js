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
        { name: messages.moduleTypes.page, value: "module-page" },
        { name: messages.moduleTypes.home, value: "module-block-home" },
        { name: messages.moduleTypes.profile, value: "module-block-profile" },
      ],
    },
    {
      type: "input",
      name: "moduleName",
      message: messages.enterModuleName,
      default: messages.placeholders.moduleName,
      filter: (input) =>
        input === messages.placeholders.moduleName ? "" : input,
      validate: (input) =>
        input && input !== messages.placeholders.moduleName
          ? true
          : messages.errorModuleName,
    },
    {
      type: "input",
      name: "customName",
      message: messages.enterCustomName,
      default: messages.placeholders.customName,
      filter: (input) =>
        input === messages.placeholders.customName ? "" : input,
    },
    {
      type: "input",
      name: "version",
      message: messages.enterVersion,
      default: "1.0.0",
    },
    {
      type: "input",
      name: "path",
      message: messages.enterPath,
      default: (answers) => {
        if (answers.moduleType === "module-page") {
          return "/mypage";
        } else if (answers.moduleType === "module-block-home") {
          return "home_mymodule";
        } else if (answers.moduleType === "module-block-profile") {
          return "mypage";
        }
        return messages.enterPath;
      },
      filter: (input) => (input === messages.enterPath ? "" : input),
    },
    {
      type: "input",
      name: "contributors",
      message: messages.contributors,
      filter: (input) => (input === "" ? null : input),
      when: async (answers) => {
        const contributors = [];
        while (true) {
          const { contributor } = await inquirer.prompt([
            {
              type: "input",
              name: "contributor",
              message: messages.contributors,
            },
          ]);

          if (!contributor) break;
          contributors.push(contributor);
        }
        answers.contributors = contributors;
        return false;
      },
    },
  ]);
};
