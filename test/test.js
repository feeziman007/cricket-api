var expect = require('chai').expect
, cricket = require('./../server')
, all = cricket.all
, teams = cricket.teams
, modes = cricket.modes

describe('Cricket: ', function() {

    it('Cricket API should exist', function() {
        expect(cricket).to.not.be.empty
    })

    it('Cricket teams should be an array', function() {
        expect(teams).to.not.be.empty
    })

    it('No of cricket teams should be more than 2', function() {
        expect(teams).to.have.length.above(2)
    })

    it('Cricket modes', function() {
        expect(modes).to.not.be.empty
    })

    it('There should be atleast 4 cricket modes', function() {
        expect(teams).to.have.length.of.at.least(4)
    })
})
