
/* IMPORT */

import {describe} from 'fava';
import path from 'node:path';
import process from 'node:process';
import dirname from '../dist/index.js';

/* MAIN */

describe ( 'Tiny Dirname', it => {

  it ( 'works', t => {

    const actual = dirname ( import.meta.url );
    const expected = path.join ( process.cwd (), 'test' );

    t.is ( actual, expected );

  });

  it ( 'works with the root path', t => {

    const actual = dirname ( 'file://' );
    const expected = '/';

    t.is ( actual, expected );

  });

});
