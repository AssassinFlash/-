/**
 * tag：元素的标签名
 * props：元素的属性
 * children：元素的子元素
 * */
const h = (tag, props, children) => {
  // vnode -> javascript对象 -> {}
  return {
    tag,
    props,
    children,
  };
};

// 渲染器的工作：将虚拟DOM渲染成真实的DOM，然后挂载到页面上
/**
 * vnode：js对象的dom节点
 * container：指定挂载的容器
 * */
const mount = (vnode, container) => {
  // 1. 处理vnode的tag，生成真实的dom元素，并用vnode的el属性保存
  const el = (vnode.el = document.createElement(vnode.tag));

  // 2. 处理vnode的props
  for (const key in vnode.props) {
    const value = vnode.props[key];
    // 假如props传来的是onClick之类的事件
    if (key.startsWith("on")) {
      // .slice(startIndex, endIndex)，end不写默认到最后，拿到切割后的值，表示从哪里切到哪里
      el.addEventListener(key.slice(2).toLowerCase(), value);
    } else {
      el.setAttribute(key, value);
    }
  }

  // 3. 处理vnode的children
  // 如果是文本，就直接设置文本内容
  if (typeof vnode.children === "string") {
    el.innerHTML = vnode.children;
  } else {
    // 如果有子元素，遍历递归调用
    vnode.children.forEach((item) => {
      // 子元素是挂载到el上的
      mount(item, el);
    });
  }

  // 最后，将el挂载到container上
  container.appendChild(el);
};

/**
 * n1：旧节点
 * n2：新节点
 * */
// 旧节点和新节点做比较
const patch = (n1, n2) => {
  // 1. 处理tag
  // 如果n1标签不等于n2标签，直接移除n1元素，重新挂载n2元素
  if (n1.tag !== n2.tag) {
    const n1ParentEl = n1.el.parentElement;
    n1ParentEl.removeChild(n1.el);
    mount(n2, n1ParentEl);
  } else {
    // 如果n1标签等于n2标签，就不用重新挂载，直接处理即可
    // 2. 处理props
    // 取出el并保存到n2.el中
    // 这个el是上面保存的真实的DOM属性，即vnode节点
    const el = (n2.el = n1.el);

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
    // 2.3 删除旧的有，新的没有的props属性
    for (const key in oldProps) {
      if (!newProps.hasOwnProperty(key)) {
        // 判断该属性是否为事件，是事件先删除事件监听
        if (key.startsWith("on")) {
          el.removeEventListener(key.slice(2).toLowerCase(), oldProps[key]);
        } else {
          el.removeAttribute(key);
        }
      }
    }

    // 3. 处理children
    const oldChildren = n1.children;
    const newChildren = n2.children;
    // 3.1 如果二者的children都是string
    if (typeof newChildren === "string") {
      if (typeof oldChildren === "string") {
        el.textContent = newChildren;
      } else {
        // 3.2 如果旧的children是数组
        el.innerHTML = "";
        el.textContent = newChildren;
      }
    } else {
      // 3.3 如果新的children是数组
      // oldChildren: [v1, v2, v3],
      // newChildren: [v1, v4, v5, v6, v7]...
      const commonLength = Math.min(oldChildren.length, newChildren.length);
      // 3.3.1 在共同长度下进行递归调用patch，因为children下的每个元素都是节点
      for (let i = 0; i < commonLength; i++) {
        patch(oldChildren[i], newChildren[i]);
      }

      // 3.3.2 newChildren.length > oldChildren.length
      if (newChildren.length > oldChildren.length) {
        // 挂载剩余的新的子节点，注意是子节点，所以要挂载到el上
        newChildren.slice(commonLength).forEach((n) => {
          mount(n, el);
        });
      } else {
        // 3.3.3 newChildren.length < oldChildren.length
        // 删除剩余的旧的子节点，由于是对DOM操作，这里要用到保存的el属性(每个节点都会保存)
        oldChildren.slice(commonLength).forEach((n) => {
          el.removeChild(n.el);
        });
      }
    }
  }
};
