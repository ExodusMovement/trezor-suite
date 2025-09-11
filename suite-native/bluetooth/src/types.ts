import { BluetoothDevice as TransportBluetoothDevice } from '@exodus/trezor-transport-native-bluetooth';

import { BluetoothManufacturerData } from '@suite-common/bluetooth';

export type BluetoothPermissionStatus =
    | 'unavailable'
    | 'requested'
    | 'denied'
    | 'blocked'
    | 'granted'
    | 'limited';

export type BluetoothDevice = Omit<TransportBluetoothDevice, 'manufacturerData'> & {
    manufacturerData: BluetoothManufacturerData;
};
