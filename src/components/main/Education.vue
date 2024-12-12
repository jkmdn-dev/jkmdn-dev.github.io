<script setup lang="ts">
import Section from "./Section.vue";
import SectionEntry from "./SectionEntry.vue";
</script>

<template>
  <Section letter="E" title="EDUCATION">
    <SectionEntry
      title="M.SC. PHYSICS"
      company="UMEÅ UNIVERSITY"
      start="JULY 2012"
      end="JULY 2014"
      :skills="['PHYSICS', 'MATEMATICS', 'STATISTICS', 'MATLAB']"
    >
      Specialized in theoretical physics and math. Thesis subject in quantum
      plasma physics.
    </SectionEntry>
  </Section>
    <SectionEntry
      title="B.SC. PHYSICS"
      company="UMEÅ UNIVERSITY"
      start="JULY 2007"
      end="MAY 2012"
      :skills="['PHYSICS', 'MATEMATICS', 'STATISTICS', 'MATLAB']"
      >General theoretical physics and math. Thesis subject in general
      relativity and differential geometry.</SectionEntry
    >
</template>
