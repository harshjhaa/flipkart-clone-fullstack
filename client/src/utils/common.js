export const getObjectKeysArr = (obj) => {
  return obj !== undefined && obj !== null ? Object.keys(obj) : null;
};
