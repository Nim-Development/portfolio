<template>
    <div class="project">
        <v-layout justify-center>
            <v-container
                fluid
                grid-list-md
                
                >
                <v-btn router to="/"
                fab dark icon small color="grey lighten-2" >
                    <v-icon large dark>keyboard_arrow_left</v-icon>
                </v-btn>
                <v-layout row wrap class="mt-1">
                    <v-flex class="xs12 sm12 lg12" >
                        
                    
                        <v-card>
                            <!-- <v-img
                            :src="`/storage/img/projects/${project.src}`"
                            aspect-ratio="2.75"
                            ></v-img> -->
                            <v-carousel hide-delimiters>
                                <v-carousel-item
                                v-for="(item,i) in project.src"
                                :key="i"
                                :src="`/storage/img/projects/${item}`"
                                ></v-carousel-item>
                            </v-carousel>
                            <v-card-actions >
                                <h1 :class="`${display} font-weight-bold mt-1 ml-1`">{{ project.title }}</h1>                                
                                <v-spacer></v-spacer>
                                <SpeedDial class="mr-1" :links="project.links" :id="project.id"/>
                            </v-card-actions>
                            <!-- <v-card-title>
                                <h1 :class="`${display} font-weight-bold mt-1`">{{ project.title }}</h1>
                                <v-spacer></v-spacer>
                                <SpeedDial />
                            </v-card-title> -->
                            <v-card-text>
                                <p class="text--grey">
                                    Lorem ipsum dolor. Fugit eveniet accusamus ducimus! Rerum!
                                    Fugit deserunt suscipit deleniti beatae, voluptate dolor? Enim maxime dignissimos fugit accusantium reiciendis quidem eveniet accusamus ducimus! Rerum!
                                </p>
                                <p class="text--grey">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit deserunt omnis commodi accusantium a suscipit deleniti beatae, voluptate dolor? Enim maxime dignissimos fugit accusantium reiciendis quidem eveniet accusamus ducimus! Rerum!
                                </p>
                            </v-card-text>
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
    name: 'Project',
    components :{
        SpeedDial,
    },
    data(){
        return {
            id: null,
            projects: [
                {
                    id: 0,
                    title: 'Food E-Commerce Website',
                    src: [
                        'petit-pain/petit-pain1.png',
                        'petit-pain/petit-pain2.png',
                        'petit-pain/petit-pain3.png',
                    ],
                    flex: 'xs12 sm12 md12 lg12',
                    mini_desc: 'Petit Pain is a busy food company who was looking for ways to expand their business. I was hired to create an webpage on which their customers can easily place orders.',
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
                    src: [
                        'rotary/rotary1.png',
                        'rotary/rotary2.png'
                    ],
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
                    src: [
                        'nim-webshop/nim-webshop.png'
                        ],
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
                    src: [
                        'barber/barber1.png',
                        'barber/barber2.png'
                        ],
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
                    src: [
                        'delivery-backend/delivery-backend2.png',
                        'delivery-backend/delivery-backend1.png',
                        'delivery-backend/delivery-backend3.png',
                        'delivery-backend/delivery-backend4.png',
                        ],
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
                    src: [
                        'delivery-front-office/delivery-front-office1.png',
                        'delivery-front-office/delivery-front-office2.png',
                    ],
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
                    src: [
                        'spa-project-manager/spa-project-manager1.png',
                        'spa-project-manager/spa-project-manager2.png',
                        'spa-project-manager/spa-project-manager3.png'
                        ],
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
            images: [
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
                }
            ],
            tabs: [
                'web', 'shopping', 'videos', 'images', 'news'
            ],
        }
    },
    created() {
        this.id = this.$route.params.id;
    },
    computed: {
        project(){
            //replace for filter(), current method will cause array offset issues.
            return this.projects[this.id];
        },
        display(){
            switch (this.$vuetify.breakpoint.name) {
                case 'xs':
                    return '';
                    break;
                case 'sm':
                    return 'display-1';
                    break;
                default:
                    return 'display-2';
                    break;
            }

        }
    }
}
</script>
<style>

</style>
