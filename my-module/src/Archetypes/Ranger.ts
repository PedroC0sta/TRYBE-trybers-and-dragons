import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private static numberOfArchetypeInstances = 0;
  private _energyType = 'stamina'; 
  constructor(name:string) {
    super(name);
    Ranger.numberOfArchetypeInstances += 1;
  }

  get energyType():EnergyType {
    return this._energyType as EnergyType;
  }

  public static createdArchetypeInstances() {
    return Ranger.numberOfArchetypeInstances;
  }
}