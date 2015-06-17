'use strict';

/**
 * Plugin dependencies
 *
 * @type {exports}
 * @private
 */
var faker = require('./node_modules/faker');

/**
 * UniBot plugin to wrap faker.js functionality to bot.
 *
 * @see https://github.com/marak/faker.js
 *
 * @param {Object} options Plugin options object, description below.
 *  db:     {mongoose}  the mongodb connection
 *  bot:    {irc}       the irc bot
 *  web:    {connect}   a connect + connect-rest webserver
 *  config: {object}    UniBot configuration
 *
 * @return  {Function}  Init function to access shared resources
 */
module.exports = function init(options) {
  // Actual plugin implementation.
  return function plugin(channel) {
    return {
      '^!bs$': function match() {
        channel.say('Company bullshit for today: \'' + faker.company.bs() + '\'');
      },
      '^!company$': function match() {
        channel.say('Company catch phrase for today: \'' + faker.company.catchPhrase() + '\'');
      },
      '^!hacker$': function match() {
        channel.say('Hacker phrase for today: \'' + faker.hacker.phrase() + '\'');
      },
      '^!faker (\\w+)\\s(\\w+)$': function match(from, matches) {
        var section = matches[1];
        var command = matches[2];

        try {
          channel.say(faker[section][command]());
        } catch (error) {
          channel.say(from + ': on noes faker.js command not found, see http://marak.com/faker.js/ for examples. Usage like \'!faker (section) (command)\' eg. \'!faker name firstName\'');
        }
      }
    };
  };
};
