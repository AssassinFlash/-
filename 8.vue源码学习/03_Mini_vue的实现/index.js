// 入口文件
/**
 * 从框架层面上说，我们需要有两个内容：
 * createApp()创建一个app对象
 * app对象有一个mount方法，将根组件挂载到某一个dom上
 */

const createApp = (rootComponent) => {
  return {
    mount: (selector) => {
      let isMounted = false;
      let oldVnode = null;

      // 传入对oldVnode的依赖，以便在数据更新的时候通知依赖，做响应式处理
      watchEffect(() => {
        if (!isMounted) {
          // 情况1：页面未挂载根节点，即没有根节点Vnode
          oldVnode = rootComponent.render();
          // 将根节点挂载到页面上
          mount(oldVnode, document.querySelector(selector));
          isMounted = true;
        } else {
          // 情况2：页面已挂载根节点，目前是对根节点的内容做一些修改
          // 获取新修改的根节点，和旧的根节点做比对
          const newVnode = rootComponent.render();
          patch(oldVnode, newVnode);
          oldVnode = newVnode;
        }
      });
    },
  };
};
