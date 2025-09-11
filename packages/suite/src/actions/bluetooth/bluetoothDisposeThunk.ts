import { bluetoothIpc } from '@exodus/trezor-transport-bluetooth';

import { BLUETOOTH_PREFIX } from '@suite-common/bluetooth';
import { createThunk } from '@suite-common/redux-utils';

export const bluetoothDisposeThunk = createThunk<void, void, void>(
    `${BLUETOOTH_PREFIX}/bluetoothDisposeThunk`,
    async () => {
        bluetoothIpc.removeAllListeners();
        await bluetoothIpc.dispose();
    },
);
