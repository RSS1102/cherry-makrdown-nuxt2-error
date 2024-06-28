<!-- Please remove this file from your project -->
<template>
  <div id="cherry-markdown"></div>
</template>

<script>
import { CherryEngine } from 'cherry-markdown/dist/cherry-markdown.engine.core.common';

export default {
  name: 'NuxtTutorial',
  data() {
    return {
      markdown: ''
    }
  },
  mounted() {
    const cherryEngineInstance = new CherryEngine();
    const htmlContent = cherryEngineInstance.makeHtml('# welcome to cherry editor!');
  }
}
</script>
<style>
@import 'cherry-markdown/dist/cherry-markdown.css'
</style>