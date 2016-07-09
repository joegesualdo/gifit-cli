import parseArgv from 'parse-argv';
import gifit from 'gifit';
import path from 'path';
import log from '@joegesualdo/terminal-log';

var argv = parseArgv(process.argv.slice(2), {
  usage: '$ gifit [options] ',
  options: [
    {
      flag: 'output',
      alias: 'o',
      description: 'Where you want to store the gif'
    },
    {
      flag: 'input',
      alias: 'i',
      description: 'The path to the file'
    }
  ],
  examples: [
    {
      usage: '$ gifit --input=./test.mov --output=./test.gif',
      output: ''
    }
  ]
})

gifit({
  input: path.resolve(argv.input),
  output: path.resolve(argv.output),
})
.then(() => {
  process.stdout.write('\n')
  log.success(`Created the gif: ${path.resolve(argv.output)}`, 2)
})
.catch((err) => {
  process.stdout.write('\n')
  log.error(err.message, 2)
})
