#!/usr/bin/env node
import chalk from "chalk";
import { showWelcomeMessage } from "./welcomeMessage.js";
import { loadMessages } from "./messages.js";
import { askLanguageQuestions, askModuleQuestions } from "./prompts.js";
import { createModule } from "./createModule.js";

(async () => {
  showWelcomeMessage();

  const { language } = await askLanguageQuestions();
  const messages = loadMessages(language);

  console.log("");
  console.log(chalk.greenBright(messages.welcome));
  console.log(chalk.yellow(messages.letsCreateSomething));
  console.log("");

  const moduleAnswers = await askModuleQuestions(messages);

  createModule(moduleAnswers, messages);
})();
