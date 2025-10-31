// We want this generate all of the fake data needed.
// This means It should generate transactions, and blocks with the corresponding
// data.
// All Summary data can be generated from the detailed data.  As such, we only
// really need to concern ourselves with the Detailed Data.
// We would also like for this data to be generated consistently for the same
// date.  So we will generate the data using a Pseudo-Random-Number-generator
// that is seeded based on today's date in UTC.
//

const now = new Date();

const startMilliSeconds = new Date(
  now.getFullYear(),
  now.getMonth(),
  now.getDate(),
).valueOf();

const seed = startMilliSeconds;

export function getNow(): number {
  return now.valueOf();
}

export function getStartingMilliseconds(): number {
  return startMilliSeconds;
}

export function getStartingSeed(): number {
  return seed;
}
