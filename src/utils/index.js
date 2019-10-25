import hope from '../assets/hope1.jpg';
import returnJedi from '../assets/return1.jpg';
import revenge from '../assets/revenge1.jpg';
import empire from '../assets/empire1.jpg';
import attack from '../assets/attack1.jpg';
import force from '../assets/force.jpg';
import phantom from '../assets/phantom1.jpg';

export const listObjects = () => {
  const allMovies = [{
      movies: [
        { name: 'hope', path: hope },
        { name: 'return', path: returnJedi },
        { name: 'empire', path: empire },
        { name: 'revenge', path: revenge },
        { name: 'attack', path: attack },
        { name: 'force', path: force },
        { name: 'phantom', path: phantom },
      ],
      people: [
        { name: 'hope', path: hope }
      ]
  }]
  return allMovies;
}