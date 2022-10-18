export default abstract class Race {
  readonly _name;
  readonly _dexterity;

  constructor(name:string, dexterity:number) {
    this._name = name;
    this._dexterity = dexterity;
  }

  public static createdRacesInstances():number {
    throw new Error('Not implemented');
  } 

  get name() {
    return this._name;
  }

  get dexterity() {
    return this._dexterity;
  }

  abstract get maxLifePoints():number;
}