<template>
  <div class="container mt-4">
    <h1>{{ isEdit ? "Edit Produk" : "Add New Produk" }}</h1>

    <form @submit.prevent="saveProduct" class="mt-3">
      <div class="form-group">
        <label for="productName">Product Name:</label>
        <input
          type="text"
          v-model="productName"
          class="form-control"
          required
        />
        <small v-if="!price" class="text-danger">Name is required.</small>
      </div>
      <br />
      <div class="form-group">
        <label for="price">Price:</label>
        <input type="number" v-model="price" class="form-control" required />
        <small v-if="!price" class="text-danger">Price is required.</small>
      </div>
      <br />
      <div class="form-group">
        <label for="status">Status:</label>
        <select v-model="status" class="form-control" required>
          <option value="1">Tersedia</option>
          <option value="2">Tidak Tersedia</option>
        </select>
      </div>
      <br />
      <div class="form-group">
        <label for="category">Category:</label>
        <select v-model="category" class="form-control" required>
          <option value="1">L QUEENLY</option>
          <option value="2">L MTH AKSESORIS (IM)</option>
          <option value="3">L MTH TABUNG (LK)</option>
          <option value="4">SP MTH SPAREPART (LK)</option>
          <option value="5">CI MTH TINTA LAIN (IM)</option>
          <option value="6">L MTH AKSESORIS (LK)</option>
          <option value="7">S MTH STEMPEL (IM)</option>
        </select>
      </div>
      <br />
      <button type="submit" class="btn btn-primary">
        {{ isEdit ? "Update Product" : "Add Product" }}
      </button>
    </form>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  data() {
    return {
      productName: "",
      price: 0,
      status: "1",
      category: "1",
      isEdit: false,
      productId: null,
    };
  },
  created() {
    if (this.$route.query.id) {
      this.isEdit = true;
      this.productId = this.$route.query.id;
      this.fetchExistingData(this.productId);
    } else {
      this.isEdit = false;
    }
  },

  methods: {
    async fetchExistingData(productId) {
      try {
        const response = await Axios.get(
          `http://localhost:3000/produks/${productId}`
        );

        this.productName = response.data.nama_produk;
        this.price = response.data.harga;
        this.category = response.data.kategori_id.toString();
        this.status = response.data.status_id.toString();
      } catch (error) {
        console.error("Error fetching existing data:", error);
      }
    },
    async saveProduct() {
      try {
        const requestData = {
          nama_produk: this.productName,
          harga: this.price,
          kategori_id: parseInt(this.category),
          status_id: parseInt(this.status),
        };

        if (this.isEdit) {
          await Axios.put(
            `http://localhost:3000/produks/${this.productId}`,
            requestData
          );
        } else {
          await Axios.post("http://localhost:3000/produks/", requestData);
        }

        this.$router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
