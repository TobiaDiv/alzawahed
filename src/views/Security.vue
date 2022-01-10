<template>
    <MDBCarousel v-model="carousel" :items="items" fade/>
    <!--==================== main background ====================-->
    <div class="switch-color mb-5">
    <div class="container all-logos">
        <div class="row">
            <div class="col-xs-12 col-md-6">
                <img src="@/assets/security.jpg" class="img-fluid">
            </div>
            <div class="col-xs-12 col-md-6 text-center" style="margin-top: 130px;">
                <h2 class="text-center font-weight-bolder secur-title-color">Alzawahed for Services and Security Guards</h2>
                <p class="text-color">
                    Al-Zawahid Institution for Guarding and Security Services has been designed to meet the human instinctive need for security, 
                    protection and safety. Guard and security services are among its goals to protect facilities in a safe, fortified and risk-free 
                    environment. The necessary training for individuals on the methods of security, protection and safety according to programs 
                    specially prepared for that activity to preserve the properties of the establishments and to work with international standards 
                    in occupational safety to provide a comfortable atmosphere for work.
                </p>
                <button class="btn btn-color">Read More</button>
            </div>
        </div>
    </div>
    </div>
    <!--==================== why us ====================-->
    <section class="container mb-5">
        <div class="row">
            <div class="col-lg-6 col-sm-12 mb-4">
                <div class="card border-0 shadow rounded-xs pt-5">
                    <div class="card-body"> <i class="uil uil-eye icon-lg icon-color icon-bg-color icon-bg-circle mb-3"></i>
                        <h4 class="mt-4 mb-3 fon">Our vision</h4>
                        <p>We strive in Al Zawahid for Security Guards to achieve security and safety through the plans that are put in 
                            place to provide security and safety Plans that suit schools and hospitals and the transfer of money</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-sm-12 mb-4">
                <div class="card border-0 shadow rounded-xs pt-5">
                    <div class="card-body"> <i class="uil uil-constructor icon-lg icon-color icon-bg-color icon-bg-circle mb-3"></i>
                        <h4 class="mt-4 mb-3 fon">Our mission</h4>
                        <p>In our security guards, we always strive to protect the human element, develop security plans and strategies, 
                            periodic field supervision, provide means of transport and communication that enhance the protection and 
                            security process, the ability to effectively and directly manage crises throughout a continuous 24-hour period 
                            and finally provide money transfer services</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--==================== sevices ====================-->
    <div class="switch-color">
    <section class="container mb-5">
        <h1 class="text-center section-title">Our Services</h1>
        <div class="row">
            <div class="col-lg-3">
                <div class="row col-auto m-5">
                <i class="uil uil-user-md text-center icon"></i>
                <h3 class="text-center">Security and guarding</h3>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="row col-auto m-5">
                <i class="uil uil-cog text-center icon"></i>
                <h3 class="text-center">Control system</h3>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="row col-auto m-5">
                <i class="uil uil-building text-center icon"></i>
                <h3 class="text-center">Securing facilities</h3>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="row col-auto m-5">
                <i class="uil uil-window text-center icon"></i>
                <h3 class="text-center">Security doors</h3>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="row col-auto m-5">
                <i class="uil uil-users-alt text-center icon"></i>
                <h3 class="text-center">Personal escort</h3>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="row col-auto m-5">
                <i class="uil uil-money-insert text-center icon"></i>
                <h3 class="text-center">Securing the banking sector</h3>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="row col-auto m-5">
                <i class="uil uil-user-circle text-center icon"></i>
                <h3 class="text-center">Secure events</h3>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="row col-auto m-5">
                <i class="uil uil-bill text-center icon"></i>
                <h3 class="text-center">Secure the transfer of funds</h3>
                </div>
            </div>
        </div>
    </section>
    </div>
    <!--==================== contact for ====================-->
    <section class="container mb-5 text-center">
        <MDBRow>
            <MDBCol sm="6">
            <MDBCard>
                <MDBCardBody>
                <MDBCardTitle>Request a security guard service</MDBCardTitle>
                <MDBCardText>
                    Choose Al-Zawahed now and secure full security guard
                        <li>We provide the best security guard services</li>
                        <li>We have an integrated system of monitoring and control systems</li>
                        <li>We Al-Zawahid are happy to provide events and events</li>
                        <li>We Al-Zawahid have an insurance system for the banking sector and money transfers</li>
                </MDBCardText>
                <MDBBtn tag="a" href="#!" color="primary" aria-controls="contact1Label" @click="contact1 = true">Details</MDBBtn>
                </MDBCardBody>
            </MDBCard>
            </MDBCol>
            <MDBCol sm="6">
            <MDBCard>
                <MDBCardBody>
                <MDBCardTitle>Register with us now</MDBCardTitle>
                <MDBCardText>
                    If you want to be one of our security guards, register your information
                        <li>You have commitment and a decent appearance?</li>
                        <li>Is your physical strength intact?</li>
                        <li>Can you commit to professional training?</li>
                        <li>Can you pass the assessment?</li>
                </MDBCardText>
                <MDBBtn tag="a" href="#!" color="primary" aria-controls="contact2Label" @click="contact2 = true">Details</MDBBtn>
                </MDBCardBody>
            </MDBCard>
            </MDBCol>
        </MDBRow>
    </section>
    <!--=================== modal 1 =======================-->
    <MDBModal id="contact1" tabindex="-1" labelledby="contact1Label" v-model="contact1" contact1>
        <MDBModalHeader>
        <MDBModalTitle id="contact1Label"> Modal title </MDBModalTitle>
        </MDBModalHeader>
        <MDBModalBody>
            <form>
                <MDBInput class="mb-3" label="NAME" type="text" />
                <MDBInput class="mb-3" label="PHONE NUMBER" type="tel" />
                <MDBInput class="mb-3" label="Email" type="email" />
                <div class="form-group">
                    <label class="mt-2 mb-2" for="checkbox">Select a guard plan :</label>
                    <div class="row">
                        <div class="col-4 mb-2"><MDBCheckbox label="personal guard" v-model="checkbox1" /></div>
                        <div class="col-4 mb-2"><MDBCheckbox label="Occasions" v-model="checkbox2" /></div>
                        <div class="col-4 mb-2"><MDBCheckbox label="comp" v-model="checkbox3" /></div>
                        <div class="col-4 mb-2"><MDBCheckbox label="Factories" v-model="checkbox4" /></div>
                        <div class="col-4 mb-2"><MDBCheckbox label="Institutions" v-model="checkbox5" /></div>
                    </div>
                </div>
                <MDBTextarea label="COMMENT OR MESSAGE" rows="4" v-model="textareaValue" />
                <div class="text-center mt-3">
                    <button type="submit" class="btn btn-success">Submit</button>
                </div>
            </form>
        </MDBModalBody>
    </MDBModal>
    <!--=================== modal 2 =======================-->
    <MDBModal id="contact2" tabindex="-1" labelledby="contact2Label" v-model="contact2" contact2>
        <MDBModalHeader>
        <MDBModalTitle id="contact2Label"> Modal title </MDBModalTitle>
        </MDBModalHeader>
        <MDBModalBody>
            <form>
                <MDBInput class="mb-3" label="NAME" type="text" />
                <MDBInput class="mb-3" label="PHONE NUMBER" type="tel" />
                <MDBInput class="mb-3" label="Email" type="email" />
                <MDBRadio label="Morning time" value="option1" v-model="radio2" inline name="inlineRadioOptions" />
                <MDBRadio label="Evening period" value="option2" v-model="radio2" inline name="inlineRadioOptions" />
                <MDBRadio label="night period" value="option2" v-model="radio2" inline name="inlineRadioOptions" />
                <MDBTextarea class="mt-3" label="COMMENT OR MESSAGE" rows="4" v-model="textareaValue" />
                <div class="text-center mt-3">
                    <button type="submit" class="btn btn-success">Submit</button>
                </div>
            </form>
        </MDBModalBody>
    </MDBModal>
</template>

<script>
import { ref } from "vue";
import { MDBCarousel, MDBRow, MDBCol, MDBCard, MDBCardBody,  MDBCardTitle, MDBCardText, MDBBtn, MDBModal, MDBModalHeader, MDBModalTitle, MDBModalBody, MDBCheckbox, MDBInput, MDBTextarea, MDBRadio} from "mdb-vue-ui-kit";

export default {
name:"Security",
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
    MDBInput,
    MDBTextarea,
    MDBRadio,
},
setup() {
    const contact1 = ref(false);
    const contact2 = ref(false);
    const items = [
    {
        src: "/img/security-bg1.jpg",
        alt: "alzawahed security",
        label: "First slide label",
        caption: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
        src: "/img/security-bg2.jpg",
        alt: "alzawahed security",
        label: "Second slide label",
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        src: "/img/security-bg3.jpg",
        alt: "alzawahed security",
        label: "Third slide label",
        caption:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur."
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