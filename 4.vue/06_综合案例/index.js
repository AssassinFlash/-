Vue.createApp({
  template: "#my-app",
  data() {
    return {
      books: [
        {
          id: 1,
          name: "《算法导论》",
          date: "2006-9",
          price: 85.0,
          count: 1,
        },
        {
          id: 2,
          name: "《UNIX编程艺术》",
          date: "2006-2",
          price: 59.0,
          count: 1,
        },
        {
          id: 3,
          name: "《编程珠玑》",
          date: "2008-10",
          price: 39.0,
          count: 1,
        },
        {
          id: 4,
          name: "《代码大全》",
          date: "2006-3",
          price: 128.0,
          count: 1,
        },
      ],
    };
  },
  methods: {
    increment(id) {
      // 通过id找到对应的book对象
      let index = this.books.findIndex((book) => {
        return book.id === id;
      });
      this.books[index].count++;
    },
    decrement(id) {
      // 通过id找到对应的book对象
      let index = this.books.findIndex((book) => {
        return book.id === id;
      });
      if (this.books[index].count > 1) {
        this.books[index].count--;
      }
    },
    removeBook(id) {
      // 通过id找到对应的book对象
      let index = this.books.findIndex((book) => book.id === id);
      this.books.splice(index, 1);
    }
  },
  computed: {
    bookSum() {
      return this.books.reduce((sum, book) => {
        return sum + (book.price * book.count);
      }, 0);
    },
  },
}).mount("#app");
