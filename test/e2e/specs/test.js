// // For authoring Nightwatch tests, see
// // http://nightwatchjs.org/guide#usage
//
// module.exports = {
//   'default e2e tests': function (browser) {
//     // automatically uses dev Server port from /config.index.js
//     // default: http://localhost:8080
//     // see nightwatch.conf.js
//     const devServer = browser.globals.devServerURL
//
//     browser
//       .url(devServer)
//       .waitForElementVisible('#app', 5000)
//       .assert.elementPresent('.hello')
//       .assert.containsText('h1', 'Welcome to Your Vue.js App')
//       .assert.elementCount('img', 1)
//       .end()
//   }
// }

// module.exports = {
//   'Demo test Google' : function (browser) {
//     browser
//       .url('http://www.google.com')
//       .waitForElementVisible('body', 1000)
//       .setValue('input[type=text]', 'nightwatch')
//       .waitForElementVisible('button[name=btnG]', 1000)
//       .click('button[name=btnG]')
//       .pause(1000)
//       .assert.containsText('#main', 'Night Watch')
//       .end();
//   }
// }


module.exports = {
  'Register test': function (client) {
    client
      .url('http://localhost:4000/')
      .setValue('input[name="name"]', 'naven')
      .setValue('input[name="username"]', 'naven')
      .setValue('input[name="password"]', '123')
      .click('button[type="submit"]')
      .assert.urlEquals('http://localhost:4000/login')
    //  .end();
  },
  'Login test': function (client) {
    client
      .url('http://localhost:4000/login')
      .setValue('input[name="username"]', 'naven')
      .setValue('input[name="password"]', '123')
      .click('button[type="submit"]')
      .assert.urlEquals('http://localhost:4000/addtask')
    //  .end();
  },
  'AddTask test': function (client) {
    client
      .url('http://localhost:4000/addtask')
      .setValue('input[name="title"]', 'naven')
      .setValue('textarea[name="description"]', 'racist boy')
      //.setValue('input[name="due_date",type="date"]', '29/06/2017')
      .click('button[type="submit"]')

      .end();
  }
}
