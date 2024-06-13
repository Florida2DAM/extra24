import {personatges} from './Dades';

export const obtinArrayImatgesPersonatges = () => {
  return personatges.map((personatge, index) => personatge.imatge);
};
/**
 *
 * @param {*} unNom El nom d'un personatge dels que disposem d'imatge
 * @returns Torna un objecte amb
 *  - l'atribut src que conté el codi que s'utilitzarà com
 * a source en el component image de la llibreria react-native.
 *  - l'edat del personatge
 * exemple de l'objecte que torna: 
 * {"edat": 16, "src": require('../assets/img/Kirito.png')}
 */
export const obtinImatgeIEdatAPartirDelNom = unNom => {

  const personatgeTrobat = personatges.filter(unPersonatge => {
    return unPersonatge.nom === unNom;
  });

  return {
    src: personatgeTrobat[0].imatge,
    edat: personatgeTrobat[0].dades.edat,
  };
};