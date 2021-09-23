<template>
  <!-- ClassStyleComponent removeの書き方の練習（後で消す） -->
  <div>
    <div class="hello">
      <h1>{{ msg }}</h1>

      <button @click="countNum">+</button>
      <p>{{ count }}</p>

      <p>{{ textLower }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

@Component
export default class Products extends Vue {
  @Prop() private msg!: string

  count: number = 0
  text: string = 'HELLO'

  public countNum(): void {
    this.count++
  }

  public get textLower(): string {
    return this.text.toLowerCase()
  }

  @Watch('count')
  onChangeCount(val: number, old: number) {
    console.log(`新しい数: ${val}, 古い数: ${old}`)
  }

  mounted(): void {
    console.log('ライフサイクルmounted')
  }
}
</script>
