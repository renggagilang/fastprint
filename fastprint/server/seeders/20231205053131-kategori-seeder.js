"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "Kategoris",
      [
        {
          nama_kategori: "L QUEENLY",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama_kategori: "L MTH AKSESORIS (IM)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama_kategori: "L MTH TABUNG (LK)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama_kategori: "SP MTH SPAREPART (LK)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama_kategori: "CI MTH TINTA LAIN (IM)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama_kategori: "L MTH AKSESORIS (LK)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama_kategori: "S MTH STEMPEL (IM)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Kategoris", null, {});
  },
};
