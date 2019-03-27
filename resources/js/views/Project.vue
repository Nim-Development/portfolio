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
                    <v-flex class="xs12 sm12 lg10 offset-lg1" >
                        
                    
                        <v-card>
                            <!-- <v-img
                            :src="`/storage/img/projects/${project.src}`"
                            aspect-ratio="2.75"
                            ></v-img> -->
                            <v-carousel hide-delimiters height="100%">
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
            project: {},
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
        const app = this;
        app.id = this.$route.params.id;
        // Do a api get for single product
                
        // Grab all projects
        axios.get(`/api/project/${app.id}`)
        .then(function (response) {
            app.projects = response.data.data;
            console.log(response.data.data[0].images);
	    
        })
        .catch(function (error) {
            console.log(error);
        });

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
