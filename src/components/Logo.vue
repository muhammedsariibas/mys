<script lang="ts">
export default {
  components: {},
  data: function () {
    return {};
  },
};
</script>
<template>
  <div id="wrapper">
    <h1 class="glitch" data-text="MYS">MYS</h1>
  </div>
</template>

<style lang="scss" >
html,
body,
h1 {
  padding: 0;
  margin: 0;
}



#wrapper {
  text-align: center;
    width: 50px;
}



@mixin glitchCopy {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch {
  position: relative;
  color: #0e0d0d;
  font-weight: bold;
  font-size: 2em;
  letter-spacing: 1px;
  animation: glitch-skew 5s infinite linear alternate-reverse;

  &::before {
    @include glitchCopy;
    left: 2px;
    text-shadow: -2px 0 #161616;
    clip: rect(44px, 450px, 56px, 0);
    animation: glitch-anim 5s infinite linear alternate-reverse;
  }

  &::after {
    @include glitchCopy;
    left: -2px;
    text-shadow: -2px 0 #111111, 2px 2px #111111;
    clip: rect(44px, 450px, 56px, 0);
    animation: glitch-anim2 5s infinite linear alternate-reverse;
  }
}

@keyframes glitch-anim {
  $steps: 20;
  @for $i from 0 to $steps {
    #{percentage($i*(1/$steps))} {
      clip: rect(random(100) + px, 9999px, random(100) + px, 0);
      transform: skew((random(100) / 100) + deg);
    }
  }
}

@keyframes glitch-anim2 {
  $steps: 20;
  @for $i from 0 to $steps {
    #{percentage($i*(1/$steps))} {
      clip: rect(random(100) + px, 9999px, random(100) + px, 0);
      transform: skew((random(100) / 100) + deg);
    }
  }
}

@keyframes glitch-skew {
  $steps: 10;
  @for $i from 0 to $steps {
    #{percentage($i*(1/$steps))} {
      transform: skew((random(10) - 5) + deg);
    }
  }
}

</style>