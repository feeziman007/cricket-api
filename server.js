var cricketPlayers = require('./players.json')
    , uniqueRandomArray = require('unique-random-array')
    , teams = cricketPlayers.cricket.teams

module.exports = {
    all: teams,
    random: uniqueRandomArray(teams)
}