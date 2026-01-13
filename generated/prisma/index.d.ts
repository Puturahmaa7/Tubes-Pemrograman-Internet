
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model JsonData
 * 
 */
export type JsonData = $Result.DefaultSelection<Prisma.$JsonDataPayload>
/**
 * Model Materi
 * 
 */
export type Materi = $Result.DefaultSelection<Prisma.$MateriPayload>
/**
 * Model MateriDetail
 * 
 */
export type MateriDetail = $Result.DefaultSelection<Prisma.$MateriDetailPayload>
/**
 * Model Quiz
 * 
 */
export type Quiz = $Result.DefaultSelection<Prisma.$QuizPayload>
/**
 * Model QuizAttempt
 * 
 */
export type QuizAttempt = $Result.DefaultSelection<Prisma.$QuizAttemptPayload>
/**
 * Model ShopItem
 * 
 */
export type ShopItem = $Result.DefaultSelection<Prisma.$ShopItemPayload>
/**
 * Model Purchase
 * 
 */
export type Purchase = $Result.DefaultSelection<Prisma.$PurchasePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const MateriType: {
  HURUF: 'HURUF',
  SUKU_KATA: 'SUKU_KATA',
  KATA: 'KATA'
};

export type MateriType = (typeof MateriType)[keyof typeof MateriType]

}

export type MateriType = $Enums.MateriType

