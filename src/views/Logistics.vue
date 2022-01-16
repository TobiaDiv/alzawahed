<template>
    <!-- Background image -->
    <div class="p-5 text-center bg-image" alt="Wild Landscape" style="z-index:-1">
        <div class="mask" style="background-color: rgba(0, 0, 0, 0.6);">
            <div class="d-flex justify-content-center align-items-center h-100">
                <div class="text-white">
                    <h1 class="font-weight-bold mb-3">{{$t('logi-header-caru')}} <span style="color:#ffb800"> {{$t('logi-header-caru2')}}</span></h1>
                    <button class="btn btn-outline-light rounded-pill">{{$t('logi-btn-caru1')}}</button>
                    <button class="btn btn-color ms-3 rounded-pill"><i class="uil uil-chart"></i> {{$t('logi-btn-caru2')}}</button>
                </div>
            </div>
        </div>
    </div>
    <!-- nums -->
    <section class="container" style="z-index: 100;">
        <div class="row my-card-container p-5">
            <div class="col my-card d-flex justify-content-between">
                <div><i class="uil uil-smile title-color fs-1 text-center"></i></div>
                <div>
                <h3 class="title-color text-center">{{$t('logi-nums-header')}}</h3>
                <p class="text-center">{{$t('logi-nums-header1')}}</p>
                </div>
            </div>
            <div class="col my-card">
                <h3 class="title-color text-center">12345</h3>
                <p class="text-center">{{$t('logi-nums-header2')}}</p>
            </div>
            <div class="col my-card">
                <h3 class="title-color text-center">12345</h3>
                <p class="text-center">{{$t('logi-nums-header3')}}</p>
            </div>
            <div class="col my-card">
                <h3 class="title-color text-center">12345</h3>
                <p class="text-center">{{$t('logi-nums-header4')}}</p>
            </div>
        </div>
    </section>
    <!-- Background image -->
    <section class="container">
        <div class="row d-flex align-items-center">
            <div class="col-xs-12 col-md-6" data-aos="fade-left" data-aos-duration="1000">
                <img src="@/assets/logistics-logo-final.png" class="img-fluid">
            </div>
            <div class="col-xs-12 col-md-6 text-center" data-aos="fade-right" data-aos-duration="1000">
                <h2 class="text-center font-weight-bolder title-color mb-4">{{$t('logistics')}}</h2>
                <p class="subtitle mb-4">
                    {{$t('logi-prag1')}}
                </p>
                <button class="btn btn-color"><i class="uil uil-columns"></i> {{$t('logi-btn')}}</button>
            </div>
        </div>
    </section>
    <!-- Awesome Services -->
    <section class="mt-5 mb-5 p-5" style="background: #f5f5f5">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-lg-3" data-aos="fade-down" data-aos-duration="1000">
                    <div class="bg-secondary left-hand-path d-flex align-items-centers" style="flex-direction: column">
                        <h4 class="font-weight-bold text-center text-light mb-2">{{$t('logi-aou-left')}}</h4>
                        <h1 class="font-weight-bold text-center text-light">$250</h1>
                        <button class="btn btn-color-alt text-light btn-center">{{$t('logi-btn')}} <i class="uil uil-arrow-right"></i></button>
                    </div>
                </div>
                <div class="col-xs-12 col-lg-9" data-aos="fade-up" data-aos-duration="1000">
                    <h2 class="mb-3 font-weight-bold offer title-color-alt">{{$t('logi-aou-header')}}</h2>
                    <h3 class="mb-3 font-weight-bold offer title-color-alt">--------------</h3>
                    <div class="row">
                        <div class="col-xs-12 col-sm-6 col-lg-4 mb-5">
                            <i class="uil uil-glass-martini-alt d-inline fs-1 title-color-alt"></i>
                            <h5 class="d-inline ms-1">{{$t('logi-aou-icon1')}}</h5>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-lg-4 mb-5">
                            <i class="uil uil-plane d-inline fs-1 title-color-alt"></i>
                            <h5 class="d-inline ms-1">{{$t('logi-aou-icon2')}}</h5>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-lg-4 mb-5">
                            <i class="uil uil-trees d-inline fs-1 title-color-alt"></i>
                            <h5 class="d-inline ms-1">{{$t('logi-aou-icon3')}}</h5>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-lg-4 mb-5">
                            <i class="uil uil-dice-six d-inline fs-1 title-color-alt"></i>
                            <h5 class="d-inline ms-1">{{$t('logi-aou-icon4')}}</h5>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-lg-4 mb-5">
                            <i class="uil uil-shield-check d-inline fs-1 title-color-alt"></i>
                            <h5 class="d-inline ms-1">{{$t('logi-aou-icon5')}}</h5>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-lg-4 mb-5">
                            <i class="uil uil-pizza-slice d-inline fs-1 title-color-alt"></i>
                            <h5 class="d-inline ms-1">{{$t('logi-aou-icon6')}}</h5>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-lg-4 mb-5">
                            <i class="uil uil-cog d-inline fs-1 title-color-alt"></i>
                            <h5 class="d-inline ms-1">{{$t('logi-aou-icon7')}}</h5>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-lg-4 mb-5">
                            <i class="uil uil-screw d-inline fs-1 title-color-alt"></i>
                            <h5 class="d-inline ms-1">{{$t('logi-aou-icon8')}}</h5>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-lg-4 mb-5">
                            <i class="uil uil-coins d-inline fs-1 title-color-alt"></i>
                            <h5 class="d-inline ms-1">{{$t('logi-aou-icon9')}}</h5>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-lg-4 mb-5">
                            <i class="uil uil-medkit d-inline fs-1 title-color-alt"></i>
                            <h5 class="d-inline ms-1">{{$t('logi-aou-icon10')}}</h5>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-lg-4 mb-5">
                            <i class="uil uil-bill d-inline fs-1 title-color-alt"></i>
                            <h5 class="d-inline ms-1">{{$t('logi-aou-icon11')}}</h5>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-lg-4 mb-5">
                            <i class="uil uil-atom d-inline fs-1 title-color-alt"></i>
                            <h5 class="d-inline ms-1">{{$t('logi-aou-icon12')}}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Background image -->
    <section class="all-logos mt-5 mb-5">
        <div class="container">
            <div class="row d-flex align-content-center">
                <div class="col-xs-12 col-md-6" data-aos="fade-left" data-aos-duration="1000">
                    <img src="@/assets/world-map.png" class="img-fluid">
                </div>
                <div class="col-xs-12 col-md-6 text-center" data-aos="fade-right" data-aos-duration="1000">
                    <h1 class="text-center font-weight-bolder mb-3 title-color">{{$t('vision-header')}}</h1>
                    <p>
                        <strong class="subtitle mb-4">
                        {{$t('logi-vision-prag')}}
                        </strong>
                    </p>
                </div>
            </div>
        </div>
    </section>
    <!-- our mission -->
    <section class="container mt-5 mb-5">
        <h1 class="text-center m-5 header">{{$t('mission-header')}}<hr></h1>
        <div class="row">
            <div class="col-xs-12 col-md-4 bg" data-aos="fade-up" data-aos-duration="1000">
                <div class="m-5">
                    <h1>{{$t('logi-mission-header1')}}</h1>
                    <p>{{$t('logi-h1-prag')}}</p>
                </div>
                <div class="m-5">
                    <h1>{{$t('logi-mission-header2')}}</h1>
                    <p><strong>{{$t('logi-h2-prag1')}}</strong> 8:30 AM to 5:00 PM</p>
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
            <div class="col-xs-12 col-md-8" data-aos="fade-down" data-aos-duration="1000">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item d-flex justify-content-between align-items-center mb-4">
                        {{$t('logi-list-prag1')}}
                        <span class="badge bg-info rounded-pill"><i class="uil uil-servers fs-3"></i></span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center mb-4">
                        {{$t('logi-list-prag2')}}
                        <span class="badge bg-info rounded-pill"><i class="uil uil-smile fs-3"></i></span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center mb-4">
                        {{$t('logi-list-prag3')}}
                        <span class="badge bg-info rounded-pill"><i class="uil uil-users-alt fs-3"></i></span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center mb-4">
                        {{$t('logi-list-prag4')}}
                        <span class="badge bg-info rounded-pill"><i class="uil uil-thumbs-up fs-3"></i></span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center mb-4">
                        {{$t('logi-list-prag5')}}
                        <span class="badge bg-info rounded-pill"><i class="uil uil-comparison fs-3"></i></span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center mb-4">
                        {{$t('logi-list-prag6')}}
                        <span class="badge bg-info rounded-pill"><i class="uil uil-constructor fs-3"></i></span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center mb-4">
                        {{$t('logi-list-prag7')}}
                        <span class="badge bg-info rounded-pill"><i class="uil uil-bill fs-3"></i></span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    <!-- ceo section -->
    <section class="mb-5 mt-5" style="background: hsl(0deg 25% 98%)" data-aos="fade" data-aos-duration="1000">
        <div class="container padd">
            <h1 class="font-weight-bolder mb-4">{{$t('ceo-header')}}</h1>
            <p>
                <strong class="font-weight-bold">{{$t('ceo-subhead')}}</strong><br>
                {{$t('ceo-prag1')}}
                <br>
                {{$t('ceo-prag2')}}
            </p>
        </div>
    </section>
    <!-- contact -->
    <section class="container-overlay padd mb-5">
        <div class="row" style="z-index: 1;">
            <div class="col-xs-12 col-lg-6" data-aos="fade-down" data-aos-duration="1000">
                <h1 class="text-light font-weight-bolder mt-3 mb-4">{{$t('logi-mission-header2')}}</h1>
                <div class="d-flex justify-content-between mb-5">
                    <h4 class="text-light">{{$t('logi-h2-prag1')}}</h4>
                    <h4 class="text-light">{{$t('logi-h2-prag4')}}</h4>
                </div><hr class="text-light">
                <div class="d-flex justify-content-between mt-5 mb-5">
                    <h4 class="text-light">{{$t('logi-h2-prag2')}}</h4>
                    <h4 class="text-light">{{$t('logi-h2-prag3')}}</h4>
                </div><hr class="text-light">
            </div>
            <div class="col-xs-12 col-lg-6" data-aos="fade-up" data-aos-duration="1000">
                <form class="row p-3" style="background:#fff" @submit.prevent="sendLogistic">
                <h1 class="title-color mb-5">{{$t('logi-contact-haeder')}}</h1>
                    <div class="col-6 form-group mb-3">
                        <label class="text-dark" for="name">{{$t('name')}}</label>
                        <input type="text" v-model="name" class="form-control" id="name">
                    </div>
                    <div class="col-6 form-group mb-3">
                        <label class="text-dark" for="phone">{{$t('phone')}}</label>
                        <input type="number" v-model="phone" class="form-control" id="phone">
                    </div>
                    <div class="col-12 form-group mb-3">
                        <label class="text-dark" for="mail">{{$t('mail')}}</label>
                        <input type="email" v-model="email" class="form-control" id="mail">
                    </div>
                    <div class="col-12 form-group mb-3">
                        <label class="text-dark text-uppercase" for="mail">{{$t('select')}}</label>
                        <select class="form-select" aria-label="Default select example" v-model="selected">
                            <option selected>Open this select menu</option>
                            <option value="Airfreight">Airfreight.</option>
                            <option value="Sea Freight">Sea Freight.</option>
                            <option value="Door to Door">Door to Door.</option>
                            <option value="Land transport">Land transport.</option>
                            <option value="Customs Clearance/Door Delivery">Customs Clearance/Door Delivery</option>
                            <option value="Warehousing">Warehousing</option>
                            <option value="Bonded Warehousing Facility">Bonded Warehousing Facility</option>
                            <option value="Routing-Cross Trade">Routing-Cross Trade</option>
                            <option value="Hazardous Cargo Handling">Hazardous Cargo Handling</option>
                            <option value="Project cargo handling">Project cargo handling.</option>
                            <option value="Saber registration for regulated and non-regulated products with PCOC and SCOC certificates">Saber registration for regulated and non-regulated products with PCOC and SCOC certificates.</option>
                            <option value="Distribution service of transports">Distribution service of transports.</option>
                            <option value="Sale of Used Reefer/Dry Containers for storage purpose">Sale of Used Reefer/Dry Containers for storage purpose.</option>
                        </select>
                    </div>
                    <button class="btn btn-color-alt rounded-pill">{{$t('subm')}}</button>
                </form>
            </div>
        </div>
        <div class="color-overlay"></div>
    </section>
