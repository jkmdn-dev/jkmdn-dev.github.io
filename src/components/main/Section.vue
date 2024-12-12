<script lang="ts" setup>
defineProps<{
  letter: string;
  title: string;
}>();
</script>

<template>
  <div>
    <div class="grid grid-cols-[auto_1fr] gap-x-3 ml-4 h-16 text-[20px]">
      <div
        class="grid h-12 w-12 place-content-center border-2 rounded-full border-accent-secondary"
      >
        <div
          class="grid h-10 w-10 place-content-center bg-accent-secondary rounded-full"
        >
          <div class="text-main">
            {{ letter }}
          </div>
        </div>
      </div>
      <div class="grid grid-rows-2 gap-y-1 mr-4">
        <div class="self-end text-main-secondary">{{ title }}</div>
        <div class="bg-main-secondary h-1 w-full"></div>
      </div>
    </div>
    <div class="flex flex-col gap-y-10">
    <slot>
      nothing here yet
    </slot>
    </div>
  </div>
</template>
