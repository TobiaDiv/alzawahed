<template>
    <!-- Background image -->
    <div class="p-5 text-center bg-image" alt="Wild Landscape">
        <div class="mask" style="background-color: rgba(0, 0, 0, 0.6);">
            <div class="d-flex justify-content-center align-items-center h-100">
                <div class="text-white">
                    <h4 class="font-weight-bold">{{$t('it-header-caru1')}} <span> {{$t('it-header-caru2')}}</span></h4>
                    <h1 class="mb-3 font-weight-bold offer">{{$t('it-header-caru3')}}</h1>
                    <MDBBtn tag="a" lg outline="light" href="#!" role="button"><i class="uil uil-columns"></i> {{$t('it-btn-caru1')}}</MDBBtn>
                    <button class="btn btn-success ms-3"><i class="uil uil-chart"></i> {{$t('it-btn-caru2')}}</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Background image -->
    <div class="all-logos">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-md-6" style="margin-top: 70px;">
                    <img src="@/assets/it-logo.png" class="img-fluid">
                </div>
                <div class="col-xs-12 col-md-6 text-center" style="margin-top: 80px;">
                    <h2 class="text-center font-weight-bolder text-success">{{$t('it-header')}}</h2>
                    <p class="subtitle">
                        {{$t('it-prag')}}
                    </p>
                    <button class="btn btn-success ms-3"><i class="uil uil-columns"></i> {{$t('logi-btn')}}</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Awesome Services -->
    <section class="mt-5 mb-5 p-5" style="background: #f5f5f5">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-lg-3">
                    <div class="bg-secondary left-hand-path d-flex align-items-centers" style="flex-direction: column">
                        <h6 class="font-weight-bold text-center text-light mb-2">{{$t('logi-aou-left')}}</h6>
                        <button class="btn btn-success text-light">{{$t('it-btn-caru1')}} <i class="uil uil-arrow-right"></i></button>
                    </div>
                </div>
                <div class="col-xs-12 col-lg-9">
                    <h1 class="mb-3 font-weight-bold offer mb-5 text-success">{{$t('it-header-2')}}</h1>
                    <div class="row">
                        <div class="col-xs-12 col-sm-6 col-lg-4 mb-5">
                            <i class="uil uil-desktop d-inline fs-1 text-success"></i>
                            <h5 class="d-inline ms-1">{{$t('it-icon-1')}}</h5>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-lg-4 mb-5">
                            <i class="uil uil-presentation-check d-inline fs-1 text-success"></i>
                            <h5 class="d-inline ms-1">{{$t('it-icon-2')}}</h5>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-lg-4 mb-5">
                            <i class="uil uil-user-check d-inline fs-1 text-success"></i>
                            <h5 class="d-inline ms-1">{{$t('it-icon-3')}}</h5>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-lg-4 mb-5">
                            <i class="uil uil-credit-card d-inline fs-1 text-success"></i>
                            <h5 class="d-inline ms-1">{{$t('it-icon-4')}}</h5>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-lg-4 mb-5">
                            <i class="uil uil-list-ul d-inline fs-1 text-success"></i>
                            <h5 class="d-inline ms-1">{{$t('it-icon-5')}}</h5>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-lg-4 mb-5">
                            <i class="uil uil-cloud-upload d-inline fs-1 text-success"></i>
                            <h5 class="d-inline ms-1">{{$t('it-icon-6')}}</h5>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-lg-4 mb-5">
                            <i class="uil uil-coins d-inline fs-1 text-success"></i>
                            <h5 class="d-inline ms-1">{{$t('it-icon-7')}}</h5>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-lg-4 mb-5">
                            <i class="uil uil-cloud-data-connection d-inline fs-1 text-success"></i>
                            <h5 class="d-inline ms-1">{{$t('it-icon-8')}}</h5>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-lg-4 mb-5">
                            <i class="uil uil-hdd d-inline fs-1 text-success"></i>
                            <h5 class="d-inline ms-1">{{$t('it-icon-9')}}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Latest News -->
    <section>
        <div class="container">
            <h1 class="text-center font-weight-bold mb-5">{{$t('it-header-3')}}</h1>
            <div class="row">
                <div class="col-xs-12 col-lg-6 bg-news p-5 mb-3">
                    <div style="opacity:0.9">
                    <h1 class="text-light">{{$t('it-subhead')}}</h1>
                    <p class="text-light"><i class="uil uil-user"></i> {{$t('it-person')}} | <i class="uil uil-calender"></i> {{$t('it-date')}} | <i class="uil uil-tag"></i> {{$t('it-tag')}}</p>
                    </div>
                </div>
                <div class="col-xs-12 col-lg-6">
                    <div class="row">
                        <div class="col-12">
                            <h5 class="mb-1">{{$t('it-news-header1')}}</h5>
                            <p><small class="text-muted"><i class="uil uil-user"></i> {{$t('it-person')}} | <i class="uil uil-calender"></i> {{$t('it-subdate')}}</small></p>
                            <p class="mt-1">{{$t('it-news-prag1')}}</p>
                        </div>
                        <div class="col-12">
                            <h5 class="mb-1 mt-4">{{$t('it-news-header2')}}</h5>
                            <p><small class="text-muted"><i class="uil uil-user"></i> {{$t('it-person')}} | <i class="uil uil-calender"></i> {{$t('it-subdate')}}</small></p>
                            <p class="mt-1">{{$t('it-news-prag2')}}</p>
                        </div>
                        <div class="col-12">
                            <h5 class="mb-1 mt-4">{{$t('it-news-header3')}}</h5>
                            <p><small class="text-muted"><i class="uil uil-user"></i> {{$t('it-person')}} | <i class="uil uil-calender"></i> {{$t('it-subdate')}}</small></p>
                            <p class="mt-1">{{$t('it-news-prag3')}}</p>
                        </div>
                        <div class="col-12">
                            <h5 class="mb-1 mt-4">{{$t('it-news-header4')}}</h5>
                            <p><small class="text-muted"><i class="uil uil-user"></i> {{$t('it-person')}} | <i class="uil uil-calender"></i> {{$t('it-subdate')}}</small></p>
                            <p class="mt-1">{{$t('it-news-prag4')}}</p>
                        </div>
                        <div class="col-12">
                            <h5 class="mb-1 mt-4">{{$t('it-news-header5')}}</h5>
                            <p><small class="text-muted"><i class="uil uil-user"></i> {{$t('it-person')}} | <i class="uil uil-calender"></i> {{$t('it-subdate')}}</small></p>
                            <p class="mt-1">{{$t('it-news-prag5')}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- contact -->
    <section class="mt-5 mb-5 p-5" style="background: #203240d9">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-lg-6 mt-5">
                    <h5 class="text-light text-uppercase">{{$t('it-contact-header1')}} <span class="text-danger">{{$t('it-contact-header2')}}</span></h5>
                    <h1 class="text-light font-weight-bold text-uppercase">{{$t('it-contact-header3')}}<br> {{$t('it-contact-header4')}}<br> {{$t('it-contact-header5')}}</h1>
                </div>
                <div class="col-xs-12 col-lg-6 rounded p-3" style="background:#fff">
                    <h1 class="font-weight-bold m-3">{{$t('it-contact-header6')}} <span class="text-success">{{$t('it-contact-header7')}}</span></h1>
                    <form>
                        <div class="form-group mb-3">
                            <label for="name">{{$t('name')}}</label>
                            <input type="text" class="form-control" id="name">
                        </div>
                        <div class="form-group mb-3">
                            <label for="phone">{{$t('phone')}}</label>
                            <input type="text" class="form-control" id="phone">
                        </div>
                        <div class="form-group mb-3">
                            <label for="email">{{$t('mail')}}</label>
                            <input type="text" class="form-control" id="email">
                        </div>
                        <div class="form-group mb-3">
                            <label for="domain">{{$t('it-contact-input1')}}</label>
                            <input type="text" class="form-control" id="domain">
                        </div>
                        <div class="form-group mb-3">
                            <label for="message">{{$t('it-contact-input2')}}</label>
                            <textarea class="form-control" id="message" rows="10"></textarea>
                        </div>
                        <div class="text-center mt-3">
                            <button type="submit" class="btn btn-success">{{$t('subm')}}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { MDBBtn } from 'mdb-vue-ui-kit';
export default {
    name:"It",
    components:{
        MDBBtn,
    },
}
</script>

<style scoped>
.bg-image{
    background-image: url('../assets/it/server3.jpg');
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    height: 500px;
    margin-top: 110px
}
.text-white h1{
    font-size: 60px;
}
.text-white h4 span{
    color: red;
}
.left-hand-path{
    padding: 150px 48px 48px 48px;
    height: 390px;
    border-radius: 5px;
}
.bg-news{
    background-image: url('../assets/it/background.jpg');
    background-size: cover;
    background-attachment: fixed;
    
}
</style>