</template>

<script>
import axios from 'axios'
export default {
    name:"Logistics",
    data(){
        return {
            name: '',
            phone: '',
            email: '',
            selected: 'Open this select menu'
        }
    },
    methods: {
        async sendLogistic() {
            const data = {
                name: this.name,
                phone: this.phone,
                email: this.email,
                service: this.selected
            }
            const response = await axios.post("https://pacific-brushlands-68509.herokuapp.com/logistic", data)
            console.log(response);
            if (response.status == 200) {
                alert("Success, Thanks")
            }
        }
    }
}
</script>

<style scoped>
.bg-image{
    background-image: url('../assets/logistics/logistics-bg.png');
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    height: 500px;
    margin-top: 110px
}
.btn-color{
    background-color: #0679bc;
    color: #fff;
}
.btn-color-alt{
    background-color: #dd3751;
    color: #fff;
}
.title-color{
    color: #0679bc;
}
.title-color-alt{
    color: #dd3751;
}
.z-ind{
    z-index: -1;
}
.img-fluid{
    width: 100%;
}
.my-card-container{
    margin-top: -30px;
    box-shadow: 0 0 30px 3px rgba(0,0,0,.125);
}
.my-card{
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
}
@media screen and (max-width: 768px){
    .my-card{
        display: none;
    }
}
.left-hand-path{
    padding: 150px 48px 48px 48px;
    height: 520px;
    border-radius: 5px;
}
.bg{
    color: #fff;
    background: rgb(221,55,81);
    background: linear-gradient(13deg, rgba(221,55,81,1) 0%, rgba(6,121,188,1) 56%, rgba(0,212,255,1) 100%);
}
.header{
    color: #dd3751;
}
.padd{
    padding: 150px;
}
@media screen and (max-width: 768px) {
    .padd{
        padding: 50px;
    }
}
.container-overlay{
    background-image: url('../assets/logistics/architecture.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
.color-overlay{
    width: 100%;
    height: 100%;
    background: rgb(221,55,81);
    background: linear-gradient(13deg, rgba(221,55,81,1) 0%, rgba(6,121,188,1) 56%, rgba(0,212,255,1) 100%);
    opacity: 0.9;
    position: absolute;
}
</style>