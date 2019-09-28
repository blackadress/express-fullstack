import bodyParser from 'body-parser';
import path from 'path';
export const setup = app => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'pug');
  app.use('static', express.static(path.join(__dirname, 'static')));
  app.set('public', path.join(__dirname, 'public'));
};