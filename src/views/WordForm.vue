<template>
  <div class="main">

    <!-- Top bar -->
    <div> <vue-file-toolbar-menu :content="my_menu" /> </div>

    <!-- Document editor -->
    <div style="font-family: Avenir, sans-serif">
      <vue-document-editor v-model:content="content" :page_margins="page_margins"/>
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

const subject = reactive(['Русскому Языку', "Математике", "Физике", "Химии", "Биологии", "Литературе", "Географии", "Истории", "Обществознанию", "Английскому языку", "Информатике"])
const stage = reactive(["школьного", "муниципального", "регионального", "заключительного"])
const olympiad = reactive(["Всероссийской олимпиады школьников", "Межрегиональной олимпиады школьников «Высшая проба»", "Олимпиады школьников «Ломоносов»", "Межрегиональной олимпиады школьников «САММАТ»", "Турнира имени М.В. Ломоносова", "Всероссийской олимпиады школьников «Нанотехнологии — прорыв в будущее!»", "Межрегиональной олимпиады школьников «Будущие исследователи — будущее науки»"])

const rightData = reactive({
  data: store.participants,
  subjects: "Математике",
  stages: "регионального",
  olymdiads: "Всероссийской олимпиады школьников",
  editIndex: 0
})

const my_menu = computed(() => [
  {
    text: "Печать",
    title: "Print",
    icon: "print",
    click: () => window.print()
  },
  {
    text: "Этапы", menu: [
      { text: "Школьный", click: () => rightData.stages = stage[0] },
      { text: "Муниципальный", click: () => rightData.stages = stage[1] },
      { text: "Региональный", click: () => rightData.stages = stage[2] },
      { text: "Заключительный", click: () => rightData.stages = stage[3] },
    ]
  },
  {
    text: "Предметы", menu: [
      { text: "Русский язык", click: () => rightData.subjects = subject[0] },
      { text: "Математика", click: () => rightData.subjects = subject[1] },
      { text: "Физика", click: () => rightData.subjects = subject[2] },
      { text: "Химия", click: () => rightData.subjects = subject[3] },
      { text: "Биология", click: () => rightData.subjects = subject[4] },
      { text: "Литература", click: () => rightData.subjects = subject[5] },
      { text: "География", click: () => rightData.subjects = subject[6] },
      { text: "История", click: () => rightData.subjects = subject[7] },
      { text: "Обществознание", click: () => rightData.subjects = subject[8] },
      { text: "Английский язык", click: () => rightData.subjects = subject[9] },
      { text: "Информатика", click: () => rightData.subjects = subject[10] },
    ]
  },
  {
    text: "Олимпиады", menu: [
      { text: "Всероссийская олимпиада школьников", click: () => rightData.olymdiads = olympiad[0] },
      { text: "Межрегиональная олимпиада школьников «Высшая проба»", click: () => rightData.olymdiads = olympiad[1] },
      { text: "Олимпиада школьников «Ломоносов»", click: () => rightData.olymdiads = olympiad[2] },
      { text: "Межрегиональная олимпиада школьников «САММАТ»", click: () => rightData.olymdiads = olympiad[3] },
      { text: "Турнир имени М.В. Ломоносова", click: () => rightData.olymdiads = olympiad[4] },
      { text: "Всероссийской олимпиады школьников «Нанотехнологии — прорыв в будущее!»", click: () => rightData.olymdiads = olympiad[5] },
      { text: "Межрегиональной олимпиады школьников «Будущие исследователи — будущее науки»", click: () => rightData.olymdiads = olympiad[6] },
    ]
  },
  {
    text: "Предыдущий участник",
    title: "Previous",
    icon: "undo",
    click: () => {
      if (rightData.editIndex === 0) {
        return
      }
      rightData.editIndex -= 1
    }
  },
  {
    text: "Следующий участник",
    title: "Next",
    icon: "redo",
    click: () => {
      if (rightData.editIndex === (store.participants[0].children.length - 1)) {
        return
      }
      rightData.editIndex += 1
    }
  },
]);

const content = ref([
  { template: markRaw(Questionnaire), props: rightData },
])

const page_margins = "5mm 5mm"
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