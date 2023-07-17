<template>
  <div
    class="mt-2 box-border flex flex-col overflow-hidden rounded border-neutral-700"
  >
    <div
      class="box-border flex-none bg-neutral-700 p-2 pl-4 font-bold text-neutral-300"
    >
      {{ title }}
    </div>
    <div
      class="box-border flex-1 overflow-x-auto bg-[#2A2C33] !text-neutral-500"
    >
      <pre class="!my-0"><code><slot></slot></code></pre>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyCodeView",
  props: {
    title: { default: "Result" },
  },
};
</script>

<style>
.\!my-0 {
  margin-top: 0px !important;
  margin-bottom: 0px !important;
}

.mt-2 {
  margin-top: 0.5rem;
}

.box-border {
  box-sizing: border-box;
}

.flex {
  display: flex;
}

.h-screen {
  height: 100vh;
}

.w-screen {
  width: 100vw;
}

.flex-1 {
  flex: 1 1 0%;
}

.flex-none {
  flex: none;
}

.flex-col {
  flex-direction: column;
}

.overflow-hidden {
  overflow: hidden;
}

.overflow-x-auto {
  overflow-x: auto;
}

.rounded {
  border-radius: 0.25rem;
}

.border-neutral-700 {
  --tw-border-opacity: 1;
  border-color: rgb(64 64 64 / var(--tw-border-opacity));
}

.bg-\[\#22272e\] {
  --tw-bg-opacity: 1;
  background-color: rgb(34 39 46 / var(--tw-bg-opacity));
}

.bg-\[\#2A2C33\] {
  --tw-bg-opacity: 1;
  background-color: rgb(42 44 51 / var(--tw-bg-opacity));
}

.bg-neutral-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(64 64 64 / var(--tw-bg-opacity));
}

.p-2 {
  padding: 0.5rem;
}

.p-3 {
  padding: 0.75rem;
}

.pl-4 {
  padding-left: 1rem;
}

.font-bold {
  font-weight: 700;
}

.\!text-neutral-500 {
  --tw-text-opacity: 1 !important;
  color: rgb(115 115 115 / var(--tw-text-opacity)) !important;
}

.text-gray-400 {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}

.text-neutral-300 {
  --tw-text-opacity: 1;
  color: rgb(212 212 212 / var(--tw-text-opacity));
}
</style>
