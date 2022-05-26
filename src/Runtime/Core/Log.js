import consola from 'consola/src/browser'

export function LOG_INFO(info) {
    consola.info(info);
}

export function LOG_debug(info) {
    consola.debug(info);
}

export function LOG_WARN(info) {
    consola.warn(info);
}

export function LOG_ERROR(info) {
    consola.error(info);
}

