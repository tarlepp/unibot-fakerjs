# unibot-fakerjs
UniBot plugin to wrap [faker.js](https://github.com/marak/faker.js) functionality to bot.

## Install
To your UniBot application. Remember to restart your bot after installation.

```npm install git://github.com/tarlepp/unibot-fakerjs --save```

And after that register plugin on IRC channels where you want to use it.

```plugin [#channel] fakerjs```

## Usage
Currently plugin supports following commands.

### !faker [section] [command]
This command will just call specified faker.js generator and outputs results. See http://marak.com/faker.js/ for usage
examples. Usage eg. ```!faker name firstName```.

### !bs
Shortcut for ```!faker company bs``` to get some company bullshit.

### !company
Shortcut for ```!faker company catchPhrase``` to get company catch phrase.

### !hacker
Shortcut for ```!faker hacker phrase``` to get hacker phrase.

## Configuration
None, atm.

## Todo
* List of sections?
* list of commands of specified section?
* Localization?
* Configuration?
* More shortcuts?

## Libraries that plugin uses
* [faker.js](https://github.com/marak/faker.js) - generate massive amounts of fake data in Node.js and the browser
* [lodash](https://lodash.com/) - A JavaScript utility library delivering consistency, modularity, performance
