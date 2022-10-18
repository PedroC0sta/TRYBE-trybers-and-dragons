import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private static numberOfArchetypeInstances = 0;
  private _energyType = 'stamina'; 
  constructor(name:string) {
    super(name);
    Warrior.numberOfArchetypeInstances += 1;
  }

  get energyType():EnergyType {
    return this._energyType as EnergyType;
  }

  public static createdArchetypeInstances() {
    return Warrior.numberOfArchetypeInstances;
  }
}