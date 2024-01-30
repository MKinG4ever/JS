function randomInt(maximum = 1, minimum = 0) {
  /* random number with maximum and minimum | wrote: NightFox */
  let _d = maximum - minimum;
  let _r = Math.random();
  return Math.round(minimum + _r * _d);
}
