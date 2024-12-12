<script lang="ts" setup>
defineProps<{
  skill: string;
  strong: number;
  weak?: number;
}>();
</script>

<template>
  <div class="mt-2 pb-1">
    <h3 class="text-side-primary">{{ skill }}</h3>
    <div class="grid grid-cols-5 border-comment border-[1px] h-3">
      <div v-for="_ in strong" class="h-full bg-comment-highlight"></div>
      <div v-for="_ in weak" class="h-full bg-comment-weak"></div>
    </div>
  </div>
</template>
<!-- .side-column .section .skill-bar {} -->
<!---->
<!-- .side-column .section .skill-bar h3 { -->
<!--   font-size: 14px; -->
<!--   color: #e0def4; -->
<!--   margin-bottom: 3px; -->
<!-- } -->
<!---->
<!-- .side-column .section .skill-bar .bar { -->
<!--   color: #e0def4; -->
<!--   border: 1px solid #403d52; -->
<!--   width: 99%; -->
<!--   height: 12px; -->
<!--   margin: 0px; -->
<!--   display: grid; -->
<!--   grid-template-columns: repeat(5, 1fr); -->
<!-- } -->
<!---->
<!-- .side-column .section .skill-bar .bar .bar-unit-strong { -->
<!--   background: #908caa; -->
<!-- } -->
<!---->
<!-- .side-column .section .skill-bar .bar .bar-unit-weak { -->
<!--   background: #524f67; -->
<!-- } -->
<!---->
<!-- .side-column .section .contact-container { -->
<!--   margin-top: 15px; -->
<!-- } -->
<!---->
<!-- .side-column .section .contact-container .contact { -->
<!--   border: 1px solid #403d52; -->
<!--   width: 99%; -->
<!--   height: 30px; -->
<!--   display: grid; -->
<!--   grid-template-columns: 1fr 4fr; -->
<!--   margin-bottom: 2px; -->
<!-- } -->
<!---->
<!-- .side-column .section .contact-container .contact .icon { -->
<!--   color: #eb6f92; -->
<!--   display: flex; -->
<!--   justify-content: center; -->
<!--   align-items: center; -->
<!-- } -->
<!---->
<!-- .side-column .section .contact-container .contact .content, -->
<!-- a { -->
<!--   color: #e0def4; -->
<!--   display: flex; -->
<!--   justify-content: left; -->
<!--   align-items: center; -->
<!-- } -->
<!---->
<!-- .side-column p { -->
<!--   color: #e0def4; -->
<!--   margin: 15px; -->
<!-- } -->
