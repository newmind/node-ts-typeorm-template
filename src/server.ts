process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';

import 'dotenv/config';
import App from '@src/app';
import AuthRoute from '@src/routes/auth.route';
import IndexRoute from '@src/routes/index.route';
import UsersRoute from '@src/routes/users.route';
import validateEnv from '@src/utils/validateEnv';

validateEnv();

const app = new App([new IndexRoute(), new UsersRoute(), new AuthRoute()]);

app.listen();
