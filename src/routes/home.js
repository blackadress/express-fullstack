export const homeRoute = (app) => {
  app.route('/')
    .get((req, res) => {
      res.json('inicio')
    })
}