export default function cleanSet(set, startString) {
  const startWith = Array.from(set).filter(value => value.startsWith(startString));
  const finalString = startWith.map(value => value.slice(startString.length)).join('-');
  return finalString;
}
