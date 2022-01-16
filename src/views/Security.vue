<template>
    <MDBCarousel v-model="carousel" :items="items" fade/>
    <!--==================== main background ====================-->
    <div class="switch-color mt-5 mb-5">
    <div class="container all-logos">
        <div class="row d-flex align-items-center">
            <div class="col-xs-12 col-lg-5" data-aos="fade-left" data-aos-duration="1000">
                <img src="@/assets/security.png" class="img-fluid">
            </div>
            <div class="col-xs-12 col-lg-7 text-center" data-aos="fade-right" data-aos-duration="1000">
                <h2 class="text-center font-weight-bolder secur-title-color">{{$t('secure-header')}}</h2>
                <p class="text-color">
                    {{$t('secure-prag')}}
                </p>
                <button class="btn btn-color">{{$t('h-main-btn')}}</button>
            </div>
        </div>
    </div>
    </div>
    <!--==================== why us ====================-->
    <section class="container mb-5">
        <div class="row">
            <div class="col-md-6 col-sm-12 mb-4" data-aos="fade-up" data-aos-duration="1000">
                <div class="card border-0 shadow rounded-xs pt-5">
                    <div class="card-body"> <i class="uil uil-eye icon-lg icon-color icon-bg-color icon-bg-circle mb-3"></i>
                        <h4 class="mt-4 mb-3 fon">{{$t('vision-header')}}</h4>
                        <p>{{$t('secure-card-1-parg')}}
                            <br>
                            <br>
                            <br>
                            .
                            </p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-sm-12 mb-4" data-aos="fade-down" data-aos-duration="1000">
                <div class="card border-0 shadow rounded-xs pt-5">
                    <div class="card-body"> <i class="uil uil-constructor icon-lg icon-color icon-bg-color icon-bg-circle mb-3"></i>
                        <h4 class="mt-4 mb-3 fon">{{$t('mission-header')}}</h4>
                        <p>{{$t('secure-card-2-parg')}}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--==================== sevices ====================-->
    <div class="switch-color">
    <section class="container mb-5">
        <h1 class="text-center section-title">{{$t('services')}}</h1>
        <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3" data-aos="zoom-out" data-aos-duration="1000">
                <div class="row col-auto m-5">
                <i class="uil uil-user-md text-center icon"></i>
                <h3 class="text-center">{{$t('secure-serve-icon-1')}}</h3>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3" data-aos="zoom-in" data-aos-duration="1000">
                <div class="row col-auto m-5">
                <i class="uil uil-cog text-center icon"></i>
                <h3 class="text-center">{{$t('secure-serve-icon-2')}}</h3>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3" data-aos="zoom-out" data-aos-duration="1000">
                <div class="row col-auto m-5">
                <i class="uil uil-building text-center icon"></i>
                <h3 class="text-center">{{$t('secure-serve-icon-3')}}</h3>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3" data-aos="zoom-in" data-aos-duration="1000">
                <div class="row col-auto m-5">
                <i class="uil uil-window text-center icon"></i>
                <h3 class="text-center">{{$t('secure-serve-icon-4')}}</h3>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3" data-aos="zoom-out" data-aos-duration="1000">
                <div class="row col-auto m-5">
                <i class="uil uil-users-alt text-center icon"></i>
                <h3 class="text-center">{{$t('secure-serve-icon-5')}}</h3>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3" data-aos="zoom-in" data-aos-duration="1000">
                <div class="row col-auto m-5">
                <i class="uil uil-money-insert text-center icon"></i>
                <h3 class="text-center">{{$t('secure-serve-icon-6')}}</h3>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3" data-aos="zoom-out" data-aos-duration="1000">
                <div class="row col-auto m-5">
                <i class="uil uil-user-circle text-center icon"></i>
                <h3 class="text-center">{{$t('secure-serve-icon-7')}}</h3>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3" data-aos="zoom-in" data-aos-duration="1000">
                <div class="row col-auto m-5">
                <i class="uil uil-bill text-center icon"></i>
                <h3 class="text-center">{{$t('secure-serve-icon-8')}}</h3>
                </div>
            </div>
        </div>
    </section>
    </div>
    <!--==================== contact for ====================-->
    <section class="container mb-5 text-center">
        <MDBRow>
            <MDBCol xs="12" md="6" data-aos="zoom-out" data-aos-duration="1000">
            <MDBCard>
                <MDBCardBody>
                <MDBCardTitle>{{$t('secure-contact1-header')}}</MDBCardTitle>
                <MDBCardText>
                    {{$t('secure-contact1-parg')}}
                </MDBCardText>
                <MDBBtn tag="a" href="#!" color="primary" aria-controls="contact1Label" @click="contact1 = true">{{$t('secure-cantact-btn')}}</MDBBtn>
                </MDBCardBody>
            </MDBCard>
            </MDBCol>
            <MDBCol xs="12" md="6" data-aos="zoom-out" data-aos-duration="1000">
            <MDBCard>
                <MDBCardBody>
                <MDBCardTitle>{{$t('secure-contact2-header')}}</MDBCardTitle>
                <MDBCardText>
                    {{$t('secure-contact2-parg')}}
                    <br>.
                </MDBCardText>
                <MDBBtn tag="a" href="#!" color="primary" aria-controls="contact2Label" @click="contact2 = true">{{$t('secure-cantact-btn')}}</MDBBtn>
                </MDBCardBody>
            </MDBCard>
            </MDBCol>
        </MDBRow>
    </section>
    <!--=================== modal 1 =======================-->
    <MDBModal id="contact1" tabindex="-1" labelledby="contact1Label" v-model="contact1" contact1>
        <MDBModalHeader class="modalHead">
        <MDBModalTitle id="contact1Label"> {{$t('secure-contact1-header')}} </MDBModalTitle>
        </MDBModalHeader>
        <MDBModalBody>
            <form @submit.prevent="sendSec0">
                <div class="form-group">
                    <label for="name">{{$t('name')}}</label>
                    <input type="text" class="form-control" id="name0" v-model="name">
                </div>
                <div class="form-group">
                    <label for="phone">{{$t('phone')}}</label>
                    <input type="text" class="form-control" id="phone0" v-model="phone">
                </div>
                <div class="form-group">
                    <label for="email">{{$t('mail')}}</label>
                    <input type="text" class="form-control" id="email0" v-model="email">
                </div>
                <div class="form-group">
                    <label class="mt-2 mb-2" for="checkbox">Select a guard plan :</label>
                    <div class="row">
                        <div class="col-4 mb-2"><MDBCheckbox :label="madal1"  v-model="check1" /></div>
                        <div class="col-4 mb-2"><MDBCheckbox :label="madal2"  v-model="check2" /></div>
                        <div class="col-4 mb-2"><MDBCheckbox :label="madal3"  v-model="check3" /></div>
                        <div class="col-4 mb-2"><MDBCheckbox :label="madal4"  v-model="check4" /></div>
                        <div class="col-4 mb-2"><MDBCheckbox :label="madal5"  v-model="check5" /></div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="message">{{$t('comment')}}</label>
                    <textarea class="form-control" id="message" rows="10" v-model="message0"></textarea>
                </div>
                <div class="text-center mt-3">
                    <button type="submit" class="btn btn-success">Submit</button>
                </div>
            </form>
        </MDBModalBody>
    </MDBModal>
    <!--=================== modal 2 =======================-->
    <MDBModal id="contact2" tabindex="-1" labelledby="contact2Label" v-model="contact2" contact2>
        <MDBModalHeader>
        <MDBModalTitle id="contact2Label"> {{$t('secure-contact2-header')}} </MDBModalTitle>
        </MDBModalHeader>
        <MDBModalBody>
            <form @submit.prevent="sendSec2">
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
                <MDBRadio :label="madal6" value="option1" v-model="radio2" inline name="inlineRadioOptions" />
                <MDBRadio :label="madal7" value="option2" v-model="radio2" inline name="inlineRadioOptions" />
                <MDBRadio :label="madal8" value="option2" v-model="radio2" inline name="inlineRadioOptions" />
                <div class="form-group">
                    <label for="message">{{$t('comment')}}</label>
                    <textarea class="form-control" id="message" rows="10" v-model="message"></textarea>
                </div>
                <div class="text-center mt-3">
                    <button type="submit" class="btn btn-success">Submit</button>
                </div>
            </form>
        </MDBModalBody>
    </MDBModal>
