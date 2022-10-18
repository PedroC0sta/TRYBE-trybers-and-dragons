import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints; 
  private static numberOfRacesInstances = 0;
  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.numberOfRacesInstances += 1;
  }

  get maxLifePoints():number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances() {
    return Elf.numberOfRacesInstances;
  }
}