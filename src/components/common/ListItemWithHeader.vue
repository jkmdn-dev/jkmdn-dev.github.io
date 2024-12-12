<script setup lang="ts">
import ListItemCommon from './ListItemCommon.vue';
</script>
<template>
  <ListItemCommon>
    <div>
      <b class="underline">
        <slot name="header" />
      </b>
      <div class="mt-1">
        <slot name="content" />
      </div>
    </div>
  </ListItemCommon>
</template>
