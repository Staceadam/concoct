import { CallExpression, Expression, transform } from '@swc/core';
import { Visitor } from '@swc/core/Visitor.js';
import chalk from 'chalk';
import size from 'window-size';
import repeat from 'repeat-string';

const log = console.log;
const error = chalk.bold.red;
const def = chalk.bold.green;
const suc = chalk.bold.blue;

class PotionParser extends Visitor {
  visitTsType(exp: CallExpression): Expression {
    if (exp.kind === 'string') {
      log(def(repeat('=', size.get().width)));
      log(exp);
      log(def(repeat('=', size.get().width)));
    }

    return exp;
  }
}

// temp testing string code first before setting up importing file
transform(
  `
interface EventData {
    id: number;
    title: string;
    desc: string;
}
`,
  {
    jsc: {
      parser: {
        syntax: 'typescript',
      },
    },
    plugin: (m) => {
      log(suc(repeat('>', size.get().width)));
      log(m);
      log(suc(repeat('>', size.get().width)));
      return new PotionParser().visitProgram(m);
    },
  }
)
  .then((output) => {
    // what it does look like now
    log(repeat('=', size.get().width));
    log(output.code);
    log(repeat('=', size.get().width));
  })
  .catch((err) => {
    log(error(repeat('+', size.get().width)));
    log(error(err));
    log(error(repeat('+', size.get().width)));
  });
