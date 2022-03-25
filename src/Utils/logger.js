const info = (...params) => {
  if (process.env.NODE_ENV !== "test") {
    (...params);
  }
};

const error = (...params) => {
  console.error(...params);
};

module.exports = {
  info,
  error,
};
