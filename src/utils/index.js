import hope from '../assets/hope.jpg';
import returnJedi from '../assets/return.jpg';
import revenge from '../assets/revenge.jpg';
import empire from '../assets/empire.jpg';


export const listObjects = () => {
  const allMovies = [{
      movies: [
        { name: 'hope', path: hope },
        { name: 'return', path: returnJedi },
        { name: 'empire', path: empire },
        { name: 'revenge', path: revenge }
      ],
      people: [
        { name: 'hope', path: hope }
      ]
  }]
  return allMovies;
}