import { BinaryReader, BinaryWriter } from "../../../binary";
export interface Asset {
  id: bigint;
  name: string;
  denom: string;
  decimals: bigint;
}
export interface AssetProtoMsg {
  typeUrl: "/comdex.asset.v1beta1.Asset";
  value: Uint8Array;
}
export interface AssetAmino {
  id: string;
  name: string;
  denom: string;
  decimals: string;
}
export interface AssetAminoMsg {
  type: "/comdex.asset.v1beta1.Asset";
  value: AssetAmino;
}
export interface AssetSDKType {
  id: bigint;
  name: string;
  denom: string;
  decimals: bigint;
}
function createBaseAsset(): Asset {
  return {
    id: BigInt(0),
    name: "",
    denom: "",
    decimals: BigInt(0)
  };
}
export const Asset = {
  typeUrl: "/comdex.asset.v1beta1.Asset",
  encode(message: Asset, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.decimals !== BigInt(0)) {
      writer.uint32(32).int64(message.decimals);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Asset {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        case 4:
          message.decimals = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Asset>): Asset {
    const message = createBaseAsset();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.name = object.name ?? "";
    message.denom = object.denom ?? "";
    message.decimals = object.decimals !== undefined && object.decimals !== null ? BigInt(object.decimals.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: AssetAmino): Asset {
    return {
      id: BigInt(object.id),
      name: object.name,
      denom: object.denom,
      decimals: BigInt(object.decimals)
    };
  },
  toAmino(message: Asset): AssetAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.name = message.name;
    obj.denom = message.denom;
    obj.decimals = message.decimals ? message.decimals.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: AssetAminoMsg): Asset {
    return Asset.fromAmino(object.value);
  },
  fromProtoMsg(message: AssetProtoMsg): Asset {
    return Asset.decode(message.value);
  },
  toProto(message: Asset): Uint8Array {
    return Asset.encode(message).finish();
  },
  toProtoMsg(message: Asset): AssetProtoMsg {
    return {
      typeUrl: "/comdex.asset.v1beta1.Asset",
      value: Asset.encode(message).finish()
    };
  }
};