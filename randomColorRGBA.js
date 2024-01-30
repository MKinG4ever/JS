function randomColorRGBA(a = 1) {
  /* random rgba() creator | wrote: NightFox */
  let _r, _g, _b, _rgba;
  _r = Math.round(Math.random() * 250);
  _g = Math.round(Math.random() * 250);
  _b = Math.round(Math.random() * 250);
  _rgba = "rgba(" + _r + ", " + _g + ", " + _b + ", " + a + ")";
  return _rgba;
}
