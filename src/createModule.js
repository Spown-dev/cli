import degit from "degit";
import path from "path";
import fs from "fs-extra";
import chalk from "chalk";
import cliProgress from "cli-progress";

export const createModule = async (
  { moduleType, techStack, moduleName, version, author },
  messages
) => {
  console.log("");
  console.log(chalk.green(messages.generating));

  const moduleTypeDir = moduleType;
  const techStackDir = techStack;

  const repo = `Spown-dev/templates/${moduleTypeDir}/${techStackDir}`;

  const targetDir = path.join(process.cwd(), moduleName);

  const progressBar = new cliProgress.SingleBar({
    format: "[" + chalk.cyan("{bar}") + "] {percentage}%",
    barCompleteChar: "=",
    barIncompleteChar: "",
    hideCursor: true,
  });

  progressBar.start(100, 0);

  let progress = 0;
  const interval = setInterval(() => {
    progress += 5;
    progressBar.update(progress);

    if (progress >= 100) {
      clearInterval(interval);
    }
  }, 100);

  try {
    const emitter = degit(repo, {
      cache: false,
      force: true,
      verbose: true,
    });

    await emitter.clone(targetDir);

    clearInterval(interval);
    progressBar.update(100);
    progressBar.stop();

    const packageJsonPath = path.join(targetDir, "package.json");
    if (fs.existsSync(packageJsonPath)) {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

      packageJson.name = moduleName;
      packageJson.version = version;
      packageJson.author = author;

      fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    }

    console.log("");
    console.log(chalk.green(messages.success));
    console.log(
      chalk.yellow(`${messages.instructions} cd ${moduleName} && npm install`)
    );
  } catch (err) {
    clearInterval(interval);
    progressBar.stop();
    console.error(chalk.red("Failed to create module:", err));
  }
};
