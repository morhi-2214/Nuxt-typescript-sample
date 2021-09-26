<template>
  <div v-if="pokemon">
    <v-container fluid>
      <v-img
        :src="pokemon.image"
        class="white--text align-end"
        gradient="to bottom rgba(0,0,0,.1), rgba(0,0,0,.5)"
        contain="true"
        height="800"
      >
        <v-card-title v-text="pokemon.name"></v-card-title>
      </v-img>
      <v-expansition-panels focusable>
        <!-- classification -->
        <single-explanation
          refer-key="Classification"
          :refer-value="pokemon.classification"
        />
        <!-- types -->
        <multi-explanation refer-key="Types" :refer-value="pokemon.types" />
        <!-- resistant -->
        <multi-explanation
          refer-key="Resistant"
          :refer-value="pokemon.resistant"
        />
        <!-- weaknesses -->
        <multi-explanation
          refer-key="Weaknesses"
          :refer-value="pokemon.weaknesses"
        />
        <!-- evolutions -->
        <evolution-explanation
          v-if="pokemon.evolutions"
          refer-key="Evolutions"
          :refer-value="pokemon.evolutions"
        />
        <!-- evolutionRequirements -->
        <multi-explanation
          v-if="pokemon.evolutionRequirements"
          refer-key="EvolutionRequirements"
          :refer-value="pokemon.evolutionRequirements"
        />

        <!-- レスポンス -->
        <v-expansion-panel>
          <v-expansion-panel-header>Show Query Result</v-expansion-panel-header>
          <v-expansion-panel-content class="justify-center">
            {{ pokemon }}
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansition-panels>
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted } from '@vue/composition-api'
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'

// import pokemon from "~/apollo/queries/pokemon.gql";
import multiExplanation from '~/components/multiExplanation.vue'
import singleExplanation from '~/components/singleExplanation.vue'
import evolutionExplanation from '~/components/evolutionExplanation.vue'

export default defineComponent({
  components: {
    multiExplanation,
    singleExplanation,
    evolutionExplanation,
  },
  setup() {
    const state = reactive({})

    const { result, loading } = useQuery(
      gql`
        query getPokemon {
          pokemon(id: this.$route.params.id) {
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
