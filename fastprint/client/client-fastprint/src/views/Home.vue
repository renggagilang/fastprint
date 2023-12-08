<template>
  <div class="container mt-4">
    <h1>Data Produk</h1>
    <button @click="goToAddProduct" class="btn btn-primary">Add Product</button>
    <br />
    <label for="statusFilter" class="mt-3">Filter by Status:</label>
    <select
      v-model="selectedStatus"
      @change="filterProducts"
      class="form-control"
    >
      <option value="">All</option>
      <option value="bisa dijual">Bisa Dijual</option>
    </select>
    <table class="table table-bordered mt-3">
      <thead class="thead-dark">
        <tr>
          <th>ID</th>
          <th>Nama Produk</th>
          <th>Harga</th>
          <th>Kategori</th>
          <th>Status</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="produk in filteredProduks" :key="produk.id">
          <td>{{ produk.id }}</td>
          <td>{{ produk.nama_produk }}</td>
          <td>{{ produk.harga }}</td>
          <td>{{ produk.Kategori.nama_kategori }}</td>
          <td>{{ produk.Status.nama_status }}</td>
          <td>
            <button @click="confirmDelete(produk.id)" class="btn btn-danger">
              Hapus
            </button>
            <button @click="goToEditProduct(produk.id)" class="btn btn-warning">
              Edit
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      produks: [],
      selectedStatus: "",
    };
  },
  computed: {
    filteredProduks() {
      if (!this.selectedStatus) {
        return this.produks;
      }
      return this.produks.filter(
        (produk) => produk.Status.nama_status === this.selectedStatus
      );
    },
  },
  mounted() {
    this.fetchDataFromAPI();
  },
  methods: {
    async fetchDataFromAPI() {
      try {
        const response = await Axios.get("http://localhost:3000/produks");
        this.produks = response.data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    async deleteProduk(id) {
      try {
        const response = await Axios.delete(
          `http://localhost:3000/produks/${id}`
        );
        console.log(response.data.message);
        Swal.fire("Success", "Your item has been deleted.", "success");
        this.fetchDataFromAPI();
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    },
    confirmDelete(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You will not be able to recover this item!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteProduk(id);
        }
      });
    },
    goToAddProduct() {
      this.$router.push({ name: "AddProduct" });
    },
    goToEditProduct(id) {
      this.$router.push({ name: "AddProduct", query: { id } });
    },
  },
};
</script>

<style></style>
