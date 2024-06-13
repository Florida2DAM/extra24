import {personatges} from './Dades';

export const obtinArrayImatgesPersonatges = () => {
  return personatges.map((personatge, index) => personatge.imatge);
};
/**
 * 
 * @param {*} unNom El nom d'un personatge dels que disposem d'imatge
 * @returns Torna un objecte amb l'atribut src que conté el codi que s'utilitzarà com
 * a source en el component image de la llibreria react-native.
 */
export const obtinImatgeAPartirDelNom = unNom => {
  let imatge;
  switch (unNom) {
    case 'Kirito':
      imatge = {src: require('../assets/img/Kirito.png')};
      break;
    case 'Eugeo':
      imatge = {src: require('../assets/img/Eugeo.jpg')};
      break;
    case 'Asuna':
      imatge = {src: require('../assets/img/Asuna.png')};
      break;
    case 'Agil':
      imatge = {src: require('../assets/img/Agil.jpg')};
      break;
  }
  return imatge;
};
