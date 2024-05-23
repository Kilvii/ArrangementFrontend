<template>
  <div class="main">

    <!-- Top bar -->
    <div> <vue-file-toolbar-menu :content="my_menu" /> </div>

    <!-- Document editor -->
    <div style="font-family: Avenir, sans-serif">
      <vue-document-editor v-model:content="content" />
    </div>
  </div>
</template>

<script setup>
import VueFileToolbarMenu from 'vue-file-toolbar-menu';
import VueDocumentEditor from 'vue-document-editor';
import Questionnaire from './Questionnaire.vue';
import { markRaw, ref, computed, reactive } from 'vue';
import { useArrangementStore } from '@/stores/ArrangementStore';
const store = useArrangementStore()
store.initParticipants()

const rightData = reactive({
  data: store.participants,
  editIndex: 0 
})

const my_menu = computed(() => [
  {
    text: "Print",
    title: "Print",
    icon: "print",
    click: () => window.print()
  },
  {
    text: "Previous",
    title: "Previous",
    icon: "undo",
    click: () =>  { rightData.editIndex -= 1 }
  },
  {
    text: "Next",
    title: "Next",
    icon: "redo",
    click: () =>  { rightData.editIndex += 1 }
  },
]);

const content = ref([
{ template: markRaw(Questionnaire), props: rightData },
])
</script>

<style>
html {
  height: 100%;
}

body {
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  background: rgb(248, 249, 250);
}

::-webkit-scrollbar {
  width: 16px;
  height: 16px;
}

::-webkit-scrollbar-track,
::-webkit-scrollbar-corner {
  display: none;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.5);
  border: 5px solid transparent;
  border-radius: 16px;
  background-clip: content-box;
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgba(0, 0, 0, 0.8);
}
</style>

<style scoped>
.main {
  width: fit-content;
  min-width: 100%;
}

.bar {
  position: sticky;
  left: 0;
  top: 0;
  width: calc(100vw - 16px);
  z-index: 1000;
  background: rgba(248, 249, 250, 0.8);
  border-bottom: solid 1px rgb(248, 249, 250);
  backdrop-filter: blur(10px);
  --bar-button-active-color: #188038;
  --bar-button-open-color: #188038;
  --bar-button-active-bkg: #e6f4ea;
  --bar-button-open-bkg: #e6f4ea;
}
</style>