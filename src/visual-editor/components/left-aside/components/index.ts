import { DefineComponent } from 'vue';

// 批量导入store模块  导入之后下标值为导入文件的路径
const modules = import.meta.globEager('./*/index.(tsx|vue)');

// 相当于一个map，键为string类型，值为DefindeComponent类型的键值对
const components: Record<string, DefineComponent> = {};

for (const path in modules) {
  // console.log(modules[path]);
  // 取出每个module里面的default对象，default对象中存储了用户定义的component基本属性
  const comp = modules[path].default;
  // console.log(comp);
  components[comp.name || path.split('/')[1]] = comp;
  // console.log(comp.name);
}
console.log('left-aside components:', components);

export default components;
