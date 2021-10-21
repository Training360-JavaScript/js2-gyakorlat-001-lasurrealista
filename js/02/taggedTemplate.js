const taggedTemplate = (texts, ...values) => texts.map(
  (text, index) => `
    ${text && text !== ' ' ? `<em>${text}</em>` : ''}
    ${values[index] && values[index] !== ' ' ? `<strong>${values[index]}</strong>` : ''}
  `,
).join('');

export default taggedTemplate;