</template>

<script>
import { ref } from "vue";
import { MDBCarousel, MDBRow, MDBCol, MDBCard, MDBCardBody,  MDBCardTitle, MDBCardText, MDBBtn, MDBModal, MDBModalHeader, MDBModalTitle, MDBModalBody, MDBCheckbox, MDBRadio} from "mdb-vue-ui-kit";
import axios from "axios";
export default {
name:"Security",
data() {
    return {
        name0: "",
        phone0: "",
        email0: "",
        message0: "",
        check1: false,
        check2: false,
        check3: false,
        check4: false,
        check5: false,
        name: "",
        phone: "",
        email: "",
        radio2: "",
        message: "",
    };
},
computed:{
    madal1(){
        return this.$t('secur-serv1')
    },
    madal2(){
        return this.$t('secur-serv2')
    },
    madal3(){
        return this.$t('secur-serv3')
    },
    madal4(){
        return this.$t('secur-serv4')
    },
    madal5(){
        return this.$t('secur-serv5')
    },
    madal6(){
        return this.$t('secur-serv6')
    },
    madal7(){
        return this.$t('secur-serv7')
    },
    madal8(){
        return this.$t('secur-serv8')
    },
},
components: {
    MDBCarousel,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn,
    MDBModal,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBCheckbox,
    MDBRadio,
},
methods: {
    async sendSec0() {
        let data = {
            name: this.name0,
            phone: this.phone0,
            email: this.email0,
            message: this.message0
        };
        const check1 = "personal guard";
        const check2 = "Occasions";
        const check3 = "comp";
        const check4 = "Factories";
        const check5 = "Institutions";
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
        const response = await axios.post(
            "https://pacific-brushlands-68509.herokuapp.com/security/one",
            data
        );
        console.log(response.data);
        if (response.status == 200) {
            alert("Success, Thanks");
        }
    },
    async sendSec2() {
        const data = {
            name: this.name,
            phone: this.phone,
            email: this.email,
            radio2: this.radio2,
            message: this.message,
        };
        const response = await axios.post(
            "https://pacific-brushlands-68509.herokuapp.com/security/two",
            data
        );
        if (response.status == 200) {
            alert("Success, Thanks");
        }
    },
},
setup() {
    const contact1 = ref(false);
    const contact2 = ref(false);
    const items = [
    {
        src: "/img/security-bg1.jpg",
        alt: "alzawahed security"
    },
    {
        src: "/img/security-bg2.jpg",
        alt: "alzawahed security"
    },
    {
        src: "/img/security-bg3.jpg",
        alt: "alzawahed security"
    }
    ];
    const carousel = ref(0);
    const checkbox1 = ref(true);
    const checkbox2 = ref(false);
    const checkbox3 = ref(false);
    const checkbox4 = ref(false);
    const checkbox5 = ref(false);
    return {
    items,
    carousel,
    contact1,
    contact2,
    checkbox1,
    checkbox2,
    checkbox3,
    checkbox4,
    checkbox5,
    };
}
};
</script>

