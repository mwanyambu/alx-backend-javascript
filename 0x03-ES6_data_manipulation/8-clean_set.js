export default function cleanSet(set, startString) {
  if (!set && !startString && !(set instanceof Set) && typeof startString !== 'string') {
    return '';
  }
  const finalString = [];
  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const subStr = value.substring(startString.length);
      if (subStr && subStr !== value) {
        finalString.push(subStr);
      }
    }
  }
  return finalString.join('-');
}
