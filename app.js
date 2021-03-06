const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const path = require('path');
const logger = require('morgan');
const FileStore = require('session-file-store')(session);
const cors = require('cors')

const indexRouter = require('./router/index'); //모듈 추가
const walletRouter = require('./router/wallet');
const loginRouter = require('./router/login');
const logoutRouter = require('./router/logout');
const userKeyRouter = require('./router/userKey');

const corsOptions = {
    origin: true,
    credentials: true
};

const app = express();

require('console-stamp')(console, 'yyyy/mm/dd HH:MM:ss.l');

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs'); //set view engine

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser('skkrypto2018'));
app.use(express.json()); //body-parser 대용
app.use(express.urlencoded({extended: false})); //body-parser 대용

//making session
app.use(session({
    secret: 'skkrypto2018',
    resave: false,
    saveUninitialized: true,
    store: new FileStore({logFn: function(){}}),
    cookie: {
        httpOnly: false,
        secure: false
    }
}))

//cors
app.use(cors(corsOptions));

app.use('/', indexRouter);
app.use('/wallet', walletRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/setUserKey', userKeyRouter);

app.use((req, res, next) => {
    res.status(404).send('Sorry cant find that');
})
app.use((req, res, next) => {
    res.status(500).send('Something broke!')
})

app.listen(3000, () => {
    console.log('Session test server is started')
})

module.exports = app;

