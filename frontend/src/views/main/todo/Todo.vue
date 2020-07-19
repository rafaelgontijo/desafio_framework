<template>
  <v-container fluid>
    <v-card class="ma-3 pa-3">
      <v-card-title primary-title>
        <div class="headline primary--text">TO-DOs</div>
      </v-card-title>
      <v-card-text>
        <v-container fluid grid-list-xl>
        <v-layout wrap justify-space-around>
            <v-flex v-for="todo in todos" :key="todo.id">
                <v-card class="mx-auto" max-width="130" min-height="200">
                    <v-card-title>
                        <div class="headline">TO-DO</div>
                    </v-card-title>

                    <v-card-text >
                        <div class="text--primary">
                            {{todo.title}}
                        </div>
                    </v-card-text>
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
import { readTodo } from '@/store/todo/getters';
import { dispatchGetTodos } from '@/store/todo/actions';

@Component
export default class Todo extends Vue {
  get todos() {
    return readTodo(this.$store);
  }
public async mounted() {
    await dispatchGetTodos(this.$store);
  }
}
</script>
