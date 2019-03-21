<template>
    <nav>
        <!-- Snackbar -->
        <v-snackbar 
            v-model="snackbar"
            :timeout="3000"
            top
            color="success"
            >
            <span>Awesome! You added a new project.</span>
            <v-btn 
                flat color="white"
                @click="snackbar = false"
                >Close</v-btn>
        </v-snackbar>

        <v-toolbar flat app scroll-off-screen>
            <v-toolbar-side-icon class="grey--text hidden-xs-only" @click="collapse_drawer">
            </v-toolbar-side-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Nick</span>
                <span>Knierim</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <!-- Dropdown nav btn -->
            <v-menu offset-y>
                <template v-slot:activator="{ on }" >
                    <v-btn
                    class="hidden-xs-only"
                    color="grey"
                    flat
                    dark
                    v-on="on"
                    >
                    <v-icon left>
                        expand_more
                    </v-icon>
                    <span>Menu</span>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-tile
                    v-for="(link, index) in links"
                    :key="index"
                    router :to="link.route"
                    >
                        <v-icon left color="grey">{{link.icon}}</v-icon>
                        <v-list-tile-title>{{ link.text }}</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>

            
        </v-toolbar>

        <!-- Sidenav -->
        <v-navigation-drawer 
            app 
            v-model="darwer_collapse"
            stateless
            mini-variant
            class="grey darken-2"
            
            >
            <v-toolbar flat class="transparent">
                <v-list class="pa-0">
                    <v-list-tile avatar>
                    <v-list-tile-avatar>
                        <img src="/storage/img/nickpic-zoom.jpg">
                    </v-list-tile-avatar>

                    </v-list-tile>
                </v-list>
            </v-toolbar>

            <!-- Nav items -->
            <v-list>
                <v-list-tile v-for="(link, index) in links" v-bind:key="index" router :to="link.route" >
                    <v-list-tile-action route to="/projects">
                        <v-tooltip right :value="false">
                            <template v-slot:activator="{ on }">
                               
                                <v-icon color="white"  v-on="on">{{link.icon}}</v-icon>
                                </template>
                                <span>{{link.text}}</span>
                            </v-tooltip>
                    </v-list-tile-action>

                    <!-- <v-list-tile-content>
                        <v-list-tile-title class="white--text" >
                            {{link.text}}
                        </v-list-tile-title>
                    </v-list-tile-content> -->

                </v-list-tile>
            </v-list>

        </v-navigation-drawer>
    </nav>
</template>
<script>
export default {
    name: "Navbar",
    components:{
        
    },
    data(){
        return {
            drawer: true,
            links: [
                {icon: 'dashboard', text: 'Portfolio', route: '/'},
                {icon: 'person', text: 'About Me', route: '/about'},
            ],
            snackbar: false,
            mini: true,
            back: false
        }
    },
    methods:{
        collapse_drawer(){
            this.drawer = !this.drawer
        },
        project_added(){
            console.log('henkie');
            this.snackbar = true;
            this.$emit('projectAdded');
        }
    },
    computed: {
        darwer_collapse(){
            if(this.$vuetify.breakpoint.name == 'xs'){
                return false;
            }
            if(this.drawer == false){return false;}
            if(this.drawer == true){return true;}
        },
    }
}
</script>