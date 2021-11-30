<template>
  <section class="orderInfo wrap" id="orderInfo">
    <h3 class="section-title">填寫預訂資料</h3>
    <form action="" class="orderInfo-form" @submit.prevent="onSubmit" novalidate>
      <div class="orderInfo-formGroup">
        <label for="customerName" class="orderInfo-label">姓名</label>
        <div class="orderInfo-inputWrap">
          <input
            type="text"
            class="orderInfo-input"
            id="customerName"
            placeholder="請輸入姓名"
            name="姓名"
            v-model.trim="customerName"
          />
          <p class="orderInfo-message" v-if="v$.customerName.$invalid" data-message="姓名">必填</p>
        </div>
      </div>
      <div class="orderInfo-formGroup">
        <label for="customerPhone" class="orderInfo-label">電話</label>
        <div class="orderInfo-inputWrap">
          <input
            type="tel"
            class="orderInfo-input"
            id="customerPhone"
            placeholder="請輸入電話"
            name="電話"
            v-model.trim="customerPhone"
          />
          <p class="orderInfo-message" v-if="v$.customerPhone.$invalid" data-message="電話">必填</p>
        </div>
      </div>
      <div class="orderInfo-formGroup">
        <label for="customerEmail" class="orderInfo-label">Email</label>
        <div class="orderInfo-inputWrap">
          <input
            type="email"
            class="orderInfo-input"
            id="customerEmail"
            placeholder="請輸入 Email"
            name="Email"
            v-model.trim="customerEmail"
          />
          <p class="orderInfo-message" v-if="v$.customerEmail.$invalid" data-message="Email">
            必填
          </p>
        </div>
      </div>
      <div class="orderInfo-formGroup">
        <label for="customerAddress" class="orderInfo-label">寄送地址</label>
        <div class="orderInfo-inputWrap">
          <input
            type="text"
            class="orderInfo-input"
            id="customerAddress"
            placeholder="請輸入寄送地址"
            name="寄送地址"
            v-model.trim="customerAddress"
          />
          <p class="orderInfo-message" v-if="v$.customerAddress.$invalid" data-message="寄送地址">
            必填
          </p>
        </div>
      </div>
      <div class="orderInfo-formGroup">
        <label for="tradeWay" class="orderInfo-label">交易方式</label>
        <div class="orderInfo-inputWrap">
          <select id="tradeWay" class="orderInfo-input" name="交易方式" v-model="payment">
            <option value="ATM">ATM</option>
            <option value="信用卡">信用卡</option>
            <option value="超商付款">超商付款</option>
          </select>
        </div>
      </div>
      <input type="submit" value="送出預訂資料" class="orderInfo-btn" />
    </form>
  </section>
</template>
<script>
import useVuelidate from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators';
import * as service from '@/services';

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      customerName: '',
      customerPhone: '',
      customerEmail: '',
      customerAddress: '',
      payment: 'ATM',
    };
  },
  validations() {
    return {
      customerName: { required },
      customerPhone: {
        required,
        minLengthValue: minLength(9),
      },
      customerEmail: { required, email },
      customerAddress: { required },
    };
  },
  methods: {
    async onSubmit() {
      const isValidate = await this.v$.$validate();
      if (!isValidate) {
        return;
      }

      const data = {
        user: {
          name: this.customerName,
          tel: this.customerPhone,
          email: this.customerEmail,
          address: this.customerAddress,
          payment: this.payment,
        },
      };

      service
        .sendOrder(data)
        .then((res) => {
          this.customerName = '';
          this.customerPhone = '';
          this.customerEmail = '';
          this.customerAddress = '';
          this.payment = 'ATM';
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {},
};
</script>
