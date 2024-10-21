/*! @ryanmorr/tagged v0.1.4 | https://github.com/ryanmorr/tagged */
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).tagged=n()}(this,(function(){"use strict";return function(e,n=(e=>e)){return(t,...o)=>e(t.raw.reduce(((e,t,f)=>e+n(o[f-1])+t)))}}));
