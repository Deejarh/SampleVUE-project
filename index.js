Vue.http.options.root = "/root";
Vue.http.headers.common["Authorization"] = "Basic YXBpOnBhc3N3b3Jk";

var app = new Vue({
  el: "#app",
  data: {
    user: {
      username: "",
      email: "",
    },
    users: [],
    errors: [],
  },
  methods: {
    submit() {
      if (this.user.username && this.user.email) {
        this.$http
          .post(
            "https://first-httprequest-default-rtdb.firebaseio.com/data.json",
            this.user
          )
          .then((response) => {
            console.log(response),
              (error) => {
                cosole.log(error);
              };
          });
      } else {
        if (!this.user.username) this.errors.push("username required");
        if (!this.user.email) this.errors.push("email required");
      }
    },
    fetchData() {
      this.$http
        .get("https://first-httprequest-default-rtdb.firebaseio.com/data.json")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const result = [];
          for (let key in data) {
            result.push(data[key]);
          }
          this.users = result;
        });
    },
  },
});
