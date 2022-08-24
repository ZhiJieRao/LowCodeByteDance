<template>
  <el-row type="flex" class="header">
    <el-col :span="6" class="flex items-center">
      <div class="logo"></div>
      <h3 class="font-semibold">LowCode ByteDance</h3>
    </el-col>
    <!-- 功能模块 -->
    <el-col class="flex items-center" :span="12">
      <template v-for="(toolItem, toolIndex) in tools" :key="toolIndex">
        <div :class="[`w-1/${tools.length}`]" class="w-1/5">
          <div
            class="tool-item flex flex-col items-center cursor-pointer"
            @click="toolItem.onClick"
          >
            <el-icon>
              <component :is="toolItem.icon" />
            </el-icon>
            <div class="title">{{ toolItem.title }}</div>
          </div>
        </div>
      </template>
    </el-col>
    <!-- 运行 -->
    <el-col :span="6" class="right-tools flex flex-row-reverse items-center">
      <el-tooltip class="item" effect="dark" content="执行" placement="bottom">
        <el-button
          type="primary"
          :icon="VideoPlay"
          size="large"
          circle
          class="flex-shrink-0 !p-6px"
          @click="runPreview"
        />
      </el-tooltip>
    </el-col>
  </el-row>
  <preview v-model:visible="isShowH5Preview" />
</template>

<script lang="ts" setup>
  import { VideoPlay } from '@element-plus/icons-vue';
  import Preview from './preview.vue';
  import { useTools } from './useTools';
  import { useVisualData, localKey } from '@/visual-editor/hooks/useVisualData';

  defineOptions({
    name: 'PageHeader',
  });

  const isShowH5Preview = ref(false);

  const tools = useTools();

  const { jsonData } = useVisualData();

  const runPreview = () => {
    sessionStorage.setItem(localKey, JSON.stringify(jsonData));
    localStorage.setItem(localKey, JSON.stringify(jsonData));
    isShowH5Preview.value = true;
  };
</script>

<style lang="scss" scoped>
  .header {
    width: 100%;
    .logo {
      margin-top: 20px;
      width: 60px;
      height: 60px;
      background-image: url('@/assets/logo.png');
      background-repeat: no-repeat;
      background-size: contain;
    }
    .tool-item {
      .title {
        margin-top: 4px;
        font-size: 12px;
      }
    }
    .el-button {
      font-size: 22px;
    }
    .right-tools > * {
      margin-left: 8px;
    }
  }
</style>
