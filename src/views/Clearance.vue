<template>
    <!-- Background image -->
    <div class="p-5 text-center bg-image" alt="Wild Landscape">
        <div class="mask" style="background-color: rgba(0, 0, 0, 0.6);">
            <div class="d-flex justify-content-center align-items-center h-100">
                <div class="text-white">
                    <h4 class="font-weight-bold">{{$t('it-header-caru1')}} <span> {{$t('it-header-caru2')}}</span></h4>
                    <h1 class="mb-3 font-weight-bold offer">{{$t('clear-header')}}</h1>
                    <button class="btn btn-outline-light" style="width:150px">{{$t('logi-btn-caru1')}}</button>
                    <button class="btn btn-color ms-3"><i class="uil uil-chart"></i> {{$t('logi-btn-caru2')}}</button>
                </div>
            </div>
        </div>
    </div>
    <!-- icons -->
    <section class="container mt-5 mb-5">
        <div class="row">
            <div class="col-xs-12 col-md-4 mb-2">
                <div class="card rounded-pill">
                    <i class="uil uil-lightbulb d-inline fs-1 text-color text-center"></i>
                    <h3 class="d-inline text-center ms-3">{{$t('clear-icon-1')}}</h3>
                </div>
            </div>
            <div class="col-xs-12 col-md-4 mb-2">
                <div class="card rounded-pill">
                    <i class="uil uil-chart-line d-inline fs-1 text-color text-center"></i>
                    <h3 class="d-inline text-center ms-3">{{$t('clear-icon-2')}}</h3>
                </div>
            </div>
            <div class="col-xs-12 col-md-4 mb-2">
                <div class="card rounded-pill">
                    <i class="uil uil-headphones d-inline fs-1 text-color text-center"></i>
                    <h3 class="d-inline text-center ms-3">{{$t('clear-icon-3')}}</h3>
                </div>
            </div>
        </div>
    </section>
    <!-- Background image -->
    <section class="all-logos">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-md-6" style="margin-top: 70px;">
                    <div class="row">
                        <img src="@/assets/clearance-logo1.png" class="img-fluid">
                        <div class="col-12 mt-5">
                            <h2 class="text-center font-weight-bolder text-success">{{$t('vision-header')}}</h2>
                            <p class="subtitle text-center">
                                {{$t('clear-prag-1')}}
                            </p>
                        </div>
                    </div>
                </div>
                
                <div class="col-xs-12 col-md-6 text-center" style="margin-top: 80px;">
                    <div class="row">
                        <div class="col-12">
                            <h2 class="text-center font-weight-bolder text-success">{{$t('clearance')}}</h2>
                            <p class="subtitle text-center">
                                {{$t('clear-prag-2')}}
                            </p>
                        </div>
                        <div class="col-12">
                            <h2 class="text-center font-weight-bolder text-success">{{$t('mission-header')}}</h2>
                            <p class="subtitle text-center">
                                {{$t('clear-prag-3')}}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Exclusive Features -->
    <section class="mb-5 mt-5">
        <h1 class="title text-center text-color">{{$t('clear-feature-header1')}}</h1>
        <p class="subtitle text-center">{{$t('clear-feature-prag')}}</p>
        <div class="container mt-5">
            <div class="row">
                <div class="col-xs-12 col-lg-4">
                    <div class="card feature mb-5">
                        <i class="uil uil-file-check-alt fs-1 text-center"></i>
                        <h3 class="text-center"> {{$t('clear-feature-header2')}}</h3>
                    </div>
                    <div class="card feature mb-5">
                        <i class="uil uil-arrow fs-1 text-center"></i>
                        <h3 class="text-center"> {{$t('clear-feature-header3')}}</h3>
                    </div>
                </div>
                <div class="col-xs-12 col-lg-4">
                    <img src="@/assets/clearance/clearance-caru.jpg" style="width:100%">
                </div>
                <div class="col-xs-12 col-lg-4">
                    <div class="card feature mb-5">
                        <i class="uil uil-mobile-android fs-1 text-center"></i>
                        <h3 class="text-center"> {{$t('clear-feature-header4')}}</h3>
                    </div>
                    <div class="card feature mb-5">
                        <i class="uil uil-thumbs-up fs-1 text-center"></i>
                        <h3 class="text-center"> {{$t('clear-feature-header5')}}</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- overlay -->
    <section class="container-overlay mb-5">
        <div class="row resp d-flex align-items-centers" style="z-index: 1;transform:rotate(2deg)">
            <div class="col-xs-12 col-lg-4">
                <div class="btn-outline-light text-center rounded m-3">
                    <i class="uil uil-user fs-1"></i>
                </div>
                <h3 style="display:inline" class="text-light">378</h3>
                <p style="display:inline" class="text-light">{{$t('subscriber')}}</p>
            </div>
            <div class="col-xs-12 col-lg-4">
                <div class="btn-outline-light text-center rounded m-3">
                    <i class="uil uil-trophy fs-1"></i>
                </div>
                <h3 style="display:inline" class="text-light">820</h3>
                <p style="display:inline" class="text-light">{{$t('win')}}</p>
            </div>
            <div class="col-xs-12 col-lg-4">
                <div class="btn-outline-light text-center rounded m-3">
                    <i class="uil uil-suitcase fs-1"></i>
                </div>
                <h3 style="display:inline" class="text-light">12,345</h3>
                <p style="display:inline" class="text-light">{{$t('project')}}</p>
            </div>
        </div>
        <div class="color-overlay">
            
        </div>
    </section>
    <!-- contact -->
    <h1 class="text-center text-color mart mb-5">{{$t('clear-contact-header1')}}</h1>
    <section class="mb-5" style="background:#cd9933">
        <div class="container">
            <h1 class="font-weight-bold m-3 p-5 text-light">{{$t('clear-contact-header2')}}</h1>
            <form class="row">
                <div class="col-6 form-group mb-3">
                    <label class="text-light" for="name">{{$t('name')}}</label>
                    <input type="text" class="form-control" id="name">
                </div>
                <div class="col-6 form-group mb-3">
                    <label class="text-light" for="phone">{{$t('phone')}}</label>
                    <input type="text" class="form-control" id="phone">
                </div>
                <div class="col-6 form-group mb-3">
                    <label class="text-light" for="email">{{$t('mail')}}</label>
                    <input type="text" class="form-control" id="email">
                </div>
                <div class="col-6 form-group mb-3">
                    <label class="text-light" for="shipment">{{$t('clear-contact-input1')}}</label>
                    <input type="text" class="form-control" id="shipment">
                </div>
                <div class="col-6 form-group mb-3">
                    <label class="text-light" for="country">{{$t('clear-contact-input2')}}</label>
                    <input type="text" class="form-control" id="country">
                </div>
                <div class="col-6 form-group mb-3">
                    <label class="text-light" for="phone">{{$t('clear-contact-input3')}}</label>
                    <input type="text" class="form-control" id="phone">
                </div>
                <div class="col-6 form-group mb-3">
                    <label class="text-light" for="phone">{{$t('clear-contact-input4')}}</label>
                    <input type="text" class="form-control" id="phone">
                </div>
                <div class="col-6 form-group mb-3">
                    <label class="text-light" for="phone">{{$t('clear-contact-input5')}}</label>
                    <input type="text" class="form-control" id="phone">
                </div>
                <div class="col-6 form-group mb-3">
                    <label class="text-light" for="phone">{{$t('clear-contact-input6')}}</label>
                    <input type="text" class="form-control" id="phone">
                </div>
                <div class="col-6 form-group mb-3">
                    <label class="text-light" for="phone">{{$t('clear-contact-input7')}}</label>
                    <input type="text" class="form-control" id="phone">
                </div>
                <div class="text-center mb-5 mt-3">
                    <button type="submit" class="btn btn-light">{{$t('subm')}}</button>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
export default {
    name:"Clearance",
}
</script>

<style scoped>
.all-logos{
    background: #fbf4fb;
}
.bg-image{
    background-image: url('../assets/clearance/clearance-car.jpg');
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    height: 500px;
    margin-top: 110px
}
.btn-color{
    background-color: #d4a851;
    color: #fff;
}
.text-color{
    color: #d4a851;
}
.feature{
    border: solid 1px #d4a851;
    color: #d4a851;
}
.feature:hover{
    background: #d4a851;
    color: #fff;
}
.mart{
    margin-top: 150px;
}
.marb{
    margin-bottom: 100px;
}
.container-overlay{
    background-image: url('../assets/clearance/clearance-sec.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    width: 99%;
    height: 400px;
    box-shadow: 0 0 20px 20px #d4a851;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: rotate(-2deg);
    position: relative;
}
.color-overlay{
    width: 100%;
    height: 100%;
    background-color: #d4a851;
    opacity: 0.9;
    position: absolute;
}
@media screen and (max-width: 992px){
    .resp{
        display: flex;
        align-items: center;
        flex-direction: column;
    }
}
.btn-outline-light{
    width: 95px;
}
.btn-outline-light:hover{
    background-color: #d4a851;
    color: #fff;
}
</style>