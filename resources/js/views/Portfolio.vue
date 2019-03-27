<template>
    <div class="portfolio">
        <v-layout justify-center>
            <v-container
                fluid
                grid-list-md
                class="mt-4 mb-5"
                >
                <v-layout row wrap :class="mx_size">
                    <v-flex
                    v-for="card in projects_positioned"
                    :key="card.title"
                    :class="card.flex"
                    >
                        <v-hover >
                            <v-card
                                slot-scope="{ hover }"
                                :class="hover ? 'elevation-12' : 'elevation-3'"
                                color="grey lighten-4"
                                
                            >
                                <v-img
                                @click="card.show = !card.show"
                                :src="`https://project6.nimdevelopment.com/storage/upload/${card.images[0].name}`"
                                :height="card.height"
                                :gradient="hover ? '' : gradient"
                                >
                                <v-container
                                    fill-height
                                    fluid
                                    pa-2
                                >

                                </v-container>
                                </v-img>

                                <v-card-actions >
                                    <v-btn flat icon @click="card.show = !card.show">
                                        <v-icon>{{ card.show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                                    </v-btn>
                                    <v-fade-transition>
                                        <div class="headline ml-2" @click="card.show = !card.show">{{ card.title }}</div>
                                    </v-fade-transition>
                                    
                                    <v-spacer></v-spacer>

                                    <SpeedDial :links="card.links" :id="card.id"/>

                                </v-card-actions>
                                <v-slide-x-transition hide-on-leave>
                                    <v-card-text v-show="card.show">
                                        {{ card.desc }}
                                    <br>
                                    <br>
                                        <router-link :to="`project/${card.id}`">Read more..</router-link>
                                    </v-card-text>
                                </v-slide-x-transition>
                            </v-card>
                        </v-hover>
                    </v-flex>
                </v-layout>
                <!-- Packages -->
                <!-- Packages -->
                <v-layout row wrap :class="`${mx_size} mt-3`">
                    <v-flex 
                        v-for="(pkg, index) in packages"
                        :key="index"
                        :class="pkg.flex"
                        >
                        <v-card color="blue-grey darken-2" class="white--text">

                            <v-card-title primary-title>
                                <div>
                                <div class="headline">{{ pkg.title }}</div>
                                <div class="text--white lighten-3">{{ pkg.mini_desc }}</div>
                                </div>
                            </v-card-title>

                        <v-divider light></v-divider>
                        <v-card-actions class="pa-3">
                            
                            <v-btn block target="_blank" :href="pkg.link" small>
                                GitHub
                            </v-btn>
                        </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
            
        </v-layout>
    </div>
</template>
<script>
import SpeedDial from "../components/SpeedDial.vue";
import axios from "axios";
export default {
    name: 'Portfolio',
    components: {
        SpeedDial
    },
    data() {
        return {
            show: false,
            //api_base: 'nimdevelopment.com/',
            gradient: 'to bottom right, rgba(250, 250, 250, .1), rgba(85,85,85,0.0)',
            projects: [{}],
            packages: [
                {
                    title: 'Package - Contact Form',
                    flex: 'xs6 sm6 md6 lg6',
                    mini_desc: 'A package that includes a full contact form. The form submittions are automatically saved to the database and send out to the specified email address.',
                    show: false,
                    link: "https://github.com/Nim-Development/contact-package",
                },
                {
                    title: 'Package - form pre-compiler',
                    flex: 'xs6 sm6 md6 lg6',
                    mini_desc: 'A package which allows you to pre-compile fors from your Controller.',
                    show: false,
                    link: "https://github.com/Nim-Development/Laravel-FormBuilder",
                }
            ]
        }
    },
    created(){
        const app = this;
        // Grab all projects
        axios.get(`/api/projects`)
        .then(function (response) {
            app.projects = response.data.data;	    
            console.log(response.data.data);
        })
        .catch(function (error) {
            console.log(error);
        });
        //console.log(projects_positioned);
    },
    computed: {
        projects_positioned(){
            return this.projects.sort(function(a,b){
                return a.position - b.position;
            });
        },
        tooltip_show() {
            switch (this.$vuetify.breakpoint.name) {
                case 'xs': return true;
                default: return false;
            }
        },
        mx_size(){
            switch (this.$vuetify.breakpoint.name) {
                case 'lg': return 'mx-4';
                case 'md': return 'mx-4';
                default: return '';
            }
        }
    }
}
</script>
<style>

</style>