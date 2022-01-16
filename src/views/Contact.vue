<template>
<section class="main-content-section py-5" style="margin-top: 100px;">
  <div class="container">
    <h1 class="text-color">{{$t('h-header-1')}}</h1>
    <div class="row justify-content-center">
      <div class="col-xs-12 col-lg-10">
        <div class="card card-body border-0 shadow">
          <div class="row">
            <div class="col-xs-12 col-lg-5">
              <div class="card py-5 card-body card-contact bg-theme" data-aos="fade-up" data-aos-duration="1000">
                <h1>{{$t('contact')}}</h1>
                <!-- ========= 1 ========= -->
                <div class="row align-items-center mb-4">
                  <div class="offset-1 col-3 icon-part me-3">
                  <i class="uil uil-map-marker"></i>
                  </div>
                  <div class="col-8 media-body">
                    <h6 class="mt-0 text-white">{{$t('f-locat')}}</h6>
                  </div>
                </div>
                <!-- ========= 2 ========= -->
                <div class="row align-items-center mb-4">
                  <div class="offset-1 col-3 icon-part me-3">
                  <i class="uil uil-envelope"></i>
                  </div>
                  <div class="col-8 media-body">
                    <h6 class="mt-0 text-white">info@alzwahed.com</h6>
                  </div>
                </div>
                <!-- ========= 3 ========= -->
                <div class="row align-items-center mb-4">
                  <div class="offset-1 col-3 icon-part me-3">
                  <i class="uil uil-phone"></i>
                  </div>
                  <div class="col-8 media-body">
                    <h6 class="mt-0 text-white">+966112155556 +966112694443 +966114565074 +966112003232</h6>
                  </div>
                </div>
                <!-- ========= end ========= -->
              </div>
            </div>
            <!-- ========= 3 ========= -->
            <div class="col-xs-12 col-lg-7 mt-3" data-aos="fade-down" data-aos-duration="1000">
              <form @submit.prevent="sendContact">
                <div class="form-group">
                  <label for="name">{{$t('name')}}</label>
                  <input type="text" class="form-control" id="name" v-model="name">
                </div>
                <div class="form-group">
                  <label for="phone">{{$t('phone')}}</label>
                  <input type="text" class="form-control" id="phone" v-model="phone">
                </div>
                <div class="form-group">
                  <label for="email">{{$t('mail')}}</label>
                  <input type="text" class="form-control" id="email" v-model="email">
                </div>
                <div class="form-group">
                  <label class="mt-2 mb-2" for="checkbox">{{$t('radio')}}</label>
                  <div class="row">
                    <div class="col-6 mb-2"><MDBCheckbox :label="security" v-model="check1" /></div>
                    <div class="col-6 mb-2"><MDBCheckbox :label="it" v-model="check2" /></div>
                    <div class="col-6 mb-2"><MDBCheckbox :label="logistics" v-model="check3" /></div>
                    <div class="col-6 mb-2"><MDBCheckbox :label="clearance" v-model="check4" /></div>
                    <div class="offset-3 col-6 mb-2"><MDBCheckbox :label="contarcting" v-model="check5" /></div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="message">{{$t('comment')}}</label>
                  <textarea class="form-control" id="message" rows="10" v-model="message"></textarea>
                </div>
                <div class="text-center mt-3">
                  <button type="submit" value="submit" class="btn btn-success">{{$t('subm')}}</button>
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
    name:"Contact",
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
      MDBCheckbox
    },
    computed: {
      security(){
        return this.$t('security')
      },
      logistics(){
        return this.$t('logistics')
      },
      it(){
        return this.$t('it')
      },
      clearance(){
        return this.$t('clearance')
      },
      contarcting(){
        return this.$t('contarcting')
      }
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
        phone: this.phone,
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
      const response = await axios.post("https://pacific-brushlands-68509.herokuapp.com/contact", data);
      console.log(response.data);
      if (response.status == 200) {
        alert("Success, Thanks");
      }
    },
  },
  };
</script>

<style scoped>
.bg-theme{
  background: hsl(136, 95%, 30%) !important;
}
.card-contact h1{
  color: #fff;
  font-size: 30px;
  position: relative;
  margin-bottom: 40px;
}
.card-contact h1::before{
  content: "";
  height: 3px;
  width: 150px;
  background: #fff;
  position: absolute;
  bottom: -10px;
}
.icon-part{
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