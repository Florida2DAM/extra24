import {personatges} from './Dades';

export const obtinArrayImatgesPersonatges = () => {
  return personatges.map((personatge, index) => personatge.imatge);
};
