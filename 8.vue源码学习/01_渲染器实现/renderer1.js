const h = (tag, props, children) => {
  return {
    tag,
    props,
    children,
  };
};

const mount = (vnode, container) => {
  // 1.创建真实DOM
  const el = (vnode.el = document.createElement(vnode.tag));

  // 2.处理vnode的props
  for (const key in vnode.props) {
    const value = vnode.props[key];
    if (key.startsWith("on")) {
      el.addEventListener(key.slice(2).toLowerCase(), value);
    } else {
      el.setAttribute(key, value);
    }
  }

  // 3.处理vnode的children
  if (typeof vnode.children === "string") {
    el.innerHTML = vnode.children;
  } else {
    vnode.children.forEach((n) => {
      mount(n, el);
    });
  }

  // 4.挂载到container容器上
  container.appendChild(el);
};

// n1: 旧节点  n2: 新节点
const patch = (n1, n2) => {
  // 取出上面保留的el DOM元素并保存到新的节点上
  const el = (n2.el = n1.el);
  // 1.处理tag
  if (n1.tag !== n2.tag) {
    // 移除n1，重新挂载n2
    const n1ParentEl = n1.el.parentElement;
    n1ParentEl.removeChild(n1.el);
    mount(n2, n1ParentEl);
  } else {
    // 不需要移除
    // 2.处理props
    const oldProps = n1.props || {};
    const newProps = n2.props || {};
    for (const key in newProps) {
      // 2.1 如果新的props属性里没有旧的
      if (!oldProps.hasOwnProperty(key)) {
        el.setAttribute(key, newProps[key]);
      } else {
        const oldValue = oldProps[key];
        const newValue = newProps[key];
        // 2.2 如果新旧vnode的props的key相同，就看value是否相同，相同则不进行处理
        if (oldValue !== newValue) {
          // 如果是事件，那么由于二者函数地址不一样，怎么比较都是不同的，所以直接添加新的事件监听
          if (key.startsWith("on")) {
            el.addEventListener(key.slice(2).toLowerCase(), newValue);
          } else {
            el.setAttribute(key, newValue);
          }
        }
      }
    }
    // 2.2 如果新的没有旧的有
    for (const key in oldProps) {
      if (!newProps.hasOwnProperty(key)) {
        // 删除掉旧的
        if (key.startsWith("on")) {
          el.removeEventListener(key.slice(2).toLowerCase(), oldProps[key]);
        } else {
          el.removeAttribute(key);
        }
      }
    }

    // 3.处理children
    // 3.1 如果二者皆为string
    const oldChildren = n1.children;
    const newChildren = n2.children;
    if (typeof newChildren === "string") {
      if (typeof oldChildren === "string") {
        // 直接替换
        el.textContent = newChildren;
      } else {
        // 3.2 如果旧的是数组
        el.innerHTML = "";
        el.textContent = newChildren;
      }
    } else {
      // 3.3 如果新的是数组
      // oldChildren: [v1, v2, v3]
      // newChildren: [v1, v4, v5, v6]...
      const commonLength = Math.min(oldChildren.length, newChildren.length);
      for (let i = 0; i < commonLength; i++) {
        // 3.3.1 每个子节点进行比对，递归调用patch
        patch(oldChildren[i], newChildren[i]);
      }
      // 3.3.2 新的大于旧的，挂载剩余的新子节点
      if (newChildren.length > commonLength) {
        newChildren.slice(commonLength).forEach((n) => {
          mount(n, el);
        });
      } else {
        // 3.3.3 旧的大于新的，删除剩余的旧子节点
        oldChildren.slice(commonLength).forEach((n) => {
          el.removeChild(n.el);
        });
      }
    }
  }
};
