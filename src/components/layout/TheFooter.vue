<template>
<!-- Footer -->
<MDBFooter :text="['center', 'lg-start', 'muted']">
    <!-- Section: Social media -->
    <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <!-- Left -->
        <div class="me-5 d-none d-lg-block">
            <span>{{$t('f-qout')}}</span>
        </div>
        <!-- Left -->

        <!-- Right -->
    <div>
        <a href="" class="me-4 text-reset">
            <i class="uil uil-facebook-f"></i>
        </a>
        <a href="" class="me-4 text-reset">
            <i class="uil uil-instagram"></i>
        </a>
        <a href="" class="me-4 text-reset">
            <i class="uil uil-twitter-alt"></i>
        </a>
        <a href="" class="me-4 text-reset">
            <i class="uil uil-envelope"></i>
        </a>
    </div>
    <!-- Right -->
    </section>
    <!-- Section: Social media -->

    <!-- Section: Links  -->
    <section class="">
    <MDBContainer class="text-center text-md-start mt-5">
    <!-- Grid row -->
    <MDBRow class="mt-3">
        <!-- Grid column -->
        <MDBCol md="3" lg="4" xl="3" class="mx-auto mb-4">
        <!-- Content -->
        <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3"></i>{{$t('h-header-1')}}
        </h6>
        <p>{{$t('prag')}}</p>
        </MDBCol>
        <!-- Grid column -->

        <!-- Grid column -->
        <MDBCol md="2" lg="2" xl="2" class="mx-auto mb-4">
        <!-- Links -->
        <h6 class="text-uppercase fw-bold mb-4">{{$t('services')}}</h6>
        <p>
            <a href="#!" class="text-reset">{{$t('security')}}</a>
        </p>
        <p>
            <a href="#!" class="text-reset">{{$t('logistics')}}</a>
        </p>
        <p>
            <a href="#!" class="text-reset">{{$t('it')}}</a>
        </p>
        <p>
            <a href="#!" class="text-reset">{{$t('clearance')}}</a>
        </p>
        <p>
            <a href="#!" class="text-reset">{{$t('contarcting')}}</a>
        </p>
        </MDBCol>
        <!-- Grid column -->

        <!-- Grid column -->
        <MDBCol md="4" lg="3" xl="3" class="mx-auto mb-md-0 mb-4">
        <!-- Links -->
        <h6 class="text-uppercase fw-bold mb-4">{{$t('contact')}}</h6>
        <p>
            <i class="fas fa-home me-3"></i> {{$t('f-locat')}}
        </p>
        <p>
            <i class="fas fa-envelope me-3"></i>
            info@alzwahed.com
        </p>
        <p>
            <MDBIcon icon="phone" class="me-3" /> +966 11 215 5556
        </p>
        <p>
            <MDBIcon icon="print" class="me-3" /> +966 11 269 4443
        </p>
        </MDBCol>
        <!-- Grid column -->
    </MDBRow>
    <!-- Grid row -->
    </MDBContainer>
    </section>
    <!-- Section: Links  -->

    <!-- Copyright -->
    <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05)">
      © 2021 Copyright:
      <a class="text-reset fw-bold" href="https://tobiadiv.github.io/TobiDiv">TobiaDiv. All right reserved</a>
    </div>
    <!-- Copyright -->
  </MDBFooter>
  <!-- Footer -->
</template>
<script>
import {
    MDBFooter,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon
} from 'mdb-vue-ui-kit';

export default {
    name:"TheFooter",
    components: {
        MDBFooter,
        MDBContainer,
        MDBRow,
        MDBCol,
        MDBIcon
    },
};
</script>
<style scoped>

</style>