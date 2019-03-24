<template>
    <div class="portfolio">
        <v-layout justify-center>
            <v-container
                fluid
                grid-list-md
                class="mt-4 mb-4"
                >
                <v-layout row wrap :class="mx_size">
                    <v-flex
                    v-for="card in projects"
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
                                :src="`/storage/img/projects/${card.src}`"
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
                                        {{ card.mini_desc }}
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
export default {
    name: 'Portfolio',
    components: {
        SpeedDial
    },
    data() {
        return {
            show: false,
            gradient: 'to bottom right, rgba(250, 250, 250, .1), rgba(85,85,85,0.0)',
            projects: [
                {
                    id: 0,
                    title: 'Food E-Commerce Website',
                    src: 'petit-pain/petit-pain1.png',
                    flex: 'xs12 sm12 md12 lg12',
                    desc: 'Petit Pain is a busy food company who was looking for ways to expand their business. I was hired to create an webpage on which their customers can easily place orders.',
                    height:'300px',
                    show: false,
                    links: [
                         {
                            link: "winkel.petitpain.nl",
                            tooltip: "View live project",
                            color: "red mb-1",
                            icon: "web"
                        }
                    ]
                },
                {
                    id: 1,
                    title: 'Rotary Charity/Commerce',
                    src: 'rotary/rotary1.png',
                    flex: 'xs12 sm6 md6 lg4',
                    mini_desc: 'The Dutch Rotary Club came up with the plan to sell christmas trees for a good cause. I helped them by designing an attractive website, where the trees can be pre-ordered.',
                    height:'200px',
                    show: false,
                    links: [
                         {
                            link: "rotary.nimdevelopment.com",
                            tooltip: "View live project",
                            color: "red mb-1",
                            icon: "web"
                        }
                    ]
                },
                {
                    id: 2,
                    title: 'Promotional Page 1',
                    src: 'nim-webshop/nim-webshop.png',
                    flex: 'xs12 sm6 md6 lg4',
                    mini_desc: 'A simple frontend page without any backend logics.',
                    height:'200px',
                    show: false,
                    links: [
                        {
                            link: "project1.nimdevelopment.com/",
                            tooltip: "View live project",
                            color: "red mb-1",
                            icon: "web"
                        }
                    ]
                },
                {
                    id: 3,
                    title: 'Promotional Page 2',
                    src: 'barber/barber1.png',
                    flex: 'xs12 sm6 md6 lg4',
                    mini_desc: 'A simple frontend page without any backend logics.',
                    height:'200px',
                    show: false,
                    links: [
                         {
                            link: "project3.nimdevelopment.com/",
                            tooltip: "View live project",
                            color: "red mb-1",
                            icon: "web"
                        }
                    ]
                },
                {
                    id: 4,
                    title: 'Delivery Service Backend',
                    src: 'delivery-backend/delivery-backend2.png',
                    flex: 'xs12 sm6 md6 lg4',
                    mini_desc: 'This is a fully function admin panel for managing categories, products, store settings, images, push messages and much more. The dashboard serves all data as an API.',
                    height:'200px',
                    show: false,
                    links: [
                         {
                            link: "dashboard.nimdelivery.com",
                            tooltip: "View live project",
                            color: "red mb-1",
                            icon: "web"
                        }
                    ]
                },
                {
                    id: 5,
                    title: 'Saas Front Office',
                    src: 'delivery-front-office/delivery-front-office1.png',
                    flex: 'xs12 sm6 md6 lg4',
                    mini_desc: 'A simple front office website for Saas.',
                    height:'200px',
                    show: false,
                    links: [
                         {
                            link: "nimdelivery.com",
                            tooltip: "View live project",
                            color: "red mb-1",
                            icon: "web"
                        }
                    ]
                },
                {
                    id: 6,
                    title: 'SPA - Project Manager',
                    src: 'spa-project-manager/spa-project-manager1.png',
                    flex: 'xs12 sm6 md6 lg4',
                    mini_desc: 'This is a Laravel/VueJs single page application that I have developed for practicing purposes. My main focuss was on familiarizing myself with the Vuetify library and general VueJs templating.',
                    height:'200px',
                    show: false,
                    links: [
                         {
                            link: "....",
                            tooltip: "View live project",
                            color: "red mb-1",
                            icon: "web"
                        },
                        {
                            link: "https://github.com/Nim-Development/laravel-vue-spa",
                            tooltip: "View code",
                            color: "indigo mb-1",
                            icon: "code"
                        }
                    ]
                }
            ],
            packages: [
                {
                    title: 'Package - Contact Form',
                    flex: 'xs6 sm4 md4 lg3',
                    mini_desc: 'A package that includes a full contact form. The form submittions are automatically saved to the database and send out to the specified email address.',
                    show: false,
                    link: "https://github.com/Nim-Development/contact-package",
                },
                {
                    title: 'Package - form pre-compiler',
                    flex: 'xs6 sm4 md4 lg3',
                    mini_desc: 'A package which allows you to pre-compile forms from your Controller.',
                    show: false,
                    link: "https://github.com/Nim-Development/Laravel-FormBuilder",
                },
                {
                    title: 'Contact Form Package 3',
                    flex: 'xs6 sm4 md4 lg3',
                    mini_desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nihil, quo incidunt molestias facere sint ducimus, adipisci necessitatibus atque.',
                    show: false,
                    link: null
                },
                {
                    title: 'Contact Form Package 4',
                    flex: 'xs6 sm4 md4 lg3',
                    mini_desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nihil, quo incidunt molestias facere sint ducimus, adipisci necessitatibus atque.',
                    show: false,
                    link: null
                }
            ]
        }
    },
    computed: {
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
