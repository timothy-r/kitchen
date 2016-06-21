'use strict';

module.exports.handler = function(event, context, cb) {

  return cb(null,
      [
        {"id" : "abcdefg", "style": "modern"},
        {"id" : "12345", "style": "country farmhouse"}
      ]
  );
};
