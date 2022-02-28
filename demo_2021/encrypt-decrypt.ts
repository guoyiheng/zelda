
/*
    Store the calculated ciphertext and IV here, so we can decrypt the Idioms later.
    */
const iv = window.crypto.getRandomValues(new Uint8Array(12))

export async function generateKey() {
  const key = await window.crypto.subtle.generateKey(
    {
      name: 'AES-GCM',
      length: 256,
    },
    true,
    ['encrypt', 'decrypt'],
  )
  return key
}

export async function encryptIdioms(idioms: string, key: CryptoKey) {
  const enc = new TextEncoder()
  const encoded = enc.encode(idioms)
  const ciphertext = await window.crypto.subtle.encrypt(
    {
      name: 'AES-GCM',
      iv,
    },
    key,
    encoded,
  )

  return ciphertext
}

export async function decryptIdioms(ciphertext: BufferSource, key: CryptoKey) {
  const decrypted = await window.crypto.subtle.decrypt(
    {
      name: 'AES-GCM',
      iv,
    },
    key,
    ciphertext,
  )
  const dec = new TextDecoder()
  return dec.decode(decrypted)
}

export function ab2str(buf: Iterable<number>) {
  return String.fromCharCode.apply(null, new Uint16Array(buf))
}
export function str2ab(str: string) {
  const buf = new ArrayBuffer(str.length * 2) // 2 bytes for each char
  const bufView = new Uint16Array(buf)
  for (let i = 0, strLen = str.length; i < strLen; i++)
    bufView[i] = str.charCodeAt(i)

  return buf
}
