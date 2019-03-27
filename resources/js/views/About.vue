<template>
    <div class="about">
        <v-layout justify-center>
            <v-container
                fluid
                grid-list-md
                class="mt-4 mb-5"
                >
                <v-layout row wrap :class="mx_size">
                    <v-flex class="xs12 sm8 lg8" >
                        <v-card
                          
                        >
                            <v-img
                            :src="`storage/img/${about_img}`"
                            height="250px"
                            >
                            </v-img>

                            <v-card-title primary-title>
                            <div>
                                <div class="headline">Nick Knierim</div>
                                <span class="grey--text">Pasionate about my craft.</span>
                            </div>
                            </v-card-title>
                            <v-card-text>
                              <p>{{ body_p1 }}</p>
                              <p>{{ body_p2 }}</p>
                            </v-card-text>
                            <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn icon>
                                <v-icon>favorite</v-icon>
                            </v-btn>
                            <v-btn icon>
                                <v-icon>bookmark</v-icon>
                            </v-btn>
                            <v-btn icon>
                                <v-icon>share</v-icon>
                            </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                    <v-flex class="xs12 sm4 lg4" >
                        <v-card :class="card_spacer">
                            <v-list two-line>
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color="indigo">phone</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>(650) 555-1234</v-list-tile-title>
              <v-list-tile-sub-title>Mobile</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-icon>chat</v-icon>
            </v-list-tile-action>
          </v-list-tile>

          <v-list-tile @click="">
            <v-list-tile-action></v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>(323) 555-6789</v-list-tile-title>
              <v-list-tile-sub-title>Work</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-icon>chat</v-icon>
            </v-list-tile-action>
          </v-list-tile>

          <v-divider inset></v-divider>

          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color="indigo">mail</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>aliconnors@example.com</v-list-tile-title>
              <v-list-tile-sub-title>Personal</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile @click="">
            <v-list-tile-action></v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>ali_connors@example.com</v-list-tile-title>
              <v-list-tile-sub-title>Work</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-divider inset></v-divider>

          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color="indigo">location_on</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>1400 Main Street</v-list-tile-title>
              <v-list-tile-sub-title>Orlando, FL 79938</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-layout>
    </div>
</template>
<script>
export default {
    name: 'About',
    data(){
        return {
            about: {
                img_lg: 'about-view-lg.png',
                img_md: 'about-view-md.png',
                img_sm: 'about-view-sm.png',
            },
            body_p1: "A result oriented Laravel developer with +2 years experience in developing and maintaining web applications. I am self taught and became advanced by working in a dev team and by developing 5+ projects as a freelancer.",
            body_p2: "I love laravel because it is a robust and complete framework. By investing lots of hours in this framework I became fast at writing laravel applications and I gained a deeper understanding of its underlying processes (like the service container). I am also comfortable at laravel package development."
        }
    },
    computed: {
        about_img(){
            switch (this.$vuetify.breakpoint.name) {
                case 'lg': return this.about.img_lg;
                case 'md': return this.about.img_md;
                case 'sm': return this.about.img_sm;
                case 'xs': return this.about.img_sm;
                default: return '';
            }
        },
        card_spacer(){
            switch (this.$vuetify.breakpoint.name) {
                case 'xs': return 'mt-3';
                default: return 'ml-3';
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
