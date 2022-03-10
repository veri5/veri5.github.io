<template>
  <b-container>
    <div class="reveal">
      <div class="slides">
        <section
          v-bind:data-markdown="filepath"
          data-separator="<!--h-->"
          data-separator-vertical="<!--v-->"
          data-separator-notes="^Note:"
          data-charset="iso-8859-15">
        </section>
      </div>
    </div>
  </b-container>
</template>

<script>
import Reveal from "reveal.js";
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Mermaid from '@/lib/mermaid.esm.min.mjs';
import "reveal.js/dist/reveal.css";

export default {
  name:"ExplainerSection",
  props: {
    filepath: {
      type: String,
    }
  },
  mounted() {
    this.reveal = Reveal.initialize({
      plugins: [Markdown, Mermaid],
      controls: true,
      progress: false,
      history: false,
      center: false,
      overview: false
    });
  },
  beforeDestroy(){
    this.reveal.destroy();
  }
};
</script>

<style>
.reveal-viewport {
  overflow: scroll;
}

.reveal {
  min-height: 80vh;
}

.slides {
  width: inherit !important;
  height: inherit !important;
  inset: unset !important;
  transform: none !important;
}

/* amends font rendering issue */
g.label {
  font-size:13px;
}
</style>