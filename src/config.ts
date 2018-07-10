/**
 * Конфигурация запроса
 * @property restActive включены ли моки
 * @property protocol
 * @property domain
 * @property port
 *
 */
export interface IConfig {
    protocol: string,
    domain: string,
    port: string,
    restActive: boolean
}

let restActive = true;

const Config: IConfig = {
    restActive,
    protocol: 'http',
    domain: 'localhost',
    port: '8080'
};

/**
 * Получаем значение для подмены rest запросов.
 */
const getRestActive = (): boolean => restActive;

export {
    Config,
    getRestActive,
    restActive,
}
