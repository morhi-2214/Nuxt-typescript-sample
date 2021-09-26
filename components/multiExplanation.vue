<template>
  <v-expansion-panel>
    <v-expansion-panel-header>{{ referKey }}</v-expansion-panel-header>
    <v-expansion-panel-content
      v-for="(value, key) in referValue"
      :key="key"
      class="text-center"
    >
      {{ value }}
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    referKey: {},
    referValue: {},
  },
  setup() {},
})
</script>
