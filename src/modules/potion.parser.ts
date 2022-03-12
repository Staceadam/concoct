import { CallExpression, Expression, transformSync } from '@swc/core';
import { Visitor } from '@swc/core/Visitor.js';

class PotionParser extends Visitor {
  visitCallExpression(expression: CallExpression): Expression {
    console.log('===============================');
    console.log('∆', expression);
    console.log('===============================');
    return expression;
  }
}

// temp testing string code first before setting up importing file
const out = transformSync(
  `
const Modal = \`
    id: string;
    title: string;
    desc: string;
\`
`,
  {
    plugin: (module) => {
      console.log('<<<<<<<<<<<<<<<<<<<<<<<<');
      console.log('M', module);
      console.log('>>>>>>>>>>>>>>>>>>>>>>>>');
      return new PotionParser().visitProgram(module);
    },
  }
);

// what it does look like now
console.log(out);

// what it should output
out.code === ``;
