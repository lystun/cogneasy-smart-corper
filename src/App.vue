<template>
    <div id="app">
        <Header />
        <div class="main-content">
            <router-view/>
        </div>
        <Footer />
    </div>
</template>

<script>
    import Header from '@/components/nav/Header'
    import Footer from '@/components/nav/Footer'

    export default {
        components : {
            Header, Footer
        }, 
    }
</script>

<style lang="scss">
    div {
        font-family: 'DM Sans', sans-serif;
    }

</style>
