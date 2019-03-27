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
                            <!-- <v-card-actions>
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
                            </v-card-actions> -->
                        </v-card>
                    </v-flex>
                    <v-flex class="xs12 sm4 lg4" >
                        <v-card :class="card_spacer">
                            <v-list two-line>
          <v-list-tile @click="dial">
            <v-list-tile-action>
              <v-icon color="indigo">{{ contact.phone.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ contact.phone.content }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ contact.phone.sub }}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-icon>chat</v-icon>
            </v-list-tile-action>
          </v-list-tile>

          <v-divider inset></v-divider>

          <v-list-tile @click="mail">
            <v-list-tile-action>
              <v-icon color="indigo">{{ contact.email.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ contact.email.content }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ contact.phone.sub }}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-divider inset></v-divider>

          <v-list-tile @click="linkedin">
            <v-list-tile-action>
              <v-icon color="indigo">{{ contact.linkedin.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ contact.linkedin.content }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ contact.linkedin.sub }}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-divider inset></v-divider>

          <v-list-tile @click="address">
            <v-list-tile-action>
              <v-icon color="indigo">{{ contact.address.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ contact.address.content }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ contact.address.sub }}</v-list-tile-sub-title>
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
            //::nk make api from dashboard
            about: {
                img_lg: 'about-view-lg.png',
                img_md: 'about-view-md.png',
                img_sm: 'about-view-sm.png',
            },
            body_p1: "A result oriented Laravel developer with +2 years experience in developing and maintaining web applications. I am self taught and became advanced by working in a dev team and by developing 5+ projects as a freelancer.",
            body_p2: "I love laravel because it is a robust and complete framework. By investing lots of hours in this framework I became fast at writing laravel applications and I gained a deeper understanding of its underlying processes (like the service container). I am also comfortable at laravel package development.",
            contact: {
              phone: {
                icon: 'phone',
                content: '(+31) 6 363 49 028',
                sub: 'Mobile',
                nr: '+31636349028',
              },
              email: {
                icon: 'mail',
                content: 'nick@nimdevelopment.com',
                sub: 'Work Mail',
              },
              linkedin: {
                icon: 'group',
                content: 'linkedin.com/in/nick-knierim-4a0759172',
                sub: 'LinkedIn',
              },
              address: {
                icon: 'location_on',
                content: 'Zuidvliet 111',
                sub: 'Maassluis, 3141AP',
                maps_link: 'https://www.google.com/maps/place/Zuidvliet+111,+3141+AP+Maassluis/@51.9232074,4.2577421,17z/data=!3m1!4b1!4m5!3m4!1s0x47c44c987722e6af:0x45995bbd611241e3!8m2!3d51.9232041!4d4.2599254'
              }
            }
        }
    },
    methods: {
        linkedin(){
          window.open(`https://${this.contact.linkedin.content}`);
        },
        address(){
          window.open(this.contact.address.maps_link);
        },
        dial(){
          document.location.href = `tel:${this.contact.phone.nr}`;
        },
        mail(){
          window.location.href = "mailto:mail@example.org";
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
