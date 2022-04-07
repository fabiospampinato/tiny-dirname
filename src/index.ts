
/* MAIN */

const dirname = ( url: string ): string => {

  return new URL ( '.', url ).pathname.replace ( /(.)\/$/, '$1' );

};

/* EXPORT */

export default dirname;
