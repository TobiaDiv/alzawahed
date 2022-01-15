<template>
  <section class="main-content-section py-5" style="margin-top: 100px">
    <div class="container">
      <h1 class="text-color">alzawahed Group</h1>
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="card card-body border-0 shadow">
            <div class="row">
              <div class="col-lg-5">
                <div class="card py-5 card-body card-contact bg-theme">
                  <h1>Contact Us</h1>
                  <!-- ========= 1 ========= -->
                  <div class="row align-items-center mb-4">
                    <div class="offset-1 col-6 icon-part me-3">
                      <i class="uil uil-map-marker"></i>
                    </div>
                    <div class="col-6 media-body">
                      <h5 class="mt-0 text-white">
                        Saudi arabia - Riyadh - Alwaha
                      </h5>
                    </div>
                  </div>
                  <!-- ========= 2 ========= -->
                  <div class="row align-items-center mb-4">
                    <div class="offset-1 col-6 icon-part me-3">
                      <i class="uil uil-envelope"></i>
                    </div>
                    <div class="col-6 media-body">
                      <h5 class="mt-0 text-white">info@alzwahed.com</h5>
                    </div>
                  </div>
                  <!-- ========= 3 ========= -->
                  <div class="row align-items-center mb-4">
                    <div class="offset-1 col-6 icon-part me-3">
                      <i class="uil uil-phone"></i>
                    </div>
                    <div class="col-6 media-body">
                      <h5 class="mt-0 text-white">
                        +966112155556 +966112694443 +966114565074 +966112003232
                      </h5>
                    </div>
                  </div>
                  <!-- ========= end ========= -->
                </div>
              </div>
              <!-- ========= 3 ========= -->
              <div class="col-lg-7">
                <form @submit.prevent="sendContact">
                  <div class="form-group">
                    <label>NAME</label>
                    <input type="text" v-model="name" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label for="phone">PHONE NUMBER</label>
                    <input
                      type="text"
                      v-model="phone"
                      class="form-control"
                      id="phone"
                    />
                  </div>
                  <div class="form-group">
                    <label for="email">EMAIL</label>
                    <input
                      type="email"
                      v-model="email"
                      class="form-control"
                      id="email"
                    />
                  </div>
                  <div class="form-group">
                    <label class="mt-2 mb-2">Service you Intersted with</label>
                    <div class="row">
                      <div class="col-6 mb-2">
                        <MDBCheckbox
                          v-model="check1"
                          label="Alzawahed Services & Security Guards"
                        />
                      </div>
                      <div class="col-6 mb-2">
                        <MDBCheckbox
                          v-model="check2"
                          label="Alzawahed IT Solution"
                        />
                      </div>
                      <div class="col-6 mb-2">
                        <MDBCheckbox
                          v-model="check3"
                          label="Alzawahed Freight & logistics"
                        />
                      </div>
                      <div class="col-6 mb-2">
                        <MDBCheckbox
                          v-model="check4"
                          label="Alzawahed Custom Clearance"
                        />
                      </div>
                      <div class="offset-3 col-6 mb-2">
                        <MDBCheckbox
                          v-model="check5"
                          label="Alzawahed General Contracting"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="message">COMMENT OR MESSAGE</label>
                    <textarea
                      class="form-control"
                      id="message"
                      v-model="message"
                      rows="10"
                    ></textarea>
                  </div>
                  <div class="text-center mt-3">
                    <button
                      type="submit"
                      value="submit"
                      class="btn btn-success"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { MDBCheckbox } from "mdb-vue-ui-kit";
import axios from "axios";

export default {
  name: "Contact",
  data() {
    return {
      name: "",
      phone: "",
      email: "",
      check1: false,
      check2: false,
      check3: false,
      check4: false,
      check5: false,
    };
  },
  components: {
    MDBCheckbox,
  },
  methods: {
    async sendContact() {
      const check1 = "Alzawahed Services & Security Guards";
      const check2 = "Alzawahed IT Solution";
      const check3 = "Alzawahed Freight & logistics";
      const check4 = "Alzawahed Custom Clearance";
      const check5 = "Alzawahed General Contracting";
      let data = {
        name: this.name,
        email: this.email,
        message: this.message,
      };
      if (this.check1 != false) {
        data = { ...data, check1 };
      }
      if (this.check2 != false) {
        data = { ...data, check2 };
      }
      if (this.check2 != false) {
        data = { ...data, check2 };
      }
      if (this.check3 != false) {
        data = { ...data, check3 };
      }
      if (this.check4 != false) {
        data = { ...data, check4 };
      }
      if (this.check5 != false) {
        data = { ...data, check5 };
      }
      const response = await axios.post("https://thawing-savannah-66649.herokuapp.com/contact", data);
      console.log(response.data);
      if (response.status == 200) {
        alert("Success, Thanks");
      }
    },
  },
};
</script>

<style scoped>
.bg-theme {
  background: hsl(136, 95%, 30%) !important;
}
.card-contact {
  margin-left: -130px;
}
.card-contact h1 {
  color: #fff;
  font-size: 30px;
  position: relative;
  margin-bottom: 40px;
}
.card-contact h1::before {
  content: "";
  height: 3px;
  width: 150px;
  background: #fff;
  position: absolute;
  bottom: -10px;
}
.icon-part {
  height: 50px;
  width: 50px;
  border: 2px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 20px;
  border-radius: 50%;
}
</style>
