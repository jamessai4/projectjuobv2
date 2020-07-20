<template>
  <v-navigation-drawer app permanent>
    <template>
      <v-list-item>
        <v-list-item-avatar>
          <v-img
            src="https://scontent.fbkk5-5.fna.fbcdn.net/v/t1.0-9/p960x960/67165779_924918501182195_8338278503778615296_o.jpg?_nc_cat=104&_nc_sid=7aed08&_nc_eui2=AeG4pv15VgFEtGMTmWLax5N_KVNm7elwfeMpU2bt6XB94yqdz5ty9mGjVjei9krAkfBE3iho6En5oguKh8KYX1xO&_nc_ohc=P04GddKjYvYAX8xgegj&_nc_ht=scontent.fbkk5-5.fna&_nc_tp=6&oh=8e2472f44e6b27149001d676ff0dbe2f&oe=5F19A25B"
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
        <v-list-item v-for="([icon,title,route], index) in menus" :key="index">
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
        
        <v-container>
          <v-icon>keyboard_arrow_down</v-icon>
          <h0>การแจ้งเตือน</h0>
        </v-container>

        <v-list-item v-for="([icon,title,route], index) in menus1" :key="index">
          <v-list-item-icon>
            <v-icon>{{ icon}}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-tile-title>{{title}}</v-list-tile-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      selectedMenu: 0,
      menus: [
        ["mode_comment", "ประวัติ", "/stock"],
        ["where_to_vote", " ที่อยู่", "/report"],
        ["lock", "รหัสผ่าน", "/about"],
        ["shopping_cart", "การซื้อของฉัน", "/about"]
      ],
      menus1: [
        ["store_mall_directory", "อัพเดตการซื้อ", "/stock"],
        ["receipt", "โปรโมชั่น", "/stock"],
        ["settings", "ระบบ", "/stock"]
      ]
    };
  }
};
</script>

<style scorp>
h0 {
  font-size: 22px;
  margin-left: 10px;
  color: black;
}
</style>