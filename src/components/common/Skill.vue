<script lang="ts" setup>
defineProps<{
  skill: string;
  color_mode?: SkillColorMode;
}>();
</script>

<template>
  <div
    v-if="color_mode == 'light'"
    class="text-main-secondary border-accent border-l-4 pl-2 align-middle mr-4 text-[11px] h-3.5"
  >
    <h4>
      {{ skill }}
    </h4>
  </div>
  <div
    v-else
    class="text-side-primary border-accent border-l-4 pl-2 align-middle mr-4 text-[11px] h-3.5"
  >
    <h4>
      {{ skill }}
    </h4>
  </div>
</template>
