<template>
  <nav class="topBar">
    <div class="wrap">
      <h1><a href="#" class="logo">WOWOROOM</a></h1>
      <span class="material-icons menuToggle"> menu </span>
      <ul class="topBar-menu">
        <li><a href="#">後台管理</a></li>
        <li><a href="#">管理員登入</a></li>
      </ul>
    </div>
  </nav>
  <section class="wrap">
    <h2 class="section-title">全品項營收比重</h2>
    <div id="chart"></div>
  </section>
  <section class="wrap orderPage-list">
    <a href="#" class="discardAllBtn" @click.prevent="deleteAll">清除全部訂單</a>
    <div class="orderTableWrap">
      <table class="orderPage-table">
        <thead>
          <tr>
            <th>訂單編號</th>
            <th>聯絡人</th>
            <th>聯絡地址</th>
            <th>電子郵件</th>
            <th>訂單品項</th>
            <th>訂單日期</th>
            <th>訂單狀態</th>
            <th>操作</th>
          </tr>
        </thead>
        <tr
          v-for="item in orders.sort((a, b) => {
            return a.createdAt - b.createdAt;
          })"
          :key="item.id"
        >
          <td>{{ item.id }}</td>
          <td>
            <p>{{ item.user.name }}</p>
            <p>{{ item.user.tel }}</p>
          </td>
          <td>{{ item.user.address }}</td>
          <td>{{ item.user.email }}</td>
          <td>
            <p v-for="product in item.products" :key="product.id">{{ product.title }}</p>
          </td>
          <td>{{ timeFormat(item.createdAt) }}</td>
          <td class="orderStatus">
            <a href="#">未處理</a>
          </td>
          <td>
            <input
              type="button"
              class="delSingleOrder-Btn"
              value="刪除"
              @click="deleteOrder(item.id)"
            />
          </td>
        </tr>
      </table>
    </div>
  </section>
</template>

<script>
import c3 from 'c3';
import moment from 'moment';
import * as service from '@/services';

const menuOpenBtn = document.querySelector('.menuToggle');
const linkBtn = document.querySelectorAll('.topBar-menu a');
const menu = document.querySelector('.topBar-menu');

function menuToggle() {
  if (menu.classList.contains('openMenu')) {
    menu.classList.remove('openMenu');
  } else {
    menu.classList.add('openMenu');
  }
}
if (menuOpenBtn) {
  menuOpenBtn.addEventListener('click', menuToggle);
}

function closeMenu() {
  menu.classList.remove('openMenu');
}
linkBtn.forEach((item) => {
  item.addEventListener('click', closeMenu);
});

export default {
  name: 'Admin',
  data() {
    return {
      orders: [],
    };
  },
  methods: {
    render() {
      const list = [];
      this.orders.forEach((item) => {
        item.products.forEach((product) => {
          if (!list[product.category]) {
            list[product.category] = product.quantity;
          } else {
            list[product.category] += product.quantity;
          }
        });
      });
      const newList = [];
      Object.keys(list).forEach((item) => {
        const temp = [];
        temp.push(item);
        temp.push(list[item]);
        newList.push(temp);
      });

      c3.generate({
        bindto: '#chart', // HTML 元素綁定
        data: {
          type: 'pie',
          columns: newList,
          colors: {
            收納: '#DACBFF',
            窗簾: '#9D7FEA',
            床架: '#5434A7',
          },
        },
      });
    },
    timeFormat(timestamp) {
      return moment(timestamp * 1000).format('YYYY/MM/DD');
    },
    getOrderList() {
      service.getOrderList().then((res) => {
        this.orders = res.data.orders;
        this.render();
      });
    },
    deleteOrder(orderId) {
      service.deleteOrder(orderId).then((res) => {
        this.orders = res.data.orders;
        this.render();
      });
    },
    deleteAll() {
      service.deleteAllOrderList().then((res) => {
        this.orders = res.data.orders;
        this.render();
      });
    },
  },
  mounted() {
    this.getOrderList();
  },
};
</script>
