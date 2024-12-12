<script setup lang="ts">
import Skill from './Skill.vue';
defineProps<{
  skills: Array<string>;
  color_mode: SkillColorMode;
}>();
</script>

<template>
  <div class="flex flex-wrap gap-y-1">
    <Skill v-for="skill in skills" :skill="skill" :color_mode="color_mode" />
  </div>
</template>
