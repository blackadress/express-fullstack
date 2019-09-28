export const homeRoute = (app) => {
  app.route('/')
    .get((req, res) => {
      res.render('home/home')
    })
}