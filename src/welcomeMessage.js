import chalk from "chalk";

// ASCII Art généré pour votre CLI
const asciiArt = `
  ____                                       _              
 / ___|  _ __    ___ __      __ _ __      __| |  ___ __   __
 \\___ \\ | '_ \\  / _ \\\\ \\ /\\ / /| '_ \\    / _\` | / _ \\\\ \\ / /
  ___) || |_) || (_) |\\ V  V / | | | | _| (_| ||  __/ \\ V / 
 |____/ | .__/  \\___/  \\_/\\_/  |_| |_|(_)\\__,_| \\___|  \\_/  
        |_|                                                 
`;

export const showWelcomeMessage = () => {
  console.log(chalk.blue(asciiArt));
};
