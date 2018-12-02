const _ = require('lodash');
const path = require('path');
const proxy = require('express-http-proxy');
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const webpackConfig = require(path.resolve('./webpack.config'));

const app = express();

const SERVER_PORT = 8081;
const WEBPACK_PATH = '';
const WEBPACK_HOST_PORT = `http://localhost:${webpackConfig.devServer.port}`;
const PROD_SEL_REST = '/corporate/product-selection/rest/v2';

const proxyReqPathResolver = path => ({
    proxyReqPathResolver: req => path + req.url
});

function requireJson(name) {
    const jsonPath = path.resolve('./mock/', name + '.json');
    const file = fs.readFileSync(jsonPath, 'utf8');
    return JSON.parse(file);
}

// Для обработки тела в POST запросе
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// Заглушка для Подбора продукта
app.all(`/*`, function (req, res) {

    const

    // FYI:
    // для получение параметров из query можно использовать res.req.query
    // для получения тела POST запроса req.body

    // Обработка получения информации по продукту
    if (_.endsWith(req.url, '/environment/product')) {
        console.log('Received req to: ', req.url);
        res.send(requireJson('rest/v2/environment/product/get'));
    }
    if (req.url.contains('tasks')) {
        console.log('Req contains tasks');
        res.send('what of tasks?');
    }

    // Получение доступных подсистем
    if (_.endsWith(req.url, '/getAdministeringSubsystemsInfo')) {
        console.log('Received req to: ', req.url);
        res.send(requireJson('rest/v2/getAdministeringSubsystemsInfo/post'));
        // res.send({
        //     success: false,
        //     error: {
        //         "uuid": "14ca39d5-56b5-418b-a550-31223fa7a3f01",
        //         "code": "FAILURE",
        //         "system": "CORP_PRODUCT_SELECTION",
        //         "title": "Системная ошибка",
        //         "text": "Ошибка при получении подсистем"
        //     }
        // });

    }

    // Отправка скрипта на сервер
    if (_.endsWith(req.url, '/uploadScript')) {
        console.log('Received req to: ', req.url);
        const { subsystemCode } = req.body;

        switch (subsystemCode) {
            case 'testSubsystemCode':
                res.send({
                    success: false,
                    error: {
                        "uuid": "14ca39d5-56b5-418b-a550-31223fa7a3f01",
                        "code": "FAILURE",
                        "system": "CORP_PRODUCT_SELECTION",
                        "title": "Системная ошибка",
                        "text": "Ошибка при отправке сценария на сервер"
                    }
                });
                break;
            default:
                res.send({
                    success: true
                })
        }



    }

    // Получение групп скриптов
    if (_.endsWith(req.url, '/getScriptGroups')) {
        console.log('Received req to: ', req.url);
        const { subsystemCode } = req.body;

        switch (subsystemCode) {
            case 'CORP_PRODUCT_SELECTION':
                res.send(requireJson('rest/v2/getScriptGroups/post'));
                break;
            case 'testSubsystemCode':
                res.send({
                    success: true,
                    body: [
                        {
                            "groupName": "Единственная группа скриптов",
                            "subsystemCode": "testSubsystemCode"
                        }
                    ]
                });
                break;
            case 'testSubsystemCode1':
                res.send({
                    success: true,
                    error: {
                        "uuid": "14ca39d5-56b5-418b-a550-31223fa7a3f01",
                        "code": "FAILURE",
                        "system": "CORP_PRODUCT_SELECTION",
                        "title": "Ошибка при загрузке групп",
                        "text": "Беда"
                    }
                });
                break;
            default:
                res.send({
                    success: true,
                    body: [
                    ]
                })

        }

    }

});
// Прокси для сервера webpack
app.use(`${WEBPACK_PATH}`, proxy(WEBPACK_HOST_PORT,
    proxyReqPathResolver(WEBPACK_PATH)));

app.listen(SERVER_PORT, '127.0.0.1');

console.log('Server is UP. Let\'s ROCK!');
console.log('Now I\'m listening to port:', SERVER_PORT);