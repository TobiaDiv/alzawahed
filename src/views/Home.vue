<template>
<div class="home">
    <!--==================== main background ====================-->
    <div class="container all-logos">
        <div class="row">
            <div class="col-xs-12 col-md-6">
                <img src="@/assets/home/all-logos.png" class="img-fluid">
            </div>
            <div class="col-xs-12 col-md-6 text-center" style="margin-top: 38px;">
                <h2 class="text-center font-weight-bolder title-color">{{$t('h-header-1')}}</h2>
                <p class="text-color">{{$t('h-prag-1')}}</p>
                <button class="btn btn-color">{{$t('h-main-btn')}}</button>
            </div>
        </div>
    </div>
    <!--==================== Why us ====================-->
    <section class="qoute">
    <div class="container">
        <q>{{$t('h-qoute-1')}}</q>
        <span>{{$t('h-header-1')}}</span>
        <div class="row mt-4">
            <div class="col-lg-4 col-sm-6 mb-4">
                <div class="card border-0 shadow rounded-xs pt-5">
                    <div class="card-body"> <i class="uil uil-eye icon-lg icon-color icon-bg-color icon-bg-circle mb-3"></i>
                        <h4 class="mt-4 mb-3 fon">{{$t('vision-header')}}</h4>
                        <p>{{$t('h-vision')}}</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-sm-6 mb-4">
                <div class="card border-0 shadow rounded-xs pt-5">
                    <div class="card-body"> <i class="uil uil-constructor icon-lg icon-color icon-bg-color icon-bg-circle mb-3"></i>
                        <h4 class="mt-4 mb-3 fon">{{$t('mission-header')}}</h4>
                        <p>{{$t('h-mission')}}</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-sm-6 mb-4">
                <div class="card border-0 shadow rounded-xs pt-5">
                    <div class="card-body"> <i class="uil uil-envelope-share icon-lg icon-color icon-bg-color icon-bg-circle mb-3"></i>
                        <h4 class="mt-4 mb-3 fon">{{$t('message-header')}}</h4>
                        <p>{{$t('h-message')}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
    <!--==================== QUALIFICATION ====================-->
        <div class="timeline-container">
            <div class="timeline">
                <ul>
                <li>
                    <div class="timeline-content">
                    <h3 class="date">{{$t('h-qual1-date')}}</h3>
                    <h1>{{$t('h-qual1-haad')}}</h1>
                    <p>{{$t('h-qual1-prag')}}</p>
                    </div>
                </li>
                <li>
                    <div class="timeline-content">
                    <h3 class="date">{{$t('h-qual2-date')}}</h3>
                    <h1>{{$t('h-qual2-haad')}}</h1>
                    <p>{{$t('h-qual2-prag')}}</p>
                    </div>
                </li>
                <li>
                    <div class="timeline-content">
                    <h3 class="date">{{$t('h-qual3-date')}}</h3>
                    <h1>{{$t('h-qual3-haad')}}</h1>
                    <p>{{$t('h-qual3-prag')}}</p>
                    </div>
                </li>
                </ul>
            </div>
        </div>
    <!--==================== SERVICES ====================-->
    <section class="container-services">
        <div class="container text-center">
        <h2 class="text-center text-color services__header">{{$t('h-title-serv')}}</h2>
        <h6 class="text-center">{{$t('h-subtitle-serv')}}</h6>
        <div class="row">
            <!--========== SERVICES 1 ==========-->
            <div class="services__content col-lg-2 ms-3 me-3 col-sm-12 mb-3">
                <div class="align-self-stretch">
                    <i class="uil uil-desktop services__icon"></i>
                    <h3 class="services__title">{{$t('it')}}</h3>
                    <p>{{$t('h-prag1-serv')}}</p>
                </div>
                <span class="services__button">
                    <button class="btn btn-color uil uil-arrow-down-right button__icon" data-bs-toggle="modal" data-bs-target="#myModal1">{{$t('h-serv-btn')}}</button>
                </span>
            </div>

                <div class="modal fade" id="myModal1" data-bs-backdrop="static">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="services__title">{{$t('it')}}</h4>
                                <button class="btn-close ms-auto" data-bs-dismiss="modal"></button>
                            </div>

                            <div class="modal-body">
                                {{$t('h-medal1-serve')}}
                            </div>
                        </div>
                    </div>
                </div>
            
            <!--========== SERVICES 2 ==========-->
            <div class="services__content col-lg-2 ms-3 me-3 col-sm-12 mb-3">
                <div>
                    <i class="uil uil-user services__icon"></i>
                    <h3 class="services__title">{{$t('security')}}</h3>
                    <p>{{$t('h-prag2-serv')}}</p>
                </div>
                <span class="services__button">
                    <button class="btn btn-color uil uil-arrow-down-right button__icon" data-bs-toggle="modal" data-bs-target="#myModal2">{{$t('h-serv-btn')}}</button>
                </span>
            </div>

                <div class="modal fade" id="myModal2" data-bs-backdrop="static">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="services__model-title">{{$t('security')}}</h4>
                                <button class="btn-close ms-auto" data-bs-dismiss="modal"></button>
                            </div>

                            <div class="modal-body">
                                {{$t('h-medal2-serve')}}
                            </div>
                        </div>
                    </div>
                </div>
            
            <!--========== SERVICES 3 ==========-->
            <div class="services__content col-lg-2 ms-3 me-3 col-sm-12 mb-3">
                <div>
                    <i class="uil uil-truck services__icon"></i>
                    <h3 class="services__title">{{$t('logistics')}}</h3>
                    <p>{{$t('h-prag3-serv')}}</p>
                </div>
                <span class="services__button">
                    <button class="btn btn-color uil uil-arrow-down-right button__icon" data-bs-toggle="modal" data-bs-target="#myModal4">{{$t('h-serv-btn')}}</button>
                </span>
            </div>
                <div class="modal fade" id="myModal4" data-bs-backdrop="static">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="services__model-title">{{$t('logistics')}}</h4>
                                <button class="btn-close ms-auto" data-bs-dismiss="modal"></button>
                            </div>

                            <div class="modal-body">
                                {{$t('h-medal3-serve')}}
                            </div>
                        </div>
                    </div>
                </div>
            
            <!--========== SERVICES 4 ==========-->
            <div class="services__content col-lg-2 ms-3 me-3 col-sm-12 mb-3">
                <div>
                    <i class="uil uil-bag services__icon"></i>
                    <h3 class="services__title">{{$t('clearance')}}</h3>
                    <p>{{$t('h-prag4-serv')}}</p>
                </div>
                <span class="services__button">
                    <button class="btn btn-color uil uil-arrow-down-right button__icon" data-bs-toggle="modal" data-bs-target="#myModal5">{{$t('h-serv-btn')}}</button>
                </span>
            </div>
                <div class="modal fade" id="myModal5" data-bs-backdrop="static">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="services__model-title">{{$t('clearance')}}</h4>
                                <button class="btn-close ms-auto" data-bs-dismiss="modal"></button>
                            </div>

                            <div class="modal-body">
                                {{$t('h-medal4-serve')}}
                            </div>
                        </div>
                    </div>
                </div>
            
            <!--========== SERVICES 5 ==========-->
            <div class="services__content col-lg-2 ms-3 me-3 col-sm-12 mb-3">
                <div>
                    <i class="uil uil-megaphone services__icon"></i>
                    <h3 class="services__title">{{$t('contarcting')}}</h3>
                    <p>{{$t('h-prag5-serv')}}</p>
                </div>

                <span class="services__button">
                    <button class="btn btn-color uil uil-arrow-down-right button__icon" data-bs-toggle="modal" data-bs-target="#myModal6">{{$t('h-serv-btn')}}</button>
                </span>
            </div>
                <div class="modal fade" id="myModal6" data-bs-backdrop="static">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="services__model-title">{{$t('contarcting')}}</h4>
                                <button class="btn-close ms-auto" data-bs-dismiss="modal"></button>
                            </div>

                            <div class="modal-body">
                                {{$t('h-medal5-serve')}}
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    </section>
    <!--==================== Photo Gallery ====================-->
    <section class="container">
        <div class="con">
            <div class="heading">
                <h3>{{$t('h-header-photo1')}} <span>{{$t('h-header-photo2')}}</span></h3>
            </div>
            <div class="box">
                <div class="dream">
                    <img src="@/assets/home/bg1.jpg">
                    <img src="@/assets/home/bg2.jpg">
                    <img src="@/assets/home/bg6.jpeg">
                    
                </div>
                <div class="dream">
                    <img src="@/assets/home/Scan-1.jpg">
                    <img src="@/assets/home/bg3.jpg">
                    <img src="@/assets/home/bg4.png">
                </div>
                <div class="dream">
                    <img src="@/assets/home/bg5.jpg">
                    <img src="@/assets/home/Scan-2.jpg">
                    <img src="@/assets/home/bg7.jpeg">
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
export default {
    name: "Home",
    components: {

    },
};
</script>

<style scoped>
/* main background */
.all-logos {
    margin-top: 70px;
    padding: 3rem 0;
}
.all-logos .row img {
    width: 450px;
}
.btn-color{
    background-color: var(--first-color);
    color: var(--container-color);
}
.qoute {
    padding: 3rem 0;
    background: var(--switch-section);
    background-size: cover;
    position: relative;
    text-align: center;
    color: var(--text-color);
    font-weight: bolder;
}
.qoute .container {
    position: relative;
}
.qoute q {
    font-size: 30px;
    margin-bottom: 20px;
    display: block;
}
/*==================== Why Us ====================*/
.section-title {
    margin-bottom: 38px;
}
.shadow,
.subscription-wrapper {
    box-shadow: 0px 15px 39px 0px rgba(8, 18, 109, 0.1) !important;
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
    top: -35px;
    left: 15px;
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
    color: var(--first-color);
}
.icon-bg-color::after{
    background: var(--first-color-alt) !important;
}
.fon{
    color: var(--text-color);
}

/*==================== Photo Gallery ====================*/

.con{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 40px 200px 0 200px;
    margin-bottom: 100px;
}

.con .heading{
    width: 50%;
    padding-bottom: 50px;
}
.con .heading h3{
    font-size: 3em;
    font-weight: bolder;
    color: var(--text-color);
    padding-bottom: 10px;
    border-bottom: 3px solid var(--text-color);
}

.con .heading h3 span{
    font-weight: 100;
}
.con .box{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.con .box .dream{
    display: flex;
    flex-direction: column;
    width: 32.5%;
}

.con .box .dream img{
    width: 100%;
    padding-bottom: 15px;
    border-radius: 5px;
}

@media only screen and (max-width: 769px){
    .con .box{
    flex-direction: column;
    }

    .con .box .dream{
    width: 100%;
    }
}

@media only screen and (max-width: 643px){
    .con .heading{
    width: 100%;
    }
    .con .heading h3{
    font-size: 1em;

    }
}
/*==================== SERVICES ====================*/
.container-services{
    background: var(--switch-section);
    margin-bottom: 100px;
}
.services__content{
    position: relative;
    background-color: var(--container-color);
    padding: 3.5rem .5rem 1.25rem 1.5rem;
    border-radius: .25rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .15);
    transition: .3s;
}

.services__content:hover{
    box-shadow: 0 4px 8px rgba(0, 0, 0, .15);
}

.services__icon{
    display: block;
    font-size: 1.5rem;
    color: var(--first-color);
    margin-bottom: 1rem;
}
.services__header{
    font-size: 50px;
    font-weight: 800;
}

.services__title{
    font-size: 25px;
    color: var(--text-color);
    margin-bottom: 1px;
    font-weight: 600;
}
/*==================== QUALIFICATION ====================*/

.timeline-container {
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 100px 0;
}
.timeline {
    width: 80%;
    height: auto;
    max-width: 800px;
    margin: 0 auto;
    position: relative;
}

.timeline ul {
    list-style: none;
}
.timeline ul li {
    padding: 20px;
    background-color: var(--first-color-alt);
    color: white;
    border-radius: 10px;
    margin-bottom: 20px;
}
.timeline ul li:last-child {
    margin-bottom: 0;
}
.timeline-content h1 {
    font-weight: 500;
    font-size: 25px;
    line-height: 30px;
    margin-bottom: 10px;
}
.timeline-content p {
    font-size: 16px;
    line-height: 30px;
    font-weight: 300;
    color: #fff;
}
.timeline-content .date {
    font-size: 16px;
    font-weight: 300;
    margin-bottom: 10px;
    letter-spacing: 2px;
    color: var(--title-color);
}
@media only screen and (min-width: 768px) {
    .timeline:before {
        content: "";
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 2px;
        height: 100%;
        background-color: gray;
    }
    .timeline ul li {
        width: 50%;
        position: relative;
        margin-bottom: 50px;
    }
    .timeline ul li:nth-child(odd) {
        float: left;
        clear: right;
        transform: translateX(-30px);
        border-radius: 20px 0px 20px 20px;
    }
    .timeline ul li:nth-child(even) {
        float: right;
        clear: left;
        transform: translateX(30px);
        border-radius: 0px 20px 20px 20px;
    }
    .timeline ul li::before {
        content: "";
        position: absolute;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        background-color: gray;
        top: 0px;
    }
    .timeline ul li:nth-child(odd)::before {
        transform: translate(50%, -50%);
        right: -30px;
    }
    .timeline ul li:nth-child(even)::before {
        transform: translate(-50%, -50%);
        left: -30px;
    }
    .timeline-content .date {
        position: absolute;
        top: -30px;
    }
    .timeline ul li:hover::before {
        background-color: var(--first-color-alt);
    }
}


</style>
