import hope from '../assets/hope1.jpg';
import returnJedi from '../assets/return1.jpg';
import revenge from '../assets/revenge1.jpg';
import empire from '../assets/empire1.jpg';
import attack from '../assets/attack1.jpg';
import force from '../assets/force.jpg';
import phantom from '../assets/phantom1.jpg';
import hopeLarge from '../assets/hope.jpg';
import returnJediLarge from '../assets/return.jpg';
import revengeLarge from '../assets/revenge.jpg';
import empireLarge from '../assets/empire.jpg';
import attackLarge from '../assets/attack.jpg';
import forceLarge from '../assets/force.jpg';
import phantomLarge from '../assets/phantom.jpg';

import luke from '../assets/luke.jpg';
import c3po from '../assets/c3po.jpg';
import leia from '../assets/leia.jpg';

export const listObjects = () => {
  const allMovies = [{
      films: [
        { name: 'hope', path: hope, pathLargeImage: hopeLarge},
        { name: 'return', path: returnJedi, pathLargeImage: returnJediLarge },
        { name: 'empire', path: empire, pathLargeImage: empireLarge },
        { name: 'revenge', path: revenge, pathLargeImage: revengeLarge },
        { name: 'attack', path: attack, pathLargeImage: attackLarge },
        { name: 'force', path: force, pathLargeImage: forceLarge },
        { name: 'phantom', path: phantom, pathLargeImage: phantomLarge }
      ],
      people: [
        { name: 'luke', path: luke },
        { name: 'c-3po', path: c3po },
        { name: 'leia', path: leia},
        // { name: 'c-3po', path: c3po},
      ],
      planets: [
        { name: 'alderaan', path: luke },
        // { name: 'c-3po', path: c3po},
      ]
  }]
  return allMovies;
}