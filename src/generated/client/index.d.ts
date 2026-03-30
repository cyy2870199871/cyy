
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Family
 * 
 */
export type Family = $Result.DefaultSelection<Prisma.$FamilyPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Coupon
 * 
 */
export type Coupon = $Result.DefaultSelection<Prisma.$CouponPayload>
/**
 * Model Pet
 * 
 */
export type Pet = $Result.DefaultSelection<Prisma.$PetPayload>
/**
 * Model Wish
 * 
 */
export type Wish = $Result.DefaultSelection<Prisma.$WishPayload>
/**
 * Model Medal
 * 
 */
export type Medal = $Result.DefaultSelection<Prisma.$MedalPayload>
/**
 * Model History
 * 
 */
export type History = $Result.DefaultSelection<Prisma.$HistoryPayload>
/**
 * Model Habit
 * 
 */
export type Habit = $Result.DefaultSelection<Prisma.$HabitPayload>
/**
 * Model HabitRecord
 * 
 */
export type HabitRecord = $Result.DefaultSelection<Prisma.$HabitRecordPayload>
/**
 * Model LearningPlan
 * 
 */
export type LearningPlan = $Result.DefaultSelection<Prisma.$LearningPlanPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Families
 * const families = await prisma.family.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * // Fetch zero or more Families
   * const families = await prisma.family.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * `prisma.family`: Exposes CRUD operations for the **Family** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Families
    * const families = await prisma.family.findMany()
    * ```
    */
  get family(): Prisma.FamilyDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.coupon`: Exposes CRUD operations for the **Coupon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Coupons
    * const coupons = await prisma.coupon.findMany()
    * ```
    */
  get coupon(): Prisma.CouponDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pet`: Exposes CRUD operations for the **Pet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pets
    * const pets = await prisma.pet.findMany()
    * ```
    */
  get pet(): Prisma.PetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wish`: Exposes CRUD operations for the **Wish** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wishes
    * const wishes = await prisma.wish.findMany()
    * ```
    */
  get wish(): Prisma.WishDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medal`: Exposes CRUD operations for the **Medal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medals
    * const medals = await prisma.medal.findMany()
    * ```
    */
  get medal(): Prisma.MedalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.history`: Exposes CRUD operations for the **History** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Histories
    * const histories = await prisma.history.findMany()
    * ```
    */
  get history(): Prisma.HistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.habit`: Exposes CRUD operations for the **Habit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Habits
    * const habits = await prisma.habit.findMany()
    * ```
    */
  get habit(): Prisma.HabitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.habitRecord`: Exposes CRUD operations for the **HabitRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HabitRecords
    * const habitRecords = await prisma.habitRecord.findMany()
    * ```
    */
  get habitRecord(): Prisma.HabitRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.learningPlan`: Exposes CRUD operations for the **LearningPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LearningPlans
    * const learningPlans = await prisma.learningPlan.findMany()
    * ```
    */
  get learningPlan(): Prisma.LearningPlanDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
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
    Family: 'Family',
    User: 'User',
    Coupon: 'Coupon',
    Pet: 'Pet',
    Wish: 'Wish',
    Medal: 'Medal',
    History: 'History',
    Habit: 'Habit',
    HabitRecord: 'HabitRecord',
    LearningPlan: 'LearningPlan'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "family" | "user" | "coupon" | "pet" | "wish" | "medal" | "history" | "habit" | "habitRecord" | "learningPlan"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Family: {
        payload: Prisma.$FamilyPayload<ExtArgs>
        fields: Prisma.FamilyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FamilyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FamilyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload>
          }
          findFirst: {
            args: Prisma.FamilyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FamilyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload>
          }
          findMany: {
            args: Prisma.FamilyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload>[]
          }
          create: {
            args: Prisma.FamilyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload>
          }
          createMany: {
            args: Prisma.FamilyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FamilyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload>
          }
          update: {
            args: Prisma.FamilyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload>
          }
          deleteMany: {
            args: Prisma.FamilyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FamilyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FamilyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload>
          }
          aggregate: {
            args: Prisma.FamilyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFamily>
          }
          groupBy: {
            args: Prisma.FamilyGroupByArgs<ExtArgs>
            result: $Utils.Optional<FamilyGroupByOutputType>[]
          }
          count: {
            args: Prisma.FamilyCountArgs<ExtArgs>
            result: $Utils.Optional<FamilyCountAggregateOutputType> | number
          }
        }
      }
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
      Coupon: {
        payload: Prisma.$CouponPayload<ExtArgs>
        fields: Prisma.CouponFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CouponFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CouponFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          findFirst: {
            args: Prisma.CouponFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CouponFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          findMany: {
            args: Prisma.CouponFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>[]
          }
          create: {
            args: Prisma.CouponCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          createMany: {
            args: Prisma.CouponCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CouponDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          update: {
            args: Prisma.CouponUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          deleteMany: {
            args: Prisma.CouponDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CouponUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CouponUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          aggregate: {
            args: Prisma.CouponAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoupon>
          }
          groupBy: {
            args: Prisma.CouponGroupByArgs<ExtArgs>
            result: $Utils.Optional<CouponGroupByOutputType>[]
          }
          count: {
            args: Prisma.CouponCountArgs<ExtArgs>
            result: $Utils.Optional<CouponCountAggregateOutputType> | number
          }
        }
      }
      Pet: {
        payload: Prisma.$PetPayload<ExtArgs>
        fields: Prisma.PetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          findFirst: {
            args: Prisma.PetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          findMany: {
            args: Prisma.PetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>[]
          }
          create: {
            args: Prisma.PetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          createMany: {
            args: Prisma.PetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          update: {
            args: Prisma.PetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          deleteMany: {
            args: Prisma.PetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          aggregate: {
            args: Prisma.PetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePet>
          }
          groupBy: {
            args: Prisma.PetGroupByArgs<ExtArgs>
            result: $Utils.Optional<PetGroupByOutputType>[]
          }
          count: {
            args: Prisma.PetCountArgs<ExtArgs>
            result: $Utils.Optional<PetCountAggregateOutputType> | number
          }
        }
      }
      Wish: {
        payload: Prisma.$WishPayload<ExtArgs>
        fields: Prisma.WishFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WishFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WishFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishPayload>
          }
          findFirst: {
            args: Prisma.WishFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WishFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishPayload>
          }
          findMany: {
            args: Prisma.WishFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishPayload>[]
          }
          create: {
            args: Prisma.WishCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishPayload>
          }
          createMany: {
            args: Prisma.WishCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WishDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishPayload>
          }
          update: {
            args: Prisma.WishUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishPayload>
          }
          deleteMany: {
            args: Prisma.WishDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WishUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WishUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WishPayload>
          }
          aggregate: {
            args: Prisma.WishAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWish>
          }
          groupBy: {
            args: Prisma.WishGroupByArgs<ExtArgs>
            result: $Utils.Optional<WishGroupByOutputType>[]
          }
          count: {
            args: Prisma.WishCountArgs<ExtArgs>
            result: $Utils.Optional<WishCountAggregateOutputType> | number
          }
        }
      }
      Medal: {
        payload: Prisma.$MedalPayload<ExtArgs>
        fields: Prisma.MedalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedalPayload>
          }
          findFirst: {
            args: Prisma.MedalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedalPayload>
          }
          findMany: {
            args: Prisma.MedalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedalPayload>[]
          }
          create: {
            args: Prisma.MedalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedalPayload>
          }
          createMany: {
            args: Prisma.MedalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MedalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedalPayload>
          }
          update: {
            args: Prisma.MedalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedalPayload>
          }
          deleteMany: {
            args: Prisma.MedalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MedalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedalPayload>
          }
          aggregate: {
            args: Prisma.MedalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedal>
          }
          groupBy: {
            args: Prisma.MedalGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedalGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedalCountArgs<ExtArgs>
            result: $Utils.Optional<MedalCountAggregateOutputType> | number
          }
        }
      }
      History: {
        payload: Prisma.$HistoryPayload<ExtArgs>
        fields: Prisma.HistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          findFirst: {
            args: Prisma.HistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          findMany: {
            args: Prisma.HistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>[]
          }
          create: {
            args: Prisma.HistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          createMany: {
            args: Prisma.HistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          update: {
            args: Prisma.HistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          deleteMany: {
            args: Prisma.HistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          aggregate: {
            args: Prisma.HistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistory>
          }
          groupBy: {
            args: Prisma.HistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<HistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.HistoryCountArgs<ExtArgs>
            result: $Utils.Optional<HistoryCountAggregateOutputType> | number
          }
        }
      }
      Habit: {
        payload: Prisma.$HabitPayload<ExtArgs>
        fields: Prisma.HabitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HabitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HabitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          findFirst: {
            args: Prisma.HabitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HabitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          findMany: {
            args: Prisma.HabitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>[]
          }
          create: {
            args: Prisma.HabitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          createMany: {
            args: Prisma.HabitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HabitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          update: {
            args: Prisma.HabitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          deleteMany: {
            args: Prisma.HabitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HabitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HabitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          aggregate: {
            args: Prisma.HabitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHabit>
          }
          groupBy: {
            args: Prisma.HabitGroupByArgs<ExtArgs>
            result: $Utils.Optional<HabitGroupByOutputType>[]
          }
          count: {
            args: Prisma.HabitCountArgs<ExtArgs>
            result: $Utils.Optional<HabitCountAggregateOutputType> | number
          }
        }
      }
      HabitRecord: {
        payload: Prisma.$HabitRecordPayload<ExtArgs>
        fields: Prisma.HabitRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HabitRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HabitRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitRecordPayload>
          }
          findFirst: {
            args: Prisma.HabitRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HabitRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitRecordPayload>
          }
          findMany: {
            args: Prisma.HabitRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitRecordPayload>[]
          }
          create: {
            args: Prisma.HabitRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitRecordPayload>
          }
          createMany: {
            args: Prisma.HabitRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HabitRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitRecordPayload>
          }
          update: {
            args: Prisma.HabitRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitRecordPayload>
          }
          deleteMany: {
            args: Prisma.HabitRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HabitRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HabitRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitRecordPayload>
          }
          aggregate: {
            args: Prisma.HabitRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHabitRecord>
          }
          groupBy: {
            args: Prisma.HabitRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<HabitRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.HabitRecordCountArgs<ExtArgs>
            result: $Utils.Optional<HabitRecordCountAggregateOutputType> | number
          }
        }
      }
      LearningPlan: {
        payload: Prisma.$LearningPlanPayload<ExtArgs>
        fields: Prisma.LearningPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LearningPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LearningPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningPlanPayload>
          }
          findFirst: {
            args: Prisma.LearningPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LearningPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningPlanPayload>
          }
          findMany: {
            args: Prisma.LearningPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningPlanPayload>[]
          }
          create: {
            args: Prisma.LearningPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningPlanPayload>
          }
          createMany: {
            args: Prisma.LearningPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LearningPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningPlanPayload>
          }
          update: {
            args: Prisma.LearningPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningPlanPayload>
          }
          deleteMany: {
            args: Prisma.LearningPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LearningPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LearningPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningPlanPayload>
          }
          aggregate: {
            args: Prisma.LearningPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLearningPlan>
          }
          groupBy: {
            args: Prisma.LearningPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<LearningPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.LearningPlanCountArgs<ExtArgs>
            result: $Utils.Optional<LearningPlanCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
    adapter?: runtime.SqlDriverAdapterFactory | null
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
  }
  export type GlobalOmitConfig = {
    family?: FamilyOmit
    user?: UserOmit
    coupon?: CouponOmit
    pet?: PetOmit
    wish?: WishOmit
    medal?: MedalOmit
    history?: HistoryOmit
    habit?: HabitOmit
    habitRecord?: HabitRecordOmit
    learningPlan?: LearningPlanOmit
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
   * Count Type FamilyCountOutputType
   */

  export type FamilyCountOutputType = {
    members: number
    coupons: number
  }

  export type FamilyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | FamilyCountOutputTypeCountMembersArgs
    coupons?: boolean | FamilyCountOutputTypeCountCouponsArgs
  }

  // Custom InputTypes
  /**
   * FamilyCountOutputType without action
   */
  export type FamilyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyCountOutputType
     */
    select?: FamilyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FamilyCountOutputType without action
   */
  export type FamilyCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * FamilyCountOutputType without action
   */
  export type FamilyCountOutputTypeCountCouponsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CouponWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    habits: number
    records: number
    learningPlans: number
    pets: number
    wishes: number
    medals: number
    history: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habits?: boolean | UserCountOutputTypeCountHabitsArgs
    records?: boolean | UserCountOutputTypeCountRecordsArgs
    learningPlans?: boolean | UserCountOutputTypeCountLearningPlansArgs
    pets?: boolean | UserCountOutputTypeCountPetsArgs
    wishes?: boolean | UserCountOutputTypeCountWishesArgs
    medals?: boolean | UserCountOutputTypeCountMedalsArgs
    history?: boolean | UserCountOutputTypeCountHistoryArgs
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
  export type UserCountOutputTypeCountHabitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitRecordWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLearningPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LearningPlanWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWishesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WishWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMedalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedalWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoryWhereInput
  }


  /**
   * Count Type HabitCountOutputType
   */

  export type HabitCountOutputType = {
    records: number
  }

  export type HabitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    records?: boolean | HabitCountOutputTypeCountRecordsArgs
  }

  // Custom InputTypes
  /**
   * HabitCountOutputType without action
   */
  export type HabitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitCountOutputType
     */
    select?: HabitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HabitCountOutputType without action
   */
  export type HabitCountOutputTypeCountRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitRecordWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Family
   */

  export type AggregateFamily = {
    _count: FamilyCountAggregateOutputType | null
    _avg: FamilyAvgAggregateOutputType | null
    _sum: FamilySumAggregateOutputType | null
    _min: FamilyMinAggregateOutputType | null
    _max: FamilyMaxAggregateOutputType | null
  }

  export type FamilyAvgAggregateOutputType = {
    vipExpiry: number | null
  }

  export type FamilySumAggregateOutputType = {
    vipExpiry: bigint | null
  }

  export type FamilyMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    isVip: boolean | null
    vipExpiry: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FamilyMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    isVip: boolean | null
    vipExpiry: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FamilyCountAggregateOutputType = {
    id: number
    username: number
    password: number
    isVip: number
    vipExpiry: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FamilyAvgAggregateInputType = {
    vipExpiry?: true
  }

  export type FamilySumAggregateInputType = {
    vipExpiry?: true
  }

  export type FamilyMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    isVip?: true
    vipExpiry?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FamilyMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    isVip?: true
    vipExpiry?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FamilyCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    isVip?: true
    vipExpiry?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FamilyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Family to aggregate.
     */
    where?: FamilyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Families to fetch.
     */
    orderBy?: FamilyOrderByWithRelationInput | FamilyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FamilyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Families from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Families.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Families
    **/
    _count?: true | FamilyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FamilyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FamilySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FamilyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FamilyMaxAggregateInputType
  }

  export type GetFamilyAggregateType<T extends FamilyAggregateArgs> = {
        [P in keyof T & keyof AggregateFamily]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFamily[P]>
      : GetScalarType<T[P], AggregateFamily[P]>
  }




  export type FamilyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FamilyWhereInput
    orderBy?: FamilyOrderByWithAggregationInput | FamilyOrderByWithAggregationInput[]
    by: FamilyScalarFieldEnum[] | FamilyScalarFieldEnum
    having?: FamilyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FamilyCountAggregateInputType | true
    _avg?: FamilyAvgAggregateInputType
    _sum?: FamilySumAggregateInputType
    _min?: FamilyMinAggregateInputType
    _max?: FamilyMaxAggregateInputType
  }

  export type FamilyGroupByOutputType = {
    id: string
    username: string
    password: string
    isVip: boolean
    vipExpiry: bigint
    createdAt: Date
    updatedAt: Date
    _count: FamilyCountAggregateOutputType | null
    _avg: FamilyAvgAggregateOutputType | null
    _sum: FamilySumAggregateOutputType | null
    _min: FamilyMinAggregateOutputType | null
    _max: FamilyMaxAggregateOutputType | null
  }

  type GetFamilyGroupByPayload<T extends FamilyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FamilyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FamilyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FamilyGroupByOutputType[P]>
            : GetScalarType<T[P], FamilyGroupByOutputType[P]>
        }
      >
    >


  export type FamilySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    isVip?: boolean
    vipExpiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    members?: boolean | Family$membersArgs<ExtArgs>
    coupons?: boolean | Family$couponsArgs<ExtArgs>
    _count?: boolean | FamilyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["family"]>



  export type FamilySelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    isVip?: boolean
    vipExpiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FamilyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "isVip" | "vipExpiry" | "createdAt" | "updatedAt", ExtArgs["result"]["family"]>
  export type FamilyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | Family$membersArgs<ExtArgs>
    coupons?: boolean | Family$couponsArgs<ExtArgs>
    _count?: boolean | FamilyCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FamilyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Family"
    objects: {
      members: Prisma.$UserPayload<ExtArgs>[]
      coupons: Prisma.$CouponPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
      isVip: boolean
      vipExpiry: bigint
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["family"]>
    composites: {}
  }

  type FamilyGetPayload<S extends boolean | null | undefined | FamilyDefaultArgs> = $Result.GetResult<Prisma.$FamilyPayload, S>

  type FamilyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FamilyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FamilyCountAggregateInputType | true
    }

  export interface FamilyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Family'], meta: { name: 'Family' } }
    /**
     * Find zero or one Family that matches the filter.
     * @param {FamilyFindUniqueArgs} args - Arguments to find a Family
     * @example
     * // Get one Family
     * const family = await prisma.family.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FamilyFindUniqueArgs>(args: SelectSubset<T, FamilyFindUniqueArgs<ExtArgs>>): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Family that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FamilyFindUniqueOrThrowArgs} args - Arguments to find a Family
     * @example
     * // Get one Family
     * const family = await prisma.family.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FamilyFindUniqueOrThrowArgs>(args: SelectSubset<T, FamilyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Family that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyFindFirstArgs} args - Arguments to find a Family
     * @example
     * // Get one Family
     * const family = await prisma.family.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FamilyFindFirstArgs>(args?: SelectSubset<T, FamilyFindFirstArgs<ExtArgs>>): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Family that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyFindFirstOrThrowArgs} args - Arguments to find a Family
     * @example
     * // Get one Family
     * const family = await prisma.family.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FamilyFindFirstOrThrowArgs>(args?: SelectSubset<T, FamilyFindFirstOrThrowArgs<ExtArgs>>): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Families that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Families
     * const families = await prisma.family.findMany()
     * 
     * // Get first 10 Families
     * const families = await prisma.family.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const familyWithIdOnly = await prisma.family.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FamilyFindManyArgs>(args?: SelectSubset<T, FamilyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Family.
     * @param {FamilyCreateArgs} args - Arguments to create a Family.
     * @example
     * // Create one Family
     * const Family = await prisma.family.create({
     *   data: {
     *     // ... data to create a Family
     *   }
     * })
     * 
     */
    create<T extends FamilyCreateArgs>(args: SelectSubset<T, FamilyCreateArgs<ExtArgs>>): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Families.
     * @param {FamilyCreateManyArgs} args - Arguments to create many Families.
     * @example
     * // Create many Families
     * const family = await prisma.family.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FamilyCreateManyArgs>(args?: SelectSubset<T, FamilyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Family.
     * @param {FamilyDeleteArgs} args - Arguments to delete one Family.
     * @example
     * // Delete one Family
     * const Family = await prisma.family.delete({
     *   where: {
     *     // ... filter to delete one Family
     *   }
     * })
     * 
     */
    delete<T extends FamilyDeleteArgs>(args: SelectSubset<T, FamilyDeleteArgs<ExtArgs>>): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Family.
     * @param {FamilyUpdateArgs} args - Arguments to update one Family.
     * @example
     * // Update one Family
     * const family = await prisma.family.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FamilyUpdateArgs>(args: SelectSubset<T, FamilyUpdateArgs<ExtArgs>>): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Families.
     * @param {FamilyDeleteManyArgs} args - Arguments to filter Families to delete.
     * @example
     * // Delete a few Families
     * const { count } = await prisma.family.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FamilyDeleteManyArgs>(args?: SelectSubset<T, FamilyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Families.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Families
     * const family = await prisma.family.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FamilyUpdateManyArgs>(args: SelectSubset<T, FamilyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Family.
     * @param {FamilyUpsertArgs} args - Arguments to update or create a Family.
     * @example
     * // Update or create a Family
     * const family = await prisma.family.upsert({
     *   create: {
     *     // ... data to create a Family
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Family we want to update
     *   }
     * })
     */
    upsert<T extends FamilyUpsertArgs>(args: SelectSubset<T, FamilyUpsertArgs<ExtArgs>>): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Families.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyCountArgs} args - Arguments to filter Families to count.
     * @example
     * // Count the number of Families
     * const count = await prisma.family.count({
     *   where: {
     *     // ... the filter for the Families we want to count
     *   }
     * })
    **/
    count<T extends FamilyCountArgs>(
      args?: Subset<T, FamilyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FamilyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Family.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FamilyAggregateArgs>(args: Subset<T, FamilyAggregateArgs>): Prisma.PrismaPromise<GetFamilyAggregateType<T>>

    /**
     * Group by Family.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyGroupByArgs} args - Group by arguments.
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
      T extends FamilyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FamilyGroupByArgs['orderBy'] }
        : { orderBy?: FamilyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FamilyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFamilyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Family model
   */
  readonly fields: FamilyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Family.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FamilyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    members<T extends Family$membersArgs<ExtArgs> = {}>(args?: Subset<T, Family$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    coupons<T extends Family$couponsArgs<ExtArgs> = {}>(args?: Subset<T, Family$couponsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Family model
   */
  interface FamilyFieldRefs {
    readonly id: FieldRef<"Family", 'String'>
    readonly username: FieldRef<"Family", 'String'>
    readonly password: FieldRef<"Family", 'String'>
    readonly isVip: FieldRef<"Family", 'Boolean'>
    readonly vipExpiry: FieldRef<"Family", 'BigInt'>
    readonly createdAt: FieldRef<"Family", 'DateTime'>
    readonly updatedAt: FieldRef<"Family", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Family findUnique
   */
  export type FamilyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Family
     */
    omit?: FamilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * Filter, which Family to fetch.
     */
    where: FamilyWhereUniqueInput
  }

  /**
   * Family findUniqueOrThrow
   */
  export type FamilyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Family
     */
    omit?: FamilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * Filter, which Family to fetch.
     */
    where: FamilyWhereUniqueInput
  }

  /**
   * Family findFirst
   */
  export type FamilyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Family
     */
    omit?: FamilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * Filter, which Family to fetch.
     */
    where?: FamilyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Families to fetch.
     */
    orderBy?: FamilyOrderByWithRelationInput | FamilyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Families.
     */
    cursor?: FamilyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Families from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Families.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Families.
     */
    distinct?: FamilyScalarFieldEnum | FamilyScalarFieldEnum[]
  }

  /**
   * Family findFirstOrThrow
   */
  export type FamilyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Family
     */
    omit?: FamilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * Filter, which Family to fetch.
     */
    where?: FamilyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Families to fetch.
     */
    orderBy?: FamilyOrderByWithRelationInput | FamilyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Families.
     */
    cursor?: FamilyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Families from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Families.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Families.
     */
    distinct?: FamilyScalarFieldEnum | FamilyScalarFieldEnum[]
  }

  /**
   * Family findMany
   */
  export type FamilyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Family
     */
    omit?: FamilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * Filter, which Families to fetch.
     */
    where?: FamilyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Families to fetch.
     */
    orderBy?: FamilyOrderByWithRelationInput | FamilyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Families.
     */
    cursor?: FamilyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Families from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Families.
     */
    skip?: number
    distinct?: FamilyScalarFieldEnum | FamilyScalarFieldEnum[]
  }

  /**
   * Family create
   */
  export type FamilyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Family
     */
    omit?: FamilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * The data needed to create a Family.
     */
    data: XOR<FamilyCreateInput, FamilyUncheckedCreateInput>
  }

  /**
   * Family createMany
   */
  export type FamilyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Families.
     */
    data: FamilyCreateManyInput | FamilyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Family update
   */
  export type FamilyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Family
     */
    omit?: FamilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * The data needed to update a Family.
     */
    data: XOR<FamilyUpdateInput, FamilyUncheckedUpdateInput>
    /**
     * Choose, which Family to update.
     */
    where: FamilyWhereUniqueInput
  }

  /**
   * Family updateMany
   */
  export type FamilyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Families.
     */
    data: XOR<FamilyUpdateManyMutationInput, FamilyUncheckedUpdateManyInput>
    /**
     * Filter which Families to update
     */
    where?: FamilyWhereInput
    /**
     * Limit how many Families to update.
     */
    limit?: number
  }

  /**
   * Family upsert
   */
  export type FamilyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Family
     */
    omit?: FamilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * The filter to search for the Family to update in case it exists.
     */
    where: FamilyWhereUniqueInput
    /**
     * In case the Family found by the `where` argument doesn't exist, create a new Family with this data.
     */
    create: XOR<FamilyCreateInput, FamilyUncheckedCreateInput>
    /**
     * In case the Family was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FamilyUpdateInput, FamilyUncheckedUpdateInput>
  }

  /**
   * Family delete
   */
  export type FamilyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Family
     */
    omit?: FamilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * Filter which Family to delete.
     */
    where: FamilyWhereUniqueInput
  }

  /**
   * Family deleteMany
   */
  export type FamilyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Families to delete
     */
    where?: FamilyWhereInput
    /**
     * Limit how many Families to delete.
     */
    limit?: number
  }

  /**
   * Family.members
   */
  export type Family$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Family.coupons
   */
  export type Family$couponsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    where?: CouponWhereInput
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    cursor?: CouponWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CouponScalarFieldEnum | CouponScalarFieldEnum[]
  }

  /**
   * Family without action
   */
  export type FamilyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Family
     */
    omit?: FamilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
  }


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
    checkInDays: number | null
  }

  export type UserSumAggregateOutputType = {
    points: number | null
    checkInDays: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    avatar: string | null
    points: number | null
    checkInDays: number | null
    role: string | null
    unlockedPets: string | null
    familyId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    avatar: string | null
    points: number | null
    checkInDays: number | null
    role: string | null
    unlockedPets: string | null
    familyId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    avatar: number
    points: number
    checkInDays: number
    role: number
    unlockedPets: number
    familyId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    points?: true
    checkInDays?: true
  }

  export type UserSumAggregateInputType = {
    points?: true
    checkInDays?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    avatar?: true
    points?: true
    checkInDays?: true
    role?: true
    unlockedPets?: true
    familyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    avatar?: true
    points?: true
    checkInDays?: true
    role?: true
    unlockedPets?: true
    familyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    avatar?: true
    points?: true
    checkInDays?: true
    role?: true
    unlockedPets?: true
    familyId?: true
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
    name: string
    avatar: string | null
    points: number
    checkInDays: number
    role: string
    unlockedPets: string | null
    familyId: string
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
    name?: boolean
    avatar?: boolean
    points?: boolean
    checkInDays?: boolean
    role?: boolean
    unlockedPets?: boolean
    familyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    family?: boolean | FamilyDefaultArgs<ExtArgs>
    habits?: boolean | User$habitsArgs<ExtArgs>
    records?: boolean | User$recordsArgs<ExtArgs>
    learningPlans?: boolean | User$learningPlansArgs<ExtArgs>
    pets?: boolean | User$petsArgs<ExtArgs>
    wishes?: boolean | User$wishesArgs<ExtArgs>
    medals?: boolean | User$medalsArgs<ExtArgs>
    history?: boolean | User$historyArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    avatar?: boolean
    points?: boolean
    checkInDays?: boolean
    role?: boolean
    unlockedPets?: boolean
    familyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "avatar" | "points" | "checkInDays" | "role" | "unlockedPets" | "familyId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    family?: boolean | FamilyDefaultArgs<ExtArgs>
    habits?: boolean | User$habitsArgs<ExtArgs>
    records?: boolean | User$recordsArgs<ExtArgs>
    learningPlans?: boolean | User$learningPlansArgs<ExtArgs>
    pets?: boolean | User$petsArgs<ExtArgs>
    wishes?: boolean | User$wishesArgs<ExtArgs>
    medals?: boolean | User$medalsArgs<ExtArgs>
    history?: boolean | User$historyArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      family: Prisma.$FamilyPayload<ExtArgs>
      habits: Prisma.$HabitPayload<ExtArgs>[]
      records: Prisma.$HabitRecordPayload<ExtArgs>[]
      learningPlans: Prisma.$LearningPlanPayload<ExtArgs>[]
      pets: Prisma.$PetPayload<ExtArgs>[]
      wishes: Prisma.$WishPayload<ExtArgs>[]
      medals: Prisma.$MedalPayload<ExtArgs>[]
      history: Prisma.$HistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      avatar: string | null
      points: number
      checkInDays: number
      role: string
      unlockedPets: string | null
      familyId: string
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
    family<T extends FamilyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FamilyDefaultArgs<ExtArgs>>): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    habits<T extends User$habitsArgs<ExtArgs> = {}>(args?: Subset<T, User$habitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    records<T extends User$recordsArgs<ExtArgs> = {}>(args?: Subset<T, User$recordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    learningPlans<T extends User$learningPlansArgs<ExtArgs> = {}>(args?: Subset<T, User$learningPlansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pets<T extends User$petsArgs<ExtArgs> = {}>(args?: Subset<T, User$petsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    wishes<T extends User$wishesArgs<ExtArgs> = {}>(args?: Subset<T, User$wishesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WishPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    medals<T extends User$medalsArgs<ExtArgs> = {}>(args?: Subset<T, User$medalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    history<T extends User$historyArgs<ExtArgs> = {}>(args?: Subset<T, User$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly points: FieldRef<"User", 'Int'>
    readonly checkInDays: FieldRef<"User", 'Int'>
    readonly role: FieldRef<"User", 'String'>
    readonly unlockedPets: FieldRef<"User", 'String'>
    readonly familyId: FieldRef<"User", 'String'>
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
   * User.habits
   */
  export type User$habitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    where?: HabitWhereInput
    orderBy?: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[]
    cursor?: HabitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HabitScalarFieldEnum | HabitScalarFieldEnum[]
  }

  /**
   * User.records
   */
  export type User$recordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitRecord
     */
    select?: HabitRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitRecord
     */
    omit?: HabitRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitRecordInclude<ExtArgs> | null
    where?: HabitRecordWhereInput
    orderBy?: HabitRecordOrderByWithRelationInput | HabitRecordOrderByWithRelationInput[]
    cursor?: HabitRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HabitRecordScalarFieldEnum | HabitRecordScalarFieldEnum[]
  }

  /**
   * User.learningPlans
   */
  export type User$learningPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPlan
     */
    select?: LearningPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningPlan
     */
    omit?: LearningPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningPlanInclude<ExtArgs> | null
    where?: LearningPlanWhereInput
    orderBy?: LearningPlanOrderByWithRelationInput | LearningPlanOrderByWithRelationInput[]
    cursor?: LearningPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LearningPlanScalarFieldEnum | LearningPlanScalarFieldEnum[]
  }

  /**
   * User.pets
   */
  export type User$petsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    where?: PetWhereInput
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    cursor?: PetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * User.wishes
   */
  export type User$wishesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wish
     */
    select?: WishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wish
     */
    omit?: WishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishInclude<ExtArgs> | null
    where?: WishWhereInput
    orderBy?: WishOrderByWithRelationInput | WishOrderByWithRelationInput[]
    cursor?: WishWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WishScalarFieldEnum | WishScalarFieldEnum[]
  }

  /**
   * User.medals
   */
  export type User$medalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medal
     */
    select?: MedalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medal
     */
    omit?: MedalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedalInclude<ExtArgs> | null
    where?: MedalWhereInput
    orderBy?: MedalOrderByWithRelationInput | MedalOrderByWithRelationInput[]
    cursor?: MedalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedalScalarFieldEnum | MedalScalarFieldEnum[]
  }

  /**
   * User.history
   */
  export type User$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    where?: HistoryWhereInput
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    cursor?: HistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
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
   * Model Coupon
   */

  export type AggregateCoupon = {
    _count: CouponCountAggregateOutputType | null
    _avg: CouponAvgAggregateOutputType | null
    _sum: CouponSumAggregateOutputType | null
    _min: CouponMinAggregateOutputType | null
    _max: CouponMaxAggregateOutputType | null
  }

  export type CouponAvgAggregateOutputType = {
    days: number | null
  }

  export type CouponSumAggregateOutputType = {
    days: number | null
  }

  export type CouponMinAggregateOutputType = {
    id: string | null
    code: string | null
    days: number | null
    used: boolean | null
    usedByFamilyId: string | null
    usedAt: Date | null
    createdAt: Date | null
  }

  export type CouponMaxAggregateOutputType = {
    id: string | null
    code: string | null
    days: number | null
    used: boolean | null
    usedByFamilyId: string | null
    usedAt: Date | null
    createdAt: Date | null
  }

  export type CouponCountAggregateOutputType = {
    id: number
    code: number
    days: number
    used: number
    usedByFamilyId: number
    usedAt: number
    createdAt: number
    _all: number
  }


  export type CouponAvgAggregateInputType = {
    days?: true
  }

  export type CouponSumAggregateInputType = {
    days?: true
  }

  export type CouponMinAggregateInputType = {
    id?: true
    code?: true
    days?: true
    used?: true
    usedByFamilyId?: true
    usedAt?: true
    createdAt?: true
  }

  export type CouponMaxAggregateInputType = {
    id?: true
    code?: true
    days?: true
    used?: true
    usedByFamilyId?: true
    usedAt?: true
    createdAt?: true
  }

  export type CouponCountAggregateInputType = {
    id?: true
    code?: true
    days?: true
    used?: true
    usedByFamilyId?: true
    usedAt?: true
    createdAt?: true
    _all?: true
  }

  export type CouponAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coupon to aggregate.
     */
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Coupons
    **/
    _count?: true | CouponCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CouponAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CouponSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CouponMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CouponMaxAggregateInputType
  }

  export type GetCouponAggregateType<T extends CouponAggregateArgs> = {
        [P in keyof T & keyof AggregateCoupon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoupon[P]>
      : GetScalarType<T[P], AggregateCoupon[P]>
  }




  export type CouponGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CouponWhereInput
    orderBy?: CouponOrderByWithAggregationInput | CouponOrderByWithAggregationInput[]
    by: CouponScalarFieldEnum[] | CouponScalarFieldEnum
    having?: CouponScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CouponCountAggregateInputType | true
    _avg?: CouponAvgAggregateInputType
    _sum?: CouponSumAggregateInputType
    _min?: CouponMinAggregateInputType
    _max?: CouponMaxAggregateInputType
  }

  export type CouponGroupByOutputType = {
    id: string
    code: string
    days: number
    used: boolean
    usedByFamilyId: string | null
    usedAt: Date | null
    createdAt: Date
    _count: CouponCountAggregateOutputType | null
    _avg: CouponAvgAggregateOutputType | null
    _sum: CouponSumAggregateOutputType | null
    _min: CouponMinAggregateOutputType | null
    _max: CouponMaxAggregateOutputType | null
  }

  type GetCouponGroupByPayload<T extends CouponGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CouponGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CouponGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CouponGroupByOutputType[P]>
            : GetScalarType<T[P], CouponGroupByOutputType[P]>
        }
      >
    >


  export type CouponSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    days?: boolean
    used?: boolean
    usedByFamilyId?: boolean
    usedAt?: boolean
    createdAt?: boolean
    family?: boolean | Coupon$familyArgs<ExtArgs>
  }, ExtArgs["result"]["coupon"]>



  export type CouponSelectScalar = {
    id?: boolean
    code?: boolean
    days?: boolean
    used?: boolean
    usedByFamilyId?: boolean
    usedAt?: boolean
    createdAt?: boolean
  }

  export type CouponOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "days" | "used" | "usedByFamilyId" | "usedAt" | "createdAt", ExtArgs["result"]["coupon"]>
  export type CouponInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    family?: boolean | Coupon$familyArgs<ExtArgs>
  }

  export type $CouponPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Coupon"
    objects: {
      family: Prisma.$FamilyPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      days: number
      used: boolean
      usedByFamilyId: string | null
      usedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["coupon"]>
    composites: {}
  }

  type CouponGetPayload<S extends boolean | null | undefined | CouponDefaultArgs> = $Result.GetResult<Prisma.$CouponPayload, S>

  type CouponCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CouponFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CouponCountAggregateInputType | true
    }

  export interface CouponDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Coupon'], meta: { name: 'Coupon' } }
    /**
     * Find zero or one Coupon that matches the filter.
     * @param {CouponFindUniqueArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CouponFindUniqueArgs>(args: SelectSubset<T, CouponFindUniqueArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Coupon that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CouponFindUniqueOrThrowArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CouponFindUniqueOrThrowArgs>(args: SelectSubset<T, CouponFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Coupon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponFindFirstArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CouponFindFirstArgs>(args?: SelectSubset<T, CouponFindFirstArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Coupon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponFindFirstOrThrowArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CouponFindFirstOrThrowArgs>(args?: SelectSubset<T, CouponFindFirstOrThrowArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Coupons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Coupons
     * const coupons = await prisma.coupon.findMany()
     * 
     * // Get first 10 Coupons
     * const coupons = await prisma.coupon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const couponWithIdOnly = await prisma.coupon.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CouponFindManyArgs>(args?: SelectSubset<T, CouponFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Coupon.
     * @param {CouponCreateArgs} args - Arguments to create a Coupon.
     * @example
     * // Create one Coupon
     * const Coupon = await prisma.coupon.create({
     *   data: {
     *     // ... data to create a Coupon
     *   }
     * })
     * 
     */
    create<T extends CouponCreateArgs>(args: SelectSubset<T, CouponCreateArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Coupons.
     * @param {CouponCreateManyArgs} args - Arguments to create many Coupons.
     * @example
     * // Create many Coupons
     * const coupon = await prisma.coupon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CouponCreateManyArgs>(args?: SelectSubset<T, CouponCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Coupon.
     * @param {CouponDeleteArgs} args - Arguments to delete one Coupon.
     * @example
     * // Delete one Coupon
     * const Coupon = await prisma.coupon.delete({
     *   where: {
     *     // ... filter to delete one Coupon
     *   }
     * })
     * 
     */
    delete<T extends CouponDeleteArgs>(args: SelectSubset<T, CouponDeleteArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Coupon.
     * @param {CouponUpdateArgs} args - Arguments to update one Coupon.
     * @example
     * // Update one Coupon
     * const coupon = await prisma.coupon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CouponUpdateArgs>(args: SelectSubset<T, CouponUpdateArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Coupons.
     * @param {CouponDeleteManyArgs} args - Arguments to filter Coupons to delete.
     * @example
     * // Delete a few Coupons
     * const { count } = await prisma.coupon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CouponDeleteManyArgs>(args?: SelectSubset<T, CouponDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Coupons
     * const coupon = await prisma.coupon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CouponUpdateManyArgs>(args: SelectSubset<T, CouponUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Coupon.
     * @param {CouponUpsertArgs} args - Arguments to update or create a Coupon.
     * @example
     * // Update or create a Coupon
     * const coupon = await prisma.coupon.upsert({
     *   create: {
     *     // ... data to create a Coupon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Coupon we want to update
     *   }
     * })
     */
    upsert<T extends CouponUpsertArgs>(args: SelectSubset<T, CouponUpsertArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Coupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponCountArgs} args - Arguments to filter Coupons to count.
     * @example
     * // Count the number of Coupons
     * const count = await prisma.coupon.count({
     *   where: {
     *     // ... the filter for the Coupons we want to count
     *   }
     * })
    **/
    count<T extends CouponCountArgs>(
      args?: Subset<T, CouponCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CouponCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Coupon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CouponAggregateArgs>(args: Subset<T, CouponAggregateArgs>): Prisma.PrismaPromise<GetCouponAggregateType<T>>

    /**
     * Group by Coupon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponGroupByArgs} args - Group by arguments.
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
      T extends CouponGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CouponGroupByArgs['orderBy'] }
        : { orderBy?: CouponGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CouponGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCouponGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Coupon model
   */
  readonly fields: CouponFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Coupon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CouponClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    family<T extends Coupon$familyArgs<ExtArgs> = {}>(args?: Subset<T, Coupon$familyArgs<ExtArgs>>): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Coupon model
   */
  interface CouponFieldRefs {
    readonly id: FieldRef<"Coupon", 'String'>
    readonly code: FieldRef<"Coupon", 'String'>
    readonly days: FieldRef<"Coupon", 'Int'>
    readonly used: FieldRef<"Coupon", 'Boolean'>
    readonly usedByFamilyId: FieldRef<"Coupon", 'String'>
    readonly usedAt: FieldRef<"Coupon", 'DateTime'>
    readonly createdAt: FieldRef<"Coupon", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Coupon findUnique
   */
  export type CouponFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter, which Coupon to fetch.
     */
    where: CouponWhereUniqueInput
  }

  /**
   * Coupon findUniqueOrThrow
   */
  export type CouponFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter, which Coupon to fetch.
     */
    where: CouponWhereUniqueInput
  }

  /**
   * Coupon findFirst
   */
  export type CouponFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter, which Coupon to fetch.
     */
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coupons.
     */
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coupons.
     */
    distinct?: CouponScalarFieldEnum | CouponScalarFieldEnum[]
  }

  /**
   * Coupon findFirstOrThrow
   */
  export type CouponFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter, which Coupon to fetch.
     */
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coupons.
     */
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coupons.
     */
    distinct?: CouponScalarFieldEnum | CouponScalarFieldEnum[]
  }

  /**
   * Coupon findMany
   */
  export type CouponFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter, which Coupons to fetch.
     */
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Coupons.
     */
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    distinct?: CouponScalarFieldEnum | CouponScalarFieldEnum[]
  }

  /**
   * Coupon create
   */
  export type CouponCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * The data needed to create a Coupon.
     */
    data: XOR<CouponCreateInput, CouponUncheckedCreateInput>
  }

  /**
   * Coupon createMany
   */
  export type CouponCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Coupons.
     */
    data: CouponCreateManyInput | CouponCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Coupon update
   */
  export type CouponUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * The data needed to update a Coupon.
     */
    data: XOR<CouponUpdateInput, CouponUncheckedUpdateInput>
    /**
     * Choose, which Coupon to update.
     */
    where: CouponWhereUniqueInput
  }

  /**
   * Coupon updateMany
   */
  export type CouponUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Coupons.
     */
    data: XOR<CouponUpdateManyMutationInput, CouponUncheckedUpdateManyInput>
    /**
     * Filter which Coupons to update
     */
    where?: CouponWhereInput
    /**
     * Limit how many Coupons to update.
     */
    limit?: number
  }

  /**
   * Coupon upsert
   */
  export type CouponUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * The filter to search for the Coupon to update in case it exists.
     */
    where: CouponWhereUniqueInput
    /**
     * In case the Coupon found by the `where` argument doesn't exist, create a new Coupon with this data.
     */
    create: XOR<CouponCreateInput, CouponUncheckedCreateInput>
    /**
     * In case the Coupon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CouponUpdateInput, CouponUncheckedUpdateInput>
  }

  /**
   * Coupon delete
   */
  export type CouponDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter which Coupon to delete.
     */
    where: CouponWhereUniqueInput
  }

  /**
   * Coupon deleteMany
   */
  export type CouponDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coupons to delete
     */
    where?: CouponWhereInput
    /**
     * Limit how many Coupons to delete.
     */
    limit?: number
  }

  /**
   * Coupon.family
   */
  export type Coupon$familyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Family
     */
    omit?: FamilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
    where?: FamilyWhereInput
  }

  /**
   * Coupon without action
   */
  export type CouponDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
  }


  /**
   * Model Pet
   */

  export type AggregatePet = {
    _count: PetCountAggregateOutputType | null
    _avg: PetAvgAggregateOutputType | null
    _sum: PetSumAggregateOutputType | null
    _min: PetMinAggregateOutputType | null
    _max: PetMaxAggregateOutputType | null
  }

  export type PetAvgAggregateOutputType = {
    level: number | null
    intimacy: number | null
    fullness: number | null
    cleanliness: number | null
    mood: number | null
  }

  export type PetSumAggregateOutputType = {
    level: number | null
    intimacy: number | null
    fullness: number | null
    cleanliness: number | null
    mood: number | null
  }

  export type PetMinAggregateOutputType = {
    id: string | null
    name: string | null
    typeId: string | null
    level: number | null
    intimacy: number | null
    fullness: number | null
    cleanliness: number | null
    mood: number | null
    gender: string | null
    isActive: boolean | null
    lastInteraction: Date | null
    userId: string | null
  }

  export type PetMaxAggregateOutputType = {
    id: string | null
    name: string | null
    typeId: string | null
    level: number | null
    intimacy: number | null
    fullness: number | null
    cleanliness: number | null
    mood: number | null
    gender: string | null
    isActive: boolean | null
    lastInteraction: Date | null
    userId: string | null
  }

  export type PetCountAggregateOutputType = {
    id: number
    name: number
    typeId: number
    level: number
    intimacy: number
    fullness: number
    cleanliness: number
    mood: number
    gender: number
    isActive: number
    lastInteraction: number
    userId: number
    _all: number
  }


  export type PetAvgAggregateInputType = {
    level?: true
    intimacy?: true
    fullness?: true
    cleanliness?: true
    mood?: true
  }

  export type PetSumAggregateInputType = {
    level?: true
    intimacy?: true
    fullness?: true
    cleanliness?: true
    mood?: true
  }

  export type PetMinAggregateInputType = {
    id?: true
    name?: true
    typeId?: true
    level?: true
    intimacy?: true
    fullness?: true
    cleanliness?: true
    mood?: true
    gender?: true
    isActive?: true
    lastInteraction?: true
    userId?: true
  }

  export type PetMaxAggregateInputType = {
    id?: true
    name?: true
    typeId?: true
    level?: true
    intimacy?: true
    fullness?: true
    cleanliness?: true
    mood?: true
    gender?: true
    isActive?: true
    lastInteraction?: true
    userId?: true
  }

  export type PetCountAggregateInputType = {
    id?: true
    name?: true
    typeId?: true
    level?: true
    intimacy?: true
    fullness?: true
    cleanliness?: true
    mood?: true
    gender?: true
    isActive?: true
    lastInteraction?: true
    userId?: true
    _all?: true
  }

  export type PetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pet to aggregate.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pets
    **/
    _count?: true | PetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PetMaxAggregateInputType
  }

  export type GetPetAggregateType<T extends PetAggregateArgs> = {
        [P in keyof T & keyof AggregatePet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePet[P]>
      : GetScalarType<T[P], AggregatePet[P]>
  }




  export type PetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetWhereInput
    orderBy?: PetOrderByWithAggregationInput | PetOrderByWithAggregationInput[]
    by: PetScalarFieldEnum[] | PetScalarFieldEnum
    having?: PetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PetCountAggregateInputType | true
    _avg?: PetAvgAggregateInputType
    _sum?: PetSumAggregateInputType
    _min?: PetMinAggregateInputType
    _max?: PetMaxAggregateInputType
  }

  export type PetGroupByOutputType = {
    id: string
    name: string
    typeId: string
    level: number
    intimacy: number
    fullness: number
    cleanliness: number
    mood: number
    gender: string
    isActive: boolean
    lastInteraction: Date
    userId: string
    _count: PetCountAggregateOutputType | null
    _avg: PetAvgAggregateOutputType | null
    _sum: PetSumAggregateOutputType | null
    _min: PetMinAggregateOutputType | null
    _max: PetMaxAggregateOutputType | null
  }

  type GetPetGroupByPayload<T extends PetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PetGroupByOutputType[P]>
            : GetScalarType<T[P], PetGroupByOutputType[P]>
        }
      >
    >


  export type PetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    typeId?: boolean
    level?: boolean
    intimacy?: boolean
    fullness?: boolean
    cleanliness?: boolean
    mood?: boolean
    gender?: boolean
    isActive?: boolean
    lastInteraction?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pet"]>



  export type PetSelectScalar = {
    id?: boolean
    name?: boolean
    typeId?: boolean
    level?: boolean
    intimacy?: boolean
    fullness?: boolean
    cleanliness?: boolean
    mood?: boolean
    gender?: boolean
    isActive?: boolean
    lastInteraction?: boolean
    userId?: boolean
  }

  export type PetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "typeId" | "level" | "intimacy" | "fullness" | "cleanliness" | "mood" | "gender" | "isActive" | "lastInteraction" | "userId", ExtArgs["result"]["pet"]>
  export type PetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pet"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      typeId: string
      level: number
      intimacy: number
      fullness: number
      cleanliness: number
      mood: number
      gender: string
      isActive: boolean
      lastInteraction: Date
      userId: string
    }, ExtArgs["result"]["pet"]>
    composites: {}
  }

  type PetGetPayload<S extends boolean | null | undefined | PetDefaultArgs> = $Result.GetResult<Prisma.$PetPayload, S>

  type PetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PetCountAggregateInputType | true
    }

  export interface PetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pet'], meta: { name: 'Pet' } }
    /**
     * Find zero or one Pet that matches the filter.
     * @param {PetFindUniqueArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PetFindUniqueArgs>(args: SelectSubset<T, PetFindUniqueArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PetFindUniqueOrThrowArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PetFindUniqueOrThrowArgs>(args: SelectSubset<T, PetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetFindFirstArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PetFindFirstArgs>(args?: SelectSubset<T, PetFindFirstArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetFindFirstOrThrowArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PetFindFirstOrThrowArgs>(args?: SelectSubset<T, PetFindFirstOrThrowArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pets
     * const pets = await prisma.pet.findMany()
     * 
     * // Get first 10 Pets
     * const pets = await prisma.pet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const petWithIdOnly = await prisma.pet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PetFindManyArgs>(args?: SelectSubset<T, PetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pet.
     * @param {PetCreateArgs} args - Arguments to create a Pet.
     * @example
     * // Create one Pet
     * const Pet = await prisma.pet.create({
     *   data: {
     *     // ... data to create a Pet
     *   }
     * })
     * 
     */
    create<T extends PetCreateArgs>(args: SelectSubset<T, PetCreateArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pets.
     * @param {PetCreateManyArgs} args - Arguments to create many Pets.
     * @example
     * // Create many Pets
     * const pet = await prisma.pet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PetCreateManyArgs>(args?: SelectSubset<T, PetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pet.
     * @param {PetDeleteArgs} args - Arguments to delete one Pet.
     * @example
     * // Delete one Pet
     * const Pet = await prisma.pet.delete({
     *   where: {
     *     // ... filter to delete one Pet
     *   }
     * })
     * 
     */
    delete<T extends PetDeleteArgs>(args: SelectSubset<T, PetDeleteArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pet.
     * @param {PetUpdateArgs} args - Arguments to update one Pet.
     * @example
     * // Update one Pet
     * const pet = await prisma.pet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PetUpdateArgs>(args: SelectSubset<T, PetUpdateArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pets.
     * @param {PetDeleteManyArgs} args - Arguments to filter Pets to delete.
     * @example
     * // Delete a few Pets
     * const { count } = await prisma.pet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PetDeleteManyArgs>(args?: SelectSubset<T, PetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pets
     * const pet = await prisma.pet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PetUpdateManyArgs>(args: SelectSubset<T, PetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pet.
     * @param {PetUpsertArgs} args - Arguments to update or create a Pet.
     * @example
     * // Update or create a Pet
     * const pet = await prisma.pet.upsert({
     *   create: {
     *     // ... data to create a Pet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pet we want to update
     *   }
     * })
     */
    upsert<T extends PetUpsertArgs>(args: SelectSubset<T, PetUpsertArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetCountArgs} args - Arguments to filter Pets to count.
     * @example
     * // Count the number of Pets
     * const count = await prisma.pet.count({
     *   where: {
     *     // ... the filter for the Pets we want to count
     *   }
     * })
    **/
    count<T extends PetCountArgs>(
      args?: Subset<T, PetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PetAggregateArgs>(args: Subset<T, PetAggregateArgs>): Prisma.PrismaPromise<GetPetAggregateType<T>>

    /**
     * Group by Pet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetGroupByArgs} args - Group by arguments.
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
      T extends PetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PetGroupByArgs['orderBy'] }
        : { orderBy?: PetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pet model
   */
  readonly fields: PetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Pet model
   */
  interface PetFieldRefs {
    readonly id: FieldRef<"Pet", 'String'>
    readonly name: FieldRef<"Pet", 'String'>
    readonly typeId: FieldRef<"Pet", 'String'>
    readonly level: FieldRef<"Pet", 'Int'>
    readonly intimacy: FieldRef<"Pet", 'Int'>
    readonly fullness: FieldRef<"Pet", 'Int'>
    readonly cleanliness: FieldRef<"Pet", 'Int'>
    readonly mood: FieldRef<"Pet", 'Int'>
    readonly gender: FieldRef<"Pet", 'String'>
    readonly isActive: FieldRef<"Pet", 'Boolean'>
    readonly lastInteraction: FieldRef<"Pet", 'DateTime'>
    readonly userId: FieldRef<"Pet", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Pet findUnique
   */
  export type PetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet findUniqueOrThrow
   */
  export type PetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet findFirst
   */
  export type PetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pets.
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pets.
     */
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Pet findFirstOrThrow
   */
  export type PetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pets.
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pets.
     */
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Pet findMany
   */
  export type PetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pets to fetch.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pets.
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Pet create
   */
  export type PetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * The data needed to create a Pet.
     */
    data: XOR<PetCreateInput, PetUncheckedCreateInput>
  }

  /**
   * Pet createMany
   */
  export type PetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pets.
     */
    data: PetCreateManyInput | PetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pet update
   */
  export type PetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * The data needed to update a Pet.
     */
    data: XOR<PetUpdateInput, PetUncheckedUpdateInput>
    /**
     * Choose, which Pet to update.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet updateMany
   */
  export type PetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pets.
     */
    data: XOR<PetUpdateManyMutationInput, PetUncheckedUpdateManyInput>
    /**
     * Filter which Pets to update
     */
    where?: PetWhereInput
    /**
     * Limit how many Pets to update.
     */
    limit?: number
  }

  /**
   * Pet upsert
   */
  export type PetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * The filter to search for the Pet to update in case it exists.
     */
    where: PetWhereUniqueInput
    /**
     * In case the Pet found by the `where` argument doesn't exist, create a new Pet with this data.
     */
    create: XOR<PetCreateInput, PetUncheckedCreateInput>
    /**
     * In case the Pet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PetUpdateInput, PetUncheckedUpdateInput>
  }

  /**
   * Pet delete
   */
  export type PetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter which Pet to delete.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet deleteMany
   */
  export type PetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pets to delete
     */
    where?: PetWhereInput
    /**
     * Limit how many Pets to delete.
     */
    limit?: number
  }

  /**
   * Pet without action
   */
  export type PetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
  }


  /**
   * Model Wish
   */

  export type AggregateWish = {
    _count: WishCountAggregateOutputType | null
    _avg: WishAvgAggregateOutputType | null
    _sum: WishSumAggregateOutputType | null
    _min: WishMinAggregateOutputType | null
    _max: WishMaxAggregateOutputType | null
  }

  export type WishAvgAggregateOutputType = {
    cost: number | null
    count: number | null
  }

  export type WishSumAggregateOutputType = {
    cost: number | null
    count: number | null
  }

  export type WishMinAggregateOutputType = {
    id: string | null
    title: string | null
    icon: string | null
    cost: number | null
    category: string | null
    repeatType: string | null
    count: number | null
    userId: string | null
    createdAt: Date | null
  }

  export type WishMaxAggregateOutputType = {
    id: string | null
    title: string | null
    icon: string | null
    cost: number | null
    category: string | null
    repeatType: string | null
    count: number | null
    userId: string | null
    createdAt: Date | null
  }

  export type WishCountAggregateOutputType = {
    id: number
    title: number
    icon: number
    cost: number
    category: number
    repeatType: number
    count: number
    userId: number
    createdAt: number
    _all: number
  }


  export type WishAvgAggregateInputType = {
    cost?: true
    count?: true
  }

  export type WishSumAggregateInputType = {
    cost?: true
    count?: true
  }

  export type WishMinAggregateInputType = {
    id?: true
    title?: true
    icon?: true
    cost?: true
    category?: true
    repeatType?: true
    count?: true
    userId?: true
    createdAt?: true
  }

  export type WishMaxAggregateInputType = {
    id?: true
    title?: true
    icon?: true
    cost?: true
    category?: true
    repeatType?: true
    count?: true
    userId?: true
    createdAt?: true
  }

  export type WishCountAggregateInputType = {
    id?: true
    title?: true
    icon?: true
    cost?: true
    category?: true
    repeatType?: true
    count?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type WishAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wish to aggregate.
     */
    where?: WishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wishes to fetch.
     */
    orderBy?: WishOrderByWithRelationInput | WishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wishes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Wishes
    **/
    _count?: true | WishCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WishAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WishSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WishMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WishMaxAggregateInputType
  }

  export type GetWishAggregateType<T extends WishAggregateArgs> = {
        [P in keyof T & keyof AggregateWish]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWish[P]>
      : GetScalarType<T[P], AggregateWish[P]>
  }




  export type WishGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WishWhereInput
    orderBy?: WishOrderByWithAggregationInput | WishOrderByWithAggregationInput[]
    by: WishScalarFieldEnum[] | WishScalarFieldEnum
    having?: WishScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WishCountAggregateInputType | true
    _avg?: WishAvgAggregateInputType
    _sum?: WishSumAggregateInputType
    _min?: WishMinAggregateInputType
    _max?: WishMaxAggregateInputType
  }

  export type WishGroupByOutputType = {
    id: string
    title: string
    icon: string
    cost: number
    category: string
    repeatType: string
    count: number
    userId: string
    createdAt: Date
    _count: WishCountAggregateOutputType | null
    _avg: WishAvgAggregateOutputType | null
    _sum: WishSumAggregateOutputType | null
    _min: WishMinAggregateOutputType | null
    _max: WishMaxAggregateOutputType | null
  }

  type GetWishGroupByPayload<T extends WishGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WishGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WishGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WishGroupByOutputType[P]>
            : GetScalarType<T[P], WishGroupByOutputType[P]>
        }
      >
    >


  export type WishSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    icon?: boolean
    cost?: boolean
    category?: boolean
    repeatType?: boolean
    count?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wish"]>



  export type WishSelectScalar = {
    id?: boolean
    title?: boolean
    icon?: boolean
    cost?: boolean
    category?: boolean
    repeatType?: boolean
    count?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type WishOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "icon" | "cost" | "category" | "repeatType" | "count" | "userId" | "createdAt", ExtArgs["result"]["wish"]>
  export type WishInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WishPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Wish"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      icon: string
      cost: number
      category: string
      repeatType: string
      count: number
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["wish"]>
    composites: {}
  }

  type WishGetPayload<S extends boolean | null | undefined | WishDefaultArgs> = $Result.GetResult<Prisma.$WishPayload, S>

  type WishCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WishFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WishCountAggregateInputType | true
    }

  export interface WishDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Wish'], meta: { name: 'Wish' } }
    /**
     * Find zero or one Wish that matches the filter.
     * @param {WishFindUniqueArgs} args - Arguments to find a Wish
     * @example
     * // Get one Wish
     * const wish = await prisma.wish.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WishFindUniqueArgs>(args: SelectSubset<T, WishFindUniqueArgs<ExtArgs>>): Prisma__WishClient<$Result.GetResult<Prisma.$WishPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Wish that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WishFindUniqueOrThrowArgs} args - Arguments to find a Wish
     * @example
     * // Get one Wish
     * const wish = await prisma.wish.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WishFindUniqueOrThrowArgs>(args: SelectSubset<T, WishFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WishClient<$Result.GetResult<Prisma.$WishPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wish that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishFindFirstArgs} args - Arguments to find a Wish
     * @example
     * // Get one Wish
     * const wish = await prisma.wish.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WishFindFirstArgs>(args?: SelectSubset<T, WishFindFirstArgs<ExtArgs>>): Prisma__WishClient<$Result.GetResult<Prisma.$WishPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wish that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishFindFirstOrThrowArgs} args - Arguments to find a Wish
     * @example
     * // Get one Wish
     * const wish = await prisma.wish.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WishFindFirstOrThrowArgs>(args?: SelectSubset<T, WishFindFirstOrThrowArgs<ExtArgs>>): Prisma__WishClient<$Result.GetResult<Prisma.$WishPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Wishes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wishes
     * const wishes = await prisma.wish.findMany()
     * 
     * // Get first 10 Wishes
     * const wishes = await prisma.wish.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wishWithIdOnly = await prisma.wish.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WishFindManyArgs>(args?: SelectSubset<T, WishFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WishPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Wish.
     * @param {WishCreateArgs} args - Arguments to create a Wish.
     * @example
     * // Create one Wish
     * const Wish = await prisma.wish.create({
     *   data: {
     *     // ... data to create a Wish
     *   }
     * })
     * 
     */
    create<T extends WishCreateArgs>(args: SelectSubset<T, WishCreateArgs<ExtArgs>>): Prisma__WishClient<$Result.GetResult<Prisma.$WishPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Wishes.
     * @param {WishCreateManyArgs} args - Arguments to create many Wishes.
     * @example
     * // Create many Wishes
     * const wish = await prisma.wish.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WishCreateManyArgs>(args?: SelectSubset<T, WishCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Wish.
     * @param {WishDeleteArgs} args - Arguments to delete one Wish.
     * @example
     * // Delete one Wish
     * const Wish = await prisma.wish.delete({
     *   where: {
     *     // ... filter to delete one Wish
     *   }
     * })
     * 
     */
    delete<T extends WishDeleteArgs>(args: SelectSubset<T, WishDeleteArgs<ExtArgs>>): Prisma__WishClient<$Result.GetResult<Prisma.$WishPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Wish.
     * @param {WishUpdateArgs} args - Arguments to update one Wish.
     * @example
     * // Update one Wish
     * const wish = await prisma.wish.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WishUpdateArgs>(args: SelectSubset<T, WishUpdateArgs<ExtArgs>>): Prisma__WishClient<$Result.GetResult<Prisma.$WishPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Wishes.
     * @param {WishDeleteManyArgs} args - Arguments to filter Wishes to delete.
     * @example
     * // Delete a few Wishes
     * const { count } = await prisma.wish.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WishDeleteManyArgs>(args?: SelectSubset<T, WishDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wishes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wishes
     * const wish = await prisma.wish.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WishUpdateManyArgs>(args: SelectSubset<T, WishUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Wish.
     * @param {WishUpsertArgs} args - Arguments to update or create a Wish.
     * @example
     * // Update or create a Wish
     * const wish = await prisma.wish.upsert({
     *   create: {
     *     // ... data to create a Wish
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wish we want to update
     *   }
     * })
     */
    upsert<T extends WishUpsertArgs>(args: SelectSubset<T, WishUpsertArgs<ExtArgs>>): Prisma__WishClient<$Result.GetResult<Prisma.$WishPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Wishes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishCountArgs} args - Arguments to filter Wishes to count.
     * @example
     * // Count the number of Wishes
     * const count = await prisma.wish.count({
     *   where: {
     *     // ... the filter for the Wishes we want to count
     *   }
     * })
    **/
    count<T extends WishCountArgs>(
      args?: Subset<T, WishCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WishCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wish.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WishAggregateArgs>(args: Subset<T, WishAggregateArgs>): Prisma.PrismaPromise<GetWishAggregateType<T>>

    /**
     * Group by Wish.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishGroupByArgs} args - Group by arguments.
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
      T extends WishGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WishGroupByArgs['orderBy'] }
        : { orderBy?: WishGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WishGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWishGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Wish model
   */
  readonly fields: WishFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Wish.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WishClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Wish model
   */
  interface WishFieldRefs {
    readonly id: FieldRef<"Wish", 'String'>
    readonly title: FieldRef<"Wish", 'String'>
    readonly icon: FieldRef<"Wish", 'String'>
    readonly cost: FieldRef<"Wish", 'Int'>
    readonly category: FieldRef<"Wish", 'String'>
    readonly repeatType: FieldRef<"Wish", 'String'>
    readonly count: FieldRef<"Wish", 'Int'>
    readonly userId: FieldRef<"Wish", 'String'>
    readonly createdAt: FieldRef<"Wish", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Wish findUnique
   */
  export type WishFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wish
     */
    select?: WishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wish
     */
    omit?: WishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishInclude<ExtArgs> | null
    /**
     * Filter, which Wish to fetch.
     */
    where: WishWhereUniqueInput
  }

  /**
   * Wish findUniqueOrThrow
   */
  export type WishFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wish
     */
    select?: WishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wish
     */
    omit?: WishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishInclude<ExtArgs> | null
    /**
     * Filter, which Wish to fetch.
     */
    where: WishWhereUniqueInput
  }

  /**
   * Wish findFirst
   */
  export type WishFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wish
     */
    select?: WishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wish
     */
    omit?: WishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishInclude<ExtArgs> | null
    /**
     * Filter, which Wish to fetch.
     */
    where?: WishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wishes to fetch.
     */
    orderBy?: WishOrderByWithRelationInput | WishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wishes.
     */
    cursor?: WishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wishes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wishes.
     */
    distinct?: WishScalarFieldEnum | WishScalarFieldEnum[]
  }

  /**
   * Wish findFirstOrThrow
   */
  export type WishFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wish
     */
    select?: WishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wish
     */
    omit?: WishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishInclude<ExtArgs> | null
    /**
     * Filter, which Wish to fetch.
     */
    where?: WishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wishes to fetch.
     */
    orderBy?: WishOrderByWithRelationInput | WishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wishes.
     */
    cursor?: WishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wishes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wishes.
     */
    distinct?: WishScalarFieldEnum | WishScalarFieldEnum[]
  }

  /**
   * Wish findMany
   */
  export type WishFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wish
     */
    select?: WishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wish
     */
    omit?: WishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishInclude<ExtArgs> | null
    /**
     * Filter, which Wishes to fetch.
     */
    where?: WishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wishes to fetch.
     */
    orderBy?: WishOrderByWithRelationInput | WishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Wishes.
     */
    cursor?: WishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wishes.
     */
    skip?: number
    distinct?: WishScalarFieldEnum | WishScalarFieldEnum[]
  }

  /**
   * Wish create
   */
  export type WishCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wish
     */
    select?: WishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wish
     */
    omit?: WishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishInclude<ExtArgs> | null
    /**
     * The data needed to create a Wish.
     */
    data: XOR<WishCreateInput, WishUncheckedCreateInput>
  }

  /**
   * Wish createMany
   */
  export type WishCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Wishes.
     */
    data: WishCreateManyInput | WishCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Wish update
   */
  export type WishUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wish
     */
    select?: WishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wish
     */
    omit?: WishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishInclude<ExtArgs> | null
    /**
     * The data needed to update a Wish.
     */
    data: XOR<WishUpdateInput, WishUncheckedUpdateInput>
    /**
     * Choose, which Wish to update.
     */
    where: WishWhereUniqueInput
  }

  /**
   * Wish updateMany
   */
  export type WishUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Wishes.
     */
    data: XOR<WishUpdateManyMutationInput, WishUncheckedUpdateManyInput>
    /**
     * Filter which Wishes to update
     */
    where?: WishWhereInput
    /**
     * Limit how many Wishes to update.
     */
    limit?: number
  }

  /**
   * Wish upsert
   */
  export type WishUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wish
     */
    select?: WishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wish
     */
    omit?: WishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishInclude<ExtArgs> | null
    /**
     * The filter to search for the Wish to update in case it exists.
     */
    where: WishWhereUniqueInput
    /**
     * In case the Wish found by the `where` argument doesn't exist, create a new Wish with this data.
     */
    create: XOR<WishCreateInput, WishUncheckedCreateInput>
    /**
     * In case the Wish was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WishUpdateInput, WishUncheckedUpdateInput>
  }

  /**
   * Wish delete
   */
  export type WishDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wish
     */
    select?: WishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wish
     */
    omit?: WishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishInclude<ExtArgs> | null
    /**
     * Filter which Wish to delete.
     */
    where: WishWhereUniqueInput
  }

  /**
   * Wish deleteMany
   */
  export type WishDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wishes to delete
     */
    where?: WishWhereInput
    /**
     * Limit how many Wishes to delete.
     */
    limit?: number
  }

  /**
   * Wish without action
   */
  export type WishDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wish
     */
    select?: WishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wish
     */
    omit?: WishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WishInclude<ExtArgs> | null
  }


  /**
   * Model Medal
   */

  export type AggregateMedal = {
    _count: MedalCountAggregateOutputType | null
    _avg: MedalAvgAggregateOutputType | null
    _sum: MedalSumAggregateOutputType | null
    _min: MedalMinAggregateOutputType | null
    _max: MedalMaxAggregateOutputType | null
  }

  export type MedalAvgAggregateOutputType = {
    target: number | null
    current: number | null
    reward: number | null
  }

  export type MedalSumAggregateOutputType = {
    target: number | null
    current: number | null
    reward: number | null
  }

  export type MedalMinAggregateOutputType = {
    id: string | null
    title: string | null
    icon: string | null
    desc: string | null
    target: number | null
    current: number | null
    unlocked: boolean | null
    reward: number | null
    userId: string | null
  }

  export type MedalMaxAggregateOutputType = {
    id: string | null
    title: string | null
    icon: string | null
    desc: string | null
    target: number | null
    current: number | null
    unlocked: boolean | null
    reward: number | null
    userId: string | null
  }

  export type MedalCountAggregateOutputType = {
    id: number
    title: number
    icon: number
    desc: number
    target: number
    current: number
    unlocked: number
    reward: number
    userId: number
    _all: number
  }


  export type MedalAvgAggregateInputType = {
    target?: true
    current?: true
    reward?: true
  }

  export type MedalSumAggregateInputType = {
    target?: true
    current?: true
    reward?: true
  }

  export type MedalMinAggregateInputType = {
    id?: true
    title?: true
    icon?: true
    desc?: true
    target?: true
    current?: true
    unlocked?: true
    reward?: true
    userId?: true
  }

  export type MedalMaxAggregateInputType = {
    id?: true
    title?: true
    icon?: true
    desc?: true
    target?: true
    current?: true
    unlocked?: true
    reward?: true
    userId?: true
  }

  export type MedalCountAggregateInputType = {
    id?: true
    title?: true
    icon?: true
    desc?: true
    target?: true
    current?: true
    unlocked?: true
    reward?: true
    userId?: true
    _all?: true
  }

  export type MedalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medal to aggregate.
     */
    where?: MedalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medals to fetch.
     */
    orderBy?: MedalOrderByWithRelationInput | MedalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Medals
    **/
    _count?: true | MedalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedalMaxAggregateInputType
  }

  export type GetMedalAggregateType<T extends MedalAggregateArgs> = {
        [P in keyof T & keyof AggregateMedal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedal[P]>
      : GetScalarType<T[P], AggregateMedal[P]>
  }




  export type MedalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedalWhereInput
    orderBy?: MedalOrderByWithAggregationInput | MedalOrderByWithAggregationInput[]
    by: MedalScalarFieldEnum[] | MedalScalarFieldEnum
    having?: MedalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedalCountAggregateInputType | true
    _avg?: MedalAvgAggregateInputType
    _sum?: MedalSumAggregateInputType
    _min?: MedalMinAggregateInputType
    _max?: MedalMaxAggregateInputType
  }

  export type MedalGroupByOutputType = {
    id: string
    title: string
    icon: string
    desc: string | null
    target: number
    current: number
    unlocked: boolean
    reward: number
    userId: string
    _count: MedalCountAggregateOutputType | null
    _avg: MedalAvgAggregateOutputType | null
    _sum: MedalSumAggregateOutputType | null
    _min: MedalMinAggregateOutputType | null
    _max: MedalMaxAggregateOutputType | null
  }

  type GetMedalGroupByPayload<T extends MedalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedalGroupByOutputType[P]>
            : GetScalarType<T[P], MedalGroupByOutputType[P]>
        }
      >
    >


  export type MedalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    icon?: boolean
    desc?: boolean
    target?: boolean
    current?: boolean
    unlocked?: boolean
    reward?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medal"]>



  export type MedalSelectScalar = {
    id?: boolean
    title?: boolean
    icon?: boolean
    desc?: boolean
    target?: boolean
    current?: boolean
    unlocked?: boolean
    reward?: boolean
    userId?: boolean
  }

  export type MedalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "icon" | "desc" | "target" | "current" | "unlocked" | "reward" | "userId", ExtArgs["result"]["medal"]>
  export type MedalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MedalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Medal"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      icon: string
      desc: string | null
      target: number
      current: number
      unlocked: boolean
      reward: number
      userId: string
    }, ExtArgs["result"]["medal"]>
    composites: {}
  }

  type MedalGetPayload<S extends boolean | null | undefined | MedalDefaultArgs> = $Result.GetResult<Prisma.$MedalPayload, S>

  type MedalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedalCountAggregateInputType | true
    }

  export interface MedalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Medal'], meta: { name: 'Medal' } }
    /**
     * Find zero or one Medal that matches the filter.
     * @param {MedalFindUniqueArgs} args - Arguments to find a Medal
     * @example
     * // Get one Medal
     * const medal = await prisma.medal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedalFindUniqueArgs>(args: SelectSubset<T, MedalFindUniqueArgs<ExtArgs>>): Prisma__MedalClient<$Result.GetResult<Prisma.$MedalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Medal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedalFindUniqueOrThrowArgs} args - Arguments to find a Medal
     * @example
     * // Get one Medal
     * const medal = await prisma.medal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedalFindUniqueOrThrowArgs>(args: SelectSubset<T, MedalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedalClient<$Result.GetResult<Prisma.$MedalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedalFindFirstArgs} args - Arguments to find a Medal
     * @example
     * // Get one Medal
     * const medal = await prisma.medal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedalFindFirstArgs>(args?: SelectSubset<T, MedalFindFirstArgs<ExtArgs>>): Prisma__MedalClient<$Result.GetResult<Prisma.$MedalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedalFindFirstOrThrowArgs} args - Arguments to find a Medal
     * @example
     * // Get one Medal
     * const medal = await prisma.medal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedalFindFirstOrThrowArgs>(args?: SelectSubset<T, MedalFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedalClient<$Result.GetResult<Prisma.$MedalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Medals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medals
     * const medals = await prisma.medal.findMany()
     * 
     * // Get first 10 Medals
     * const medals = await prisma.medal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medalWithIdOnly = await prisma.medal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedalFindManyArgs>(args?: SelectSubset<T, MedalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Medal.
     * @param {MedalCreateArgs} args - Arguments to create a Medal.
     * @example
     * // Create one Medal
     * const Medal = await prisma.medal.create({
     *   data: {
     *     // ... data to create a Medal
     *   }
     * })
     * 
     */
    create<T extends MedalCreateArgs>(args: SelectSubset<T, MedalCreateArgs<ExtArgs>>): Prisma__MedalClient<$Result.GetResult<Prisma.$MedalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Medals.
     * @param {MedalCreateManyArgs} args - Arguments to create many Medals.
     * @example
     * // Create many Medals
     * const medal = await prisma.medal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedalCreateManyArgs>(args?: SelectSubset<T, MedalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Medal.
     * @param {MedalDeleteArgs} args - Arguments to delete one Medal.
     * @example
     * // Delete one Medal
     * const Medal = await prisma.medal.delete({
     *   where: {
     *     // ... filter to delete one Medal
     *   }
     * })
     * 
     */
    delete<T extends MedalDeleteArgs>(args: SelectSubset<T, MedalDeleteArgs<ExtArgs>>): Prisma__MedalClient<$Result.GetResult<Prisma.$MedalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Medal.
     * @param {MedalUpdateArgs} args - Arguments to update one Medal.
     * @example
     * // Update one Medal
     * const medal = await prisma.medal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedalUpdateArgs>(args: SelectSubset<T, MedalUpdateArgs<ExtArgs>>): Prisma__MedalClient<$Result.GetResult<Prisma.$MedalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Medals.
     * @param {MedalDeleteManyArgs} args - Arguments to filter Medals to delete.
     * @example
     * // Delete a few Medals
     * const { count } = await prisma.medal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedalDeleteManyArgs>(args?: SelectSubset<T, MedalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medals
     * const medal = await prisma.medal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedalUpdateManyArgs>(args: SelectSubset<T, MedalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Medal.
     * @param {MedalUpsertArgs} args - Arguments to update or create a Medal.
     * @example
     * // Update or create a Medal
     * const medal = await prisma.medal.upsert({
     *   create: {
     *     // ... data to create a Medal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medal we want to update
     *   }
     * })
     */
    upsert<T extends MedalUpsertArgs>(args: SelectSubset<T, MedalUpsertArgs<ExtArgs>>): Prisma__MedalClient<$Result.GetResult<Prisma.$MedalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Medals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedalCountArgs} args - Arguments to filter Medals to count.
     * @example
     * // Count the number of Medals
     * const count = await prisma.medal.count({
     *   where: {
     *     // ... the filter for the Medals we want to count
     *   }
     * })
    **/
    count<T extends MedalCountArgs>(
      args?: Subset<T, MedalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MedalAggregateArgs>(args: Subset<T, MedalAggregateArgs>): Prisma.PrismaPromise<GetMedalAggregateType<T>>

    /**
     * Group by Medal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedalGroupByArgs} args - Group by arguments.
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
      T extends MedalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedalGroupByArgs['orderBy'] }
        : { orderBy?: MedalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MedalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Medal model
   */
  readonly fields: MedalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Medal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Medal model
   */
  interface MedalFieldRefs {
    readonly id: FieldRef<"Medal", 'String'>
    readonly title: FieldRef<"Medal", 'String'>
    readonly icon: FieldRef<"Medal", 'String'>
    readonly desc: FieldRef<"Medal", 'String'>
    readonly target: FieldRef<"Medal", 'Int'>
    readonly current: FieldRef<"Medal", 'Int'>
    readonly unlocked: FieldRef<"Medal", 'Boolean'>
    readonly reward: FieldRef<"Medal", 'Int'>
    readonly userId: FieldRef<"Medal", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Medal findUnique
   */
  export type MedalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medal
     */
    select?: MedalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medal
     */
    omit?: MedalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedalInclude<ExtArgs> | null
    /**
     * Filter, which Medal to fetch.
     */
    where: MedalWhereUniqueInput
  }

  /**
   * Medal findUniqueOrThrow
   */
  export type MedalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medal
     */
    select?: MedalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medal
     */
    omit?: MedalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedalInclude<ExtArgs> | null
    /**
     * Filter, which Medal to fetch.
     */
    where: MedalWhereUniqueInput
  }

  /**
   * Medal findFirst
   */
  export type MedalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medal
     */
    select?: MedalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medal
     */
    omit?: MedalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedalInclude<ExtArgs> | null
    /**
     * Filter, which Medal to fetch.
     */
    where?: MedalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medals to fetch.
     */
    orderBy?: MedalOrderByWithRelationInput | MedalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medals.
     */
    cursor?: MedalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medals.
     */
    distinct?: MedalScalarFieldEnum | MedalScalarFieldEnum[]
  }

  /**
   * Medal findFirstOrThrow
   */
  export type MedalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medal
     */
    select?: MedalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medal
     */
    omit?: MedalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedalInclude<ExtArgs> | null
    /**
     * Filter, which Medal to fetch.
     */
    where?: MedalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medals to fetch.
     */
    orderBy?: MedalOrderByWithRelationInput | MedalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medals.
     */
    cursor?: MedalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medals.
     */
    distinct?: MedalScalarFieldEnum | MedalScalarFieldEnum[]
  }

  /**
   * Medal findMany
   */
  export type MedalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medal
     */
    select?: MedalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medal
     */
    omit?: MedalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedalInclude<ExtArgs> | null
    /**
     * Filter, which Medals to fetch.
     */
    where?: MedalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medals to fetch.
     */
    orderBy?: MedalOrderByWithRelationInput | MedalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Medals.
     */
    cursor?: MedalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medals.
     */
    skip?: number
    distinct?: MedalScalarFieldEnum | MedalScalarFieldEnum[]
  }

  /**
   * Medal create
   */
  export type MedalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medal
     */
    select?: MedalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medal
     */
    omit?: MedalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedalInclude<ExtArgs> | null
    /**
     * The data needed to create a Medal.
     */
    data: XOR<MedalCreateInput, MedalUncheckedCreateInput>
  }

  /**
   * Medal createMany
   */
  export type MedalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Medals.
     */
    data: MedalCreateManyInput | MedalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Medal update
   */
  export type MedalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medal
     */
    select?: MedalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medal
     */
    omit?: MedalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedalInclude<ExtArgs> | null
    /**
     * The data needed to update a Medal.
     */
    data: XOR<MedalUpdateInput, MedalUncheckedUpdateInput>
    /**
     * Choose, which Medal to update.
     */
    where: MedalWhereUniqueInput
  }

  /**
   * Medal updateMany
   */
  export type MedalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Medals.
     */
    data: XOR<MedalUpdateManyMutationInput, MedalUncheckedUpdateManyInput>
    /**
     * Filter which Medals to update
     */
    where?: MedalWhereInput
    /**
     * Limit how many Medals to update.
     */
    limit?: number
  }

  /**
   * Medal upsert
   */
  export type MedalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medal
     */
    select?: MedalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medal
     */
    omit?: MedalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedalInclude<ExtArgs> | null
    /**
     * The filter to search for the Medal to update in case it exists.
     */
    where: MedalWhereUniqueInput
    /**
     * In case the Medal found by the `where` argument doesn't exist, create a new Medal with this data.
     */
    create: XOR<MedalCreateInput, MedalUncheckedCreateInput>
    /**
     * In case the Medal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedalUpdateInput, MedalUncheckedUpdateInput>
  }

  /**
   * Medal delete
   */
  export type MedalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medal
     */
    select?: MedalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medal
     */
    omit?: MedalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedalInclude<ExtArgs> | null
    /**
     * Filter which Medal to delete.
     */
    where: MedalWhereUniqueInput
  }

  /**
   * Medal deleteMany
   */
  export type MedalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medals to delete
     */
    where?: MedalWhereInput
    /**
     * Limit how many Medals to delete.
     */
    limit?: number
  }

  /**
   * Medal without action
   */
  export type MedalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medal
     */
    select?: MedalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medal
     */
    omit?: MedalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedalInclude<ExtArgs> | null
  }


  /**
   * Model History
   */

  export type AggregateHistory = {
    _count: HistoryCountAggregateOutputType | null
    _avg: HistoryAvgAggregateOutputType | null
    _sum: HistorySumAggregateOutputType | null
    _min: HistoryMinAggregateOutputType | null
    _max: HistoryMaxAggregateOutputType | null
  }

  export type HistoryAvgAggregateOutputType = {
    amount: number | null
  }

  export type HistorySumAggregateOutputType = {
    amount: number | null
  }

  export type HistoryMinAggregateOutputType = {
    id: string | null
    type: string | null
    amount: number | null
    reason: string | null
    date: Date | null
    userId: string | null
  }

  export type HistoryMaxAggregateOutputType = {
    id: string | null
    type: string | null
    amount: number | null
    reason: string | null
    date: Date | null
    userId: string | null
  }

  export type HistoryCountAggregateOutputType = {
    id: number
    type: number
    amount: number
    reason: number
    date: number
    userId: number
    _all: number
  }


  export type HistoryAvgAggregateInputType = {
    amount?: true
  }

  export type HistorySumAggregateInputType = {
    amount?: true
  }

  export type HistoryMinAggregateInputType = {
    id?: true
    type?: true
    amount?: true
    reason?: true
    date?: true
    userId?: true
  }

  export type HistoryMaxAggregateInputType = {
    id?: true
    type?: true
    amount?: true
    reason?: true
    date?: true
    userId?: true
  }

  export type HistoryCountAggregateInputType = {
    id?: true
    type?: true
    amount?: true
    reason?: true
    date?: true
    userId?: true
    _all?: true
  }

  export type HistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which History to aggregate.
     */
    where?: HistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Histories to fetch.
     */
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Histories
    **/
    _count?: true | HistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistoryMaxAggregateInputType
  }

  export type GetHistoryAggregateType<T extends HistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistory[P]>
      : GetScalarType<T[P], AggregateHistory[P]>
  }




  export type HistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoryWhereInput
    orderBy?: HistoryOrderByWithAggregationInput | HistoryOrderByWithAggregationInput[]
    by: HistoryScalarFieldEnum[] | HistoryScalarFieldEnum
    having?: HistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistoryCountAggregateInputType | true
    _avg?: HistoryAvgAggregateInputType
    _sum?: HistorySumAggregateInputType
    _min?: HistoryMinAggregateInputType
    _max?: HistoryMaxAggregateInputType
  }

  export type HistoryGroupByOutputType = {
    id: string
    type: string
    amount: number
    reason: string
    date: Date
    userId: string
    _count: HistoryCountAggregateOutputType | null
    _avg: HistoryAvgAggregateOutputType | null
    _sum: HistorySumAggregateOutputType | null
    _min: HistoryMinAggregateOutputType | null
    _max: HistoryMaxAggregateOutputType | null
  }

  type GetHistoryGroupByPayload<T extends HistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistoryGroupByOutputType[P]>
            : GetScalarType<T[P], HistoryGroupByOutputType[P]>
        }
      >
    >


  export type HistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    amount?: boolean
    reason?: boolean
    date?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["history"]>



  export type HistorySelectScalar = {
    id?: boolean
    type?: boolean
    amount?: boolean
    reason?: boolean
    date?: boolean
    userId?: boolean
  }

  export type HistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "amount" | "reason" | "date" | "userId", ExtArgs["result"]["history"]>
  export type HistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $HistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "History"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      amount: number
      reason: string
      date: Date
      userId: string
    }, ExtArgs["result"]["history"]>
    composites: {}
  }

  type HistoryGetPayload<S extends boolean | null | undefined | HistoryDefaultArgs> = $Result.GetResult<Prisma.$HistoryPayload, S>

  type HistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HistoryCountAggregateInputType | true
    }

  export interface HistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['History'], meta: { name: 'History' } }
    /**
     * Find zero or one History that matches the filter.
     * @param {HistoryFindUniqueArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HistoryFindUniqueArgs>(args: SelectSubset<T, HistoryFindUniqueArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one History that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HistoryFindUniqueOrThrowArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, HistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first History that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryFindFirstArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HistoryFindFirstArgs>(args?: SelectSubset<T, HistoryFindFirstArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first History that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryFindFirstOrThrowArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, HistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Histories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Histories
     * const histories = await prisma.history.findMany()
     * 
     * // Get first 10 Histories
     * const histories = await prisma.history.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const historyWithIdOnly = await prisma.history.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HistoryFindManyArgs>(args?: SelectSubset<T, HistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a History.
     * @param {HistoryCreateArgs} args - Arguments to create a History.
     * @example
     * // Create one History
     * const History = await prisma.history.create({
     *   data: {
     *     // ... data to create a History
     *   }
     * })
     * 
     */
    create<T extends HistoryCreateArgs>(args: SelectSubset<T, HistoryCreateArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Histories.
     * @param {HistoryCreateManyArgs} args - Arguments to create many Histories.
     * @example
     * // Create many Histories
     * const history = await prisma.history.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HistoryCreateManyArgs>(args?: SelectSubset<T, HistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a History.
     * @param {HistoryDeleteArgs} args - Arguments to delete one History.
     * @example
     * // Delete one History
     * const History = await prisma.history.delete({
     *   where: {
     *     // ... filter to delete one History
     *   }
     * })
     * 
     */
    delete<T extends HistoryDeleteArgs>(args: SelectSubset<T, HistoryDeleteArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one History.
     * @param {HistoryUpdateArgs} args - Arguments to update one History.
     * @example
     * // Update one History
     * const history = await prisma.history.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HistoryUpdateArgs>(args: SelectSubset<T, HistoryUpdateArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Histories.
     * @param {HistoryDeleteManyArgs} args - Arguments to filter Histories to delete.
     * @example
     * // Delete a few Histories
     * const { count } = await prisma.history.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HistoryDeleteManyArgs>(args?: SelectSubset<T, HistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Histories
     * const history = await prisma.history.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HistoryUpdateManyArgs>(args: SelectSubset<T, HistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one History.
     * @param {HistoryUpsertArgs} args - Arguments to update or create a History.
     * @example
     * // Update or create a History
     * const history = await prisma.history.upsert({
     *   create: {
     *     // ... data to create a History
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the History we want to update
     *   }
     * })
     */
    upsert<T extends HistoryUpsertArgs>(args: SelectSubset<T, HistoryUpsertArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryCountArgs} args - Arguments to filter Histories to count.
     * @example
     * // Count the number of Histories
     * const count = await prisma.history.count({
     *   where: {
     *     // ... the filter for the Histories we want to count
     *   }
     * })
    **/
    count<T extends HistoryCountArgs>(
      args?: Subset<T, HistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a History.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HistoryAggregateArgs>(args: Subset<T, HistoryAggregateArgs>): Prisma.PrismaPromise<GetHistoryAggregateType<T>>

    /**
     * Group by History.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryGroupByArgs} args - Group by arguments.
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
      T extends HistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HistoryGroupByArgs['orderBy'] }
        : { orderBy?: HistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the History model
   */
  readonly fields: HistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for History.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the History model
   */
  interface HistoryFieldRefs {
    readonly id: FieldRef<"History", 'String'>
    readonly type: FieldRef<"History", 'String'>
    readonly amount: FieldRef<"History", 'Int'>
    readonly reason: FieldRef<"History", 'String'>
    readonly date: FieldRef<"History", 'DateTime'>
    readonly userId: FieldRef<"History", 'String'>
  }
    

  // Custom InputTypes
  /**
   * History findUnique
   */
  export type HistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter, which History to fetch.
     */
    where: HistoryWhereUniqueInput
  }

  /**
   * History findUniqueOrThrow
   */
  export type HistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter, which History to fetch.
     */
    where: HistoryWhereUniqueInput
  }

  /**
   * History findFirst
   */
  export type HistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter, which History to fetch.
     */
    where?: HistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Histories to fetch.
     */
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Histories.
     */
    cursor?: HistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Histories.
     */
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * History findFirstOrThrow
   */
  export type HistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter, which History to fetch.
     */
    where?: HistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Histories to fetch.
     */
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Histories.
     */
    cursor?: HistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Histories.
     */
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * History findMany
   */
  export type HistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter, which Histories to fetch.
     */
    where?: HistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Histories to fetch.
     */
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Histories.
     */
    cursor?: HistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Histories.
     */
    skip?: number
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * History create
   */
  export type HistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a History.
     */
    data: XOR<HistoryCreateInput, HistoryUncheckedCreateInput>
  }

  /**
   * History createMany
   */
  export type HistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Histories.
     */
    data: HistoryCreateManyInput | HistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * History update
   */
  export type HistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a History.
     */
    data: XOR<HistoryUpdateInput, HistoryUncheckedUpdateInput>
    /**
     * Choose, which History to update.
     */
    where: HistoryWhereUniqueInput
  }

  /**
   * History updateMany
   */
  export type HistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Histories.
     */
    data: XOR<HistoryUpdateManyMutationInput, HistoryUncheckedUpdateManyInput>
    /**
     * Filter which Histories to update
     */
    where?: HistoryWhereInput
    /**
     * Limit how many Histories to update.
     */
    limit?: number
  }

  /**
   * History upsert
   */
  export type HistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the History to update in case it exists.
     */
    where: HistoryWhereUniqueInput
    /**
     * In case the History found by the `where` argument doesn't exist, create a new History with this data.
     */
    create: XOR<HistoryCreateInput, HistoryUncheckedCreateInput>
    /**
     * In case the History was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HistoryUpdateInput, HistoryUncheckedUpdateInput>
  }

  /**
   * History delete
   */
  export type HistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter which History to delete.
     */
    where: HistoryWhereUniqueInput
  }

  /**
   * History deleteMany
   */
  export type HistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Histories to delete
     */
    where?: HistoryWhereInput
    /**
     * Limit how many Histories to delete.
     */
    limit?: number
  }

  /**
   * History without action
   */
  export type HistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
  }


  /**
   * Model Habit
   */

  export type AggregateHabit = {
    _count: HabitCountAggregateOutputType | null
    _avg: HabitAvgAggregateOutputType | null
    _sum: HabitSumAggregateOutputType | null
    _min: HabitMinAggregateOutputType | null
    _max: HabitMaxAggregateOutputType | null
  }

  export type HabitAvgAggregateOutputType = {
    points: number | null
    maxTimes: number | null
    duration: number | null
  }

  export type HabitSumAggregateOutputType = {
    points: number | null
    maxTimes: number | null
    duration: number | null
  }

  export type HabitMinAggregateOutputType = {
    id: string | null
    title: string | null
    icon: string | null
    color: string | null
    points: number | null
    type: string | null
    maxTimes: number | null
    category: string | null
    duration: number | null
    desc: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HabitMaxAggregateOutputType = {
    id: string | null
    title: string | null
    icon: string | null
    color: string | null
    points: number | null
    type: string | null
    maxTimes: number | null
    category: string | null
    duration: number | null
    desc: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HabitCountAggregateOutputType = {
    id: number
    title: number
    icon: number
    color: number
    points: number
    type: number
    maxTimes: number
    category: number
    duration: number
    desc: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HabitAvgAggregateInputType = {
    points?: true
    maxTimes?: true
    duration?: true
  }

  export type HabitSumAggregateInputType = {
    points?: true
    maxTimes?: true
    duration?: true
  }

  export type HabitMinAggregateInputType = {
    id?: true
    title?: true
    icon?: true
    color?: true
    points?: true
    type?: true
    maxTimes?: true
    category?: true
    duration?: true
    desc?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HabitMaxAggregateInputType = {
    id?: true
    title?: true
    icon?: true
    color?: true
    points?: true
    type?: true
    maxTimes?: true
    category?: true
    duration?: true
    desc?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HabitCountAggregateInputType = {
    id?: true
    title?: true
    icon?: true
    color?: true
    points?: true
    type?: true
    maxTimes?: true
    category?: true
    duration?: true
    desc?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HabitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Habit to aggregate.
     */
    where?: HabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits to fetch.
     */
    orderBy?: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Habits
    **/
    _count?: true | HabitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HabitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HabitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HabitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HabitMaxAggregateInputType
  }

  export type GetHabitAggregateType<T extends HabitAggregateArgs> = {
        [P in keyof T & keyof AggregateHabit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHabit[P]>
      : GetScalarType<T[P], AggregateHabit[P]>
  }




  export type HabitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitWhereInput
    orderBy?: HabitOrderByWithAggregationInput | HabitOrderByWithAggregationInput[]
    by: HabitScalarFieldEnum[] | HabitScalarFieldEnum
    having?: HabitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HabitCountAggregateInputType | true
    _avg?: HabitAvgAggregateInputType
    _sum?: HabitSumAggregateInputType
    _min?: HabitMinAggregateInputType
    _max?: HabitMaxAggregateInputType
  }

  export type HabitGroupByOutputType = {
    id: string
    title: string
    icon: string
    color: string
    points: number
    type: string
    maxTimes: number
    category: string
    duration: number
    desc: string | null
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: HabitCountAggregateOutputType | null
    _avg: HabitAvgAggregateOutputType | null
    _sum: HabitSumAggregateOutputType | null
    _min: HabitMinAggregateOutputType | null
    _max: HabitMaxAggregateOutputType | null
  }

  type GetHabitGroupByPayload<T extends HabitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HabitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HabitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HabitGroupByOutputType[P]>
            : GetScalarType<T[P], HabitGroupByOutputType[P]>
        }
      >
    >


  export type HabitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    icon?: boolean
    color?: boolean
    points?: boolean
    type?: boolean
    maxTimes?: boolean
    category?: boolean
    duration?: boolean
    desc?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    records?: boolean | Habit$recordsArgs<ExtArgs>
    _count?: boolean | HabitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habit"]>



  export type HabitSelectScalar = {
    id?: boolean
    title?: boolean
    icon?: boolean
    color?: boolean
    points?: boolean
    type?: boolean
    maxTimes?: boolean
    category?: boolean
    duration?: boolean
    desc?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HabitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "icon" | "color" | "points" | "type" | "maxTimes" | "category" | "duration" | "desc" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["habit"]>
  export type HabitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    records?: boolean | Habit$recordsArgs<ExtArgs>
    _count?: boolean | HabitCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $HabitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Habit"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      records: Prisma.$HabitRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      icon: string
      color: string
      points: number
      type: string
      maxTimes: number
      category: string
      duration: number
      desc: string | null
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["habit"]>
    composites: {}
  }

  type HabitGetPayload<S extends boolean | null | undefined | HabitDefaultArgs> = $Result.GetResult<Prisma.$HabitPayload, S>

  type HabitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HabitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HabitCountAggregateInputType | true
    }

  export interface HabitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Habit'], meta: { name: 'Habit' } }
    /**
     * Find zero or one Habit that matches the filter.
     * @param {HabitFindUniqueArgs} args - Arguments to find a Habit
     * @example
     * // Get one Habit
     * const habit = await prisma.habit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HabitFindUniqueArgs>(args: SelectSubset<T, HabitFindUniqueArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Habit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HabitFindUniqueOrThrowArgs} args - Arguments to find a Habit
     * @example
     * // Get one Habit
     * const habit = await prisma.habit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HabitFindUniqueOrThrowArgs>(args: SelectSubset<T, HabitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Habit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitFindFirstArgs} args - Arguments to find a Habit
     * @example
     * // Get one Habit
     * const habit = await prisma.habit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HabitFindFirstArgs>(args?: SelectSubset<T, HabitFindFirstArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Habit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitFindFirstOrThrowArgs} args - Arguments to find a Habit
     * @example
     * // Get one Habit
     * const habit = await prisma.habit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HabitFindFirstOrThrowArgs>(args?: SelectSubset<T, HabitFindFirstOrThrowArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Habits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Habits
     * const habits = await prisma.habit.findMany()
     * 
     * // Get first 10 Habits
     * const habits = await prisma.habit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const habitWithIdOnly = await prisma.habit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HabitFindManyArgs>(args?: SelectSubset<T, HabitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Habit.
     * @param {HabitCreateArgs} args - Arguments to create a Habit.
     * @example
     * // Create one Habit
     * const Habit = await prisma.habit.create({
     *   data: {
     *     // ... data to create a Habit
     *   }
     * })
     * 
     */
    create<T extends HabitCreateArgs>(args: SelectSubset<T, HabitCreateArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Habits.
     * @param {HabitCreateManyArgs} args - Arguments to create many Habits.
     * @example
     * // Create many Habits
     * const habit = await prisma.habit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HabitCreateManyArgs>(args?: SelectSubset<T, HabitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Habit.
     * @param {HabitDeleteArgs} args - Arguments to delete one Habit.
     * @example
     * // Delete one Habit
     * const Habit = await prisma.habit.delete({
     *   where: {
     *     // ... filter to delete one Habit
     *   }
     * })
     * 
     */
    delete<T extends HabitDeleteArgs>(args: SelectSubset<T, HabitDeleteArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Habit.
     * @param {HabitUpdateArgs} args - Arguments to update one Habit.
     * @example
     * // Update one Habit
     * const habit = await prisma.habit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HabitUpdateArgs>(args: SelectSubset<T, HabitUpdateArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Habits.
     * @param {HabitDeleteManyArgs} args - Arguments to filter Habits to delete.
     * @example
     * // Delete a few Habits
     * const { count } = await prisma.habit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HabitDeleteManyArgs>(args?: SelectSubset<T, HabitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Habits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Habits
     * const habit = await prisma.habit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HabitUpdateManyArgs>(args: SelectSubset<T, HabitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Habit.
     * @param {HabitUpsertArgs} args - Arguments to update or create a Habit.
     * @example
     * // Update or create a Habit
     * const habit = await prisma.habit.upsert({
     *   create: {
     *     // ... data to create a Habit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Habit we want to update
     *   }
     * })
     */
    upsert<T extends HabitUpsertArgs>(args: SelectSubset<T, HabitUpsertArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Habits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitCountArgs} args - Arguments to filter Habits to count.
     * @example
     * // Count the number of Habits
     * const count = await prisma.habit.count({
     *   where: {
     *     // ... the filter for the Habits we want to count
     *   }
     * })
    **/
    count<T extends HabitCountArgs>(
      args?: Subset<T, HabitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HabitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Habit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HabitAggregateArgs>(args: Subset<T, HabitAggregateArgs>): Prisma.PrismaPromise<GetHabitAggregateType<T>>

    /**
     * Group by Habit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitGroupByArgs} args - Group by arguments.
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
      T extends HabitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HabitGroupByArgs['orderBy'] }
        : { orderBy?: HabitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HabitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHabitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Habit model
   */
  readonly fields: HabitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Habit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HabitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    records<T extends Habit$recordsArgs<ExtArgs> = {}>(args?: Subset<T, Habit$recordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Habit model
   */
  interface HabitFieldRefs {
    readonly id: FieldRef<"Habit", 'String'>
    readonly title: FieldRef<"Habit", 'String'>
    readonly icon: FieldRef<"Habit", 'String'>
    readonly color: FieldRef<"Habit", 'String'>
    readonly points: FieldRef<"Habit", 'Int'>
    readonly type: FieldRef<"Habit", 'String'>
    readonly maxTimes: FieldRef<"Habit", 'Int'>
    readonly category: FieldRef<"Habit", 'String'>
    readonly duration: FieldRef<"Habit", 'Int'>
    readonly desc: FieldRef<"Habit", 'String'>
    readonly userId: FieldRef<"Habit", 'String'>
    readonly createdAt: FieldRef<"Habit", 'DateTime'>
    readonly updatedAt: FieldRef<"Habit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Habit findUnique
   */
  export type HabitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter, which Habit to fetch.
     */
    where: HabitWhereUniqueInput
  }

  /**
   * Habit findUniqueOrThrow
   */
  export type HabitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter, which Habit to fetch.
     */
    where: HabitWhereUniqueInput
  }

  /**
   * Habit findFirst
   */
  export type HabitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter, which Habit to fetch.
     */
    where?: HabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits to fetch.
     */
    orderBy?: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Habits.
     */
    cursor?: HabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Habits.
     */
    distinct?: HabitScalarFieldEnum | HabitScalarFieldEnum[]
  }

  /**
   * Habit findFirstOrThrow
   */
  export type HabitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter, which Habit to fetch.
     */
    where?: HabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits to fetch.
     */
    orderBy?: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Habits.
     */
    cursor?: HabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Habits.
     */
    distinct?: HabitScalarFieldEnum | HabitScalarFieldEnum[]
  }

  /**
   * Habit findMany
   */
  export type HabitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter, which Habits to fetch.
     */
    where?: HabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits to fetch.
     */
    orderBy?: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Habits.
     */
    cursor?: HabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits.
     */
    skip?: number
    distinct?: HabitScalarFieldEnum | HabitScalarFieldEnum[]
  }

  /**
   * Habit create
   */
  export type HabitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * The data needed to create a Habit.
     */
    data: XOR<HabitCreateInput, HabitUncheckedCreateInput>
  }

  /**
   * Habit createMany
   */
  export type HabitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Habits.
     */
    data: HabitCreateManyInput | HabitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Habit update
   */
  export type HabitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * The data needed to update a Habit.
     */
    data: XOR<HabitUpdateInput, HabitUncheckedUpdateInput>
    /**
     * Choose, which Habit to update.
     */
    where: HabitWhereUniqueInput
  }

  /**
   * Habit updateMany
   */
  export type HabitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Habits.
     */
    data: XOR<HabitUpdateManyMutationInput, HabitUncheckedUpdateManyInput>
    /**
     * Filter which Habits to update
     */
    where?: HabitWhereInput
    /**
     * Limit how many Habits to update.
     */
    limit?: number
  }

  /**
   * Habit upsert
   */
  export type HabitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * The filter to search for the Habit to update in case it exists.
     */
    where: HabitWhereUniqueInput
    /**
     * In case the Habit found by the `where` argument doesn't exist, create a new Habit with this data.
     */
    create: XOR<HabitCreateInput, HabitUncheckedCreateInput>
    /**
     * In case the Habit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HabitUpdateInput, HabitUncheckedUpdateInput>
  }

  /**
   * Habit delete
   */
  export type HabitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter which Habit to delete.
     */
    where: HabitWhereUniqueInput
  }

  /**
   * Habit deleteMany
   */
  export type HabitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Habits to delete
     */
    where?: HabitWhereInput
    /**
     * Limit how many Habits to delete.
     */
    limit?: number
  }

  /**
   * Habit.records
   */
  export type Habit$recordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitRecord
     */
    select?: HabitRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitRecord
     */
    omit?: HabitRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitRecordInclude<ExtArgs> | null
    where?: HabitRecordWhereInput
    orderBy?: HabitRecordOrderByWithRelationInput | HabitRecordOrderByWithRelationInput[]
    cursor?: HabitRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HabitRecordScalarFieldEnum | HabitRecordScalarFieldEnum[]
  }

  /**
   * Habit without action
   */
  export type HabitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
  }


  /**
   * Model HabitRecord
   */

  export type AggregateHabitRecord = {
    _count: HabitRecordCountAggregateOutputType | null
    _avg: HabitRecordAvgAggregateOutputType | null
    _sum: HabitRecordSumAggregateOutputType | null
    _min: HabitRecordMinAggregateOutputType | null
    _max: HabitRecordMaxAggregateOutputType | null
  }

  export type HabitRecordAvgAggregateOutputType = {
    pointsChange: number | null
  }

  export type HabitRecordSumAggregateOutputType = {
    pointsChange: number | null
  }

  export type HabitRecordMinAggregateOutputType = {
    id: string | null
    habitId: string | null
    date: string | null
    timestamp: Date | null
    pointsChange: number | null
    userId: string | null
  }

  export type HabitRecordMaxAggregateOutputType = {
    id: string | null
    habitId: string | null
    date: string | null
    timestamp: Date | null
    pointsChange: number | null
    userId: string | null
  }

  export type HabitRecordCountAggregateOutputType = {
    id: number
    habitId: number
    date: number
    timestamp: number
    pointsChange: number
    userId: number
    _all: number
  }


  export type HabitRecordAvgAggregateInputType = {
    pointsChange?: true
  }

  export type HabitRecordSumAggregateInputType = {
    pointsChange?: true
  }

  export type HabitRecordMinAggregateInputType = {
    id?: true
    habitId?: true
    date?: true
    timestamp?: true
    pointsChange?: true
    userId?: true
  }

  export type HabitRecordMaxAggregateInputType = {
    id?: true
    habitId?: true
    date?: true
    timestamp?: true
    pointsChange?: true
    userId?: true
  }

  export type HabitRecordCountAggregateInputType = {
    id?: true
    habitId?: true
    date?: true
    timestamp?: true
    pointsChange?: true
    userId?: true
    _all?: true
  }

  export type HabitRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HabitRecord to aggregate.
     */
    where?: HabitRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HabitRecords to fetch.
     */
    orderBy?: HabitRecordOrderByWithRelationInput | HabitRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HabitRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HabitRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HabitRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HabitRecords
    **/
    _count?: true | HabitRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HabitRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HabitRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HabitRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HabitRecordMaxAggregateInputType
  }

  export type GetHabitRecordAggregateType<T extends HabitRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateHabitRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHabitRecord[P]>
      : GetScalarType<T[P], AggregateHabitRecord[P]>
  }




  export type HabitRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitRecordWhereInput
    orderBy?: HabitRecordOrderByWithAggregationInput | HabitRecordOrderByWithAggregationInput[]
    by: HabitRecordScalarFieldEnum[] | HabitRecordScalarFieldEnum
    having?: HabitRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HabitRecordCountAggregateInputType | true
    _avg?: HabitRecordAvgAggregateInputType
    _sum?: HabitRecordSumAggregateInputType
    _min?: HabitRecordMinAggregateInputType
    _max?: HabitRecordMaxAggregateInputType
  }

  export type HabitRecordGroupByOutputType = {
    id: string
    habitId: string
    date: string
    timestamp: Date
    pointsChange: number
    userId: string
    _count: HabitRecordCountAggregateOutputType | null
    _avg: HabitRecordAvgAggregateOutputType | null
    _sum: HabitRecordSumAggregateOutputType | null
    _min: HabitRecordMinAggregateOutputType | null
    _max: HabitRecordMaxAggregateOutputType | null
  }

  type GetHabitRecordGroupByPayload<T extends HabitRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HabitRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HabitRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HabitRecordGroupByOutputType[P]>
            : GetScalarType<T[P], HabitRecordGroupByOutputType[P]>
        }
      >
    >


  export type HabitRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    habitId?: boolean
    date?: boolean
    timestamp?: boolean
    pointsChange?: boolean
    userId?: boolean
    habit?: boolean | HabitDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habitRecord"]>



  export type HabitRecordSelectScalar = {
    id?: boolean
    habitId?: boolean
    date?: boolean
    timestamp?: boolean
    pointsChange?: boolean
    userId?: boolean
  }

  export type HabitRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "habitId" | "date" | "timestamp" | "pointsChange" | "userId", ExtArgs["result"]["habitRecord"]>
  export type HabitRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habit?: boolean | HabitDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $HabitRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HabitRecord"
    objects: {
      habit: Prisma.$HabitPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      habitId: string
      date: string
      timestamp: Date
      pointsChange: number
      userId: string
    }, ExtArgs["result"]["habitRecord"]>
    composites: {}
  }

  type HabitRecordGetPayload<S extends boolean | null | undefined | HabitRecordDefaultArgs> = $Result.GetResult<Prisma.$HabitRecordPayload, S>

  type HabitRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HabitRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HabitRecordCountAggregateInputType | true
    }

  export interface HabitRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HabitRecord'], meta: { name: 'HabitRecord' } }
    /**
     * Find zero or one HabitRecord that matches the filter.
     * @param {HabitRecordFindUniqueArgs} args - Arguments to find a HabitRecord
     * @example
     * // Get one HabitRecord
     * const habitRecord = await prisma.habitRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HabitRecordFindUniqueArgs>(args: SelectSubset<T, HabitRecordFindUniqueArgs<ExtArgs>>): Prisma__HabitRecordClient<$Result.GetResult<Prisma.$HabitRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HabitRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HabitRecordFindUniqueOrThrowArgs} args - Arguments to find a HabitRecord
     * @example
     * // Get one HabitRecord
     * const habitRecord = await prisma.habitRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HabitRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, HabitRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HabitRecordClient<$Result.GetResult<Prisma.$HabitRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HabitRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitRecordFindFirstArgs} args - Arguments to find a HabitRecord
     * @example
     * // Get one HabitRecord
     * const habitRecord = await prisma.habitRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HabitRecordFindFirstArgs>(args?: SelectSubset<T, HabitRecordFindFirstArgs<ExtArgs>>): Prisma__HabitRecordClient<$Result.GetResult<Prisma.$HabitRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HabitRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitRecordFindFirstOrThrowArgs} args - Arguments to find a HabitRecord
     * @example
     * // Get one HabitRecord
     * const habitRecord = await prisma.habitRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HabitRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, HabitRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__HabitRecordClient<$Result.GetResult<Prisma.$HabitRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HabitRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HabitRecords
     * const habitRecords = await prisma.habitRecord.findMany()
     * 
     * // Get first 10 HabitRecords
     * const habitRecords = await prisma.habitRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const habitRecordWithIdOnly = await prisma.habitRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HabitRecordFindManyArgs>(args?: SelectSubset<T, HabitRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HabitRecord.
     * @param {HabitRecordCreateArgs} args - Arguments to create a HabitRecord.
     * @example
     * // Create one HabitRecord
     * const HabitRecord = await prisma.habitRecord.create({
     *   data: {
     *     // ... data to create a HabitRecord
     *   }
     * })
     * 
     */
    create<T extends HabitRecordCreateArgs>(args: SelectSubset<T, HabitRecordCreateArgs<ExtArgs>>): Prisma__HabitRecordClient<$Result.GetResult<Prisma.$HabitRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HabitRecords.
     * @param {HabitRecordCreateManyArgs} args - Arguments to create many HabitRecords.
     * @example
     * // Create many HabitRecords
     * const habitRecord = await prisma.habitRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HabitRecordCreateManyArgs>(args?: SelectSubset<T, HabitRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HabitRecord.
     * @param {HabitRecordDeleteArgs} args - Arguments to delete one HabitRecord.
     * @example
     * // Delete one HabitRecord
     * const HabitRecord = await prisma.habitRecord.delete({
     *   where: {
     *     // ... filter to delete one HabitRecord
     *   }
     * })
     * 
     */
    delete<T extends HabitRecordDeleteArgs>(args: SelectSubset<T, HabitRecordDeleteArgs<ExtArgs>>): Prisma__HabitRecordClient<$Result.GetResult<Prisma.$HabitRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HabitRecord.
     * @param {HabitRecordUpdateArgs} args - Arguments to update one HabitRecord.
     * @example
     * // Update one HabitRecord
     * const habitRecord = await prisma.habitRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HabitRecordUpdateArgs>(args: SelectSubset<T, HabitRecordUpdateArgs<ExtArgs>>): Prisma__HabitRecordClient<$Result.GetResult<Prisma.$HabitRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HabitRecords.
     * @param {HabitRecordDeleteManyArgs} args - Arguments to filter HabitRecords to delete.
     * @example
     * // Delete a few HabitRecords
     * const { count } = await prisma.habitRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HabitRecordDeleteManyArgs>(args?: SelectSubset<T, HabitRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HabitRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HabitRecords
     * const habitRecord = await prisma.habitRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HabitRecordUpdateManyArgs>(args: SelectSubset<T, HabitRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HabitRecord.
     * @param {HabitRecordUpsertArgs} args - Arguments to update or create a HabitRecord.
     * @example
     * // Update or create a HabitRecord
     * const habitRecord = await prisma.habitRecord.upsert({
     *   create: {
     *     // ... data to create a HabitRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HabitRecord we want to update
     *   }
     * })
     */
    upsert<T extends HabitRecordUpsertArgs>(args: SelectSubset<T, HabitRecordUpsertArgs<ExtArgs>>): Prisma__HabitRecordClient<$Result.GetResult<Prisma.$HabitRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HabitRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitRecordCountArgs} args - Arguments to filter HabitRecords to count.
     * @example
     * // Count the number of HabitRecords
     * const count = await prisma.habitRecord.count({
     *   where: {
     *     // ... the filter for the HabitRecords we want to count
     *   }
     * })
    **/
    count<T extends HabitRecordCountArgs>(
      args?: Subset<T, HabitRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HabitRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HabitRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HabitRecordAggregateArgs>(args: Subset<T, HabitRecordAggregateArgs>): Prisma.PrismaPromise<GetHabitRecordAggregateType<T>>

    /**
     * Group by HabitRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitRecordGroupByArgs} args - Group by arguments.
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
      T extends HabitRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HabitRecordGroupByArgs['orderBy'] }
        : { orderBy?: HabitRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HabitRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHabitRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HabitRecord model
   */
  readonly fields: HabitRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HabitRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HabitRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    habit<T extends HabitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HabitDefaultArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the HabitRecord model
   */
  interface HabitRecordFieldRefs {
    readonly id: FieldRef<"HabitRecord", 'String'>
    readonly habitId: FieldRef<"HabitRecord", 'String'>
    readonly date: FieldRef<"HabitRecord", 'String'>
    readonly timestamp: FieldRef<"HabitRecord", 'DateTime'>
    readonly pointsChange: FieldRef<"HabitRecord", 'Int'>
    readonly userId: FieldRef<"HabitRecord", 'String'>
  }
    

  // Custom InputTypes
  /**
   * HabitRecord findUnique
   */
  export type HabitRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitRecord
     */
    select?: HabitRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitRecord
     */
    omit?: HabitRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitRecordInclude<ExtArgs> | null
    /**
     * Filter, which HabitRecord to fetch.
     */
    where: HabitRecordWhereUniqueInput
  }

  /**
   * HabitRecord findUniqueOrThrow
   */
  export type HabitRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitRecord
     */
    select?: HabitRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitRecord
     */
    omit?: HabitRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitRecordInclude<ExtArgs> | null
    /**
     * Filter, which HabitRecord to fetch.
     */
    where: HabitRecordWhereUniqueInput
  }

  /**
   * HabitRecord findFirst
   */
  export type HabitRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitRecord
     */
    select?: HabitRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitRecord
     */
    omit?: HabitRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitRecordInclude<ExtArgs> | null
    /**
     * Filter, which HabitRecord to fetch.
     */
    where?: HabitRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HabitRecords to fetch.
     */
    orderBy?: HabitRecordOrderByWithRelationInput | HabitRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HabitRecords.
     */
    cursor?: HabitRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HabitRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HabitRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HabitRecords.
     */
    distinct?: HabitRecordScalarFieldEnum | HabitRecordScalarFieldEnum[]
  }

  /**
   * HabitRecord findFirstOrThrow
   */
  export type HabitRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitRecord
     */
    select?: HabitRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitRecord
     */
    omit?: HabitRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitRecordInclude<ExtArgs> | null
    /**
     * Filter, which HabitRecord to fetch.
     */
    where?: HabitRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HabitRecords to fetch.
     */
    orderBy?: HabitRecordOrderByWithRelationInput | HabitRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HabitRecords.
     */
    cursor?: HabitRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HabitRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HabitRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HabitRecords.
     */
    distinct?: HabitRecordScalarFieldEnum | HabitRecordScalarFieldEnum[]
  }

  /**
   * HabitRecord findMany
   */
  export type HabitRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitRecord
     */
    select?: HabitRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitRecord
     */
    omit?: HabitRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitRecordInclude<ExtArgs> | null
    /**
     * Filter, which HabitRecords to fetch.
     */
    where?: HabitRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HabitRecords to fetch.
     */
    orderBy?: HabitRecordOrderByWithRelationInput | HabitRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HabitRecords.
     */
    cursor?: HabitRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HabitRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HabitRecords.
     */
    skip?: number
    distinct?: HabitRecordScalarFieldEnum | HabitRecordScalarFieldEnum[]
  }

  /**
   * HabitRecord create
   */
  export type HabitRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitRecord
     */
    select?: HabitRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitRecord
     */
    omit?: HabitRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a HabitRecord.
     */
    data: XOR<HabitRecordCreateInput, HabitRecordUncheckedCreateInput>
  }

  /**
   * HabitRecord createMany
   */
  export type HabitRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HabitRecords.
     */
    data: HabitRecordCreateManyInput | HabitRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HabitRecord update
   */
  export type HabitRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitRecord
     */
    select?: HabitRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitRecord
     */
    omit?: HabitRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a HabitRecord.
     */
    data: XOR<HabitRecordUpdateInput, HabitRecordUncheckedUpdateInput>
    /**
     * Choose, which HabitRecord to update.
     */
    where: HabitRecordWhereUniqueInput
  }

  /**
   * HabitRecord updateMany
   */
  export type HabitRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HabitRecords.
     */
    data: XOR<HabitRecordUpdateManyMutationInput, HabitRecordUncheckedUpdateManyInput>
    /**
     * Filter which HabitRecords to update
     */
    where?: HabitRecordWhereInput
    /**
     * Limit how many HabitRecords to update.
     */
    limit?: number
  }

  /**
   * HabitRecord upsert
   */
  export type HabitRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitRecord
     */
    select?: HabitRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitRecord
     */
    omit?: HabitRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the HabitRecord to update in case it exists.
     */
    where: HabitRecordWhereUniqueInput
    /**
     * In case the HabitRecord found by the `where` argument doesn't exist, create a new HabitRecord with this data.
     */
    create: XOR<HabitRecordCreateInput, HabitRecordUncheckedCreateInput>
    /**
     * In case the HabitRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HabitRecordUpdateInput, HabitRecordUncheckedUpdateInput>
  }

  /**
   * HabitRecord delete
   */
  export type HabitRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitRecord
     */
    select?: HabitRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitRecord
     */
    omit?: HabitRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitRecordInclude<ExtArgs> | null
    /**
     * Filter which HabitRecord to delete.
     */
    where: HabitRecordWhereUniqueInput
  }

  /**
   * HabitRecord deleteMany
   */
  export type HabitRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HabitRecords to delete
     */
    where?: HabitRecordWhereInput
    /**
     * Limit how many HabitRecords to delete.
     */
    limit?: number
  }

  /**
   * HabitRecord without action
   */
  export type HabitRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitRecord
     */
    select?: HabitRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitRecord
     */
    omit?: HabitRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitRecordInclude<ExtArgs> | null
  }


  /**
   * Model LearningPlan
   */

  export type AggregateLearningPlan = {
    _count: LearningPlanCountAggregateOutputType | null
    _avg: LearningPlanAvgAggregateOutputType | null
    _sum: LearningPlanSumAggregateOutputType | null
    _min: LearningPlanMinAggregateOutputType | null
    _max: LearningPlanMaxAggregateOutputType | null
  }

  export type LearningPlanAvgAggregateOutputType = {
    duration: number | null
    reward: number | null
  }

  export type LearningPlanSumAggregateOutputType = {
    duration: number | null
    reward: number | null
  }

  export type LearningPlanMinAggregateOutputType = {
    id: string | null
    title: string | null
    date: string | null
    timeType: string | null
    startTime: string | null
    endTime: string | null
    duration: number | null
    completed: boolean | null
    category: string | null
    reward: number | null
    repeatType: string | null
    ebbinghausMode: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LearningPlanMaxAggregateOutputType = {
    id: string | null
    title: string | null
    date: string | null
    timeType: string | null
    startTime: string | null
    endTime: string | null
    duration: number | null
    completed: boolean | null
    category: string | null
    reward: number | null
    repeatType: string | null
    ebbinghausMode: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LearningPlanCountAggregateOutputType = {
    id: number
    title: number
    date: number
    timeType: number
    startTime: number
    endTime: number
    duration: number
    completed: number
    category: number
    reward: number
    repeatType: number
    ebbinghausMode: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LearningPlanAvgAggregateInputType = {
    duration?: true
    reward?: true
  }

  export type LearningPlanSumAggregateInputType = {
    duration?: true
    reward?: true
  }

  export type LearningPlanMinAggregateInputType = {
    id?: true
    title?: true
    date?: true
    timeType?: true
    startTime?: true
    endTime?: true
    duration?: true
    completed?: true
    category?: true
    reward?: true
    repeatType?: true
    ebbinghausMode?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LearningPlanMaxAggregateInputType = {
    id?: true
    title?: true
    date?: true
    timeType?: true
    startTime?: true
    endTime?: true
    duration?: true
    completed?: true
    category?: true
    reward?: true
    repeatType?: true
    ebbinghausMode?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LearningPlanCountAggregateInputType = {
    id?: true
    title?: true
    date?: true
    timeType?: true
    startTime?: true
    endTime?: true
    duration?: true
    completed?: true
    category?: true
    reward?: true
    repeatType?: true
    ebbinghausMode?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LearningPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LearningPlan to aggregate.
     */
    where?: LearningPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningPlans to fetch.
     */
    orderBy?: LearningPlanOrderByWithRelationInput | LearningPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LearningPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LearningPlans
    **/
    _count?: true | LearningPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LearningPlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LearningPlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LearningPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LearningPlanMaxAggregateInputType
  }

  export type GetLearningPlanAggregateType<T extends LearningPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateLearningPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLearningPlan[P]>
      : GetScalarType<T[P], AggregateLearningPlan[P]>
  }




  export type LearningPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LearningPlanWhereInput
    orderBy?: LearningPlanOrderByWithAggregationInput | LearningPlanOrderByWithAggregationInput[]
    by: LearningPlanScalarFieldEnum[] | LearningPlanScalarFieldEnum
    having?: LearningPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LearningPlanCountAggregateInputType | true
    _avg?: LearningPlanAvgAggregateInputType
    _sum?: LearningPlanSumAggregateInputType
    _min?: LearningPlanMinAggregateInputType
    _max?: LearningPlanMaxAggregateInputType
  }

  export type LearningPlanGroupByOutputType = {
    id: string
    title: string
    date: string
    timeType: string
    startTime: string | null
    endTime: string | null
    duration: number | null
    completed: boolean
    category: string
    reward: number
    repeatType: string | null
    ebbinghausMode: string | null
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: LearningPlanCountAggregateOutputType | null
    _avg: LearningPlanAvgAggregateOutputType | null
    _sum: LearningPlanSumAggregateOutputType | null
    _min: LearningPlanMinAggregateOutputType | null
    _max: LearningPlanMaxAggregateOutputType | null
  }

  type GetLearningPlanGroupByPayload<T extends LearningPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LearningPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LearningPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LearningPlanGroupByOutputType[P]>
            : GetScalarType<T[P], LearningPlanGroupByOutputType[P]>
        }
      >
    >


  export type LearningPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    date?: boolean
    timeType?: boolean
    startTime?: boolean
    endTime?: boolean
    duration?: boolean
    completed?: boolean
    category?: boolean
    reward?: boolean
    repeatType?: boolean
    ebbinghausMode?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["learningPlan"]>



  export type LearningPlanSelectScalar = {
    id?: boolean
    title?: boolean
    date?: boolean
    timeType?: boolean
    startTime?: boolean
    endTime?: boolean
    duration?: boolean
    completed?: boolean
    category?: boolean
    reward?: boolean
    repeatType?: boolean
    ebbinghausMode?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LearningPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "date" | "timeType" | "startTime" | "endTime" | "duration" | "completed" | "category" | "reward" | "repeatType" | "ebbinghausMode" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["learningPlan"]>
  export type LearningPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LearningPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LearningPlan"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      date: string
      timeType: string
      startTime: string | null
      endTime: string | null
      duration: number | null
      completed: boolean
      category: string
      reward: number
      repeatType: string | null
      ebbinghausMode: string | null
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["learningPlan"]>
    composites: {}
  }

  type LearningPlanGetPayload<S extends boolean | null | undefined | LearningPlanDefaultArgs> = $Result.GetResult<Prisma.$LearningPlanPayload, S>

  type LearningPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LearningPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LearningPlanCountAggregateInputType | true
    }

  export interface LearningPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LearningPlan'], meta: { name: 'LearningPlan' } }
    /**
     * Find zero or one LearningPlan that matches the filter.
     * @param {LearningPlanFindUniqueArgs} args - Arguments to find a LearningPlan
     * @example
     * // Get one LearningPlan
     * const learningPlan = await prisma.learningPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LearningPlanFindUniqueArgs>(args: SelectSubset<T, LearningPlanFindUniqueArgs<ExtArgs>>): Prisma__LearningPlanClient<$Result.GetResult<Prisma.$LearningPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LearningPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LearningPlanFindUniqueOrThrowArgs} args - Arguments to find a LearningPlan
     * @example
     * // Get one LearningPlan
     * const learningPlan = await prisma.learningPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LearningPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, LearningPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LearningPlanClient<$Result.GetResult<Prisma.$LearningPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LearningPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningPlanFindFirstArgs} args - Arguments to find a LearningPlan
     * @example
     * // Get one LearningPlan
     * const learningPlan = await prisma.learningPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LearningPlanFindFirstArgs>(args?: SelectSubset<T, LearningPlanFindFirstArgs<ExtArgs>>): Prisma__LearningPlanClient<$Result.GetResult<Prisma.$LearningPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LearningPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningPlanFindFirstOrThrowArgs} args - Arguments to find a LearningPlan
     * @example
     * // Get one LearningPlan
     * const learningPlan = await prisma.learningPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LearningPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, LearningPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__LearningPlanClient<$Result.GetResult<Prisma.$LearningPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LearningPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LearningPlans
     * const learningPlans = await prisma.learningPlan.findMany()
     * 
     * // Get first 10 LearningPlans
     * const learningPlans = await prisma.learningPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const learningPlanWithIdOnly = await prisma.learningPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LearningPlanFindManyArgs>(args?: SelectSubset<T, LearningPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LearningPlan.
     * @param {LearningPlanCreateArgs} args - Arguments to create a LearningPlan.
     * @example
     * // Create one LearningPlan
     * const LearningPlan = await prisma.learningPlan.create({
     *   data: {
     *     // ... data to create a LearningPlan
     *   }
     * })
     * 
     */
    create<T extends LearningPlanCreateArgs>(args: SelectSubset<T, LearningPlanCreateArgs<ExtArgs>>): Prisma__LearningPlanClient<$Result.GetResult<Prisma.$LearningPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LearningPlans.
     * @param {LearningPlanCreateManyArgs} args - Arguments to create many LearningPlans.
     * @example
     * // Create many LearningPlans
     * const learningPlan = await prisma.learningPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LearningPlanCreateManyArgs>(args?: SelectSubset<T, LearningPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LearningPlan.
     * @param {LearningPlanDeleteArgs} args - Arguments to delete one LearningPlan.
     * @example
     * // Delete one LearningPlan
     * const LearningPlan = await prisma.learningPlan.delete({
     *   where: {
     *     // ... filter to delete one LearningPlan
     *   }
     * })
     * 
     */
    delete<T extends LearningPlanDeleteArgs>(args: SelectSubset<T, LearningPlanDeleteArgs<ExtArgs>>): Prisma__LearningPlanClient<$Result.GetResult<Prisma.$LearningPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LearningPlan.
     * @param {LearningPlanUpdateArgs} args - Arguments to update one LearningPlan.
     * @example
     * // Update one LearningPlan
     * const learningPlan = await prisma.learningPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LearningPlanUpdateArgs>(args: SelectSubset<T, LearningPlanUpdateArgs<ExtArgs>>): Prisma__LearningPlanClient<$Result.GetResult<Prisma.$LearningPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LearningPlans.
     * @param {LearningPlanDeleteManyArgs} args - Arguments to filter LearningPlans to delete.
     * @example
     * // Delete a few LearningPlans
     * const { count } = await prisma.learningPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LearningPlanDeleteManyArgs>(args?: SelectSubset<T, LearningPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LearningPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LearningPlans
     * const learningPlan = await prisma.learningPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LearningPlanUpdateManyArgs>(args: SelectSubset<T, LearningPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LearningPlan.
     * @param {LearningPlanUpsertArgs} args - Arguments to update or create a LearningPlan.
     * @example
     * // Update or create a LearningPlan
     * const learningPlan = await prisma.learningPlan.upsert({
     *   create: {
     *     // ... data to create a LearningPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LearningPlan we want to update
     *   }
     * })
     */
    upsert<T extends LearningPlanUpsertArgs>(args: SelectSubset<T, LearningPlanUpsertArgs<ExtArgs>>): Prisma__LearningPlanClient<$Result.GetResult<Prisma.$LearningPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LearningPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningPlanCountArgs} args - Arguments to filter LearningPlans to count.
     * @example
     * // Count the number of LearningPlans
     * const count = await prisma.learningPlan.count({
     *   where: {
     *     // ... the filter for the LearningPlans we want to count
     *   }
     * })
    **/
    count<T extends LearningPlanCountArgs>(
      args?: Subset<T, LearningPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LearningPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LearningPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LearningPlanAggregateArgs>(args: Subset<T, LearningPlanAggregateArgs>): Prisma.PrismaPromise<GetLearningPlanAggregateType<T>>

    /**
     * Group by LearningPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningPlanGroupByArgs} args - Group by arguments.
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
      T extends LearningPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LearningPlanGroupByArgs['orderBy'] }
        : { orderBy?: LearningPlanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LearningPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLearningPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LearningPlan model
   */
  readonly fields: LearningPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LearningPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LearningPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the LearningPlan model
   */
  interface LearningPlanFieldRefs {
    readonly id: FieldRef<"LearningPlan", 'String'>
    readonly title: FieldRef<"LearningPlan", 'String'>
    readonly date: FieldRef<"LearningPlan", 'String'>
    readonly timeType: FieldRef<"LearningPlan", 'String'>
    readonly startTime: FieldRef<"LearningPlan", 'String'>
    readonly endTime: FieldRef<"LearningPlan", 'String'>
    readonly duration: FieldRef<"LearningPlan", 'Int'>
    readonly completed: FieldRef<"LearningPlan", 'Boolean'>
    readonly category: FieldRef<"LearningPlan", 'String'>
    readonly reward: FieldRef<"LearningPlan", 'Int'>
    readonly repeatType: FieldRef<"LearningPlan", 'String'>
    readonly ebbinghausMode: FieldRef<"LearningPlan", 'String'>
    readonly userId: FieldRef<"LearningPlan", 'String'>
    readonly createdAt: FieldRef<"LearningPlan", 'DateTime'>
    readonly updatedAt: FieldRef<"LearningPlan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LearningPlan findUnique
   */
  export type LearningPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPlan
     */
    select?: LearningPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningPlan
     */
    omit?: LearningPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningPlanInclude<ExtArgs> | null
    /**
     * Filter, which LearningPlan to fetch.
     */
    where: LearningPlanWhereUniqueInput
  }

  /**
   * LearningPlan findUniqueOrThrow
   */
  export type LearningPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPlan
     */
    select?: LearningPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningPlan
     */
    omit?: LearningPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningPlanInclude<ExtArgs> | null
    /**
     * Filter, which LearningPlan to fetch.
     */
    where: LearningPlanWhereUniqueInput
  }

  /**
   * LearningPlan findFirst
   */
  export type LearningPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPlan
     */
    select?: LearningPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningPlan
     */
    omit?: LearningPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningPlanInclude<ExtArgs> | null
    /**
     * Filter, which LearningPlan to fetch.
     */
    where?: LearningPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningPlans to fetch.
     */
    orderBy?: LearningPlanOrderByWithRelationInput | LearningPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LearningPlans.
     */
    cursor?: LearningPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LearningPlans.
     */
    distinct?: LearningPlanScalarFieldEnum | LearningPlanScalarFieldEnum[]
  }

  /**
   * LearningPlan findFirstOrThrow
   */
  export type LearningPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPlan
     */
    select?: LearningPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningPlan
     */
    omit?: LearningPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningPlanInclude<ExtArgs> | null
    /**
     * Filter, which LearningPlan to fetch.
     */
    where?: LearningPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningPlans to fetch.
     */
    orderBy?: LearningPlanOrderByWithRelationInput | LearningPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LearningPlans.
     */
    cursor?: LearningPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LearningPlans.
     */
    distinct?: LearningPlanScalarFieldEnum | LearningPlanScalarFieldEnum[]
  }

  /**
   * LearningPlan findMany
   */
  export type LearningPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPlan
     */
    select?: LearningPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningPlan
     */
    omit?: LearningPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningPlanInclude<ExtArgs> | null
    /**
     * Filter, which LearningPlans to fetch.
     */
    where?: LearningPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningPlans to fetch.
     */
    orderBy?: LearningPlanOrderByWithRelationInput | LearningPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LearningPlans.
     */
    cursor?: LearningPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningPlans.
     */
    skip?: number
    distinct?: LearningPlanScalarFieldEnum | LearningPlanScalarFieldEnum[]
  }

  /**
   * LearningPlan create
   */
  export type LearningPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPlan
     */
    select?: LearningPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningPlan
     */
    omit?: LearningPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a LearningPlan.
     */
    data: XOR<LearningPlanCreateInput, LearningPlanUncheckedCreateInput>
  }

  /**
   * LearningPlan createMany
   */
  export type LearningPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LearningPlans.
     */
    data: LearningPlanCreateManyInput | LearningPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LearningPlan update
   */
  export type LearningPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPlan
     */
    select?: LearningPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningPlan
     */
    omit?: LearningPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a LearningPlan.
     */
    data: XOR<LearningPlanUpdateInput, LearningPlanUncheckedUpdateInput>
    /**
     * Choose, which LearningPlan to update.
     */
    where: LearningPlanWhereUniqueInput
  }

  /**
   * LearningPlan updateMany
   */
  export type LearningPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LearningPlans.
     */
    data: XOR<LearningPlanUpdateManyMutationInput, LearningPlanUncheckedUpdateManyInput>
    /**
     * Filter which LearningPlans to update
     */
    where?: LearningPlanWhereInput
    /**
     * Limit how many LearningPlans to update.
     */
    limit?: number
  }

  /**
   * LearningPlan upsert
   */
  export type LearningPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPlan
     */
    select?: LearningPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningPlan
     */
    omit?: LearningPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the LearningPlan to update in case it exists.
     */
    where: LearningPlanWhereUniqueInput
    /**
     * In case the LearningPlan found by the `where` argument doesn't exist, create a new LearningPlan with this data.
     */
    create: XOR<LearningPlanCreateInput, LearningPlanUncheckedCreateInput>
    /**
     * In case the LearningPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LearningPlanUpdateInput, LearningPlanUncheckedUpdateInput>
  }

  /**
   * LearningPlan delete
   */
  export type LearningPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPlan
     */
    select?: LearningPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningPlan
     */
    omit?: LearningPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningPlanInclude<ExtArgs> | null
    /**
     * Filter which LearningPlan to delete.
     */
    where: LearningPlanWhereUniqueInput
  }

  /**
   * LearningPlan deleteMany
   */
  export type LearningPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LearningPlans to delete
     */
    where?: LearningPlanWhereInput
    /**
     * Limit how many LearningPlans to delete.
     */
    limit?: number
  }

  /**
   * LearningPlan without action
   */
  export type LearningPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPlan
     */
    select?: LearningPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningPlan
     */
    omit?: LearningPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningPlanInclude<ExtArgs> | null
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


  export const FamilyScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    isVip: 'isVip',
    vipExpiry: 'vipExpiry',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FamilyScalarFieldEnum = (typeof FamilyScalarFieldEnum)[keyof typeof FamilyScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    avatar: 'avatar',
    points: 'points',
    checkInDays: 'checkInDays',
    role: 'role',
    unlockedPets: 'unlockedPets',
    familyId: 'familyId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CouponScalarFieldEnum: {
    id: 'id',
    code: 'code',
    days: 'days',
    used: 'used',
    usedByFamilyId: 'usedByFamilyId',
    usedAt: 'usedAt',
    createdAt: 'createdAt'
  };

  export type CouponScalarFieldEnum = (typeof CouponScalarFieldEnum)[keyof typeof CouponScalarFieldEnum]


  export const PetScalarFieldEnum: {
    id: 'id',
    name: 'name',
    typeId: 'typeId',
    level: 'level',
    intimacy: 'intimacy',
    fullness: 'fullness',
    cleanliness: 'cleanliness',
    mood: 'mood',
    gender: 'gender',
    isActive: 'isActive',
    lastInteraction: 'lastInteraction',
    userId: 'userId'
  };

  export type PetScalarFieldEnum = (typeof PetScalarFieldEnum)[keyof typeof PetScalarFieldEnum]


  export const WishScalarFieldEnum: {
    id: 'id',
    title: 'title',
    icon: 'icon',
    cost: 'cost',
    category: 'category',
    repeatType: 'repeatType',
    count: 'count',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type WishScalarFieldEnum = (typeof WishScalarFieldEnum)[keyof typeof WishScalarFieldEnum]


  export const MedalScalarFieldEnum: {
    id: 'id',
    title: 'title',
    icon: 'icon',
    desc: 'desc',
    target: 'target',
    current: 'current',
    unlocked: 'unlocked',
    reward: 'reward',
    userId: 'userId'
  };

  export type MedalScalarFieldEnum = (typeof MedalScalarFieldEnum)[keyof typeof MedalScalarFieldEnum]


  export const HistoryScalarFieldEnum: {
    id: 'id',
    type: 'type',
    amount: 'amount',
    reason: 'reason',
    date: 'date',
    userId: 'userId'
  };

  export type HistoryScalarFieldEnum = (typeof HistoryScalarFieldEnum)[keyof typeof HistoryScalarFieldEnum]


  export const HabitScalarFieldEnum: {
    id: 'id',
    title: 'title',
    icon: 'icon',
    color: 'color',
    points: 'points',
    type: 'type',
    maxTimes: 'maxTimes',
    category: 'category',
    duration: 'duration',
    desc: 'desc',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HabitScalarFieldEnum = (typeof HabitScalarFieldEnum)[keyof typeof HabitScalarFieldEnum]


  export const HabitRecordScalarFieldEnum: {
    id: 'id',
    habitId: 'habitId',
    date: 'date',
    timestamp: 'timestamp',
    pointsChange: 'pointsChange',
    userId: 'userId'
  };

  export type HabitRecordScalarFieldEnum = (typeof HabitRecordScalarFieldEnum)[keyof typeof HabitRecordScalarFieldEnum]


  export const LearningPlanScalarFieldEnum: {
    id: 'id',
    title: 'title',
    date: 'date',
    timeType: 'timeType',
    startTime: 'startTime',
    endTime: 'endTime',
    duration: 'duration',
    completed: 'completed',
    category: 'category',
    reward: 'reward',
    repeatType: 'repeatType',
    ebbinghausMode: 'ebbinghausMode',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LearningPlanScalarFieldEnum = (typeof LearningPlanScalarFieldEnum)[keyof typeof LearningPlanScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const FamilyOrderByRelevanceFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password'
  };

  export type FamilyOrderByRelevanceFieldEnum = (typeof FamilyOrderByRelevanceFieldEnum)[keyof typeof FamilyOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    avatar: 'avatar',
    role: 'role',
    unlockedPets: 'unlockedPets',
    familyId: 'familyId'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const CouponOrderByRelevanceFieldEnum: {
    id: 'id',
    code: 'code',
    usedByFamilyId: 'usedByFamilyId'
  };

  export type CouponOrderByRelevanceFieldEnum = (typeof CouponOrderByRelevanceFieldEnum)[keyof typeof CouponOrderByRelevanceFieldEnum]


  export const PetOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    typeId: 'typeId',
    gender: 'gender',
    userId: 'userId'
  };

  export type PetOrderByRelevanceFieldEnum = (typeof PetOrderByRelevanceFieldEnum)[keyof typeof PetOrderByRelevanceFieldEnum]


  export const WishOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    icon: 'icon',
    category: 'category',
    repeatType: 'repeatType',
    userId: 'userId'
  };

  export type WishOrderByRelevanceFieldEnum = (typeof WishOrderByRelevanceFieldEnum)[keyof typeof WishOrderByRelevanceFieldEnum]


  export const MedalOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    icon: 'icon',
    desc: 'desc',
    userId: 'userId'
  };

  export type MedalOrderByRelevanceFieldEnum = (typeof MedalOrderByRelevanceFieldEnum)[keyof typeof MedalOrderByRelevanceFieldEnum]


  export const HistoryOrderByRelevanceFieldEnum: {
    id: 'id',
    type: 'type',
    reason: 'reason',
    userId: 'userId'
  };

  export type HistoryOrderByRelevanceFieldEnum = (typeof HistoryOrderByRelevanceFieldEnum)[keyof typeof HistoryOrderByRelevanceFieldEnum]


  export const HabitOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    icon: 'icon',
    color: 'color',
    type: 'type',
    category: 'category',
    desc: 'desc',
    userId: 'userId'
  };

  export type HabitOrderByRelevanceFieldEnum = (typeof HabitOrderByRelevanceFieldEnum)[keyof typeof HabitOrderByRelevanceFieldEnum]


  export const HabitRecordOrderByRelevanceFieldEnum: {
    id: 'id',
    habitId: 'habitId',
    date: 'date',
    userId: 'userId'
  };

  export type HabitRecordOrderByRelevanceFieldEnum = (typeof HabitRecordOrderByRelevanceFieldEnum)[keyof typeof HabitRecordOrderByRelevanceFieldEnum]


  export const LearningPlanOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    date: 'date',
    timeType: 'timeType',
    startTime: 'startTime',
    endTime: 'endTime',
    category: 'category',
    repeatType: 'repeatType',
    ebbinghausMode: 'ebbinghausMode',
    userId: 'userId'
  };

  export type LearningPlanOrderByRelevanceFieldEnum = (typeof LearningPlanOrderByRelevanceFieldEnum)[keyof typeof LearningPlanOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type FamilyWhereInput = {
    AND?: FamilyWhereInput | FamilyWhereInput[]
    OR?: FamilyWhereInput[]
    NOT?: FamilyWhereInput | FamilyWhereInput[]
    id?: StringFilter<"Family"> | string
    username?: StringFilter<"Family"> | string
    password?: StringFilter<"Family"> | string
    isVip?: BoolFilter<"Family"> | boolean
    vipExpiry?: BigIntFilter<"Family"> | bigint | number
    createdAt?: DateTimeFilter<"Family"> | Date | string
    updatedAt?: DateTimeFilter<"Family"> | Date | string
    members?: UserListRelationFilter
    coupons?: CouponListRelationFilter
  }

  export type FamilyOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    isVip?: SortOrder
    vipExpiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    members?: UserOrderByRelationAggregateInput
    coupons?: CouponOrderByRelationAggregateInput
    _relevance?: FamilyOrderByRelevanceInput
  }

  export type FamilyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: FamilyWhereInput | FamilyWhereInput[]
    OR?: FamilyWhereInput[]
    NOT?: FamilyWhereInput | FamilyWhereInput[]
    password?: StringFilter<"Family"> | string
    isVip?: BoolFilter<"Family"> | boolean
    vipExpiry?: BigIntFilter<"Family"> | bigint | number
    createdAt?: DateTimeFilter<"Family"> | Date | string
    updatedAt?: DateTimeFilter<"Family"> | Date | string
    members?: UserListRelationFilter
    coupons?: CouponListRelationFilter
  }, "id" | "username">

  export type FamilyOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    isVip?: SortOrder
    vipExpiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FamilyCountOrderByAggregateInput
    _avg?: FamilyAvgOrderByAggregateInput
    _max?: FamilyMaxOrderByAggregateInput
    _min?: FamilyMinOrderByAggregateInput
    _sum?: FamilySumOrderByAggregateInput
  }

  export type FamilyScalarWhereWithAggregatesInput = {
    AND?: FamilyScalarWhereWithAggregatesInput | FamilyScalarWhereWithAggregatesInput[]
    OR?: FamilyScalarWhereWithAggregatesInput[]
    NOT?: FamilyScalarWhereWithAggregatesInput | FamilyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Family"> | string
    username?: StringWithAggregatesFilter<"Family"> | string
    password?: StringWithAggregatesFilter<"Family"> | string
    isVip?: BoolWithAggregatesFilter<"Family"> | boolean
    vipExpiry?: BigIntWithAggregatesFilter<"Family"> | bigint | number
    createdAt?: DateTimeWithAggregatesFilter<"Family"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Family"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    points?: IntFilter<"User"> | number
    checkInDays?: IntFilter<"User"> | number
    role?: StringFilter<"User"> | string
    unlockedPets?: StringNullableFilter<"User"> | string | null
    familyId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    family?: XOR<FamilyScalarRelationFilter, FamilyWhereInput>
    habits?: HabitListRelationFilter
    records?: HabitRecordListRelationFilter
    learningPlans?: LearningPlanListRelationFilter
    pets?: PetListRelationFilter
    wishes?: WishListRelationFilter
    medals?: MedalListRelationFilter
    history?: HistoryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    avatar?: SortOrderInput | SortOrder
    points?: SortOrder
    checkInDays?: SortOrder
    role?: SortOrder
    unlockedPets?: SortOrderInput | SortOrder
    familyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    family?: FamilyOrderByWithRelationInput
    habits?: HabitOrderByRelationAggregateInput
    records?: HabitRecordOrderByRelationAggregateInput
    learningPlans?: LearningPlanOrderByRelationAggregateInput
    pets?: PetOrderByRelationAggregateInput
    wishes?: WishOrderByRelationAggregateInput
    medals?: MedalOrderByRelationAggregateInput
    history?: HistoryOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    points?: IntFilter<"User"> | number
    checkInDays?: IntFilter<"User"> | number
    role?: StringFilter<"User"> | string
    unlockedPets?: StringNullableFilter<"User"> | string | null
    familyId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    family?: XOR<FamilyScalarRelationFilter, FamilyWhereInput>
    habits?: HabitListRelationFilter
    records?: HabitRecordListRelationFilter
    learningPlans?: LearningPlanListRelationFilter
    pets?: PetListRelationFilter
    wishes?: WishListRelationFilter
    medals?: MedalListRelationFilter
    history?: HistoryListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    avatar?: SortOrderInput | SortOrder
    points?: SortOrder
    checkInDays?: SortOrder
    role?: SortOrder
    unlockedPets?: SortOrderInput | SortOrder
    familyId?: SortOrder
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
    name?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    points?: IntWithAggregatesFilter<"User"> | number
    checkInDays?: IntWithAggregatesFilter<"User"> | number
    role?: StringWithAggregatesFilter<"User"> | string
    unlockedPets?: StringNullableWithAggregatesFilter<"User"> | string | null
    familyId?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CouponWhereInput = {
    AND?: CouponWhereInput | CouponWhereInput[]
    OR?: CouponWhereInput[]
    NOT?: CouponWhereInput | CouponWhereInput[]
    id?: StringFilter<"Coupon"> | string
    code?: StringFilter<"Coupon"> | string
    days?: IntFilter<"Coupon"> | number
    used?: BoolFilter<"Coupon"> | boolean
    usedByFamilyId?: StringNullableFilter<"Coupon"> | string | null
    usedAt?: DateTimeNullableFilter<"Coupon"> | Date | string | null
    createdAt?: DateTimeFilter<"Coupon"> | Date | string
    family?: XOR<FamilyNullableScalarRelationFilter, FamilyWhereInput> | null
  }

  export type CouponOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    days?: SortOrder
    used?: SortOrder
    usedByFamilyId?: SortOrderInput | SortOrder
    usedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    family?: FamilyOrderByWithRelationInput
    _relevance?: CouponOrderByRelevanceInput
  }

  export type CouponWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: CouponWhereInput | CouponWhereInput[]
    OR?: CouponWhereInput[]
    NOT?: CouponWhereInput | CouponWhereInput[]
    days?: IntFilter<"Coupon"> | number
    used?: BoolFilter<"Coupon"> | boolean
    usedByFamilyId?: StringNullableFilter<"Coupon"> | string | null
    usedAt?: DateTimeNullableFilter<"Coupon"> | Date | string | null
    createdAt?: DateTimeFilter<"Coupon"> | Date | string
    family?: XOR<FamilyNullableScalarRelationFilter, FamilyWhereInput> | null
  }, "id" | "code">

  export type CouponOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    days?: SortOrder
    used?: SortOrder
    usedByFamilyId?: SortOrderInput | SortOrder
    usedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CouponCountOrderByAggregateInput
    _avg?: CouponAvgOrderByAggregateInput
    _max?: CouponMaxOrderByAggregateInput
    _min?: CouponMinOrderByAggregateInput
    _sum?: CouponSumOrderByAggregateInput
  }

  export type CouponScalarWhereWithAggregatesInput = {
    AND?: CouponScalarWhereWithAggregatesInput | CouponScalarWhereWithAggregatesInput[]
    OR?: CouponScalarWhereWithAggregatesInput[]
    NOT?: CouponScalarWhereWithAggregatesInput | CouponScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Coupon"> | string
    code?: StringWithAggregatesFilter<"Coupon"> | string
    days?: IntWithAggregatesFilter<"Coupon"> | number
    used?: BoolWithAggregatesFilter<"Coupon"> | boolean
    usedByFamilyId?: StringNullableWithAggregatesFilter<"Coupon"> | string | null
    usedAt?: DateTimeNullableWithAggregatesFilter<"Coupon"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Coupon"> | Date | string
  }

  export type PetWhereInput = {
    AND?: PetWhereInput | PetWhereInput[]
    OR?: PetWhereInput[]
    NOT?: PetWhereInput | PetWhereInput[]
    id?: StringFilter<"Pet"> | string
    name?: StringFilter<"Pet"> | string
    typeId?: StringFilter<"Pet"> | string
    level?: IntFilter<"Pet"> | number
    intimacy?: IntFilter<"Pet"> | number
    fullness?: IntFilter<"Pet"> | number
    cleanliness?: IntFilter<"Pet"> | number
    mood?: IntFilter<"Pet"> | number
    gender?: StringFilter<"Pet"> | string
    isActive?: BoolFilter<"Pet"> | boolean
    lastInteraction?: DateTimeFilter<"Pet"> | Date | string
    userId?: StringFilter<"Pet"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PetOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    typeId?: SortOrder
    level?: SortOrder
    intimacy?: SortOrder
    fullness?: SortOrder
    cleanliness?: SortOrder
    mood?: SortOrder
    gender?: SortOrder
    isActive?: SortOrder
    lastInteraction?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: PetOrderByRelevanceInput
  }

  export type PetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_typeId?: PetUserIdTypeIdCompoundUniqueInput
    AND?: PetWhereInput | PetWhereInput[]
    OR?: PetWhereInput[]
    NOT?: PetWhereInput | PetWhereInput[]
    name?: StringFilter<"Pet"> | string
    typeId?: StringFilter<"Pet"> | string
    level?: IntFilter<"Pet"> | number
    intimacy?: IntFilter<"Pet"> | number
    fullness?: IntFilter<"Pet"> | number
    cleanliness?: IntFilter<"Pet"> | number
    mood?: IntFilter<"Pet"> | number
    gender?: StringFilter<"Pet"> | string
    isActive?: BoolFilter<"Pet"> | boolean
    lastInteraction?: DateTimeFilter<"Pet"> | Date | string
    userId?: StringFilter<"Pet"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_typeId">

  export type PetOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    typeId?: SortOrder
    level?: SortOrder
    intimacy?: SortOrder
    fullness?: SortOrder
    cleanliness?: SortOrder
    mood?: SortOrder
    gender?: SortOrder
    isActive?: SortOrder
    lastInteraction?: SortOrder
    userId?: SortOrder
    _count?: PetCountOrderByAggregateInput
    _avg?: PetAvgOrderByAggregateInput
    _max?: PetMaxOrderByAggregateInput
    _min?: PetMinOrderByAggregateInput
    _sum?: PetSumOrderByAggregateInput
  }

  export type PetScalarWhereWithAggregatesInput = {
    AND?: PetScalarWhereWithAggregatesInput | PetScalarWhereWithAggregatesInput[]
    OR?: PetScalarWhereWithAggregatesInput[]
    NOT?: PetScalarWhereWithAggregatesInput | PetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pet"> | string
    name?: StringWithAggregatesFilter<"Pet"> | string
    typeId?: StringWithAggregatesFilter<"Pet"> | string
    level?: IntWithAggregatesFilter<"Pet"> | number
    intimacy?: IntWithAggregatesFilter<"Pet"> | number
    fullness?: IntWithAggregatesFilter<"Pet"> | number
    cleanliness?: IntWithAggregatesFilter<"Pet"> | number
    mood?: IntWithAggregatesFilter<"Pet"> | number
    gender?: StringWithAggregatesFilter<"Pet"> | string
    isActive?: BoolWithAggregatesFilter<"Pet"> | boolean
    lastInteraction?: DateTimeWithAggregatesFilter<"Pet"> | Date | string
    userId?: StringWithAggregatesFilter<"Pet"> | string
  }

  export type WishWhereInput = {
    AND?: WishWhereInput | WishWhereInput[]
    OR?: WishWhereInput[]
    NOT?: WishWhereInput | WishWhereInput[]
    id?: StringFilter<"Wish"> | string
    title?: StringFilter<"Wish"> | string
    icon?: StringFilter<"Wish"> | string
    cost?: IntFilter<"Wish"> | number
    category?: StringFilter<"Wish"> | string
    repeatType?: StringFilter<"Wish"> | string
    count?: IntFilter<"Wish"> | number
    userId?: StringFilter<"Wish"> | string
    createdAt?: DateTimeFilter<"Wish"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WishOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    icon?: SortOrder
    cost?: SortOrder
    category?: SortOrder
    repeatType?: SortOrder
    count?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: WishOrderByRelevanceInput
  }

  export type WishWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WishWhereInput | WishWhereInput[]
    OR?: WishWhereInput[]
    NOT?: WishWhereInput | WishWhereInput[]
    title?: StringFilter<"Wish"> | string
    icon?: StringFilter<"Wish"> | string
    cost?: IntFilter<"Wish"> | number
    category?: StringFilter<"Wish"> | string
    repeatType?: StringFilter<"Wish"> | string
    count?: IntFilter<"Wish"> | number
    userId?: StringFilter<"Wish"> | string
    createdAt?: DateTimeFilter<"Wish"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type WishOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    icon?: SortOrder
    cost?: SortOrder
    category?: SortOrder
    repeatType?: SortOrder
    count?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: WishCountOrderByAggregateInput
    _avg?: WishAvgOrderByAggregateInput
    _max?: WishMaxOrderByAggregateInput
    _min?: WishMinOrderByAggregateInput
    _sum?: WishSumOrderByAggregateInput
  }

  export type WishScalarWhereWithAggregatesInput = {
    AND?: WishScalarWhereWithAggregatesInput | WishScalarWhereWithAggregatesInput[]
    OR?: WishScalarWhereWithAggregatesInput[]
    NOT?: WishScalarWhereWithAggregatesInput | WishScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Wish"> | string
    title?: StringWithAggregatesFilter<"Wish"> | string
    icon?: StringWithAggregatesFilter<"Wish"> | string
    cost?: IntWithAggregatesFilter<"Wish"> | number
    category?: StringWithAggregatesFilter<"Wish"> | string
    repeatType?: StringWithAggregatesFilter<"Wish"> | string
    count?: IntWithAggregatesFilter<"Wish"> | number
    userId?: StringWithAggregatesFilter<"Wish"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Wish"> | Date | string
  }

  export type MedalWhereInput = {
    AND?: MedalWhereInput | MedalWhereInput[]
    OR?: MedalWhereInput[]
    NOT?: MedalWhereInput | MedalWhereInput[]
    id?: StringFilter<"Medal"> | string
    title?: StringFilter<"Medal"> | string
    icon?: StringFilter<"Medal"> | string
    desc?: StringNullableFilter<"Medal"> | string | null
    target?: IntFilter<"Medal"> | number
    current?: IntFilter<"Medal"> | number
    unlocked?: BoolFilter<"Medal"> | boolean
    reward?: IntFilter<"Medal"> | number
    userId?: StringFilter<"Medal"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MedalOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    icon?: SortOrder
    desc?: SortOrderInput | SortOrder
    target?: SortOrder
    current?: SortOrder
    unlocked?: SortOrder
    reward?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: MedalOrderByRelevanceInput
  }

  export type MedalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MedalWhereInput | MedalWhereInput[]
    OR?: MedalWhereInput[]
    NOT?: MedalWhereInput | MedalWhereInput[]
    title?: StringFilter<"Medal"> | string
    icon?: StringFilter<"Medal"> | string
    desc?: StringNullableFilter<"Medal"> | string | null
    target?: IntFilter<"Medal"> | number
    current?: IntFilter<"Medal"> | number
    unlocked?: BoolFilter<"Medal"> | boolean
    reward?: IntFilter<"Medal"> | number
    userId?: StringFilter<"Medal"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MedalOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    icon?: SortOrder
    desc?: SortOrderInput | SortOrder
    target?: SortOrder
    current?: SortOrder
    unlocked?: SortOrder
    reward?: SortOrder
    userId?: SortOrder
    _count?: MedalCountOrderByAggregateInput
    _avg?: MedalAvgOrderByAggregateInput
    _max?: MedalMaxOrderByAggregateInput
    _min?: MedalMinOrderByAggregateInput
    _sum?: MedalSumOrderByAggregateInput
  }

  export type MedalScalarWhereWithAggregatesInput = {
    AND?: MedalScalarWhereWithAggregatesInput | MedalScalarWhereWithAggregatesInput[]
    OR?: MedalScalarWhereWithAggregatesInput[]
    NOT?: MedalScalarWhereWithAggregatesInput | MedalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Medal"> | string
    title?: StringWithAggregatesFilter<"Medal"> | string
    icon?: StringWithAggregatesFilter<"Medal"> | string
    desc?: StringNullableWithAggregatesFilter<"Medal"> | string | null
    target?: IntWithAggregatesFilter<"Medal"> | number
    current?: IntWithAggregatesFilter<"Medal"> | number
    unlocked?: BoolWithAggregatesFilter<"Medal"> | boolean
    reward?: IntWithAggregatesFilter<"Medal"> | number
    userId?: StringWithAggregatesFilter<"Medal"> | string
  }

  export type HistoryWhereInput = {
    AND?: HistoryWhereInput | HistoryWhereInput[]
    OR?: HistoryWhereInput[]
    NOT?: HistoryWhereInput | HistoryWhereInput[]
    id?: StringFilter<"History"> | string
    type?: StringFilter<"History"> | string
    amount?: IntFilter<"History"> | number
    reason?: StringFilter<"History"> | string
    date?: DateTimeFilter<"History"> | Date | string
    userId?: StringFilter<"History"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type HistoryOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    reason?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: HistoryOrderByRelevanceInput
  }

  export type HistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HistoryWhereInput | HistoryWhereInput[]
    OR?: HistoryWhereInput[]
    NOT?: HistoryWhereInput | HistoryWhereInput[]
    type?: StringFilter<"History"> | string
    amount?: IntFilter<"History"> | number
    reason?: StringFilter<"History"> | string
    date?: DateTimeFilter<"History"> | Date | string
    userId?: StringFilter<"History"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type HistoryOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    reason?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    _count?: HistoryCountOrderByAggregateInput
    _avg?: HistoryAvgOrderByAggregateInput
    _max?: HistoryMaxOrderByAggregateInput
    _min?: HistoryMinOrderByAggregateInput
    _sum?: HistorySumOrderByAggregateInput
  }

  export type HistoryScalarWhereWithAggregatesInput = {
    AND?: HistoryScalarWhereWithAggregatesInput | HistoryScalarWhereWithAggregatesInput[]
    OR?: HistoryScalarWhereWithAggregatesInput[]
    NOT?: HistoryScalarWhereWithAggregatesInput | HistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"History"> | string
    type?: StringWithAggregatesFilter<"History"> | string
    amount?: IntWithAggregatesFilter<"History"> | number
    reason?: StringWithAggregatesFilter<"History"> | string
    date?: DateTimeWithAggregatesFilter<"History"> | Date | string
    userId?: StringWithAggregatesFilter<"History"> | string
  }

  export type HabitWhereInput = {
    AND?: HabitWhereInput | HabitWhereInput[]
    OR?: HabitWhereInput[]
    NOT?: HabitWhereInput | HabitWhereInput[]
    id?: StringFilter<"Habit"> | string
    title?: StringFilter<"Habit"> | string
    icon?: StringFilter<"Habit"> | string
    color?: StringFilter<"Habit"> | string
    points?: IntFilter<"Habit"> | number
    type?: StringFilter<"Habit"> | string
    maxTimes?: IntFilter<"Habit"> | number
    category?: StringFilter<"Habit"> | string
    duration?: IntFilter<"Habit"> | number
    desc?: StringNullableFilter<"Habit"> | string | null
    userId?: StringFilter<"Habit"> | string
    createdAt?: DateTimeFilter<"Habit"> | Date | string
    updatedAt?: DateTimeFilter<"Habit"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    records?: HabitRecordListRelationFilter
  }

  export type HabitOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    icon?: SortOrder
    color?: SortOrder
    points?: SortOrder
    type?: SortOrder
    maxTimes?: SortOrder
    category?: SortOrder
    duration?: SortOrder
    desc?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    records?: HabitRecordOrderByRelationAggregateInput
    _relevance?: HabitOrderByRelevanceInput
  }

  export type HabitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HabitWhereInput | HabitWhereInput[]
    OR?: HabitWhereInput[]
    NOT?: HabitWhereInput | HabitWhereInput[]
    title?: StringFilter<"Habit"> | string
    icon?: StringFilter<"Habit"> | string
    color?: StringFilter<"Habit"> | string
    points?: IntFilter<"Habit"> | number
    type?: StringFilter<"Habit"> | string
    maxTimes?: IntFilter<"Habit"> | number
    category?: StringFilter<"Habit"> | string
    duration?: IntFilter<"Habit"> | number
    desc?: StringNullableFilter<"Habit"> | string | null
    userId?: StringFilter<"Habit"> | string
    createdAt?: DateTimeFilter<"Habit"> | Date | string
    updatedAt?: DateTimeFilter<"Habit"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    records?: HabitRecordListRelationFilter
  }, "id">

  export type HabitOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    icon?: SortOrder
    color?: SortOrder
    points?: SortOrder
    type?: SortOrder
    maxTimes?: SortOrder
    category?: SortOrder
    duration?: SortOrder
    desc?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HabitCountOrderByAggregateInput
    _avg?: HabitAvgOrderByAggregateInput
    _max?: HabitMaxOrderByAggregateInput
    _min?: HabitMinOrderByAggregateInput
    _sum?: HabitSumOrderByAggregateInput
  }

  export type HabitScalarWhereWithAggregatesInput = {
    AND?: HabitScalarWhereWithAggregatesInput | HabitScalarWhereWithAggregatesInput[]
    OR?: HabitScalarWhereWithAggregatesInput[]
    NOT?: HabitScalarWhereWithAggregatesInput | HabitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Habit"> | string
    title?: StringWithAggregatesFilter<"Habit"> | string
    icon?: StringWithAggregatesFilter<"Habit"> | string
    color?: StringWithAggregatesFilter<"Habit"> | string
    points?: IntWithAggregatesFilter<"Habit"> | number
    type?: StringWithAggregatesFilter<"Habit"> | string
    maxTimes?: IntWithAggregatesFilter<"Habit"> | number
    category?: StringWithAggregatesFilter<"Habit"> | string
    duration?: IntWithAggregatesFilter<"Habit"> | number
    desc?: StringNullableWithAggregatesFilter<"Habit"> | string | null
    userId?: StringWithAggregatesFilter<"Habit"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Habit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Habit"> | Date | string
  }

  export type HabitRecordWhereInput = {
    AND?: HabitRecordWhereInput | HabitRecordWhereInput[]
    OR?: HabitRecordWhereInput[]
    NOT?: HabitRecordWhereInput | HabitRecordWhereInput[]
    id?: StringFilter<"HabitRecord"> | string
    habitId?: StringFilter<"HabitRecord"> | string
    date?: StringFilter<"HabitRecord"> | string
    timestamp?: DateTimeFilter<"HabitRecord"> | Date | string
    pointsChange?: IntFilter<"HabitRecord"> | number
    userId?: StringFilter<"HabitRecord"> | string
    habit?: XOR<HabitScalarRelationFilter, HabitWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type HabitRecordOrderByWithRelationInput = {
    id?: SortOrder
    habitId?: SortOrder
    date?: SortOrder
    timestamp?: SortOrder
    pointsChange?: SortOrder
    userId?: SortOrder
    habit?: HabitOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    _relevance?: HabitRecordOrderByRelevanceInput
  }

  export type HabitRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HabitRecordWhereInput | HabitRecordWhereInput[]
    OR?: HabitRecordWhereInput[]
    NOT?: HabitRecordWhereInput | HabitRecordWhereInput[]
    habitId?: StringFilter<"HabitRecord"> | string
    date?: StringFilter<"HabitRecord"> | string
    timestamp?: DateTimeFilter<"HabitRecord"> | Date | string
    pointsChange?: IntFilter<"HabitRecord"> | number
    userId?: StringFilter<"HabitRecord"> | string
    habit?: XOR<HabitScalarRelationFilter, HabitWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type HabitRecordOrderByWithAggregationInput = {
    id?: SortOrder
    habitId?: SortOrder
    date?: SortOrder
    timestamp?: SortOrder
    pointsChange?: SortOrder
    userId?: SortOrder
    _count?: HabitRecordCountOrderByAggregateInput
    _avg?: HabitRecordAvgOrderByAggregateInput
    _max?: HabitRecordMaxOrderByAggregateInput
    _min?: HabitRecordMinOrderByAggregateInput
    _sum?: HabitRecordSumOrderByAggregateInput
  }

  export type HabitRecordScalarWhereWithAggregatesInput = {
    AND?: HabitRecordScalarWhereWithAggregatesInput | HabitRecordScalarWhereWithAggregatesInput[]
    OR?: HabitRecordScalarWhereWithAggregatesInput[]
    NOT?: HabitRecordScalarWhereWithAggregatesInput | HabitRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HabitRecord"> | string
    habitId?: StringWithAggregatesFilter<"HabitRecord"> | string
    date?: StringWithAggregatesFilter<"HabitRecord"> | string
    timestamp?: DateTimeWithAggregatesFilter<"HabitRecord"> | Date | string
    pointsChange?: IntWithAggregatesFilter<"HabitRecord"> | number
    userId?: StringWithAggregatesFilter<"HabitRecord"> | string
  }

  export type LearningPlanWhereInput = {
    AND?: LearningPlanWhereInput | LearningPlanWhereInput[]
    OR?: LearningPlanWhereInput[]
    NOT?: LearningPlanWhereInput | LearningPlanWhereInput[]
    id?: StringFilter<"LearningPlan"> | string
    title?: StringFilter<"LearningPlan"> | string
    date?: StringFilter<"LearningPlan"> | string
    timeType?: StringFilter<"LearningPlan"> | string
    startTime?: StringNullableFilter<"LearningPlan"> | string | null
    endTime?: StringNullableFilter<"LearningPlan"> | string | null
    duration?: IntNullableFilter<"LearningPlan"> | number | null
    completed?: BoolFilter<"LearningPlan"> | boolean
    category?: StringFilter<"LearningPlan"> | string
    reward?: IntFilter<"LearningPlan"> | number
    repeatType?: StringNullableFilter<"LearningPlan"> | string | null
    ebbinghausMode?: StringNullableFilter<"LearningPlan"> | string | null
    userId?: StringFilter<"LearningPlan"> | string
    createdAt?: DateTimeFilter<"LearningPlan"> | Date | string
    updatedAt?: DateTimeFilter<"LearningPlan"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LearningPlanOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    timeType?: SortOrder
    startTime?: SortOrderInput | SortOrder
    endTime?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    completed?: SortOrder
    category?: SortOrder
    reward?: SortOrder
    repeatType?: SortOrderInput | SortOrder
    ebbinghausMode?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: LearningPlanOrderByRelevanceInput
  }

  export type LearningPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LearningPlanWhereInput | LearningPlanWhereInput[]
    OR?: LearningPlanWhereInput[]
    NOT?: LearningPlanWhereInput | LearningPlanWhereInput[]
    title?: StringFilter<"LearningPlan"> | string
    date?: StringFilter<"LearningPlan"> | string
    timeType?: StringFilter<"LearningPlan"> | string
    startTime?: StringNullableFilter<"LearningPlan"> | string | null
    endTime?: StringNullableFilter<"LearningPlan"> | string | null
    duration?: IntNullableFilter<"LearningPlan"> | number | null
    completed?: BoolFilter<"LearningPlan"> | boolean
    category?: StringFilter<"LearningPlan"> | string
    reward?: IntFilter<"LearningPlan"> | number
    repeatType?: StringNullableFilter<"LearningPlan"> | string | null
    ebbinghausMode?: StringNullableFilter<"LearningPlan"> | string | null
    userId?: StringFilter<"LearningPlan"> | string
    createdAt?: DateTimeFilter<"LearningPlan"> | Date | string
    updatedAt?: DateTimeFilter<"LearningPlan"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type LearningPlanOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    timeType?: SortOrder
    startTime?: SortOrderInput | SortOrder
    endTime?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    completed?: SortOrder
    category?: SortOrder
    reward?: SortOrder
    repeatType?: SortOrderInput | SortOrder
    ebbinghausMode?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LearningPlanCountOrderByAggregateInput
    _avg?: LearningPlanAvgOrderByAggregateInput
    _max?: LearningPlanMaxOrderByAggregateInput
    _min?: LearningPlanMinOrderByAggregateInput
    _sum?: LearningPlanSumOrderByAggregateInput
  }

  export type LearningPlanScalarWhereWithAggregatesInput = {
    AND?: LearningPlanScalarWhereWithAggregatesInput | LearningPlanScalarWhereWithAggregatesInput[]
    OR?: LearningPlanScalarWhereWithAggregatesInput[]
    NOT?: LearningPlanScalarWhereWithAggregatesInput | LearningPlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LearningPlan"> | string
    title?: StringWithAggregatesFilter<"LearningPlan"> | string
    date?: StringWithAggregatesFilter<"LearningPlan"> | string
    timeType?: StringWithAggregatesFilter<"LearningPlan"> | string
    startTime?: StringNullableWithAggregatesFilter<"LearningPlan"> | string | null
    endTime?: StringNullableWithAggregatesFilter<"LearningPlan"> | string | null
    duration?: IntNullableWithAggregatesFilter<"LearningPlan"> | number | null
    completed?: BoolWithAggregatesFilter<"LearningPlan"> | boolean
    category?: StringWithAggregatesFilter<"LearningPlan"> | string
    reward?: IntWithAggregatesFilter<"LearningPlan"> | number
    repeatType?: StringNullableWithAggregatesFilter<"LearningPlan"> | string | null
    ebbinghausMode?: StringNullableWithAggregatesFilter<"LearningPlan"> | string | null
    userId?: StringWithAggregatesFilter<"LearningPlan"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LearningPlan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LearningPlan"> | Date | string
  }

  export type FamilyCreateInput = {
    id?: string
    username: string
    password: string
    isVip?: boolean
    vipExpiry?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserCreateNestedManyWithoutFamilyInput
    coupons?: CouponCreateNestedManyWithoutFamilyInput
  }

  export type FamilyUncheckedCreateInput = {
    id?: string
    username: string
    password: string
    isVip?: boolean
    vipExpiry?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserUncheckedCreateNestedManyWithoutFamilyInput
    coupons?: CouponUncheckedCreateNestedManyWithoutFamilyInput
  }

  export type FamilyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVip?: BoolFieldUpdateOperationsInput | boolean
    vipExpiry?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserUpdateManyWithoutFamilyNestedInput
    coupons?: CouponUpdateManyWithoutFamilyNestedInput
  }

  export type FamilyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVip?: BoolFieldUpdateOperationsInput | boolean
    vipExpiry?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserUncheckedUpdateManyWithoutFamilyNestedInput
    coupons?: CouponUncheckedUpdateManyWithoutFamilyNestedInput
  }

  export type FamilyCreateManyInput = {
    id?: string
    username: string
    password: string
    isVip?: boolean
    vipExpiry?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FamilyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVip?: BoolFieldUpdateOperationsInput | boolean
    vipExpiry?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FamilyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVip?: BoolFieldUpdateOperationsInput | boolean
    vipExpiry?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    avatar?: string | null
    points?: number
    checkInDays?: number
    role?: string
    unlockedPets?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    family: FamilyCreateNestedOneWithoutMembersInput
    habits?: HabitCreateNestedManyWithoutUserInput
    records?: HabitRecordCreateNestedManyWithoutUserInput
    learningPlans?: LearningPlanCreateNestedManyWithoutUserInput
    pets?: PetCreateNestedManyWithoutUserInput
    wishes?: WishCreateNestedManyWithoutUserInput
    medals?: MedalCreateNestedManyWithoutUserInput
    history?: HistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    avatar?: string | null
    points?: number
    checkInDays?: number
    role?: string
    unlockedPets?: string | null
    familyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    habits?: HabitUncheckedCreateNestedManyWithoutUserInput
    records?: HabitRecordUncheckedCreateNestedManyWithoutUserInput
    learningPlans?: LearningPlanUncheckedCreateNestedManyWithoutUserInput
    pets?: PetUncheckedCreateNestedManyWithoutUserInput
    wishes?: WishUncheckedCreateNestedManyWithoutUserInput
    medals?: MedalUncheckedCreateNestedManyWithoutUserInput
    history?: HistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    checkInDays?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    unlockedPets?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    family?: FamilyUpdateOneRequiredWithoutMembersNestedInput
    habits?: HabitUpdateManyWithoutUserNestedInput
    records?: HabitRecordUpdateManyWithoutUserNestedInput
    learningPlans?: LearningPlanUpdateManyWithoutUserNestedInput
    pets?: PetUpdateManyWithoutUserNestedInput
    wishes?: WishUpdateManyWithoutUserNestedInput
    medals?: MedalUpdateManyWithoutUserNestedInput
    history?: HistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    checkInDays?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    unlockedPets?: NullableStringFieldUpdateOperationsInput | string | null
    familyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habits?: HabitUncheckedUpdateManyWithoutUserNestedInput
    records?: HabitRecordUncheckedUpdateManyWithoutUserNestedInput
    learningPlans?: LearningPlanUncheckedUpdateManyWithoutUserNestedInput
    pets?: PetUncheckedUpdateManyWithoutUserNestedInput
    wishes?: WishUncheckedUpdateManyWithoutUserNestedInput
    medals?: MedalUncheckedUpdateManyWithoutUserNestedInput
    history?: HistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    avatar?: string | null
    points?: number
    checkInDays?: number
    role?: string
    unlockedPets?: string | null
    familyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    checkInDays?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    unlockedPets?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    checkInDays?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    unlockedPets?: NullableStringFieldUpdateOperationsInput | string | null
    familyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponCreateInput = {
    id?: string
    code: string
    days?: number
    used?: boolean
    usedAt?: Date | string | null
    createdAt?: Date | string
    family?: FamilyCreateNestedOneWithoutCouponsInput
  }

  export type CouponUncheckedCreateInput = {
    id?: string
    code: string
    days?: number
    used?: boolean
    usedByFamilyId?: string | null
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type CouponUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    days?: IntFieldUpdateOperationsInput | number
    used?: BoolFieldUpdateOperationsInput | boolean
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    family?: FamilyUpdateOneWithoutCouponsNestedInput
  }

  export type CouponUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    days?: IntFieldUpdateOperationsInput | number
    used?: BoolFieldUpdateOperationsInput | boolean
    usedByFamilyId?: NullableStringFieldUpdateOperationsInput | string | null
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponCreateManyInput = {
    id?: string
    code: string
    days?: number
    used?: boolean
    usedByFamilyId?: string | null
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type CouponUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    days?: IntFieldUpdateOperationsInput | number
    used?: BoolFieldUpdateOperationsInput | boolean
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    days?: IntFieldUpdateOperationsInput | number
    used?: BoolFieldUpdateOperationsInput | boolean
    usedByFamilyId?: NullableStringFieldUpdateOperationsInput | string | null
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetCreateInput = {
    id?: string
    name: string
    typeId: string
    level?: number
    intimacy?: number
    fullness?: number
    cleanliness?: number
    mood?: number
    gender?: string
    isActive?: boolean
    lastInteraction?: Date | string
    user: UserCreateNestedOneWithoutPetsInput
  }

  export type PetUncheckedCreateInput = {
    id?: string
    name: string
    typeId: string
    level?: number
    intimacy?: number
    fullness?: number
    cleanliness?: number
    mood?: number
    gender?: string
    isActive?: boolean
    lastInteraction?: Date | string
    userId: string
  }

  export type PetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    typeId?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    intimacy?: IntFieldUpdateOperationsInput | number
    fullness?: IntFieldUpdateOperationsInput | number
    cleanliness?: IntFieldUpdateOperationsInput | number
    mood?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastInteraction?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPetsNestedInput
  }

  export type PetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    typeId?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    intimacy?: IntFieldUpdateOperationsInput | number
    fullness?: IntFieldUpdateOperationsInput | number
    cleanliness?: IntFieldUpdateOperationsInput | number
    mood?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastInteraction?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PetCreateManyInput = {
    id?: string
    name: string
    typeId: string
    level?: number
    intimacy?: number
    fullness?: number
    cleanliness?: number
    mood?: number
    gender?: string
    isActive?: boolean
    lastInteraction?: Date | string
    userId: string
  }

  export type PetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    typeId?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    intimacy?: IntFieldUpdateOperationsInput | number
    fullness?: IntFieldUpdateOperationsInput | number
    cleanliness?: IntFieldUpdateOperationsInput | number
    mood?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastInteraction?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    typeId?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    intimacy?: IntFieldUpdateOperationsInput | number
    fullness?: IntFieldUpdateOperationsInput | number
    cleanliness?: IntFieldUpdateOperationsInput | number
    mood?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastInteraction?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type WishCreateInput = {
    id?: string
    title: string
    icon: string
    cost: number
    category: string
    repeatType: string
    count?: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutWishesInput
  }

  export type WishUncheckedCreateInput = {
    id?: string
    title: string
    icon: string
    cost: number
    category: string
    repeatType: string
    count?: number
    userId: string
    createdAt?: Date | string
  }

  export type WishUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    cost?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    repeatType?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWishesNestedInput
  }

  export type WishUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    cost?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    repeatType?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WishCreateManyInput = {
    id?: string
    title: string
    icon: string
    cost: number
    category: string
    repeatType: string
    count?: number
    userId: string
    createdAt?: Date | string
  }

  export type WishUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    cost?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    repeatType?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WishUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    cost?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    repeatType?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedalCreateInput = {
    id?: string
    title: string
    icon: string
    desc?: string | null
    target: number
    current?: number
    unlocked?: boolean
    reward?: number
    user: UserCreateNestedOneWithoutMedalsInput
  }

  export type MedalUncheckedCreateInput = {
    id?: string
    title: string
    icon: string
    desc?: string | null
    target: number
    current?: number
    unlocked?: boolean
    reward?: number
    userId: string
  }

  export type MedalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    target?: IntFieldUpdateOperationsInput | number
    current?: IntFieldUpdateOperationsInput | number
    unlocked?: BoolFieldUpdateOperationsInput | boolean
    reward?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutMedalsNestedInput
  }

  export type MedalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    target?: IntFieldUpdateOperationsInput | number
    current?: IntFieldUpdateOperationsInput | number
    unlocked?: BoolFieldUpdateOperationsInput | boolean
    reward?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MedalCreateManyInput = {
    id?: string
    title: string
    icon: string
    desc?: string | null
    target: number
    current?: number
    unlocked?: boolean
    reward?: number
    userId: string
  }

  export type MedalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    target?: IntFieldUpdateOperationsInput | number
    current?: IntFieldUpdateOperationsInput | number
    unlocked?: BoolFieldUpdateOperationsInput | boolean
    reward?: IntFieldUpdateOperationsInput | number
  }

  export type MedalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    target?: IntFieldUpdateOperationsInput | number
    current?: IntFieldUpdateOperationsInput | number
    unlocked?: BoolFieldUpdateOperationsInput | boolean
    reward?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type HistoryCreateInput = {
    id?: string
    type: string
    amount: number
    reason: string
    date?: Date | string
    user: UserCreateNestedOneWithoutHistoryInput
  }

  export type HistoryUncheckedCreateInput = {
    id?: string
    type: string
    amount: number
    reason: string
    date?: Date | string
    userId: string
  }

  export type HistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type HistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type HistoryCreateManyInput = {
    id?: string
    type: string
    amount: number
    reason: string
    date?: Date | string
    userId: string
  }

  export type HistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type HabitCreateInput = {
    id?: string
    title: string
    icon: string
    color: string
    points: number
    type: string
    maxTimes?: number
    category: string
    duration?: number
    desc?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutHabitsInput
    records?: HabitRecordCreateNestedManyWithoutHabitInput
  }

  export type HabitUncheckedCreateInput = {
    id?: string
    title: string
    icon: string
    color: string
    points: number
    type: string
    maxTimes?: number
    category: string
    duration?: number
    desc?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    records?: HabitRecordUncheckedCreateNestedManyWithoutHabitInput
  }

  export type HabitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    maxTimes?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHabitsNestedInput
    records?: HabitRecordUpdateManyWithoutHabitNestedInput
  }

  export type HabitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    maxTimes?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    records?: HabitRecordUncheckedUpdateManyWithoutHabitNestedInput
  }

  export type HabitCreateManyInput = {
    id?: string
    title: string
    icon: string
    color: string
    points: number
    type: string
    maxTimes?: number
    category: string
    duration?: number
    desc?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HabitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    maxTimes?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    maxTimes?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitRecordCreateInput = {
    id?: string
    date: string
    timestamp?: Date | string
    pointsChange: number
    habit: HabitCreateNestedOneWithoutRecordsInput
    user: UserCreateNestedOneWithoutRecordsInput
  }

  export type HabitRecordUncheckedCreateInput = {
    id?: string
    habitId: string
    date: string
    timestamp?: Date | string
    pointsChange: number
    userId: string
  }

  export type HabitRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    pointsChange?: IntFieldUpdateOperationsInput | number
    habit?: HabitUpdateOneRequiredWithoutRecordsNestedInput
    user?: UserUpdateOneRequiredWithoutRecordsNestedInput
  }

  export type HabitRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    habitId?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    pointsChange?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type HabitRecordCreateManyInput = {
    id?: string
    habitId: string
    date: string
    timestamp?: Date | string
    pointsChange: number
    userId: string
  }

  export type HabitRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    pointsChange?: IntFieldUpdateOperationsInput | number
  }

  export type HabitRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    habitId?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    pointsChange?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type LearningPlanCreateInput = {
    id?: string
    title: string
    date: string
    timeType: string
    startTime?: string | null
    endTime?: string | null
    duration?: number | null
    completed?: boolean
    category: string
    reward?: number
    repeatType?: string | null
    ebbinghausMode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLearningPlansInput
  }

  export type LearningPlanUncheckedCreateInput = {
    id?: string
    title: string
    date: string
    timeType: string
    startTime?: string | null
    endTime?: string | null
    duration?: number | null
    completed?: boolean
    category: string
    reward?: number
    repeatType?: string | null
    ebbinghausMode?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LearningPlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    timeType?: StringFieldUpdateOperationsInput | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    reward?: IntFieldUpdateOperationsInput | number
    repeatType?: NullableStringFieldUpdateOperationsInput | string | null
    ebbinghausMode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLearningPlansNestedInput
  }

  export type LearningPlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    timeType?: StringFieldUpdateOperationsInput | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    reward?: IntFieldUpdateOperationsInput | number
    repeatType?: NullableStringFieldUpdateOperationsInput | string | null
    ebbinghausMode?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningPlanCreateManyInput = {
    id?: string
    title: string
    date: string
    timeType: string
    startTime?: string | null
    endTime?: string | null
    duration?: number | null
    completed?: boolean
    category: string
    reward?: number
    repeatType?: string | null
    ebbinghausMode?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LearningPlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    timeType?: StringFieldUpdateOperationsInput | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    reward?: IntFieldUpdateOperationsInput | number
    repeatType?: NullableStringFieldUpdateOperationsInput | string | null
    ebbinghausMode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningPlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    timeType?: StringFieldUpdateOperationsInput | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    reward?: IntFieldUpdateOperationsInput | number
    repeatType?: NullableStringFieldUpdateOperationsInput | string | null
    ebbinghausMode?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type CouponListRelationFilter = {
    every?: CouponWhereInput
    some?: CouponWhereInput
    none?: CouponWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CouponOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FamilyOrderByRelevanceInput = {
    fields: FamilyOrderByRelevanceFieldEnum | FamilyOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FamilyCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    isVip?: SortOrder
    vipExpiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FamilyAvgOrderByAggregateInput = {
    vipExpiry?: SortOrder
  }

  export type FamilyMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    isVip?: SortOrder
    vipExpiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FamilyMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    isVip?: SortOrder
    vipExpiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FamilySumOrderByAggregateInput = {
    vipExpiry?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FamilyScalarRelationFilter = {
    is?: FamilyWhereInput
    isNot?: FamilyWhereInput
  }

  export type HabitListRelationFilter = {
    every?: HabitWhereInput
    some?: HabitWhereInput
    none?: HabitWhereInput
  }

  export type HabitRecordListRelationFilter = {
    every?: HabitRecordWhereInput
    some?: HabitRecordWhereInput
    none?: HabitRecordWhereInput
  }

  export type LearningPlanListRelationFilter = {
    every?: LearningPlanWhereInput
    some?: LearningPlanWhereInput
    none?: LearningPlanWhereInput
  }

  export type PetListRelationFilter = {
    every?: PetWhereInput
    some?: PetWhereInput
    none?: PetWhereInput
  }

  export type WishListRelationFilter = {
    every?: WishWhereInput
    some?: WishWhereInput
    none?: WishWhereInput
  }

  export type MedalListRelationFilter = {
    every?: MedalWhereInput
    some?: MedalWhereInput
    none?: MedalWhereInput
  }

  export type HistoryListRelationFilter = {
    every?: HistoryWhereInput
    some?: HistoryWhereInput
    none?: HistoryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type HabitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HabitRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LearningPlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WishOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MedalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    points?: SortOrder
    checkInDays?: SortOrder
    role?: SortOrder
    unlockedPets?: SortOrder
    familyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    points?: SortOrder
    checkInDays?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    points?: SortOrder
    checkInDays?: SortOrder
    role?: SortOrder
    unlockedPets?: SortOrder
    familyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    points?: SortOrder
    checkInDays?: SortOrder
    role?: SortOrder
    unlockedPets?: SortOrder
    familyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    points?: SortOrder
    checkInDays?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FamilyNullableScalarRelationFilter = {
    is?: FamilyWhereInput | null
    isNot?: FamilyWhereInput | null
  }

  export type CouponOrderByRelevanceInput = {
    fields: CouponOrderByRelevanceFieldEnum | CouponOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CouponCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    days?: SortOrder
    used?: SortOrder
    usedByFamilyId?: SortOrder
    usedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type CouponAvgOrderByAggregateInput = {
    days?: SortOrder
  }

  export type CouponMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    days?: SortOrder
    used?: SortOrder
    usedByFamilyId?: SortOrder
    usedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type CouponMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    days?: SortOrder
    used?: SortOrder
    usedByFamilyId?: SortOrder
    usedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type CouponSumOrderByAggregateInput = {
    days?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PetOrderByRelevanceInput = {
    fields: PetOrderByRelevanceFieldEnum | PetOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PetUserIdTypeIdCompoundUniqueInput = {
    userId: string
    typeId: string
  }

  export type PetCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    typeId?: SortOrder
    level?: SortOrder
    intimacy?: SortOrder
    fullness?: SortOrder
    cleanliness?: SortOrder
    mood?: SortOrder
    gender?: SortOrder
    isActive?: SortOrder
    lastInteraction?: SortOrder
    userId?: SortOrder
  }

  export type PetAvgOrderByAggregateInput = {
    level?: SortOrder
    intimacy?: SortOrder
    fullness?: SortOrder
    cleanliness?: SortOrder
    mood?: SortOrder
  }

  export type PetMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    typeId?: SortOrder
    level?: SortOrder
    intimacy?: SortOrder
    fullness?: SortOrder
    cleanliness?: SortOrder
    mood?: SortOrder
    gender?: SortOrder
    isActive?: SortOrder
    lastInteraction?: SortOrder
    userId?: SortOrder
  }

  export type PetMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    typeId?: SortOrder
    level?: SortOrder
    intimacy?: SortOrder
    fullness?: SortOrder
    cleanliness?: SortOrder
    mood?: SortOrder
    gender?: SortOrder
    isActive?: SortOrder
    lastInteraction?: SortOrder
    userId?: SortOrder
  }

  export type PetSumOrderByAggregateInput = {
    level?: SortOrder
    intimacy?: SortOrder
    fullness?: SortOrder
    cleanliness?: SortOrder
    mood?: SortOrder
  }

  export type WishOrderByRelevanceInput = {
    fields: WishOrderByRelevanceFieldEnum | WishOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type WishCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    icon?: SortOrder
    cost?: SortOrder
    category?: SortOrder
    repeatType?: SortOrder
    count?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type WishAvgOrderByAggregateInput = {
    cost?: SortOrder
    count?: SortOrder
  }

  export type WishMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    icon?: SortOrder
    cost?: SortOrder
    category?: SortOrder
    repeatType?: SortOrder
    count?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type WishMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    icon?: SortOrder
    cost?: SortOrder
    category?: SortOrder
    repeatType?: SortOrder
    count?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type WishSumOrderByAggregateInput = {
    cost?: SortOrder
    count?: SortOrder
  }

  export type MedalOrderByRelevanceInput = {
    fields: MedalOrderByRelevanceFieldEnum | MedalOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MedalCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    icon?: SortOrder
    desc?: SortOrder
    target?: SortOrder
    current?: SortOrder
    unlocked?: SortOrder
    reward?: SortOrder
    userId?: SortOrder
  }

  export type MedalAvgOrderByAggregateInput = {
    target?: SortOrder
    current?: SortOrder
    reward?: SortOrder
  }

  export type MedalMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    icon?: SortOrder
    desc?: SortOrder
    target?: SortOrder
    current?: SortOrder
    unlocked?: SortOrder
    reward?: SortOrder
    userId?: SortOrder
  }

  export type MedalMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    icon?: SortOrder
    desc?: SortOrder
    target?: SortOrder
    current?: SortOrder
    unlocked?: SortOrder
    reward?: SortOrder
    userId?: SortOrder
  }

  export type MedalSumOrderByAggregateInput = {
    target?: SortOrder
    current?: SortOrder
    reward?: SortOrder
  }

  export type HistoryOrderByRelevanceInput = {
    fields: HistoryOrderByRelevanceFieldEnum | HistoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type HistoryCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    reason?: SortOrder
    date?: SortOrder
    userId?: SortOrder
  }

  export type HistoryAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type HistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    reason?: SortOrder
    date?: SortOrder
    userId?: SortOrder
  }

  export type HistoryMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    reason?: SortOrder
    date?: SortOrder
    userId?: SortOrder
  }

  export type HistorySumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type HabitOrderByRelevanceInput = {
    fields: HabitOrderByRelevanceFieldEnum | HabitOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type HabitCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    icon?: SortOrder
    color?: SortOrder
    points?: SortOrder
    type?: SortOrder
    maxTimes?: SortOrder
    category?: SortOrder
    duration?: SortOrder
    desc?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HabitAvgOrderByAggregateInput = {
    points?: SortOrder
    maxTimes?: SortOrder
    duration?: SortOrder
  }

  export type HabitMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    icon?: SortOrder
    color?: SortOrder
    points?: SortOrder
    type?: SortOrder
    maxTimes?: SortOrder
    category?: SortOrder
    duration?: SortOrder
    desc?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HabitMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    icon?: SortOrder
    color?: SortOrder
    points?: SortOrder
    type?: SortOrder
    maxTimes?: SortOrder
    category?: SortOrder
    duration?: SortOrder
    desc?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HabitSumOrderByAggregateInput = {
    points?: SortOrder
    maxTimes?: SortOrder
    duration?: SortOrder
  }

  export type HabitScalarRelationFilter = {
    is?: HabitWhereInput
    isNot?: HabitWhereInput
  }

  export type HabitRecordOrderByRelevanceInput = {
    fields: HabitRecordOrderByRelevanceFieldEnum | HabitRecordOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type HabitRecordCountOrderByAggregateInput = {
    id?: SortOrder
    habitId?: SortOrder
    date?: SortOrder
    timestamp?: SortOrder
    pointsChange?: SortOrder
    userId?: SortOrder
  }

  export type HabitRecordAvgOrderByAggregateInput = {
    pointsChange?: SortOrder
  }

  export type HabitRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    habitId?: SortOrder
    date?: SortOrder
    timestamp?: SortOrder
    pointsChange?: SortOrder
    userId?: SortOrder
  }

  export type HabitRecordMinOrderByAggregateInput = {
    id?: SortOrder
    habitId?: SortOrder
    date?: SortOrder
    timestamp?: SortOrder
    pointsChange?: SortOrder
    userId?: SortOrder
  }

  export type HabitRecordSumOrderByAggregateInput = {
    pointsChange?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type LearningPlanOrderByRelevanceInput = {
    fields: LearningPlanOrderByRelevanceFieldEnum | LearningPlanOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LearningPlanCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    timeType?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    duration?: SortOrder
    completed?: SortOrder
    category?: SortOrder
    reward?: SortOrder
    repeatType?: SortOrder
    ebbinghausMode?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LearningPlanAvgOrderByAggregateInput = {
    duration?: SortOrder
    reward?: SortOrder
  }

  export type LearningPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    timeType?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    duration?: SortOrder
    completed?: SortOrder
    category?: SortOrder
    reward?: SortOrder
    repeatType?: SortOrder
    ebbinghausMode?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LearningPlanMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    timeType?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    duration?: SortOrder
    completed?: SortOrder
    category?: SortOrder
    reward?: SortOrder
    repeatType?: SortOrder
    ebbinghausMode?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LearningPlanSumOrderByAggregateInput = {
    duration?: SortOrder
    reward?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type UserCreateNestedManyWithoutFamilyInput = {
    create?: XOR<UserCreateWithoutFamilyInput, UserUncheckedCreateWithoutFamilyInput> | UserCreateWithoutFamilyInput[] | UserUncheckedCreateWithoutFamilyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFamilyInput | UserCreateOrConnectWithoutFamilyInput[]
    createMany?: UserCreateManyFamilyInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CouponCreateNestedManyWithoutFamilyInput = {
    create?: XOR<CouponCreateWithoutFamilyInput, CouponUncheckedCreateWithoutFamilyInput> | CouponCreateWithoutFamilyInput[] | CouponUncheckedCreateWithoutFamilyInput[]
    connectOrCreate?: CouponCreateOrConnectWithoutFamilyInput | CouponCreateOrConnectWithoutFamilyInput[]
    createMany?: CouponCreateManyFamilyInputEnvelope
    connect?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutFamilyInput = {
    create?: XOR<UserCreateWithoutFamilyInput, UserUncheckedCreateWithoutFamilyInput> | UserCreateWithoutFamilyInput[] | UserUncheckedCreateWithoutFamilyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFamilyInput | UserCreateOrConnectWithoutFamilyInput[]
    createMany?: UserCreateManyFamilyInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CouponUncheckedCreateNestedManyWithoutFamilyInput = {
    create?: XOR<CouponCreateWithoutFamilyInput, CouponUncheckedCreateWithoutFamilyInput> | CouponCreateWithoutFamilyInput[] | CouponUncheckedCreateWithoutFamilyInput[]
    connectOrCreate?: CouponCreateOrConnectWithoutFamilyInput | CouponCreateOrConnectWithoutFamilyInput[]
    createMany?: CouponCreateManyFamilyInputEnvelope
    connect?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateManyWithoutFamilyNestedInput = {
    create?: XOR<UserCreateWithoutFamilyInput, UserUncheckedCreateWithoutFamilyInput> | UserCreateWithoutFamilyInput[] | UserUncheckedCreateWithoutFamilyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFamilyInput | UserCreateOrConnectWithoutFamilyInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutFamilyInput | UserUpsertWithWhereUniqueWithoutFamilyInput[]
    createMany?: UserCreateManyFamilyInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutFamilyInput | UserUpdateWithWhereUniqueWithoutFamilyInput[]
    updateMany?: UserUpdateManyWithWhereWithoutFamilyInput | UserUpdateManyWithWhereWithoutFamilyInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CouponUpdateManyWithoutFamilyNestedInput = {
    create?: XOR<CouponCreateWithoutFamilyInput, CouponUncheckedCreateWithoutFamilyInput> | CouponCreateWithoutFamilyInput[] | CouponUncheckedCreateWithoutFamilyInput[]
    connectOrCreate?: CouponCreateOrConnectWithoutFamilyInput | CouponCreateOrConnectWithoutFamilyInput[]
    upsert?: CouponUpsertWithWhereUniqueWithoutFamilyInput | CouponUpsertWithWhereUniqueWithoutFamilyInput[]
    createMany?: CouponCreateManyFamilyInputEnvelope
    set?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    disconnect?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    delete?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    connect?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    update?: CouponUpdateWithWhereUniqueWithoutFamilyInput | CouponUpdateWithWhereUniqueWithoutFamilyInput[]
    updateMany?: CouponUpdateManyWithWhereWithoutFamilyInput | CouponUpdateManyWithWhereWithoutFamilyInput[]
    deleteMany?: CouponScalarWhereInput | CouponScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutFamilyNestedInput = {
    create?: XOR<UserCreateWithoutFamilyInput, UserUncheckedCreateWithoutFamilyInput> | UserCreateWithoutFamilyInput[] | UserUncheckedCreateWithoutFamilyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutFamilyInput | UserCreateOrConnectWithoutFamilyInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutFamilyInput | UserUpsertWithWhereUniqueWithoutFamilyInput[]
    createMany?: UserCreateManyFamilyInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutFamilyInput | UserUpdateWithWhereUniqueWithoutFamilyInput[]
    updateMany?: UserUpdateManyWithWhereWithoutFamilyInput | UserUpdateManyWithWhereWithoutFamilyInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CouponUncheckedUpdateManyWithoutFamilyNestedInput = {
    create?: XOR<CouponCreateWithoutFamilyInput, CouponUncheckedCreateWithoutFamilyInput> | CouponCreateWithoutFamilyInput[] | CouponUncheckedCreateWithoutFamilyInput[]
    connectOrCreate?: CouponCreateOrConnectWithoutFamilyInput | CouponCreateOrConnectWithoutFamilyInput[]
    upsert?: CouponUpsertWithWhereUniqueWithoutFamilyInput | CouponUpsertWithWhereUniqueWithoutFamilyInput[]
    createMany?: CouponCreateManyFamilyInputEnvelope
    set?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    disconnect?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    delete?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    connect?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    update?: CouponUpdateWithWhereUniqueWithoutFamilyInput | CouponUpdateWithWhereUniqueWithoutFamilyInput[]
    updateMany?: CouponUpdateManyWithWhereWithoutFamilyInput | CouponUpdateManyWithWhereWithoutFamilyInput[]
    deleteMany?: CouponScalarWhereInput | CouponScalarWhereInput[]
  }

  export type FamilyCreateNestedOneWithoutMembersInput = {
    create?: XOR<FamilyCreateWithoutMembersInput, FamilyUncheckedCreateWithoutMembersInput>
    connectOrCreate?: FamilyCreateOrConnectWithoutMembersInput
    connect?: FamilyWhereUniqueInput
  }

  export type HabitCreateNestedManyWithoutUserInput = {
    create?: XOR<HabitCreateWithoutUserInput, HabitUncheckedCreateWithoutUserInput> | HabitCreateWithoutUserInput[] | HabitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HabitCreateOrConnectWithoutUserInput | HabitCreateOrConnectWithoutUserInput[]
    createMany?: HabitCreateManyUserInputEnvelope
    connect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
  }

  export type HabitRecordCreateNestedManyWithoutUserInput = {
    create?: XOR<HabitRecordCreateWithoutUserInput, HabitRecordUncheckedCreateWithoutUserInput> | HabitRecordCreateWithoutUserInput[] | HabitRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HabitRecordCreateOrConnectWithoutUserInput | HabitRecordCreateOrConnectWithoutUserInput[]
    createMany?: HabitRecordCreateManyUserInputEnvelope
    connect?: HabitRecordWhereUniqueInput | HabitRecordWhereUniqueInput[]
  }

  export type LearningPlanCreateNestedManyWithoutUserInput = {
    create?: XOR<LearningPlanCreateWithoutUserInput, LearningPlanUncheckedCreateWithoutUserInput> | LearningPlanCreateWithoutUserInput[] | LearningPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LearningPlanCreateOrConnectWithoutUserInput | LearningPlanCreateOrConnectWithoutUserInput[]
    createMany?: LearningPlanCreateManyUserInputEnvelope
    connect?: LearningPlanWhereUniqueInput | LearningPlanWhereUniqueInput[]
  }

  export type PetCreateNestedManyWithoutUserInput = {
    create?: XOR<PetCreateWithoutUserInput, PetUncheckedCreateWithoutUserInput> | PetCreateWithoutUserInput[] | PetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PetCreateOrConnectWithoutUserInput | PetCreateOrConnectWithoutUserInput[]
    createMany?: PetCreateManyUserInputEnvelope
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
  }

  export type WishCreateNestedManyWithoutUserInput = {
    create?: XOR<WishCreateWithoutUserInput, WishUncheckedCreateWithoutUserInput> | WishCreateWithoutUserInput[] | WishUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WishCreateOrConnectWithoutUserInput | WishCreateOrConnectWithoutUserInput[]
    createMany?: WishCreateManyUserInputEnvelope
    connect?: WishWhereUniqueInput | WishWhereUniqueInput[]
  }

  export type MedalCreateNestedManyWithoutUserInput = {
    create?: XOR<MedalCreateWithoutUserInput, MedalUncheckedCreateWithoutUserInput> | MedalCreateWithoutUserInput[] | MedalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MedalCreateOrConnectWithoutUserInput | MedalCreateOrConnectWithoutUserInput[]
    createMany?: MedalCreateManyUserInputEnvelope
    connect?: MedalWhereUniqueInput | MedalWhereUniqueInput[]
  }

  export type HistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<HistoryCreateWithoutUserInput, HistoryUncheckedCreateWithoutUserInput> | HistoryCreateWithoutUserInput[] | HistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutUserInput | HistoryCreateOrConnectWithoutUserInput[]
    createMany?: HistoryCreateManyUserInputEnvelope
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
  }

  export type HabitUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<HabitCreateWithoutUserInput, HabitUncheckedCreateWithoutUserInput> | HabitCreateWithoutUserInput[] | HabitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HabitCreateOrConnectWithoutUserInput | HabitCreateOrConnectWithoutUserInput[]
    createMany?: HabitCreateManyUserInputEnvelope
    connect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
  }

  export type HabitRecordUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<HabitRecordCreateWithoutUserInput, HabitRecordUncheckedCreateWithoutUserInput> | HabitRecordCreateWithoutUserInput[] | HabitRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HabitRecordCreateOrConnectWithoutUserInput | HabitRecordCreateOrConnectWithoutUserInput[]
    createMany?: HabitRecordCreateManyUserInputEnvelope
    connect?: HabitRecordWhereUniqueInput | HabitRecordWhereUniqueInput[]
  }

  export type LearningPlanUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LearningPlanCreateWithoutUserInput, LearningPlanUncheckedCreateWithoutUserInput> | LearningPlanCreateWithoutUserInput[] | LearningPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LearningPlanCreateOrConnectWithoutUserInput | LearningPlanCreateOrConnectWithoutUserInput[]
    createMany?: LearningPlanCreateManyUserInputEnvelope
    connect?: LearningPlanWhereUniqueInput | LearningPlanWhereUniqueInput[]
  }

  export type PetUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PetCreateWithoutUserInput, PetUncheckedCreateWithoutUserInput> | PetCreateWithoutUserInput[] | PetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PetCreateOrConnectWithoutUserInput | PetCreateOrConnectWithoutUserInput[]
    createMany?: PetCreateManyUserInputEnvelope
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
  }

  export type WishUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WishCreateWithoutUserInput, WishUncheckedCreateWithoutUserInput> | WishCreateWithoutUserInput[] | WishUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WishCreateOrConnectWithoutUserInput | WishCreateOrConnectWithoutUserInput[]
    createMany?: WishCreateManyUserInputEnvelope
    connect?: WishWhereUniqueInput | WishWhereUniqueInput[]
  }

  export type MedalUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MedalCreateWithoutUserInput, MedalUncheckedCreateWithoutUserInput> | MedalCreateWithoutUserInput[] | MedalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MedalCreateOrConnectWithoutUserInput | MedalCreateOrConnectWithoutUserInput[]
    createMany?: MedalCreateManyUserInputEnvelope
    connect?: MedalWhereUniqueInput | MedalWhereUniqueInput[]
  }

  export type HistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<HistoryCreateWithoutUserInput, HistoryUncheckedCreateWithoutUserInput> | HistoryCreateWithoutUserInput[] | HistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutUserInput | HistoryCreateOrConnectWithoutUserInput[]
    createMany?: HistoryCreateManyUserInputEnvelope
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
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

  export type FamilyUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<FamilyCreateWithoutMembersInput, FamilyUncheckedCreateWithoutMembersInput>
    connectOrCreate?: FamilyCreateOrConnectWithoutMembersInput
    upsert?: FamilyUpsertWithoutMembersInput
    connect?: FamilyWhereUniqueInput
    update?: XOR<XOR<FamilyUpdateToOneWithWhereWithoutMembersInput, FamilyUpdateWithoutMembersInput>, FamilyUncheckedUpdateWithoutMembersInput>
  }

  export type HabitUpdateManyWithoutUserNestedInput = {
    create?: XOR<HabitCreateWithoutUserInput, HabitUncheckedCreateWithoutUserInput> | HabitCreateWithoutUserInput[] | HabitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HabitCreateOrConnectWithoutUserInput | HabitCreateOrConnectWithoutUserInput[]
    upsert?: HabitUpsertWithWhereUniqueWithoutUserInput | HabitUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HabitCreateManyUserInputEnvelope
    set?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    disconnect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    delete?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    connect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    update?: HabitUpdateWithWhereUniqueWithoutUserInput | HabitUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HabitUpdateManyWithWhereWithoutUserInput | HabitUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HabitScalarWhereInput | HabitScalarWhereInput[]
  }

  export type HabitRecordUpdateManyWithoutUserNestedInput = {
    create?: XOR<HabitRecordCreateWithoutUserInput, HabitRecordUncheckedCreateWithoutUserInput> | HabitRecordCreateWithoutUserInput[] | HabitRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HabitRecordCreateOrConnectWithoutUserInput | HabitRecordCreateOrConnectWithoutUserInput[]
    upsert?: HabitRecordUpsertWithWhereUniqueWithoutUserInput | HabitRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HabitRecordCreateManyUserInputEnvelope
    set?: HabitRecordWhereUniqueInput | HabitRecordWhereUniqueInput[]
    disconnect?: HabitRecordWhereUniqueInput | HabitRecordWhereUniqueInput[]
    delete?: HabitRecordWhereUniqueInput | HabitRecordWhereUniqueInput[]
    connect?: HabitRecordWhereUniqueInput | HabitRecordWhereUniqueInput[]
    update?: HabitRecordUpdateWithWhereUniqueWithoutUserInput | HabitRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HabitRecordUpdateManyWithWhereWithoutUserInput | HabitRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HabitRecordScalarWhereInput | HabitRecordScalarWhereInput[]
  }

  export type LearningPlanUpdateManyWithoutUserNestedInput = {
    create?: XOR<LearningPlanCreateWithoutUserInput, LearningPlanUncheckedCreateWithoutUserInput> | LearningPlanCreateWithoutUserInput[] | LearningPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LearningPlanCreateOrConnectWithoutUserInput | LearningPlanCreateOrConnectWithoutUserInput[]
    upsert?: LearningPlanUpsertWithWhereUniqueWithoutUserInput | LearningPlanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LearningPlanCreateManyUserInputEnvelope
    set?: LearningPlanWhereUniqueInput | LearningPlanWhereUniqueInput[]
    disconnect?: LearningPlanWhereUniqueInput | LearningPlanWhereUniqueInput[]
    delete?: LearningPlanWhereUniqueInput | LearningPlanWhereUniqueInput[]
    connect?: LearningPlanWhereUniqueInput | LearningPlanWhereUniqueInput[]
    update?: LearningPlanUpdateWithWhereUniqueWithoutUserInput | LearningPlanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LearningPlanUpdateManyWithWhereWithoutUserInput | LearningPlanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LearningPlanScalarWhereInput | LearningPlanScalarWhereInput[]
  }

  export type PetUpdateManyWithoutUserNestedInput = {
    create?: XOR<PetCreateWithoutUserInput, PetUncheckedCreateWithoutUserInput> | PetCreateWithoutUserInput[] | PetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PetCreateOrConnectWithoutUserInput | PetCreateOrConnectWithoutUserInput[]
    upsert?: PetUpsertWithWhereUniqueWithoutUserInput | PetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PetCreateManyUserInputEnvelope
    set?: PetWhereUniqueInput | PetWhereUniqueInput[]
    disconnect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    delete?: PetWhereUniqueInput | PetWhereUniqueInput[]
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    update?: PetUpdateWithWhereUniqueWithoutUserInput | PetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PetUpdateManyWithWhereWithoutUserInput | PetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PetScalarWhereInput | PetScalarWhereInput[]
  }

  export type WishUpdateManyWithoutUserNestedInput = {
    create?: XOR<WishCreateWithoutUserInput, WishUncheckedCreateWithoutUserInput> | WishCreateWithoutUserInput[] | WishUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WishCreateOrConnectWithoutUserInput | WishCreateOrConnectWithoutUserInput[]
    upsert?: WishUpsertWithWhereUniqueWithoutUserInput | WishUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WishCreateManyUserInputEnvelope
    set?: WishWhereUniqueInput | WishWhereUniqueInput[]
    disconnect?: WishWhereUniqueInput | WishWhereUniqueInput[]
    delete?: WishWhereUniqueInput | WishWhereUniqueInput[]
    connect?: WishWhereUniqueInput | WishWhereUniqueInput[]
    update?: WishUpdateWithWhereUniqueWithoutUserInput | WishUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WishUpdateManyWithWhereWithoutUserInput | WishUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WishScalarWhereInput | WishScalarWhereInput[]
  }

  export type MedalUpdateManyWithoutUserNestedInput = {
    create?: XOR<MedalCreateWithoutUserInput, MedalUncheckedCreateWithoutUserInput> | MedalCreateWithoutUserInput[] | MedalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MedalCreateOrConnectWithoutUserInput | MedalCreateOrConnectWithoutUserInput[]
    upsert?: MedalUpsertWithWhereUniqueWithoutUserInput | MedalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MedalCreateManyUserInputEnvelope
    set?: MedalWhereUniqueInput | MedalWhereUniqueInput[]
    disconnect?: MedalWhereUniqueInput | MedalWhereUniqueInput[]
    delete?: MedalWhereUniqueInput | MedalWhereUniqueInput[]
    connect?: MedalWhereUniqueInput | MedalWhereUniqueInput[]
    update?: MedalUpdateWithWhereUniqueWithoutUserInput | MedalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MedalUpdateManyWithWhereWithoutUserInput | MedalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MedalScalarWhereInput | MedalScalarWhereInput[]
  }

  export type HistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<HistoryCreateWithoutUserInput, HistoryUncheckedCreateWithoutUserInput> | HistoryCreateWithoutUserInput[] | HistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutUserInput | HistoryCreateOrConnectWithoutUserInput[]
    upsert?: HistoryUpsertWithWhereUniqueWithoutUserInput | HistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HistoryCreateManyUserInputEnvelope
    set?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    disconnect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    delete?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    update?: HistoryUpdateWithWhereUniqueWithoutUserInput | HistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HistoryUpdateManyWithWhereWithoutUserInput | HistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
  }

  export type HabitUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<HabitCreateWithoutUserInput, HabitUncheckedCreateWithoutUserInput> | HabitCreateWithoutUserInput[] | HabitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HabitCreateOrConnectWithoutUserInput | HabitCreateOrConnectWithoutUserInput[]
    upsert?: HabitUpsertWithWhereUniqueWithoutUserInput | HabitUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HabitCreateManyUserInputEnvelope
    set?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    disconnect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    delete?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    connect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    update?: HabitUpdateWithWhereUniqueWithoutUserInput | HabitUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HabitUpdateManyWithWhereWithoutUserInput | HabitUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HabitScalarWhereInput | HabitScalarWhereInput[]
  }

  export type HabitRecordUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<HabitRecordCreateWithoutUserInput, HabitRecordUncheckedCreateWithoutUserInput> | HabitRecordCreateWithoutUserInput[] | HabitRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HabitRecordCreateOrConnectWithoutUserInput | HabitRecordCreateOrConnectWithoutUserInput[]
    upsert?: HabitRecordUpsertWithWhereUniqueWithoutUserInput | HabitRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HabitRecordCreateManyUserInputEnvelope
    set?: HabitRecordWhereUniqueInput | HabitRecordWhereUniqueInput[]
    disconnect?: HabitRecordWhereUniqueInput | HabitRecordWhereUniqueInput[]
    delete?: HabitRecordWhereUniqueInput | HabitRecordWhereUniqueInput[]
    connect?: HabitRecordWhereUniqueInput | HabitRecordWhereUniqueInput[]
    update?: HabitRecordUpdateWithWhereUniqueWithoutUserInput | HabitRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HabitRecordUpdateManyWithWhereWithoutUserInput | HabitRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HabitRecordScalarWhereInput | HabitRecordScalarWhereInput[]
  }

  export type LearningPlanUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LearningPlanCreateWithoutUserInput, LearningPlanUncheckedCreateWithoutUserInput> | LearningPlanCreateWithoutUserInput[] | LearningPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LearningPlanCreateOrConnectWithoutUserInput | LearningPlanCreateOrConnectWithoutUserInput[]
    upsert?: LearningPlanUpsertWithWhereUniqueWithoutUserInput | LearningPlanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LearningPlanCreateManyUserInputEnvelope
    set?: LearningPlanWhereUniqueInput | LearningPlanWhereUniqueInput[]
    disconnect?: LearningPlanWhereUniqueInput | LearningPlanWhereUniqueInput[]
    delete?: LearningPlanWhereUniqueInput | LearningPlanWhereUniqueInput[]
    connect?: LearningPlanWhereUniqueInput | LearningPlanWhereUniqueInput[]
    update?: LearningPlanUpdateWithWhereUniqueWithoutUserInput | LearningPlanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LearningPlanUpdateManyWithWhereWithoutUserInput | LearningPlanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LearningPlanScalarWhereInput | LearningPlanScalarWhereInput[]
  }

  export type PetUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PetCreateWithoutUserInput, PetUncheckedCreateWithoutUserInput> | PetCreateWithoutUserInput[] | PetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PetCreateOrConnectWithoutUserInput | PetCreateOrConnectWithoutUserInput[]
    upsert?: PetUpsertWithWhereUniqueWithoutUserInput | PetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PetCreateManyUserInputEnvelope
    set?: PetWhereUniqueInput | PetWhereUniqueInput[]
    disconnect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    delete?: PetWhereUniqueInput | PetWhereUniqueInput[]
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    update?: PetUpdateWithWhereUniqueWithoutUserInput | PetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PetUpdateManyWithWhereWithoutUserInput | PetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PetScalarWhereInput | PetScalarWhereInput[]
  }

  export type WishUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WishCreateWithoutUserInput, WishUncheckedCreateWithoutUserInput> | WishCreateWithoutUserInput[] | WishUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WishCreateOrConnectWithoutUserInput | WishCreateOrConnectWithoutUserInput[]
    upsert?: WishUpsertWithWhereUniqueWithoutUserInput | WishUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WishCreateManyUserInputEnvelope
    set?: WishWhereUniqueInput | WishWhereUniqueInput[]
    disconnect?: WishWhereUniqueInput | WishWhereUniqueInput[]
    delete?: WishWhereUniqueInput | WishWhereUniqueInput[]
    connect?: WishWhereUniqueInput | WishWhereUniqueInput[]
    update?: WishUpdateWithWhereUniqueWithoutUserInput | WishUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WishUpdateManyWithWhereWithoutUserInput | WishUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WishScalarWhereInput | WishScalarWhereInput[]
  }

  export type MedalUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MedalCreateWithoutUserInput, MedalUncheckedCreateWithoutUserInput> | MedalCreateWithoutUserInput[] | MedalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MedalCreateOrConnectWithoutUserInput | MedalCreateOrConnectWithoutUserInput[]
    upsert?: MedalUpsertWithWhereUniqueWithoutUserInput | MedalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MedalCreateManyUserInputEnvelope
    set?: MedalWhereUniqueInput | MedalWhereUniqueInput[]
    disconnect?: MedalWhereUniqueInput | MedalWhereUniqueInput[]
    delete?: MedalWhereUniqueInput | MedalWhereUniqueInput[]
    connect?: MedalWhereUniqueInput | MedalWhereUniqueInput[]
    update?: MedalUpdateWithWhereUniqueWithoutUserInput | MedalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MedalUpdateManyWithWhereWithoutUserInput | MedalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MedalScalarWhereInput | MedalScalarWhereInput[]
  }

  export type HistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<HistoryCreateWithoutUserInput, HistoryUncheckedCreateWithoutUserInput> | HistoryCreateWithoutUserInput[] | HistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutUserInput | HistoryCreateOrConnectWithoutUserInput[]
    upsert?: HistoryUpsertWithWhereUniqueWithoutUserInput | HistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HistoryCreateManyUserInputEnvelope
    set?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    disconnect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    delete?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    update?: HistoryUpdateWithWhereUniqueWithoutUserInput | HistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HistoryUpdateManyWithWhereWithoutUserInput | HistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
  }

  export type FamilyCreateNestedOneWithoutCouponsInput = {
    create?: XOR<FamilyCreateWithoutCouponsInput, FamilyUncheckedCreateWithoutCouponsInput>
    connectOrCreate?: FamilyCreateOrConnectWithoutCouponsInput
    connect?: FamilyWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type FamilyUpdateOneWithoutCouponsNestedInput = {
    create?: XOR<FamilyCreateWithoutCouponsInput, FamilyUncheckedCreateWithoutCouponsInput>
    connectOrCreate?: FamilyCreateOrConnectWithoutCouponsInput
    upsert?: FamilyUpsertWithoutCouponsInput
    disconnect?: FamilyWhereInput | boolean
    delete?: FamilyWhereInput | boolean
    connect?: FamilyWhereUniqueInput
    update?: XOR<XOR<FamilyUpdateToOneWithWhereWithoutCouponsInput, FamilyUpdateWithoutCouponsInput>, FamilyUncheckedUpdateWithoutCouponsInput>
  }

  export type UserCreateNestedOneWithoutPetsInput = {
    create?: XOR<UserCreateWithoutPetsInput, UserUncheckedCreateWithoutPetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPetsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPetsNestedInput = {
    create?: XOR<UserCreateWithoutPetsInput, UserUncheckedCreateWithoutPetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPetsInput
    upsert?: UserUpsertWithoutPetsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPetsInput, UserUpdateWithoutPetsInput>, UserUncheckedUpdateWithoutPetsInput>
  }

  export type UserCreateNestedOneWithoutWishesInput = {
    create?: XOR<UserCreateWithoutWishesInput, UserUncheckedCreateWithoutWishesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWishesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWishesNestedInput = {
    create?: XOR<UserCreateWithoutWishesInput, UserUncheckedCreateWithoutWishesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWishesInput
    upsert?: UserUpsertWithoutWishesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWishesInput, UserUpdateWithoutWishesInput>, UserUncheckedUpdateWithoutWishesInput>
  }

  export type UserCreateNestedOneWithoutMedalsInput = {
    create?: XOR<UserCreateWithoutMedalsInput, UserUncheckedCreateWithoutMedalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMedalsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMedalsNestedInput = {
    create?: XOR<UserCreateWithoutMedalsInput, UserUncheckedCreateWithoutMedalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMedalsInput
    upsert?: UserUpsertWithoutMedalsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMedalsInput, UserUpdateWithoutMedalsInput>, UserUncheckedUpdateWithoutMedalsInput>
  }

  export type UserCreateNestedOneWithoutHistoryInput = {
    create?: XOR<UserCreateWithoutHistoryInput, UserUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<UserCreateWithoutHistoryInput, UserUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutHistoryInput
    upsert?: UserUpsertWithoutHistoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHistoryInput, UserUpdateWithoutHistoryInput>, UserUncheckedUpdateWithoutHistoryInput>
  }

  export type UserCreateNestedOneWithoutHabitsInput = {
    create?: XOR<UserCreateWithoutHabitsInput, UserUncheckedCreateWithoutHabitsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHabitsInput
    connect?: UserWhereUniqueInput
  }

  export type HabitRecordCreateNestedManyWithoutHabitInput = {
    create?: XOR<HabitRecordCreateWithoutHabitInput, HabitRecordUncheckedCreateWithoutHabitInput> | HabitRecordCreateWithoutHabitInput[] | HabitRecordUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: HabitRecordCreateOrConnectWithoutHabitInput | HabitRecordCreateOrConnectWithoutHabitInput[]
    createMany?: HabitRecordCreateManyHabitInputEnvelope
    connect?: HabitRecordWhereUniqueInput | HabitRecordWhereUniqueInput[]
  }

  export type HabitRecordUncheckedCreateNestedManyWithoutHabitInput = {
    create?: XOR<HabitRecordCreateWithoutHabitInput, HabitRecordUncheckedCreateWithoutHabitInput> | HabitRecordCreateWithoutHabitInput[] | HabitRecordUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: HabitRecordCreateOrConnectWithoutHabitInput | HabitRecordCreateOrConnectWithoutHabitInput[]
    createMany?: HabitRecordCreateManyHabitInputEnvelope
    connect?: HabitRecordWhereUniqueInput | HabitRecordWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutHabitsNestedInput = {
    create?: XOR<UserCreateWithoutHabitsInput, UserUncheckedCreateWithoutHabitsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHabitsInput
    upsert?: UserUpsertWithoutHabitsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHabitsInput, UserUpdateWithoutHabitsInput>, UserUncheckedUpdateWithoutHabitsInput>
  }

  export type HabitRecordUpdateManyWithoutHabitNestedInput = {
    create?: XOR<HabitRecordCreateWithoutHabitInput, HabitRecordUncheckedCreateWithoutHabitInput> | HabitRecordCreateWithoutHabitInput[] | HabitRecordUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: HabitRecordCreateOrConnectWithoutHabitInput | HabitRecordCreateOrConnectWithoutHabitInput[]
    upsert?: HabitRecordUpsertWithWhereUniqueWithoutHabitInput | HabitRecordUpsertWithWhereUniqueWithoutHabitInput[]
    createMany?: HabitRecordCreateManyHabitInputEnvelope
    set?: HabitRecordWhereUniqueInput | HabitRecordWhereUniqueInput[]
    disconnect?: HabitRecordWhereUniqueInput | HabitRecordWhereUniqueInput[]
    delete?: HabitRecordWhereUniqueInput | HabitRecordWhereUniqueInput[]
    connect?: HabitRecordWhereUniqueInput | HabitRecordWhereUniqueInput[]
    update?: HabitRecordUpdateWithWhereUniqueWithoutHabitInput | HabitRecordUpdateWithWhereUniqueWithoutHabitInput[]
    updateMany?: HabitRecordUpdateManyWithWhereWithoutHabitInput | HabitRecordUpdateManyWithWhereWithoutHabitInput[]
    deleteMany?: HabitRecordScalarWhereInput | HabitRecordScalarWhereInput[]
  }

  export type HabitRecordUncheckedUpdateManyWithoutHabitNestedInput = {
    create?: XOR<HabitRecordCreateWithoutHabitInput, HabitRecordUncheckedCreateWithoutHabitInput> | HabitRecordCreateWithoutHabitInput[] | HabitRecordUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: HabitRecordCreateOrConnectWithoutHabitInput | HabitRecordCreateOrConnectWithoutHabitInput[]
    upsert?: HabitRecordUpsertWithWhereUniqueWithoutHabitInput | HabitRecordUpsertWithWhereUniqueWithoutHabitInput[]
    createMany?: HabitRecordCreateManyHabitInputEnvelope
    set?: HabitRecordWhereUniqueInput | HabitRecordWhereUniqueInput[]
    disconnect?: HabitRecordWhereUniqueInput | HabitRecordWhereUniqueInput[]
    delete?: HabitRecordWhereUniqueInput | HabitRecordWhereUniqueInput[]
    connect?: HabitRecordWhereUniqueInput | HabitRecordWhereUniqueInput[]
    update?: HabitRecordUpdateWithWhereUniqueWithoutHabitInput | HabitRecordUpdateWithWhereUniqueWithoutHabitInput[]
    updateMany?: HabitRecordUpdateManyWithWhereWithoutHabitInput | HabitRecordUpdateManyWithWhereWithoutHabitInput[]
    deleteMany?: HabitRecordScalarWhereInput | HabitRecordScalarWhereInput[]
  }

  export type HabitCreateNestedOneWithoutRecordsInput = {
    create?: XOR<HabitCreateWithoutRecordsInput, HabitUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: HabitCreateOrConnectWithoutRecordsInput
    connect?: HabitWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRecordsInput = {
    create?: XOR<UserCreateWithoutRecordsInput, UserUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecordsInput
    connect?: UserWhereUniqueInput
  }

  export type HabitUpdateOneRequiredWithoutRecordsNestedInput = {
    create?: XOR<HabitCreateWithoutRecordsInput, HabitUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: HabitCreateOrConnectWithoutRecordsInput
    upsert?: HabitUpsertWithoutRecordsInput
    connect?: HabitWhereUniqueInput
    update?: XOR<XOR<HabitUpdateToOneWithWhereWithoutRecordsInput, HabitUpdateWithoutRecordsInput>, HabitUncheckedUpdateWithoutRecordsInput>
  }

  export type UserUpdateOneRequiredWithoutRecordsNestedInput = {
    create?: XOR<UserCreateWithoutRecordsInput, UserUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecordsInput
    upsert?: UserUpsertWithoutRecordsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRecordsInput, UserUpdateWithoutRecordsInput>, UserUncheckedUpdateWithoutRecordsInput>
  }

  export type UserCreateNestedOneWithoutLearningPlansInput = {
    create?: XOR<UserCreateWithoutLearningPlansInput, UserUncheckedCreateWithoutLearningPlansInput>
    connectOrCreate?: UserCreateOrConnectWithoutLearningPlansInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutLearningPlansNestedInput = {
    create?: XOR<UserCreateWithoutLearningPlansInput, UserUncheckedCreateWithoutLearningPlansInput>
    connectOrCreate?: UserCreateOrConnectWithoutLearningPlansInput
    upsert?: UserUpsertWithoutLearningPlansInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLearningPlansInput, UserUpdateWithoutLearningPlansInput>, UserUncheckedUpdateWithoutLearningPlansInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UserCreateWithoutFamilyInput = {
    id?: string
    name: string
    avatar?: string | null
    points?: number
    checkInDays?: number
    role?: string
    unlockedPets?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    habits?: HabitCreateNestedManyWithoutUserInput
    records?: HabitRecordCreateNestedManyWithoutUserInput
    learningPlans?: LearningPlanCreateNestedManyWithoutUserInput
    pets?: PetCreateNestedManyWithoutUserInput
    wishes?: WishCreateNestedManyWithoutUserInput
    medals?: MedalCreateNestedManyWithoutUserInput
    history?: HistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFamilyInput = {
    id?: string
    name: string
    avatar?: string | null
    points?: number
    checkInDays?: number
    role?: string
    unlockedPets?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    habits?: HabitUncheckedCreateNestedManyWithoutUserInput
    records?: HabitRecordUncheckedCreateNestedManyWithoutUserInput
    learningPlans?: LearningPlanUncheckedCreateNestedManyWithoutUserInput
    pets?: PetUncheckedCreateNestedManyWithoutUserInput
    wishes?: WishUncheckedCreateNestedManyWithoutUserInput
    medals?: MedalUncheckedCreateNestedManyWithoutUserInput
    history?: HistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFamilyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFamilyInput, UserUncheckedCreateWithoutFamilyInput>
  }

  export type UserCreateManyFamilyInputEnvelope = {
    data: UserCreateManyFamilyInput | UserCreateManyFamilyInput[]
    skipDuplicates?: boolean
  }

  export type CouponCreateWithoutFamilyInput = {
    id?: string
    code: string
    days?: number
    used?: boolean
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type CouponUncheckedCreateWithoutFamilyInput = {
    id?: string
    code: string
    days?: number
    used?: boolean
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type CouponCreateOrConnectWithoutFamilyInput = {
    where: CouponWhereUniqueInput
    create: XOR<CouponCreateWithoutFamilyInput, CouponUncheckedCreateWithoutFamilyInput>
  }

  export type CouponCreateManyFamilyInputEnvelope = {
    data: CouponCreateManyFamilyInput | CouponCreateManyFamilyInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutFamilyInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutFamilyInput, UserUncheckedUpdateWithoutFamilyInput>
    create: XOR<UserCreateWithoutFamilyInput, UserUncheckedCreateWithoutFamilyInput>
  }

  export type UserUpdateWithWhereUniqueWithoutFamilyInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutFamilyInput, UserUncheckedUpdateWithoutFamilyInput>
  }

  export type UserUpdateManyWithWhereWithoutFamilyInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutFamilyInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    points?: IntFilter<"User"> | number
    checkInDays?: IntFilter<"User"> | number
    role?: StringFilter<"User"> | string
    unlockedPets?: StringNullableFilter<"User"> | string | null
    familyId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type CouponUpsertWithWhereUniqueWithoutFamilyInput = {
    where: CouponWhereUniqueInput
    update: XOR<CouponUpdateWithoutFamilyInput, CouponUncheckedUpdateWithoutFamilyInput>
    create: XOR<CouponCreateWithoutFamilyInput, CouponUncheckedCreateWithoutFamilyInput>
  }

  export type CouponUpdateWithWhereUniqueWithoutFamilyInput = {
    where: CouponWhereUniqueInput
    data: XOR<CouponUpdateWithoutFamilyInput, CouponUncheckedUpdateWithoutFamilyInput>
  }

  export type CouponUpdateManyWithWhereWithoutFamilyInput = {
    where: CouponScalarWhereInput
    data: XOR<CouponUpdateManyMutationInput, CouponUncheckedUpdateManyWithoutFamilyInput>
  }

  export type CouponScalarWhereInput = {
    AND?: CouponScalarWhereInput | CouponScalarWhereInput[]
    OR?: CouponScalarWhereInput[]
    NOT?: CouponScalarWhereInput | CouponScalarWhereInput[]
    id?: StringFilter<"Coupon"> | string
    code?: StringFilter<"Coupon"> | string
    days?: IntFilter<"Coupon"> | number
    used?: BoolFilter<"Coupon"> | boolean
    usedByFamilyId?: StringNullableFilter<"Coupon"> | string | null
    usedAt?: DateTimeNullableFilter<"Coupon"> | Date | string | null
    createdAt?: DateTimeFilter<"Coupon"> | Date | string
  }

  export type FamilyCreateWithoutMembersInput = {
    id?: string
    username: string
    password: string
    isVip?: boolean
    vipExpiry?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    coupons?: CouponCreateNestedManyWithoutFamilyInput
  }

  export type FamilyUncheckedCreateWithoutMembersInput = {
    id?: string
    username: string
    password: string
    isVip?: boolean
    vipExpiry?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    coupons?: CouponUncheckedCreateNestedManyWithoutFamilyInput
  }

  export type FamilyCreateOrConnectWithoutMembersInput = {
    where: FamilyWhereUniqueInput
    create: XOR<FamilyCreateWithoutMembersInput, FamilyUncheckedCreateWithoutMembersInput>
  }

  export type HabitCreateWithoutUserInput = {
    id?: string
    title: string
    icon: string
    color: string
    points: number
    type: string
    maxTimes?: number
    category: string
    duration?: number
    desc?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    records?: HabitRecordCreateNestedManyWithoutHabitInput
  }

  export type HabitUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    icon: string
    color: string
    points: number
    type: string
    maxTimes?: number
    category: string
    duration?: number
    desc?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    records?: HabitRecordUncheckedCreateNestedManyWithoutHabitInput
  }

  export type HabitCreateOrConnectWithoutUserInput = {
    where: HabitWhereUniqueInput
    create: XOR<HabitCreateWithoutUserInput, HabitUncheckedCreateWithoutUserInput>
  }

  export type HabitCreateManyUserInputEnvelope = {
    data: HabitCreateManyUserInput | HabitCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type HabitRecordCreateWithoutUserInput = {
    id?: string
    date: string
    timestamp?: Date | string
    pointsChange: number
    habit: HabitCreateNestedOneWithoutRecordsInput
  }

  export type HabitRecordUncheckedCreateWithoutUserInput = {
    id?: string
    habitId: string
    date: string
    timestamp?: Date | string
    pointsChange: number
  }

  export type HabitRecordCreateOrConnectWithoutUserInput = {
    where: HabitRecordWhereUniqueInput
    create: XOR<HabitRecordCreateWithoutUserInput, HabitRecordUncheckedCreateWithoutUserInput>
  }

  export type HabitRecordCreateManyUserInputEnvelope = {
    data: HabitRecordCreateManyUserInput | HabitRecordCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LearningPlanCreateWithoutUserInput = {
    id?: string
    title: string
    date: string
    timeType: string
    startTime?: string | null
    endTime?: string | null
    duration?: number | null
    completed?: boolean
    category: string
    reward?: number
    repeatType?: string | null
    ebbinghausMode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LearningPlanUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    date: string
    timeType: string
    startTime?: string | null
    endTime?: string | null
    duration?: number | null
    completed?: boolean
    category: string
    reward?: number
    repeatType?: string | null
    ebbinghausMode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LearningPlanCreateOrConnectWithoutUserInput = {
    where: LearningPlanWhereUniqueInput
    create: XOR<LearningPlanCreateWithoutUserInput, LearningPlanUncheckedCreateWithoutUserInput>
  }

  export type LearningPlanCreateManyUserInputEnvelope = {
    data: LearningPlanCreateManyUserInput | LearningPlanCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PetCreateWithoutUserInput = {
    id?: string
    name: string
    typeId: string
    level?: number
    intimacy?: number
    fullness?: number
    cleanliness?: number
    mood?: number
    gender?: string
    isActive?: boolean
    lastInteraction?: Date | string
  }

  export type PetUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    typeId: string
    level?: number
    intimacy?: number
    fullness?: number
    cleanliness?: number
    mood?: number
    gender?: string
    isActive?: boolean
    lastInteraction?: Date | string
  }

  export type PetCreateOrConnectWithoutUserInput = {
    where: PetWhereUniqueInput
    create: XOR<PetCreateWithoutUserInput, PetUncheckedCreateWithoutUserInput>
  }

  export type PetCreateManyUserInputEnvelope = {
    data: PetCreateManyUserInput | PetCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WishCreateWithoutUserInput = {
    id?: string
    title: string
    icon: string
    cost: number
    category: string
    repeatType: string
    count?: number
    createdAt?: Date | string
  }

  export type WishUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    icon: string
    cost: number
    category: string
    repeatType: string
    count?: number
    createdAt?: Date | string
  }

  export type WishCreateOrConnectWithoutUserInput = {
    where: WishWhereUniqueInput
    create: XOR<WishCreateWithoutUserInput, WishUncheckedCreateWithoutUserInput>
  }

  export type WishCreateManyUserInputEnvelope = {
    data: WishCreateManyUserInput | WishCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MedalCreateWithoutUserInput = {
    id?: string
    title: string
    icon: string
    desc?: string | null
    target: number
    current?: number
    unlocked?: boolean
    reward?: number
  }

  export type MedalUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    icon: string
    desc?: string | null
    target: number
    current?: number
    unlocked?: boolean
    reward?: number
  }

  export type MedalCreateOrConnectWithoutUserInput = {
    where: MedalWhereUniqueInput
    create: XOR<MedalCreateWithoutUserInput, MedalUncheckedCreateWithoutUserInput>
  }

  export type MedalCreateManyUserInputEnvelope = {
    data: MedalCreateManyUserInput | MedalCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type HistoryCreateWithoutUserInput = {
    id?: string
    type: string
    amount: number
    reason: string
    date?: Date | string
  }

  export type HistoryUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    amount: number
    reason: string
    date?: Date | string
  }

  export type HistoryCreateOrConnectWithoutUserInput = {
    where: HistoryWhereUniqueInput
    create: XOR<HistoryCreateWithoutUserInput, HistoryUncheckedCreateWithoutUserInput>
  }

  export type HistoryCreateManyUserInputEnvelope = {
    data: HistoryCreateManyUserInput | HistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FamilyUpsertWithoutMembersInput = {
    update: XOR<FamilyUpdateWithoutMembersInput, FamilyUncheckedUpdateWithoutMembersInput>
    create: XOR<FamilyCreateWithoutMembersInput, FamilyUncheckedCreateWithoutMembersInput>
    where?: FamilyWhereInput
  }

  export type FamilyUpdateToOneWithWhereWithoutMembersInput = {
    where?: FamilyWhereInput
    data: XOR<FamilyUpdateWithoutMembersInput, FamilyUncheckedUpdateWithoutMembersInput>
  }

  export type FamilyUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVip?: BoolFieldUpdateOperationsInput | boolean
    vipExpiry?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coupons?: CouponUpdateManyWithoutFamilyNestedInput
  }

  export type FamilyUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVip?: BoolFieldUpdateOperationsInput | boolean
    vipExpiry?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coupons?: CouponUncheckedUpdateManyWithoutFamilyNestedInput
  }

  export type HabitUpsertWithWhereUniqueWithoutUserInput = {
    where: HabitWhereUniqueInput
    update: XOR<HabitUpdateWithoutUserInput, HabitUncheckedUpdateWithoutUserInput>
    create: XOR<HabitCreateWithoutUserInput, HabitUncheckedCreateWithoutUserInput>
  }

  export type HabitUpdateWithWhereUniqueWithoutUserInput = {
    where: HabitWhereUniqueInput
    data: XOR<HabitUpdateWithoutUserInput, HabitUncheckedUpdateWithoutUserInput>
  }

  export type HabitUpdateManyWithWhereWithoutUserInput = {
    where: HabitScalarWhereInput
    data: XOR<HabitUpdateManyMutationInput, HabitUncheckedUpdateManyWithoutUserInput>
  }

  export type HabitScalarWhereInput = {
    AND?: HabitScalarWhereInput | HabitScalarWhereInput[]
    OR?: HabitScalarWhereInput[]
    NOT?: HabitScalarWhereInput | HabitScalarWhereInput[]
    id?: StringFilter<"Habit"> | string
    title?: StringFilter<"Habit"> | string
    icon?: StringFilter<"Habit"> | string
    color?: StringFilter<"Habit"> | string
    points?: IntFilter<"Habit"> | number
    type?: StringFilter<"Habit"> | string
    maxTimes?: IntFilter<"Habit"> | number
    category?: StringFilter<"Habit"> | string
    duration?: IntFilter<"Habit"> | number
    desc?: StringNullableFilter<"Habit"> | string | null
    userId?: StringFilter<"Habit"> | string
    createdAt?: DateTimeFilter<"Habit"> | Date | string
    updatedAt?: DateTimeFilter<"Habit"> | Date | string
  }

  export type HabitRecordUpsertWithWhereUniqueWithoutUserInput = {
    where: HabitRecordWhereUniqueInput
    update: XOR<HabitRecordUpdateWithoutUserInput, HabitRecordUncheckedUpdateWithoutUserInput>
    create: XOR<HabitRecordCreateWithoutUserInput, HabitRecordUncheckedCreateWithoutUserInput>
  }

  export type HabitRecordUpdateWithWhereUniqueWithoutUserInput = {
    where: HabitRecordWhereUniqueInput
    data: XOR<HabitRecordUpdateWithoutUserInput, HabitRecordUncheckedUpdateWithoutUserInput>
  }

  export type HabitRecordUpdateManyWithWhereWithoutUserInput = {
    where: HabitRecordScalarWhereInput
    data: XOR<HabitRecordUpdateManyMutationInput, HabitRecordUncheckedUpdateManyWithoutUserInput>
  }

  export type HabitRecordScalarWhereInput = {
    AND?: HabitRecordScalarWhereInput | HabitRecordScalarWhereInput[]
    OR?: HabitRecordScalarWhereInput[]
    NOT?: HabitRecordScalarWhereInput | HabitRecordScalarWhereInput[]
    id?: StringFilter<"HabitRecord"> | string
    habitId?: StringFilter<"HabitRecord"> | string
    date?: StringFilter<"HabitRecord"> | string
    timestamp?: DateTimeFilter<"HabitRecord"> | Date | string
    pointsChange?: IntFilter<"HabitRecord"> | number
    userId?: StringFilter<"HabitRecord"> | string
  }

  export type LearningPlanUpsertWithWhereUniqueWithoutUserInput = {
    where: LearningPlanWhereUniqueInput
    update: XOR<LearningPlanUpdateWithoutUserInput, LearningPlanUncheckedUpdateWithoutUserInput>
    create: XOR<LearningPlanCreateWithoutUserInput, LearningPlanUncheckedCreateWithoutUserInput>
  }

  export type LearningPlanUpdateWithWhereUniqueWithoutUserInput = {
    where: LearningPlanWhereUniqueInput
    data: XOR<LearningPlanUpdateWithoutUserInput, LearningPlanUncheckedUpdateWithoutUserInput>
  }

  export type LearningPlanUpdateManyWithWhereWithoutUserInput = {
    where: LearningPlanScalarWhereInput
    data: XOR<LearningPlanUpdateManyMutationInput, LearningPlanUncheckedUpdateManyWithoutUserInput>
  }

  export type LearningPlanScalarWhereInput = {
    AND?: LearningPlanScalarWhereInput | LearningPlanScalarWhereInput[]
    OR?: LearningPlanScalarWhereInput[]
    NOT?: LearningPlanScalarWhereInput | LearningPlanScalarWhereInput[]
    id?: StringFilter<"LearningPlan"> | string
    title?: StringFilter<"LearningPlan"> | string
    date?: StringFilter<"LearningPlan"> | string
    timeType?: StringFilter<"LearningPlan"> | string
    startTime?: StringNullableFilter<"LearningPlan"> | string | null
    endTime?: StringNullableFilter<"LearningPlan"> | string | null
    duration?: IntNullableFilter<"LearningPlan"> | number | null
    completed?: BoolFilter<"LearningPlan"> | boolean
    category?: StringFilter<"LearningPlan"> | string
    reward?: IntFilter<"LearningPlan"> | number
    repeatType?: StringNullableFilter<"LearningPlan"> | string | null
    ebbinghausMode?: StringNullableFilter<"LearningPlan"> | string | null
    userId?: StringFilter<"LearningPlan"> | string
    createdAt?: DateTimeFilter<"LearningPlan"> | Date | string
    updatedAt?: DateTimeFilter<"LearningPlan"> | Date | string
  }

  export type PetUpsertWithWhereUniqueWithoutUserInput = {
    where: PetWhereUniqueInput
    update: XOR<PetUpdateWithoutUserInput, PetUncheckedUpdateWithoutUserInput>
    create: XOR<PetCreateWithoutUserInput, PetUncheckedCreateWithoutUserInput>
  }

  export type PetUpdateWithWhereUniqueWithoutUserInput = {
    where: PetWhereUniqueInput
    data: XOR<PetUpdateWithoutUserInput, PetUncheckedUpdateWithoutUserInput>
  }

  export type PetUpdateManyWithWhereWithoutUserInput = {
    where: PetScalarWhereInput
    data: XOR<PetUpdateManyMutationInput, PetUncheckedUpdateManyWithoutUserInput>
  }

  export type PetScalarWhereInput = {
    AND?: PetScalarWhereInput | PetScalarWhereInput[]
    OR?: PetScalarWhereInput[]
    NOT?: PetScalarWhereInput | PetScalarWhereInput[]
    id?: StringFilter<"Pet"> | string
    name?: StringFilter<"Pet"> | string
    typeId?: StringFilter<"Pet"> | string
    level?: IntFilter<"Pet"> | number
    intimacy?: IntFilter<"Pet"> | number
    fullness?: IntFilter<"Pet"> | number
    cleanliness?: IntFilter<"Pet"> | number
    mood?: IntFilter<"Pet"> | number
    gender?: StringFilter<"Pet"> | string
    isActive?: BoolFilter<"Pet"> | boolean
    lastInteraction?: DateTimeFilter<"Pet"> | Date | string
    userId?: StringFilter<"Pet"> | string
  }

  export type WishUpsertWithWhereUniqueWithoutUserInput = {
    where: WishWhereUniqueInput
    update: XOR<WishUpdateWithoutUserInput, WishUncheckedUpdateWithoutUserInput>
    create: XOR<WishCreateWithoutUserInput, WishUncheckedCreateWithoutUserInput>
  }

  export type WishUpdateWithWhereUniqueWithoutUserInput = {
    where: WishWhereUniqueInput
    data: XOR<WishUpdateWithoutUserInput, WishUncheckedUpdateWithoutUserInput>
  }

  export type WishUpdateManyWithWhereWithoutUserInput = {
    where: WishScalarWhereInput
    data: XOR<WishUpdateManyMutationInput, WishUncheckedUpdateManyWithoutUserInput>
  }

  export type WishScalarWhereInput = {
    AND?: WishScalarWhereInput | WishScalarWhereInput[]
    OR?: WishScalarWhereInput[]
    NOT?: WishScalarWhereInput | WishScalarWhereInput[]
    id?: StringFilter<"Wish"> | string
    title?: StringFilter<"Wish"> | string
    icon?: StringFilter<"Wish"> | string
    cost?: IntFilter<"Wish"> | number
    category?: StringFilter<"Wish"> | string
    repeatType?: StringFilter<"Wish"> | string
    count?: IntFilter<"Wish"> | number
    userId?: StringFilter<"Wish"> | string
    createdAt?: DateTimeFilter<"Wish"> | Date | string
  }

  export type MedalUpsertWithWhereUniqueWithoutUserInput = {
    where: MedalWhereUniqueInput
    update: XOR<MedalUpdateWithoutUserInput, MedalUncheckedUpdateWithoutUserInput>
    create: XOR<MedalCreateWithoutUserInput, MedalUncheckedCreateWithoutUserInput>
  }

  export type MedalUpdateWithWhereUniqueWithoutUserInput = {
    where: MedalWhereUniqueInput
    data: XOR<MedalUpdateWithoutUserInput, MedalUncheckedUpdateWithoutUserInput>
  }

  export type MedalUpdateManyWithWhereWithoutUserInput = {
    where: MedalScalarWhereInput
    data: XOR<MedalUpdateManyMutationInput, MedalUncheckedUpdateManyWithoutUserInput>
  }

  export type MedalScalarWhereInput = {
    AND?: MedalScalarWhereInput | MedalScalarWhereInput[]
    OR?: MedalScalarWhereInput[]
    NOT?: MedalScalarWhereInput | MedalScalarWhereInput[]
    id?: StringFilter<"Medal"> | string
    title?: StringFilter<"Medal"> | string
    icon?: StringFilter<"Medal"> | string
    desc?: StringNullableFilter<"Medal"> | string | null
    target?: IntFilter<"Medal"> | number
    current?: IntFilter<"Medal"> | number
    unlocked?: BoolFilter<"Medal"> | boolean
    reward?: IntFilter<"Medal"> | number
    userId?: StringFilter<"Medal"> | string
  }

  export type HistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: HistoryWhereUniqueInput
    update: XOR<HistoryUpdateWithoutUserInput, HistoryUncheckedUpdateWithoutUserInput>
    create: XOR<HistoryCreateWithoutUserInput, HistoryUncheckedCreateWithoutUserInput>
  }

  export type HistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: HistoryWhereUniqueInput
    data: XOR<HistoryUpdateWithoutUserInput, HistoryUncheckedUpdateWithoutUserInput>
  }

  export type HistoryUpdateManyWithWhereWithoutUserInput = {
    where: HistoryScalarWhereInput
    data: XOR<HistoryUpdateManyMutationInput, HistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type HistoryScalarWhereInput = {
    AND?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
    OR?: HistoryScalarWhereInput[]
    NOT?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
    id?: StringFilter<"History"> | string
    type?: StringFilter<"History"> | string
    amount?: IntFilter<"History"> | number
    reason?: StringFilter<"History"> | string
    date?: DateTimeFilter<"History"> | Date | string
    userId?: StringFilter<"History"> | string
  }

  export type FamilyCreateWithoutCouponsInput = {
    id?: string
    username: string
    password: string
    isVip?: boolean
    vipExpiry?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserCreateNestedManyWithoutFamilyInput
  }

  export type FamilyUncheckedCreateWithoutCouponsInput = {
    id?: string
    username: string
    password: string
    isVip?: boolean
    vipExpiry?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserUncheckedCreateNestedManyWithoutFamilyInput
  }

  export type FamilyCreateOrConnectWithoutCouponsInput = {
    where: FamilyWhereUniqueInput
    create: XOR<FamilyCreateWithoutCouponsInput, FamilyUncheckedCreateWithoutCouponsInput>
  }

  export type FamilyUpsertWithoutCouponsInput = {
    update: XOR<FamilyUpdateWithoutCouponsInput, FamilyUncheckedUpdateWithoutCouponsInput>
    create: XOR<FamilyCreateWithoutCouponsInput, FamilyUncheckedCreateWithoutCouponsInput>
    where?: FamilyWhereInput
  }

  export type FamilyUpdateToOneWithWhereWithoutCouponsInput = {
    where?: FamilyWhereInput
    data: XOR<FamilyUpdateWithoutCouponsInput, FamilyUncheckedUpdateWithoutCouponsInput>
  }

  export type FamilyUpdateWithoutCouponsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVip?: BoolFieldUpdateOperationsInput | boolean
    vipExpiry?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserUpdateManyWithoutFamilyNestedInput
  }

  export type FamilyUncheckedUpdateWithoutCouponsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isVip?: BoolFieldUpdateOperationsInput | boolean
    vipExpiry?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserUncheckedUpdateManyWithoutFamilyNestedInput
  }

  export type UserCreateWithoutPetsInput = {
    id?: string
    name: string
    avatar?: string | null
    points?: number
    checkInDays?: number
    role?: string
    unlockedPets?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    family: FamilyCreateNestedOneWithoutMembersInput
    habits?: HabitCreateNestedManyWithoutUserInput
    records?: HabitRecordCreateNestedManyWithoutUserInput
    learningPlans?: LearningPlanCreateNestedManyWithoutUserInput
    wishes?: WishCreateNestedManyWithoutUserInput
    medals?: MedalCreateNestedManyWithoutUserInput
    history?: HistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPetsInput = {
    id?: string
    name: string
    avatar?: string | null
    points?: number
    checkInDays?: number
    role?: string
    unlockedPets?: string | null
    familyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    habits?: HabitUncheckedCreateNestedManyWithoutUserInput
    records?: HabitRecordUncheckedCreateNestedManyWithoutUserInput
    learningPlans?: LearningPlanUncheckedCreateNestedManyWithoutUserInput
    wishes?: WishUncheckedCreateNestedManyWithoutUserInput
    medals?: MedalUncheckedCreateNestedManyWithoutUserInput
    history?: HistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPetsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPetsInput, UserUncheckedCreateWithoutPetsInput>
  }

  export type UserUpsertWithoutPetsInput = {
    update: XOR<UserUpdateWithoutPetsInput, UserUncheckedUpdateWithoutPetsInput>
    create: XOR<UserCreateWithoutPetsInput, UserUncheckedCreateWithoutPetsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPetsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPetsInput, UserUncheckedUpdateWithoutPetsInput>
  }

  export type UserUpdateWithoutPetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    checkInDays?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    unlockedPets?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    family?: FamilyUpdateOneRequiredWithoutMembersNestedInput
    habits?: HabitUpdateManyWithoutUserNestedInput
    records?: HabitRecordUpdateManyWithoutUserNestedInput
    learningPlans?: LearningPlanUpdateManyWithoutUserNestedInput
    wishes?: WishUpdateManyWithoutUserNestedInput
    medals?: MedalUpdateManyWithoutUserNestedInput
    history?: HistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    checkInDays?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    unlockedPets?: NullableStringFieldUpdateOperationsInput | string | null
    familyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habits?: HabitUncheckedUpdateManyWithoutUserNestedInput
    records?: HabitRecordUncheckedUpdateManyWithoutUserNestedInput
    learningPlans?: LearningPlanUncheckedUpdateManyWithoutUserNestedInput
    wishes?: WishUncheckedUpdateManyWithoutUserNestedInput
    medals?: MedalUncheckedUpdateManyWithoutUserNestedInput
    history?: HistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutWishesInput = {
    id?: string
    name: string
    avatar?: string | null
    points?: number
    checkInDays?: number
    role?: string
    unlockedPets?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    family: FamilyCreateNestedOneWithoutMembersInput
    habits?: HabitCreateNestedManyWithoutUserInput
    records?: HabitRecordCreateNestedManyWithoutUserInput
    learningPlans?: LearningPlanCreateNestedManyWithoutUserInput
    pets?: PetCreateNestedManyWithoutUserInput
    medals?: MedalCreateNestedManyWithoutUserInput
    history?: HistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWishesInput = {
    id?: string
    name: string
    avatar?: string | null
    points?: number
    checkInDays?: number
    role?: string
    unlockedPets?: string | null
    familyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    habits?: HabitUncheckedCreateNestedManyWithoutUserInput
    records?: HabitRecordUncheckedCreateNestedManyWithoutUserInput
    learningPlans?: LearningPlanUncheckedCreateNestedManyWithoutUserInput
    pets?: PetUncheckedCreateNestedManyWithoutUserInput
    medals?: MedalUncheckedCreateNestedManyWithoutUserInput
    history?: HistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWishesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWishesInput, UserUncheckedCreateWithoutWishesInput>
  }

  export type UserUpsertWithoutWishesInput = {
    update: XOR<UserUpdateWithoutWishesInput, UserUncheckedUpdateWithoutWishesInput>
    create: XOR<UserCreateWithoutWishesInput, UserUncheckedCreateWithoutWishesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWishesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWishesInput, UserUncheckedUpdateWithoutWishesInput>
  }

  export type UserUpdateWithoutWishesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    checkInDays?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    unlockedPets?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    family?: FamilyUpdateOneRequiredWithoutMembersNestedInput
    habits?: HabitUpdateManyWithoutUserNestedInput
    records?: HabitRecordUpdateManyWithoutUserNestedInput
    learningPlans?: LearningPlanUpdateManyWithoutUserNestedInput
    pets?: PetUpdateManyWithoutUserNestedInput
    medals?: MedalUpdateManyWithoutUserNestedInput
    history?: HistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWishesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    checkInDays?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    unlockedPets?: NullableStringFieldUpdateOperationsInput | string | null
    familyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habits?: HabitUncheckedUpdateManyWithoutUserNestedInput
    records?: HabitRecordUncheckedUpdateManyWithoutUserNestedInput
    learningPlans?: LearningPlanUncheckedUpdateManyWithoutUserNestedInput
    pets?: PetUncheckedUpdateManyWithoutUserNestedInput
    medals?: MedalUncheckedUpdateManyWithoutUserNestedInput
    history?: HistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutMedalsInput = {
    id?: string
    name: string
    avatar?: string | null
    points?: number
    checkInDays?: number
    role?: string
    unlockedPets?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    family: FamilyCreateNestedOneWithoutMembersInput
    habits?: HabitCreateNestedManyWithoutUserInput
    records?: HabitRecordCreateNestedManyWithoutUserInput
    learningPlans?: LearningPlanCreateNestedManyWithoutUserInput
    pets?: PetCreateNestedManyWithoutUserInput
    wishes?: WishCreateNestedManyWithoutUserInput
    history?: HistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMedalsInput = {
    id?: string
    name: string
    avatar?: string | null
    points?: number
    checkInDays?: number
    role?: string
    unlockedPets?: string | null
    familyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    habits?: HabitUncheckedCreateNestedManyWithoutUserInput
    records?: HabitRecordUncheckedCreateNestedManyWithoutUserInput
    learningPlans?: LearningPlanUncheckedCreateNestedManyWithoutUserInput
    pets?: PetUncheckedCreateNestedManyWithoutUserInput
    wishes?: WishUncheckedCreateNestedManyWithoutUserInput
    history?: HistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMedalsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMedalsInput, UserUncheckedCreateWithoutMedalsInput>
  }

  export type UserUpsertWithoutMedalsInput = {
    update: XOR<UserUpdateWithoutMedalsInput, UserUncheckedUpdateWithoutMedalsInput>
    create: XOR<UserCreateWithoutMedalsInput, UserUncheckedCreateWithoutMedalsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMedalsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMedalsInput, UserUncheckedUpdateWithoutMedalsInput>
  }

  export type UserUpdateWithoutMedalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    checkInDays?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    unlockedPets?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    family?: FamilyUpdateOneRequiredWithoutMembersNestedInput
    habits?: HabitUpdateManyWithoutUserNestedInput
    records?: HabitRecordUpdateManyWithoutUserNestedInput
    learningPlans?: LearningPlanUpdateManyWithoutUserNestedInput
    pets?: PetUpdateManyWithoutUserNestedInput
    wishes?: WishUpdateManyWithoutUserNestedInput
    history?: HistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMedalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    checkInDays?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    unlockedPets?: NullableStringFieldUpdateOperationsInput | string | null
    familyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habits?: HabitUncheckedUpdateManyWithoutUserNestedInput
    records?: HabitRecordUncheckedUpdateManyWithoutUserNestedInput
    learningPlans?: LearningPlanUncheckedUpdateManyWithoutUserNestedInput
    pets?: PetUncheckedUpdateManyWithoutUserNestedInput
    wishes?: WishUncheckedUpdateManyWithoutUserNestedInput
    history?: HistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutHistoryInput = {
    id?: string
    name: string
    avatar?: string | null
    points?: number
    checkInDays?: number
    role?: string
    unlockedPets?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    family: FamilyCreateNestedOneWithoutMembersInput
    habits?: HabitCreateNestedManyWithoutUserInput
    records?: HabitRecordCreateNestedManyWithoutUserInput
    learningPlans?: LearningPlanCreateNestedManyWithoutUserInput
    pets?: PetCreateNestedManyWithoutUserInput
    wishes?: WishCreateNestedManyWithoutUserInput
    medals?: MedalCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHistoryInput = {
    id?: string
    name: string
    avatar?: string | null
    points?: number
    checkInDays?: number
    role?: string
    unlockedPets?: string | null
    familyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    habits?: HabitUncheckedCreateNestedManyWithoutUserInput
    records?: HabitRecordUncheckedCreateNestedManyWithoutUserInput
    learningPlans?: LearningPlanUncheckedCreateNestedManyWithoutUserInput
    pets?: PetUncheckedCreateNestedManyWithoutUserInput
    wishes?: WishUncheckedCreateNestedManyWithoutUserInput
    medals?: MedalUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHistoryInput, UserUncheckedCreateWithoutHistoryInput>
  }

  export type UserUpsertWithoutHistoryInput = {
    update: XOR<UserUpdateWithoutHistoryInput, UserUncheckedUpdateWithoutHistoryInput>
    create: XOR<UserCreateWithoutHistoryInput, UserUncheckedCreateWithoutHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHistoryInput, UserUncheckedUpdateWithoutHistoryInput>
  }

  export type UserUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    checkInDays?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    unlockedPets?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    family?: FamilyUpdateOneRequiredWithoutMembersNestedInput
    habits?: HabitUpdateManyWithoutUserNestedInput
    records?: HabitRecordUpdateManyWithoutUserNestedInput
    learningPlans?: LearningPlanUpdateManyWithoutUserNestedInput
    pets?: PetUpdateManyWithoutUserNestedInput
    wishes?: WishUpdateManyWithoutUserNestedInput
    medals?: MedalUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    checkInDays?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    unlockedPets?: NullableStringFieldUpdateOperationsInput | string | null
    familyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habits?: HabitUncheckedUpdateManyWithoutUserNestedInput
    records?: HabitRecordUncheckedUpdateManyWithoutUserNestedInput
    learningPlans?: LearningPlanUncheckedUpdateManyWithoutUserNestedInput
    pets?: PetUncheckedUpdateManyWithoutUserNestedInput
    wishes?: WishUncheckedUpdateManyWithoutUserNestedInput
    medals?: MedalUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutHabitsInput = {
    id?: string
    name: string
    avatar?: string | null
    points?: number
    checkInDays?: number
    role?: string
    unlockedPets?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    family: FamilyCreateNestedOneWithoutMembersInput
    records?: HabitRecordCreateNestedManyWithoutUserInput
    learningPlans?: LearningPlanCreateNestedManyWithoutUserInput
    pets?: PetCreateNestedManyWithoutUserInput
    wishes?: WishCreateNestedManyWithoutUserInput
    medals?: MedalCreateNestedManyWithoutUserInput
    history?: HistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHabitsInput = {
    id?: string
    name: string
    avatar?: string | null
    points?: number
    checkInDays?: number
    role?: string
    unlockedPets?: string | null
    familyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    records?: HabitRecordUncheckedCreateNestedManyWithoutUserInput
    learningPlans?: LearningPlanUncheckedCreateNestedManyWithoutUserInput
    pets?: PetUncheckedCreateNestedManyWithoutUserInput
    wishes?: WishUncheckedCreateNestedManyWithoutUserInput
    medals?: MedalUncheckedCreateNestedManyWithoutUserInput
    history?: HistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHabitsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHabitsInput, UserUncheckedCreateWithoutHabitsInput>
  }

  export type HabitRecordCreateWithoutHabitInput = {
    id?: string
    date: string
    timestamp?: Date | string
    pointsChange: number
    user: UserCreateNestedOneWithoutRecordsInput
  }

  export type HabitRecordUncheckedCreateWithoutHabitInput = {
    id?: string
    date: string
    timestamp?: Date | string
    pointsChange: number
    userId: string
  }

  export type HabitRecordCreateOrConnectWithoutHabitInput = {
    where: HabitRecordWhereUniqueInput
    create: XOR<HabitRecordCreateWithoutHabitInput, HabitRecordUncheckedCreateWithoutHabitInput>
  }

  export type HabitRecordCreateManyHabitInputEnvelope = {
    data: HabitRecordCreateManyHabitInput | HabitRecordCreateManyHabitInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutHabitsInput = {
    update: XOR<UserUpdateWithoutHabitsInput, UserUncheckedUpdateWithoutHabitsInput>
    create: XOR<UserCreateWithoutHabitsInput, UserUncheckedCreateWithoutHabitsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHabitsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHabitsInput, UserUncheckedUpdateWithoutHabitsInput>
  }

  export type UserUpdateWithoutHabitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    checkInDays?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    unlockedPets?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    family?: FamilyUpdateOneRequiredWithoutMembersNestedInput
    records?: HabitRecordUpdateManyWithoutUserNestedInput
    learningPlans?: LearningPlanUpdateManyWithoutUserNestedInput
    pets?: PetUpdateManyWithoutUserNestedInput
    wishes?: WishUpdateManyWithoutUserNestedInput
    medals?: MedalUpdateManyWithoutUserNestedInput
    history?: HistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHabitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    checkInDays?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    unlockedPets?: NullableStringFieldUpdateOperationsInput | string | null
    familyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    records?: HabitRecordUncheckedUpdateManyWithoutUserNestedInput
    learningPlans?: LearningPlanUncheckedUpdateManyWithoutUserNestedInput
    pets?: PetUncheckedUpdateManyWithoutUserNestedInput
    wishes?: WishUncheckedUpdateManyWithoutUserNestedInput
    medals?: MedalUncheckedUpdateManyWithoutUserNestedInput
    history?: HistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type HabitRecordUpsertWithWhereUniqueWithoutHabitInput = {
    where: HabitRecordWhereUniqueInput
    update: XOR<HabitRecordUpdateWithoutHabitInput, HabitRecordUncheckedUpdateWithoutHabitInput>
    create: XOR<HabitRecordCreateWithoutHabitInput, HabitRecordUncheckedCreateWithoutHabitInput>
  }

  export type HabitRecordUpdateWithWhereUniqueWithoutHabitInput = {
    where: HabitRecordWhereUniqueInput
    data: XOR<HabitRecordUpdateWithoutHabitInput, HabitRecordUncheckedUpdateWithoutHabitInput>
  }

  export type HabitRecordUpdateManyWithWhereWithoutHabitInput = {
    where: HabitRecordScalarWhereInput
    data: XOR<HabitRecordUpdateManyMutationInput, HabitRecordUncheckedUpdateManyWithoutHabitInput>
  }

  export type HabitCreateWithoutRecordsInput = {
    id?: string
    title: string
    icon: string
    color: string
    points: number
    type: string
    maxTimes?: number
    category: string
    duration?: number
    desc?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutHabitsInput
  }

  export type HabitUncheckedCreateWithoutRecordsInput = {
    id?: string
    title: string
    icon: string
    color: string
    points: number
    type: string
    maxTimes?: number
    category: string
    duration?: number
    desc?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HabitCreateOrConnectWithoutRecordsInput = {
    where: HabitWhereUniqueInput
    create: XOR<HabitCreateWithoutRecordsInput, HabitUncheckedCreateWithoutRecordsInput>
  }

  export type UserCreateWithoutRecordsInput = {
    id?: string
    name: string
    avatar?: string | null
    points?: number
    checkInDays?: number
    role?: string
    unlockedPets?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    family: FamilyCreateNestedOneWithoutMembersInput
    habits?: HabitCreateNestedManyWithoutUserInput
    learningPlans?: LearningPlanCreateNestedManyWithoutUserInput
    pets?: PetCreateNestedManyWithoutUserInput
    wishes?: WishCreateNestedManyWithoutUserInput
    medals?: MedalCreateNestedManyWithoutUserInput
    history?: HistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRecordsInput = {
    id?: string
    name: string
    avatar?: string | null
    points?: number
    checkInDays?: number
    role?: string
    unlockedPets?: string | null
    familyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    habits?: HabitUncheckedCreateNestedManyWithoutUserInput
    learningPlans?: LearningPlanUncheckedCreateNestedManyWithoutUserInput
    pets?: PetUncheckedCreateNestedManyWithoutUserInput
    wishes?: WishUncheckedCreateNestedManyWithoutUserInput
    medals?: MedalUncheckedCreateNestedManyWithoutUserInput
    history?: HistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRecordsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRecordsInput, UserUncheckedCreateWithoutRecordsInput>
  }

  export type HabitUpsertWithoutRecordsInput = {
    update: XOR<HabitUpdateWithoutRecordsInput, HabitUncheckedUpdateWithoutRecordsInput>
    create: XOR<HabitCreateWithoutRecordsInput, HabitUncheckedCreateWithoutRecordsInput>
    where?: HabitWhereInput
  }

  export type HabitUpdateToOneWithWhereWithoutRecordsInput = {
    where?: HabitWhereInput
    data: XOR<HabitUpdateWithoutRecordsInput, HabitUncheckedUpdateWithoutRecordsInput>
  }

  export type HabitUpdateWithoutRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    maxTimes?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHabitsNestedInput
  }

  export type HabitUncheckedUpdateWithoutRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    maxTimes?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutRecordsInput = {
    update: XOR<UserUpdateWithoutRecordsInput, UserUncheckedUpdateWithoutRecordsInput>
    create: XOR<UserCreateWithoutRecordsInput, UserUncheckedCreateWithoutRecordsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRecordsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRecordsInput, UserUncheckedUpdateWithoutRecordsInput>
  }

  export type UserUpdateWithoutRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    checkInDays?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    unlockedPets?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    family?: FamilyUpdateOneRequiredWithoutMembersNestedInput
    habits?: HabitUpdateManyWithoutUserNestedInput
    learningPlans?: LearningPlanUpdateManyWithoutUserNestedInput
    pets?: PetUpdateManyWithoutUserNestedInput
    wishes?: WishUpdateManyWithoutUserNestedInput
    medals?: MedalUpdateManyWithoutUserNestedInput
    history?: HistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    checkInDays?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    unlockedPets?: NullableStringFieldUpdateOperationsInput | string | null
    familyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habits?: HabitUncheckedUpdateManyWithoutUserNestedInput
    learningPlans?: LearningPlanUncheckedUpdateManyWithoutUserNestedInput
    pets?: PetUncheckedUpdateManyWithoutUserNestedInput
    wishes?: WishUncheckedUpdateManyWithoutUserNestedInput
    medals?: MedalUncheckedUpdateManyWithoutUserNestedInput
    history?: HistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutLearningPlansInput = {
    id?: string
    name: string
    avatar?: string | null
    points?: number
    checkInDays?: number
    role?: string
    unlockedPets?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    family: FamilyCreateNestedOneWithoutMembersInput
    habits?: HabitCreateNestedManyWithoutUserInput
    records?: HabitRecordCreateNestedManyWithoutUserInput
    pets?: PetCreateNestedManyWithoutUserInput
    wishes?: WishCreateNestedManyWithoutUserInput
    medals?: MedalCreateNestedManyWithoutUserInput
    history?: HistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLearningPlansInput = {
    id?: string
    name: string
    avatar?: string | null
    points?: number
    checkInDays?: number
    role?: string
    unlockedPets?: string | null
    familyId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    habits?: HabitUncheckedCreateNestedManyWithoutUserInput
    records?: HabitRecordUncheckedCreateNestedManyWithoutUserInput
    pets?: PetUncheckedCreateNestedManyWithoutUserInput
    wishes?: WishUncheckedCreateNestedManyWithoutUserInput
    medals?: MedalUncheckedCreateNestedManyWithoutUserInput
    history?: HistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLearningPlansInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLearningPlansInput, UserUncheckedCreateWithoutLearningPlansInput>
  }

  export type UserUpsertWithoutLearningPlansInput = {
    update: XOR<UserUpdateWithoutLearningPlansInput, UserUncheckedUpdateWithoutLearningPlansInput>
    create: XOR<UserCreateWithoutLearningPlansInput, UserUncheckedCreateWithoutLearningPlansInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLearningPlansInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLearningPlansInput, UserUncheckedUpdateWithoutLearningPlansInput>
  }

  export type UserUpdateWithoutLearningPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    checkInDays?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    unlockedPets?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    family?: FamilyUpdateOneRequiredWithoutMembersNestedInput
    habits?: HabitUpdateManyWithoutUserNestedInput
    records?: HabitRecordUpdateManyWithoutUserNestedInput
    pets?: PetUpdateManyWithoutUserNestedInput
    wishes?: WishUpdateManyWithoutUserNestedInput
    medals?: MedalUpdateManyWithoutUserNestedInput
    history?: HistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLearningPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    checkInDays?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    unlockedPets?: NullableStringFieldUpdateOperationsInput | string | null
    familyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habits?: HabitUncheckedUpdateManyWithoutUserNestedInput
    records?: HabitRecordUncheckedUpdateManyWithoutUserNestedInput
    pets?: PetUncheckedUpdateManyWithoutUserNestedInput
    wishes?: WishUncheckedUpdateManyWithoutUserNestedInput
    medals?: MedalUncheckedUpdateManyWithoutUserNestedInput
    history?: HistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyFamilyInput = {
    id?: string
    name: string
    avatar?: string | null
    points?: number
    checkInDays?: number
    role?: string
    unlockedPets?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CouponCreateManyFamilyInput = {
    id?: string
    code: string
    days?: number
    used?: boolean
    usedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type UserUpdateWithoutFamilyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    checkInDays?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    unlockedPets?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habits?: HabitUpdateManyWithoutUserNestedInput
    records?: HabitRecordUpdateManyWithoutUserNestedInput
    learningPlans?: LearningPlanUpdateManyWithoutUserNestedInput
    pets?: PetUpdateManyWithoutUserNestedInput
    wishes?: WishUpdateManyWithoutUserNestedInput
    medals?: MedalUpdateManyWithoutUserNestedInput
    history?: HistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFamilyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    checkInDays?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    unlockedPets?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habits?: HabitUncheckedUpdateManyWithoutUserNestedInput
    records?: HabitRecordUncheckedUpdateManyWithoutUserNestedInput
    learningPlans?: LearningPlanUncheckedUpdateManyWithoutUserNestedInput
    pets?: PetUncheckedUpdateManyWithoutUserNestedInput
    wishes?: WishUncheckedUpdateManyWithoutUserNestedInput
    medals?: MedalUncheckedUpdateManyWithoutUserNestedInput
    history?: HistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutFamilyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    checkInDays?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    unlockedPets?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponUpdateWithoutFamilyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    days?: IntFieldUpdateOperationsInput | number
    used?: BoolFieldUpdateOperationsInput | boolean
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponUncheckedUpdateWithoutFamilyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    days?: IntFieldUpdateOperationsInput | number
    used?: BoolFieldUpdateOperationsInput | boolean
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponUncheckedUpdateManyWithoutFamilyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    days?: IntFieldUpdateOperationsInput | number
    used?: BoolFieldUpdateOperationsInput | boolean
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitCreateManyUserInput = {
    id?: string
    title: string
    icon: string
    color: string
    points: number
    type: string
    maxTimes?: number
    category: string
    duration?: number
    desc?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HabitRecordCreateManyUserInput = {
    id?: string
    habitId: string
    date: string
    timestamp?: Date | string
    pointsChange: number
  }

  export type LearningPlanCreateManyUserInput = {
    id?: string
    title: string
    date: string
    timeType: string
    startTime?: string | null
    endTime?: string | null
    duration?: number | null
    completed?: boolean
    category: string
    reward?: number
    repeatType?: string | null
    ebbinghausMode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PetCreateManyUserInput = {
    id?: string
    name: string
    typeId: string
    level?: number
    intimacy?: number
    fullness?: number
    cleanliness?: number
    mood?: number
    gender?: string
    isActive?: boolean
    lastInteraction?: Date | string
  }

  export type WishCreateManyUserInput = {
    id?: string
    title: string
    icon: string
    cost: number
    category: string
    repeatType: string
    count?: number
    createdAt?: Date | string
  }

  export type MedalCreateManyUserInput = {
    id?: string
    title: string
    icon: string
    desc?: string | null
    target: number
    current?: number
    unlocked?: boolean
    reward?: number
  }

  export type HistoryCreateManyUserInput = {
    id?: string
    type: string
    amount: number
    reason: string
    date?: Date | string
  }

  export type HabitUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    maxTimes?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    records?: HabitRecordUpdateManyWithoutHabitNestedInput
  }

  export type HabitUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    maxTimes?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    records?: HabitRecordUncheckedUpdateManyWithoutHabitNestedInput
  }

  export type HabitUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    maxTimes?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitRecordUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    pointsChange?: IntFieldUpdateOperationsInput | number
    habit?: HabitUpdateOneRequiredWithoutRecordsNestedInput
  }

  export type HabitRecordUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    habitId?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    pointsChange?: IntFieldUpdateOperationsInput | number
  }

  export type HabitRecordUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    habitId?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    pointsChange?: IntFieldUpdateOperationsInput | number
  }

  export type LearningPlanUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    timeType?: StringFieldUpdateOperationsInput | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    reward?: IntFieldUpdateOperationsInput | number
    repeatType?: NullableStringFieldUpdateOperationsInput | string | null
    ebbinghausMode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningPlanUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    timeType?: StringFieldUpdateOperationsInput | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    reward?: IntFieldUpdateOperationsInput | number
    repeatType?: NullableStringFieldUpdateOperationsInput | string | null
    ebbinghausMode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LearningPlanUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    timeType?: StringFieldUpdateOperationsInput | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    category?: StringFieldUpdateOperationsInput | string
    reward?: IntFieldUpdateOperationsInput | number
    repeatType?: NullableStringFieldUpdateOperationsInput | string | null
    ebbinghausMode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    typeId?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    intimacy?: IntFieldUpdateOperationsInput | number
    fullness?: IntFieldUpdateOperationsInput | number
    cleanliness?: IntFieldUpdateOperationsInput | number
    mood?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastInteraction?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    typeId?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    intimacy?: IntFieldUpdateOperationsInput | number
    fullness?: IntFieldUpdateOperationsInput | number
    cleanliness?: IntFieldUpdateOperationsInput | number
    mood?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastInteraction?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    typeId?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    intimacy?: IntFieldUpdateOperationsInput | number
    fullness?: IntFieldUpdateOperationsInput | number
    cleanliness?: IntFieldUpdateOperationsInput | number
    mood?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastInteraction?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WishUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    cost?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    repeatType?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WishUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    cost?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    repeatType?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WishUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    cost?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    repeatType?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedalUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    target?: IntFieldUpdateOperationsInput | number
    current?: IntFieldUpdateOperationsInput | number
    unlocked?: BoolFieldUpdateOperationsInput | boolean
    reward?: IntFieldUpdateOperationsInput | number
  }

  export type MedalUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    target?: IntFieldUpdateOperationsInput | number
    current?: IntFieldUpdateOperationsInput | number
    unlocked?: BoolFieldUpdateOperationsInput | boolean
    reward?: IntFieldUpdateOperationsInput | number
  }

  export type MedalUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    target?: IntFieldUpdateOperationsInput | number
    current?: IntFieldUpdateOperationsInput | number
    unlocked?: BoolFieldUpdateOperationsInput | boolean
    reward?: IntFieldUpdateOperationsInput | number
  }

  export type HistoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitRecordCreateManyHabitInput = {
    id?: string
    date: string
    timestamp?: Date | string
    pointsChange: number
    userId: string
  }

  export type HabitRecordUpdateWithoutHabitInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    pointsChange?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutRecordsNestedInput
  }

  export type HabitRecordUncheckedUpdateWithoutHabitInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    pointsChange?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type HabitRecordUncheckedUpdateManyWithoutHabitInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    pointsChange?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
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