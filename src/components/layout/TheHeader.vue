<template>
  <MDBNavbar expand="lg" light bg="light" position="top" container>
    <MDBNavbarBrand href="#">
      <img
        src="../../assets/logo.png"
        height="75"
        alt="alzawahed Logo"
        loading="lazy"
      />
    </MDBNavbarBrand>
    <MDBNavbarToggler
      @click="collapse1 = !collapse1"
      target="#navbarToggleExternalContent"
    ></MDBNavbarToggler>
    <MDBCollapse v-model="collapse1" id="navbarrightContent">
      <MDBNavbarNav right class="mb-2 mb-lg-0">
        <MDBNavbarItem class="fw text-center" to="/home" active>{{$t('home')}}</MDBNavbarItem>
        <MDBNavbarItem class="fw text-center">
          <MDBDropdown class="nav-item" v-model="dropdown1">
            <MDBDropdownToggle
              tag="a"
              class="nav-link fw"
              @click="dropdown1 = !dropdown1"
            >
              {{$t('services')}}
            </MDBDropdownToggle>
            <MDBDropdownMenu aria-labelledby="dropdownMenuButton">
              <MDBDropdownItem to="/security"
                >{{$t('security')}}</MDBDropdownItem
              >
              <MDBDropdownItem to="/logistics"
                >{{$t('logistics')}}</MDBDropdownItem
              >
              <MDBDropdownItem to="/it">{{$t('it')}}</MDBDropdownItem>
              <MDBDropdownItem to="/clearance"
                >{{$t('clearance')}}</MDBDropdownItem
              >
              <MDBDropdownItem to="/contarcting"
                >{{$t('contarcting')}}</MDBDropdownItem
              >
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBNavbarItem>
        <MDBNavbarItem class="fw text-center" to="/contact"
          >{{$t('contact')}}</MDBNavbarItem
        >
        <!-- Lang Dropdown -->
        <MDBDropdown class="nav-item text-center" v-model="dropdown5">
          <MDBDropdownToggle
            tag="a"
            class="nav-link"
            @click="dropdown5 = !dropdown5"
          >
            <MDBIcon :flag="flag" class="m-0"></MDBIcon>
          </MDBDropdownToggle>
          <MDBDropdownMenu>
            <MDBDropdownItem
              v-for="(lang, i) in langs"
              :key="`Lang${i}`"
              href="#"
              @click.prevent="setLang(lang.slug)"
            >
              <MDBIcon :flag="lang.flag" /> {{ lang.name }}
              <!-- <MDBIcon icon="check" class="text-success ms-2"></MDBIcon> -->
            </MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
      </MDBNavbarNav>
    </MDBCollapse>
  </MDBNavbar>
</template>

<script>
  import {
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBIcon,
  } from "mdb-vue-ui-kit";
  import { ref } from "vue";

  export default {
    components: {
      MDBNavbar,
      MDBNavbarToggler,
      MDBNavbarBrand,
      MDBNavbarNav,
      MDBNavbarItem,
      MDBCollapse,
      MDBDropdown,
      MDBDropdownToggle,
      MDBDropdownMenu,
      MDBDropdownItem,
      MDBIcon,
    },
    data() {
      return {
        langs: [
          { name: "العربية", slug: "ar", flag: "sa" },
          { name: "English", slug: "en", flag: "united-kingdom" },
        ],
      };
    },
    computed: {
      flag() {
        return this.$i18n.locale == "ar" ? "sa" : "united-kingdom";
      },
    },
    methods: {
      async setLang(lang) {
        this.switchDomDirection(lang);
        localStorage.setItem("lang", lang);
        this.$i18n.locale = lang;
      },
      switchDomDirection(lang) {
        if (lang == "ar") {
          document.querySelector("html").setAttribute("dir", "rtl");
          document.querySelector("html").setAttribute("lang", "ar");
          document.querySelector("html").classList.remove("en");
          document.querySelector("html").classList.add("ar");
          localStorage.setItem("dir", "rtl");
          localStorage.setItem("htmlLang", "ar");
          localStorage.setItem("removedClass", "en");
          localStorage.setItem("addedClass", "ar");
        } else if (lang == "en") {
          document.querySelector("html").setAttribute("dir", "ltr");
          document.querySelector("html").setAttribute("lang", "en");
          document.querySelector("html").classList.remove("ar");
          document.querySelector("html").classList.add("en");
          localStorage.setItem("dir", "ltr");
          localStorage.setItem("htmlLang", "en");
          localStorage.setItem("removedClass", "ar");
          localStorage.setItem("addedClass", "en");
        }
      },
    },
    setup() {
      const collapse1 = ref(false);
      const dropdown1 = ref(false);
      const dropdown5 = ref(false);
      return {
        collapse1,
        dropdown1,
        dropdown5,
      };
    },
  };
</script>

<style scoped>
  @import url("https://fonts.googleapis.com/css2?family=El+Messiri:wght@400;500;700&family=Lobster&family=Rubik&display=swap");
  * {
    font-family: "El Messiri", sans-serif;
  }
  .fw {
    font-size: 19px;
    font-weight: bolder;
  }
  html.ar ul.navbar-nav {
    margin-left: 0 !important;
    margin-right: auto !important;
  }
  html.en ul.navbar-nav {
    margin-left: auto !important;
    margin-right: 0 !important;
  }
  html.ar a.dropdown-toggle.nav-link::after {
    margin-right: 4px;
  }
</style>
