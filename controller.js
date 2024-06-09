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
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// menampilkan data berdasarkan id mahasiswa
exports.tampilberdasarkanid = function (req, res) {
  let id = req.params.id;
  connection.query(
    "SELECT * FROM mahasiswa WHERE id = ?",
    [id],
    function (error, rows, fileds) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};
