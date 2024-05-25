<template>
  <div class="template"
    style="position: relative; display: flex; flex-direction: column; height: 100%; border: 1px solid black;">
    <div class="header">
      <div>
        <div class="title" style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
          <p style="margin-bottom: 0px; font-size: large;">
            Анкета участника {{ stage }} этапа</p>
          <p style="margin: 0px; font-size: large;">{{ olympiad }}</p>
          <p style="margin-bottom: 20px; margin-top: 0px; font-size: large;">по {{ subject }}</p>
        </div>
      </div>
    </div>
    <div class="info" style="font-size: medium;padding: 16px;">
      <div class="info-text"
        style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start;">
        <p style="margin: 0px"><b>Место в аудитории:</b> </p>
        <table style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start">
          <thead>
            <tr>
              <td>{{ object[rightIndex].seat }}</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
    <div class="info" style="font-size: medium;padding: 16px;padding-top: 0px;">
      <div class="info-surname"
        style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start">
        <p style="margin: 0px"><b>Фамилия:</b> </p>
        <table style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start">
          <thead>
            <tr>
              <td>{{ object[rightIndex].surname }}</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
    <div class="info" style="font-size: medium;padding: 16px;padding-top: 0px;">
      <div class="info-firstname"
        style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start">
        <p style="margin: 0px"><b>Имя:</b> </p>
        <table style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start">
          <thead>
            <tr>
              <td>{{ object[rightIndex].firstname }}</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
    <div class="info" style="font-size: medium;padding: 16px;padding-top: 0px;">
      <div class="info-patronymic"
        style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start">
        <p style="margin: 0px"><b>Отчество:</b> </p>
        <table style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start">
          <thead>
            <tr>
              <td>{{ object[rightIndex].patronymic }}</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
    <div class="info" style="font-size: medium;padding: 16px;padding-top: 0px;">
      <div class="info-birthdate"
        style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start">
        <p style="margin: 0px"><b>Дата рождения:</b> </p>
        <table style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start">
          <thead>
            <tr>
              <td>{{ formattedDate }}</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
    <div class="info" style="font-size: medium;padding: 16px;padding-top: 0px;">
      <div class="info-gender"
        style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start">
        <p style="margin: 0px"><b>Пол:</b> </p>
        <table style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start">
          <thead>
            <tr>
              <td>{{ object[rightIndex].gender }}</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
    <div class="info" style="font-size: medium;padding: 16px;padding-top: 0px;">
      <div class="info-phone"
        style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start">
        <p style="margin: 0px"><b>Контактный телефон:</b> </p>
        <table style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start">
          <thead>
            <tr>
              <td>{{ object[rightIndex].phone }}</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
    <div class="info" style="font-size: medium;padding: 16px;padding-top: 0px;">
      <div class="info-email"
        style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start">
        <p style="margin: 0px"><b>E-mail:</b> </p>
        <table style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start">
          <thead>
            <tr>
              <td>{{ object[rightIndex].email }}</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
    <div class="info" style="font-size: medium;padding: 16px;padding-top: 0px;">
      <div class="info-school"
        style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start">
        <p style="margin: 0px"><b>Название образовательного учреждения:</b> </p>
        <table style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start">
          <thead>
            <tr>
              <td>{{ object[rightIndex].school }}</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
    <div class="info" style="font-size: medium;padding: 16px;padding-top: 0px;">
      <div class="info-classroom"
        style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start">
        <p style="margin: 0px"><b>Уровень обучения (класс):</b> </p>
        <table style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start">
          <thead>
            <tr>
              <td>{{ object[rightIndex].classroom }}</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
    <div class="info" style="font-size: medium;padding: 16px;padding-top: 0px;">
      <div class="info-citizenship"
        style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start">
        <p style="margin: 0px"><b>Гражданство:</b> </p>
        <table style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start">
          <thead>
            <tr>
              <td>{{ object[rightIndex].citizenship }}</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
    <div class="info" style="font-size: medium;padding: 16px;padding-top: 0px;">
      <div class="info-passport-series"
        style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start">
        <p style="margin: 0px"><b>Серия паспорта:</b> </p>
        <table style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start">
          <thead>
            <tr>
              <td>{{ object[rightIndex].passport_series }}</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
    <div class="info" style="font-size: medium;padding: 16px;padding-top: 0px;">
      <div class="info-passport-number"
        style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start">
        <p style="margin: 0px"><b>Номер паспорта:</b> </p>
        <table style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start">
          <thead>
            <tr>
              <td>{{ object[rightIndex].passport_number }}</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
    <div class="info-container"
      style="font-size: medium;padding: 16px;padding-top: 0px;justify-content: flex-end;display: flex;align-items: end;height: 100%;">
      <div class="info-sign"
        style="display: flex; flex-direction: row; align-items: end; justify-content: flex-start;width: 100%;margin-right: 16px;">
        <p style="margin: 0px"><b>С правилами проведения<br>Олимпиады ознакомлен:</b></p>
        <p style="margin: 0px">_______________________</p>
      </div>
      <div class="info-date"
        style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start;width: 100%;">
        <p style="margin: 0px"><b>Дата заполнения анкеты:</b></p>
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
  },
});

const subject = props.modelValue.subjects
const stage = props.modelValue.stages
const olympiad = props.modelValue.olymdiads
const rightIndex = props.modelValue.editIndex
const object = reactive({ ...props.modelValue.data[0].children })
const dateString = object[rightIndex].birthdate
const dateObject = new Date(dateString)
const formattedDate = `${dateObject.getDate()}-${(dateObject.getMonth() + 1)}-${dateObject.getFullYear()}`;
</script>