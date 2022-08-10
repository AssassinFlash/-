// 抽象成js对象的vnode
const h = (tag, props, children) => {
  return {
    tag,
    props,
    children,
  };
};

// 将vnode处理成DOM挂载到页面
const mount = (vnode, container) => {
  // 1.处理tag
  const el = (vnode.el = document.createElement(vnode.tag));

  // 2.处理props
  for (const key in vnode.props) {
    const value = vnode.props[key];
    if (key.startsWith("on")) {
      el.addEventListener(key.slice(2).toLowerCase(), value);
    } else {
      el.setAttribute(key, value);
    }
  }

  // 3.处理children
  if (typeof vnode.children === "string") {
    el.innerHTML = vnode.children;
  } else {
    vnode.children.forEach((n) => {
      mount(n, el);
    });
  }

  // 最后挂载到container上
  container.appendChild(el);
};

// 新旧vnode做比对
const patch = (n1, n2) => {
  // 1.处理tag
  if (n1.tag !== n2.tag) {
    const n1ParentEl = n1.el.parentElement;
    n1ParentEl.removeChild(n1.el);
    mount(n2, n1ParentEl);
  } else {
    // 取出真实DOM节点并保存到n2节点中
    const el = (n2.el = n1.el);
    // 2.处理props
    const oldProps = n1.props || {};
    const newProps = n2.props || {};
    for (const key in newProps) {
      // 2.1 如果新的有旧的没有
      if (!oldProps.hasOwnProperty(key)) {
        el.setAttribute(key, newProps[key]);
      } else {
        // 2.2 如果新旧的key都相同，看value
        const oldValue = oldProps[key];
        const newValue = newProps[key];
        if (oldValue !== newValue) {
          if (key.startsWith("on")) {
            // 事件名相同，删除同一监听
            el.removeEventListener(key.slice(2).toLowerCase(), oldValue);
            el.addEventListener(key.slice(2).toLowerCase(), newValue);
          } else {
            el.setAttribute(key, newValue);
          }
        }
      }
    }
    // 2.3 删除旧的有新的没有的属性
    for (const key in oldProps) {
      if (!newProps.hasOwnProperty(key)) {
        if (key.startsWith("on")) {
          el.removeEventListener(key.slice(2).toLowerCase(), oldValue);
        } else {
          el.removeAttribute(key);
        }
      }
    }

    // 3.处理children
    const oldChildren = n1.children;
    const newChildren = n2.children;
    // 3.1 如果二者都是string
    if (typeof newChildren === "string") {
      if (typeof oldChildren === "string") {
        el.textContent = newChildren;
      } else {
        // 3.2 如果旧的children是数组
        el.innerHTML = "";
        el.textContent = newChildren;
      }
    } else {
      // 3.3 如果新的数组是children
      // oldChildren: [v1, v2, v3]
      // newChildren: [v1, v4, v5, v7]...
      const commonLength = Math.min(oldChildren.length, newChildren.length);
      // 3.3.1 在共同的长度下递归调用patch
      for (let i = 0; i < commonLength; i++) {
        patch(oldChildren[i], newChildren[i]);
      }
      // 3.3.2 新的比较长，挂载剩余新节点
      if (newChildren.length > commonLength) {
        newChildren.slice(commonLength).forEach((n) => {
          mount(n, el);
        });
      } else {
        // 3.3.3 旧的比较长，删除剩余旧节点
        oldChildren.slice(commonLength).forEach((n) => {
          el.removeChild(n.el);
        });
      }
    }
  }
};
