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
                                v-for="(image,i) in project.images"
                                :key="i"
                                :src="`https://project6.nimdevelopment.com/storage/upload/${image.name}`"
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
                                    {{ project.desc }}
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
            app.project = response.data.data;
            console.log(response.data.data);
	    
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
