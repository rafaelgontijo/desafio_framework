<template>
  <v-container fluid>
    <v-card class="ma-3 pa-3">
      <v-card-title primary-title>
        <div class="headline primary--text">Posts</div>
      </v-card-title>
      <v-card-text>
        <v-container fluid grid-list-xl>
        <v-layout wrap justify-space-around>
            <v-flex v-for="post in posts" :key="post.id">
                <v-card class="mx-auto" max-width="700" min-height="200">
                    <v-card-title>
                        <div class="headline">{{post.title}}</div>
                    </v-card-title>

                    <v-card-text >
                        <div class="text--primary">
                            {{post.body}}
                        </div>
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          icon
                          @click="show_comments = !show_comments"
                        >
                          <v-icon>comment</v-icon>
                        </v-btn>
                      </v-card-actions>

                    <v-expand-transition>
                      <div v-show="show_comments">
                        <v-divider></v-divider>
                        <v-flex v-for="comment in post.comments" :key="comment.id">
                          <v-card class="mx-auto" max-width="600">
                            <v-card-title>
                              Nome: {{comment.name}}<br/>
                              Email: {{comment.email}}
                            </v-card-title>
                            <v-card-text>
                              {{comment.body}}
                            </v-card-text>
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
import { readPost } from '@/store/posts/getters';
import { dispatchGetPosts } from '@/store/posts/actions';

@Component
export default class Posts extends Vue {
  show_comments: boolean = false;
  get posts() {
    return readPost(this.$store);
  }
  public async mounted() {
    await dispatchGetPosts(this.$store);
  }
}
</script>
