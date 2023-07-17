<template>
  <div
    class="flex h-24 w-full min-w-0 max-w-xl overflow-hidden rounded-md border border-solid border-gray-200 transition-all dark:border-gray-600"
  >
    <div
      class="h-24 w-24 flex-none cursor-pointer border-0 border-r border-solid border-gray-200 bg-gray-300 transition-all dark:border-gray-600 dark:bg-gray-700"
      @click="$router.push(p.url)"
    >
      <img
        v-if="hero"
        :src="hero"
        class="pointer-events-none h-full w-full object-cover"
      />
      <div
        v-else
        class="flex h-full w-full items-center justify-center text-gray-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="h-12 w-12"
        >
          <path
            fill-rule="evenodd"
            d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z"
            clip-rule="evenodd"
          />
          <path
            d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z"
          />
        </svg>
      </div>
    </div>
    <div class="flex w-full min-w-0 flex-1 flex-col p-2">
      <router-link
        :to="url"
        class="w-full flex-none overflow-hidden text-ellipsis whitespace-nowrap text-xl font-bold"
        >{{ title }}</router-link
      >
      <div class="flex w-full flex-1 flex-col">
        <div
          class="box-content flex-1 overflow-hidden text-ellipsis whitespace-nowrap"
        >
          {{ content }}
        </div>
        <div class="box-content flex w-full flex-1 justify-end space-x-1">
          <span
            class="flex cursor-pointer items-center rounded-full bg-gray-200 px-2 py-0.5 text-xs transition-all hover:bg-gray-100 dark:bg-gray-600 dark:hover:bg-gray-500"
            v-for="tag of tags"
            :key="`${key}-${tag}`"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { default: "" },
    hero: { default: "" },
    url: { default: "" },
    tags: { default: [] },
    key: { default: "" },
    content: { default: "" },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
