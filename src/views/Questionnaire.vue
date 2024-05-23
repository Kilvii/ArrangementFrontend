<template>
  <div class="template">
    <div class="header">
      <div>
        <div class="hide-in-print"
          style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
          <p style="margin-bottom: 0px">
            Анкета участника <span contenteditable="true" @keydown="preventLineBreaks">регионального</span> этапа <span
              contenteditable="true" @keydown="preventLineBreaks">Всероссийской олимпиады школьников</span></p>
          <p style="margin-top: 0px">по <span contenteditable="true" @keydown="preventLineBreaks">Математике</span></p>
        </div>
      </div>
    </div>
    <div class="place">
      <div class="place-text"
        style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start">
        <p style="margin: 0px"><b>Место в аудитории:</b> </p>
        <table style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start">
          <thead>
            <tr>
              <!-- <td v-for="(admin, index) in object[rightIndex]" :key="index">{{ admin }}</td> -->
              <td>{{ object[rightIndex].seat }}</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
     <div class="place">
      <div class="place-text"
        style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start">
        <p style="margin: 0px"><b>Фамилия:</b> </p>
        <table style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start">
          <thead>
            <tr>
              <!-- <td v-for="(admin, index) in formData" :key="index">{{ admin[0].surname }}</td> -->
              <td>{{ object[rightIndex].surname }}</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
    <div class="place">
      <div class="place-text"
        style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start">
        <p style="margin: 0px"><b>Имя:</b> </p>
        <table style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start">
          <thead>
            <tr>
              <!-- <td v-for="(admin, index) in formData" :key="index">{{ admin[0].firstname }}</td> -->
              <td>{{ object[rightIndex].firstname }}</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
    <div class="place">
      <div class="place-text"
        style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start">
        <p style="margin: 0px"><b>Отчество:</b> </p>
        <table style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start">
          <thead>
            <tr>
              <!-- <td v-for="(admin, index) in formData" :key="index">{{ admin[0].patronymic }}</td> -->
              <td>{{ object[rightIndex].patronymic }}</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
    <div class="place">
      <div class="place-text"
        style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start">
        <p style="margin: 0px"><b>Дата рождения:</b> </p>
        <table style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start">
          <thead>
            <tr>
              <!-- <td v-for="(admin, index) in formData" :key="index">{{ admin[0].birthdate }}</td> -->
              <td>{{ object[rightIndex].birthdate }}</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
    <div class="place">
      <div class="place-text"
        style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start">
        <p style="margin: 0px"><b>Пол:</b> </p>
        <table style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start">
          <thead>
            <tr>
              <!-- <td v-for="(admin, index) in formData" :key="index">{{ admin[0].gender }}</td> -->
              <td>{{ object[rightIndex].gender }}</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
    <div class="place">
      <div class="place-text"
        style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start">
        <p style="margin: 0px"><b>Контактный телефон:</b> </p>
        <table style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start">
          <thead>
            <tr>
              <!-- <td v-for="(admin, index) in formData" :key="index">{{ admin[0].phone }}</td> -->
              <td>{{ object[rightIndex].phone }}</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
    <div class="place">
      <div class="place-text"
        style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start">
        <p style="margin: 0px"><b>E-mail:</b> </p>
        <table style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start">
          <thead>
            <tr>
              <!-- <td v-for="(admin, index) in formData" :key="index">{{ admin[0].email }}</td> -->
              <td>{{ object[rightIndex].email }}</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
    <div class="place">
      <div class="place-text"
        style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start">
        <p style="margin: 0px"><b>Название образовательного учреждения:</b> </p>
        <table style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start">
          <thead>
            <tr>
              <!-- <td v-for="(admin, index) in formData" :key="index">{{ admin[0].school }}</td> -->
              <td>{{ object[rightIndex].school }}</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
    <div class="place">
      <div class="place-text"
        style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start">
        <p style="margin: 0px"><b>Уровень обучения (класс):</b> </p>
        <table style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start">
          <thead>
            <tr>
              <!-- <td v-for="(admin, index) in formData" :key="index">{{ admin[0].classroom }}</td> -->
              <td>{{ object[rightIndex].classroom }}</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
    <div class="place">
      <div class="place-text"
        style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start">
        <p style="margin: 0px"><b>Гражданство:</b> </p>
        <table style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start">
          <thead>
            <tr>
              <!-- <td v-for="(admin, index) in formData" :key="index">{{ admin[0].citizenship }}</td> -->
              <td>{{ object[rightIndex].citizenship }}</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
    <div class="place">
      <div class="place-text"
        style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start">
        <p style="margin: 0px"><b>Серия паспорта:</b> </p>
        <table style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start">
          <thead>
            <tr>
              <!-- <td v-for="(admin, index) in formData" :key="index">{{ admin[0].passport_series }}</td> -->
              <td>{{ object[rightIndex].passport_series }}</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
    <div class="place">
      <div class="place-text"
        style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start">
        <p style="margin: 0px"><b>Номер паспорта:</b> </p>
        <table style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start">
          <thead>
            <tr>
              <!-- <td v-for="(admin, index) in formData" :key="index">{{ admin[0].passport_number }}</td> -->
              <td>{{ object[rightIndex].passport_number }}</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
    <div class="place">
      <div class="place-text"
        style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start">
        <p style="margin: 0px"><b>С правилами проведения Олимпиады ознакомлен:</b></p>
        <p style="margin: 0px">___________________________</p>
      </div>
    </div>
    <div class="place">
      <div class="place-text"
        style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start">
        <p style="margin: 0px"><b>Дата заполнения анкеты:</b></p>
        <table style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start">
          <thead>
            <tr>
              <td v-for="(admin, index) in formData" :key="index">11.11.1111 </td>
            </tr>
          </thead>
        </table>
      </div>
    </div> 
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: Object,
    required: true
  }
});

//TODO: Поправить дату
//TODO: Попробовать сделать кубики

const rightIndex = props.modelValue.editIndex
const object = reactive({...props.modelValue.data[0].children})
// console.log(object[rightIndex].seat)
// console.log(rightIndex)

const preventLineBreaks = (e) => {
  if (e.which == 13) e.preventDefault();
}
</script>

<style scoped>
table {
  width: 100%;
  border-spacing: 0;
}

table td {
  position: relative;
  padding: 6px;
  vertical-align: top;
}

table.order-table td {
  vertical-align: middle;
}

table thead td {
  font-weight: bold;
}

table tbody td {
  border-top: solid 1px #CCC;
}

input[type=number] {
  border: none;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  background: rgba(200, 250, 230, 0.4);
  padding: 6px;
}

*[contenteditable="true"] {
  background: rgba(200, 250, 230, 0.4);
  cursor: text;
  transition: padding 0.05s linear;
}

span[contenteditable="true"]:focus {
  padding: 0 4px;
}

@media print {

  *[contenteditable="true"],
  input {
    background: none;
  }

  .hide-in-print {
    display: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    /* -moz-appearance: textfield; */
    background: none;
  }
}

.header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.place {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.order {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.left-btn {
  position: absolute;
  left: -40px;
  top: 2px;
}

.left-btn:hover {
  opacity: 0.6;
}
</style>