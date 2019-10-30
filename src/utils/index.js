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
import empireLarge from '../assets/download.jpg';
import attackLarge from '../assets/attack.jpg';
import forceLarge from '../assets/force.jpg';
import phantomLarge from '../assets/phantom.jpg';

import luke from '../assets/luke.jpg';
import c3po from '../assets/c3po.jpg';
import leia from '../assets/leia.jpg';
import r2d2 from '../assets/r2d2.jpg';
import darth from '../assets/darth-vader.jpg';
import owen from '../assets/owen.jpg';
import beru from '../assets/beru.jpg';
import r5d4 from '../assets/r5-d4.jpg';
import biggs from '../assets/biggs.jpg';
import obi from '../assets/obi-wan.jpg';
import anakin from '../assets/anakin.jpg';
import wilhuff from '../assets/wilhuff.jpg';
import chewbacca from '../assets/chewbacca.jpg';
import han from '../assets/han-solo.jpg';
import greedo from '../assets/greedo.jpg';
import jabba from '../assets/jabba.jpg';
import wedge from '../assets/wedge.jpg';
import jek from '../assets/jek.jpg';
import yoda from '../assets/yoda.jpg';
import palpatine from '../assets/palpatine.jpg';
import boba from '../assets/boba.jpg';
import ig88 from '../assets/ig-88.jpg';
import bossk from '../assets/bossk.jpg';
import lando from '../assets/lando.jpg';
import lobot from '../assets/lobot.jpg';
import ackbar from '../assets/ackbar.jpg';
import mon from '../assets/mon.jpg';
import arvel from '../assets/arvel.jpg';
import wicket from '../assets/wicket.jpg';
import nien from '../assets/nien.jpg';
import qui from '../assets/qui-gon.jpg';
import nute from '../assets/nute.jpg';
import finis from '../assets/finis.jpg';
import jar from '../assets/jar-jar.jpg';
import roos from '../assets/roos.jpg';
import rugor from '../assets/rugor.jpg';
import ric from '../assets/ric.jpg';
import watto from '../assets/watto.jpg';
import sebulba from '../assets/sebulba.jpg';
import quarsh from '../assets/quarsh.jpg';
import shmi from '../assets/shmi.jpg';
import maul from '../assets/maul.jpg';
import fortuna from '../assets/fortuna.jpg';
import secura from '../assets/secura.jpg';
import bolt from '../assets/bolt.jpg';
import gasgano from '../assets/gasgano.jpg';
import quadinaros from '../assets/quadinaros.jpg';
import windu from '../assets/windu.jpg';
import mundi from '../assets/mundi.jpg';
import fisto from '../assets/fisto.jpg';
import eeth from '../assets/eeth.jpg';
import gallia from '../assets/gallia.jpg';
import saesee from '../assets/saesee.jpg';
import yarael from '../assets/yarael.jpg';
import koon from '../assets/koon.jpg';
import amedda from '../assets/amedda.jpg';
import typho from '../assets/typho.jpg';
import corde from '../assets/corde.jpg';
import cliegg from '../assets/cliegg.jpg';
import poggle from '../assets/poggle.jpg';
import unduli from '../assets/unduli.jpg';
import barriss from '../assets/barriss.jpg';
import dorme from '../assets/dorme.jpg';
import dooku from '../assets/dooku.jpg';
import prestor from '../assets/prestor.jpg';
import jango from '../assets/jango.jpg';
import wesell from '../assets/wesell.jpg';
import jettster from '../assets/jettster.jpg';
import lama from '../assets/lama.jpg';
import taun from '../assets/taun.jpg';
import jocasta from '../assets/jocasta.jpg';
import r4p17 from '../assets/r4-p17.jpg';
import tambor from '../assets/tambor.jpg';
import hill from '../assets/hill.jpg';
import shaak from '../assets/shaak.jpg';
import grievous from '../assets/grievous.jpg';
import tarfful from '../assets/tarfful.jpg';
import raymus from '../assets/raymus.jpg';
import moore from '../assets/moore.jpg';
import medon from '../assets/medon.jpg';
import finn from '../assets/finn.jpg';
import rey from '../assets/rey.jpg';
import dameron from '../assets/dameron.jpg';
import bb8 from '../assets/bb8.jpg';
import phasma from '../assets/phasma.jpg';

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
        { name: 'r2-d2', path: r2d2},
        { name: 'darth', path: darth},
        { name: 'owen', path: owen},
        { name: 'beru', path: beru},
        { name: 'r5-d4', path: r5d4},
        { name: 'biggs', path: biggs},
        { name: 'obi-wan', path: obi},
        { name: 'anakin', path: anakin},
        { name: 'wilhuff', path: wilhuff},
        { name: 'chewbacca', path: chewbacca},
        { name: 'han', path: han},
        { name: 'greedo', path: greedo},
        { name: 'jabba', path: jabba},
        { name: 'wedge', path: wedge},
        { name: 'jek', path: jek},
        { name: 'yoda', path: yoda},
        { name: 'palpatine', path: palpatine},
        { name: 'boba', path: boba},
        { name: 'ig-88', path: ig88},
        { name: 'bossk', path: bossk},
        { name: 'lando', path: lando},
        { name: 'lobot', path: lobot},
        { name: 'ackbar', path: ackbar},
        { name: 'mon', path: mon},
        { name: 'arvel', path: arvel},
        { name: 'systri', path: wicket},
        { name: 'nien', path: nien},
        { name: 'qui-gon', path: qui},
        { name: 'nute', path: nute},
        { name: 'finis', path: finis},
        { name: 'jar jar', path: jar},
        { name: 'roos', path: roos},
        { name: 'rugor', path: rugor},
        { name: 'olié', path: ric},
        { name: 'watto', path: watto},
        { name: 'sebulba', path: sebulba},
        { name: 'quarsh', path: quarsh},
        { name: 'shmi', path: shmi},
        { name: 'darth maul', path: maul},
        { name: 'fortuna', path: fortuna},
        { name: 'secura', path: secura},
        { name: 'bolt', path: bolt},
        { name: 'gasgano', path: gasgano},
        { name: 'quadinaros', path: quadinaros},
        { name: 'windu', path: windu},
        { name: 'mundi', path: mundi},
        { name: 'fisto', path: fisto},
        { name: 'eeth', path: eeth},
        { name: 'gallia', path: gallia},
        { name: 'saesee', path: saesee},
        { name: 'yarael', path: yarael},
        { name: 'koon', path: koon},
        { name: 'amedda', path: amedda},
        { name: 'typho', path: typho},
        { name: 'cordé', path: corde},
        { name: 'cliegg', path: cliegg},
        { name: 'poggle', path: poggle},
        { name: 'unduli', path: unduli},
        { name: 'barriss', path: barriss},
        { name: 'dormé', path: dorme},
        { name: 'dooku', path: dooku},
        { name: 'bail prestor', path: prestor},
        { name: 'jango', path: jango},
        { name: 'wesell', path: wesell},
        { name: 'jettster', path: jettster},
        { name: 'lama su', path: lama},
        { name: 'taun we', path: taun},
        { name: 'jocasta', path: jocasta},
        { name: 'r4-p17', path: r4p17},
        { name: 'tambor', path: tambor},
        { name: 'san hill', path: hill},
        { name: 'shaak ti', path: shaak},
        { name: 'grievous', path: grievous},
        { name: 'tarfful', path: tarfful},
        { name: 'raymus', path: raymus},
        { name: 'sly moore', path: moore},
        { name: 'tion medon', path: medon},
        { name: 'finn', path: finn},
        { name: 'rey', path: rey},
        { name: 'dameron', path: dameron},
        { name: 'bb8', path: bb8},
        { name: 'captain phasma', path: phasma},
      ],
      planets: [
        { name: 'alderaan', path: luke },
        // { name: 'c-3po', path: c3po},
      ]
  }]
  return allMovies;
}