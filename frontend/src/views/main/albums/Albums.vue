<template>
  <v-container fluid>
    <v-card class="ma-3 pa-3">
      <v-card-title primary-title>
        <div class="headline primary--text">Albums</div>
      </v-card-title>
      <v-card-text>
        <v-container fluid grid-list-xl>
        <v-layout wrap justify-space-around>
            <v-flex v-for="album in albums" :key="album.id">
                <v-card class="mx-auto" width="700">
                    <v-card-title>
                        <div class="headline">Album: {{album.title}}</div>
                    </v-card-title>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          icon
                          @click="show_photos = !show_photos"
                        >
                        <v-icon>{{ show_photos ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
                        </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                      <div v-show="show_photos">
                        <v-divider></v-divider>
                        <v-flex v-for="photo in album.photos" :key="photo.id">
                          <v-card>
                            <v-img
                                :src="photo.url"
                                class="white--text align-end"
                                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                                height="200px"
                            >
                            <v-card-title v-text="photo.title"></v-card-title>
                            </v-img>
                          </v-card>
                        </v-flex>
                      </div>
                    </v-expand-transition>
                </v-card>
            </v-flex>
        </v-layout>
        </v-container>

      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Store } from 'vuex';
import { readAlbum } from '@/store/albums/getters';
import { dispatchGetAlbums } from '@/store/albums/actions';

@Component
export default class Albums extends Vue {
  show_photos: boolean = false;
  get albums() {
    return readAlbum(this.$store);
  }
  public async mounted() {
    await dispatchGetAlbums(this.$store);
  }
}
</script>
