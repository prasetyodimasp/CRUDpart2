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

// menmbahkan data mahasiswa
exports.tambahMahasiswa = function (req, res) {
  var nim = req.body.nim;
  var nama_mahasiswa = req.body.nama_mahasiswa;
  var jurusan = req.body.jurusan;

  connection.query(
    "INSERT INTO mahasiswa (nim, nama_mahasiswa, jurusan) VALUES(?,?,?)",
    [nim, nama_mahasiswa, jurusan],
    function (error, rows, fileds) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil menambahkan data", res);
      }
    }
  );
};

//mengubah data berdasarkan id
exports.ubahData = function (req, res) {
  var id = req.body.id;
  var nim = req.body.nim;
  var nama_mahasiswa = req.body.nama_mahasiswa;
  var jurusan = req.body.jurusan;

  connection.query(
    "UPDATE mahasiswa SET nim=?, nama_mahasiswa=?, jurusan=? WHERE id=?",
    [nim, nama_mahasiswa, jurusan, id],
    function (error, rows, fileds) {
      if (error) {
        console.log(error);
      } else {
        response.ok("berhasil ubah data", res);
      }
    }
  );
};
