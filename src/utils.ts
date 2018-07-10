// import {Dispatch} from 'react-redux';
import 'whatwg-fetch';
import * as Redux from 'redux';
import {Action} from 'redux';
import {Promise} from 'es6-promise';
import {Config, getRestActive} from './config';
import {IReceiveTaskJSON} from './Models';


export function dispatchAsync<TBeginPayload, TSuccessPayload, TErrorPayload>(actionType: string,
                                                                             asyncFunc: () => Promise<TSuccessPayload>,
                                                                             payload?: TBeginPayload) {
    return (dispatch) => {

        dispatch({type: `${actionType}_BEGIN`, payload});
        const promise: Promise<TSuccessPayload> = asyncFunc && asyncFunc();
        if (promise) {
            promise.then(
                dispatchSuccess<TSuccessPayload>(actionType, dispatch),
                dispatchError<TErrorPayload>(actionType, dispatch)
            ).catch((e) => {
                // if (!(e as IError).errorType) {
                //     /**
                //      * TODO: Выполнено логирование асинхронной ошибки, но осталась проблема вывода сообщения пользователю при этом +
                //      * Есть проблема, что логируются ВСЕ ошибки, которые произошли в момент асинхронной работы js и не по одному разу
                //      * (из-за того что обработка у нас асинхронных ошибок в 2х местах).
                //      */
                //     // sendLogError(prepareAsyncErrorExpected(e));
                // }
            })
        }
        return promise;
    }
}

/**
 * Функция для успешного завершения Promise.
 *
 * @param {string} actionType Базовый тип для action к которому будeт добавлен суффикс _SUCCESS.
 * @param {Dispatch} dispatch Redux dispatch.
 * @param {Function} [payloadConverter] Опциональная функция-конвертер результата промиса в пейлоад экшена.
 */
export function dispatchSuccess<T>(actionType: string, dispatch: Redux.Dispatch<Action>, payloadConverter?: (payload: T) => T) {
    return (payload: T) => {
        dispatch({
            type: `${actionType}_SUCCESS`,
            payload: payloadConverter ? payloadConverter(payload) : payload
        });
        return payload;
    }
}

/**
 * Функция для обработки ошибок из Promise.
 *
 * @param {string} actionType Базовый тип для action к которому будeт добавлен суффикс _ERROR.
 * @param {Dispatch} dispatch Redux dispatch.
 */
export function dispatchError<T>(actionType: string, dispatch: Redux.Dispatch<Action>) {
    return (error: T) => {
        dispatch({
            type: `${actionType}_ERROR`,
            payload: error
        });
        return Promise.reject(error);
    }
}

/**
 * Добавляем суффикс для mock запросов, если нужен.
 *
 * @param {string} url Адрес запроса.
 * @param {boolean} [restActive] Активны ли REST-сервисы.
 */
export function getApiUrl(url: string, restActive: boolean = getRestActive()): string {
    const apiUrl = `${Config.protocol}://${Config.domain}:${Config.port}/${url}`;
    return restActive ? apiUrl : apiUrl + '/mock';  //FIXME переписать, когда сделаю моки
}

export function getTask(taskId: number): Promise<IReceiveTaskJSON> {
    const url = getApiUrl(`tasks/task?id=${taskId}`);
    console.log('getTask::url', url);

    return new Promise<IReceiveTaskJSON>((resolve, reject) => {
        fetch(
            url,
            {
                method: 'GET',
                // headers: {
                //     'Access-Control-Allow-Origin': 'Origin'
                // },
                mode: 'cors',
                credentials: 'same-origin'
            }
        )
            .then(
                data => resolve(data.json()),
                e => {
                    console.log('An error occurred.', e);
                    reject(e)
                })
    })
}


