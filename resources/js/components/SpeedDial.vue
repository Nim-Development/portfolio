<template>
    <div class="speeddial">
        <v-speed-dial
            :open-on-hover="speed_dial_hover"
            v-model="fab"
            direction="top"
            transition="slide-y-reverse-transition"
            >
            <template v-slot:activator>
                <v-btn
                v-model="fab"
                color="grey lighten-3"
                dark
                fab
                small                
                >
                <v-icon color="grey darken-2">more_vert</v-icon>
                <v-icon color="grey darken-2">keyboard_arrow_up</v-icon>
                </v-btn>
            </template>


            <v-tooltip left :value="tooltip_show">
            <template v-slot:activator="{ on }">
                <v-btn
                    fab
                    dark
                    small
                    color="green mb-1"
                    router :to="{ name: 'project', params: { id: id }}"
                    v-on="on"
                    >
                    <v-icon>add</v-icon>
                </v-btn>
            </template>
            <span>Read More</span>
            </v-tooltip>      

            <v-tooltip 
            v-for="(link, index) in filtered_links"
            :key="index"
            left :value="tooltip_show">
            <template v-slot:activator="{ on }">
                <v-btn
                    fab
                    dark
                    small
                    :color="link.color"
                    v-on="on"
                    target="_blank"
                    :href="`${link.link}`"
                >
                    <v-icon>{{ link.icon }}</v-icon>
                </v-btn>
                </template>
            <span>{{ link.tooltip }}</span>
            </v-tooltip>

            </v-speed-dial>
    </div>
</template>
<script>
export default {
    name: "SpeedDial",
    props: ["id", "links"],
    data (){
        return {
            fab: false,
        }
    },
    computed: {
        tooltip_show() {
            switch (this.$vuetify.breakpoint.name) {
                case 'xs': return true;
                default: return true;
            }
        },
        speed_dial_hover() {
            switch (this.$vuetify.breakpoint.name) {
                case 'xs': return false;
                default: return true;
            }
        },
        filtered_links(){
            return this.links.filter(link => link.link != '' );
        }
    }
}
</script>
<style>

</style>
