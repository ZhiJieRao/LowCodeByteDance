import { ElMessage } from 'element-plus';
import { RefreshLeft, RefreshRight, Position, Delete } from '@element-plus/icons-vue';
import { useVisualData } from '@/visual-editor/hooks/useVisualData';
import 'element-plus/es/components/message/style/css';
export const useTools = () => {
  const { currentPage, deletePage } = useVisualData();
  const { jsonData } = useVisualData();
  console.log(jsonData);
  return [
    {
      title: '撤销',
      icon: RefreshLeft,
      onClick: () => {
        ElMessage({
          showClose: true,
          type: 'info',
          duration: 1000,
          message: '暂未开发emm',
        });
      },
    },
    {
      title: '重做',
      icon: RefreshRight,
      onClick: () => {
        //遍历所有的页面路径，除了首页全部删除
        const paths = Object.keys(jsonData.pages);
        for (let i = paths.length - 1; i > 0; i--) {
          deletePage(paths[i], '/');
        }
        // 清空首页内容即可
        currentPage.value.blocks = [];
        ElMessage({
          showClose: true,
          type: 'success',
          duration: 1000,
          message: '还原成功!',
        });
      },
    },
    {
      title: '清空页面',
      icon: Delete,
      onClick: () => {
        // const parentBlocks = currentPage.value.blocks;
        currentPage.value.blocks = [];
        // console.log(parentBlocks);
        ElMessage({
          showClose: true,
          type: 'success',
          duration: 1000,
          message: '当前页面清除成功！',
        });
      },
    },
    {
      title: '发布',
      icon: Position,
      onClick: () => {
        ElMessage({
          showClose: true,
          type: 'info',
          duration: 1000,
          message: '待开发！',
        });
        // localStorage.setItem(localKey, JSON.stringify(jsonData));
        // window.open(location.href.replace('/#/', '/preview/#/'));
      },
    },
  ];
};
