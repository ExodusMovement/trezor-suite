import { _map_to_curve_elligator2_curve25519, ed25519, x25519 } from '@noble/curves/ed25519.js';

// decodeUCoordinate from
// https://datatracker.ietf.org/doc/html/rfc7748#section-5
function decodeCoordinate(coordinate: Uint8Array): bigint {
    if (coordinate.length !== 32) {
        throw new Error('Invalid length of coordinate');
    }

    const array = new Uint8Array(coordinate);
    array[array.length - 1] &= 0x7f; // X25519 requires clearing the high bit

    return ed25519.Point.Fp.fromBytes(array);
}

// encodeUCoordinate from
// https://datatracker.ietf.org/doc/html/rfc7748#section-5
function encodeCoordinate(coordinate: bigint): Uint8Array {
    return ed25519.Point.Fp.toBytes(coordinate);
}


// X25519 using noble/curves implementation
export function curve25519(privateKey: Uint8Array, publicKey: Uint8Array): Buffer {
    // Use noble/curves x25519.getSharedSecret for ECDH key exchange
    const sharedSecret = x25519.getSharedSecret(privateKey, publicKey);

    return Buffer.from(sharedSecret);
}


// map_to_curve_elligator2_curve25519 using noble/curves implementation
export function elligator2(point: Uint8Array): Uint8Array {
    // Decode the coordinate first, then pass to noble/curves implementation
    const u = decodeCoordinate(point);
    const result = _map_to_curve_elligator2_curve25519(u);
    // Extract the x coordinate from the result using noble's modular utilities
    const {Fp} = ed25519.Point;
    const x = Fp.mul(result.xMn, Fp.inv(result.xMd));

    return encodeCoordinate(x);
}

// https://cr.yp.to/ecdh.html
// Computing secret keys using noble/curves
export const getCurve25519KeyPair = (randomPriv: Buffer) => {
    // Apply the standard X25519 clamping to the private key
    randomPriv[0] &= 248;
    randomPriv[31] &= 127;
    randomPriv[31] |= 64;

    // Use noble/curves to derive the public key
    const publicKey = x25519.getPublicKey(randomPriv);

    return {
        publicKey: Buffer.from(publicKey),
        privateKey: randomPriv,
    };
};
