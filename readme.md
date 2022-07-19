- Code repo for reproducing https://github.com/cypress-io/cypress/issues/22825
- My setup
  - windows 11
  - vscode
- run `npm run ci` in the vscode terminal, observe error "Cannot call this.next() more than once in the same middleware function. Doing so can cause unintended issues." with cypress@10.3.0
- run `npm run test`, observe that the test can be run successfully via the cypress UI and logged 404 to webpack devserver.