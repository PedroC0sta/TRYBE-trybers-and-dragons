import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private static numberOfArchetypeInstances = 0;
  private _energyType = 'mana'; 
  constructor(name:string) {
    super(name);
    Mage.numberOfArchetypeInstances += 1;
  }

  get energyType():EnergyType {
    return this._energyType as EnergyType;
  }

  public static createdArchetypeInstances() {
    return Mage.numberOfArchetypeInstances;
  }
}