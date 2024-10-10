/**
 * This code was AUTOGENERATED using the codama library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun codama to update it.
 *
 * @see https://github.com/codama-idl/codama
 */

import {
  isProgramError,
  type Address,
  type SOLANA_ERROR__INSTRUCTION_ERROR__CUSTOM,
  type SolanaError,
} from '@solana/web3.js';
import { SYSTEM_PROGRAM_ADDRESS } from '../programs';

/** AccountAlreadyInUse: an account with the same address already exists */
export const SYSTEM_ERROR__ACCOUNT_ALREADY_IN_USE = 0x0; // 0
/** ResultWithNegativeLamports: account does not have enough SOL to perform the operation */
export const SYSTEM_ERROR__RESULT_WITH_NEGATIVE_LAMPORTS = 0x1; // 1
/** InvalidProgramId: cannot assign account to this program id */
export const SYSTEM_ERROR__INVALID_PROGRAM_ID = 0x2; // 2
/** InvalidAccountDataLength: cannot allocate account data of this length */
export const SYSTEM_ERROR__INVALID_ACCOUNT_DATA_LENGTH = 0x3; // 3
/** MaxSeedLengthExceeded: length of requested seed is too long */
export const SYSTEM_ERROR__MAX_SEED_LENGTH_EXCEEDED = 0x4; // 4
/** AddressWithSeedMismatch: provided address does not match addressed derived from seed */
export const SYSTEM_ERROR__ADDRESS_WITH_SEED_MISMATCH = 0x5; // 5
/** NonceNoRecentBlockhashes: advancing stored nonce requires a populated RecentBlockhashes sysvar */
export const SYSTEM_ERROR__NONCE_NO_RECENT_BLOCKHASHES = 0x6; // 6
/** NonceBlockhashNotExpired: stored nonce is still in recent_blockhashes */
export const SYSTEM_ERROR__NONCE_BLOCKHASH_NOT_EXPIRED = 0x7; // 7
/** NonceUnexpectedBlockhashValue: specified nonce does not match stored nonce */
export const SYSTEM_ERROR__NONCE_UNEXPECTED_BLOCKHASH_VALUE = 0x8; // 8

export type SystemError =
  | typeof SYSTEM_ERROR__ACCOUNT_ALREADY_IN_USE
  | typeof SYSTEM_ERROR__ADDRESS_WITH_SEED_MISMATCH
  | typeof SYSTEM_ERROR__INVALID_ACCOUNT_DATA_LENGTH
  | typeof SYSTEM_ERROR__INVALID_PROGRAM_ID
  | typeof SYSTEM_ERROR__MAX_SEED_LENGTH_EXCEEDED
  | typeof SYSTEM_ERROR__NONCE_BLOCKHASH_NOT_EXPIRED
  | typeof SYSTEM_ERROR__NONCE_NO_RECENT_BLOCKHASHES
  | typeof SYSTEM_ERROR__NONCE_UNEXPECTED_BLOCKHASH_VALUE
  | typeof SYSTEM_ERROR__RESULT_WITH_NEGATIVE_LAMPORTS;

let systemErrorMessages: Record<SystemError, string> | undefined;
if (process.env.NODE_ENV !== 'production') {
  systemErrorMessages = {
    [SYSTEM_ERROR__ACCOUNT_ALREADY_IN_USE]: `an account with the same address already exists`,
    [SYSTEM_ERROR__ADDRESS_WITH_SEED_MISMATCH]: `provided address does not match addressed derived from seed`,
    [SYSTEM_ERROR__INVALID_ACCOUNT_DATA_LENGTH]: `cannot allocate account data of this length`,
    [SYSTEM_ERROR__INVALID_PROGRAM_ID]: `cannot assign account to this program id`,
    [SYSTEM_ERROR__MAX_SEED_LENGTH_EXCEEDED]: `length of requested seed is too long`,
    [SYSTEM_ERROR__NONCE_BLOCKHASH_NOT_EXPIRED]: `stored nonce is still in recent_blockhashes`,
    [SYSTEM_ERROR__NONCE_NO_RECENT_BLOCKHASHES]: `advancing stored nonce requires a populated RecentBlockhashes sysvar`,
    [SYSTEM_ERROR__NONCE_UNEXPECTED_BLOCKHASH_VALUE]: `specified nonce does not match stored nonce`,
    [SYSTEM_ERROR__RESULT_WITH_NEGATIVE_LAMPORTS]: `account does not have enough SOL to perform the operation`,
  };
}

export function getSystemErrorMessage(code: SystemError): string {
  if (process.env.NODE_ENV !== 'production') {
    return (systemErrorMessages as Record<SystemError, string>)[code];
  }

  return 'Error message not available in production bundles.';
}

export function isSystemError<TProgramErrorCode extends SystemError>(
  error: unknown,
  transactionMessage: {
    instructions: Record<number, { programAddress: Address }>;
  },
  code?: TProgramErrorCode
): error is SolanaError<typeof SOLANA_ERROR__INSTRUCTION_ERROR__CUSTOM> &
  Readonly<{ context: Readonly<{ code: TProgramErrorCode }> }> {
  return isProgramError<TProgramErrorCode>(
    error,
    transactionMessage,
    SYSTEM_PROGRAM_ADDRESS,
    code
  );
}
