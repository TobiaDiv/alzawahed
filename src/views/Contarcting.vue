<template>
    <!-- Background image -->
    <div class="p-5 text-center bg-image" alt="Wild Landscape">
        <div class="mask" style="background-color: rgba(0, 0, 0, 0.6);">
            <div class="d-flex justify-content-center align-items-center h-100">
                <div class="text-white">
                    <h1 class="mb-3">{{$t('con-header-1')}}</h1>
                    <h4 class="mb-3">{{$t('con-header-2')}}</h4>
                    <MDBBtn tag="a" lg outline="light" href="#!" role="button">{{$t('contact')}}</MDBBtn>
                </div>
            </div>
        </div>
    </div>
    <!-- Background image -->
    <div class="all-logos">
        <div class="container mt-5 mb-5">
            <div class="row d-flex align-items-center">
                <div class="col-xs-12 col-md-6" data-aos="fade-left" data-aos-duration="1000">
                    <img src="@/assets/contracting-logo.jpg" class="img-fluid">
                </div>
                <div class="col-xs-12 col-md-6 text-center" data-aos="fade-right" data-aos-duration="1000">
                    <h2 class="text-center font-weight-bolder secur-title-color header">{{$t('con-header-3')}}</h2>
                    <p class="subtitle">
                        {{$t('con-prag-1')}}
                    </p>
                    <button class="btn btn-color">{{$t('h-main-btn')}}</button>
                </div>
            </div>
        </div>
    </div>
    <section class="container mt-5 mb-5">
        <h1 class="text-center m-5 header">{{$t('con-header-4')}}<hr></h1>
        <div class="row">
            <div class="col-xs-12 col-md-12 mb-3 d-flex justify-content-center" data-aos="fade" data-aos-duration="1000">
                <MDBCard>
                    <MDBCardBody>
                        <MDBCardTitle class="title"><i class="uil uil-building icon"></i>  | {{$t('con-card-title1')}}</MDBCardTitle>
                        <MDBCardText class="subtitle">
                            {{$t('con-card-text')}}
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </div>
            <div class="col-xs-12 col-md-6 mb-3 d-flex justify-content-center" data-aos="fade" data-aos-duration="1000">
                <MDBCard>
                    <MDBCardBody>
                        <MDBCardTitle class="title"><i class="uil uil-layers icon"></i>  | {{$t('con-card-title2')}}</MDBCardTitle>
                        <MDBCardText class="subtitle">
                            {{$t('con-card-text')}}
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </div>
            <div class="col-xs-12 col-md-6 mb-3 d-flex justify-content-center" data-aos="fade" data-aos-duration="1000">
                <MDBCard>
                    <MDBCardBody>
                        <MDBCardTitle class="title"><i class="uil uil-wrench icon"></i>  | {{$t('con-card-title3')}}</MDBCardTitle>
                        <MDBCardText class="subtitle">
                            {{$t('con-card-text')}}
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </div>
            <div class="col-xs-12 col-md-6 mb-3 d-flex justify-content-center" data-aos="fade" data-aos-duration="1000">
                <MDBCard>
                    <MDBCardBody>
                        <MDBCardTitle class="title"><i class="uil uil-lightbulb icon"></i>  | {{$t('con-card-title4')}}</MDBCardTitle>
                        <MDBCardText class="subtitle">
                            {{$t('con-card-text')}}
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </div>
            <div class="col-xs-12 col-md-6 mb-3 d-flex justify-content-center" data-aos="fade" data-aos-duration="1000">
                <MDBCard>
                    <MDBCardBody>
                        <MDBCardTitle class="title"><i class="uil uil-desktop icon"></i>  | {{$t('con-card-title5')}}</MDBCardTitle>
                        <MDBCardText class="subtitle">
                            {{$t('con-card-text')}}
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </div>
        </div>
    </section>
    <section class="container mt-5 mb-5">
        <h1 class="text-center m-5 header">{{$t('h-header-photo2')}}<hr></h1>
        <div class="row">
            <div class="col-xs-12 col-md-6 col-lg-4">
                <img src="@/assets/contract/contract01.jpg" width="400px" alt="">
            </div>
            <div class="col-xs-12 col-md-6 col-lg-4">
                <img src="@/assets/contract/contract02.jpg" width="400px" alt="">
            </div>
            <div class="col-xs-12 col-md-6 col-lg-4">
                <img src="@/assets/contract/contract03.jpg" width="400px" alt="">
            </div>
            <div class="col-xs-12 col-md-6 col-lg-4">
                <img src="@/assets/contract/contract04.jpg" width="400px" alt="">
            </div>
            <div class="col-xs-12 col-md-6 col-lg-4">
                <img src="@/assets/contract/contract05.jpg" width="400px" alt="">
            </div>
            <div class="col-xs-12 col-md-6 col-lg-4">
                <img src="@/assets/contract/contract06.jpg" width="400px" alt="">
            </div>
        </div>
    </section>
    <section class="container mt-5 mb-5">
        <h1 class="text-center m-5 header">{{$t('contact')}}<hr></h1>
        <div class="row">
            <div class="col-xs-12 col-lg-4 bg" data-aos="fade-up" data-aos-duration="1000">
                <div class="m-5">
                    <h1>{{$t('logi-mission-header1')}}</h1>
                    <p>{{$t('logi-h1-prag')}}</p>
                </div>
                <div class="m-5">
                    <h1>{{$t('logi-mission-header2')}}</h1>
                    <p><strong>{{$t('logi-h2-prag1')}}</strong> {{$t('logi-h2-prag4')}}</p>
                    <p><strong>{{$t('logi-h2-prag2')}}</strong> {{$t('logi-h2-prag3')}}</p>
                </div>
                <div class="m-5">
                    <h1>{{$t('logi-mission-header3')}}</h1>
                    <p><strong>{{$t('logi-h3-prag1')}}</strong> 920004251</p>
                    <p><strong>{{$t('logi-h3-prag2')}}</strong>  info@alzawahed.com</p>
                </div>
                <div class="m-5">
                    <a href="" class="me-4 text-reset">
                        <i class="uil uil-facebook-f contact-icons"></i>
                    </a>
                    <a href="" class="me-4 text-reset">
                        <i class="uil uil-instagram contact-icons"></i>
                    </a>
                    <a href="" class="me-4 text-reset">
                        <i class="uil uil-twitter-alt contact-icons"></i>
                    </a>
                    <a href="" class="me-4 text-reset">
                        <i class="uil uil-envelope contact-icons"></i>
                    </a>
                </div>
            </div>
            <div class="col-xs-12 col-lg-8" data-aos="fade-down" data-aos-duration="1000">
                <dir>
                    <h1 class="header m-2">{{$t('con-header-4')}}</h1>
                    <p class="subtitle ms-3 mb-4">{{$t('con-send')}}</p>
                </dir>
                <form @submit.prevent="sendContract">
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
                    <div class="col-6 mb-2"><MDBCheckbox :label="select1" v-model="check1"/></div>
                    <div class="col-6 mb-2"><MDBCheckbox :label="select2" v-model="check2"/></div>
                    <div class="col-6 mb-2"><MDBCheckbox :label="select3" v-model="check3"/></div>
                    <div class="col-6 mb-2"><MDBCheckbox :label="select4" v-model="check4"/></div>
                    <div class="offset-3 col-6 mb-2"><MDBCheckbox :label="select5" v-model="check5"/></div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="message">{{$t('comment')}}</label>
                  <textarea class="form-control" id="message" rows="10" v-model="message"></textarea>
                </div>
                <div class="text-center mt-3">
                  <button type="submit" class="btn btn-primary">{{$t('subm')}}</button>
                </div>
              </form>
            </div>
        </div>
    </section>
