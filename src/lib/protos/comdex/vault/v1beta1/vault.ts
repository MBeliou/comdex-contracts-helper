import { BinaryReader, BinaryWriter } from "../../../binary";
export interface Vault {
  id: bigint;
  pairId: bigint;
  owner: string;
  amountIn: string;
  amountOut: string;
}
export interface VaultProtoMsg {
  typeUrl: "/comdex.vault.v1beta1.Vault";
  value: Uint8Array;
}
export interface VaultAmino {
  id: string;
  pair_id: string;
  owner: string;
  amount_in: string;
  amount_out: string;
}
export interface VaultAminoMsg {
  type: "/comdex.vault.v1beta1.Vault";
  value: VaultAmino;
}
export interface VaultSDKType {
  id: bigint;
  pair_id: bigint;
  owner: string;
  amount_in: string;
  amount_out: string;
}
function createBaseVault(): Vault {
  return {
    id: BigInt(0),
    pairId: BigInt(0),
    owner: "",
    amountIn: "",
    amountOut: ""
  };
}
export const Vault = {
  typeUrl: "/comdex.vault.v1beta1.Vault",
  encode(message: Vault, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.pairId !== BigInt(0)) {
      writer.uint32(16).uint64(message.pairId);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.amountIn !== "") {
      writer.uint32(34).string(message.amountIn);
    }
    if (message.amountOut !== "") {
      writer.uint32(42).string(message.amountOut);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Vault {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVault();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.pairId = reader.uint64();
          break;
        case 3:
          message.owner = reader.string();
          break;
        case 4:
          message.amountIn = reader.string();
          break;
        case 5:
          message.amountOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Vault>): Vault {
    const message = createBaseVault();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.pairId = object.pairId !== undefined && object.pairId !== null ? BigInt(object.pairId.toString()) : BigInt(0);
    message.owner = object.owner ?? "";
    message.amountIn = object.amountIn ?? "";
    message.amountOut = object.amountOut ?? "";
    return message;
  },
  fromAmino(object: VaultAmino): Vault {
    return {
      id: BigInt(object.id),
      pairId: BigInt(object.pair_id),
      owner: object.owner,
      amountIn: object.amount_in,
      amountOut: object.amount_out
    };
  },
  toAmino(message: Vault): VaultAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.pair_id = message.pairId ? message.pairId.toString() : undefined;
    obj.owner = message.owner;
    obj.amount_in = message.amountIn;
    obj.amount_out = message.amountOut;
    return obj;
  },
  fromAminoMsg(object: VaultAminoMsg): Vault {
    return Vault.fromAmino(object.value);
  },
  fromProtoMsg(message: VaultProtoMsg): Vault {
    return Vault.decode(message.value);
  },
  toProto(message: Vault): Uint8Array {
    return Vault.encode(message).finish();
  },
  toProtoMsg(message: Vault): VaultProtoMsg {
    return {
      typeUrl: "/comdex.vault.v1beta1.Vault",
      value: Vault.encode(message).finish()
    };
  }
};