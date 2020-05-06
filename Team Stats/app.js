const team = {

    _players: [
        { firstName: 'Pablo', lastName: 'Sanchez', age: 11 },
        { firstName: 'Pete', lastName: 'Wheeler', age: 54 },
        { firstName: 'Luc', lastName: 'Zanton', age: 32 }
    ],

    _games: [
        { opponent: 'Broncos', teamPoints: 42, opponentPoints: 27 },
        { opponent: 'Narcos', teamPoints: 30, opponentPoints: 27 },
        { opponent: 'Fastidos', teamPoints: 20, opponentPoints: 36 }
    ],

    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },

    addPlayer(firstName, lastName, age) {
        let newPlayer = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };
        this.players.push(newPlayer);
    },


    addGame(opName, points, opPoints) {
        let newGame = {
            opponent: opName,
            teamPoints: points,
            opponentPoints: opPoints
        };
        this.games.push(newGame);
    }



}

team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);


team.addGame("Dragons", 37, 15);
team.addGame("Bools", 25, 30);
team.addGame("Bugs", 18, 29);

console.log(team);




