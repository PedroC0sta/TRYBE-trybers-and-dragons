import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import { SimpleFighter } from './Fighter';
import Fighter from './Fighter/Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race:Race;
  private _archetype:Archetype;
  private _maxLifePoints:number;
  private _strength:number;
  private _defense:number;
  private _dexterity:number;
  private _energy:Energy;
  private _lifePoints: number;
  private _D3: number;
  private _D20:number;

  constructor(name: string) {
    this._dexterity = getRandomInt(1, 10);
    this._archetype = new Mage(name);
    this._race = new Elf(name, this._dexterity);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints; 
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = { 
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10), 
    };
    this._D3 = 1;
    this._D20 = 1;
  }

  public get race() { return this._race; }
  public get archetype() { return this._archetype; }
  public get maxLifePoints() { return this._maxLifePoints; }
  public get strength() { return this._strength; }
  public get defense() { return this._defense; }
  public get dexterity() { return this._dexterity; }
  public get energy() { return { ...this._energy }; }
  public get lifePoints() { return this._lifePoints; }

  receiveDamage(attackPoints:number): number {
    const damage = attackPoints - this._defense;
    const lifePointsAfterDamage = this._lifePoints - damage;
    if (damage > 0) {
      if (lifePointsAfterDamage < 0) this._lifePoints = -1;
      else this._lifePoints = lifePointsAfterDamage;
    }
    return this._lifePoints;
  } 

  attack(enemy:Fighter | SimpleFighter):void {
    enemy.receiveDamage(this._strength); 
  }

  levelUp():void {
    const maxLifePointsAdd = getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10; 
    const maxLifePointsUp = this._maxLifePoints + maxLifePointsAdd;
    
    if (maxLifePointsUp > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    } else {
      this._maxLifePoints = maxLifePointsUp;
    }
    this._lifePoints = this._maxLifePoints;
  }

  special(enemy:Fighter):void {
    this._D20 = getRandomInt(1, 20);
    this._D3 = getRandomInt(1, 3);
    if (this._D20 === 20) enemy.receiveDamage(this._strength * 7);
    else { enemy.receiveDamage(this._strength * this._D3); }
  }
}
