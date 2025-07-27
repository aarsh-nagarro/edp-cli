#!/usr/bin/env node

const { Command } = require('commander');
const program = new Command();

program
  .name('edp')
  .description('EDP CLI - Internal Developer Platform CLI')
  .version('0.0.1');

program
  .command('say-hello')
  .description('Greet someone with hello')
  .requiredOption('--name <name>', 'Name of the person to greet')
  .action((options) => {
    console.log(`Hello, ${options.name}! 👋`);
  });

program
  .command('say-bye')
  .description('Say goodbye to someone')
  .requiredOption('--name <name>', 'Name of the person to bid farewell')
  .action((options) => {
    console.log(`Goodbye, ${options.name}! 👋`);
  });

program.parse(process.argv);
