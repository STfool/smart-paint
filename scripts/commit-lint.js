const chalk = require('chalk');
const msgPath = process.env.HUSKY_GIT_PARAMS;
const msg = require('fs').readFileSync(msgPath, 'utf-8').trim();

const commitRE = /^(v\d+\.\d+\.\d+(-(alpha|beta|rc.\d+))?)|((revert: )?(feat|fix|docs|style|refactor|perf|test|workflow|ci|chore|types|update)(\(.+\))?!?: (:.{1,30}:)?.{1,50})/;

if (!commitRE.test(msg)) {
  console.error(
    `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red('invalid commit message format.')}\n\n${
      chalk.red('  Proper commit message format is required for automated changelog generation. Examples:\n\n')
    }    ${chalk.green('feat(electron): :smile: add minimize & maxmize triggle btn')}\n`
    + `    ${chalk.green('fix(react): :100: cannot upload pentool(close #28)')}\n\n${
      chalk.red('  See .github/COMMIT_CONVENTION.md for more details.\n')
    }${chalk.red(`  You can also use ${chalk.cyan('npm run commit')} to interactively generate a commit message.\n`)}`,
  );
  process.exit(1);
}
