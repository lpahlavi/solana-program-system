/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Address } from '@solana/addresses';
import {
  Codec,
  Decoder,
  Encoder,
  combineCodec,
  getStructDecoder,
  getStructEncoder,
  getU32Decoder,
  getU32Encoder,
  getU64Decoder,
  getU64Encoder,
  mapEncoder,
} from '@solana/codecs';
import {
  AccountRole,
  IAccountMeta,
  IInstruction,
  IInstructionWithAccounts,
  IInstructionWithData,
  WritableAccount,
  WritableSignerAccount,
} from '@solana/instructions';
import { IAccountSignerMeta, TransactionSigner } from '@solana/signers';
import {
  ResolvedAccount,
  accountMetaWithDefault,
  getAccountMetasWithSigners,
} from '../shared';

export type TransferSolInstruction<
  TProgram extends string = '11111111111111111111111111111111',
  TAccountSource extends string | IAccountMeta<string> = string,
  TAccountDestination extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountSource extends string
        ? WritableSignerAccount<TAccountSource>
        : TAccountSource,
      TAccountDestination extends string
        ? WritableAccount<TAccountDestination>
        : TAccountDestination,
      ...TRemainingAccounts,
    ]
  >;

export type TransferSolInstructionWithSigners<
  TProgram extends string = '11111111111111111111111111111111',
  TAccountSource extends string | IAccountMeta<string> = string,
  TAccountDestination extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountSource extends string
        ? WritableSignerAccount<TAccountSource> &
            IAccountSignerMeta<TAccountSource>
        : TAccountSource,
      TAccountDestination extends string
        ? WritableAccount<TAccountDestination>
        : TAccountDestination,
      ...TRemainingAccounts,
    ]
  >;

export type TransferSolInstructionData = {
  discriminator: number;
  amount: bigint;
};

export type TransferSolInstructionDataArgs = { amount: number | bigint };

export function getTransferSolInstructionDataEncoder(): Encoder<TransferSolInstructionDataArgs> {
  return mapEncoder(
    getStructEncoder([
      ['discriminator', getU32Encoder()],
      ['amount', getU64Encoder()],
    ]),
    (value) => ({ ...value, discriminator: 2 })
  );
}

export function getTransferSolInstructionDataDecoder(): Decoder<TransferSolInstructionData> {
  return getStructDecoder([
    ['discriminator', getU32Decoder()],
    ['amount', getU64Decoder()],
  ]);
}

export function getTransferSolInstructionDataCodec(): Codec<
  TransferSolInstructionDataArgs,
  TransferSolInstructionData
> {
  return combineCodec(
    getTransferSolInstructionDataEncoder(),
    getTransferSolInstructionDataDecoder()
  );
}

export type TransferSolInput<
  TAccountSource extends string,
  TAccountDestination extends string,
> = {
  source: Address<TAccountSource>;
  destination: Address<TAccountDestination>;
  amount: TransferSolInstructionDataArgs['amount'];
};

export type TransferSolInputWithSigners<
  TAccountSource extends string,
  TAccountDestination extends string,
> = {
  source: TransactionSigner<TAccountSource>;
  destination: Address<TAccountDestination>;
  amount: TransferSolInstructionDataArgs['amount'];
};

export function getTransferSolInstruction<
  TAccountSource extends string,
  TAccountDestination extends string,
  TProgram extends string = '11111111111111111111111111111111',
>(
  input: TransferSolInputWithSigners<TAccountSource, TAccountDestination>
): TransferSolInstructionWithSigners<
  TProgram,
  TAccountSource,
  TAccountDestination
>;
export function getTransferSolInstruction<
  TAccountSource extends string,
  TAccountDestination extends string,
  TProgram extends string = '11111111111111111111111111111111',
>(
  input: TransferSolInput<TAccountSource, TAccountDestination>
): TransferSolInstruction<TProgram, TAccountSource, TAccountDestination>;
export function getTransferSolInstruction<
  TAccountSource extends string,
  TAccountDestination extends string,
  TProgram extends string = '11111111111111111111111111111111',
>(input: TransferSolInput<TAccountSource, TAccountDestination>): IInstruction {
  // Program address.
  const programAddress =
    '11111111111111111111111111111111' as Address<'11111111111111111111111111111111'>;

  // Original accounts.
  type AccountMetas = Parameters<
    typeof getTransferSolInstructionRaw<
      TProgram,
      TAccountSource,
      TAccountDestination
    >
  >[0];
  const accounts: Record<keyof AccountMetas, ResolvedAccount> = {
    source: { value: input.source ?? null, isWritable: true },
    destination: { value: input.destination ?? null, isWritable: true },
  };

  // Original args.
  const args = { ...input };

  // Get account metas and signers.
  const accountMetas = getAccountMetasWithSigners(
    accounts,
    'programId',
    programAddress
  );

  const instruction = getTransferSolInstructionRaw(
    accountMetas as Record<keyof AccountMetas, IAccountMeta>,
    args as TransferSolInstructionDataArgs,
    programAddress
  );

  return instruction;
}

export function getTransferSolInstructionRaw<
  TProgram extends string = '11111111111111111111111111111111',
  TAccountSource extends string | IAccountMeta<string> = string,
  TAccountDestination extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends Array<IAccountMeta<string>> = [],
>(
  accounts: {
    source: TAccountSource extends string
      ? Address<TAccountSource>
      : TAccountSource;
    destination: TAccountDestination extends string
      ? Address<TAccountDestination>
      : TAccountDestination;
  },
  args: TransferSolInstructionDataArgs,
  programAddress: Address<TProgram> = '11111111111111111111111111111111' as Address<TProgram>,
  remainingAccounts?: TRemainingAccounts
) {
  return {
    accounts: [
      accountMetaWithDefault(accounts.source, AccountRole.WRITABLE_SIGNER),
      accountMetaWithDefault(accounts.destination, AccountRole.WRITABLE),
      ...(remainingAccounts ?? []),
    ],
    data: getTransferSolInstructionDataEncoder().encode(args),
    programAddress,
  } as TransferSolInstruction<
    TProgram,
    TAccountSource,
    TAccountDestination,
    TRemainingAccounts
  >;
}

export type ParsedTransferSolInstruction<
  TProgram extends string = '11111111111111111111111111111111',
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    source: TAccountMetas[0];
    destination: TAccountMetas[1];
  };
  data: TransferSolInstructionData;
};

export function parseTransferSolInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedTransferSolInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 2) {
    // TODO: Coded error.
    throw new Error('Not enough accounts');
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts![accountIndex]!;
    accountIndex += 1;
    return accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      source: getNextAccount(),
      destination: getNextAccount(),
    },
    data: getTransferSolInstructionDataDecoder().decode(instruction.data),
  };
}
