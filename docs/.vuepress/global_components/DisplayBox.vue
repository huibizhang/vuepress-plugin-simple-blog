<template>
  <div class="mt-1 rounded-md bg-slate-100 p-5 pt-2 dark:bg-stone-800">
    <div class="text-xs font-black text-slate-400">EXAMPLE</div>
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
.mt-1 {
  margin-top: 0.25rem /* 4px */;
}

.p-5 {
  padding: 1.25rem /* 20px */;
}

.pt-2 {
  padding-top: 0.5rem /* 8px */;
}

.text-xs {
  font-size: 0.75rem /* 12px */;
  line-height: 1rem /* 16px */;
}

.text-slate-400 {
  --tw-text-opacity: 1;
  color: rgb(148 163 184 / var(--tw-text-opacity));
}

.font-black {
  font-weight: 900;
}

.rounded-md {
  border-radius: 0.375rem /* 6px */;
}

.bg-slate-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(241 245 249 / var(--tw-bg-opacity));
}

:is(.dark .dark\:bg-stone-800) {
  --tw-bg-opacity: 1;
  background-color: rgb(41 37 36 / var(--tw-bg-opacity));
}
</style>
