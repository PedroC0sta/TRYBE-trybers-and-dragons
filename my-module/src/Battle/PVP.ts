import Fighter from '../Fighter';
import getRandomInt from '../utils';
import Battle from './Battle';

export default class PVP extends Battle {
  private player1: Fighter;
  private player2: Fighter;
  constructor(player1: Fighter, player2: Fighter) {
    super(player1);
    this.player1 = player1;
    this.player2 = player2;
  }

  fight(): number {
    const winner = this.thenRounds();
    if (winner === 1) { return 1; }
    return -1; 
  }

  luckPlayer1 = () => getRandomInt(1, 20);
  luckPlayer2 = () => getRandomInt(1, 20);

  thenRounds():number {
    for (let rounds = 1; rounds < 10; rounds += 1) {
      if (this.luckPlayer1() > this.luckPlayer2()) {
        this.player1.attack(this.player2);
      } 
      this.player2.attack(this.player1);
    }
    if (this.player1.lifePoints > this.player2.lifePoints) return 1; 
    return 2;
  }
}