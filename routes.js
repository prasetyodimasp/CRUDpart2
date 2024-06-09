"use strict";

module.exports = function (app) {
  var controller = require("./controller");

  app.route("/").get(controller.index);

  app.route("/tampil").get(controller.tampilsemuadata);

  app.route("/tampil/:id").get(controller.tampilberdasarkanid);

  app.route("/tambah").post(controller.tambahMahasiswa);
};
