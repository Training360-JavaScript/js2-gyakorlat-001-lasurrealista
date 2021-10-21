const taggedTemplate = (texts, ...values) => texts.map(
  (text, index) => `
    ${text && text !== ' ' ? `` : ''}
    ${values[index] && values[index] !== ' ' ? `` : ''}
  `,
).join('');

export default taggedTemplate;
