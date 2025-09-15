import { decryptGCM, encryptGCM } from '@exodus/crypto/aes';

export const aesgcm = (key: Buffer, iv: Buffer) => {
    let additionalData: Buffer | undefined;
    let lastEncryptedWithTag: Uint8Array | undefined;

    return {
        auth: (authData: Buffer) => {
            additionalData = authData;
        },
        encrypt: async (plainText: Buffer) => {
            lastEncryptedWithTag = (await encryptGCM({
                key,
                nonce: iv,
                data: plainText,
                additionalData,
            })) as Buffer;

            // Return only the ciphertext part (without the 16-byte auth tag at the end)
            return Buffer.from(lastEncryptedWithTag.slice(0, -16));
        },
        decrypt: async (cipherText: Buffer, authTag: Buffer) => {
            // Combine ciphertext and auth tag for noble/ciphers
            const combined = new Uint8Array(cipherText.length + authTag.length);
            combined.set(cipherText);
            combined.set(authTag, cipherText.length);

            return await decryptGCM({
                key,
                nonce: iv,
                data: combined,
                additionalData,
            });
        },
        finish: async () => {
            // Return the auth tag from the last encryption
            if (!lastEncryptedWithTag) {
                // If no encryption was done, encrypt empty data to get a tag
                lastEncryptedWithTag = (await encryptGCM({
                    key,
                    nonce: iv,
                    data: new Uint8Array(0),
                    additionalData,
                })) as Buffer;
            }

            return Buffer.from(lastEncryptedWithTag.slice(-16)); // Last 16 bytes are the auth tag
        },
    };
};
