<template>
    <div class="footer">
        <v-bottom-nav
        fixed
        :active.sync="bottomNav"
        :value="true"
        
        >

        <v-btn 
            v-for="(link, index) in links"
            :key="index"
            color="teal"
            flat
            :value="link.name"
            router :to="link.route"
        >
            <span>{{ link.text }}</span>
            <v-icon>{{ link.icon }}</v-icon>
        </v-btn>

        </v-bottom-nav>
    </div>
</template>
<script>

export default {
    name: 'Footer',
    data() {
        return {
            bottomNav: '',
            links: [
                {icon: 'dashboard', text: 'Portfolio', name: 'portfolio', route: '/'},
                {icon: 'person', text: 'About Me', name: 'about', route: '/about'},
            ],
        }
    },
    created() {
        //Highlight currently active route.
        this.bottomNav = this.$route.name;
    },
    computed :{
        current_route(){
            return this.$route;
        }
    }
}
</script>
