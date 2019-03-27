<template>
    <v-app>
        <!-- Navbar -->
        <Navbar />
        <v-content>
            <!-- Views -->
            <router-view></router-view>
        </v-content>

        <!-- Footer --> 
        <Footer class="hidden-sm-and-up" />xwxw
    </v-app>
</template>
<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

    export default {
        name: 'App',
        components: {
            Navbar,
            Footer
        },
        computed: {
            footer(){
                switch (this.$vuetify.breakpoint.name) {
                    case 'lg': return 'mx-4';
                    case 'md': return 'mx-4';
                    default: return '';
                }
            }
        }
    }
</script>