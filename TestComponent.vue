<template>
  <div>
    <slot :data="someData" :method="someMethod"></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({})
export default class TestComponent extends Vue {
  someData: string = 'Some Data';

  someMethod(): void {
    alert('hello');
  }
}
</script>
