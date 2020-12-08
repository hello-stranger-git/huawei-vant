<template>
  <div class="homeNav">
    <div>
      <div class="child">
        <van-icon
          name="chat-o"
          size="24"
          color="#666"
          class="center"
          badge="9"
        />
      </div>
    </div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>
</template>
<style scoped>
.homeNav {
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.homeNav > div {
  flex: 1;
  margin-top: 20px;
  display: flex;
  height: 40px;
  justify-content: center;
  align-content: center;
}
.child {
  width: 40px;
  height: 40px;
  line-height: 40px;
  background-color: #ff3b3b;
  border-radius: 25px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
