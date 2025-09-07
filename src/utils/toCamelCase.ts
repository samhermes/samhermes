export default function toCamelCase(str) {
  return str.replace(/(?:^.|[A-Z]|\b.)/g, function(letter, index) {
    return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
  }).replace(/\s+/g, '');
}