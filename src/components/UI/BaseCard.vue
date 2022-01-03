<template>
<!-- Footer -->
<MDBFooter :text="['center', 'lg-start', 'muted']">
    <!-- Section: Social media -->
    <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <!-- Left -->
        <div class="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
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
            <i class="fas fa-gem me-3"></i>Alzawahed Group
        </h6>
        <p>we are the ascetics and through the multiplicity of their work, they contribute to spreading the production awareness and the practical culture of our society and our homeland alike.</p>
        </MDBCol>
        <!-- Grid column -->

        <!-- Grid column -->
        <MDBCol md="2" lg="2" xl="2" class="mx-auto mb-4">
        <!-- Links -->
        <h6 class="text-uppercase fw-bold mb-4">Serverses</h6>
        <p>
            <a href="#!" class="text-reset">Security Guard</a>
        </p>
        <p>
            <a href="#!" class="text-reset">Freight & Logistics</a>
        </p>
        <p>
            <a href="#!" class="text-reset">It Solutions</a>
        </p>
        <p>
            <a href="#!" class="text-reset">Customs Clearance</a>
        </p>
        <p>
            <a href="#!" class="text-reset">Contracting</a>
        </p>
        </MDBCol>
        <!-- Grid column -->

        <!-- Grid column -->
        <MDBCol md="4" lg="3" xl="3" class="mx-auto mb-md-0 mb-4">
        <!-- Links -->
        <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
        <p>
            <i class="fas fa-home me-3"></i> Saudi arabia - Riyadh - Alwaha
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
    name:"BaseCard",
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