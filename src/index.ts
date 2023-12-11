
/* IMPORT */

import fileurl2path from 'fileurl2path';

/* MAIN */

const dirname = ( url: string ): string => {

  return fileurl2path ( new URL ( '.', url ) ).replace ( /(.)\/$/, '$1' );

};

/* EXPORT */

export default dirname;
