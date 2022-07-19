let DATA_KEY = 'dataArr'

// 获取表单
let uname = document.querySelector('.uname')
let age = document.querySelector('.age')
let gender = document.querySelector('.gender')
let salary = document.querySelector('.salary')
let city = document.querySelector('.city')
let tbody = document.querySelector('tbody')
let btn = document.querySelector('.add')

let data = []

// 封装获取本地存储的数据
function getLocalData() {
  data = JSON.parse(localStorage.getItem(DATA_KEY))
  // 如果本地没有数据，先初始化数据存入本地
  if (data === null || data.length === 0) {
    let dataArr = [
      {stuId: 1001, uname: '欧阳霸天', age: 19, gender: '男', salary: '20000', city: '上海'},
      {stuId: 1002, uname: '令狐霸天', age: 29, gender: '男', salary: '30000', city: '北京'},
      {stuId: 1003, uname: '诸葛霸天', age: 39, gender: '男', salary: '2000', city: '北京'},
    ]
    localStorage.setItem(DATA_KEY, JSON.stringify(dataArr))
    data = JSON.parse(localStorage.getItem(DATA_KEY))
  }
}

// 删除数据
function deleteLocalData(index) {
  data.splice(index, 1)
  // 同步到本地
  localStorage.setItem(DATA_KEY, JSON.stringify(data))
  // 删除后重新渲染数据
  render()
}

// 添加数据
function addLocalData() {
  if (!uname.value || !age.value || !gender.value || !salary.value || !city.value) {
    alert('数据未填写完整，不可添加')
    return
  }
  let obj = {
    stuId: +data[data.length - 1].stuId + 1,
    uname: uname.value,
    age: age.value,
    gender: gender.value,
    salary: salary.value,
    city: city.value
  }
  // 同步到本地存储
  data.push(obj)
  localStorage.setItem(DATA_KEY, JSON.stringify(data))
  // 重新渲染
  render()
}

// 封装将数据渲染到页面上的函数
function render() {
  getLocalData()
  // 清空tbody
  tbody.innerHTML = ''
  // 创建新tr
  for (let i = 0; i < data.length; i++) {
    let tr = document.createElement('tr')
    tr.innerHTML = `
      <td>${data[i].stuId}</td>
      <td>${data[i].uname}</td>
      <td>${data[i].age}</td>
      <td>${data[i].gender}</td>
      <td>${data[i].salary}</td>
      <td>${data[i].city}</td>
      <td>
        <a href="#">删除</a>
      </td>
    `
    // 删除这一行，利用事件委托
    tr.addEventListener('click', function (e) {
      // 阻止a标签默认跳转事件
      e.preventDefault()
      // 点击的是a标签
      if (e.target.tagName === 'A') {
        // i就是这一行的索引，操作数据
        deleteLocalData(i)
      }
    })
    // 新tr添加到tbody上
    tbody.appendChild(tr)
  }
}

render()

btn.addEventListener('click', addLocalData)