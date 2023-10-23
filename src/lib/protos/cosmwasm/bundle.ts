import * as _114 from "./wasm/v1/authz";
import * as _115 from "./wasm/v1/genesis";
import * as _116 from "./wasm/v1/ibc";
import * as _117 from "./wasm/v1/proposal";
import * as _118 from "./wasm/v1/query";
import * as _119 from "./wasm/v1/tx";
import * as _120 from "./wasm/v1/types";
import * as _241 from "./wasm/v1/tx.amino";
import * as _242 from "./wasm/v1/tx.registry";
import * as _243 from "./wasm/v1/query.lcd";
import * as _244 from "./wasm/v1/query.rpc.Query";
import * as _245 from "./wasm/v1/tx.rpc.msg";
import * as _270 from "./lcd";
import * as _271 from "./rpc.query";
import * as _272 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._114,
      ..._115,
      ..._116,
      ..._117,
      ..._118,
      ..._119,
      ..._120,
      ..._241,
      ..._242,
      ..._243,
      ..._244,
      ..._245
    };
  }
  export const ClientFactory = {
    ..._270,
    ..._271,
    ..._272
  };
}