<script lang="ts">
export default {
  props: ["text"],
  data: function () {
    return {};
  },
  methods: {
    onClick() {
      this.$emit("onClickButton");
    },
  },
  mounted() {},
  setup() {},
};
</script>

<template>
  <button @click="onClick">{{ text }}</button>
</template>

<style lang="scss" scoped>
button {
  --c: #000000; /* the color*/

  --_g: linear-gradient(var(--c) 0 0) no-repeat;
  background: var(--_g) calc(var(--_p, 0%) - 100%) 0%,
    var(--_g) calc(200% - var(--_p, 0%)) 0%,
    var(--_g) calc(var(--_p, 0%) - 100%) 100%,
    var(--_g) calc(200% - var(--_p, 0%)) 100%;
  background-size: 50.5% calc(var(--_p, 0%) / 2 + 0.5%);
  outline-offset: 0.1em;
  transition: background-size 0.4s, background-position 0s 0.4s;
}
button:hover {
  --_p: 100%;
  border-radius: 20%;
  transition: background-position 0.4s, background-size 0s;
  color: white;
}
button:active {
  box-shadow: 0 0 9e9Q inset #0009;
  background-color: var(--c);
  color: #fff;
}

button {
  margin: 0 10px 0 0;
  font-size: 15px;
  cursor: pointer;
  padding: 0.1em 0.6em;
  font-weight: bold;
  border: none;
}
</style>