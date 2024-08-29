"use strict";
let destination = "";

try {
  let hashValue = location.hash.slice(1);
  let decodedHashValue = decodeURIComponent(hashValue);
  destination = new URL(decodedHashValue).toString();
} catch (err) {
  alert(`Invalid # string or Invalid URL. Got error:\n${err}`);
  throw err;
}

registerSW()
  .then(() => {
    window.open(
      __uv$config.prefix + __uv$config.encodeUrl(destination),
      "_self"
    );
  })
  .catch((err) => {
    alert(`Encountered error:\n${err}`);
  });
