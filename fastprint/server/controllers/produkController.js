const { Produk, Kategori, Status } = require("../models");

class produkController {
  static async getProduk(req, res, next) {
    try {
      let produk = await Produk.findAll({
        include: [
          {
            model: Kategori,
            attributes: ["id", "nama_kategori"],
          },
          {
            model: Status,
            attributes: ["id", "nama_status"],
          },
        ],
      });

      res.status(200).json(produk);
    } catch (err) {
      next(err);
    }
  }

  static async getProdukById(req, res, next) {
    try {
      let produk = await Produk.findByPk(req.params.id, {});

      if (!produk) throw { name: "NotFound" };
      res.status(200).json(produk);
    } catch (err) {
      next(err);
    }
  }

  static async deleteProduk(req, res, next) {
    try {
      let id = req.params.id;
      let deleteCount = await Produk.destroy({
        where: { id },
      });
      if (deleteCount == 0) {
        throw { name: "NotFound" };
      }
      res.status(200).json({ message: `Produk with id:${id} deleted` });
    } catch (err) {
      next(err);
    }
  }

  static async createProduk(req, res, next) {
    try {
      const { nama_produk, harga, kategori_id, status_id } = req.body;
      const produk = await Produk.create({
        nama_produk,
        harga,
        kategori_id,
        status_id,
      });
      res.status(201).json(produk);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async editProduk(req, res, next) {
    try {
      const id = req.params.id;
      const { nama_produk, harga, kategori_id, status_id } = req.body;

      const produk = await Produk.findByPk(id);
      if (!produk) {
        return res.status(404).json({ message: "NotFound" });
      }

      produk.nama_produk = nama_produk;
      produk.harga = harga;
      produk.kategori_id = kategori_id;
      produk.status_id = status_id;

      await produk.save();

      return res
        .status(200)
        .json({ message: `Produk  with id: ${id} updated` });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = produkController;
