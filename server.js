var cricketPlayers = require('./players.json')
    , uniqueRandomArray = require('unique-random-array')
    , everything = cricketPlayers.cricket
    , teams = everything.teams
    , modes = everything.modes

module.exports = {
    all: everything,
    teams: teams,
    modes: modes,
    random: uniqueRandomArray(teams)
}