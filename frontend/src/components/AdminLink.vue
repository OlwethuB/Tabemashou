<template>
    <a :href="routerLinkUrl" class="btn btn-primary">
      {{ label }}
    </a>
  </template>
  
  <script>
  export default {
    name: "AdminLink",
    props: {
      label: {
        type: String,
        required: true,
      },
      routerLinkUrl: {
        type: String,
        required: true,
      },
    },
  };
  </script>