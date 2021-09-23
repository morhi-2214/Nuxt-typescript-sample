<template>
  <!-- Vue.extend の書き方の練習 （後で消す） -->
  <div>
    <p>demo/INDEX</p>
    <div>
      <p>{{ greateText }}: {{ count }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

// data用に全て内包するオブジェクトの型を与える必要あり
export type DataType = {
  greateText: string
  count: number
}

export default Vue.extend({
  data(): DataType {
    return {
      greateText: 'HELLO',
      count: 0,
    }
  },
})
</script>
