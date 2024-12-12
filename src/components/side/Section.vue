<script lang="ts" setup>
const props = defineProps<{
  title: string
}>()
</script>

<template>
  <div class="grid grid-flow-row-dense ml-8 mr-2">
    <h2 class="text-rose text-[18px] mb-1">{{props.title}}</h2>
    <div class="bg-rose h-1 mb-2"></div>
    <div class="h-fit">
      <slot></slot>
    </div>
  </div>
</template>
