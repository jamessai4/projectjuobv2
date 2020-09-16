<template>
  <div>
    <p>
      กลุ่มคำถาม
      <v-text-field label="Main input" :rules="rules" hide-details="auto"></v-text-field>
      <br />คำถาม
      <v-text-field label="Another input"></v-text-field>
      <br />ดำตอบ
      <v-text-field label="Another input"></v-text-field>
      <br />
      <router-link to="/mange"><v-btn color="green" dark v-bind="attrs" v-on="on">ย้อนกลับ</v-btn></router-link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to="/manage"><v-btn color="orange" dark v-bind="attrs" v-on="on">บันทึก</v-btn></router-link>
      
    </p>
  </div>
</template>

<script>
export default {
  data: () => ({
    rules: [
      (value) => !!value || "Required.",
      (value) => (value && value.length >= 3) || "Min 3 characters",
    ],
  }),
};
</script>

<style>
p {
  margin: 50px;
}
</style>