<template>
  <v-container fluid>
    <v-card class="ma-3 pa-3">
      <v-card-title primary-title>
        <div class="headline primary--text">User Profile</div>
      </v-card-title>
      <v-card-text>
        <div class="my-4">
          <div class="subheading secondary--text text--lighten-3">Full Name</div>
          <div class="title primary--text text--darken-2" v-if="userProfile && userProfile.name">{{userProfile.name}}</div>
          <div class="title primary--text text--darken-2" v-else>-----</div>
        </div>
        <div class="my-3">
          <div class="subheading secondary--text text--lighten-3">Email</div>
          <div class="title primary--text text--darken-2" v-if="userProfile && userProfile.email">{{userProfile.email}}</div>
          <div class="title primary--text text--darken-2" v-else>-----</div>
        </div>
        <div class="my-3">
          <div class="subheading secondary--text text--lighten-3">Phone</div>
          <div class="title primary--text text--darken-2" v-if="userProfile && userProfile.phone">{{userProfile.phone}}</div>
          <div class="title primary--text text--darken-2" v-else>-----</div>
        </div>
        <div class="my-3">
          <div class="subheading secondary--text text--lighten-3">Website</div>
          <div class="title primary--text text--darken-2" v-if="userProfile && userProfile.website">{{userProfile.website}}</div>
          <div class="title primary--text text--darken-2" v-else>-----</div>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Store } from 'vuex';
import { readUserProfile } from '@/store/main/getters';

@Component
export default class UserProfile extends Vue {
  get userProfile() {
    return readUserProfile(this.$store);
  }
}
</script>
