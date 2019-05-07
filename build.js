'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: {
    topLeft: ' ',
    topRight: ' ',
    bottomLeft: ' ',
    bottomRight: ' ',
    horizontal: ' ',
    vertical: ' '
  },
  backgroundColor: 'white',
}

// Text + chalk definitions
const descriptionText = 'I ❤ music, cycling, football and software engineering!';
const data = {
  name: chalk.black('Kyousuke Abe'),
  desc: chalk.black(descriptionText),
  handle: chalk.black('kaave | junkjunctions'),
  work: chalk.black('Web Developer at ') + chalk.red('FRAMELUNCH ') + chalk.black('inc.'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('junkjunctions'),
  github: chalk.gray('https://github.com/') + chalk.green('kaave'),
  npm: chalk.gray('https://www.npmjs.com/') + chalk.red('~kaave'),
  facebook: chalk.gray('https://facebook.com/') + chalk.blue('kyousuke.abe.9'),
  wantedly: chalk.gray('https://www.wantedly.com/users/') + chalk.green('57487254'),
  web: chalk.magenta('https://kaave.github.io/'),
  npx: chalk.red('npx') + ' ' + chalk.black('@kaave/me'),

  labelWork: chalk.black.bold('       Work:'),
  labelTwitter: chalk.black.bold('    Twitter:'),
  labelNpm: chalk.black.bold('        npm:'),
  labelGitHub: chalk.black.bold('     GitHub:'),
  labelFacebook: chalk.black.bold('   facebook:'),
  labelWantedly: chalk.black.bold('   Wantedly:'),
  labelWeb: chalk.black.bold('        Web:'),
  labelCard: chalk.black.bold('       Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} a.k.a. ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const description = data.desc;
const br = chalk.black('-'.repeat(descriptionText.length + 1));
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const npming = `${data.labelNpm}  ${data.npm}`
const facebooking = `${data.labelFacebook}  ${data.facebook}`
const wantedlying = `${data.labelWantedly}  ${data.wantedly}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + newline + // data.name + data.handle
               description + newline +
               br +
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               twittering + newline + // data.labelTwitter + data.twitter
               githubing + newline + // data.labelGitHub + data.github
               npming + newline + // data.labelNpm + data.npm
               facebooking + newline + // data.labelFacebook + data.github
               wantedlying + newline +
               webing + newline + newline + // data.labelWeb + data.web
               carding // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
