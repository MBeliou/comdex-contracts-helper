import * as _129 from "./applications/transfer/v1/genesis";
import * as _130 from "./applications/transfer/v1/query";
import * as _131 from "./applications/transfer/v1/transfer";
import * as _132 from "./applications/transfer/v1/tx";
import * as _133 from "./applications/transfer/v2/packet";
import * as _134 from "./core/channel/v1/channel";
import * as _135 from "./core/channel/v1/genesis";
import * as _136 from "./core/channel/v1/query";
import * as _137 from "./core/channel/v1/tx";
import * as _138 from "./core/client/v1/client";
import * as _139 from "./core/client/v1/genesis";
import * as _140 from "./core/client/v1/query";
import * as _141 from "./core/client/v1/tx";
import * as _142 from "./core/commitment/v1/commitment";
import * as _143 from "./core/connection/v1/connection";
import * as _144 from "./core/connection/v1/genesis";
import * as _145 from "./core/connection/v1/query";
import * as _146 from "./core/connection/v1/tx";
import * as _147 from "./core/port/v1/query";
import * as _148 from "./core/types/v1/genesis";
import * as _149 from "./lightclients/localhost/v1/localhost";
import * as _150 from "./lightclients/solomachine/v1/solomachine";
import * as _151 from "./lightclients/solomachine/v2/solomachine";
import * as _152 from "./lightclients/tendermint/v1/tendermint";
import * as _246 from "./applications/transfer/v1/tx.amino";
import * as _247 from "./core/channel/v1/tx.amino";
import * as _248 from "./core/client/v1/tx.amino";
import * as _249 from "./core/connection/v1/tx.amino";
import * as _250 from "./applications/transfer/v1/tx.registry";
import * as _251 from "./core/channel/v1/tx.registry";
import * as _252 from "./core/client/v1/tx.registry";
import * as _253 from "./core/connection/v1/tx.registry";
import * as _254 from "./applications/transfer/v1/query.lcd";
import * as _255 from "./core/channel/v1/query.lcd";
import * as _256 from "./core/client/v1/query.lcd";
import * as _257 from "./core/connection/v1/query.lcd";
import * as _258 from "./applications/transfer/v1/query.rpc.Query";
import * as _259 from "./core/channel/v1/query.rpc.Query";
import * as _260 from "./core/client/v1/query.rpc.Query";
import * as _261 from "./core/connection/v1/query.rpc.Query";
import * as _262 from "./core/port/v1/query.rpc.Query";
import * as _263 from "./applications/transfer/v1/tx.rpc.msg";
import * as _264 from "./core/channel/v1/tx.rpc.msg";
import * as _265 from "./core/client/v1/tx.rpc.msg";
import * as _266 from "./core/connection/v1/tx.rpc.msg";
import * as _273 from "./lcd";
import * as _274 from "./rpc.query";
import * as _275 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._129,
        ..._130,
        ..._131,
        ..._132,
        ..._246,
        ..._250,
        ..._254,
        ..._258,
        ..._263
      };
      export const v2 = {
        ..._133
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._134,
        ..._135,
        ..._136,
        ..._137,
        ..._247,
        ..._251,
        ..._255,
        ..._259,
        ..._264
      };
    }
    export namespace client {
      export const v1 = {
        ..._138,
        ..._139,
        ..._140,
        ..._141,
        ..._248,
        ..._252,
        ..._256,
        ..._260,
        ..._265
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._142
      };
    }
    export namespace connection {
      export const v1 = {
        ..._143,
        ..._144,
        ..._145,
        ..._146,
        ..._249,
        ..._253,
        ..._257,
        ..._261,
        ..._266
      };
    }
    export namespace port {
      export const v1 = {
        ..._147,
        ..._262
      };
    }
    export namespace types {
      export const v1 = {
        ..._148
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._149
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._150
      };
      export const v2 = {
        ..._151
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._152
      };
    }
  }
  export const ClientFactory = {
    ..._273,
    ..._274,
    ..._275
  };
}