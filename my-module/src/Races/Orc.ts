import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints; 
  private static numberOfRacesInstances = 0;
  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.numberOfRacesInstances += 1;
  }

  get maxLifePoints():number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances() {
    return Orc.numberOfRacesInstances;
  }
}
