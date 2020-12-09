<template>
    <header class="header header-transparent" id="header-main">
        <nav class="navbar navbar-main navbar-expand-sm navbar-transparent navbar-dark bg-dark" id="navbar-main">
            <div class="container px-lg-0">
                <router-link class="navbar-brand mr-lg-5" to="/">
                    <img alt="Cogneasy Logo" src="@/assets/logo.png" id="navbar-logo">
                </router-link>
              
                <div class="">
                    <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                        <li class="nav-item mr-0">
                            <a href="#register" class="btn btn-white rounded-pill d-lg-inline-flex">
                                Reserve My Slot
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
    </header>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    @import "./../../../public/scss/_colors.scss";

    .header {
        .navbar-brand img {
            height: 40px;
        }

        .btn {
            color: $white;
            // background: $another;
            background: $tertiary;
            border: none
        }
    }

    @media screen and (max-width: 600px) {
        .header {
            .navbar-brand img {
                height: 30px;
            }

            .btn {
               padding: .5rem 1rem; 
            }
        }
    }
</style>