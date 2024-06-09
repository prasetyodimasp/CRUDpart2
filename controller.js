"use strict";

var response = require("./res");
var connection = require("./koneksi");

exports.index = function (req, res) {
  response.ok("Aplikasiku berjalan ", res);
};

//menampilkan data mahasiswa
exports.tampilsemuadata = function (req, res) {
  connection.query("SELECT * FROM mahasiswa", function (error, rows, fileds) {
    console.log(rows);
    if (error) {
      connection.log(error);
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};
