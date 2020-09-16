<template>
  <v-navigation-drawer app permanent>
    <template>
      <v-list-item>
        <v-list-item-avatar>
          <v-img
            src="https://scontent.fbkk5-4.fna.fbcdn.net/v/t1.0-9/29694791_605743706433011_7002678869339103955_n.jpg?_nc_cat=103&_nc_sid=7aed08&_nc_eui2=AeEBaBYQLezK_2mE0xrn03YKY-P6gymAAG9j4_qDKYAAb6Wi3H4ePl_bl7EMCInE8-vaxLgb3ZKjMJcUYgTb_VNe&_nc_ohc=EbgLaK3OmrYAX-2zVSG&_nc_ht=scontent.fbkk5-4.fna&oh=aac9d1a54cb46be6b0a5c75107ae1eb3&oe=5F86D40B"
          />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>James Kittithach</v-list-item-title>
          <v-list-item-subtitle>Logged In</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>
    <v-divider></v-divider>

    <v-container>
      <v-icon>keyboard_arrow_down</v-icon>
      <h0>บัญชีของฉัน</h0>
    </v-container>

    <v-list>
      <v-list-item-group v-model="selectedMenus" mandatory color="success">
        <v-list-item
          v-for="([icon, title, route], index) in menus"
          :key="index"
          @click="onClickMenu(route)"
        >
          <v-list-item-icon>
            <v-icon>{{ icon}}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-tile-title>{{title}}</v-list-tile-title>
          </v-list-item-content>
        </v-list-item>
        <v-container>
          <v-divider></v-divider>
        </v-container>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  methods: {
    onClickMenu(link) {
      this.$router.push(link).catch((err) => {});
    },
  },
  mounted() {
    this.selectedMenu = this.menus.findIndex(
      (menu) => menu[2] == this.$route.path
    );
  },
  data() {
    return {
      selectedMenu: 0,
      menus: [
        ["comment", "จัดการ Chat Bot", "/manage"],
        ["question_answer", "ประวัติการสอบถาม", "/Register"],
      ],
    };
  },
};
</script>

<style scorp>
h0 {
  font-size: 22px;
  margin-left: 10px;
  color: black;
}
</style>