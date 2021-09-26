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
import { defineComponent, reactive, onMounted } from '@nuxtjs/composition-api'

// 以下、@vue/apollo-composable を使ったCompositioonAPI向けの書き方
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'

// 本当はファイルを分けたいが、エラーが解決できないので原因調査
// import getPokemons from '@/apollo/queries/pokemons.gql'

export default defineComponent({
  components: {},

  setup() {
    const state = reactive({})

    // これも公式ドキュメントに従って書いたが動かないので原因調査
    // const { result, loading } = useQuery(
    //   gql`
    //     query getPokemons($num: Int!) {
    //       pokemons(first: $num) {
    //         id
    //         name
    //         image
    //       }
    //     }
    //   `,
    //   {
    //     first: 5,
    //   }
    // )

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

    onMounted(async () => {})

    return { state, result, loading }
  },
})
</script>
