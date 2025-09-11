import { BluetoothDevice } from '@exodus/trezor-transport-native-bluetooth';
import { createTransform } from 'redux-persist';


export const bluetoothPersistTransform = createTransform<BluetoothDevice[], BluetoothDevice[]>(
    inboundState =>
        inboundState.map(device => ({
            ...device,
            connectionStatus: { type: 'disconnected' },
        })),
    undefined,
    { whitelist: ['knownDevices'] },
);