</template>

<script>
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCheckbox} from 'mdb-vue-ui-kit';
import axios from "axios";
export default {
    name:"Contarcting",
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
            message: "",
        };
    },
    components:{
        MDBBtn,
        MDBCard,
        MDBCardBody,
        MDBCardTitle,
        MDBCardText,
        MDBCheckbox
    },
    computed:{
        select1(){
            return this.$t('con-select1')
        },
        select2(){
            return this.$t('con-select2')
        },
        select3(){
            return this.$t('con-select3')
        },
        select4(){
            return this.$t('con-select4')
        },
        select5(){
            return this.$t('con-select5')
        }
    },
    methods: {
    async sendContract() {
      const check1 = "Construction and reconstruction";
      const check2 = "Infrastructure and infrastructure";
      const check3 = "Maintenance and hygiene";
      const check4 = "Designs and decoration";
      const check5 = "Agriculture";
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
      const response = await axios.post("https://pacific-brushlands-68509.herokuapp.com/contract", data);
      console.log(response);
      if (response.status == 200) {
        alert("Success, Thanks");
        this.name= "";
            this.phone= "";
            this.email= "";
            this.check1= false;
            this.check2= false;
            this.check3= false;
            this.check4= false;
            this.check5= false;
            this.message= "";
      }
    },
  },
}
</script>

<style scoped>
.bg-image{
    background-image: url('../assets/contract/cbg.jpg');
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    height: 500px;
    margin-top: 110px
}
.header{
    color: #223f90;
}
.btn-color{
    color: #fff;
    background: #223f90;
}
.title{
    font-size: 25px;
    color: hsl(240, 12%, 53%);
}
.subtitle{
    color: hsl(240, 5%, 60%);
}
.icon{
    font-size: 35px;
    color: #0836a1;
}
.bg{
    color: #fff;
    background: #0836a1;
}
.contact-icons{
    font-size: 25px;

}
</style>