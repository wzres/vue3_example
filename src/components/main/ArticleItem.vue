<template>
    <el-card>
      <div class="card-container">
        <div class="img"></div>
        <div class="right">
            <div class="top">
              <!-- 分类 -->
              <div class="category">后端程序</div>
              <!-- 标题 -->
              <h3>python爬虫系列教程</h3>
            </div>
            <div class="summary">
              Python爬虫主要分为四步：发送请求——获得页面——解析页面——抽取并存储内容...
          </div>
          <div class="bottom">
            <!-- 发表时间 -->
            <div>
              <el-icon><Timer /></el-icon> 2026-1-4 10:29:20 
              <el-icon style="margin-left: 10px;"><ChatDotRound /></el-icon> 15条
            </div>
            <div>
              <el-icon><View /></el-icon> 147
            </div>
          </div>
    
        </div>
      </div>
    </el-card>
  </template>
  

<script setup>
import {Timer,View,ChatDotRound} from '@element-plus/icons-vue'
</script>

<style scoped lang="scss">
@use './src/assets/uses/global';
.card-container {
  display: flex;

  .img {
    width: 220px;
    background: url('../../assets/pic.jpeg') no-repeat center / 100% 80%;
    height: 120px;
    background-color: global.$color;
    margin-right: 20px;
  }

  .right {
    .top {
      @include global.flex(null,center,null);
      .category {
        background-color: teal;
        margin-right: 10px;
        padding: 5px;
        border-radius: 5px;
        font-size: 13px;
        color:white;
      }
    }
    .summary {
      font-size: 12px;
    }
    .bottom {
      margin-top: 20px;
      @include global.flex(space-between,null,null);
      font-size: 12px;
    }
  }


}
</style>