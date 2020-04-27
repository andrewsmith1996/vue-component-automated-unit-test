<template>
  <div>
    <slot :data="someData" :method="someMethod"></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class TestComponent extends Vue {
  public readonly someData: string = 'Some Data';

  public someMethod(): void {
    alert('hello');
  }
}
</script>
