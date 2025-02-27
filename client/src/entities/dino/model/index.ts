export interface IRawDinoData {
  name: string;
  skills: string;
  image: string;
  power: number;
  agility: number;
  intellect: number;
  stamina: number;
  magic: number;
}

export interface IDino extends IRawDinoData {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

export type ArrayDinosType = Array<IDino>;
