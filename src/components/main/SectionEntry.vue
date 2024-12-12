<script setup lang="ts">
import SkillList from "../common/SkillList.vue";
defineProps<{
  title: string;
  company: string;
  start: string;
  end: string;
  skills: Array<string>;
}>();
</script>

<template>
  <div class="grid grid-cols-[48px_1fr] gap-x-6 ml-4 text-[12px]">
    <div class="grid grid-rows-[32px_1fr_32px] w-full">
      <div class="flex place-content-center">
        <p class="text-center text-purple italic text-[10px] w-2/3">
          {{ end }}
        </p>
      </div>
      <div class="relative mt-1 mb-1">
        <div
          class="absolute right-1/2 w-2 h-2 bg-accent-secondary rotate-45 translate-x-[3px]"
        />
        <div
          class="absolute right-1/2 w-2 h-2 bg-main rotate-45 translate-x-[3px] translate-y-0.5"
        />
        <div class="absolute right-1/2 w-0.5 h-full bg-accent-secondary" />
      </div>
      <div class="flex place-content-center">
        <p class="text-center text-purple italic text-[10px]">{{ start }}</p>
      </div>
    </div>
    <div class="grid grid-rows-[auto_auto_1fr_auto] text-main-secondary">
      <h3 class="text-[10px]">{{ company }}</h3>
      <h2 class="text-[16px] decoration-2 decoration-dark underline mb-4">
        {{ title }}
      </h2>
      <div class="mb-4 mr-16">
        <slot> </slot>
      </div>
      <SkillList :skills="skills" color_mode="light" />
    </div>
  </div>
</template>
