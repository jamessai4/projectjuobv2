<template>
  <v-card>
    <v-card-title>
      ระบบจัดการประวัติคำถาม
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table :search="search" :headers="headers" :items="desserts">
    </v-data-table>
  </v-card>
  
</template>


<script>
  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'ลำดับ',
            align: 'start',sortable: false,value: 'name',
          },
          { text: 'หมวดคำถาม', value: 'MQ' },
          { text: 'คำถาม', value: 'Q' },
          { text: 'คำตอบ', value: 'A',sortable: false},          
        ],
        desserts: [
          {
            name: '1',
            MQ: 'คำถามทั่วไปเกี่ยวกับบริการของกรม',
            Q: 'ผู้ประกอบธุรกิจตรวจสอบมาตรฐานสินค้าต้องรายงานประจำเดือนการตรวจสอบ มส.20 ภายในกี่วัน',
            A: 'เอ๋ อันนี้น้องสมาร์ทไม่สามารถตอบได้ แต่ท่านสามารถรอเจ้าหน้าที่มาตอบหรือสามารถติดต่อเจ้าหน้าที่ได้ที่เบอร์'                    
          },
          
          {
            name: '2',
            MQ: 'คำถามทั่วไปเกี่ยวกับบริการของกรม',
            Q: 'มาตรการ CVD คืออะไร',
            A: 'เอ๋ อันนี้น้องสมาร์ทไม่สามารถตอบได้ แต่ท่านสามารถรอเจ้าหน้าที่มาตอบหรือสามารถติดต่อเจ้าหน้าที่ได้ที่เบอร์'
          },
          {
            name: '3',
            MQ: 'คำถามทั่วไปเกี่ยวกับบริการของกรม',
            Q: 'DUI คืออะไร	',
            A: 'เอ๋ อันนี้น้องสมาร์ทไม่สามารถตอบได้ แต่ท่านสามารถรอเจ้าหน้าที่มาตอบหรือสามารถติดต่อเจ้าหน้าที่ได้ที่เบอร์'                
          },
          {
            name: '4',
            MQ: 'คำถามทั่วไปเกี่ยวกับบริการของกรม',
            Q: 'มาตรการเยียวยาทางการค้า คืออะไร	',
            A: 'เอ๋ อันนี้น้องสมาร์ทไม่สามารถตอบได้ แต่ท่านสามารถรอเจ้าหน้าที่มาตอบหรือสามารถติดต่อเจ้าหน้าที่ได้ที่เบอร์'                     
          },
          {
            name: '5',
            MQ: 'คำถามทั่วไปเกี่ยวกับบริการของกรม',
            Q: 'ตรวจสอบกิจกรรมของ APi ได้จากช่องทางใด	',
            A: 'เอ๋ อันนี้น้องสมาร์ทไม่สามารถตอบได้ แต่ท่านสามารถรอเจ้าหน้าที่มาตอบหรือสามารถติดต่อเจ้าหน้าที่ได้ที่เบอร์'
          },
          {
            name: '6',
            MQ: 'คำถามทั่วไปเกี่ยวกับบริการของกรม',
            Q: 'Dual-Use Items คืออะไร',
            A: 'เอ๋ อันนี้น้องสมาร์ทไม่สามารถตอบได้ แต่ท่านสามารถรอเจ้าหน้าที่มาตอบหรือสามารถติดต่อเจ้าหน้าที่ได้ที่เบอร์'
          },
          {
            name: '7',
            MQ: 'คำถามทั่วไปเกี่ยวกับบริการของกรม',
            Q: 'ตรวจสอบกิจกรรมของสถาบันส่งเสริมสินค้าเกษตรนวัตกรรม ได้จากช่องทางใด',
            A: 'เอ๋ อันนี้น้องสมาร์ทไม่สามารถตอบได้ แต่ท่านสามารถรอเจ้าหน้าที่มาตอบหรือสามารถติดต่อเจ้าหน้าที่ได้ที่เบอร์'
          },
          {
            name: '8',
            MQ: 'คำถามทั่วไปเกี่ยวกับบริการของกรม',
            Q: 'มาตรการตอบโต้การอุดหนุน คืออะไร	',
            A: 'เอ๋ อันนี้น้องสมาร์ทไม่สามารถตอบได้ แต่ท่านสามารถรอเจ้าหน้าที่มาตอบหรือสามารถติดต่อเจ้าหน้าที่ได้ที่เบอร์'                       
          },
          {
            name: '9',
            MQ: 'คำถามทั่วไปเกี่ยวกับบริการของกรม',
            Q: 'ชำระเงินค่าธรรมเนียม มส. ผ่านช่องทางใดได้บ้าง	',
            A: 'เอ๋ อันนี้น้องสมาร์ทไม่สามารถตอบได้ แต่ท่านสามารถรอเจ้าหน้าที่มาตอบหรือสามารถติดต่อเจ้าหน้าที่ได้ที่เบอร์'                       
          },
          {
            name: '10',
            MQ: 'คำถามทั่วไปเกี่ยวกับบริการของกรม',
            Q: 'ผู้ตรวจสอบมาตรฐานสินค้า ทำหน้าที่อะไร	',
            A: 'เอ๋ อันนี้น้องสมาร์ทไม่สามารถตอบได้ แต่ท่านสามารถรอเจ้าหน้าที่มาตอบหรือสามารถติดต่อเจ้าหน้าที่ได้ที่เบอร์'                       
          },
          {
            name: '11',
            MQ: 'คำถามทั่วไปเกี่ยวกับบริการของกรม',
            Q: 'ถ้าผู้ตรวจสอบมาตรฐานสินค้า มีการเปลี่ยนแปลงชื่อสกุล จะต้องทำอย่างไร	',
            A: 'เอ๋ อันนี้น้องสมาร์ทไม่สามารถตอบได้ แต่ท่านสามารถรอเจ้าหน้าที่มาตอบหรือสามารถติดต่อเจ้าหน้าที่ได้ที่เบอร์'                       
          },
          {
            name: '12',
            MQ: 'คำถามทั่วไปเกี่ยวกับบริการของกรม',
            Q: 'ผู้ตรวจสอบมาตรฐานสินค้า แบ่งออกเป็นกี่ประเภท	',
            A: 'เอ๋ อันนี้น้องสมาร์ทไม่สามารถตอบได้ แต่ท่านสามารถรอเจ้าหน้าที่มาตอบหรือสามารถติดต่อเจ้าหน้าที่ได้ที่เบอร์'                       
          },
          {
            name: '13',
            MQ: 'คำถามทั่วไปเกี่ยวกับบริการของกรม',
            Q: 'ตรวจสอบกฎถิ่นกำเนิดสินค้าได้จากช่องทางใด	',
            A: 'เอ๋ อันนี้น้องสมาร์ทไม่สามารถตอบได้ แต่ท่านสามารถรอเจ้าหน้าที่มาตอบหรือสามารถติดต่อเจ้าหน้าที่ได้ที่เบอร์'                       
          },
          {
            name: '14',
            MQ: 'คำถามทั่วไปเกี่ยวกับบริการของกรม',
            Q: 'ผู้ประกอบธุรกิจตรวจสอบมาตรฐานสินค้าทำหน้าที่อะไร',
            A: 'เอ๋ อันนี้น้องสมาร์ทไม่สามารถตอบได้ แต่ท่านสามารถรอเจ้าหน้าที่มาตอบหรือสามารถติดต่อเจ้าหน้าที่ได้ที่เบอร์'                       
          },
          {
            name: '15',
            MQ: 'คำถามทั่วไปเกี่ยวกับบริการของกรม',
            Q: 'Institute for Agricultural Product Innovation สนับสนุนผู้ประกอบการอย่างไร',
            A: 'เอ๋ อันนี้น้องสมาร์ทไม่สามารถตอบได้ แต่ท่านสามารถรอเจ้าหน้าที่มาตอบหรือสามารถติดต่อเจ้าหน้าที่ได้ที่เบอร์'                       
          },
          {
            name: '16',
            MQ: 'คำถามทั่วไปเกี่ยวกับบริการของกรม',
            Q: 'APi คืออะไร',
            A: 'เอ๋ อันนี้น้องสมาร์ทไม่สามารถตอบได้ แต่ท่านสามารถรอเจ้าหน้าที่มาตอบหรือสามารถติดต่อเจ้าหน้าที่ได้ที่เบอร์'                       
          },
          {
            name: '17',
            MQ: 'คำถามทั่วไปเกี่ยวกับบริการของกรม',
            Q: 'ผู้เกี่ยวข้องกับพระราชบัญญัติสินค้าการแพร่ขยายอาวุธอานุภาพทำลายล้างสูง พ.ศ. 2562 ได้แก่ใครบ้าง',
            A: 'เอ๋ อันนี้น้องสมาร์ทไม่สามารถตอบได้ แต่ท่านสามารถรอเจ้าหน้าที่มาตอบหรือสามารถติดต่อเจ้าหน้าที่ได้ที่เบอร์'                       
          },
          {
            name: '18',
            MQ: 'คำถามทั่วไปเกี่ยวกับบริการของกรม',
            Q: 'หากใบอนุญาตของผู้ตรวจสอบมาตรฐานสินค้าสูญหาย จะต้องทำอย่างไร',
            A: 'เอ๋ อันนี้น้องสมาร์ทไม่สามารถตอบได้ แต่ท่านสามารถรอเจ้าหน้าที่มาตอบหรือสามารถติดต่อเจ้าหน้าที่ได้ที่เบอร์'                       
          },
          {
            name: '19',
            MQ: 'คำถามทั่วไปเกี่ยวกับบริการของกรม',
            Q: 'ผู้ส่งกลับสินค้าที่ใช้ได้สองทางไปนอกราชอาณาจักรต้องเตรียมตัวอย่างไรบ้าง',
            A: 'เอ๋ อันนี้น้องสมาร์ทไม่สามารถตอบได้ แต่ท่านสามารถรอเจ้าหน้าที่มาตอบหรือสามารถติดต่อเจ้าหน้าที่ได้ที่เบอร์'                       
          },
          {
            name: '20',
            MQ: 'คำถามทั่วไปเกี่ยวกับบริการของกรม',
            Q: 'ระบบ REX คืออะไร',
            A: 'เอ๋ อันนี้น้องสมาร์ทไม่สามารถตอบได้ แต่ท่านสามารถรอเจ้าหน้าที่มาตอบหรือสามารถติดต่อเจ้าหน้าที่ได้ที่เบอร์'
          },

          
        ],
      }
    },
  }
</script>

<style>

</style>