"use strict";

module.exports = function (app) {
  var controller = require("./controller");

  app.route("/").get(controller.index);

  app.route("/get").get(controller.get);

  app.route("/get/:id").get(controller.getId);

  app.route("/post").post(controller.post);

  app.route("/put").put(controller.put);

  app.route("/delete").delete(controller.delete);
};