export const MateriType: typeof $Enums.MateriType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jsonData`: Exposes CRUD operations for the **JsonData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JsonData
    * const jsonData = await prisma.jsonData.findMany()
    * ```
    */
  get jsonData(): Prisma.JsonDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.materi`: Exposes CRUD operations for the **Materi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Materis
    * const materis = await prisma.materi.findMany()
    * ```
    */
  get materi(): Prisma.MateriDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.materiDetail`: Exposes CRUD operations for the **MateriDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MateriDetails
    * const materiDetails = await prisma.materiDetail.findMany()
    * ```
    */
  get materiDetail(): Prisma.MateriDetailDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quiz`: Exposes CRUD operations for the **Quiz** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quizzes
    * const quizzes = await prisma.quiz.findMany()
    * ```
    */
  get quiz(): Prisma.QuizDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quizAttempt`: Exposes CRUD operations for the **QuizAttempt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuizAttempts
    * const quizAttempts = await prisma.quizAttempt.findMany()
    * ```
    */
  get quizAttempt(): Prisma.QuizAttemptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shopItem`: Exposes CRUD operations for the **ShopItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShopItems
    * const shopItems = await prisma.shopItem.findMany()
    * ```
    */
  get shopItem(): Prisma.ShopItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.purchase`: Exposes CRUD operations for the **Purchase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Purchases
    * const purchases = await prisma.purchase.findMany()
    * ```
    */
  get purchase(): Prisma.PurchaseDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    JsonData: 'JsonData',
    Materi: 'Materi',
    MateriDetail: 'MateriDetail',
    Quiz: 'Quiz',
    QuizAttempt: 'QuizAttempt',
    ShopItem: 'ShopItem',
    Purchase: 'Purchase'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "jsonData" | "materi" | "materiDetail" | "quiz" | "quizAttempt" | "shopItem" | "purchase"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      JsonData: {
        payload: Prisma.$JsonDataPayload<ExtArgs>
        fields: Prisma.JsonDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JsonDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JsonDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JsonDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JsonDataPayload>
          }
          findFirst: {
            args: Prisma.JsonDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JsonDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JsonDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JsonDataPayload>
          }
          findMany: {
            args: Prisma.JsonDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JsonDataPayload>[]
          }
          create: {
            args: Prisma.JsonDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JsonDataPayload>
          }
          createMany: {
            args: Prisma.JsonDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JsonDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JsonDataPayload>[]
          }
          delete: {
            args: Prisma.JsonDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JsonDataPayload>
          }
          update: {
            args: Prisma.JsonDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JsonDataPayload>
          }
          deleteMany: {
            args: Prisma.JsonDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JsonDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JsonDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JsonDataPayload>[]
          }
          upsert: {
            args: Prisma.JsonDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JsonDataPayload>
          }
          aggregate: {
            args: Prisma.JsonDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJsonData>
          }
          groupBy: {
            args: Prisma.JsonDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<JsonDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.JsonDataCountArgs<ExtArgs>
            result: $Utils.Optional<JsonDataCountAggregateOutputType> | number
          }
        }
      }
      Materi: {
        payload: Prisma.$MateriPayload<ExtArgs>
        fields: Prisma.MateriFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MateriFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MateriFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriPayload>
          }
          findFirst: {
            args: Prisma.MateriFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MateriFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriPayload>
          }
          findMany: {
            args: Prisma.MateriFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriPayload>[]
          }
          create: {
            args: Prisma.MateriCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriPayload>
          }
          createMany: {
            args: Prisma.MateriCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MateriCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriPayload>[]
          }
          delete: {
            args: Prisma.MateriDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriPayload>
          }
          update: {
            args: Prisma.MateriUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriPayload>
          }
          deleteMany: {
            args: Prisma.MateriDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MateriUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MateriUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriPayload>[]
          }
          upsert: {
            args: Prisma.MateriUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriPayload>
          }
          aggregate: {
            args: Prisma.MateriAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMateri>
          }
          groupBy: {
            args: Prisma.MateriGroupByArgs<ExtArgs>
            result: $Utils.Optional<MateriGroupByOutputType>[]
          }
          count: {
            args: Prisma.MateriCountArgs<ExtArgs>
            result: $Utils.Optional<MateriCountAggregateOutputType> | number
          }
        }
      }
      MateriDetail: {
        payload: Prisma.$MateriDetailPayload<ExtArgs>
        fields: Prisma.MateriDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MateriDetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MateriDetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriDetailPayload>
          }
          findFirst: {
            args: Prisma.MateriDetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MateriDetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriDetailPayload>
          }
          findMany: {
            args: Prisma.MateriDetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriDetailPayload>[]
          }
          create: {
            args: Prisma.MateriDetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriDetailPayload>
          }
          createMany: {
            args: Prisma.MateriDetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MateriDetailCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriDetailPayload>[]
          }
          delete: {
            args: Prisma.MateriDetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriDetailPayload>
          }
          update: {
            args: Prisma.MateriDetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriDetailPayload>
          }
          deleteMany: {
            args: Prisma.MateriDetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MateriDetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MateriDetailUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriDetailPayload>[]
          }
          upsert: {
            args: Prisma.MateriDetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriDetailPayload>
          }
          aggregate: {
            args: Prisma.MateriDetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMateriDetail>
          }
          groupBy: {
            args: Prisma.MateriDetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<MateriDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.MateriDetailCountArgs<ExtArgs>
            result: $Utils.Optional<MateriDetailCountAggregateOutputType> | number
          }
        }
      }
      Quiz: {
        payload: Prisma.$QuizPayload<ExtArgs>
        fields: Prisma.QuizFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          findFirst: {
            args: Prisma.QuizFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          findMany: {
            args: Prisma.QuizFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>[]
          }
          create: {
            args: Prisma.QuizCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          createMany: {
            args: Prisma.QuizCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuizCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>[]
          }
          delete: {
            args: Prisma.QuizDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          update: {
            args: Prisma.QuizUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          deleteMany: {
            args: Prisma.QuizDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuizUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>[]
          }
          upsert: {
            args: Prisma.QuizUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          aggregate: {
            args: Prisma.QuizAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuiz>
          }
          groupBy: {
            args: Prisma.QuizGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizCountArgs<ExtArgs>
            result: $Utils.Optional<QuizCountAggregateOutputType> | number
          }
        }
      }
      QuizAttempt: {
        payload: Prisma.$QuizAttemptPayload<ExtArgs>
        fields: Prisma.QuizAttemptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizAttemptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizAttemptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload>
          }
          findFirst: {
            args: Prisma.QuizAttemptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizAttemptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload>
          }
          findMany: {
            args: Prisma.QuizAttemptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload>[]
          }
          create: {
            args: Prisma.QuizAttemptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload>
          }
          createMany: {
            args: Prisma.QuizAttemptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuizAttemptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload>[]
          }
          delete: {
            args: Prisma.QuizAttemptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload>
          }
          update: {
            args: Prisma.QuizAttemptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload>
          }
          deleteMany: {
            args: Prisma.QuizAttemptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizAttemptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuizAttemptUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload>[]
          }
          upsert: {
            args: Prisma.QuizAttemptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizAttemptPayload>
          }
          aggregate: {
            args: Prisma.QuizAttemptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuizAttempt>
          }
          groupBy: {
            args: Prisma.QuizAttemptGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizAttemptGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizAttemptCountArgs<ExtArgs>
            result: $Utils.Optional<QuizAttemptCountAggregateOutputType> | number
          }
        }
      }
      ShopItem: {
        payload: Prisma.$ShopItemPayload<ExtArgs>
        fields: Prisma.ShopItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShopItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShopItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopItemPayload>
          }
          findFirst: {
            args: Prisma.ShopItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShopItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopItemPayload>
          }
          findMany: {
            args: Prisma.ShopItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopItemPayload>[]
          }
          create: {
            args: Prisma.ShopItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopItemPayload>
          }
          createMany: {
            args: Prisma.ShopItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShopItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopItemPayload>[]
          }
          delete: {
            args: Prisma.ShopItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopItemPayload>
          }
          update: {
            args: Prisma.ShopItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopItemPayload>
          }
          deleteMany: {
            args: Prisma.ShopItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShopItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShopItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopItemPayload>[]
          }
          upsert: {
            args: Prisma.ShopItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopItemPayload>
          }
          aggregate: {
            args: Prisma.ShopItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShopItem>
          }
          groupBy: {
            args: Prisma.ShopItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShopItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShopItemCountArgs<ExtArgs>
            result: $Utils.Optional<ShopItemCountAggregateOutputType> | number
          }
        }
      }
      Purchase: {
        payload: Prisma.$PurchasePayload<ExtArgs>
        fields: Prisma.PurchaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          findFirst: {
            args: Prisma.PurchaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          findMany: {
            args: Prisma.PurchaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>[]
          }
          create: {
            args: Prisma.PurchaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          createMany: {
            args: Prisma.PurchaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PurchaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>[]
          }
          delete: {
            args: Prisma.PurchaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          update: {
            args: Prisma.PurchaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          deleteMany: {
            args: Prisma.PurchaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurchaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PurchaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>[]
          }
          upsert: {
            args: Prisma.PurchaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          aggregate: {
            args: Prisma.PurchaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchase>
          }
          groupBy: {
            args: Prisma.PurchaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurchaseCountArgs<ExtArgs>
            result: $Utils.Optional<PurchaseCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    jsonData?: JsonDataOmit
    materi?: MateriOmit
    materiDetail?: MateriDetailOmit
    quiz?: QuizOmit
    quizAttempt?: QuizAttemptOmit
    shopItem?: ShopItemOmit
    purchase?: PurchaseOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    quizzes: number
    jsonData: number
    purchases: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quizzes?: boolean | UserCountOutputTypeCountQuizzesArgs
    jsonData?: boolean | UserCountOutputTypeCountJsonDataArgs
    purchases?: boolean | UserCountOutputTypeCountPurchasesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountQuizzesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizAttemptWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountJsonDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JsonDataWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseWhereInput
  }


  /**
   * Count Type MateriCountOutputType
   */

  export type MateriCountOutputType = {
    details: number
    quizzes: number
  }

  export type MateriCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    details?: boolean | MateriCountOutputTypeCountDetailsArgs
    quizzes?: boolean | MateriCountOutputTypeCountQuizzesArgs
  }

  // Custom InputTypes
  /**
   * MateriCountOutputType without action
   */
  export type MateriCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MateriCountOutputType
     */
    select?: MateriCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MateriCountOutputType without action
   */
  export type MateriCountOutputTypeCountDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MateriDetailWhereInput
  }

  /**
   * MateriCountOutputType without action
   */
  export type MateriCountOutputTypeCountQuizzesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizWhereInput
  }


  /**
   * Count Type QuizCountOutputType
   */

  export type QuizCountOutputType = {
    attempts: number
  }

  export type QuizCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attempts?: boolean | QuizCountOutputTypeCountAttemptsArgs
  }

  // Custom InputTypes
  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCountOutputType
     */
    select?: QuizCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeCountAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizAttemptWhereInput
  }


  /**
   * Count Type ShopItemCountOutputType
   */

  export type ShopItemCountOutputType = {
    purchases: number
  }

  export type ShopItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchases?: boolean | ShopItemCountOutputTypeCountPurchasesArgs
  }

  // Custom InputTypes
  /**
   * ShopItemCountOutputType without action
   */
  export type ShopItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopItemCountOutputType
     */
    select?: ShopItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShopItemCountOutputType without action
   */
  export type ShopItemCountOutputTypeCountPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    points: number | null
    lives: number | null
  }

  export type UserSumAggregateOutputType = {
    points: number | null
    lives: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    clerkUserId: string | null
    email: string | null
    name: string | null
    imageUrl: string | null
    points: number | null
    lives: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    clerkUserId: string | null
    email: string | null
    name: string | null
    imageUrl: string | null
    points: number | null
    lives: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    clerkUserId: number
    email: number
    name: number
    imageUrl: number
    points: number
    lives: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    points?: true
    lives?: true
  }

  export type UserSumAggregateInputType = {
    points?: true
    lives?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    clerkUserId?: true
    email?: true
    name?: true
    imageUrl?: true
    points?: true
    lives?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    clerkUserId?: true
    email?: true
    name?: true
    imageUrl?: true
    points?: true
    lives?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    clerkUserId?: true
    email?: true
    name?: true
    imageUrl?: true
    points?: true
    lives?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    clerkUserId: string
    email: string
    name: string | null
    imageUrl: string | null
    points: number
    lives: number
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkUserId?: boolean
    email?: boolean
    name?: boolean
    imageUrl?: boolean
    points?: boolean
    lives?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    quizzes?: boolean | User$quizzesArgs<ExtArgs>
    jsonData?: boolean | User$jsonDataArgs<ExtArgs>
    purchases?: boolean | User$purchasesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkUserId?: boolean
    email?: boolean
    name?: boolean
    imageUrl?: boolean
    points?: boolean
    lives?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkUserId?: boolean
    email?: boolean
    name?: boolean
    imageUrl?: boolean
    points?: boolean
    lives?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    clerkUserId?: boolean
    email?: boolean
    name?: boolean
    imageUrl?: boolean
    points?: boolean
    lives?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerkUserId" | "email" | "name" | "imageUrl" | "points" | "lives" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quizzes?: boolean | User$quizzesArgs<ExtArgs>
    jsonData?: boolean | User$jsonDataArgs<ExtArgs>
    purchases?: boolean | User$purchasesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      quizzes: Prisma.$QuizAttemptPayload<ExtArgs>[]
      jsonData: Prisma.$JsonDataPayload<ExtArgs>[]
      purchases: Prisma.$PurchasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clerkUserId: string
      email: string
      name: string | null
      imageUrl: string | null
      points: number
      lives: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quizzes<T extends User$quizzesArgs<ExtArgs> = {}>(args?: Subset<T, User$quizzesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    jsonData<T extends User$jsonDataArgs<ExtArgs> = {}>(args?: Subset<T, User$jsonDataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JsonDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    purchases<T extends User$purchasesArgs<ExtArgs> = {}>(args?: Subset<T, User$purchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly clerkUserId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly imageUrl: FieldRef<"User", 'String'>
    readonly points: FieldRef<"User", 'Int'>
    readonly lives: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.quizzes
   */
  export type User$quizzesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    where?: QuizAttemptWhereInput
    orderBy?: QuizAttemptOrderByWithRelationInput | QuizAttemptOrderByWithRelationInput[]
    cursor?: QuizAttemptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizAttemptScalarFieldEnum | QuizAttemptScalarFieldEnum[]
  }

  /**
   * User.jsonData
   */
  export type User$jsonDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JsonData
     */
    select?: JsonDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JsonData
     */
    omit?: JsonDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JsonDataInclude<ExtArgs> | null
    where?: JsonDataWhereInput
    orderBy?: JsonDataOrderByWithRelationInput | JsonDataOrderByWithRelationInput[]
    cursor?: JsonDataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JsonDataScalarFieldEnum | JsonDataScalarFieldEnum[]
  }

  /**
   * User.purchases
   */
  export type User$purchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    where?: PurchaseWhereInput
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    cursor?: PurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model JsonData
   */

  export type AggregateJsonData = {
    _count: JsonDataCountAggregateOutputType | null
    _min: JsonDataMinAggregateOutputType | null
    _max: JsonDataMaxAggregateOutputType | null
  }

  export type JsonDataMinAggregateOutputType = {
    id: string | null
    name: string | null
    content: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JsonDataMaxAggregateOutputType = {
    id: string | null
    name: string | null
    content: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JsonDataCountAggregateOutputType = {
    id: number
    name: number
    content: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JsonDataMinAggregateInputType = {
    id?: true
    name?: true
    content?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JsonDataMaxAggregateInputType = {
    id?: true
    name?: true
    content?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JsonDataCountAggregateInputType = {
    id?: true
    name?: true
    content?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JsonDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JsonData to aggregate.
     */
    where?: JsonDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JsonData to fetch.
     */
    orderBy?: JsonDataOrderByWithRelationInput | JsonDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JsonDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JsonData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JsonData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JsonData
    **/
    _count?: true | JsonDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JsonDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JsonDataMaxAggregateInputType
  }

  export type GetJsonDataAggregateType<T extends JsonDataAggregateArgs> = {
        [P in keyof T & keyof AggregateJsonData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJsonData[P]>
      : GetScalarType<T[P], AggregateJsonData[P]>
  }




  export type JsonDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JsonDataWhereInput
    orderBy?: JsonDataOrderByWithAggregationInput | JsonDataOrderByWithAggregationInput[]
    by: JsonDataScalarFieldEnum[] | JsonDataScalarFieldEnum
    having?: JsonDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JsonDataCountAggregateInputType | true
    _min?: JsonDataMinAggregateInputType
    _max?: JsonDataMaxAggregateInputType
  }

  export type JsonDataGroupByOutputType = {
    id: string
    name: string
    content: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: JsonDataCountAggregateOutputType | null
    _min: JsonDataMinAggregateOutputType | null
    _max: JsonDataMaxAggregateOutputType | null
  }

  type GetJsonDataGroupByPayload<T extends JsonDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JsonDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JsonDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JsonDataGroupByOutputType[P]>
            : GetScalarType<T[P], JsonDataGroupByOutputType[P]>
        }
      >
    >


  export type JsonDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    content?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jsonData"]>

  export type JsonDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    content?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jsonData"]>

  export type JsonDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    content?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jsonData"]>

  export type JsonDataSelectScalar = {
    id?: boolean
    name?: boolean
    content?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JsonDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "content" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["jsonData"]>
  export type JsonDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type JsonDataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type JsonDataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $JsonDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JsonData"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      content: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["jsonData"]>
    composites: {}
  }

  type JsonDataGetPayload<S extends boolean | null | undefined | JsonDataDefaultArgs> = $Result.GetResult<Prisma.$JsonDataPayload, S>

  type JsonDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JsonDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JsonDataCountAggregateInputType | true
    }

  export interface JsonDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JsonData'], meta: { name: 'JsonData' } }
    /**
     * Find zero or one JsonData that matches the filter.
     * @param {JsonDataFindUniqueArgs} args - Arguments to find a JsonData
     * @example
     * // Get one JsonData
     * const jsonData = await prisma.jsonData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JsonDataFindUniqueArgs>(args: SelectSubset<T, JsonDataFindUniqueArgs<ExtArgs>>): Prisma__JsonDataClient<$Result.GetResult<Prisma.$JsonDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JsonData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JsonDataFindUniqueOrThrowArgs} args - Arguments to find a JsonData
     * @example
     * // Get one JsonData
     * const jsonData = await prisma.jsonData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JsonDataFindUniqueOrThrowArgs>(args: SelectSubset<T, JsonDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JsonDataClient<$Result.GetResult<Prisma.$JsonDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JsonData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JsonDataFindFirstArgs} args - Arguments to find a JsonData
     * @example
     * // Get one JsonData
     * const jsonData = await prisma.jsonData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JsonDataFindFirstArgs>(args?: SelectSubset<T, JsonDataFindFirstArgs<ExtArgs>>): Prisma__JsonDataClient<$Result.GetResult<Prisma.$JsonDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JsonData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JsonDataFindFirstOrThrowArgs} args - Arguments to find a JsonData
     * @example
     * // Get one JsonData
     * const jsonData = await prisma.jsonData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JsonDataFindFirstOrThrowArgs>(args?: SelectSubset<T, JsonDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__JsonDataClient<$Result.GetResult<Prisma.$JsonDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JsonData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JsonDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JsonData
     * const jsonData = await prisma.jsonData.findMany()
     * 
     * // Get first 10 JsonData
     * const jsonData = await prisma.jsonData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jsonDataWithIdOnly = await prisma.jsonData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JsonDataFindManyArgs>(args?: SelectSubset<T, JsonDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JsonDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JsonData.
     * @param {JsonDataCreateArgs} args - Arguments to create a JsonData.
     * @example
     * // Create one JsonData
     * const JsonData = await prisma.jsonData.create({
     *   data: {
     *     // ... data to create a JsonData
     *   }
     * })
     * 
     */
    create<T extends JsonDataCreateArgs>(args: SelectSubset<T, JsonDataCreateArgs<ExtArgs>>): Prisma__JsonDataClient<$Result.GetResult<Prisma.$JsonDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JsonData.
     * @param {JsonDataCreateManyArgs} args - Arguments to create many JsonData.
     * @example
     * // Create many JsonData
     * const jsonData = await prisma.jsonData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JsonDataCreateManyArgs>(args?: SelectSubset<T, JsonDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JsonData and returns the data saved in the database.
     * @param {JsonDataCreateManyAndReturnArgs} args - Arguments to create many JsonData.
     * @example
     * // Create many JsonData
     * const jsonData = await prisma.jsonData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JsonData and only return the `id`
     * const jsonDataWithIdOnly = await prisma.jsonData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JsonDataCreateManyAndReturnArgs>(args?: SelectSubset<T, JsonDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JsonDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JsonData.
     * @param {JsonDataDeleteArgs} args - Arguments to delete one JsonData.
     * @example
     * // Delete one JsonData
     * const JsonData = await prisma.jsonData.delete({
     *   where: {
     *     // ... filter to delete one JsonData
     *   }
     * })
     * 
     */
    delete<T extends JsonDataDeleteArgs>(args: SelectSubset<T, JsonDataDeleteArgs<ExtArgs>>): Prisma__JsonDataClient<$Result.GetResult<Prisma.$JsonDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JsonData.
     * @param {JsonDataUpdateArgs} args - Arguments to update one JsonData.
     * @example
     * // Update one JsonData
     * const jsonData = await prisma.jsonData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JsonDataUpdateArgs>(args: SelectSubset<T, JsonDataUpdateArgs<ExtArgs>>): Prisma__JsonDataClient<$Result.GetResult<Prisma.$JsonDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JsonData.
     * @param {JsonDataDeleteManyArgs} args - Arguments to filter JsonData to delete.
     * @example
     * // Delete a few JsonData
     * const { count } = await prisma.jsonData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JsonDataDeleteManyArgs>(args?: SelectSubset<T, JsonDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JsonData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JsonDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JsonData
     * const jsonData = await prisma.jsonData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JsonDataUpdateManyArgs>(args: SelectSubset<T, JsonDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JsonData and returns the data updated in the database.
     * @param {JsonDataUpdateManyAndReturnArgs} args - Arguments to update many JsonData.
     * @example
     * // Update many JsonData
     * const jsonData = await prisma.jsonData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JsonData and only return the `id`
     * const jsonDataWithIdOnly = await prisma.jsonData.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JsonDataUpdateManyAndReturnArgs>(args: SelectSubset<T, JsonDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JsonDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JsonData.
     * @param {JsonDataUpsertArgs} args - Arguments to update or create a JsonData.
     * @example
     * // Update or create a JsonData
     * const jsonData = await prisma.jsonData.upsert({
     *   create: {
     *     // ... data to create a JsonData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JsonData we want to update
     *   }
     * })
     */
    upsert<T extends JsonDataUpsertArgs>(args: SelectSubset<T, JsonDataUpsertArgs<ExtArgs>>): Prisma__JsonDataClient<$Result.GetResult<Prisma.$JsonDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JsonData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JsonDataCountArgs} args - Arguments to filter JsonData to count.
     * @example
     * // Count the number of JsonData
     * const count = await prisma.jsonData.count({
     *   where: {
     *     // ... the filter for the JsonData we want to count
     *   }
     * })
    **/
    count<T extends JsonDataCountArgs>(
      args?: Subset<T, JsonDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JsonDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JsonData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JsonDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JsonDataAggregateArgs>(args: Subset<T, JsonDataAggregateArgs>): Prisma.PrismaPromise<GetJsonDataAggregateType<T>>

    /**
     * Group by JsonData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JsonDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JsonDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JsonDataGroupByArgs['orderBy'] }
        : { orderBy?: JsonDataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JsonDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJsonDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JsonData model
   */
  readonly fields: JsonDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JsonData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JsonDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JsonData model
   */
  interface JsonDataFieldRefs {
    readonly id: FieldRef<"JsonData", 'String'>
    readonly name: FieldRef<"JsonData", 'String'>
    readonly content: FieldRef<"JsonData", 'String'>
    readonly userId: FieldRef<"JsonData", 'String'>
    readonly createdAt: FieldRef<"JsonData", 'DateTime'>
    readonly updatedAt: FieldRef<"JsonData", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JsonData findUnique
   */
  export type JsonDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JsonData
     */
    select?: JsonDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JsonData
     */
    omit?: JsonDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JsonDataInclude<ExtArgs> | null
    /**
     * Filter, which JsonData to fetch.
     */
    where: JsonDataWhereUniqueInput
  }

  /**
   * JsonData findUniqueOrThrow
   */
  export type JsonDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JsonData
     */
    select?: JsonDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JsonData
     */
    omit?: JsonDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JsonDataInclude<ExtArgs> | null
    /**
     * Filter, which JsonData to fetch.
     */
    where: JsonDataWhereUniqueInput
  }

  /**
   * JsonData findFirst
   */
  export type JsonDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JsonData
     */
    select?: JsonDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JsonData
     */
    omit?: JsonDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JsonDataInclude<ExtArgs> | null
    /**
     * Filter, which JsonData to fetch.
     */
    where?: JsonDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JsonData to fetch.
     */
    orderBy?: JsonDataOrderByWithRelationInput | JsonDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JsonData.
     */
    cursor?: JsonDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JsonData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JsonData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JsonData.
     */
    distinct?: JsonDataScalarFieldEnum | JsonDataScalarFieldEnum[]
  }

  /**
   * JsonData findFirstOrThrow
   */
  export type JsonDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JsonData
     */
    select?: JsonDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JsonData
     */
    omit?: JsonDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JsonDataInclude<ExtArgs> | null
    /**
     * Filter, which JsonData to fetch.
     */
    where?: JsonDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JsonData to fetch.
     */
    orderBy?: JsonDataOrderByWithRelationInput | JsonDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JsonData.
     */
    cursor?: JsonDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JsonData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JsonData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JsonData.
     */
    distinct?: JsonDataScalarFieldEnum | JsonDataScalarFieldEnum[]
  }

  /**
   * JsonData findMany
   */
  export type JsonDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JsonData
     */
    select?: JsonDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JsonData
     */
    omit?: JsonDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JsonDataInclude<ExtArgs> | null
    /**
     * Filter, which JsonData to fetch.
     */
    where?: JsonDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JsonData to fetch.
     */
    orderBy?: JsonDataOrderByWithRelationInput | JsonDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JsonData.
     */
    cursor?: JsonDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JsonData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JsonData.
     */
    skip?: number
    distinct?: JsonDataScalarFieldEnum | JsonDataScalarFieldEnum[]
  }

  /**
   * JsonData create
   */
  export type JsonDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JsonData
     */
    select?: JsonDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JsonData
     */
    omit?: JsonDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JsonDataInclude<ExtArgs> | null
    /**
     * The data needed to create a JsonData.
     */
    data: XOR<JsonDataCreateInput, JsonDataUncheckedCreateInput>
  }

  /**
   * JsonData createMany
   */
  export type JsonDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JsonData.
     */
    data: JsonDataCreateManyInput | JsonDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JsonData createManyAndReturn
   */
  export type JsonDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JsonData
     */
    select?: JsonDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JsonData
     */
    omit?: JsonDataOmit<ExtArgs> | null
    /**
     * The data used to create many JsonData.
     */
    data: JsonDataCreateManyInput | JsonDataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JsonDataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JsonData update
   */
  export type JsonDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JsonData
     */
    select?: JsonDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JsonData
     */
    omit?: JsonDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JsonDataInclude<ExtArgs> | null
    /**
     * The data needed to update a JsonData.
     */
    data: XOR<JsonDataUpdateInput, JsonDataUncheckedUpdateInput>
    /**
     * Choose, which JsonData to update.
     */
    where: JsonDataWhereUniqueInput
  }

  /**
   * JsonData updateMany
   */
  export type JsonDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JsonData.
     */
    data: XOR<JsonDataUpdateManyMutationInput, JsonDataUncheckedUpdateManyInput>
    /**
     * Filter which JsonData to update
     */
    where?: JsonDataWhereInput
    /**
     * Limit how many JsonData to update.
     */
    limit?: number
  }

  /**
   * JsonData updateManyAndReturn
   */
  export type JsonDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JsonData
     */
    select?: JsonDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JsonData
     */
    omit?: JsonDataOmit<ExtArgs> | null
    /**
     * The data used to update JsonData.
     */
    data: XOR<JsonDataUpdateManyMutationInput, JsonDataUncheckedUpdateManyInput>
    /**
     * Filter which JsonData to update
     */
    where?: JsonDataWhereInput
    /**
     * Limit how many JsonData to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JsonDataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JsonData upsert
   */
  export type JsonDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JsonData
     */
    select?: JsonDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JsonData
     */
    omit?: JsonDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JsonDataInclude<ExtArgs> | null
    /**
     * The filter to search for the JsonData to update in case it exists.
     */
    where: JsonDataWhereUniqueInput
    /**
     * In case the JsonData found by the `where` argument doesn't exist, create a new JsonData with this data.
     */
    create: XOR<JsonDataCreateInput, JsonDataUncheckedCreateInput>
    /**
     * In case the JsonData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JsonDataUpdateInput, JsonDataUncheckedUpdateInput>
  }

  /**
   * JsonData delete
   */
  export type JsonDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JsonData
     */
    select?: JsonDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JsonData
     */
    omit?: JsonDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JsonDataInclude<ExtArgs> | null
    /**
     * Filter which JsonData to delete.
     */
    where: JsonDataWhereUniqueInput
  }

  /**
   * JsonData deleteMany
   */
  export type JsonDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JsonData to delete
     */
    where?: JsonDataWhereInput
    /**
     * Limit how many JsonData to delete.
     */
    limit?: number
  }

  /**
   * JsonData without action
   */
  export type JsonDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JsonData
     */
    select?: JsonDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JsonData
     */
    omit?: JsonDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JsonDataInclude<ExtArgs> | null
  }


  /**
   * Model Materi
   */

  export type AggregateMateri = {
    _count: MateriCountAggregateOutputType | null
    _min: MateriMinAggregateOutputType | null
    _max: MateriMaxAggregateOutputType | null
  }

  export type MateriMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    type: $Enums.MateriType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MateriMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    type: $Enums.MateriType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MateriCountAggregateOutputType = {
    id: number
    title: number
    description: number
    type: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MateriMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MateriMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MateriCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MateriAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materi to aggregate.
     */
    where?: MateriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materis to fetch.
     */
    orderBy?: MateriOrderByWithRelationInput | MateriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MateriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Materis
    **/
    _count?: true | MateriCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MateriMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MateriMaxAggregateInputType
  }

  export type GetMateriAggregateType<T extends MateriAggregateArgs> = {
        [P in keyof T & keyof AggregateMateri]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMateri[P]>
      : GetScalarType<T[P], AggregateMateri[P]>
  }




  export type MateriGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MateriWhereInput
    orderBy?: MateriOrderByWithAggregationInput | MateriOrderByWithAggregationInput[]
    by: MateriScalarFieldEnum[] | MateriScalarFieldEnum
    having?: MateriScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MateriCountAggregateInputType | true
    _min?: MateriMinAggregateInputType
    _max?: MateriMaxAggregateInputType
  }

  export type MateriGroupByOutputType = {
    id: string
    title: string
    description: string | null
    type: $Enums.MateriType
    createdAt: Date
    updatedAt: Date
    _count: MateriCountAggregateOutputType | null
    _min: MateriMinAggregateOutputType | null
    _max: MateriMaxAggregateOutputType | null
  }

  type GetMateriGroupByPayload<T extends MateriGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MateriGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MateriGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MateriGroupByOutputType[P]>
            : GetScalarType<T[P], MateriGroupByOutputType[P]>
        }
      >
    >


  export type MateriSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    details?: boolean | Materi$detailsArgs<ExtArgs>
    quizzes?: boolean | Materi$quizzesArgs<ExtArgs>
    _count?: boolean | MateriCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materi"]>

  export type MateriSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["materi"]>

  export type MateriSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["materi"]>

  export type MateriSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MateriOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "type" | "createdAt" | "updatedAt", ExtArgs["result"]["materi"]>
  export type MateriInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    details?: boolean | Materi$detailsArgs<ExtArgs>
    quizzes?: boolean | Materi$quizzesArgs<ExtArgs>
    _count?: boolean | MateriCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MateriIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MateriIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MateriPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Materi"
    objects: {
      details: Prisma.$MateriDetailPayload<ExtArgs>[]
      quizzes: Prisma.$QuizPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      type: $Enums.MateriType
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["materi"]>
    composites: {}
  }

  type MateriGetPayload<S extends boolean | null | undefined | MateriDefaultArgs> = $Result.GetResult<Prisma.$MateriPayload, S>

  type MateriCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MateriFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MateriCountAggregateInputType | true
    }

  export interface MateriDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Materi'], meta: { name: 'Materi' } }
    /**
     * Find zero or one Materi that matches the filter.
     * @param {MateriFindUniqueArgs} args - Arguments to find a Materi
     * @example
     * // Get one Materi
     * const materi = await prisma.materi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MateriFindUniqueArgs>(args: SelectSubset<T, MateriFindUniqueArgs<ExtArgs>>): Prisma__MateriClient<$Result.GetResult<Prisma.$MateriPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Materi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MateriFindUniqueOrThrowArgs} args - Arguments to find a Materi
     * @example
     * // Get one Materi
     * const materi = await prisma.materi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MateriFindUniqueOrThrowArgs>(args: SelectSubset<T, MateriFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MateriClient<$Result.GetResult<Prisma.$MateriPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Materi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriFindFirstArgs} args - Arguments to find a Materi
     * @example
     * // Get one Materi
     * const materi = await prisma.materi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MateriFindFirstArgs>(args?: SelectSubset<T, MateriFindFirstArgs<ExtArgs>>): Prisma__MateriClient<$Result.GetResult<Prisma.$MateriPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Materi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriFindFirstOrThrowArgs} args - Arguments to find a Materi
     * @example
     * // Get one Materi
     * const materi = await prisma.materi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MateriFindFirstOrThrowArgs>(args?: SelectSubset<T, MateriFindFirstOrThrowArgs<ExtArgs>>): Prisma__MateriClient<$Result.GetResult<Prisma.$MateriPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Materis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Materis
     * const materis = await prisma.materi.findMany()
     * 
     * // Get first 10 Materis
     * const materis = await prisma.materi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const materiWithIdOnly = await prisma.materi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MateriFindManyArgs>(args?: SelectSubset<T, MateriFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Materi.
     * @param {MateriCreateArgs} args - Arguments to create a Materi.
     * @example
     * // Create one Materi
     * const Materi = await prisma.materi.create({
     *   data: {
     *     // ... data to create a Materi
     *   }
     * })
     * 
     */
    create<T extends MateriCreateArgs>(args: SelectSubset<T, MateriCreateArgs<ExtArgs>>): Prisma__MateriClient<$Result.GetResult<Prisma.$MateriPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Materis.
     * @param {MateriCreateManyArgs} args - Arguments to create many Materis.
     * @example
     * // Create many Materis
     * const materi = await prisma.materi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MateriCreateManyArgs>(args?: SelectSubset<T, MateriCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Materis and returns the data saved in the database.
     * @param {MateriCreateManyAndReturnArgs} args - Arguments to create many Materis.
     * @example
     * // Create many Materis
     * const materi = await prisma.materi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Materis and only return the `id`
     * const materiWithIdOnly = await prisma.materi.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MateriCreateManyAndReturnArgs>(args?: SelectSubset<T, MateriCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Materi.
     * @param {MateriDeleteArgs} args - Arguments to delete one Materi.
     * @example
     * // Delete one Materi
     * const Materi = await prisma.materi.delete({
     *   where: {
     *     // ... filter to delete one Materi
     *   }
     * })
     * 
     */
    delete<T extends MateriDeleteArgs>(args: SelectSubset<T, MateriDeleteArgs<ExtArgs>>): Prisma__MateriClient<$Result.GetResult<Prisma.$MateriPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Materi.
     * @param {MateriUpdateArgs} args - Arguments to update one Materi.
     * @example
     * // Update one Materi
     * const materi = await prisma.materi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MateriUpdateArgs>(args: SelectSubset<T, MateriUpdateArgs<ExtArgs>>): Prisma__MateriClient<$Result.GetResult<Prisma.$MateriPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Materis.
     * @param {MateriDeleteManyArgs} args - Arguments to filter Materis to delete.
     * @example
     * // Delete a few Materis
     * const { count } = await prisma.materi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MateriDeleteManyArgs>(args?: SelectSubset<T, MateriDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Materis
     * const materi = await prisma.materi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MateriUpdateManyArgs>(args: SelectSubset<T, MateriUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materis and returns the data updated in the database.
     * @param {MateriUpdateManyAndReturnArgs} args - Arguments to update many Materis.
     * @example
     * // Update many Materis
     * const materi = await prisma.materi.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Materis and only return the `id`
     * const materiWithIdOnly = await prisma.materi.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MateriUpdateManyAndReturnArgs>(args: SelectSubset<T, MateriUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Materi.
     * @param {MateriUpsertArgs} args - Arguments to update or create a Materi.
     * @example
     * // Update or create a Materi
     * const materi = await prisma.materi.upsert({
     *   create: {
     *     // ... data to create a Materi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Materi we want to update
     *   }
     * })
     */
    upsert<T extends MateriUpsertArgs>(args: SelectSubset<T, MateriUpsertArgs<ExtArgs>>): Prisma__MateriClient<$Result.GetResult<Prisma.$MateriPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Materis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriCountArgs} args - Arguments to filter Materis to count.
     * @example
     * // Count the number of Materis
     * const count = await prisma.materi.count({
     *   where: {
     *     // ... the filter for the Materis we want to count
     *   }
     * })
    **/
    count<T extends MateriCountArgs>(
      args?: Subset<T, MateriCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MateriCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Materi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MateriAggregateArgs>(args: Subset<T, MateriAggregateArgs>): Prisma.PrismaPromise<GetMateriAggregateType<T>>

    /**
     * Group by Materi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MateriGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MateriGroupByArgs['orderBy'] }
        : { orderBy?: MateriGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MateriGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMateriGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Materi model
   */
  readonly fields: MateriFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Materi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MateriClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    details<T extends Materi$detailsArgs<ExtArgs> = {}>(args?: Subset<T, Materi$detailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    quizzes<T extends Materi$quizzesArgs<ExtArgs> = {}>(args?: Subset<T, Materi$quizzesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Materi model
   */
  interface MateriFieldRefs {
    readonly id: FieldRef<"Materi", 'String'>
    readonly title: FieldRef<"Materi", 'String'>
    readonly description: FieldRef<"Materi", 'String'>
    readonly type: FieldRef<"Materi", 'MateriType'>
    readonly createdAt: FieldRef<"Materi", 'DateTime'>
    readonly updatedAt: FieldRef<"Materi", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Materi findUnique
   */
  export type MateriFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materi
     */
    select?: MateriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materi
     */
    omit?: MateriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriInclude<ExtArgs> | null
    /**
     * Filter, which Materi to fetch.
     */
    where: MateriWhereUniqueInput
  }

  /**
   * Materi findUniqueOrThrow
   */
  export type MateriFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materi
     */
    select?: MateriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materi
     */
    omit?: MateriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriInclude<ExtArgs> | null
    /**
     * Filter, which Materi to fetch.
     */
    where: MateriWhereUniqueInput
  }

  /**
   * Materi findFirst
   */
  export type MateriFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materi
     */
    select?: MateriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materi
     */
    omit?: MateriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriInclude<ExtArgs> | null
    /**
     * Filter, which Materi to fetch.
     */
    where?: MateriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materis to fetch.
     */
    orderBy?: MateriOrderByWithRelationInput | MateriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materis.
     */
    cursor?: MateriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materis.
     */
    distinct?: MateriScalarFieldEnum | MateriScalarFieldEnum[]
  }

  /**
   * Materi findFirstOrThrow
   */
  export type MateriFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materi
     */
    select?: MateriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materi
     */
    omit?: MateriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriInclude<ExtArgs> | null
    /**
     * Filter, which Materi to fetch.
     */
    where?: MateriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materis to fetch.
     */
    orderBy?: MateriOrderByWithRelationInput | MateriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materis.
     */
    cursor?: MateriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materis.
     */
    distinct?: MateriScalarFieldEnum | MateriScalarFieldEnum[]
  }

  /**
   * Materi findMany
   */
  export type MateriFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materi
     */
    select?: MateriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materi
     */
    omit?: MateriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriInclude<ExtArgs> | null
    /**
     * Filter, which Materis to fetch.
     */
    where?: MateriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materis to fetch.
     */
    orderBy?: MateriOrderByWithRelationInput | MateriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Materis.
     */
    cursor?: MateriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materis.
     */
    skip?: number
    distinct?: MateriScalarFieldEnum | MateriScalarFieldEnum[]
  }

  /**
   * Materi create
   */
  export type MateriCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materi
     */
    select?: MateriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materi
     */
    omit?: MateriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriInclude<ExtArgs> | null
    /**
     * The data needed to create a Materi.
     */
    data: XOR<MateriCreateInput, MateriUncheckedCreateInput>
  }

  /**
   * Materi createMany
   */
  export type MateriCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Materis.
     */
    data: MateriCreateManyInput | MateriCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Materi createManyAndReturn
   */
  export type MateriCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materi
     */
    select?: MateriSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Materi
     */
    omit?: MateriOmit<ExtArgs> | null
    /**
     * The data used to create many Materis.
     */
    data: MateriCreateManyInput | MateriCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Materi update
   */
  export type MateriUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materi
     */
    select?: MateriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materi
     */
    omit?: MateriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriInclude<ExtArgs> | null
    /**
     * The data needed to update a Materi.
     */
    data: XOR<MateriUpdateInput, MateriUncheckedUpdateInput>
    /**
     * Choose, which Materi to update.
     */
    where: MateriWhereUniqueInput
  }

  /**
   * Materi updateMany
   */
  export type MateriUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Materis.
     */
    data: XOR<MateriUpdateManyMutationInput, MateriUncheckedUpdateManyInput>
    /**
     * Filter which Materis to update
     */
    where?: MateriWhereInput
    /**
     * Limit how many Materis to update.
     */
    limit?: number
  }

  /**
   * Materi updateManyAndReturn
   */
  export type MateriUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materi
     */
    select?: MateriSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Materi
     */
    omit?: MateriOmit<ExtArgs> | null
    /**
     * The data used to update Materis.
     */
    data: XOR<MateriUpdateManyMutationInput, MateriUncheckedUpdateManyInput>
    /**
     * Filter which Materis to update
     */
    where?: MateriWhereInput
    /**
     * Limit how many Materis to update.
     */
    limit?: number
  }

  /**
   * Materi upsert
   */
  export type MateriUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materi
     */
    select?: MateriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materi
     */
    omit?: MateriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriInclude<ExtArgs> | null
    /**
     * The filter to search for the Materi to update in case it exists.
     */
    where: MateriWhereUniqueInput
    /**
     * In case the Materi found by the `where` argument doesn't exist, create a new Materi with this data.
     */
    create: XOR<MateriCreateInput, MateriUncheckedCreateInput>
    /**
     * In case the Materi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MateriUpdateInput, MateriUncheckedUpdateInput>
  }

  /**
   * Materi delete
   */
  export type MateriDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materi
     */
    select?: MateriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materi
     */
    omit?: MateriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriInclude<ExtArgs> | null
    /**
     * Filter which Materi to delete.
     */
    where: MateriWhereUniqueInput
  }

  /**
   * Materi deleteMany
   */
  export type MateriDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materis to delete
     */
    where?: MateriWhereInput
    /**
     * Limit how many Materis to delete.
     */
    limit?: number
  }

  /**
   * Materi.details
   */
  export type Materi$detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MateriDetail
     */
    select?: MateriDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MateriDetail
     */
    omit?: MateriDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriDetailInclude<ExtArgs> | null
    where?: MateriDetailWhereInput
    orderBy?: MateriDetailOrderByWithRelationInput | MateriDetailOrderByWithRelationInput[]
    cursor?: MateriDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MateriDetailScalarFieldEnum | MateriDetailScalarFieldEnum[]
  }

  /**
   * Materi.quizzes
   */
  export type Materi$quizzesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    where?: QuizWhereInput
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    cursor?: QuizWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Materi without action
   */
  export type MateriDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materi
     */
    select?: MateriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materi
     */
    omit?: MateriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriInclude<ExtArgs> | null
  }


  /**
   * Model MateriDetail
   */

  export type AggregateMateriDetail = {
    _count: MateriDetailCountAggregateOutputType | null
    _min: MateriDetailMinAggregateOutputType | null
    _max: MateriDetailMaxAggregateOutputType | null
  }

  export type MateriDetailMinAggregateOutputType = {
    id: string | null
    materiId: string | null
    value: string | null
    imageUrl: string | null
    audioUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MateriDetailMaxAggregateOutputType = {
    id: string | null
    materiId: string | null
    value: string | null
    imageUrl: string | null
    audioUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MateriDetailCountAggregateOutputType = {
    id: number
    materiId: number
    value: number
    imageUrl: number
    audioUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MateriDetailMinAggregateInputType = {
    id?: true
    materiId?: true
    value?: true
    imageUrl?: true
    audioUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MateriDetailMaxAggregateInputType = {
    id?: true
    materiId?: true
    value?: true
    imageUrl?: true
    audioUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MateriDetailCountAggregateInputType = {
    id?: true
    materiId?: true
    value?: true
    imageUrl?: true
    audioUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MateriDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MateriDetail to aggregate.
     */
    where?: MateriDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MateriDetails to fetch.
     */
    orderBy?: MateriDetailOrderByWithRelationInput | MateriDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MateriDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MateriDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MateriDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MateriDetails
    **/
    _count?: true | MateriDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MateriDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MateriDetailMaxAggregateInputType
  }

  export type GetMateriDetailAggregateType<T extends MateriDetailAggregateArgs> = {
        [P in keyof T & keyof AggregateMateriDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMateriDetail[P]>
      : GetScalarType<T[P], AggregateMateriDetail[P]>
  }




  export type MateriDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MateriDetailWhereInput
    orderBy?: MateriDetailOrderByWithAggregationInput | MateriDetailOrderByWithAggregationInput[]
    by: MateriDetailScalarFieldEnum[] | MateriDetailScalarFieldEnum
    having?: MateriDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MateriDetailCountAggregateInputType | true
    _min?: MateriDetailMinAggregateInputType
    _max?: MateriDetailMaxAggregateInputType
  }

  export type MateriDetailGroupByOutputType = {
    id: string
    materiId: string
    value: string
    imageUrl: string
    audioUrl: string
    createdAt: Date
    updatedAt: Date
    _count: MateriDetailCountAggregateOutputType | null
    _min: MateriDetailMinAggregateOutputType | null
    _max: MateriDetailMaxAggregateOutputType | null
  }

  type GetMateriDetailGroupByPayload<T extends MateriDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MateriDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MateriDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MateriDetailGroupByOutputType[P]>
            : GetScalarType<T[P], MateriDetailGroupByOutputType[P]>
        }
      >
    >


  export type MateriDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    materiId?: boolean
    value?: boolean
    imageUrl?: boolean
    audioUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    materi?: boolean | MateriDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materiDetail"]>

  export type MateriDetailSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    materiId?: boolean
    value?: boolean
    imageUrl?: boolean
    audioUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    materi?: boolean | MateriDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materiDetail"]>

  export type MateriDetailSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    materiId?: boolean
    value?: boolean
    imageUrl?: boolean
    audioUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    materi?: boolean | MateriDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materiDetail"]>

  export type MateriDetailSelectScalar = {
    id?: boolean
    materiId?: boolean
    value?: boolean
    imageUrl?: boolean
    audioUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MateriDetailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "materiId" | "value" | "imageUrl" | "audioUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["materiDetail"]>
  export type MateriDetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materi?: boolean | MateriDefaultArgs<ExtArgs>
  }
  export type MateriDetailIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materi?: boolean | MateriDefaultArgs<ExtArgs>
  }
  export type MateriDetailIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materi?: boolean | MateriDefaultArgs<ExtArgs>
  }

  export type $MateriDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MateriDetail"
    objects: {
      materi: Prisma.$MateriPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      materiId: string
      value: string
      imageUrl: string
      audioUrl: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["materiDetail"]>
    composites: {}
  }

  type MateriDetailGetPayload<S extends boolean | null | undefined | MateriDetailDefaultArgs> = $Result.GetResult<Prisma.$MateriDetailPayload, S>

  type MateriDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MateriDetailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MateriDetailCountAggregateInputType | true
    }

  export interface MateriDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MateriDetail'], meta: { name: 'MateriDetail' } }
    /**
     * Find zero or one MateriDetail that matches the filter.
     * @param {MateriDetailFindUniqueArgs} args - Arguments to find a MateriDetail
     * @example
     * // Get one MateriDetail
     * const materiDetail = await prisma.materiDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MateriDetailFindUniqueArgs>(args: SelectSubset<T, MateriDetailFindUniqueArgs<ExtArgs>>): Prisma__MateriDetailClient<$Result.GetResult<Prisma.$MateriDetailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MateriDetail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MateriDetailFindUniqueOrThrowArgs} args - Arguments to find a MateriDetail
     * @example
     * // Get one MateriDetail
     * const materiDetail = await prisma.materiDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MateriDetailFindUniqueOrThrowArgs>(args: SelectSubset<T, MateriDetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MateriDetailClient<$Result.GetResult<Prisma.$MateriDetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MateriDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriDetailFindFirstArgs} args - Arguments to find a MateriDetail
     * @example
     * // Get one MateriDetail
     * const materiDetail = await prisma.materiDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MateriDetailFindFirstArgs>(args?: SelectSubset<T, MateriDetailFindFirstArgs<ExtArgs>>): Prisma__MateriDetailClient<$Result.GetResult<Prisma.$MateriDetailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MateriDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriDetailFindFirstOrThrowArgs} args - Arguments to find a MateriDetail
     * @example
     * // Get one MateriDetail
     * const materiDetail = await prisma.materiDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MateriDetailFindFirstOrThrowArgs>(args?: SelectSubset<T, MateriDetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__MateriDetailClient<$Result.GetResult<Prisma.$MateriDetailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MateriDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriDetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MateriDetails
     * const materiDetails = await prisma.materiDetail.findMany()
     * 
     * // Get first 10 MateriDetails
     * const materiDetails = await prisma.materiDetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const materiDetailWithIdOnly = await prisma.materiDetail.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MateriDetailFindManyArgs>(args?: SelectSubset<T, MateriDetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MateriDetail.
     * @param {MateriDetailCreateArgs} args - Arguments to create a MateriDetail.
     * @example
     * // Create one MateriDetail
     * const MateriDetail = await prisma.materiDetail.create({
     *   data: {
     *     // ... data to create a MateriDetail
     *   }
     * })
     * 
     */
    create<T extends MateriDetailCreateArgs>(args: SelectSubset<T, MateriDetailCreateArgs<ExtArgs>>): Prisma__MateriDetailClient<$Result.GetResult<Prisma.$MateriDetailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MateriDetails.
     * @param {MateriDetailCreateManyArgs} args - Arguments to create many MateriDetails.
     * @example
     * // Create many MateriDetails
     * const materiDetail = await prisma.materiDetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MateriDetailCreateManyArgs>(args?: SelectSubset<T, MateriDetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MateriDetails and returns the data saved in the database.
     * @param {MateriDetailCreateManyAndReturnArgs} args - Arguments to create many MateriDetails.
     * @example
     * // Create many MateriDetails
     * const materiDetail = await prisma.materiDetail.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MateriDetails and only return the `id`
     * const materiDetailWithIdOnly = await prisma.materiDetail.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MateriDetailCreateManyAndReturnArgs>(args?: SelectSubset<T, MateriDetailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriDetailPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MateriDetail.
     * @param {MateriDetailDeleteArgs} args - Arguments to delete one MateriDetail.
     * @example
     * // Delete one MateriDetail
     * const MateriDetail = await prisma.materiDetail.delete({
     *   where: {
     *     // ... filter to delete one MateriDetail
     *   }
     * })
     * 
     */
    delete<T extends MateriDetailDeleteArgs>(args: SelectSubset<T, MateriDetailDeleteArgs<ExtArgs>>): Prisma__MateriDetailClient<$Result.GetResult<Prisma.$MateriDetailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MateriDetail.
     * @param {MateriDetailUpdateArgs} args - Arguments to update one MateriDetail.
     * @example
     * // Update one MateriDetail
     * const materiDetail = await prisma.materiDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MateriDetailUpdateArgs>(args: SelectSubset<T, MateriDetailUpdateArgs<ExtArgs>>): Prisma__MateriDetailClient<$Result.GetResult<Prisma.$MateriDetailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MateriDetails.
     * @param {MateriDetailDeleteManyArgs} args - Arguments to filter MateriDetails to delete.
     * @example
     * // Delete a few MateriDetails
     * const { count } = await prisma.materiDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MateriDetailDeleteManyArgs>(args?: SelectSubset<T, MateriDetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MateriDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MateriDetails
     * const materiDetail = await prisma.materiDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MateriDetailUpdateManyArgs>(args: SelectSubset<T, MateriDetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MateriDetails and returns the data updated in the database.
     * @param {MateriDetailUpdateManyAndReturnArgs} args - Arguments to update many MateriDetails.
     * @example
     * // Update many MateriDetails
     * const materiDetail = await prisma.materiDetail.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MateriDetails and only return the `id`
     * const materiDetailWithIdOnly = await prisma.materiDetail.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MateriDetailUpdateManyAndReturnArgs>(args: SelectSubset<T, MateriDetailUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriDetailPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MateriDetail.
     * @param {MateriDetailUpsertArgs} args - Arguments to update or create a MateriDetail.
     * @example
     * // Update or create a MateriDetail
     * const materiDetail = await prisma.materiDetail.upsert({
     *   create: {
     *     // ... data to create a MateriDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MateriDetail we want to update
     *   }
     * })
     */
    upsert<T extends MateriDetailUpsertArgs>(args: SelectSubset<T, MateriDetailUpsertArgs<ExtArgs>>): Prisma__MateriDetailClient<$Result.GetResult<Prisma.$MateriDetailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MateriDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriDetailCountArgs} args - Arguments to filter MateriDetails to count.
     * @example
     * // Count the number of MateriDetails
     * const count = await prisma.materiDetail.count({
     *   where: {
     *     // ... the filter for the MateriDetails we want to count
     *   }
     * })
    **/
    count<T extends MateriDetailCountArgs>(
      args?: Subset<T, MateriDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MateriDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MateriDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MateriDetailAggregateArgs>(args: Subset<T, MateriDetailAggregateArgs>): Prisma.PrismaPromise<GetMateriDetailAggregateType<T>>

    /**
     * Group by MateriDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriDetailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MateriDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MateriDetailGroupByArgs['orderBy'] }
        : { orderBy?: MateriDetailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MateriDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMateriDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MateriDetail model
   */
  readonly fields: MateriDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MateriDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MateriDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    materi<T extends MateriDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MateriDefaultArgs<ExtArgs>>): Prisma__MateriClient<$Result.GetResult<Prisma.$MateriPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MateriDetail model
   */
  interface MateriDetailFieldRefs {
    readonly id: FieldRef<"MateriDetail", 'String'>
    readonly materiId: FieldRef<"MateriDetail", 'String'>
    readonly value: FieldRef<"MateriDetail", 'String'>
    readonly imageUrl: FieldRef<"MateriDetail", 'String'>
    readonly audioUrl: FieldRef<"MateriDetail", 'String'>
    readonly createdAt: FieldRef<"MateriDetail", 'DateTime'>
    readonly updatedAt: FieldRef<"MateriDetail", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MateriDetail findUnique
   */
  export type MateriDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MateriDetail
     */
    select?: MateriDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MateriDetail
     */
    omit?: MateriDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriDetailInclude<ExtArgs> | null
    /**
     * Filter, which MateriDetail to fetch.
     */
    where: MateriDetailWhereUniqueInput
  }

  /**
   * MateriDetail findUniqueOrThrow
   */
  export type MateriDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MateriDetail
     */
    select?: MateriDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MateriDetail
     */
    omit?: MateriDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriDetailInclude<ExtArgs> | null
    /**
     * Filter, which MateriDetail to fetch.
     */
    where: MateriDetailWhereUniqueInput
  }

  /**
   * MateriDetail findFirst
   */
  export type MateriDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MateriDetail
     */
    select?: MateriDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MateriDetail
     */
    omit?: MateriDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriDetailInclude<ExtArgs> | null
    /**
     * Filter, which MateriDetail to fetch.
     */
    where?: MateriDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MateriDetails to fetch.
     */
    orderBy?: MateriDetailOrderByWithRelationInput | MateriDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MateriDetails.
     */
    cursor?: MateriDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MateriDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MateriDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MateriDetails.
     */
    distinct?: MateriDetailScalarFieldEnum | MateriDetailScalarFieldEnum[]
  }

  /**
   * MateriDetail findFirstOrThrow
   */
  export type MateriDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MateriDetail
     */
    select?: MateriDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MateriDetail
     */
    omit?: MateriDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriDetailInclude<ExtArgs> | null
    /**
     * Filter, which MateriDetail to fetch.
     */
    where?: MateriDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MateriDetails to fetch.
     */
    orderBy?: MateriDetailOrderByWithRelationInput | MateriDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MateriDetails.
     */
    cursor?: MateriDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MateriDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MateriDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MateriDetails.
     */
    distinct?: MateriDetailScalarFieldEnum | MateriDetailScalarFieldEnum[]
  }

  /**
   * MateriDetail findMany
   */
  export type MateriDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MateriDetail
     */
    select?: MateriDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MateriDetail
     */
    omit?: MateriDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriDetailInclude<ExtArgs> | null
    /**
     * Filter, which MateriDetails to fetch.
     */
    where?: MateriDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MateriDetails to fetch.
     */
    orderBy?: MateriDetailOrderByWithRelationInput | MateriDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MateriDetails.
     */
    cursor?: MateriDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MateriDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MateriDetails.
     */
    skip?: number
    distinct?: MateriDetailScalarFieldEnum | MateriDetailScalarFieldEnum[]
  }

  /**
   * MateriDetail create
   */
  export type MateriDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MateriDetail
     */
    select?: MateriDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MateriDetail
     */
    omit?: MateriDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriDetailInclude<ExtArgs> | null
    /**
     * The data needed to create a MateriDetail.
     */
    data: XOR<MateriDetailCreateInput, MateriDetailUncheckedCreateInput>
  }

  /**
   * MateriDetail createMany
   */
  export type MateriDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MateriDetails.
     */
    data: MateriDetailCreateManyInput | MateriDetailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MateriDetail createManyAndReturn
   */
  export type MateriDetailCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MateriDetail
     */
    select?: MateriDetailSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MateriDetail
     */
    omit?: MateriDetailOmit<ExtArgs> | null
    /**
     * The data used to create many MateriDetails.
     */
    data: MateriDetailCreateManyInput | MateriDetailCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriDetailIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MateriDetail update
   */
  export type MateriDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MateriDetail
     */
    select?: MateriDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MateriDetail
     */
    omit?: MateriDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriDetailInclude<ExtArgs> | null
    /**
     * The data needed to update a MateriDetail.
     */
    data: XOR<MateriDetailUpdateInput, MateriDetailUncheckedUpdateInput>
    /**
     * Choose, which MateriDetail to update.
     */
    where: MateriDetailWhereUniqueInput
  }

  /**
   * MateriDetail updateMany
   */
  export type MateriDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MateriDetails.
     */
    data: XOR<MateriDetailUpdateManyMutationInput, MateriDetailUncheckedUpdateManyInput>
    /**
     * Filter which MateriDetails to update
     */
    where?: MateriDetailWhereInput
    /**
     * Limit how many MateriDetails to update.
     */
    limit?: number
  }

  /**
   * MateriDetail updateManyAndReturn
   */
  export type MateriDetailUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MateriDetail
     */
    select?: MateriDetailSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MateriDetail
     */
    omit?: MateriDetailOmit<ExtArgs> | null
    /**
     * The data used to update MateriDetails.
     */
    data: XOR<MateriDetailUpdateManyMutationInput, MateriDetailUncheckedUpdateManyInput>
    /**
     * Filter which MateriDetails to update
     */
    where?: MateriDetailWhereInput
    /**
     * Limit how many MateriDetails to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriDetailIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MateriDetail upsert
   */
  export type MateriDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MateriDetail
     */
    select?: MateriDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MateriDetail
     */
    omit?: MateriDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriDetailInclude<ExtArgs> | null
    /**
     * The filter to search for the MateriDetail to update in case it exists.
     */
    where: MateriDetailWhereUniqueInput
    /**
     * In case the MateriDetail found by the `where` argument doesn't exist, create a new MateriDetail with this data.
     */
    create: XOR<MateriDetailCreateInput, MateriDetailUncheckedCreateInput>
    /**
     * In case the MateriDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MateriDetailUpdateInput, MateriDetailUncheckedUpdateInput>
  }

  /**
   * MateriDetail delete
   */
  export type MateriDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MateriDetail
     */
    select?: MateriDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MateriDetail
     */
    omit?: MateriDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriDetailInclude<ExtArgs> | null
    /**
     * Filter which MateriDetail to delete.
     */
    where: MateriDetailWhereUniqueInput
  }

  /**
   * MateriDetail deleteMany
   */
  export type MateriDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MateriDetails to delete
     */
    where?: MateriDetailWhereInput
    /**
     * Limit how many MateriDetails to delete.
     */
    limit?: number
  }

  /**
   * MateriDetail without action
   */
  export type MateriDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MateriDetail
     */
    select?: MateriDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MateriDetail
     */
    omit?: MateriDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriDetailInclude<ExtArgs> | null
  }


  /**
   * Model Quiz
   */

  export type AggregateQuiz = {
    _count: QuizCountAggregateOutputType | null
    _avg: QuizAvgAggregateOutputType | null
    _sum: QuizSumAggregateOutputType | null
    _min: QuizMinAggregateOutputType | null
    _max: QuizMaxAggregateOutputType | null
  }

  export type QuizAvgAggregateOutputType = {
    point: number | null
  }

  export type QuizSumAggregateOutputType = {
    point: number | null
  }

  export type QuizMinAggregateOutputType = {
    id: string | null
    materiId: string | null
    question: string | null
    answer: string | null
    point: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuizMaxAggregateOutputType = {
    id: string | null
    materiId: string | null
    question: string | null
    answer: string | null
    point: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuizCountAggregateOutputType = {
    id: number
    materiId: number
    question: number
    answer: number
    options: number
    point: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuizAvgAggregateInputType = {
    point?: true
  }

  export type QuizSumAggregateInputType = {
    point?: true
  }

  export type QuizMinAggregateInputType = {
    id?: true
    materiId?: true
    question?: true
    answer?: true
    point?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuizMaxAggregateInputType = {
    id?: true
    materiId?: true
    question?: true
    answer?: true
    point?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuizCountAggregateInputType = {
    id?: true
    materiId?: true
    question?: true
    answer?: true
    options?: true
    point?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuizAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quiz to aggregate.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Quizzes
    **/
    _count?: true | QuizCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuizAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuizSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizMaxAggregateInputType
  }

  export type GetQuizAggregateType<T extends QuizAggregateArgs> = {
        [P in keyof T & keyof AggregateQuiz]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuiz[P]>
      : GetScalarType<T[P], AggregateQuiz[P]>
  }




  export type QuizGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizWhereInput
    orderBy?: QuizOrderByWithAggregationInput | QuizOrderByWithAggregationInput[]
    by: QuizScalarFieldEnum[] | QuizScalarFieldEnum
    having?: QuizScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizCountAggregateInputType | true
    _avg?: QuizAvgAggregateInputType
    _sum?: QuizSumAggregateInputType
    _min?: QuizMinAggregateInputType
    _max?: QuizMaxAggregateInputType
  }

  export type QuizGroupByOutputType = {
    id: string
    materiId: string
    question: string
    answer: string
    options: string[]
    point: number
    createdAt: Date
    updatedAt: Date
    _count: QuizCountAggregateOutputType | null
    _avg: QuizAvgAggregateOutputType | null
    _sum: QuizSumAggregateOutputType | null
    _min: QuizMinAggregateOutputType | null
    _max: QuizMaxAggregateOutputType | null
  }

  type GetQuizGroupByPayload<T extends QuizGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizGroupByOutputType[P]>
            : GetScalarType<T[P], QuizGroupByOutputType[P]>
        }
      >
    >


  export type QuizSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    materiId?: boolean
    question?: boolean
    answer?: boolean
    options?: boolean
    point?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    materi?: boolean | MateriDefaultArgs<ExtArgs>
    attempts?: boolean | Quiz$attemptsArgs<ExtArgs>
    _count?: boolean | QuizCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quiz"]>

  export type QuizSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    materiId?: boolean
    question?: boolean
    answer?: boolean
    options?: boolean
    point?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    materi?: boolean | MateriDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quiz"]>

  export type QuizSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    materiId?: boolean
    question?: boolean
    answer?: boolean
    options?: boolean
    point?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    materi?: boolean | MateriDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quiz"]>

  export type QuizSelectScalar = {
    id?: boolean
    materiId?: boolean
    question?: boolean
    answer?: boolean
    options?: boolean
    point?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type QuizOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "materiId" | "question" | "answer" | "options" | "point" | "createdAt" | "updatedAt", ExtArgs["result"]["quiz"]>
  export type QuizInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materi?: boolean | MateriDefaultArgs<ExtArgs>
    attempts?: boolean | Quiz$attemptsArgs<ExtArgs>
    _count?: boolean | QuizCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuizIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materi?: boolean | MateriDefaultArgs<ExtArgs>
  }
  export type QuizIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materi?: boolean | MateriDefaultArgs<ExtArgs>
  }

  export type $QuizPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Quiz"
    objects: {
      materi: Prisma.$MateriPayload<ExtArgs>
      attempts: Prisma.$QuizAttemptPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      materiId: string
      question: string
      answer: string
      options: string[]
      point: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["quiz"]>
    composites: {}
  }

  type QuizGetPayload<S extends boolean | null | undefined | QuizDefaultArgs> = $Result.GetResult<Prisma.$QuizPayload, S>

  type QuizCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizCountAggregateInputType | true
    }

  export interface QuizDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Quiz'], meta: { name: 'Quiz' } }
    /**
     * Find zero or one Quiz that matches the filter.
     * @param {QuizFindUniqueArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizFindUniqueArgs>(args: SelectSubset<T, QuizFindUniqueArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Quiz that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizFindUniqueOrThrowArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quiz that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindFirstArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizFindFirstArgs>(args?: SelectSubset<T, QuizFindFirstArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quiz that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindFirstOrThrowArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Quizzes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quizzes
     * const quizzes = await prisma.quiz.findMany()
     * 
     * // Get first 10 Quizzes
     * const quizzes = await prisma.quiz.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizWithIdOnly = await prisma.quiz.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizFindManyArgs>(args?: SelectSubset<T, QuizFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Quiz.
     * @param {QuizCreateArgs} args - Arguments to create a Quiz.
     * @example
     * // Create one Quiz
     * const Quiz = await prisma.quiz.create({
     *   data: {
     *     // ... data to create a Quiz
     *   }
     * })
     * 
     */
    create<T extends QuizCreateArgs>(args: SelectSubset<T, QuizCreateArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Quizzes.
     * @param {QuizCreateManyArgs} args - Arguments to create many Quizzes.
     * @example
     * // Create many Quizzes
     * const quiz = await prisma.quiz.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizCreateManyArgs>(args?: SelectSubset<T, QuizCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Quizzes and returns the data saved in the database.
     * @param {QuizCreateManyAndReturnArgs} args - Arguments to create many Quizzes.
     * @example
     * // Create many Quizzes
     * const quiz = await prisma.quiz.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Quizzes and only return the `id`
     * const quizWithIdOnly = await prisma.quiz.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuizCreateManyAndReturnArgs>(args?: SelectSubset<T, QuizCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Quiz.
     * @param {QuizDeleteArgs} args - Arguments to delete one Quiz.
     * @example
     * // Delete one Quiz
     * const Quiz = await prisma.quiz.delete({
     *   where: {
     *     // ... filter to delete one Quiz
     *   }
     * })
     * 
     */
    delete<T extends QuizDeleteArgs>(args: SelectSubset<T, QuizDeleteArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Quiz.
     * @param {QuizUpdateArgs} args - Arguments to update one Quiz.
     * @example
     * // Update one Quiz
     * const quiz = await prisma.quiz.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizUpdateArgs>(args: SelectSubset<T, QuizUpdateArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Quizzes.
     * @param {QuizDeleteManyArgs} args - Arguments to filter Quizzes to delete.
     * @example
     * // Delete a few Quizzes
     * const { count } = await prisma.quiz.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizDeleteManyArgs>(args?: SelectSubset<T, QuizDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quizzes
     * const quiz = await prisma.quiz.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizUpdateManyArgs>(args: SelectSubset<T, QuizUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quizzes and returns the data updated in the database.
     * @param {QuizUpdateManyAndReturnArgs} args - Arguments to update many Quizzes.
     * @example
     * // Update many Quizzes
     * const quiz = await prisma.quiz.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Quizzes and only return the `id`
     * const quizWithIdOnly = await prisma.quiz.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuizUpdateManyAndReturnArgs>(args: SelectSubset<T, QuizUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Quiz.
     * @param {QuizUpsertArgs} args - Arguments to update or create a Quiz.
     * @example
     * // Update or create a Quiz
     * const quiz = await prisma.quiz.upsert({
     *   create: {
     *     // ... data to create a Quiz
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quiz we want to update
     *   }
     * })
     */
    upsert<T extends QuizUpsertArgs>(args: SelectSubset<T, QuizUpsertArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizCountArgs} args - Arguments to filter Quizzes to count.
     * @example
     * // Count the number of Quizzes
     * const count = await prisma.quiz.count({
     *   where: {
     *     // ... the filter for the Quizzes we want to count
     *   }
     * })
    **/
    count<T extends QuizCountArgs>(
      args?: Subset<T, QuizCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuizAggregateArgs>(args: Subset<T, QuizAggregateArgs>): Prisma.PrismaPromise<GetQuizAggregateType<T>>

    /**
     * Group by Quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuizGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizGroupByArgs['orderBy'] }
        : { orderBy?: QuizGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuizGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Quiz model
   */
  readonly fields: QuizFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Quiz.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    materi<T extends MateriDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MateriDefaultArgs<ExtArgs>>): Prisma__MateriClient<$Result.GetResult<Prisma.$MateriPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attempts<T extends Quiz$attemptsArgs<ExtArgs> = {}>(args?: Subset<T, Quiz$attemptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Quiz model
   */
  interface QuizFieldRefs {
    readonly id: FieldRef<"Quiz", 'String'>
    readonly materiId: FieldRef<"Quiz", 'String'>
    readonly question: FieldRef<"Quiz", 'String'>
    readonly answer: FieldRef<"Quiz", 'String'>
    readonly options: FieldRef<"Quiz", 'String[]'>
    readonly point: FieldRef<"Quiz", 'Int'>
    readonly createdAt: FieldRef<"Quiz", 'DateTime'>
    readonly updatedAt: FieldRef<"Quiz", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Quiz findUnique
   */
  export type QuizFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz findUniqueOrThrow
   */
  export type QuizFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz findFirst
   */
  export type QuizFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz findFirstOrThrow
   */
  export type QuizFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz findMany
   */
  export type QuizFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quizzes to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz create
   */
  export type QuizCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The data needed to create a Quiz.
     */
    data: XOR<QuizCreateInput, QuizUncheckedCreateInput>
  }

  /**
   * Quiz createMany
   */
  export type QuizCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Quizzes.
     */
    data: QuizCreateManyInput | QuizCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Quiz createManyAndReturn
   */
  export type QuizCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * The data used to create many Quizzes.
     */
    data: QuizCreateManyInput | QuizCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Quiz update
   */
  export type QuizUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The data needed to update a Quiz.
     */
    data: XOR<QuizUpdateInput, QuizUncheckedUpdateInput>
    /**
     * Choose, which Quiz to update.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz updateMany
   */
  export type QuizUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Quizzes.
     */
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyInput>
    /**
     * Filter which Quizzes to update
     */
    where?: QuizWhereInput
    /**
     * Limit how many Quizzes to update.
     */
    limit?: number
  }

  /**
   * Quiz updateManyAndReturn
   */
  export type QuizUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * The data used to update Quizzes.
     */
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyInput>
    /**
     * Filter which Quizzes to update
     */
    where?: QuizWhereInput
    /**
     * Limit how many Quizzes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Quiz upsert
   */
  export type QuizUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The filter to search for the Quiz to update in case it exists.
     */
    where: QuizWhereUniqueInput
    /**
     * In case the Quiz found by the `where` argument doesn't exist, create a new Quiz with this data.
     */
    create: XOR<QuizCreateInput, QuizUncheckedCreateInput>
    /**
     * In case the Quiz was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizUpdateInput, QuizUncheckedUpdateInput>
  }

  /**
   * Quiz delete
   */
  export type QuizDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter which Quiz to delete.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz deleteMany
   */
  export type QuizDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quizzes to delete
     */
    where?: QuizWhereInput
    /**
     * Limit how many Quizzes to delete.
     */
    limit?: number
  }

  /**
   * Quiz.attempts
   */
  export type Quiz$attemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    where?: QuizAttemptWhereInput
    orderBy?: QuizAttemptOrderByWithRelationInput | QuizAttemptOrderByWithRelationInput[]
    cursor?: QuizAttemptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizAttemptScalarFieldEnum | QuizAttemptScalarFieldEnum[]
  }

  /**
   * Quiz without action
   */
  export type QuizDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
  }


  /**
   * Model QuizAttempt
   */

  export type AggregateQuizAttempt = {
    _count: QuizAttemptCountAggregateOutputType | null
    _avg: QuizAttemptAvgAggregateOutputType | null
    _sum: QuizAttemptSumAggregateOutputType | null
    _min: QuizAttemptMinAggregateOutputType | null
    _max: QuizAttemptMaxAggregateOutputType | null
  }

  export type QuizAttemptAvgAggregateOutputType = {
    points: number | null
  }

  export type QuizAttemptSumAggregateOutputType = {
    points: number | null
  }

  export type QuizAttemptMinAggregateOutputType = {
    id: string | null
    userId: string | null
    quizId: string | null
    correct: boolean | null
    points: number | null
    createdAt: Date | null
  }

  export type QuizAttemptMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    quizId: string | null
    correct: boolean | null
    points: number | null
    createdAt: Date | null
  }

  export type QuizAttemptCountAggregateOutputType = {
    id: number
    userId: number
    quizId: number
    correct: number
    points: number
    createdAt: number
    _all: number
  }


  export type QuizAttemptAvgAggregateInputType = {
    points?: true
  }

  export type QuizAttemptSumAggregateInputType = {
    points?: true
  }

  export type QuizAttemptMinAggregateInputType = {
    id?: true
    userId?: true
    quizId?: true
    correct?: true
    points?: true
    createdAt?: true
  }

  export type QuizAttemptMaxAggregateInputType = {
    id?: true
    userId?: true
    quizId?: true
    correct?: true
    points?: true
    createdAt?: true
  }

  export type QuizAttemptCountAggregateInputType = {
    id?: true
    userId?: true
    quizId?: true
    correct?: true
    points?: true
    createdAt?: true
    _all?: true
  }

  export type QuizAttemptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizAttempt to aggregate.
     */
    where?: QuizAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizAttempts to fetch.
     */
    orderBy?: QuizAttemptOrderByWithRelationInput | QuizAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuizAttempts
    **/
    _count?: true | QuizAttemptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuizAttemptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuizAttemptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizAttemptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizAttemptMaxAggregateInputType
  }

  export type GetQuizAttemptAggregateType<T extends QuizAttemptAggregateArgs> = {
        [P in keyof T & keyof AggregateQuizAttempt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuizAttempt[P]>
      : GetScalarType<T[P], AggregateQuizAttempt[P]>
  }




  export type QuizAttemptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizAttemptWhereInput
    orderBy?: QuizAttemptOrderByWithAggregationInput | QuizAttemptOrderByWithAggregationInput[]
    by: QuizAttemptScalarFieldEnum[] | QuizAttemptScalarFieldEnum
    having?: QuizAttemptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizAttemptCountAggregateInputType | true
    _avg?: QuizAttemptAvgAggregateInputType
    _sum?: QuizAttemptSumAggregateInputType
    _min?: QuizAttemptMinAggregateInputType
    _max?: QuizAttemptMaxAggregateInputType
  }

  export type QuizAttemptGroupByOutputType = {
    id: string
    userId: string
    quizId: string
    correct: boolean
    points: number
    createdAt: Date
    _count: QuizAttemptCountAggregateOutputType | null
    _avg: QuizAttemptAvgAggregateOutputType | null
    _sum: QuizAttemptSumAggregateOutputType | null
    _min: QuizAttemptMinAggregateOutputType | null
    _max: QuizAttemptMaxAggregateOutputType | null
  }

  type GetQuizAttemptGroupByPayload<T extends QuizAttemptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizAttemptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizAttemptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizAttemptGroupByOutputType[P]>
            : GetScalarType<T[P], QuizAttemptGroupByOutputType[P]>
        }
      >
    >


  export type QuizAttemptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    quizId?: boolean
    correct?: boolean
    points?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizAttempt"]>

  export type QuizAttemptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    quizId?: boolean
    correct?: boolean
    points?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizAttempt"]>

  export type QuizAttemptSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    quizId?: boolean
    correct?: boolean
    points?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizAttempt"]>

  export type QuizAttemptSelectScalar = {
    id?: boolean
    userId?: boolean
    quizId?: boolean
    correct?: boolean
    points?: boolean
    createdAt?: boolean
  }

  export type QuizAttemptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "quizId" | "correct" | "points" | "createdAt", ExtArgs["result"]["quizAttempt"]>
  export type QuizAttemptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }
  export type QuizAttemptIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }
  export type QuizAttemptIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
  }

  export type $QuizAttemptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuizAttempt"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      quiz: Prisma.$QuizPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      quizId: string
      correct: boolean
      points: number
      createdAt: Date
    }, ExtArgs["result"]["quizAttempt"]>
    composites: {}
  }

  type QuizAttemptGetPayload<S extends boolean | null | undefined | QuizAttemptDefaultArgs> = $Result.GetResult<Prisma.$QuizAttemptPayload, S>

  type QuizAttemptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizAttemptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizAttemptCountAggregateInputType | true
    }

  export interface QuizAttemptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuizAttempt'], meta: { name: 'QuizAttempt' } }
    /**
     * Find zero or one QuizAttempt that matches the filter.
     * @param {QuizAttemptFindUniqueArgs} args - Arguments to find a QuizAttempt
     * @example
     * // Get one QuizAttempt
     * const quizAttempt = await prisma.quizAttempt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizAttemptFindUniqueArgs>(args: SelectSubset<T, QuizAttemptFindUniqueArgs<ExtArgs>>): Prisma__QuizAttemptClient<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuizAttempt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizAttemptFindUniqueOrThrowArgs} args - Arguments to find a QuizAttempt
     * @example
     * // Get one QuizAttempt
     * const quizAttempt = await prisma.quizAttempt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizAttemptFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizAttemptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizAttemptClient<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizAttempt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAttemptFindFirstArgs} args - Arguments to find a QuizAttempt
     * @example
     * // Get one QuizAttempt
     * const quizAttempt = await prisma.quizAttempt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizAttemptFindFirstArgs>(args?: SelectSubset<T, QuizAttemptFindFirstArgs<ExtArgs>>): Prisma__QuizAttemptClient<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizAttempt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAttemptFindFirstOrThrowArgs} args - Arguments to find a QuizAttempt
     * @example
     * // Get one QuizAttempt
     * const quizAttempt = await prisma.quizAttempt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizAttemptFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizAttemptFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizAttemptClient<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuizAttempts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAttemptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuizAttempts
     * const quizAttempts = await prisma.quizAttempt.findMany()
     * 
     * // Get first 10 QuizAttempts
     * const quizAttempts = await prisma.quizAttempt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizAttemptWithIdOnly = await prisma.quizAttempt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizAttemptFindManyArgs>(args?: SelectSubset<T, QuizAttemptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuizAttempt.
     * @param {QuizAttemptCreateArgs} args - Arguments to create a QuizAttempt.
     * @example
     * // Create one QuizAttempt
     * const QuizAttempt = await prisma.quizAttempt.create({
     *   data: {
     *     // ... data to create a QuizAttempt
     *   }
     * })
     * 
     */
    create<T extends QuizAttemptCreateArgs>(args: SelectSubset<T, QuizAttemptCreateArgs<ExtArgs>>): Prisma__QuizAttemptClient<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuizAttempts.
     * @param {QuizAttemptCreateManyArgs} args - Arguments to create many QuizAttempts.
     * @example
     * // Create many QuizAttempts
     * const quizAttempt = await prisma.quizAttempt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizAttemptCreateManyArgs>(args?: SelectSubset<T, QuizAttemptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuizAttempts and returns the data saved in the database.
     * @param {QuizAttemptCreateManyAndReturnArgs} args - Arguments to create many QuizAttempts.
     * @example
     * // Create many QuizAttempts
     * const quizAttempt = await prisma.quizAttempt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuizAttempts and only return the `id`
     * const quizAttemptWithIdOnly = await prisma.quizAttempt.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuizAttemptCreateManyAndReturnArgs>(args?: SelectSubset<T, QuizAttemptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuizAttempt.
     * @param {QuizAttemptDeleteArgs} args - Arguments to delete one QuizAttempt.
     * @example
     * // Delete one QuizAttempt
     * const QuizAttempt = await prisma.quizAttempt.delete({
     *   where: {
     *     // ... filter to delete one QuizAttempt
     *   }
     * })
     * 
     */
    delete<T extends QuizAttemptDeleteArgs>(args: SelectSubset<T, QuizAttemptDeleteArgs<ExtArgs>>): Prisma__QuizAttemptClient<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuizAttempt.
     * @param {QuizAttemptUpdateArgs} args - Arguments to update one QuizAttempt.
     * @example
     * // Update one QuizAttempt
     * const quizAttempt = await prisma.quizAttempt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizAttemptUpdateArgs>(args: SelectSubset<T, QuizAttemptUpdateArgs<ExtArgs>>): Prisma__QuizAttemptClient<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuizAttempts.
     * @param {QuizAttemptDeleteManyArgs} args - Arguments to filter QuizAttempts to delete.
     * @example
     * // Delete a few QuizAttempts
     * const { count } = await prisma.quizAttempt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizAttemptDeleteManyArgs>(args?: SelectSubset<T, QuizAttemptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAttemptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuizAttempts
     * const quizAttempt = await prisma.quizAttempt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizAttemptUpdateManyArgs>(args: SelectSubset<T, QuizAttemptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizAttempts and returns the data updated in the database.
     * @param {QuizAttemptUpdateManyAndReturnArgs} args - Arguments to update many QuizAttempts.
     * @example
     * // Update many QuizAttempts
     * const quizAttempt = await prisma.quizAttempt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuizAttempts and only return the `id`
     * const quizAttemptWithIdOnly = await prisma.quizAttempt.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuizAttemptUpdateManyAndReturnArgs>(args: SelectSubset<T, QuizAttemptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuizAttempt.
     * @param {QuizAttemptUpsertArgs} args - Arguments to update or create a QuizAttempt.
     * @example
     * // Update or create a QuizAttempt
     * const quizAttempt = await prisma.quizAttempt.upsert({
     *   create: {
     *     // ... data to create a QuizAttempt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuizAttempt we want to update
     *   }
     * })
     */
    upsert<T extends QuizAttemptUpsertArgs>(args: SelectSubset<T, QuizAttemptUpsertArgs<ExtArgs>>): Prisma__QuizAttemptClient<$Result.GetResult<Prisma.$QuizAttemptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuizAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAttemptCountArgs} args - Arguments to filter QuizAttempts to count.
     * @example
     * // Count the number of QuizAttempts
     * const count = await prisma.quizAttempt.count({
     *   where: {
     *     // ... the filter for the QuizAttempts we want to count
     *   }
     * })
    **/
    count<T extends QuizAttemptCountArgs>(
      args?: Subset<T, QuizAttemptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizAttemptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuizAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAttemptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuizAttemptAggregateArgs>(args: Subset<T, QuizAttemptAggregateArgs>): Prisma.PrismaPromise<GetQuizAttemptAggregateType<T>>

    /**
     * Group by QuizAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAttemptGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuizAttemptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizAttemptGroupByArgs['orderBy'] }
        : { orderBy?: QuizAttemptGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuizAttemptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizAttemptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuizAttempt model
   */
  readonly fields: QuizAttemptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuizAttempt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizAttemptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    quiz<T extends QuizDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizDefaultArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QuizAttempt model
   */
  interface QuizAttemptFieldRefs {
    readonly id: FieldRef<"QuizAttempt", 'String'>
    readonly userId: FieldRef<"QuizAttempt", 'String'>
    readonly quizId: FieldRef<"QuizAttempt", 'String'>
    readonly correct: FieldRef<"QuizAttempt", 'Boolean'>
    readonly points: FieldRef<"QuizAttempt", 'Int'>
    readonly createdAt: FieldRef<"QuizAttempt", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QuizAttempt findUnique
   */
  export type QuizAttemptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * Filter, which QuizAttempt to fetch.
     */
    where: QuizAttemptWhereUniqueInput
  }

  /**
   * QuizAttempt findUniqueOrThrow
   */
  export type QuizAttemptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * Filter, which QuizAttempt to fetch.
     */
    where: QuizAttemptWhereUniqueInput
  }

  /**
   * QuizAttempt findFirst
   */
  export type QuizAttemptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * Filter, which QuizAttempt to fetch.
     */
    where?: QuizAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizAttempts to fetch.
     */
    orderBy?: QuizAttemptOrderByWithRelationInput | QuizAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizAttempts.
     */
    cursor?: QuizAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizAttempts.
     */
    distinct?: QuizAttemptScalarFieldEnum | QuizAttemptScalarFieldEnum[]
  }

  /**
   * QuizAttempt findFirstOrThrow
   */
  export type QuizAttemptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * Filter, which QuizAttempt to fetch.
     */
    where?: QuizAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizAttempts to fetch.
     */
    orderBy?: QuizAttemptOrderByWithRelationInput | QuizAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizAttempts.
     */
    cursor?: QuizAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizAttempts.
     */
    distinct?: QuizAttemptScalarFieldEnum | QuizAttemptScalarFieldEnum[]
  }

  /**
   * QuizAttempt findMany
   */
  export type QuizAttemptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * Filter, which QuizAttempts to fetch.
     */
    where?: QuizAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizAttempts to fetch.
     */
    orderBy?: QuizAttemptOrderByWithRelationInput | QuizAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuizAttempts.
     */
    cursor?: QuizAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizAttempts.
     */
    skip?: number
    distinct?: QuizAttemptScalarFieldEnum | QuizAttemptScalarFieldEnum[]
  }

  /**
   * QuizAttempt create
   */
  export type QuizAttemptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * The data needed to create a QuizAttempt.
     */
    data: XOR<QuizAttemptCreateInput, QuizAttemptUncheckedCreateInput>
  }

  /**
   * QuizAttempt createMany
   */
  export type QuizAttemptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuizAttempts.
     */
    data: QuizAttemptCreateManyInput | QuizAttemptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuizAttempt createManyAndReturn
   */
  export type QuizAttemptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * The data used to create many QuizAttempts.
     */
    data: QuizAttemptCreateManyInput | QuizAttemptCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizAttempt update
   */
  export type QuizAttemptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * The data needed to update a QuizAttempt.
     */
    data: XOR<QuizAttemptUpdateInput, QuizAttemptUncheckedUpdateInput>
    /**
     * Choose, which QuizAttempt to update.
     */
    where: QuizAttemptWhereUniqueInput
  }

  /**
   * QuizAttempt updateMany
   */
  export type QuizAttemptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuizAttempts.
     */
    data: XOR<QuizAttemptUpdateManyMutationInput, QuizAttemptUncheckedUpdateManyInput>
    /**
     * Filter which QuizAttempts to update
     */
    where?: QuizAttemptWhereInput
    /**
     * Limit how many QuizAttempts to update.
     */
    limit?: number
  }

  /**
   * QuizAttempt updateManyAndReturn
   */
  export type QuizAttemptUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * The data used to update QuizAttempts.
     */
    data: XOR<QuizAttemptUpdateManyMutationInput, QuizAttemptUncheckedUpdateManyInput>
    /**
     * Filter which QuizAttempts to update
     */
    where?: QuizAttemptWhereInput
    /**
     * Limit how many QuizAttempts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizAttempt upsert
   */
  export type QuizAttemptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * The filter to search for the QuizAttempt to update in case it exists.
     */
    where: QuizAttemptWhereUniqueInput
    /**
     * In case the QuizAttempt found by the `where` argument doesn't exist, create a new QuizAttempt with this data.
     */
    create: XOR<QuizAttemptCreateInput, QuizAttemptUncheckedCreateInput>
    /**
     * In case the QuizAttempt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizAttemptUpdateInput, QuizAttemptUncheckedUpdateInput>
  }

  /**
   * QuizAttempt delete
   */
  export type QuizAttemptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
    /**
     * Filter which QuizAttempt to delete.
     */
    where: QuizAttemptWhereUniqueInput
  }

  /**
   * QuizAttempt deleteMany
   */
  export type QuizAttemptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizAttempts to delete
     */
    where?: QuizAttemptWhereInput
    /**
     * Limit how many QuizAttempts to delete.
     */
    limit?: number
  }

  /**
   * QuizAttempt without action
   */
  export type QuizAttemptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizAttempt
     */
    select?: QuizAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizAttempt
     */
    omit?: QuizAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizAttemptInclude<ExtArgs> | null
  }


  /**
   * Model ShopItem
   */

  export type AggregateShopItem = {
    _count: ShopItemCountAggregateOutputType | null
    _avg: ShopItemAvgAggregateOutputType | null
    _sum: ShopItemSumAggregateOutputType | null
    _min: ShopItemMinAggregateOutputType | null
    _max: ShopItemMaxAggregateOutputType | null
  }

  export type ShopItemAvgAggregateOutputType = {
    costPoints: number | null
  }

  export type ShopItemSumAggregateOutputType = {
    costPoints: number | null
  }

  export type ShopItemMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    costPoints: number | null
    effect: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShopItemMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    costPoints: number | null
    effect: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShopItemCountAggregateOutputType = {
    id: number
    name: number
    description: number
    costPoints: number
    effect: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ShopItemAvgAggregateInputType = {
    costPoints?: true
  }

  export type ShopItemSumAggregateInputType = {
    costPoints?: true
  }

  export type ShopItemMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    costPoints?: true
    effect?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShopItemMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    costPoints?: true
    effect?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShopItemCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    costPoints?: true
    effect?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ShopItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShopItem to aggregate.
     */
    where?: ShopItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopItems to fetch.
     */
    orderBy?: ShopItemOrderByWithRelationInput | ShopItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShopItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShopItems
    **/
    _count?: true | ShopItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShopItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShopItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShopItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShopItemMaxAggregateInputType
  }

  export type GetShopItemAggregateType<T extends ShopItemAggregateArgs> = {
        [P in keyof T & keyof AggregateShopItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShopItem[P]>
      : GetScalarType<T[P], AggregateShopItem[P]>
  }




  export type ShopItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopItemWhereInput
    orderBy?: ShopItemOrderByWithAggregationInput | ShopItemOrderByWithAggregationInput[]
    by: ShopItemScalarFieldEnum[] | ShopItemScalarFieldEnum
    having?: ShopItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShopItemCountAggregateInputType | true
    _avg?: ShopItemAvgAggregateInputType
    _sum?: ShopItemSumAggregateInputType
    _min?: ShopItemMinAggregateInputType
    _max?: ShopItemMaxAggregateInputType
  }

  export type ShopItemGroupByOutputType = {
    id: string
    name: string
    description: string | null
    costPoints: number
    effect: string | null
    createdAt: Date
    updatedAt: Date
    _count: ShopItemCountAggregateOutputType | null
    _avg: ShopItemAvgAggregateOutputType | null
    _sum: ShopItemSumAggregateOutputType | null
    _min: ShopItemMinAggregateOutputType | null
    _max: ShopItemMaxAggregateOutputType | null
  }

  type GetShopItemGroupByPayload<T extends ShopItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShopItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShopItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShopItemGroupByOutputType[P]>
            : GetScalarType<T[P], ShopItemGroupByOutputType[P]>
        }
      >
    >


  export type ShopItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    costPoints?: boolean
    effect?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    purchases?: boolean | ShopItem$purchasesArgs<ExtArgs>
    _count?: boolean | ShopItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shopItem"]>

  export type ShopItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    costPoints?: boolean
    effect?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["shopItem"]>

  export type ShopItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    costPoints?: boolean
    effect?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["shopItem"]>

  export type ShopItemSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    costPoints?: boolean
    effect?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ShopItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "costPoints" | "effect" | "createdAt" | "updatedAt", ExtArgs["result"]["shopItem"]>
  export type ShopItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchases?: boolean | ShopItem$purchasesArgs<ExtArgs>
    _count?: boolean | ShopItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShopItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ShopItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ShopItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShopItem"
    objects: {
      purchases: Prisma.$PurchasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      costPoints: number
      effect: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["shopItem"]>
    composites: {}
  }

  type ShopItemGetPayload<S extends boolean | null | undefined | ShopItemDefaultArgs> = $Result.GetResult<Prisma.$ShopItemPayload, S>

  type ShopItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShopItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShopItemCountAggregateInputType | true
    }

  export interface ShopItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShopItem'], meta: { name: 'ShopItem' } }
    /**
     * Find zero or one ShopItem that matches the filter.
     * @param {ShopItemFindUniqueArgs} args - Arguments to find a ShopItem
     * @example
     * // Get one ShopItem
     * const shopItem = await prisma.shopItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShopItemFindUniqueArgs>(args: SelectSubset<T, ShopItemFindUniqueArgs<ExtArgs>>): Prisma__ShopItemClient<$Result.GetResult<Prisma.$ShopItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShopItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShopItemFindUniqueOrThrowArgs} args - Arguments to find a ShopItem
     * @example
     * // Get one ShopItem
     * const shopItem = await prisma.shopItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShopItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ShopItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShopItemClient<$Result.GetResult<Prisma.$ShopItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShopItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopItemFindFirstArgs} args - Arguments to find a ShopItem
     * @example
     * // Get one ShopItem
     * const shopItem = await prisma.shopItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShopItemFindFirstArgs>(args?: SelectSubset<T, ShopItemFindFirstArgs<ExtArgs>>): Prisma__ShopItemClient<$Result.GetResult<Prisma.$ShopItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShopItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopItemFindFirstOrThrowArgs} args - Arguments to find a ShopItem
     * @example
     * // Get one ShopItem
     * const shopItem = await prisma.shopItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShopItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ShopItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShopItemClient<$Result.GetResult<Prisma.$ShopItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShopItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShopItems
     * const shopItems = await prisma.shopItem.findMany()
     * 
     * // Get first 10 ShopItems
     * const shopItems = await prisma.shopItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shopItemWithIdOnly = await prisma.shopItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShopItemFindManyArgs>(args?: SelectSubset<T, ShopItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShopItem.
     * @param {ShopItemCreateArgs} args - Arguments to create a ShopItem.
     * @example
     * // Create one ShopItem
     * const ShopItem = await prisma.shopItem.create({
     *   data: {
     *     // ... data to create a ShopItem
     *   }
     * })
     * 
     */
    create<T extends ShopItemCreateArgs>(args: SelectSubset<T, ShopItemCreateArgs<ExtArgs>>): Prisma__ShopItemClient<$Result.GetResult<Prisma.$ShopItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShopItems.
     * @param {ShopItemCreateManyArgs} args - Arguments to create many ShopItems.
     * @example
     * // Create many ShopItems
     * const shopItem = await prisma.shopItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShopItemCreateManyArgs>(args?: SelectSubset<T, ShopItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShopItems and returns the data saved in the database.
     * @param {ShopItemCreateManyAndReturnArgs} args - Arguments to create many ShopItems.
     * @example
     * // Create many ShopItems
     * const shopItem = await prisma.shopItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShopItems and only return the `id`
     * const shopItemWithIdOnly = await prisma.shopItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShopItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ShopItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShopItem.
     * @param {ShopItemDeleteArgs} args - Arguments to delete one ShopItem.
     * @example
     * // Delete one ShopItem
     * const ShopItem = await prisma.shopItem.delete({
     *   where: {
     *     // ... filter to delete one ShopItem
     *   }
     * })
     * 
     */
    delete<T extends ShopItemDeleteArgs>(args: SelectSubset<T, ShopItemDeleteArgs<ExtArgs>>): Prisma__ShopItemClient<$Result.GetResult<Prisma.$ShopItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShopItem.
     * @param {ShopItemUpdateArgs} args - Arguments to update one ShopItem.
     * @example
     * // Update one ShopItem
     * const shopItem = await prisma.shopItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShopItemUpdateArgs>(args: SelectSubset<T, ShopItemUpdateArgs<ExtArgs>>): Prisma__ShopItemClient<$Result.GetResult<Prisma.$ShopItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShopItems.
     * @param {ShopItemDeleteManyArgs} args - Arguments to filter ShopItems to delete.
     * @example
     * // Delete a few ShopItems
     * const { count } = await prisma.shopItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShopItemDeleteManyArgs>(args?: SelectSubset<T, ShopItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShopItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShopItems
     * const shopItem = await prisma.shopItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShopItemUpdateManyArgs>(args: SelectSubset<T, ShopItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShopItems and returns the data updated in the database.
     * @param {ShopItemUpdateManyAndReturnArgs} args - Arguments to update many ShopItems.
     * @example
     * // Update many ShopItems
     * const shopItem = await prisma.shopItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShopItems and only return the `id`
     * const shopItemWithIdOnly = await prisma.shopItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShopItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ShopItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShopItem.
     * @param {ShopItemUpsertArgs} args - Arguments to update or create a ShopItem.
     * @example
     * // Update or create a ShopItem
     * const shopItem = await prisma.shopItem.upsert({
     *   create: {
     *     // ... data to create a ShopItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShopItem we want to update
     *   }
     * })
     */
    upsert<T extends ShopItemUpsertArgs>(args: SelectSubset<T, ShopItemUpsertArgs<ExtArgs>>): Prisma__ShopItemClient<$Result.GetResult<Prisma.$ShopItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShopItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopItemCountArgs} args - Arguments to filter ShopItems to count.
     * @example
     * // Count the number of ShopItems
     * const count = await prisma.shopItem.count({
     *   where: {
     *     // ... the filter for the ShopItems we want to count
     *   }
     * })
    **/
    count<T extends ShopItemCountArgs>(
      args?: Subset<T, ShopItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShopItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShopItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShopItemAggregateArgs>(args: Subset<T, ShopItemAggregateArgs>): Prisma.PrismaPromise<GetShopItemAggregateType<T>>

    /**
     * Group by ShopItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShopItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShopItemGroupByArgs['orderBy'] }
        : { orderBy?: ShopItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShopItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShopItem model
   */
  readonly fields: ShopItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShopItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShopItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    purchases<T extends ShopItem$purchasesArgs<ExtArgs> = {}>(args?: Subset<T, ShopItem$purchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShopItem model
   */
  interface ShopItemFieldRefs {
    readonly id: FieldRef<"ShopItem", 'String'>
    readonly name: FieldRef<"ShopItem", 'String'>
    readonly description: FieldRef<"ShopItem", 'String'>
    readonly costPoints: FieldRef<"ShopItem", 'Int'>
    readonly effect: FieldRef<"ShopItem", 'String'>
    readonly createdAt: FieldRef<"ShopItem", 'DateTime'>
    readonly updatedAt: FieldRef<"ShopItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ShopItem findUnique
   */
  export type ShopItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopItem
     */
    select?: ShopItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopItem
     */
    omit?: ShopItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopItemInclude<ExtArgs> | null
    /**
     * Filter, which ShopItem to fetch.
     */
    where: ShopItemWhereUniqueInput
  }

  /**
   * ShopItem findUniqueOrThrow
   */
  export type ShopItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopItem
     */
    select?: ShopItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopItem
     */
    omit?: ShopItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopItemInclude<ExtArgs> | null
    /**
     * Filter, which ShopItem to fetch.
     */
    where: ShopItemWhereUniqueInput
  }

  /**
   * ShopItem findFirst
   */
  export type ShopItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopItem
     */
    select?: ShopItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopItem
     */
    omit?: ShopItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopItemInclude<ExtArgs> | null
    /**
     * Filter, which ShopItem to fetch.
     */
    where?: ShopItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopItems to fetch.
     */
    orderBy?: ShopItemOrderByWithRelationInput | ShopItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShopItems.
     */
    cursor?: ShopItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShopItems.
     */
    distinct?: ShopItemScalarFieldEnum | ShopItemScalarFieldEnum[]
  }

  /**
   * ShopItem findFirstOrThrow
   */
  export type ShopItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopItem
     */
    select?: ShopItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopItem
     */
    omit?: ShopItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopItemInclude<ExtArgs> | null
    /**
     * Filter, which ShopItem to fetch.
     */
    where?: ShopItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopItems to fetch.
     */
    orderBy?: ShopItemOrderByWithRelationInput | ShopItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShopItems.
     */
    cursor?: ShopItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShopItems.
     */
    distinct?: ShopItemScalarFieldEnum | ShopItemScalarFieldEnum[]
  }

  /**
   * ShopItem findMany
   */
  export type ShopItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopItem
     */
    select?: ShopItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopItem
     */
    omit?: ShopItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopItemInclude<ExtArgs> | null
    /**
     * Filter, which ShopItems to fetch.
     */
    where?: ShopItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopItems to fetch.
     */
    orderBy?: ShopItemOrderByWithRelationInput | ShopItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShopItems.
     */
    cursor?: ShopItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopItems.
     */
    skip?: number
    distinct?: ShopItemScalarFieldEnum | ShopItemScalarFieldEnum[]
  }

  /**
   * ShopItem create
   */
  export type ShopItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopItem
     */
    select?: ShopItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopItem
     */
    omit?: ShopItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopItemInclude<ExtArgs> | null
    /**
     * The data needed to create a ShopItem.
     */
    data: XOR<ShopItemCreateInput, ShopItemUncheckedCreateInput>
  }

  /**
   * ShopItem createMany
   */
  export type ShopItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShopItems.
     */
    data: ShopItemCreateManyInput | ShopItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShopItem createManyAndReturn
   */
  export type ShopItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopItem
     */
    select?: ShopItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShopItem
     */
    omit?: ShopItemOmit<ExtArgs> | null
    /**
     * The data used to create many ShopItems.
     */
    data: ShopItemCreateManyInput | ShopItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShopItem update
   */
  export type ShopItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopItem
     */
    select?: ShopItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopItem
     */
    omit?: ShopItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopItemInclude<ExtArgs> | null
    /**
     * The data needed to update a ShopItem.
     */
    data: XOR<ShopItemUpdateInput, ShopItemUncheckedUpdateInput>
    /**
     * Choose, which ShopItem to update.
     */
    where: ShopItemWhereUniqueInput
  }

  /**
   * ShopItem updateMany
   */
  export type ShopItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShopItems.
     */
    data: XOR<ShopItemUpdateManyMutationInput, ShopItemUncheckedUpdateManyInput>
    /**
     * Filter which ShopItems to update
     */
    where?: ShopItemWhereInput
    /**
     * Limit how many ShopItems to update.
     */
    limit?: number
  }

  /**
   * ShopItem updateManyAndReturn
   */
  export type ShopItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopItem
     */
    select?: ShopItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShopItem
     */
    omit?: ShopItemOmit<ExtArgs> | null
    /**
     * The data used to update ShopItems.
     */
    data: XOR<ShopItemUpdateManyMutationInput, ShopItemUncheckedUpdateManyInput>
    /**
     * Filter which ShopItems to update
     */
    where?: ShopItemWhereInput
    /**
     * Limit how many ShopItems to update.
     */
    limit?: number
  }

  /**
   * ShopItem upsert
   */
  export type ShopItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopItem
     */
    select?: ShopItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopItem
     */
    omit?: ShopItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopItemInclude<ExtArgs> | null
    /**
     * The filter to search for the ShopItem to update in case it exists.
     */
    where: ShopItemWhereUniqueInput
    /**
     * In case the ShopItem found by the `where` argument doesn't exist, create a new ShopItem with this data.
     */
    create: XOR<ShopItemCreateInput, ShopItemUncheckedCreateInput>
    /**
     * In case the ShopItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShopItemUpdateInput, ShopItemUncheckedUpdateInput>
  }

  /**
   * ShopItem delete
   */
  export type ShopItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopItem
     */
    select?: ShopItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopItem
     */
    omit?: ShopItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopItemInclude<ExtArgs> | null
    /**
     * Filter which ShopItem to delete.
     */
    where: ShopItemWhereUniqueInput
  }

  /**
   * ShopItem deleteMany
   */
  export type ShopItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShopItems to delete
     */
    where?: ShopItemWhereInput
    /**
     * Limit how many ShopItems to delete.
     */
    limit?: number
  }

  /**
   * ShopItem.purchases
   */
  export type ShopItem$purchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    where?: PurchaseWhereInput
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    cursor?: PurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * ShopItem without action
   */
  export type ShopItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopItem
     */
    select?: ShopItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopItem
     */
    omit?: ShopItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopItemInclude<ExtArgs> | null
  }


  /**
   * Model Purchase
   */

  export type AggregatePurchase = {
    _count: PurchaseCountAggregateOutputType | null
    _min: PurchaseMinAggregateOutputType | null
    _max: PurchaseMaxAggregateOutputType | null
  }

  export type PurchaseMinAggregateOutputType = {
    id: string | null
    userId: string | null
    shopItemId: string | null
    createdAt: Date | null
  }

  export type PurchaseMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    shopItemId: string | null
    createdAt: Date | null
  }

  export type PurchaseCountAggregateOutputType = {
    id: number
    userId: number
    shopItemId: number
    createdAt: number
    _all: number
  }


  export type PurchaseMinAggregateInputType = {
    id?: true
    userId?: true
    shopItemId?: true
    createdAt?: true
  }

  export type PurchaseMaxAggregateInputType = {
    id?: true
    userId?: true
    shopItemId?: true
    createdAt?: true
  }

  export type PurchaseCountAggregateInputType = {
    id?: true
    userId?: true
    shopItemId?: true
    createdAt?: true
    _all?: true
  }

  export type PurchaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Purchase to aggregate.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Purchases
    **/
    _count?: true | PurchaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchaseMaxAggregateInputType
  }

  export type GetPurchaseAggregateType<T extends PurchaseAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchase[P]>
      : GetScalarType<T[P], AggregatePurchase[P]>
  }




  export type PurchaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseWhereInput
    orderBy?: PurchaseOrderByWithAggregationInput | PurchaseOrderByWithAggregationInput[]
    by: PurchaseScalarFieldEnum[] | PurchaseScalarFieldEnum
    having?: PurchaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchaseCountAggregateInputType | true
    _min?: PurchaseMinAggregateInputType
    _max?: PurchaseMaxAggregateInputType
  }

  export type PurchaseGroupByOutputType = {
    id: string
    userId: string
    shopItemId: string
    createdAt: Date
    _count: PurchaseCountAggregateOutputType | null
    _min: PurchaseMinAggregateOutputType | null
    _max: PurchaseMaxAggregateOutputType | null
  }

  type GetPurchaseGroupByPayload<T extends PurchaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchaseGroupByOutputType[P]>
            : GetScalarType<T[P], PurchaseGroupByOutputType[P]>
        }
      >
    >


  export type PurchaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    shopItemId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    shopItem?: boolean | ShopItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchase"]>

  export type PurchaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    shopItemId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    shopItem?: boolean | ShopItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchase"]>

  export type PurchaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    shopItemId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    shopItem?: boolean | ShopItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchase"]>

  export type PurchaseSelectScalar = {
    id?: boolean
    userId?: boolean
    shopItemId?: boolean
    createdAt?: boolean
  }

  export type PurchaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "shopItemId" | "createdAt", ExtArgs["result"]["purchase"]>
  export type PurchaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    shopItem?: boolean | ShopItemDefaultArgs<ExtArgs>
  }
  export type PurchaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    shopItem?: boolean | ShopItemDefaultArgs<ExtArgs>
  }
  export type PurchaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    shopItem?: boolean | ShopItemDefaultArgs<ExtArgs>
  }

  export type $PurchasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Purchase"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      shopItem: Prisma.$ShopItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      shopItemId: string
      createdAt: Date
    }, ExtArgs["result"]["purchase"]>
    composites: {}
  }

  type PurchaseGetPayload<S extends boolean | null | undefined | PurchaseDefaultArgs> = $Result.GetResult<Prisma.$PurchasePayload, S>

  type PurchaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PurchaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PurchaseCountAggregateInputType | true
    }

  export interface PurchaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Purchase'], meta: { name: 'Purchase' } }
    /**
     * Find zero or one Purchase that matches the filter.
     * @param {PurchaseFindUniqueArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurchaseFindUniqueArgs>(args: SelectSubset<T, PurchaseFindUniqueArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Purchase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PurchaseFindUniqueOrThrowArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurchaseFindUniqueOrThrowArgs>(args: SelectSubset<T, PurchaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Purchase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindFirstArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurchaseFindFirstArgs>(args?: SelectSubset<T, PurchaseFindFirstArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Purchase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindFirstOrThrowArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurchaseFindFirstOrThrowArgs>(args?: SelectSubset<T, PurchaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Purchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Purchases
     * const purchases = await prisma.purchase.findMany()
     * 
     * // Get first 10 Purchases
     * const purchases = await prisma.purchase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purchaseWithIdOnly = await prisma.purchase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PurchaseFindManyArgs>(args?: SelectSubset<T, PurchaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Purchase.
     * @param {PurchaseCreateArgs} args - Arguments to create a Purchase.
     * @example
     * // Create one Purchase
     * const Purchase = await prisma.purchase.create({
     *   data: {
     *     // ... data to create a Purchase
     *   }
     * })
     * 
     */
    create<T extends PurchaseCreateArgs>(args: SelectSubset<T, PurchaseCreateArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Purchases.
     * @param {PurchaseCreateManyArgs} args - Arguments to create many Purchases.
     * @example
     * // Create many Purchases
     * const purchase = await prisma.purchase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurchaseCreateManyArgs>(args?: SelectSubset<T, PurchaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Purchases and returns the data saved in the database.
     * @param {PurchaseCreateManyAndReturnArgs} args - Arguments to create many Purchases.
     * @example
     * // Create many Purchases
     * const purchase = await prisma.purchase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Purchases and only return the `id`
     * const purchaseWithIdOnly = await prisma.purchase.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PurchaseCreateManyAndReturnArgs>(args?: SelectSubset<T, PurchaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Purchase.
     * @param {PurchaseDeleteArgs} args - Arguments to delete one Purchase.
     * @example
     * // Delete one Purchase
     * const Purchase = await prisma.purchase.delete({
     *   where: {
     *     // ... filter to delete one Purchase
     *   }
     * })
     * 
     */
    delete<T extends PurchaseDeleteArgs>(args: SelectSubset<T, PurchaseDeleteArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Purchase.
     * @param {PurchaseUpdateArgs} args - Arguments to update one Purchase.
     * @example
     * // Update one Purchase
     * const purchase = await prisma.purchase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurchaseUpdateArgs>(args: SelectSubset<T, PurchaseUpdateArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Purchases.
     * @param {PurchaseDeleteManyArgs} args - Arguments to filter Purchases to delete.
     * @example
     * // Delete a few Purchases
     * const { count } = await prisma.purchase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurchaseDeleteManyArgs>(args?: SelectSubset<T, PurchaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Purchases
     * const purchase = await prisma.purchase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurchaseUpdateManyArgs>(args: SelectSubset<T, PurchaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purchases and returns the data updated in the database.
     * @param {PurchaseUpdateManyAndReturnArgs} args - Arguments to update many Purchases.
     * @example
     * // Update many Purchases
     * const purchase = await prisma.purchase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Purchases and only return the `id`
     * const purchaseWithIdOnly = await prisma.purchase.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PurchaseUpdateManyAndReturnArgs>(args: SelectSubset<T, PurchaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Purchase.
     * @param {PurchaseUpsertArgs} args - Arguments to update or create a Purchase.
     * @example
     * // Update or create a Purchase
     * const purchase = await prisma.purchase.upsert({
     *   create: {
     *     // ... data to create a Purchase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Purchase we want to update
     *   }
     * })
     */
    upsert<T extends PurchaseUpsertArgs>(args: SelectSubset<T, PurchaseUpsertArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseCountArgs} args - Arguments to filter Purchases to count.
     * @example
     * // Count the number of Purchases
     * const count = await prisma.purchase.count({
     *   where: {
     *     // ... the filter for the Purchases we want to count
     *   }
     * })
    **/
    count<T extends PurchaseCountArgs>(
      args?: Subset<T, PurchaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Purchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PurchaseAggregateArgs>(args: Subset<T, PurchaseAggregateArgs>): Prisma.PrismaPromise<GetPurchaseAggregateType<T>>

    /**
     * Group by Purchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PurchaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchaseGroupByArgs['orderBy'] }
        : { orderBy?: PurchaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PurchaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Purchase model
   */
  readonly fields: PurchaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Purchase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    shopItem<T extends ShopItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopItemDefaultArgs<ExtArgs>>): Prisma__ShopItemClient<$Result.GetResult<Prisma.$ShopItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Purchase model
   */
  interface PurchaseFieldRefs {
    readonly id: FieldRef<"Purchase", 'String'>
    readonly userId: FieldRef<"Purchase", 'String'>
    readonly shopItemId: FieldRef<"Purchase", 'String'>
    readonly createdAt: FieldRef<"Purchase", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Purchase findUnique
   */
  export type PurchaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase findUniqueOrThrow
   */
  export type PurchaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase findFirst
   */
  export type PurchaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Purchases.
     */
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Purchase findFirstOrThrow
   */
  export type PurchaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Purchases.
     */
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Purchase findMany
   */
  export type PurchaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchases to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Purchase create
   */
  export type PurchaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The data needed to create a Purchase.
     */
    data: XOR<PurchaseCreateInput, PurchaseUncheckedCreateInput>
  }

  /**
   * Purchase createMany
   */
  export type PurchaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Purchases.
     */
    data: PurchaseCreateManyInput | PurchaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Purchase createManyAndReturn
   */
  export type PurchaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * The data used to create many Purchases.
     */
    data: PurchaseCreateManyInput | PurchaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Purchase update
   */
  export type PurchaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The data needed to update a Purchase.
     */
    data: XOR<PurchaseUpdateInput, PurchaseUncheckedUpdateInput>
    /**
     * Choose, which Purchase to update.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase updateMany
   */
  export type PurchaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Purchases.
     */
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyInput>
    /**
     * Filter which Purchases to update
     */
    where?: PurchaseWhereInput
    /**
     * Limit how many Purchases to update.
     */
    limit?: number
  }

  /**
   * Purchase updateManyAndReturn
   */
  export type PurchaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * The data used to update Purchases.
     */
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyInput>
    /**
     * Filter which Purchases to update
     */
    where?: PurchaseWhereInput
    /**
     * Limit how many Purchases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Purchase upsert
   */
  export type PurchaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The filter to search for the Purchase to update in case it exists.
     */
    where: PurchaseWhereUniqueInput
    /**
     * In case the Purchase found by the `where` argument doesn't exist, create a new Purchase with this data.
     */
    create: XOR<PurchaseCreateInput, PurchaseUncheckedCreateInput>
    /**
     * In case the Purchase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchaseUpdateInput, PurchaseUncheckedUpdateInput>
  }

  /**
   * Purchase delete
   */
  export type PurchaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter which Purchase to delete.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase deleteMany
   */
  export type PurchaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Purchases to delete
     */
    where?: PurchaseWhereInput
    /**
     * Limit how many Purchases to delete.
     */
    limit?: number
  }

  /**
   * Purchase without action
   */
  export type PurchaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    clerkUserId: 'clerkUserId',
    email: 'email',
    name: 'name',
    imageUrl: 'imageUrl',
    points: 'points',
    lives: 'lives',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const JsonDataScalarFieldEnum: {
    id: 'id',
    name: 'name',
    content: 'content',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JsonDataScalarFieldEnum = (typeof JsonDataScalarFieldEnum)[keyof typeof JsonDataScalarFieldEnum]


  export const MateriScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MateriScalarFieldEnum = (typeof MateriScalarFieldEnum)[keyof typeof MateriScalarFieldEnum]


  export const MateriDetailScalarFieldEnum: {
    id: 'id',
    materiId: 'materiId',
    value: 'value',
    imageUrl: 'imageUrl',
    audioUrl: 'audioUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MateriDetailScalarFieldEnum = (typeof MateriDetailScalarFieldEnum)[keyof typeof MateriDetailScalarFieldEnum]


  export const QuizScalarFieldEnum: {
    id: 'id',
    materiId: 'materiId',
    question: 'question',
    answer: 'answer',
    options: 'options',
    point: 'point',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuizScalarFieldEnum = (typeof QuizScalarFieldEnum)[keyof typeof QuizScalarFieldEnum]


  export const QuizAttemptScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    quizId: 'quizId',
    correct: 'correct',
    points: 'points',
    createdAt: 'createdAt'
  };

  export type QuizAttemptScalarFieldEnum = (typeof QuizAttemptScalarFieldEnum)[keyof typeof QuizAttemptScalarFieldEnum]


  export const ShopItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    costPoints: 'costPoints',
    effect: 'effect',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ShopItemScalarFieldEnum = (typeof ShopItemScalarFieldEnum)[keyof typeof ShopItemScalarFieldEnum]


  export const PurchaseScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    shopItemId: 'shopItemId',
    createdAt: 'createdAt'
  };

  export type PurchaseScalarFieldEnum = (typeof PurchaseScalarFieldEnum)[keyof typeof PurchaseScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'MateriType'
   */
  export type EnumMateriTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MateriType'>
    


  /**
   * Reference to a field of type 'MateriType[]'
   */
  export type ListEnumMateriTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MateriType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    clerkUserId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    imageUrl?: StringNullableFilter<"User"> | string | null
    points?: IntFilter<"User"> | number
    lives?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    quizzes?: QuizAttemptListRelationFilter
    jsonData?: JsonDataListRelationFilter
    purchases?: PurchaseListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    points?: SortOrder
    lives?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    quizzes?: QuizAttemptOrderByRelationAggregateInput
    jsonData?: JsonDataOrderByRelationAggregateInput
    purchases?: PurchaseOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clerkUserId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    imageUrl?: StringNullableFilter<"User"> | string | null
    points?: IntFilter<"User"> | number
    lives?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    quizzes?: QuizAttemptListRelationFilter
    jsonData?: JsonDataListRelationFilter
    purchases?: PurchaseListRelationFilter
  }, "id" | "clerkUserId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    points?: SortOrder
    lives?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    clerkUserId?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    points?: IntWithAggregatesFilter<"User"> | number
    lives?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type JsonDataWhereInput = {
    AND?: JsonDataWhereInput | JsonDataWhereInput[]
    OR?: JsonDataWhereInput[]
    NOT?: JsonDataWhereInput | JsonDataWhereInput[]
    id?: StringFilter<"JsonData"> | string
    name?: StringFilter<"JsonData"> | string
    content?: StringFilter<"JsonData"> | string
    userId?: StringFilter<"JsonData"> | string
    createdAt?: DateTimeFilter<"JsonData"> | Date | string
    updatedAt?: DateTimeFilter<"JsonData"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type JsonDataOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type JsonDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JsonDataWhereInput | JsonDataWhereInput[]
    OR?: JsonDataWhereInput[]
    NOT?: JsonDataWhereInput | JsonDataWhereInput[]
    name?: StringFilter<"JsonData"> | string
    content?: StringFilter<"JsonData"> | string
    userId?: StringFilter<"JsonData"> | string
    createdAt?: DateTimeFilter<"JsonData"> | Date | string
    updatedAt?: DateTimeFilter<"JsonData"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type JsonDataOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JsonDataCountOrderByAggregateInput
    _max?: JsonDataMaxOrderByAggregateInput
    _min?: JsonDataMinOrderByAggregateInput
  }

  export type JsonDataScalarWhereWithAggregatesInput = {
    AND?: JsonDataScalarWhereWithAggregatesInput | JsonDataScalarWhereWithAggregatesInput[]
    OR?: JsonDataScalarWhereWithAggregatesInput[]
    NOT?: JsonDataScalarWhereWithAggregatesInput | JsonDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JsonData"> | string
    name?: StringWithAggregatesFilter<"JsonData"> | string
    content?: StringWithAggregatesFilter<"JsonData"> | string
    userId?: StringWithAggregatesFilter<"JsonData"> | string
    createdAt?: DateTimeWithAggregatesFilter<"JsonData"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"JsonData"> | Date | string
  }

  export type MateriWhereInput = {
    AND?: MateriWhereInput | MateriWhereInput[]
    OR?: MateriWhereInput[]
    NOT?: MateriWhereInput | MateriWhereInput[]
    id?: StringFilter<"Materi"> | string
    title?: StringFilter<"Materi"> | string
    description?: StringNullableFilter<"Materi"> | string | null
    type?: EnumMateriTypeFilter<"Materi"> | $Enums.MateriType
    createdAt?: DateTimeFilter<"Materi"> | Date | string
    updatedAt?: DateTimeFilter<"Materi"> | Date | string
    details?: MateriDetailListRelationFilter
    quizzes?: QuizListRelationFilter
  }

  export type MateriOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    details?: MateriDetailOrderByRelationAggregateInput
    quizzes?: QuizOrderByRelationAggregateInput
  }

  export type MateriWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MateriWhereInput | MateriWhereInput[]
    OR?: MateriWhereInput[]
    NOT?: MateriWhereInput | MateriWhereInput[]
    title?: StringFilter<"Materi"> | string
    description?: StringNullableFilter<"Materi"> | string | null
    type?: EnumMateriTypeFilter<"Materi"> | $Enums.MateriType
    createdAt?: DateTimeFilter<"Materi"> | Date | string
    updatedAt?: DateTimeFilter<"Materi"> | Date | string
    details?: MateriDetailListRelationFilter
    quizzes?: QuizListRelationFilter
  }, "id">

  export type MateriOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MateriCountOrderByAggregateInput
    _max?: MateriMaxOrderByAggregateInput
    _min?: MateriMinOrderByAggregateInput
  }

  export type MateriScalarWhereWithAggregatesInput = {
    AND?: MateriScalarWhereWithAggregatesInput | MateriScalarWhereWithAggregatesInput[]
    OR?: MateriScalarWhereWithAggregatesInput[]
    NOT?: MateriScalarWhereWithAggregatesInput | MateriScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Materi"> | string
    title?: StringWithAggregatesFilter<"Materi"> | string
    description?: StringNullableWithAggregatesFilter<"Materi"> | string | null
    type?: EnumMateriTypeWithAggregatesFilter<"Materi"> | $Enums.MateriType
    createdAt?: DateTimeWithAggregatesFilter<"Materi"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Materi"> | Date | string
  }

  export type MateriDetailWhereInput = {
    AND?: MateriDetailWhereInput | MateriDetailWhereInput[]
    OR?: MateriDetailWhereInput[]
    NOT?: MateriDetailWhereInput | MateriDetailWhereInput[]
    id?: StringFilter<"MateriDetail"> | string
    materiId?: StringFilter<"MateriDetail"> | string
    value?: StringFilter<"MateriDetail"> | string
    imageUrl?: StringFilter<"MateriDetail"> | string
    audioUrl?: StringFilter<"MateriDetail"> | string
    createdAt?: DateTimeFilter<"MateriDetail"> | Date | string
    updatedAt?: DateTimeFilter<"MateriDetail"> | Date | string
    materi?: XOR<MateriScalarRelationFilter, MateriWhereInput>
  }

  export type MateriDetailOrderByWithRelationInput = {
    id?: SortOrder
    materiId?: SortOrder
    value?: SortOrder
    imageUrl?: SortOrder
    audioUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    materi?: MateriOrderByWithRelationInput
  }

  export type MateriDetailWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MateriDetailWhereInput | MateriDetailWhereInput[]
    OR?: MateriDetailWhereInput[]
    NOT?: MateriDetailWhereInput | MateriDetailWhereInput[]
    materiId?: StringFilter<"MateriDetail"> | string
    value?: StringFilter<"MateriDetail"> | string
    imageUrl?: StringFilter<"MateriDetail"> | string
    audioUrl?: StringFilter<"MateriDetail"> | string
    createdAt?: DateTimeFilter<"MateriDetail"> | Date | string
    updatedAt?: DateTimeFilter<"MateriDetail"> | Date | string
    materi?: XOR<MateriScalarRelationFilter, MateriWhereInput>
  }, "id">

  export type MateriDetailOrderByWithAggregationInput = {
    id?: SortOrder
    materiId?: SortOrder
    value?: SortOrder
    imageUrl?: SortOrder
    audioUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MateriDetailCountOrderByAggregateInput
    _max?: MateriDetailMaxOrderByAggregateInput
    _min?: MateriDetailMinOrderByAggregateInput
  }

  export type MateriDetailScalarWhereWithAggregatesInput = {
    AND?: MateriDetailScalarWhereWithAggregatesInput | MateriDetailScalarWhereWithAggregatesInput[]
    OR?: MateriDetailScalarWhereWithAggregatesInput[]
    NOT?: MateriDetailScalarWhereWithAggregatesInput | MateriDetailScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MateriDetail"> | string
    materiId?: StringWithAggregatesFilter<"MateriDetail"> | string
    value?: StringWithAggregatesFilter<"MateriDetail"> | string
    imageUrl?: StringWithAggregatesFilter<"MateriDetail"> | string
    audioUrl?: StringWithAggregatesFilter<"MateriDetail"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MateriDetail"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MateriDetail"> | Date | string
  }

  export type QuizWhereInput = {
    AND?: QuizWhereInput | QuizWhereInput[]
    OR?: QuizWhereInput[]
    NOT?: QuizWhereInput | QuizWhereInput[]
    id?: StringFilter<"Quiz"> | string
    materiId?: StringFilter<"Quiz"> | string
    question?: StringFilter<"Quiz"> | string
    answer?: StringFilter<"Quiz"> | string
    options?: StringNullableListFilter<"Quiz">
    point?: IntFilter<"Quiz"> | number
    createdAt?: DateTimeFilter<"Quiz"> | Date | string
    updatedAt?: DateTimeFilter<"Quiz"> | Date | string
    materi?: XOR<MateriScalarRelationFilter, MateriWhereInput>
    attempts?: QuizAttemptListRelationFilter
  }

  export type QuizOrderByWithRelationInput = {
    id?: SortOrder
    materiId?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    options?: SortOrder
    point?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    materi?: MateriOrderByWithRelationInput
    attempts?: QuizAttemptOrderByRelationAggregateInput
  }

  export type QuizWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuizWhereInput | QuizWhereInput[]
    OR?: QuizWhereInput[]
    NOT?: QuizWhereInput | QuizWhereInput[]
    materiId?: StringFilter<"Quiz"> | string
    question?: StringFilter<"Quiz"> | string
    answer?: StringFilter<"Quiz"> | string
    options?: StringNullableListFilter<"Quiz">
    point?: IntFilter<"Quiz"> | number
    createdAt?: DateTimeFilter<"Quiz"> | Date | string
    updatedAt?: DateTimeFilter<"Quiz"> | Date | string
    materi?: XOR<MateriScalarRelationFilter, MateriWhereInput>
    attempts?: QuizAttemptListRelationFilter
  }, "id">

  export type QuizOrderByWithAggregationInput = {
    id?: SortOrder
    materiId?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    options?: SortOrder
    point?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuizCountOrderByAggregateInput
    _avg?: QuizAvgOrderByAggregateInput
    _max?: QuizMaxOrderByAggregateInput
    _min?: QuizMinOrderByAggregateInput
    _sum?: QuizSumOrderByAggregateInput
  }

  export type QuizScalarWhereWithAggregatesInput = {
    AND?: QuizScalarWhereWithAggregatesInput | QuizScalarWhereWithAggregatesInput[]
    OR?: QuizScalarWhereWithAggregatesInput[]
    NOT?: QuizScalarWhereWithAggregatesInput | QuizScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Quiz"> | string
    materiId?: StringWithAggregatesFilter<"Quiz"> | string
    question?: StringWithAggregatesFilter<"Quiz"> | string
    answer?: StringWithAggregatesFilter<"Quiz"> | string
    options?: StringNullableListFilter<"Quiz">
    point?: IntWithAggregatesFilter<"Quiz"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Quiz"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Quiz"> | Date | string
  }

  export type QuizAttemptWhereInput = {
    AND?: QuizAttemptWhereInput | QuizAttemptWhereInput[]
    OR?: QuizAttemptWhereInput[]
    NOT?: QuizAttemptWhereInput | QuizAttemptWhereInput[]
    id?: StringFilter<"QuizAttempt"> | string
    userId?: StringFilter<"QuizAttempt"> | string
    quizId?: StringFilter<"QuizAttempt"> | string
    correct?: BoolFilter<"QuizAttempt"> | boolean
    points?: IntFilter<"QuizAttempt"> | number
    createdAt?: DateTimeFilter<"QuizAttempt"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
  }

  export type QuizAttemptOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    correct?: SortOrder
    points?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    quiz?: QuizOrderByWithRelationInput
  }

  export type QuizAttemptWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuizAttemptWhereInput | QuizAttemptWhereInput[]
    OR?: QuizAttemptWhereInput[]
    NOT?: QuizAttemptWhereInput | QuizAttemptWhereInput[]
    userId?: StringFilter<"QuizAttempt"> | string
    quizId?: StringFilter<"QuizAttempt"> | string
    correct?: BoolFilter<"QuizAttempt"> | boolean
    points?: IntFilter<"QuizAttempt"> | number
    createdAt?: DateTimeFilter<"QuizAttempt"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
  }, "id">

  export type QuizAttemptOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    correct?: SortOrder
    points?: SortOrder
    createdAt?: SortOrder
    _count?: QuizAttemptCountOrderByAggregateInput
    _avg?: QuizAttemptAvgOrderByAggregateInput
    _max?: QuizAttemptMaxOrderByAggregateInput
    _min?: QuizAttemptMinOrderByAggregateInput
    _sum?: QuizAttemptSumOrderByAggregateInput
  }

  export type QuizAttemptScalarWhereWithAggregatesInput = {
    AND?: QuizAttemptScalarWhereWithAggregatesInput | QuizAttemptScalarWhereWithAggregatesInput[]
    OR?: QuizAttemptScalarWhereWithAggregatesInput[]
    NOT?: QuizAttemptScalarWhereWithAggregatesInput | QuizAttemptScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuizAttempt"> | string
    userId?: StringWithAggregatesFilter<"QuizAttempt"> | string
    quizId?: StringWithAggregatesFilter<"QuizAttempt"> | string
    correct?: BoolWithAggregatesFilter<"QuizAttempt"> | boolean
    points?: IntWithAggregatesFilter<"QuizAttempt"> | number
    createdAt?: DateTimeWithAggregatesFilter<"QuizAttempt"> | Date | string
  }

  export type ShopItemWhereInput = {
    AND?: ShopItemWhereInput | ShopItemWhereInput[]
    OR?: ShopItemWhereInput[]
    NOT?: ShopItemWhereInput | ShopItemWhereInput[]
    id?: StringFilter<"ShopItem"> | string
    name?: StringFilter<"ShopItem"> | string
    description?: StringNullableFilter<"ShopItem"> | string | null
    costPoints?: IntFilter<"ShopItem"> | number
    effect?: StringNullableFilter<"ShopItem"> | string | null
    createdAt?: DateTimeFilter<"ShopItem"> | Date | string
    updatedAt?: DateTimeFilter<"ShopItem"> | Date | string
    purchases?: PurchaseListRelationFilter
  }

  export type ShopItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    costPoints?: SortOrder
    effect?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    purchases?: PurchaseOrderByRelationAggregateInput
  }

  export type ShopItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShopItemWhereInput | ShopItemWhereInput[]
    OR?: ShopItemWhereInput[]
    NOT?: ShopItemWhereInput | ShopItemWhereInput[]
    name?: StringFilter<"ShopItem"> | string
    description?: StringNullableFilter<"ShopItem"> | string | null
    costPoints?: IntFilter<"ShopItem"> | number
    effect?: StringNullableFilter<"ShopItem"> | string | null
    createdAt?: DateTimeFilter<"ShopItem"> | Date | string
    updatedAt?: DateTimeFilter<"ShopItem"> | Date | string
    purchases?: PurchaseListRelationFilter
  }, "id">

  export type ShopItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    costPoints?: SortOrder
    effect?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ShopItemCountOrderByAggregateInput
    _avg?: ShopItemAvgOrderByAggregateInput
    _max?: ShopItemMaxOrderByAggregateInput
    _min?: ShopItemMinOrderByAggregateInput
    _sum?: ShopItemSumOrderByAggregateInput
  }

  export type ShopItemScalarWhereWithAggregatesInput = {
    AND?: ShopItemScalarWhereWithAggregatesInput | ShopItemScalarWhereWithAggregatesInput[]
    OR?: ShopItemScalarWhereWithAggregatesInput[]
    NOT?: ShopItemScalarWhereWithAggregatesInput | ShopItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ShopItem"> | string
    name?: StringWithAggregatesFilter<"ShopItem"> | string
    description?: StringNullableWithAggregatesFilter<"ShopItem"> | string | null
    costPoints?: IntWithAggregatesFilter<"ShopItem"> | number
    effect?: StringNullableWithAggregatesFilter<"ShopItem"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ShopItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ShopItem"> | Date | string
  }

  export type PurchaseWhereInput = {
    AND?: PurchaseWhereInput | PurchaseWhereInput[]
    OR?: PurchaseWhereInput[]
    NOT?: PurchaseWhereInput | PurchaseWhereInput[]
    id?: StringFilter<"Purchase"> | string
    userId?: StringFilter<"Purchase"> | string
    shopItemId?: StringFilter<"Purchase"> | string
    createdAt?: DateTimeFilter<"Purchase"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    shopItem?: XOR<ShopItemScalarRelationFilter, ShopItemWhereInput>
  }

  export type PurchaseOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    shopItemId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    shopItem?: ShopItemOrderByWithRelationInput
  }

  export type PurchaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PurchaseWhereInput | PurchaseWhereInput[]
    OR?: PurchaseWhereInput[]
    NOT?: PurchaseWhereInput | PurchaseWhereInput[]
    userId?: StringFilter<"Purchase"> | string
    shopItemId?: StringFilter<"Purchase"> | string
    createdAt?: DateTimeFilter<"Purchase"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    shopItem?: XOR<ShopItemScalarRelationFilter, ShopItemWhereInput>
  }, "id">

  export type PurchaseOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    shopItemId?: SortOrder
    createdAt?: SortOrder
    _count?: PurchaseCountOrderByAggregateInput
    _max?: PurchaseMaxOrderByAggregateInput
    _min?: PurchaseMinOrderByAggregateInput
  }

  export type PurchaseScalarWhereWithAggregatesInput = {
    AND?: PurchaseScalarWhereWithAggregatesInput | PurchaseScalarWhereWithAggregatesInput[]
    OR?: PurchaseScalarWhereWithAggregatesInput[]
    NOT?: PurchaseScalarWhereWithAggregatesInput | PurchaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Purchase"> | string
    userId?: StringWithAggregatesFilter<"Purchase"> | string
    shopItemId?: StringWithAggregatesFilter<"Purchase"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Purchase"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    points?: number
    lives?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    quizzes?: QuizAttemptCreateNestedManyWithoutUserInput
    jsonData?: JsonDataCreateNestedManyWithoutUserInput
    purchases?: PurchaseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    points?: number
    lives?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    quizzes?: QuizAttemptUncheckedCreateNestedManyWithoutUserInput
    jsonData?: JsonDataUncheckedCreateNestedManyWithoutUserInput
    purchases?: PurchaseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    lives?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizzes?: QuizAttemptUpdateManyWithoutUserNestedInput
    jsonData?: JsonDataUpdateManyWithoutUserNestedInput
    purchases?: PurchaseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    lives?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizzes?: QuizAttemptUncheckedUpdateManyWithoutUserNestedInput
    jsonData?: JsonDataUncheckedUpdateManyWithoutUserNestedInput
    purchases?: PurchaseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    points?: number
    lives?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    lives?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    lives?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JsonDataCreateInput = {
    id?: string
    name: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutJsonDataInput
  }

  export type JsonDataUncheckedCreateInput = {
    id?: string
    name: string
    content: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JsonDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutJsonDataNestedInput
  }

  export type JsonDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JsonDataCreateManyInput = {
    id?: string
    name: string
    content: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JsonDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JsonDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MateriCreateInput = {
    id?: string
    title: string
    description?: string | null
    type: $Enums.MateriType
    createdAt?: Date | string
    updatedAt?: Date | string
    details?: MateriDetailCreateNestedManyWithoutMateriInput
    quizzes?: QuizCreateNestedManyWithoutMateriInput
  }

  export type MateriUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    type: $Enums.MateriType
    createdAt?: Date | string
    updatedAt?: Date | string
    details?: MateriDetailUncheckedCreateNestedManyWithoutMateriInput
    quizzes?: QuizUncheckedCreateNestedManyWithoutMateriInput
  }

  export type MateriUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMateriTypeFieldUpdateOperationsInput | $Enums.MateriType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: MateriDetailUpdateManyWithoutMateriNestedInput
    quizzes?: QuizUpdateManyWithoutMateriNestedInput
  }

  export type MateriUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMateriTypeFieldUpdateOperationsInput | $Enums.MateriType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: MateriDetailUncheckedUpdateManyWithoutMateriNestedInput
    quizzes?: QuizUncheckedUpdateManyWithoutMateriNestedInput
  }

  export type MateriCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    type: $Enums.MateriType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MateriUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMateriTypeFieldUpdateOperationsInput | $Enums.MateriType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MateriUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMateriTypeFieldUpdateOperationsInput | $Enums.MateriType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MateriDetailCreateInput = {
    id?: string
    value: string
    imageUrl: string
    audioUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    materi: MateriCreateNestedOneWithoutDetailsInput
  }

  export type MateriDetailUncheckedCreateInput = {
    id?: string
    materiId: string
    value: string
    imageUrl: string
    audioUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MateriDetailUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    audioUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    materi?: MateriUpdateOneRequiredWithoutDetailsNestedInput
  }

  export type MateriDetailUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    materiId?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    audioUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MateriDetailCreateManyInput = {
    id?: string
    materiId: string
    value: string
    imageUrl: string
    audioUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MateriDetailUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    audioUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MateriDetailUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    materiId?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    audioUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizCreateInput = {
    id?: string
    question: string
    answer: string
    options?: QuizCreateoptionsInput | string[]
    point?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    materi: MateriCreateNestedOneWithoutQuizzesInput
    attempts?: QuizAttemptCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateInput = {
    id?: string
    materiId: string
    question: string
    answer: string
    options?: QuizCreateoptionsInput | string[]
    point?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    attempts?: QuizAttemptUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    options?: QuizUpdateoptionsInput | string[]
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    materi?: MateriUpdateOneRequiredWithoutQuizzesNestedInput
    attempts?: QuizAttemptUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    materiId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    options?: QuizUpdateoptionsInput | string[]
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: QuizAttemptUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizCreateManyInput = {
    id?: string
    materiId: string
    question: string
    answer: string
    options?: QuizCreateoptionsInput | string[]
    point?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    options?: QuizUpdateoptionsInput | string[]
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    materiId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    options?: QuizUpdateoptionsInput | string[]
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizAttemptCreateInput = {
    id?: string
    correct: boolean
    points?: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutQuizzesInput
    quiz: QuizCreateNestedOneWithoutAttemptsInput
  }

  export type QuizAttemptUncheckedCreateInput = {
    id?: string
    userId: string
    quizId: string
    correct: boolean
    points?: number
    createdAt?: Date | string
  }

  export type QuizAttemptUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    correct?: BoolFieldUpdateOperationsInput | boolean
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutQuizzesNestedInput
    quiz?: QuizUpdateOneRequiredWithoutAttemptsNestedInput
  }

  export type QuizAttemptUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    correct?: BoolFieldUpdateOperationsInput | boolean
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizAttemptCreateManyInput = {
    id?: string
    userId: string
    quizId: string
    correct: boolean
    points?: number
    createdAt?: Date | string
  }

  export type QuizAttemptUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    correct?: BoolFieldUpdateOperationsInput | boolean
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizAttemptUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    correct?: BoolFieldUpdateOperationsInput | boolean
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopItemCreateInput = {
    id?: string
    name: string
    description?: string | null
    costPoints: number
    effect?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    purchases?: PurchaseCreateNestedManyWithoutShopItemInput
  }

  export type ShopItemUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    costPoints: number
    effect?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    purchases?: PurchaseUncheckedCreateNestedManyWithoutShopItemInput
  }

  export type ShopItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    costPoints?: IntFieldUpdateOperationsInput | number
    effect?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchases?: PurchaseUpdateManyWithoutShopItemNestedInput
  }

  export type ShopItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    costPoints?: IntFieldUpdateOperationsInput | number
    effect?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchases?: PurchaseUncheckedUpdateManyWithoutShopItemNestedInput
  }

  export type ShopItemCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    costPoints: number
    effect?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShopItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    costPoints?: IntFieldUpdateOperationsInput | number
    effect?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    costPoints?: IntFieldUpdateOperationsInput | number
    effect?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPurchasesInput
    shopItem: ShopItemCreateNestedOneWithoutPurchasesInput
  }

  export type PurchaseUncheckedCreateInput = {
    id?: string
    userId: string
    shopItemId: string
    createdAt?: Date | string
  }

  export type PurchaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPurchasesNestedInput
    shopItem?: ShopItemUpdateOneRequiredWithoutPurchasesNestedInput
  }

  export type PurchaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    shopItemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseCreateManyInput = {
    id?: string
    userId: string
    shopItemId: string
    createdAt?: Date | string
  }

  export type PurchaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    shopItemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type QuizAttemptListRelationFilter = {
    every?: QuizAttemptWhereInput
    some?: QuizAttemptWhereInput
    none?: QuizAttemptWhereInput
  }
  export type JsonDataListRelationFilter =
    | PatchUndefined<
        Either<Required<JsonDataListRelationFilterBase>, Exclude<keyof Required<JsonDataListRelationFilterBase>, 'path'>>,
        Required<JsonDataListRelationFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonDataListRelationFilterBase>, 'path'>>

  export type JsonDataListRelationFilterBase = {
    every?: JsonDataWhereInput
    some?: JsonDataWhereInput
    none?: JsonDataWhereInput
  }

  export type PurchaseListRelationFilter = {
    every?: PurchaseWhereInput
    some?: PurchaseWhereInput
    none?: PurchaseWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type QuizAttemptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JsonDataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PurchaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    points?: SortOrder
    lives?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    points?: SortOrder
    lives?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    points?: SortOrder
    lives?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    points?: SortOrder
    lives?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    points?: SortOrder
    lives?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type JsonDataCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JsonDataMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JsonDataMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumMateriTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MateriType | EnumMateriTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MateriType[] | ListEnumMateriTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MateriType[] | ListEnumMateriTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMateriTypeFilter<$PrismaModel> | $Enums.MateriType
  }

  export type MateriDetailListRelationFilter = {
    every?: MateriDetailWhereInput
    some?: MateriDetailWhereInput
    none?: MateriDetailWhereInput
  }

  export type QuizListRelationFilter = {
    every?: QuizWhereInput
    some?: QuizWhereInput
    none?: QuizWhereInput
  }

  export type MateriDetailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MateriCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MateriMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MateriMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumMateriTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MateriType | EnumMateriTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MateriType[] | ListEnumMateriTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MateriType[] | ListEnumMateriTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMateriTypeWithAggregatesFilter<$PrismaModel> | $Enums.MateriType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMateriTypeFilter<$PrismaModel>
    _max?: NestedEnumMateriTypeFilter<$PrismaModel>
  }

  export type MateriScalarRelationFilter = {
    is?: MateriWhereInput
    isNot?: MateriWhereInput
  }

  export type MateriDetailCountOrderByAggregateInput = {
    id?: SortOrder
    materiId?: SortOrder
    value?: SortOrder
    imageUrl?: SortOrder
    audioUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MateriDetailMaxOrderByAggregateInput = {
    id?: SortOrder
    materiId?: SortOrder
    value?: SortOrder
    imageUrl?: SortOrder
    audioUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MateriDetailMinOrderByAggregateInput = {
    id?: SortOrder
    materiId?: SortOrder
    value?: SortOrder
    imageUrl?: SortOrder
    audioUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type QuizCountOrderByAggregateInput = {
    id?: SortOrder
    materiId?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    options?: SortOrder
    point?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuizAvgOrderByAggregateInput = {
    point?: SortOrder
  }

  export type QuizMaxOrderByAggregateInput = {
    id?: SortOrder
    materiId?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    point?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuizMinOrderByAggregateInput = {
    id?: SortOrder
    materiId?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    point?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuizSumOrderByAggregateInput = {
    point?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type QuizScalarRelationFilter = {
    is?: QuizWhereInput
    isNot?: QuizWhereInput
  }

  export type QuizAttemptCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    correct?: SortOrder
    points?: SortOrder
    createdAt?: SortOrder
  }

  export type QuizAttemptAvgOrderByAggregateInput = {
    points?: SortOrder
  }

  export type QuizAttemptMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    correct?: SortOrder
    points?: SortOrder
    createdAt?: SortOrder
  }

  export type QuizAttemptMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    quizId?: SortOrder
    correct?: SortOrder
    points?: SortOrder
    createdAt?: SortOrder
  }

  export type QuizAttemptSumOrderByAggregateInput = {
    points?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ShopItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    costPoints?: SortOrder
    effect?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShopItemAvgOrderByAggregateInput = {
    costPoints?: SortOrder
  }

  export type ShopItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    costPoints?: SortOrder
    effect?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShopItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    costPoints?: SortOrder
    effect?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShopItemSumOrderByAggregateInput = {
    costPoints?: SortOrder
  }

  export type ShopItemScalarRelationFilter = {
    is?: ShopItemWhereInput
    isNot?: ShopItemWhereInput
  }

  export type PurchaseCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    shopItemId?: SortOrder
    createdAt?: SortOrder
  }

  export type PurchaseMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    shopItemId?: SortOrder
    createdAt?: SortOrder
  }

  export type PurchaseMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    shopItemId?: SortOrder
    createdAt?: SortOrder
  }

  export type QuizAttemptCreateNestedManyWithoutUserInput = {
    create?: XOR<QuizAttemptCreateWithoutUserInput, QuizAttemptUncheckedCreateWithoutUserInput> | QuizAttemptCreateWithoutUserInput[] | QuizAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuizAttemptCreateOrConnectWithoutUserInput | QuizAttemptCreateOrConnectWithoutUserInput[]
    createMany?: QuizAttemptCreateManyUserInputEnvelope
    connect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
  }

  export type JsonDataCreateNestedManyWithoutUserInput = {
    create?: XOR<JsonDataCreateWithoutUserInput, JsonDataUncheckedCreateWithoutUserInput> | JsonDataCreateWithoutUserInput[] | JsonDataUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JsonDataCreateOrConnectWithoutUserInput | JsonDataCreateOrConnectWithoutUserInput[]
    createMany?: JsonDataCreateManyUserInputEnvelope
    connect?: JsonDataWhereUniqueInput | JsonDataWhereUniqueInput[]
  }

  export type PurchaseCreateNestedManyWithoutUserInput = {
    create?: XOR<PurchaseCreateWithoutUserInput, PurchaseUncheckedCreateWithoutUserInput> | PurchaseCreateWithoutUserInput[] | PurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutUserInput | PurchaseCreateOrConnectWithoutUserInput[]
    createMany?: PurchaseCreateManyUserInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type QuizAttemptUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<QuizAttemptCreateWithoutUserInput, QuizAttemptUncheckedCreateWithoutUserInput> | QuizAttemptCreateWithoutUserInput[] | QuizAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuizAttemptCreateOrConnectWithoutUserInput | QuizAttemptCreateOrConnectWithoutUserInput[]
    createMany?: QuizAttemptCreateManyUserInputEnvelope
    connect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
  }

  export type JsonDataUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<JsonDataCreateWithoutUserInput, JsonDataUncheckedCreateWithoutUserInput> | JsonDataCreateWithoutUserInput[] | JsonDataUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JsonDataCreateOrConnectWithoutUserInput | JsonDataCreateOrConnectWithoutUserInput[]
    createMany?: JsonDataCreateManyUserInputEnvelope
    connect?: JsonDataWhereUniqueInput | JsonDataWhereUniqueInput[]
  }

  export type PurchaseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PurchaseCreateWithoutUserInput, PurchaseUncheckedCreateWithoutUserInput> | PurchaseCreateWithoutUserInput[] | PurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutUserInput | PurchaseCreateOrConnectWithoutUserInput[]
    createMany?: PurchaseCreateManyUserInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type QuizAttemptUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuizAttemptCreateWithoutUserInput, QuizAttemptUncheckedCreateWithoutUserInput> | QuizAttemptCreateWithoutUserInput[] | QuizAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuizAttemptCreateOrConnectWithoutUserInput | QuizAttemptCreateOrConnectWithoutUserInput[]
    upsert?: QuizAttemptUpsertWithWhereUniqueWithoutUserInput | QuizAttemptUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuizAttemptCreateManyUserInputEnvelope
    set?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    disconnect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    delete?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    connect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    update?: QuizAttemptUpdateWithWhereUniqueWithoutUserInput | QuizAttemptUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuizAttemptUpdateManyWithWhereWithoutUserInput | QuizAttemptUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuizAttemptScalarWhereInput | QuizAttemptScalarWhereInput[]
  }

  export type JsonDataUpdateManyWithoutUserNestedInput = {
    create?: XOR<JsonDataCreateWithoutUserInput, JsonDataUncheckedCreateWithoutUserInput> | JsonDataCreateWithoutUserInput[] | JsonDataUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JsonDataCreateOrConnectWithoutUserInput | JsonDataCreateOrConnectWithoutUserInput[]
    upsert?: JsonDataUpsertWithWhereUniqueWithoutUserInput | JsonDataUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: JsonDataCreateManyUserInputEnvelope
    set?: JsonDataWhereUniqueInput | JsonDataWhereUniqueInput[]
    disconnect?: JsonDataWhereUniqueInput | JsonDataWhereUniqueInput[]
    delete?: JsonDataWhereUniqueInput | JsonDataWhereUniqueInput[]
    connect?: JsonDataWhereUniqueInput | JsonDataWhereUniqueInput[]
    update?: JsonDataUpdateWithWhereUniqueWithoutUserInput | JsonDataUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: JsonDataUpdateManyWithWhereWithoutUserInput | JsonDataUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: JsonDataScalarWhereInput | JsonDataScalarWhereInput[]
  }

  export type PurchaseUpdateManyWithoutUserNestedInput = {
    create?: XOR<PurchaseCreateWithoutUserInput, PurchaseUncheckedCreateWithoutUserInput> | PurchaseCreateWithoutUserInput[] | PurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutUserInput | PurchaseCreateOrConnectWithoutUserInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutUserInput | PurchaseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PurchaseCreateManyUserInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutUserInput | PurchaseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutUserInput | PurchaseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type QuizAttemptUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuizAttemptCreateWithoutUserInput, QuizAttemptUncheckedCreateWithoutUserInput> | QuizAttemptCreateWithoutUserInput[] | QuizAttemptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuizAttemptCreateOrConnectWithoutUserInput | QuizAttemptCreateOrConnectWithoutUserInput[]
    upsert?: QuizAttemptUpsertWithWhereUniqueWithoutUserInput | QuizAttemptUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuizAttemptCreateManyUserInputEnvelope
    set?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    disconnect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    delete?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    connect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    update?: QuizAttemptUpdateWithWhereUniqueWithoutUserInput | QuizAttemptUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuizAttemptUpdateManyWithWhereWithoutUserInput | QuizAttemptUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuizAttemptScalarWhereInput | QuizAttemptScalarWhereInput[]
  }

  export type JsonDataUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<JsonDataCreateWithoutUserInput, JsonDataUncheckedCreateWithoutUserInput> | JsonDataCreateWithoutUserInput[] | JsonDataUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JsonDataCreateOrConnectWithoutUserInput | JsonDataCreateOrConnectWithoutUserInput[]
    upsert?: JsonDataUpsertWithWhereUniqueWithoutUserInput | JsonDataUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: JsonDataCreateManyUserInputEnvelope
    set?: JsonDataWhereUniqueInput | JsonDataWhereUniqueInput[]
    disconnect?: JsonDataWhereUniqueInput | JsonDataWhereUniqueInput[]
    delete?: JsonDataWhereUniqueInput | JsonDataWhereUniqueInput[]
    connect?: JsonDataWhereUniqueInput | JsonDataWhereUniqueInput[]
    update?: JsonDataUpdateWithWhereUniqueWithoutUserInput | JsonDataUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: JsonDataUpdateManyWithWhereWithoutUserInput | JsonDataUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: JsonDataScalarWhereInput | JsonDataScalarWhereInput[]
  }

  export type PurchaseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PurchaseCreateWithoutUserInput, PurchaseUncheckedCreateWithoutUserInput> | PurchaseCreateWithoutUserInput[] | PurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutUserInput | PurchaseCreateOrConnectWithoutUserInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutUserInput | PurchaseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PurchaseCreateManyUserInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutUserInput | PurchaseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutUserInput | PurchaseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutJsonDataInput = {
    create?: XOR<UserCreateWithoutJsonDataInput, UserUncheckedCreateWithoutJsonDataInput>
    connectOrCreate?: UserCreateOrConnectWithoutJsonDataInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutJsonDataNestedInput = {
    create?: XOR<UserCreateWithoutJsonDataInput, UserUncheckedCreateWithoutJsonDataInput>
    connectOrCreate?: UserCreateOrConnectWithoutJsonDataInput
    upsert?: UserUpsertWithoutJsonDataInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutJsonDataInput, UserUpdateWithoutJsonDataInput>, UserUncheckedUpdateWithoutJsonDataInput>
  }

  export type MateriDetailCreateNestedManyWithoutMateriInput = {
    create?: XOR<MateriDetailCreateWithoutMateriInput, MateriDetailUncheckedCreateWithoutMateriInput> | MateriDetailCreateWithoutMateriInput[] | MateriDetailUncheckedCreateWithoutMateriInput[]
    connectOrCreate?: MateriDetailCreateOrConnectWithoutMateriInput | MateriDetailCreateOrConnectWithoutMateriInput[]
    createMany?: MateriDetailCreateManyMateriInputEnvelope
    connect?: MateriDetailWhereUniqueInput | MateriDetailWhereUniqueInput[]
  }

  export type QuizCreateNestedManyWithoutMateriInput = {
    create?: XOR<QuizCreateWithoutMateriInput, QuizUncheckedCreateWithoutMateriInput> | QuizCreateWithoutMateriInput[] | QuizUncheckedCreateWithoutMateriInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutMateriInput | QuizCreateOrConnectWithoutMateriInput[]
    createMany?: QuizCreateManyMateriInputEnvelope
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
  }

  export type MateriDetailUncheckedCreateNestedManyWithoutMateriInput = {
    create?: XOR<MateriDetailCreateWithoutMateriInput, MateriDetailUncheckedCreateWithoutMateriInput> | MateriDetailCreateWithoutMateriInput[] | MateriDetailUncheckedCreateWithoutMateriInput[]
    connectOrCreate?: MateriDetailCreateOrConnectWithoutMateriInput | MateriDetailCreateOrConnectWithoutMateriInput[]
    createMany?: MateriDetailCreateManyMateriInputEnvelope
    connect?: MateriDetailWhereUniqueInput | MateriDetailWhereUniqueInput[]
  }

  export type QuizUncheckedCreateNestedManyWithoutMateriInput = {
    create?: XOR<QuizCreateWithoutMateriInput, QuizUncheckedCreateWithoutMateriInput> | QuizCreateWithoutMateriInput[] | QuizUncheckedCreateWithoutMateriInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutMateriInput | QuizCreateOrConnectWithoutMateriInput[]
    createMany?: QuizCreateManyMateriInputEnvelope
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
  }

  export type EnumMateriTypeFieldUpdateOperationsInput = {
    set?: $Enums.MateriType
  }

  export type MateriDetailUpdateManyWithoutMateriNestedInput = {
    create?: XOR<MateriDetailCreateWithoutMateriInput, MateriDetailUncheckedCreateWithoutMateriInput> | MateriDetailCreateWithoutMateriInput[] | MateriDetailUncheckedCreateWithoutMateriInput[]
    connectOrCreate?: MateriDetailCreateOrConnectWithoutMateriInput | MateriDetailCreateOrConnectWithoutMateriInput[]
    upsert?: MateriDetailUpsertWithWhereUniqueWithoutMateriInput | MateriDetailUpsertWithWhereUniqueWithoutMateriInput[]
    createMany?: MateriDetailCreateManyMateriInputEnvelope
    set?: MateriDetailWhereUniqueInput | MateriDetailWhereUniqueInput[]
    disconnect?: MateriDetailWhereUniqueInput | MateriDetailWhereUniqueInput[]
    delete?: MateriDetailWhereUniqueInput | MateriDetailWhereUniqueInput[]
    connect?: MateriDetailWhereUniqueInput | MateriDetailWhereUniqueInput[]
    update?: MateriDetailUpdateWithWhereUniqueWithoutMateriInput | MateriDetailUpdateWithWhereUniqueWithoutMateriInput[]
    updateMany?: MateriDetailUpdateManyWithWhereWithoutMateriInput | MateriDetailUpdateManyWithWhereWithoutMateriInput[]
    deleteMany?: MateriDetailScalarWhereInput | MateriDetailScalarWhereInput[]
  }

  export type QuizUpdateManyWithoutMateriNestedInput = {
    create?: XOR<QuizCreateWithoutMateriInput, QuizUncheckedCreateWithoutMateriInput> | QuizCreateWithoutMateriInput[] | QuizUncheckedCreateWithoutMateriInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutMateriInput | QuizCreateOrConnectWithoutMateriInput[]
    upsert?: QuizUpsertWithWhereUniqueWithoutMateriInput | QuizUpsertWithWhereUniqueWithoutMateriInput[]
    createMany?: QuizCreateManyMateriInputEnvelope
    set?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    disconnect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    delete?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    update?: QuizUpdateWithWhereUniqueWithoutMateriInput | QuizUpdateWithWhereUniqueWithoutMateriInput[]
    updateMany?: QuizUpdateManyWithWhereWithoutMateriInput | QuizUpdateManyWithWhereWithoutMateriInput[]
    deleteMany?: QuizScalarWhereInput | QuizScalarWhereInput[]
  }

  export type MateriDetailUncheckedUpdateManyWithoutMateriNestedInput = {
    create?: XOR<MateriDetailCreateWithoutMateriInput, MateriDetailUncheckedCreateWithoutMateriInput> | MateriDetailCreateWithoutMateriInput[] | MateriDetailUncheckedCreateWithoutMateriInput[]
    connectOrCreate?: MateriDetailCreateOrConnectWithoutMateriInput | MateriDetailCreateOrConnectWithoutMateriInput[]
    upsert?: MateriDetailUpsertWithWhereUniqueWithoutMateriInput | MateriDetailUpsertWithWhereUniqueWithoutMateriInput[]
    createMany?: MateriDetailCreateManyMateriInputEnvelope
    set?: MateriDetailWhereUniqueInput | MateriDetailWhereUniqueInput[]
    disconnect?: MateriDetailWhereUniqueInput | MateriDetailWhereUniqueInput[]
    delete?: MateriDetailWhereUniqueInput | MateriDetailWhereUniqueInput[]
    connect?: MateriDetailWhereUniqueInput | MateriDetailWhereUniqueInput[]
    update?: MateriDetailUpdateWithWhereUniqueWithoutMateriInput | MateriDetailUpdateWithWhereUniqueWithoutMateriInput[]
    updateMany?: MateriDetailUpdateManyWithWhereWithoutMateriInput | MateriDetailUpdateManyWithWhereWithoutMateriInput[]
    deleteMany?: MateriDetailScalarWhereInput | MateriDetailScalarWhereInput[]
  }

  export type QuizUncheckedUpdateManyWithoutMateriNestedInput = {
    create?: XOR<QuizCreateWithoutMateriInput, QuizUncheckedCreateWithoutMateriInput> | QuizCreateWithoutMateriInput[] | QuizUncheckedCreateWithoutMateriInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutMateriInput | QuizCreateOrConnectWithoutMateriInput[]
    upsert?: QuizUpsertWithWhereUniqueWithoutMateriInput | QuizUpsertWithWhereUniqueWithoutMateriInput[]
    createMany?: QuizCreateManyMateriInputEnvelope
    set?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    disconnect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    delete?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    update?: QuizUpdateWithWhereUniqueWithoutMateriInput | QuizUpdateWithWhereUniqueWithoutMateriInput[]
    updateMany?: QuizUpdateManyWithWhereWithoutMateriInput | QuizUpdateManyWithWhereWithoutMateriInput[]
    deleteMany?: QuizScalarWhereInput | QuizScalarWhereInput[]
  }

  export type MateriCreateNestedOneWithoutDetailsInput = {
    create?: XOR<MateriCreateWithoutDetailsInput, MateriUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: MateriCreateOrConnectWithoutDetailsInput
    connect?: MateriWhereUniqueInput
  }

  export type MateriUpdateOneRequiredWithoutDetailsNestedInput = {
    create?: XOR<MateriCreateWithoutDetailsInput, MateriUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: MateriCreateOrConnectWithoutDetailsInput
    upsert?: MateriUpsertWithoutDetailsInput
    connect?: MateriWhereUniqueInput
    update?: XOR<XOR<MateriUpdateToOneWithWhereWithoutDetailsInput, MateriUpdateWithoutDetailsInput>, MateriUncheckedUpdateWithoutDetailsInput>
  }

  export type QuizCreateoptionsInput = {
    set: string[]
  }

  export type MateriCreateNestedOneWithoutQuizzesInput = {
    create?: XOR<MateriCreateWithoutQuizzesInput, MateriUncheckedCreateWithoutQuizzesInput>
    connectOrCreate?: MateriCreateOrConnectWithoutQuizzesInput
    connect?: MateriWhereUniqueInput
  }

  export type QuizAttemptCreateNestedManyWithoutQuizInput = {
    create?: XOR<QuizAttemptCreateWithoutQuizInput, QuizAttemptUncheckedCreateWithoutQuizInput> | QuizAttemptCreateWithoutQuizInput[] | QuizAttemptUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizAttemptCreateOrConnectWithoutQuizInput | QuizAttemptCreateOrConnectWithoutQuizInput[]
    createMany?: QuizAttemptCreateManyQuizInputEnvelope
    connect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
  }

  export type QuizAttemptUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<QuizAttemptCreateWithoutQuizInput, QuizAttemptUncheckedCreateWithoutQuizInput> | QuizAttemptCreateWithoutQuizInput[] | QuizAttemptUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizAttemptCreateOrConnectWithoutQuizInput | QuizAttemptCreateOrConnectWithoutQuizInput[]
    createMany?: QuizAttemptCreateManyQuizInputEnvelope
    connect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
  }

  export type QuizUpdateoptionsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type MateriUpdateOneRequiredWithoutQuizzesNestedInput = {
    create?: XOR<MateriCreateWithoutQuizzesInput, MateriUncheckedCreateWithoutQuizzesInput>
    connectOrCreate?: MateriCreateOrConnectWithoutQuizzesInput
    upsert?: MateriUpsertWithoutQuizzesInput
    connect?: MateriWhereUniqueInput
    update?: XOR<XOR<MateriUpdateToOneWithWhereWithoutQuizzesInput, MateriUpdateWithoutQuizzesInput>, MateriUncheckedUpdateWithoutQuizzesInput>
  }

  export type QuizAttemptUpdateManyWithoutQuizNestedInput = {
    create?: XOR<QuizAttemptCreateWithoutQuizInput, QuizAttemptUncheckedCreateWithoutQuizInput> | QuizAttemptCreateWithoutQuizInput[] | QuizAttemptUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizAttemptCreateOrConnectWithoutQuizInput | QuizAttemptCreateOrConnectWithoutQuizInput[]
    upsert?: QuizAttemptUpsertWithWhereUniqueWithoutQuizInput | QuizAttemptUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: QuizAttemptCreateManyQuizInputEnvelope
    set?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    disconnect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    delete?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    connect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    update?: QuizAttemptUpdateWithWhereUniqueWithoutQuizInput | QuizAttemptUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: QuizAttemptUpdateManyWithWhereWithoutQuizInput | QuizAttemptUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: QuizAttemptScalarWhereInput | QuizAttemptScalarWhereInput[]
  }

  export type QuizAttemptUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: XOR<QuizAttemptCreateWithoutQuizInput, QuizAttemptUncheckedCreateWithoutQuizInput> | QuizAttemptCreateWithoutQuizInput[] | QuizAttemptUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuizAttemptCreateOrConnectWithoutQuizInput | QuizAttemptCreateOrConnectWithoutQuizInput[]
    upsert?: QuizAttemptUpsertWithWhereUniqueWithoutQuizInput | QuizAttemptUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: QuizAttemptCreateManyQuizInputEnvelope
    set?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    disconnect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    delete?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    connect?: QuizAttemptWhereUniqueInput | QuizAttemptWhereUniqueInput[]
    update?: QuizAttemptUpdateWithWhereUniqueWithoutQuizInput | QuizAttemptUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: QuizAttemptUpdateManyWithWhereWithoutQuizInput | QuizAttemptUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: QuizAttemptScalarWhereInput | QuizAttemptScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutQuizzesInput = {
    create?: XOR<UserCreateWithoutQuizzesInput, UserUncheckedCreateWithoutQuizzesInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuizzesInput
    connect?: UserWhereUniqueInput
  }

  export type QuizCreateNestedOneWithoutAttemptsInput = {
    create?: XOR<QuizCreateWithoutAttemptsInput, QuizUncheckedCreateWithoutAttemptsInput>
    connectOrCreate?: QuizCreateOrConnectWithoutAttemptsInput
    connect?: QuizWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutQuizzesNestedInput = {
    create?: XOR<UserCreateWithoutQuizzesInput, UserUncheckedCreateWithoutQuizzesInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuizzesInput
    upsert?: UserUpsertWithoutQuizzesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutQuizzesInput, UserUpdateWithoutQuizzesInput>, UserUncheckedUpdateWithoutQuizzesInput>
  }

  export type QuizUpdateOneRequiredWithoutAttemptsNestedInput = {
    create?: XOR<QuizCreateWithoutAttemptsInput, QuizUncheckedCreateWithoutAttemptsInput>
    connectOrCreate?: QuizCreateOrConnectWithoutAttemptsInput
    upsert?: QuizUpsertWithoutAttemptsInput
    connect?: QuizWhereUniqueInput
    update?: XOR<XOR<QuizUpdateToOneWithWhereWithoutAttemptsInput, QuizUpdateWithoutAttemptsInput>, QuizUncheckedUpdateWithoutAttemptsInput>
  }

  export type PurchaseCreateNestedManyWithoutShopItemInput = {
    create?: XOR<PurchaseCreateWithoutShopItemInput, PurchaseUncheckedCreateWithoutShopItemInput> | PurchaseCreateWithoutShopItemInput[] | PurchaseUncheckedCreateWithoutShopItemInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutShopItemInput | PurchaseCreateOrConnectWithoutShopItemInput[]
    createMany?: PurchaseCreateManyShopItemInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type PurchaseUncheckedCreateNestedManyWithoutShopItemInput = {
    create?: XOR<PurchaseCreateWithoutShopItemInput, PurchaseUncheckedCreateWithoutShopItemInput> | PurchaseCreateWithoutShopItemInput[] | PurchaseUncheckedCreateWithoutShopItemInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutShopItemInput | PurchaseCreateOrConnectWithoutShopItemInput[]
    createMany?: PurchaseCreateManyShopItemInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type PurchaseUpdateManyWithoutShopItemNestedInput = {
    create?: XOR<PurchaseCreateWithoutShopItemInput, PurchaseUncheckedCreateWithoutShopItemInput> | PurchaseCreateWithoutShopItemInput[] | PurchaseUncheckedCreateWithoutShopItemInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutShopItemInput | PurchaseCreateOrConnectWithoutShopItemInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutShopItemInput | PurchaseUpsertWithWhereUniqueWithoutShopItemInput[]
    createMany?: PurchaseCreateManyShopItemInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutShopItemInput | PurchaseUpdateWithWhereUniqueWithoutShopItemInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutShopItemInput | PurchaseUpdateManyWithWhereWithoutShopItemInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type PurchaseUncheckedUpdateManyWithoutShopItemNestedInput = {
    create?: XOR<PurchaseCreateWithoutShopItemInput, PurchaseUncheckedCreateWithoutShopItemInput> | PurchaseCreateWithoutShopItemInput[] | PurchaseUncheckedCreateWithoutShopItemInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutShopItemInput | PurchaseCreateOrConnectWithoutShopItemInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutShopItemInput | PurchaseUpsertWithWhereUniqueWithoutShopItemInput[]
    createMany?: PurchaseCreateManyShopItemInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutShopItemInput | PurchaseUpdateWithWhereUniqueWithoutShopItemInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutShopItemInput | PurchaseUpdateManyWithWhereWithoutShopItemInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPurchasesInput = {
    create?: XOR<UserCreateWithoutPurchasesInput, UserUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPurchasesInput
    connect?: UserWhereUniqueInput
  }

  export type ShopItemCreateNestedOneWithoutPurchasesInput = {
    create?: XOR<ShopItemCreateWithoutPurchasesInput, ShopItemUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: ShopItemCreateOrConnectWithoutPurchasesInput
    connect?: ShopItemWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPurchasesNestedInput = {
    create?: XOR<UserCreateWithoutPurchasesInput, UserUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPurchasesInput
    upsert?: UserUpsertWithoutPurchasesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPurchasesInput, UserUpdateWithoutPurchasesInput>, UserUncheckedUpdateWithoutPurchasesInput>
  }

  export type ShopItemUpdateOneRequiredWithoutPurchasesNestedInput = {
    create?: XOR<ShopItemCreateWithoutPurchasesInput, ShopItemUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: ShopItemCreateOrConnectWithoutPurchasesInput
    upsert?: ShopItemUpsertWithoutPurchasesInput
    connect?: ShopItemWhereUniqueInput
    update?: XOR<XOR<ShopItemUpdateToOneWithWhereWithoutPurchasesInput, ShopItemUpdateWithoutPurchasesInput>, ShopItemUncheckedUpdateWithoutPurchasesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumMateriTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MateriType | EnumMateriTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MateriType[] | ListEnumMateriTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MateriType[] | ListEnumMateriTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMateriTypeFilter<$PrismaModel> | $Enums.MateriType
  }

  export type NestedEnumMateriTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MateriType | EnumMateriTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MateriType[] | ListEnumMateriTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MateriType[] | ListEnumMateriTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMateriTypeWithAggregatesFilter<$PrismaModel> | $Enums.MateriType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMateriTypeFilter<$PrismaModel>
    _max?: NestedEnumMateriTypeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type QuizAttemptCreateWithoutUserInput = {
    id?: string
    correct: boolean
    points?: number
    createdAt?: Date | string
    quiz: QuizCreateNestedOneWithoutAttemptsInput
  }

  export type QuizAttemptUncheckedCreateWithoutUserInput = {
    id?: string
    quizId: string
    correct: boolean
    points?: number
    createdAt?: Date | string
  }

  export type QuizAttemptCreateOrConnectWithoutUserInput = {
    where: QuizAttemptWhereUniqueInput
    create: XOR<QuizAttemptCreateWithoutUserInput, QuizAttemptUncheckedCreateWithoutUserInput>
  }

  export type QuizAttemptCreateManyUserInputEnvelope = {
    data: QuizAttemptCreateManyUserInput | QuizAttemptCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type JsonDataCreateWithoutUserInput = {
    id?: string
    name: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JsonDataUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JsonDataCreateOrConnectWithoutUserInput = {
    where: JsonDataWhereUniqueInput
    create: XOR<JsonDataCreateWithoutUserInput, JsonDataUncheckedCreateWithoutUserInput>
  }

  export type JsonDataCreateManyUserInputEnvelope = {
    data: JsonDataCreateManyUserInput | JsonDataCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PurchaseCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    shopItem: ShopItemCreateNestedOneWithoutPurchasesInput
  }

  export type PurchaseUncheckedCreateWithoutUserInput = {
    id?: string
    shopItemId: string
    createdAt?: Date | string
  }

  export type PurchaseCreateOrConnectWithoutUserInput = {
    where: PurchaseWhereUniqueInput
    create: XOR<PurchaseCreateWithoutUserInput, PurchaseUncheckedCreateWithoutUserInput>
  }

  export type PurchaseCreateManyUserInputEnvelope = {
    data: PurchaseCreateManyUserInput | PurchaseCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type QuizAttemptUpsertWithWhereUniqueWithoutUserInput = {
    where: QuizAttemptWhereUniqueInput
    update: XOR<QuizAttemptUpdateWithoutUserInput, QuizAttemptUncheckedUpdateWithoutUserInput>
    create: XOR<QuizAttemptCreateWithoutUserInput, QuizAttemptUncheckedCreateWithoutUserInput>
  }

  export type QuizAttemptUpdateWithWhereUniqueWithoutUserInput = {
    where: QuizAttemptWhereUniqueInput
    data: XOR<QuizAttemptUpdateWithoutUserInput, QuizAttemptUncheckedUpdateWithoutUserInput>
  }

  export type QuizAttemptUpdateManyWithWhereWithoutUserInput = {
    where: QuizAttemptScalarWhereInput
    data: XOR<QuizAttemptUpdateManyMutationInput, QuizAttemptUncheckedUpdateManyWithoutUserInput>
  }

  export type QuizAttemptScalarWhereInput = {
    AND?: QuizAttemptScalarWhereInput | QuizAttemptScalarWhereInput[]
    OR?: QuizAttemptScalarWhereInput[]
    NOT?: QuizAttemptScalarWhereInput | QuizAttemptScalarWhereInput[]
    id?: StringFilter<"QuizAttempt"> | string
    userId?: StringFilter<"QuizAttempt"> | string
    quizId?: StringFilter<"QuizAttempt"> | string
    correct?: BoolFilter<"QuizAttempt"> | boolean
    points?: IntFilter<"QuizAttempt"> | number
    createdAt?: DateTimeFilter<"QuizAttempt"> | Date | string
  }

  export type JsonDataUpsertWithWhereUniqueWithoutUserInput = {
    where: JsonDataWhereUniqueInput
    update: XOR<JsonDataUpdateWithoutUserInput, JsonDataUncheckedUpdateWithoutUserInput>
    create: XOR<JsonDataCreateWithoutUserInput, JsonDataUncheckedCreateWithoutUserInput>
  }

  export type JsonDataUpdateWithWhereUniqueWithoutUserInput = {
    where: JsonDataWhereUniqueInput
    data: XOR<JsonDataUpdateWithoutUserInput, JsonDataUncheckedUpdateWithoutUserInput>
  }

  export type JsonDataUpdateManyWithWhereWithoutUserInput = {
    where: JsonDataScalarWhereInput
    data: XOR<JsonDataUpdateManyMutationInput, JsonDataUncheckedUpdateManyWithoutUserInput>
  }

  export type JsonDataScalarWhereInput = {
    AND?: JsonDataScalarWhereInput | JsonDataScalarWhereInput[]
    OR?: JsonDataScalarWhereInput[]
    NOT?: JsonDataScalarWhereInput | JsonDataScalarWhereInput[]
    id?: StringFilter<"JsonData"> | string
    name?: StringFilter<"JsonData"> | string
    content?: StringFilter<"JsonData"> | string
    userId?: StringFilter<"JsonData"> | string
    createdAt?: DateTimeFilter<"JsonData"> | Date | string
    updatedAt?: DateTimeFilter<"JsonData"> | Date | string
  }

  export type PurchaseUpsertWithWhereUniqueWithoutUserInput = {
    where: PurchaseWhereUniqueInput
    update: XOR<PurchaseUpdateWithoutUserInput, PurchaseUncheckedUpdateWithoutUserInput>
    create: XOR<PurchaseCreateWithoutUserInput, PurchaseUncheckedCreateWithoutUserInput>
  }

  export type PurchaseUpdateWithWhereUniqueWithoutUserInput = {
    where: PurchaseWhereUniqueInput
    data: XOR<PurchaseUpdateWithoutUserInput, PurchaseUncheckedUpdateWithoutUserInput>
  }

  export type PurchaseUpdateManyWithWhereWithoutUserInput = {
    where: PurchaseScalarWhereInput
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyWithoutUserInput>
  }

  export type PurchaseScalarWhereInput = {
    AND?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
    OR?: PurchaseScalarWhereInput[]
    NOT?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
    id?: StringFilter<"Purchase"> | string
    userId?: StringFilter<"Purchase"> | string
    shopItemId?: StringFilter<"Purchase"> | string
    createdAt?: DateTimeFilter<"Purchase"> | Date | string
  }

  export type UserCreateWithoutJsonDataInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    points?: number
    lives?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    quizzes?: QuizAttemptCreateNestedManyWithoutUserInput
    purchases?: PurchaseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutJsonDataInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    points?: number
    lives?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    quizzes?: QuizAttemptUncheckedCreateNestedManyWithoutUserInput
    purchases?: PurchaseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutJsonDataInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutJsonDataInput, UserUncheckedCreateWithoutJsonDataInput>
  }

  export type UserUpsertWithoutJsonDataInput = {
    update: XOR<UserUpdateWithoutJsonDataInput, UserUncheckedUpdateWithoutJsonDataInput>
    create: XOR<UserCreateWithoutJsonDataInput, UserUncheckedCreateWithoutJsonDataInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutJsonDataInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutJsonDataInput, UserUncheckedUpdateWithoutJsonDataInput>
  }

  export type UserUpdateWithoutJsonDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    lives?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizzes?: QuizAttemptUpdateManyWithoutUserNestedInput
    purchases?: PurchaseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutJsonDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    lives?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizzes?: QuizAttemptUncheckedUpdateManyWithoutUserNestedInput
    purchases?: PurchaseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MateriDetailCreateWithoutMateriInput = {
    id?: string
    value: string
    imageUrl: string
    audioUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MateriDetailUncheckedCreateWithoutMateriInput = {
    id?: string
    value: string
    imageUrl: string
    audioUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MateriDetailCreateOrConnectWithoutMateriInput = {
    where: MateriDetailWhereUniqueInput
    create: XOR<MateriDetailCreateWithoutMateriInput, MateriDetailUncheckedCreateWithoutMateriInput>
  }

  export type MateriDetailCreateManyMateriInputEnvelope = {
    data: MateriDetailCreateManyMateriInput | MateriDetailCreateManyMateriInput[]
    skipDuplicates?: boolean
  }

  export type QuizCreateWithoutMateriInput = {
    id?: string
    question: string
    answer: string
    options?: QuizCreateoptionsInput | string[]
    point?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    attempts?: QuizAttemptCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutMateriInput = {
    id?: string
    question: string
    answer: string
    options?: QuizCreateoptionsInput | string[]
    point?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    attempts?: QuizAttemptUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutMateriInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutMateriInput, QuizUncheckedCreateWithoutMateriInput>
  }

  export type QuizCreateManyMateriInputEnvelope = {
    data: QuizCreateManyMateriInput | QuizCreateManyMateriInput[]
    skipDuplicates?: boolean
  }

  export type MateriDetailUpsertWithWhereUniqueWithoutMateriInput = {
    where: MateriDetailWhereUniqueInput
    update: XOR<MateriDetailUpdateWithoutMateriInput, MateriDetailUncheckedUpdateWithoutMateriInput>
    create: XOR<MateriDetailCreateWithoutMateriInput, MateriDetailUncheckedCreateWithoutMateriInput>
  }

  export type MateriDetailUpdateWithWhereUniqueWithoutMateriInput = {
    where: MateriDetailWhereUniqueInput
    data: XOR<MateriDetailUpdateWithoutMateriInput, MateriDetailUncheckedUpdateWithoutMateriInput>
  }

  export type MateriDetailUpdateManyWithWhereWithoutMateriInput = {
    where: MateriDetailScalarWhereInput
    data: XOR<MateriDetailUpdateManyMutationInput, MateriDetailUncheckedUpdateManyWithoutMateriInput>
  }

  export type MateriDetailScalarWhereInput = {
    AND?: MateriDetailScalarWhereInput | MateriDetailScalarWhereInput[]
    OR?: MateriDetailScalarWhereInput[]
    NOT?: MateriDetailScalarWhereInput | MateriDetailScalarWhereInput[]
    id?: StringFilter<"MateriDetail"> | string
    materiId?: StringFilter<"MateriDetail"> | string
    value?: StringFilter<"MateriDetail"> | string
    imageUrl?: StringFilter<"MateriDetail"> | string
    audioUrl?: StringFilter<"MateriDetail"> | string
    createdAt?: DateTimeFilter<"MateriDetail"> | Date | string
    updatedAt?: DateTimeFilter<"MateriDetail"> | Date | string
  }

  export type QuizUpsertWithWhereUniqueWithoutMateriInput = {
    where: QuizWhereUniqueInput
    update: XOR<QuizUpdateWithoutMateriInput, QuizUncheckedUpdateWithoutMateriInput>
    create: XOR<QuizCreateWithoutMateriInput, QuizUncheckedCreateWithoutMateriInput>
  }

  export type QuizUpdateWithWhereUniqueWithoutMateriInput = {
    where: QuizWhereUniqueInput
    data: XOR<QuizUpdateWithoutMateriInput, QuizUncheckedUpdateWithoutMateriInput>
  }

  export type QuizUpdateManyWithWhereWithoutMateriInput = {
    where: QuizScalarWhereInput
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyWithoutMateriInput>
  }

  export type QuizScalarWhereInput = {
    AND?: QuizScalarWhereInput | QuizScalarWhereInput[]
    OR?: QuizScalarWhereInput[]
    NOT?: QuizScalarWhereInput | QuizScalarWhereInput[]
    id?: StringFilter<"Quiz"> | string
    materiId?: StringFilter<"Quiz"> | string
    question?: StringFilter<"Quiz"> | string
    answer?: StringFilter<"Quiz"> | string
    options?: StringNullableListFilter<"Quiz">
    point?: IntFilter<"Quiz"> | number
    createdAt?: DateTimeFilter<"Quiz"> | Date | string
    updatedAt?: DateTimeFilter<"Quiz"> | Date | string
  }

  export type MateriCreateWithoutDetailsInput = {
    id?: string
    title: string
    description?: string | null
    type: $Enums.MateriType
    createdAt?: Date | string
    updatedAt?: Date | string
    quizzes?: QuizCreateNestedManyWithoutMateriInput
  }

  export type MateriUncheckedCreateWithoutDetailsInput = {
    id?: string
    title: string
    description?: string | null
    type: $Enums.MateriType
    createdAt?: Date | string
    updatedAt?: Date | string
    quizzes?: QuizUncheckedCreateNestedManyWithoutMateriInput
  }

  export type MateriCreateOrConnectWithoutDetailsInput = {
    where: MateriWhereUniqueInput
    create: XOR<MateriCreateWithoutDetailsInput, MateriUncheckedCreateWithoutDetailsInput>
  }

  export type MateriUpsertWithoutDetailsInput = {
    update: XOR<MateriUpdateWithoutDetailsInput, MateriUncheckedUpdateWithoutDetailsInput>
    create: XOR<MateriCreateWithoutDetailsInput, MateriUncheckedCreateWithoutDetailsInput>
    where?: MateriWhereInput
  }

  export type MateriUpdateToOneWithWhereWithoutDetailsInput = {
    where?: MateriWhereInput
    data: XOR<MateriUpdateWithoutDetailsInput, MateriUncheckedUpdateWithoutDetailsInput>
  }

  export type MateriUpdateWithoutDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMateriTypeFieldUpdateOperationsInput | $Enums.MateriType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizzes?: QuizUpdateManyWithoutMateriNestedInput
  }

  export type MateriUncheckedUpdateWithoutDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMateriTypeFieldUpdateOperationsInput | $Enums.MateriType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizzes?: QuizUncheckedUpdateManyWithoutMateriNestedInput
  }

  export type MateriCreateWithoutQuizzesInput = {
    id?: string
    title: string
    description?: string | null
    type: $Enums.MateriType
    createdAt?: Date | string
    updatedAt?: Date | string
    details?: MateriDetailCreateNestedManyWithoutMateriInput
  }

  export type MateriUncheckedCreateWithoutQuizzesInput = {
    id?: string
    title: string
    description?: string | null
    type: $Enums.MateriType
    createdAt?: Date | string
    updatedAt?: Date | string
    details?: MateriDetailUncheckedCreateNestedManyWithoutMateriInput
  }

  export type MateriCreateOrConnectWithoutQuizzesInput = {
    where: MateriWhereUniqueInput
    create: XOR<MateriCreateWithoutQuizzesInput, MateriUncheckedCreateWithoutQuizzesInput>
  }

  export type QuizAttemptCreateWithoutQuizInput = {
    id?: string
    correct: boolean
    points?: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutQuizzesInput
  }

  export type QuizAttemptUncheckedCreateWithoutQuizInput = {
    id?: string
    userId: string
    correct: boolean
    points?: number
    createdAt?: Date | string
  }

  export type QuizAttemptCreateOrConnectWithoutQuizInput = {
    where: QuizAttemptWhereUniqueInput
    create: XOR<QuizAttemptCreateWithoutQuizInput, QuizAttemptUncheckedCreateWithoutQuizInput>
  }

  export type QuizAttemptCreateManyQuizInputEnvelope = {
    data: QuizAttemptCreateManyQuizInput | QuizAttemptCreateManyQuizInput[]
    skipDuplicates?: boolean
  }

  export type MateriUpsertWithoutQuizzesInput = {
    update: XOR<MateriUpdateWithoutQuizzesInput, MateriUncheckedUpdateWithoutQuizzesInput>
    create: XOR<MateriCreateWithoutQuizzesInput, MateriUncheckedCreateWithoutQuizzesInput>
    where?: MateriWhereInput
  }

  export type MateriUpdateToOneWithWhereWithoutQuizzesInput = {
    where?: MateriWhereInput
    data: XOR<MateriUpdateWithoutQuizzesInput, MateriUncheckedUpdateWithoutQuizzesInput>
  }

  export type MateriUpdateWithoutQuizzesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMateriTypeFieldUpdateOperationsInput | $Enums.MateriType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: MateriDetailUpdateManyWithoutMateriNestedInput
  }

  export type MateriUncheckedUpdateWithoutQuizzesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMateriTypeFieldUpdateOperationsInput | $Enums.MateriType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: MateriDetailUncheckedUpdateManyWithoutMateriNestedInput
  }

  export type QuizAttemptUpsertWithWhereUniqueWithoutQuizInput = {
    where: QuizAttemptWhereUniqueInput
    update: XOR<QuizAttemptUpdateWithoutQuizInput, QuizAttemptUncheckedUpdateWithoutQuizInput>
    create: XOR<QuizAttemptCreateWithoutQuizInput, QuizAttemptUncheckedCreateWithoutQuizInput>
  }

  export type QuizAttemptUpdateWithWhereUniqueWithoutQuizInput = {
    where: QuizAttemptWhereUniqueInput
    data: XOR<QuizAttemptUpdateWithoutQuizInput, QuizAttemptUncheckedUpdateWithoutQuizInput>
  }

  export type QuizAttemptUpdateManyWithWhereWithoutQuizInput = {
    where: QuizAttemptScalarWhereInput
    data: XOR<QuizAttemptUpdateManyMutationInput, QuizAttemptUncheckedUpdateManyWithoutQuizInput>
  }

  export type UserCreateWithoutQuizzesInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    points?: number
    lives?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    jsonData?: JsonDataCreateNestedManyWithoutUserInput
    purchases?: PurchaseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutQuizzesInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    points?: number
    lives?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    jsonData?: JsonDataUncheckedCreateNestedManyWithoutUserInput
    purchases?: PurchaseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutQuizzesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutQuizzesInput, UserUncheckedCreateWithoutQuizzesInput>
  }

  export type QuizCreateWithoutAttemptsInput = {
    id?: string
    question: string
    answer: string
    options?: QuizCreateoptionsInput | string[]
    point?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    materi: MateriCreateNestedOneWithoutQuizzesInput
  }

  export type QuizUncheckedCreateWithoutAttemptsInput = {
    id?: string
    materiId: string
    question: string
    answer: string
    options?: QuizCreateoptionsInput | string[]
    point?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizCreateOrConnectWithoutAttemptsInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutAttemptsInput, QuizUncheckedCreateWithoutAttemptsInput>
  }

  export type UserUpsertWithoutQuizzesInput = {
    update: XOR<UserUpdateWithoutQuizzesInput, UserUncheckedUpdateWithoutQuizzesInput>
    create: XOR<UserCreateWithoutQuizzesInput, UserUncheckedCreateWithoutQuizzesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutQuizzesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutQuizzesInput, UserUncheckedUpdateWithoutQuizzesInput>
  }

  export type UserUpdateWithoutQuizzesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    lives?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jsonData?: JsonDataUpdateManyWithoutUserNestedInput
    purchases?: PurchaseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutQuizzesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    lives?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jsonData?: JsonDataUncheckedUpdateManyWithoutUserNestedInput
    purchases?: PurchaseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type QuizUpsertWithoutAttemptsInput = {
    update: XOR<QuizUpdateWithoutAttemptsInput, QuizUncheckedUpdateWithoutAttemptsInput>
    create: XOR<QuizCreateWithoutAttemptsInput, QuizUncheckedCreateWithoutAttemptsInput>
    where?: QuizWhereInput
  }

  export type QuizUpdateToOneWithWhereWithoutAttemptsInput = {
    where?: QuizWhereInput
    data: XOR<QuizUpdateWithoutAttemptsInput, QuizUncheckedUpdateWithoutAttemptsInput>
  }

  export type QuizUpdateWithoutAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    options?: QuizUpdateoptionsInput | string[]
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    materi?: MateriUpdateOneRequiredWithoutQuizzesNestedInput
  }

  export type QuizUncheckedUpdateWithoutAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    materiId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    options?: QuizUpdateoptionsInput | string[]
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseCreateWithoutShopItemInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPurchasesInput
  }

  export type PurchaseUncheckedCreateWithoutShopItemInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type PurchaseCreateOrConnectWithoutShopItemInput = {
    where: PurchaseWhereUniqueInput
    create: XOR<PurchaseCreateWithoutShopItemInput, PurchaseUncheckedCreateWithoutShopItemInput>
  }

  export type PurchaseCreateManyShopItemInputEnvelope = {
    data: PurchaseCreateManyShopItemInput | PurchaseCreateManyShopItemInput[]
    skipDuplicates?: boolean
  }

  export type PurchaseUpsertWithWhereUniqueWithoutShopItemInput = {
    where: PurchaseWhereUniqueInput
    update: XOR<PurchaseUpdateWithoutShopItemInput, PurchaseUncheckedUpdateWithoutShopItemInput>
    create: XOR<PurchaseCreateWithoutShopItemInput, PurchaseUncheckedCreateWithoutShopItemInput>
  }

  export type PurchaseUpdateWithWhereUniqueWithoutShopItemInput = {
    where: PurchaseWhereUniqueInput
    data: XOR<PurchaseUpdateWithoutShopItemInput, PurchaseUncheckedUpdateWithoutShopItemInput>
  }

  export type PurchaseUpdateManyWithWhereWithoutShopItemInput = {
    where: PurchaseScalarWhereInput
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyWithoutShopItemInput>
  }

  export type UserCreateWithoutPurchasesInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    points?: number
    lives?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    quizzes?: QuizAttemptCreateNestedManyWithoutUserInput
    jsonData?: JsonDataCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPurchasesInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    points?: number
    lives?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    quizzes?: QuizAttemptUncheckedCreateNestedManyWithoutUserInput
    jsonData?: JsonDataUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPurchasesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPurchasesInput, UserUncheckedCreateWithoutPurchasesInput>
  }

  export type ShopItemCreateWithoutPurchasesInput = {
    id?: string
    name: string
    description?: string | null
    costPoints: number
    effect?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShopItemUncheckedCreateWithoutPurchasesInput = {
    id?: string
    name: string
    description?: string | null
    costPoints: number
    effect?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShopItemCreateOrConnectWithoutPurchasesInput = {
    where: ShopItemWhereUniqueInput
    create: XOR<ShopItemCreateWithoutPurchasesInput, ShopItemUncheckedCreateWithoutPurchasesInput>
  }

  export type UserUpsertWithoutPurchasesInput = {
    update: XOR<UserUpdateWithoutPurchasesInput, UserUncheckedUpdateWithoutPurchasesInput>
    create: XOR<UserCreateWithoutPurchasesInput, UserUncheckedCreateWithoutPurchasesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPurchasesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPurchasesInput, UserUncheckedUpdateWithoutPurchasesInput>
  }

  export type UserUpdateWithoutPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    lives?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizzes?: QuizAttemptUpdateManyWithoutUserNestedInput
    jsonData?: JsonDataUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    lives?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizzes?: QuizAttemptUncheckedUpdateManyWithoutUserNestedInput
    jsonData?: JsonDataUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ShopItemUpsertWithoutPurchasesInput = {
    update: XOR<ShopItemUpdateWithoutPurchasesInput, ShopItemUncheckedUpdateWithoutPurchasesInput>
    create: XOR<ShopItemCreateWithoutPurchasesInput, ShopItemUncheckedCreateWithoutPurchasesInput>
    where?: ShopItemWhereInput
  }

  export type ShopItemUpdateToOneWithWhereWithoutPurchasesInput = {
    where?: ShopItemWhereInput
    data: XOR<ShopItemUpdateWithoutPurchasesInput, ShopItemUncheckedUpdateWithoutPurchasesInput>
  }

  export type ShopItemUpdateWithoutPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    costPoints?: IntFieldUpdateOperationsInput | number
    effect?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopItemUncheckedUpdateWithoutPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    costPoints?: IntFieldUpdateOperationsInput | number
    effect?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizAttemptCreateManyUserInput = {
    id?: string
    quizId: string
    correct: boolean
    points?: number
    createdAt?: Date | string
  }

  export type JsonDataCreateManyUserInput = {
    id?: string
    name: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseCreateManyUserInput = {
    id?: string
    shopItemId: string
    createdAt?: Date | string
  }

  export type QuizAttemptUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    correct?: BoolFieldUpdateOperationsInput | boolean
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quiz?: QuizUpdateOneRequiredWithoutAttemptsNestedInput
  }

  export type QuizAttemptUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    correct?: BoolFieldUpdateOperationsInput | boolean
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizAttemptUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    correct?: BoolFieldUpdateOperationsInput | boolean
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JsonDataUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JsonDataUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JsonDataUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shopItem?: ShopItemUpdateOneRequiredWithoutPurchasesNestedInput
  }

  export type PurchaseUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopItemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopItemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MateriDetailCreateManyMateriInput = {
    id?: string
    value: string
    imageUrl: string
    audioUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizCreateManyMateriInput = {
    id?: string
    question: string
    answer: string
    options?: QuizCreateoptionsInput | string[]
    point?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MateriDetailUpdateWithoutMateriInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    audioUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MateriDetailUncheckedUpdateWithoutMateriInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    audioUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MateriDetailUncheckedUpdateManyWithoutMateriInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    audioUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizUpdateWithoutMateriInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    options?: QuizUpdateoptionsInput | string[]
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: QuizAttemptUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutMateriInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    options?: QuizUpdateoptionsInput | string[]
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: QuizAttemptUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateManyWithoutMateriInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    options?: QuizUpdateoptionsInput | string[]
    point?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizAttemptCreateManyQuizInput = {
    id?: string
    userId: string
    correct: boolean
    points?: number
    createdAt?: Date | string
  }

  export type QuizAttemptUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    correct?: BoolFieldUpdateOperationsInput | boolean
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutQuizzesNestedInput
  }

  export type QuizAttemptUncheckedUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    correct?: BoolFieldUpdateOperationsInput | boolean
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizAttemptUncheckedUpdateManyWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    correct?: BoolFieldUpdateOperationsInput | boolean
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseCreateManyShopItemInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type PurchaseUpdateWithoutShopItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPurchasesNestedInput
  }

  export type PurchaseUncheckedUpdateWithoutShopItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseUncheckedUpdateManyWithoutShopItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}