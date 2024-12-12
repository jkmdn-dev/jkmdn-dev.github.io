<script setup lang="ts">
import Title from "./main/Title.vue";
import WorkExperience from "./main/WorkExperience.vue";
import Education from "./main/Education.vue";
</script>

<template>
  <div className="grid grid-rows-[210px_auto] col-start-3 bg-main">
    <Title />
    <div class="flex flex-col gap-y-12 pb-12">
      <WorkExperience />
      <Education />
    </div>
  </div>
</template>
