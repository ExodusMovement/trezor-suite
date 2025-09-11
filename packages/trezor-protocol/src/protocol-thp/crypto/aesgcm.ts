import { gcm } from '@noble/ciphers/aes';

export const aesgcm = (key: Buffer, iv: Buffer) => {
    let additionalData: Buffer | undefined;
    let lastEncryptedWithTag: Uint8Array | undefined;

    return {
        auth: (authData: Buffer) => {
            additionalData = authData;
        },
        encrypt: (plainText: Buffer) => {
            const cipher = gcm(key, iv, additionalData);
            lastEncryptedWithTag = cipher.encrypt(plainText);

            // Return only the ciphertext part (without the 16-byte auth tag at the end)
            return Buffer.from(lastEncryptedWithTag.slice(0, -16));
        },
        decrypt: (cipherText: Buffer, authTag: Buffer) => {
            // Combine ciphertext and auth tag for noble/ciphers
            const combined = new Uint8Array(cipherText.length + authTag.length);
            combined.set(cipherText);
            combined.set(authTag, cipherText.length);

            const cipher = gcm(key, iv, additionalData);

            return Buffer.from(cipher.decrypt(combined));
        },
        finish: () => {
            // Return the auth tag from the last encryption
            if (!lastEncryptedWithTag) {
                // If no encryption was done, encrypt empty data to get a tag
                const cipher = gcm(key, iv, additionalData);
                lastEncryptedWithTag = cipher.encrypt(new Uint8Array(0));
            }

            return Buffer.from(lastEncryptedWithTag.slice(-16)); // Last 16 bytes are the auth tag
        },
    };
};
