<template>
    <footer class="footer p-0 footer-dark" id="footer-main">
        <div class="container">
            <div class="py-4">
                <div class="row align-items-md-center">
                    <div class="col-md-4 mb-4 mb-md-0">
                        <div class="d-flex align-items-center">
                            <p class="mb-0">&copy; {{ new Date().getFullYear() }} Cogneasy . All rights reserved.</p>
                        </div>
                    </div>

                    <div class="col-sm-8 col-md-4 ml-auto">
                        <ul class="nav justify-content-center justify-content-md-end mt-3 mt-md-0">
                            <li class="nav-item">
                                <a class="nav-link" href="https://www.linkedin.com/company/cogneasy/" target="_blank">
                                    <i class="fab fa-linkedin"></i>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="https://twitter.com/cogneasy " target="_blank">
                                    <i class="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="https://www.instagram.com/cogneasy/" target="_blank">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="https://web.facebook.com/Cogneasy-100805561624067" target="_blank">
                                    <i class="fab fa-facebook"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    @import "./../../../public/scss/_colors.scss";

    .footer {
        background: $primary;

        .fab {
            font-size: 1.2rem;
        }
    }
</style>