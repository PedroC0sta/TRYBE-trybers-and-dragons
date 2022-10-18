import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';

export default class Character implements Fighter {
  private _name:string;
  private _race:Race;
  private _archetype:Archetype;
  private _maxLifePoints:number;
  private _lifePoints:number;
  private _strength:number;
  private _defense:number;
  private _dexterity:number;
  private _energy:Energy;

  constructor(name:string) {
    this._name = name;
    this._dexterity = Math.floor(Math.random() * 10 + 1);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints; 
    this._strength = Math.floor(Math.random() * 10 + 1);
    this._defense = Math.floor(Math.random() * 10 + 1);
    this._energy = { 
      type_: this._archetype.energyType,
      amount: Math.floor(Math.random() * 10 + 1), 
    };
  }
}