'use strict';

module.exports.handler = function(event, context, cb) {
  return cb(null,
      {
          "kitchen": {"id": "abcdefg", "style": "modern"},
          "request": event
      }
  );
};
