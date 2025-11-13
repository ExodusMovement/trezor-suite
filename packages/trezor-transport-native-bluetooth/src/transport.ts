import { AbstractApiTransport, Transport as AbstractTransport } from '@exodus/trezor-transport';

import { BluetoothApi } from './api/BluetoothApi';

export class NativeBluetoothTransport extends AbstractApiTransport {
    public name = 'BluetoothTransport' as const;
    public apiType = 'bluetooth' as const;

    constructor(params: ConstructorParameters<typeof AbstractTransport>[0]) {
        const { logger, ...rest } = params;

        const api = new BluetoothApi({
            logger:
                process.env.EXPO_PUBLIC_IS_NATIVE_BLUETOOTH_LOGGER_ENABLED === 'true'
                    ? console
                    : logger,
        });

        super({ api, ...rest });
    }
}
