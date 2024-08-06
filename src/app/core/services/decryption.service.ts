import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class DecryptionService {
  private secretKey = 'Pilo@123';

  constructor() {}

  decrypt(encryptedText: string, decryptionKey: string): string {
    const bytes = CryptoJS.AES.decrypt(encryptedText, this.secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
  }
}