<style scoped>
/* modal */
html.ar btn-close{
    float: right;
}
/* modal */
.btn-color{
    background-color: hsl(222deg 91% 33%);
    color: var(--container-color);
}
/*==================== Why Us ====================*/
.section-title {
    margin-bottom: 38px;
}
.secur-title-color{
    color: hsl(222, 91%, 33%);
}
.shadow,
.subscription-wrapper {
    box-shadow: 0px 15px 39px 0px rgba(8, 18, 109, 0.1) !important;
}
.shadow{
    text-align: center;
}
.icon-bg-circle {
    position: relative;
}
.icon-lg {
    font-size: 50px;
}
.icon-bg-circle::before {
    z-index: 1;
    position: relative
}
.icon-bg-circle::after {
    content: '';
    position: absolute;
    width: 68px;
    height: 68px;
    top: -30px;
    left: -8px;
    border-radius: 50%;
    background: inherit;
    opacity: .1
}
p,
.paragraph {
    font-weight: 400;
    color: #8b8e93;
    font-size: 15px;
    line-height: 1.6;
    font-family: "Open Sans", sans-serif;
}
.icon-color{
    color: #0836a1;
}
.icon-bg-color::after{
    background: hsl(222, 95%, 80%) !important;
}
.fon{
    color: var(--text-color);
}
.icon{
    font-size: 50px;
    color: #0836a1;
}
.switch-color{
    background: hsl(220, 99%, 99%);
}
.section-title{
    padding-top: 25px;
    color: #297401;
}
.footer__bg{
    background-color: hsl(223, 91%, 18%) !important;
    padding: 2rem .5rem 3rem;
    bottom: 0;
}
</style>