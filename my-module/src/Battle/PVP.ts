import Character from '../Character';
import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private player1:Character | Fighter;
  private player2:Character | Fighter;
  constructor(player1: Character | Fighter, player2: Character | Fighter) {
    super(player1);
    this.player1 = player1;
    this.player2 = player2;
  }

  fight(): number {
    const winner = this.thenRounds();
    if (winner === 1) { return 1; }
    return -1; 
  }

  luckPlayer1 = () => this.player1.throwD20();
  luckPlayer2 = () => this.player2.throwD20();

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