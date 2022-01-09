export const generateQueryUri = (params) => {
  const keys = Object.keys(params);

  return keys.reduce((acc, key) => {
    const isLastOne = keys.indexOf(key) === keys.length - 1;
    return acc + `${key}=${params[key]}${isLastOne ? '' : '&'}`
  }, '?');
};