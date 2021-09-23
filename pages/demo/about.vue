<template>
  <!-- CompositionAPI の書き方の練習（後で消す） -->
  <div>
    <p>demo/ABOUT</p>
    <NuxtLogo />
    <VuetifyLogo />
    <p>{{ state.greateText }}: {{ state.count }}</p>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  computed,
  watch,
} from '@nuxtjs/composition-api'

import NuxtLogo from '@/components/NuxtLogo.vue'
import VuetifyLogo from '@/components/VuetifyLogo.vue'

export default defineComponent({
  components: {
    NuxtLogo,
    VuetifyLogo,
  },
  // 引数に props(第一引数), context(emit 第二引数)
  setup() {
    const state = reactive({
      greateText: 'Hello',
      count: 0,
    })
    const isRegulars = computed(() => {
      return state.count >= 3
    })
    watch(
      () => state.count,
      () => {
        if (state.count === 3) {
          alert('常連になりました')
        }
      }
    )
    return {
      state,
      isRegulars,
    }
  },
})
</script>
