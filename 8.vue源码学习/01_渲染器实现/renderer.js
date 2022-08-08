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
    children
  }
}

// 渲染器的工作：将虚拟DOM渲染成真实的DOM，然后挂载到页面上
/**
 * vnode：js对象的dom节点
 * container：指定挂载的容器
 * */
const mount = (vnode, container) => {
  // 1. 处理vnode的tag，生成真实的dom元素，并用vnode的el属性保存
  const el = vnode.el = document.createElement(vnode.tag);

  // 2. 处理vnode的props
  for (const key in vnode.props) {
    const value = vnode.props[key];
    // 假如props传来的是onClick之类的事件
    if (key.startsWith("on")) {
      // .slice(startIndex, endIndex)，end不写默认到最后，拿到切割后的值，表示从哪里切到哪里
      el.addEventListener(key.slice(2).toLowerCase(), value)
    } else {
      el.setAttribute(key, value);
    }
  }

  // 3. 处理vnode的children
  // 如果是文本，就直接设置文本内容
  if (typeof vnode.children === 'string') {
    el.innerHTML = vnode.children
  } else {
    // 如果有子元素，遍历递归调用
    vnode.children.forEach(item => {
      // 子元素是挂载到el上的
      mount(item, el)
    })
  }

  // 最后，将el挂载到container上
  container.appendChild(el)
}