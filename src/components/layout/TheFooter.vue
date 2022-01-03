<template>
    <!--==================== FOOTER ====================-->
        <footer class="footer__bg">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <h1 class="footer__title">Alzawahed</h1>
                        <span class="footer__subtitle">Group</span>
                    </div>

                    <ul class="navbar-nav col-lg-4">
                        <div class="row">
                        <li class="col-6 nav-item">
                            <a href="#services" class="nav-link">Services</a>
                        </li>
                        <li class="col-6 nav-item">
                            <a href="#portfolio" class="nav-link">Portfolio</a>
                        </li>
                        <li class="col-6 nav-item">
                            <a href="#contact" class="nav-link">Contact</a>
                        </li>
                        <li class="col-6 nav-item">
                            <a href="#contact" class="nav-link">Contact</a>
                        </li>
                        <li class="col-6 nav-item">
                            <a href="#contact" class="nav-link">Contact</a>
                        </li>
                        <li class="col-6 nav-item">
                            <a href="#contact" class="nav-link">Contact</a>
                        </li>
                        </div>
                    </ul>

                    <div class="footer__socials col-lg-4">
                        <a href="https://www.facebook.com/" target="_blank" class="footer__social">
                            <i class="uil uil-facebook-f"></i>
                        </a>

                        <a href="https://www.instagram.com/" target="_blank" class="footer__social">
                            <i class="uil uil-instagram"></i>
                        </a>

                        <a href="https://twitter.com/" target="_blank" class="footer__social">
                            <i class="uil uil-twitter-alt"></i>
                        </a>
                        <a href="https://mail.com/" target="_blank" class="footer__social">
                            <i class="uil uil-envelope"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
        <p class="footer__copy footer__bg">&#169; TobiaDiv. All right reserved</p>
</template>

<script>
export default {
    name:"TheFooter",
}
</script>

<style scoped>
    /*==================== FOOTER ====================*/
.footer__bg{
    background-color: hsl(136, 95%, 25%);
    padding: 2rem .5rem 3rem;
    margin-bottom: 0;
}
.footer__title{
    font-size: 50px;
    margin-bottom: -1rem;
}
.footer__title:hover{
    font-size: 52px;
}
.footer__subtitle{
    font-size: 20px;
    margin-left: 200px;
}
.nav-link{
    color:#FFF
}
.nav-link:hover{
    color: var(--text-color-light);
}
.footer__social{
    font-size: 1.5rem;
    margin-right: 2rem;
}
.footer__social:hover{
    color: var(--text-color-light);
}
.footer__copy{
    font-size: 18px;
    text-align: center;
    color: var(--text-color-light);
}
.footer__title,
.footer__subtitle,
.footer__social{
    color: #FFF;
}

/*========== SCROLL UP ==========*/
.scrollup{
    position: fixed;
    right: 1rem;
    bottom: -20%;
    background-color: var(--first-color);
    opacity: .8;
    padding: 0 .3rem;
    border-radius: 50%;
    z-index: var(--z-tooltip);
    transition: .4s;
}

.scrollup:hover{
    background-color: var(--first-color-alt);
}

.scrollup__icon{
    font-size: 1.5rem;
    color: #FFF;
}

/* Show scroll */
.show-scroll{
    bottom: 5rem;
}

</style>