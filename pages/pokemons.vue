<template>
  <div>
    <div v-if="loading">Loading...</div>
    <v-container v-else-if="result && result.pokemons" fluid>
      <v-row dense>
        <v-col v-for="pokemon in result.pokemons" :key="pokemon.id" :cols="12">
          <v-card>
            <NuxtLink :to="`pokemon/${pokemon.id}`">
              <v-img
                :src="pokemon.image"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                contain
                height="800"
              >
                <v-card-title v-text="pokemon.name"></v-card-title>
              </v-img>
            </NuxtLink>
          </v-card>
        </v-col>
      </v-row>

      <br />

      <v-expansition-panels accordion>
        <v-expansition-panel>
          <v-expansition-header>Show Query Result</v-expansition-header>
          <v-expansition-panel-content>
            {{ result.pokemons }}
          </v-expansition-panel-content>
        </v-expansition-panel>
      </v-expansition-panels>
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'

import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'

// import pokemons from '~/apollo/queries/pokemons.gql'

// const numGetPokemons = 151

export default defineComponent({
  setup() {
    const state = reactive({})
    const { result, loading } = useQuery(
      gql`
        query getPokemons {
          pokemons(first: 5) {
            id
            name
            image
          }
        }
      `
    )
    return { state, result, loading }
  },
})
</script>
