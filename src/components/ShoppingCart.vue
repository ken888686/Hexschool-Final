<template>
  <section class="shoppingCart">
    <h3 class="section-title">我的購物車</h3>
    <div class="overflowWrap">
      <table class="shoppingCart-table">
        <tr>
          <th width="40%">品項</th>
          <th width="15%">單價</th>
          <th width="15%">數量</th>
          <th width="15%">金額</th>
          <th width="15%"></th>
        </tr>
        <tr>
          <td>
            <div class="cardItem-title">
              <img src="https://i.imgur.com/HvT3zlU.png" alt="" />
              <p>Antony 雙人床架／雙人加大</p>
            </div>
          </td>
          <td>NT$12,000</td>
          <td>1</td>
          <td>NT$12,000</td>
          <td class="discardBtn">
            <a href="#" class="material-icons"> clear </a>
          </td>
        </tr>
        <tr>
          <td>
            <a href="#" class="discardAllBtn">刪除所有品項</a>
          </td>
          <td></td>
          <td></td>
          <td>
            <p>總金額</p>
          </td>
          <td>NT$13,980</td>
        </tr>
      </table>
    </div>
  </section>
</template>
