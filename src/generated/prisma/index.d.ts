
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model View
 * 
 */
export type View = $Result.DefaultSelection<Prisma.$ViewPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Engagement
 * 
 */
export type Engagement = $Result.DefaultSelection<Prisma.$EngagementPayload>
/**
 * Model PostsCategories
 * 
 */
export type PostsCategories = $Result.DefaultSelection<Prisma.$PostsCategoriesPayload>
/**
 * Model FeatureEvent
 * 
 */
export type FeatureEvent = $Result.DefaultSelection<Prisma.$FeatureEventPayload>
/**
 * Model RefreshToken
 * 
 */
export type RefreshToken = $Result.DefaultSelection<Prisma.$RefreshTokenPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  MEMBER: 'MEMBER',
  COACH: 'COACH',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.view`: Exposes CRUD operations for the **View** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Views
    * const views = await prisma.view.findMany()
    * ```
    */
  get view(): Prisma.ViewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.engagement`: Exposes CRUD operations for the **Engagement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Engagements
    * const engagements = await prisma.engagement.findMany()
    * ```
    */
  get engagement(): Prisma.EngagementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postsCategories`: Exposes CRUD operations for the **PostsCategories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostsCategories
    * const postsCategories = await prisma.postsCategories.findMany()
    * ```
    */
  get postsCategories(): Prisma.PostsCategoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.featureEvent`: Exposes CRUD operations for the **FeatureEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FeatureEvents
    * const featureEvents = await prisma.featureEvent.findMany()
    * ```
    */
  get featureEvent(): Prisma.FeatureEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshToken.findMany()
    * ```
    */
  get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Post: 'Post',
    View: 'View',
    Category: 'Category',
    Engagement: 'Engagement',
    PostsCategories: 'PostsCategories',
    FeatureEvent: 'FeatureEvent',
    RefreshToken: 'RefreshToken'
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
      modelProps: "user" | "post" | "view" | "category" | "engagement" | "postsCategories" | "featureEvent" | "refreshToken"
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
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      View: {
        payload: Prisma.$ViewPayload<ExtArgs>
        fields: Prisma.ViewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ViewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ViewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload>
          }
          findFirst: {
            args: Prisma.ViewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ViewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload>
          }
          findMany: {
            args: Prisma.ViewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload>[]
          }
          create: {
            args: Prisma.ViewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload>
          }
          createMany: {
            args: Prisma.ViewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ViewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload>
          }
          update: {
            args: Prisma.ViewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload>
          }
          deleteMany: {
            args: Prisma.ViewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ViewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ViewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload>
          }
          aggregate: {
            args: Prisma.ViewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateView>
          }
          groupBy: {
            args: Prisma.ViewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ViewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ViewCountArgs<ExtArgs>
            result: $Utils.Optional<ViewCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Engagement: {
        payload: Prisma.$EngagementPayload<ExtArgs>
        fields: Prisma.EngagementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EngagementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngagementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EngagementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngagementPayload>
          }
          findFirst: {
            args: Prisma.EngagementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngagementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EngagementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngagementPayload>
          }
          findMany: {
            args: Prisma.EngagementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngagementPayload>[]
          }
          create: {
            args: Prisma.EngagementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngagementPayload>
          }
          createMany: {
            args: Prisma.EngagementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EngagementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngagementPayload>
          }
          update: {
            args: Prisma.EngagementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngagementPayload>
          }
          deleteMany: {
            args: Prisma.EngagementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EngagementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EngagementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngagementPayload>
          }
          aggregate: {
            args: Prisma.EngagementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEngagement>
          }
          groupBy: {
            args: Prisma.EngagementGroupByArgs<ExtArgs>
            result: $Utils.Optional<EngagementGroupByOutputType>[]
          }
          count: {
            args: Prisma.EngagementCountArgs<ExtArgs>
            result: $Utils.Optional<EngagementCountAggregateOutputType> | number
          }
        }
      }
      PostsCategories: {
        payload: Prisma.$PostsCategoriesPayload<ExtArgs>
        fields: Prisma.PostsCategoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostsCategoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsCategoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostsCategoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsCategoriesPayload>
          }
          findFirst: {
            args: Prisma.PostsCategoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsCategoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostsCategoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsCategoriesPayload>
          }
          findMany: {
            args: Prisma.PostsCategoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsCategoriesPayload>[]
          }
          create: {
            args: Prisma.PostsCategoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsCategoriesPayload>
          }
          createMany: {
            args: Prisma.PostsCategoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PostsCategoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsCategoriesPayload>
          }
          update: {
            args: Prisma.PostsCategoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsCategoriesPayload>
          }
          deleteMany: {
            args: Prisma.PostsCategoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostsCategoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PostsCategoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsCategoriesPayload>
          }
          aggregate: {
            args: Prisma.PostsCategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostsCategories>
          }
          groupBy: {
            args: Prisma.PostsCategoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostsCategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostsCategoriesCountArgs<ExtArgs>
            result: $Utils.Optional<PostsCategoriesCountAggregateOutputType> | number
          }
        }
      }
      FeatureEvent: {
        payload: Prisma.$FeatureEventPayload<ExtArgs>
        fields: Prisma.FeatureEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeatureEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeatureEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureEventPayload>
          }
          findFirst: {
            args: Prisma.FeatureEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeatureEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureEventPayload>
          }
          findMany: {
            args: Prisma.FeatureEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureEventPayload>[]
          }
          create: {
            args: Prisma.FeatureEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureEventPayload>
          }
          createMany: {
            args: Prisma.FeatureEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FeatureEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureEventPayload>
          }
          update: {
            args: Prisma.FeatureEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureEventPayload>
          }
          deleteMany: {
            args: Prisma.FeatureEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeatureEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FeatureEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureEventPayload>
          }
          aggregate: {
            args: Prisma.FeatureEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeatureEvent>
          }
          groupBy: {
            args: Prisma.FeatureEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeatureEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeatureEventCountArgs<ExtArgs>
            result: $Utils.Optional<FeatureEventCountAggregateOutputType> | number
          }
        }
      }
      RefreshToken: {
        payload: Prisma.$RefreshTokenPayload<ExtArgs>
        fields: Prisma.RefreshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findFirst: {
            args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findMany: {
            args: Prisma.RefreshTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          create: {
            args: Prisma.RefreshTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          createMany: {
            args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RefreshTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          update: {
            args: Prisma.RefreshTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          deleteMany: {
            args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RefreshTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          aggregate: {
            args: Prisma.RefreshTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshToken>
          }
          groupBy: {
            args: Prisma.RefreshTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefreshTokenCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenCountAggregateOutputType> | number
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
    user?: UserOmit
    post?: PostOmit
    view?: ViewOmit
    category?: CategoryOmit
    engagement?: EngagementOmit
    postsCategories?: PostsCategoriesOmit
    featureEvent?: FeatureEventOmit
    refreshToken?: RefreshTokenOmit
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
    views: number
    engagements: number
    featureEvents: number
    posts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    views?: boolean | UserCountOutputTypeCountViewsArgs
    engagements?: boolean | UserCountOutputTypeCountEngagementsArgs
    featureEvents?: boolean | UserCountOutputTypeCountFeatureEventsArgs
    posts?: boolean | UserCountOutputTypeCountPostsArgs
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
  export type UserCountOutputTypeCountViewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEngagementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EngagementWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFeatureEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeatureEventWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }


  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    views: number
    categories: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    views?: boolean | PostCountOutputTypeCountViewsArgs
    categories?: boolean | PostCountOutputTypeCountCategoriesArgs
  }

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountViewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostsCategoriesWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    posts: number
    engagements: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | CategoryCountOutputTypeCountPostsArgs
    engagements?: boolean | CategoryCountOutputTypeCountEngagementsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostsCategoriesWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountEngagementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EngagementWhereInput
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
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    displayName: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    displayName: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    displayName: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    displayName?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    displayName?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    displayName?: true
    email?: true
    password?: true
    role?: true
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
    id: number
    displayName: string
    email: string
    password: string
    role: $Enums.Role
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
    displayName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    refreshToken?: boolean | User$refreshTokenArgs<ExtArgs>
    views?: boolean | User$viewsArgs<ExtArgs>
    engagements?: boolean | User$engagementsArgs<ExtArgs>
    featureEvents?: boolean | User$featureEventsArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    displayName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "displayName" | "email" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    refreshToken?: boolean | User$refreshTokenArgs<ExtArgs>
    views?: boolean | User$viewsArgs<ExtArgs>
    engagements?: boolean | User$engagementsArgs<ExtArgs>
    featureEvents?: boolean | User$featureEventsArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      refreshToken: Prisma.$RefreshTokenPayload<ExtArgs> | null
      views: Prisma.$ViewPayload<ExtArgs>[]
      engagements: Prisma.$EngagementPayload<ExtArgs>[]
      featureEvents: Prisma.$FeatureEventPayload<ExtArgs>[]
      posts: Prisma.$PostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      displayName: string
      email: string
      password: string
      role: $Enums.Role
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
    refreshToken<T extends User$refreshTokenArgs<ExtArgs> = {}>(args?: Subset<T, User$refreshTokenArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    views<T extends User$viewsArgs<ExtArgs> = {}>(args?: Subset<T, User$viewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    engagements<T extends User$engagementsArgs<ExtArgs> = {}>(args?: Subset<T, User$engagementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EngagementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    featureEvents<T extends User$featureEventsArgs<ExtArgs> = {}>(args?: Subset<T, User$featureEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeatureEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly displayName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
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
   * User.refreshToken
   */
  export type User$refreshTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    where?: RefreshTokenWhereInput
  }

  /**
   * User.views
   */
  export type User$viewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    where?: ViewWhereInput
    orderBy?: ViewOrderByWithRelationInput | ViewOrderByWithRelationInput[]
    cursor?: ViewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViewScalarFieldEnum | ViewScalarFieldEnum[]
  }

  /**
   * User.engagements
   */
  export type User$engagementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engagement
     */
    select?: EngagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engagement
     */
    omit?: EngagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngagementInclude<ExtArgs> | null
    where?: EngagementWhereInput
    orderBy?: EngagementOrderByWithRelationInput | EngagementOrderByWithRelationInput[]
    cursor?: EngagementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EngagementScalarFieldEnum | EngagementScalarFieldEnum[]
  }

  /**
   * User.featureEvents
   */
  export type User$featureEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureEvent
     */
    select?: FeatureEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureEvent
     */
    omit?: FeatureEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureEventInclude<ExtArgs> | null
    where?: FeatureEventWhereInput
    orderBy?: FeatureEventOrderByWithRelationInput | FeatureEventOrderByWithRelationInput[]
    cursor?: FeatureEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeatureEventScalarFieldEnum | FeatureEventScalarFieldEnum[]
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
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
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
    viewCount: number | null
    authorId: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
    viewCount: number | null
    authorId: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    title: string | null
    body: string | null
    viewCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    authorId: number | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    title: string | null
    body: string | null
    viewCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    authorId: number | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    title: number
    body: number
    viewCount: number
    createdAt: number
    updatedAt: number
    authorId: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
    viewCount?: true
    authorId?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
    viewCount?: true
    authorId?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    title?: true
    body?: true
    viewCount?: true
    createdAt?: true
    updatedAt?: true
    authorId?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    title?: true
    body?: true
    viewCount?: true
    createdAt?: true
    updatedAt?: true
    authorId?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    title?: true
    body?: true
    viewCount?: true
    createdAt?: true
    updatedAt?: true
    authorId?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: number
    title: string
    body: string
    viewCount: number
    createdAt: Date
    updatedAt: Date
    authorId: number
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    body?: boolean
    viewCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authorId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    views?: boolean | Post$viewsArgs<ExtArgs>
    categories?: boolean | Post$categoriesArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>



  export type PostSelectScalar = {
    id?: boolean
    title?: boolean
    body?: boolean
    viewCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authorId?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "body" | "viewCount" | "createdAt" | "updatedAt" | "authorId", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    views?: boolean | Post$viewsArgs<ExtArgs>
    categories?: boolean | Post$categoriesArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      views: Prisma.$ViewPayload<ExtArgs>[]
      categories: Prisma.$PostsCategoriesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      body: string
      viewCount: number
      createdAt: Date
      updatedAt: Date
      authorId: number
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    views<T extends Post$viewsArgs<ExtArgs> = {}>(args?: Subset<T, Post$viewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categories<T extends Post$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Post$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostsCategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'Int'>
    readonly title: FieldRef<"Post", 'String'>
    readonly body: FieldRef<"Post", 'String'>
    readonly viewCount: FieldRef<"Post", 'Int'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
    readonly authorId: FieldRef<"Post", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post.views
   */
  export type Post$viewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    where?: ViewWhereInput
    orderBy?: ViewOrderByWithRelationInput | ViewOrderByWithRelationInput[]
    cursor?: ViewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViewScalarFieldEnum | ViewScalarFieldEnum[]
  }

  /**
   * Post.categories
   */
  export type Post$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostsCategories
     */
    select?: PostsCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostsCategories
     */
    omit?: PostsCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsCategoriesInclude<ExtArgs> | null
    where?: PostsCategoriesWhereInput
    orderBy?: PostsCategoriesOrderByWithRelationInput | PostsCategoriesOrderByWithRelationInput[]
    cursor?: PostsCategoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostsCategoriesScalarFieldEnum | PostsCategoriesScalarFieldEnum[]
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model View
   */

  export type AggregateView = {
    _count: ViewCountAggregateOutputType | null
    _avg: ViewAvgAggregateOutputType | null
    _sum: ViewSumAggregateOutputType | null
    _min: ViewMinAggregateOutputType | null
    _max: ViewMaxAggregateOutputType | null
  }

  export type ViewAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    postId: number | null
  }

  export type ViewSumAggregateOutputType = {
    id: number | null
    userId: number | null
    postId: number | null
  }

  export type ViewMinAggregateOutputType = {
    id: number | null
    userId: number | null
    postId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ViewMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    postId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ViewCountAggregateOutputType = {
    id: number
    userId: number
    postId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ViewAvgAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
  }

  export type ViewSumAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
  }

  export type ViewMinAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ViewMaxAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ViewCountAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ViewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which View to aggregate.
     */
    where?: ViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Views to fetch.
     */
    orderBy?: ViewOrderByWithRelationInput | ViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Views.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Views
    **/
    _count?: true | ViewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ViewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ViewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ViewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ViewMaxAggregateInputType
  }

  export type GetViewAggregateType<T extends ViewAggregateArgs> = {
        [P in keyof T & keyof AggregateView]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateView[P]>
      : GetScalarType<T[P], AggregateView[P]>
  }




  export type ViewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewWhereInput
    orderBy?: ViewOrderByWithAggregationInput | ViewOrderByWithAggregationInput[]
    by: ViewScalarFieldEnum[] | ViewScalarFieldEnum
    having?: ViewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ViewCountAggregateInputType | true
    _avg?: ViewAvgAggregateInputType
    _sum?: ViewSumAggregateInputType
    _min?: ViewMinAggregateInputType
    _max?: ViewMaxAggregateInputType
  }

  export type ViewGroupByOutputType = {
    id: number
    userId: number
    postId: number
    createdAt: Date
    updatedAt: Date
    _count: ViewCountAggregateOutputType | null
    _avg: ViewAvgAggregateOutputType | null
    _sum: ViewSumAggregateOutputType | null
    _min: ViewMinAggregateOutputType | null
    _max: ViewMaxAggregateOutputType | null
  }

  type GetViewGroupByPayload<T extends ViewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ViewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ViewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ViewGroupByOutputType[P]>
            : GetScalarType<T[P], ViewGroupByOutputType[P]>
        }
      >
    >


  export type ViewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["view"]>



  export type ViewSelectScalar = {
    id?: boolean
    userId?: boolean
    postId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ViewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "postId" | "createdAt" | "updatedAt", ExtArgs["result"]["view"]>
  export type ViewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $ViewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "View"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      postId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["view"]>
    composites: {}
  }

  type ViewGetPayload<S extends boolean | null | undefined | ViewDefaultArgs> = $Result.GetResult<Prisma.$ViewPayload, S>

  type ViewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ViewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ViewCountAggregateInputType | true
    }

  export interface ViewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['View'], meta: { name: 'View' } }
    /**
     * Find zero or one View that matches the filter.
     * @param {ViewFindUniqueArgs} args - Arguments to find a View
     * @example
     * // Get one View
     * const view = await prisma.view.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ViewFindUniqueArgs>(args: SelectSubset<T, ViewFindUniqueArgs<ExtArgs>>): Prisma__ViewClient<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one View that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ViewFindUniqueOrThrowArgs} args - Arguments to find a View
     * @example
     * // Get one View
     * const view = await prisma.view.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ViewFindUniqueOrThrowArgs>(args: SelectSubset<T, ViewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ViewClient<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first View that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewFindFirstArgs} args - Arguments to find a View
     * @example
     * // Get one View
     * const view = await prisma.view.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ViewFindFirstArgs>(args?: SelectSubset<T, ViewFindFirstArgs<ExtArgs>>): Prisma__ViewClient<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first View that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewFindFirstOrThrowArgs} args - Arguments to find a View
     * @example
     * // Get one View
     * const view = await prisma.view.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ViewFindFirstOrThrowArgs>(args?: SelectSubset<T, ViewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ViewClient<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Views that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Views
     * const views = await prisma.view.findMany()
     * 
     * // Get first 10 Views
     * const views = await prisma.view.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const viewWithIdOnly = await prisma.view.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ViewFindManyArgs>(args?: SelectSubset<T, ViewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a View.
     * @param {ViewCreateArgs} args - Arguments to create a View.
     * @example
     * // Create one View
     * const View = await prisma.view.create({
     *   data: {
     *     // ... data to create a View
     *   }
     * })
     * 
     */
    create<T extends ViewCreateArgs>(args: SelectSubset<T, ViewCreateArgs<ExtArgs>>): Prisma__ViewClient<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Views.
     * @param {ViewCreateManyArgs} args - Arguments to create many Views.
     * @example
     * // Create many Views
     * const view = await prisma.view.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ViewCreateManyArgs>(args?: SelectSubset<T, ViewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a View.
     * @param {ViewDeleteArgs} args - Arguments to delete one View.
     * @example
     * // Delete one View
     * const View = await prisma.view.delete({
     *   where: {
     *     // ... filter to delete one View
     *   }
     * })
     * 
     */
    delete<T extends ViewDeleteArgs>(args: SelectSubset<T, ViewDeleteArgs<ExtArgs>>): Prisma__ViewClient<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one View.
     * @param {ViewUpdateArgs} args - Arguments to update one View.
     * @example
     * // Update one View
     * const view = await prisma.view.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ViewUpdateArgs>(args: SelectSubset<T, ViewUpdateArgs<ExtArgs>>): Prisma__ViewClient<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Views.
     * @param {ViewDeleteManyArgs} args - Arguments to filter Views to delete.
     * @example
     * // Delete a few Views
     * const { count } = await prisma.view.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ViewDeleteManyArgs>(args?: SelectSubset<T, ViewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Views
     * const view = await prisma.view.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ViewUpdateManyArgs>(args: SelectSubset<T, ViewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one View.
     * @param {ViewUpsertArgs} args - Arguments to update or create a View.
     * @example
     * // Update or create a View
     * const view = await prisma.view.upsert({
     *   create: {
     *     // ... data to create a View
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the View we want to update
     *   }
     * })
     */
    upsert<T extends ViewUpsertArgs>(args: SelectSubset<T, ViewUpsertArgs<ExtArgs>>): Prisma__ViewClient<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewCountArgs} args - Arguments to filter Views to count.
     * @example
     * // Count the number of Views
     * const count = await prisma.view.count({
     *   where: {
     *     // ... the filter for the Views we want to count
     *   }
     * })
    **/
    count<T extends ViewCountArgs>(
      args?: Subset<T, ViewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ViewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a View.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ViewAggregateArgs>(args: Subset<T, ViewAggregateArgs>): Prisma.PrismaPromise<GetViewAggregateType<T>>

    /**
     * Group by View.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewGroupByArgs} args - Group by arguments.
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
      T extends ViewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ViewGroupByArgs['orderBy'] }
        : { orderBy?: ViewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ViewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetViewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the View model
   */
  readonly fields: ViewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for View.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ViewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the View model
   */
  interface ViewFieldRefs {
    readonly id: FieldRef<"View", 'Int'>
    readonly userId: FieldRef<"View", 'Int'>
    readonly postId: FieldRef<"View", 'Int'>
    readonly createdAt: FieldRef<"View", 'DateTime'>
    readonly updatedAt: FieldRef<"View", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * View findUnique
   */
  export type ViewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    /**
     * Filter, which View to fetch.
     */
    where: ViewWhereUniqueInput
  }

  /**
   * View findUniqueOrThrow
   */
  export type ViewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    /**
     * Filter, which View to fetch.
     */
    where: ViewWhereUniqueInput
  }

  /**
   * View findFirst
   */
  export type ViewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    /**
     * Filter, which View to fetch.
     */
    where?: ViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Views to fetch.
     */
    orderBy?: ViewOrderByWithRelationInput | ViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Views.
     */
    cursor?: ViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Views.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Views.
     */
    distinct?: ViewScalarFieldEnum | ViewScalarFieldEnum[]
  }

  /**
   * View findFirstOrThrow
   */
  export type ViewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    /**
     * Filter, which View to fetch.
     */
    where?: ViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Views to fetch.
     */
    orderBy?: ViewOrderByWithRelationInput | ViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Views.
     */
    cursor?: ViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Views.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Views.
     */
    distinct?: ViewScalarFieldEnum | ViewScalarFieldEnum[]
  }

  /**
   * View findMany
   */
  export type ViewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    /**
     * Filter, which Views to fetch.
     */
    where?: ViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Views to fetch.
     */
    orderBy?: ViewOrderByWithRelationInput | ViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Views.
     */
    cursor?: ViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Views.
     */
    skip?: number
    distinct?: ViewScalarFieldEnum | ViewScalarFieldEnum[]
  }

  /**
   * View create
   */
  export type ViewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    /**
     * The data needed to create a View.
     */
    data: XOR<ViewCreateInput, ViewUncheckedCreateInput>
  }

  /**
   * View createMany
   */
  export type ViewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Views.
     */
    data: ViewCreateManyInput | ViewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * View update
   */
  export type ViewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    /**
     * The data needed to update a View.
     */
    data: XOR<ViewUpdateInput, ViewUncheckedUpdateInput>
    /**
     * Choose, which View to update.
     */
    where: ViewWhereUniqueInput
  }

  /**
   * View updateMany
   */
  export type ViewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Views.
     */
    data: XOR<ViewUpdateManyMutationInput, ViewUncheckedUpdateManyInput>
    /**
     * Filter which Views to update
     */
    where?: ViewWhereInput
    /**
     * Limit how many Views to update.
     */
    limit?: number
  }

  /**
   * View upsert
   */
  export type ViewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    /**
     * The filter to search for the View to update in case it exists.
     */
    where: ViewWhereUniqueInput
    /**
     * In case the View found by the `where` argument doesn't exist, create a new View with this data.
     */
    create: XOR<ViewCreateInput, ViewUncheckedCreateInput>
    /**
     * In case the View was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ViewUpdateInput, ViewUncheckedUpdateInput>
  }

  /**
   * View delete
   */
  export type ViewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    /**
     * Filter which View to delete.
     */
    where: ViewWhereUniqueInput
  }

  /**
   * View deleteMany
   */
  export type ViewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Views to delete
     */
    where?: ViewWhereInput
    /**
     * Limit how many Views to delete.
     */
    limit?: number
  }

  /**
   * View without action
   */
  export type ViewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    label: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    label: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    label: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    label?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    label?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    label?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    label: string
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    posts?: boolean | Category$postsArgs<ExtArgs>
    engagements?: boolean | Category$engagementsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>



  export type CategorySelectScalar = {
    id?: boolean
    label?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "label" | "createdAt" | "updatedAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | Category$postsArgs<ExtArgs>
    engagements?: boolean | Category$engagementsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      posts: Prisma.$PostsCategoriesPayload<ExtArgs>[]
      engagements: Prisma.$EngagementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      label: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends Category$postsArgs<ExtArgs> = {}>(args?: Subset<T, Category$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostsCategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    engagements<T extends Category$engagementsArgs<ExtArgs> = {}>(args?: Subset<T, Category$engagementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EngagementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly label: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.posts
   */
  export type Category$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostsCategories
     */
    select?: PostsCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostsCategories
     */
    omit?: PostsCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsCategoriesInclude<ExtArgs> | null
    where?: PostsCategoriesWhereInput
    orderBy?: PostsCategoriesOrderByWithRelationInput | PostsCategoriesOrderByWithRelationInput[]
    cursor?: PostsCategoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostsCategoriesScalarFieldEnum | PostsCategoriesScalarFieldEnum[]
  }

  /**
   * Category.engagements
   */
  export type Category$engagementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engagement
     */
    select?: EngagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engagement
     */
    omit?: EngagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngagementInclude<ExtArgs> | null
    where?: EngagementWhereInput
    orderBy?: EngagementOrderByWithRelationInput | EngagementOrderByWithRelationInput[]
    cursor?: EngagementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EngagementScalarFieldEnum | EngagementScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Engagement
   */

  export type AggregateEngagement = {
    _count: EngagementCountAggregateOutputType | null
    _avg: EngagementAvgAggregateOutputType | null
    _sum: EngagementSumAggregateOutputType | null
    _min: EngagementMinAggregateOutputType | null
    _max: EngagementMaxAggregateOutputType | null
  }

  export type EngagementAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    categoryId: number | null
    viewCount: number | null
  }

  export type EngagementSumAggregateOutputType = {
    id: number | null
    userId: number | null
    categoryId: number | null
    viewCount: number | null
  }

  export type EngagementMinAggregateOutputType = {
    id: number | null
    userId: number | null
    categoryId: number | null
    viewCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EngagementMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    categoryId: number | null
    viewCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EngagementCountAggregateOutputType = {
    id: number
    userId: number
    categoryId: number
    viewCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EngagementAvgAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    viewCount?: true
  }

  export type EngagementSumAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    viewCount?: true
  }

  export type EngagementMinAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    viewCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EngagementMaxAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    viewCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EngagementCountAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    viewCount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EngagementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Engagement to aggregate.
     */
    where?: EngagementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Engagements to fetch.
     */
    orderBy?: EngagementOrderByWithRelationInput | EngagementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EngagementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Engagements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Engagements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Engagements
    **/
    _count?: true | EngagementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EngagementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EngagementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EngagementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EngagementMaxAggregateInputType
  }

  export type GetEngagementAggregateType<T extends EngagementAggregateArgs> = {
        [P in keyof T & keyof AggregateEngagement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEngagement[P]>
      : GetScalarType<T[P], AggregateEngagement[P]>
  }




  export type EngagementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EngagementWhereInput
    orderBy?: EngagementOrderByWithAggregationInput | EngagementOrderByWithAggregationInput[]
    by: EngagementScalarFieldEnum[] | EngagementScalarFieldEnum
    having?: EngagementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EngagementCountAggregateInputType | true
    _avg?: EngagementAvgAggregateInputType
    _sum?: EngagementSumAggregateInputType
    _min?: EngagementMinAggregateInputType
    _max?: EngagementMaxAggregateInputType
  }

  export type EngagementGroupByOutputType = {
    id: number
    userId: number
    categoryId: number
    viewCount: number
    createdAt: Date
    updatedAt: Date
    _count: EngagementCountAggregateOutputType | null
    _avg: EngagementAvgAggregateOutputType | null
    _sum: EngagementSumAggregateOutputType | null
    _min: EngagementMinAggregateOutputType | null
    _max: EngagementMaxAggregateOutputType | null
  }

  type GetEngagementGroupByPayload<T extends EngagementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EngagementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EngagementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EngagementGroupByOutputType[P]>
            : GetScalarType<T[P], EngagementGroupByOutputType[P]>
        }
      >
    >


  export type EngagementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    categoryId?: boolean
    viewCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["engagement"]>



  export type EngagementSelectScalar = {
    id?: boolean
    userId?: boolean
    categoryId?: boolean
    viewCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EngagementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "categoryId" | "viewCount" | "createdAt" | "updatedAt", ExtArgs["result"]["engagement"]>
  export type EngagementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $EngagementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Engagement"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      categoryId: number
      viewCount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["engagement"]>
    composites: {}
  }

  type EngagementGetPayload<S extends boolean | null | undefined | EngagementDefaultArgs> = $Result.GetResult<Prisma.$EngagementPayload, S>

  type EngagementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EngagementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EngagementCountAggregateInputType | true
    }

  export interface EngagementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Engagement'], meta: { name: 'Engagement' } }
    /**
     * Find zero or one Engagement that matches the filter.
     * @param {EngagementFindUniqueArgs} args - Arguments to find a Engagement
     * @example
     * // Get one Engagement
     * const engagement = await prisma.engagement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EngagementFindUniqueArgs>(args: SelectSubset<T, EngagementFindUniqueArgs<ExtArgs>>): Prisma__EngagementClient<$Result.GetResult<Prisma.$EngagementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Engagement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EngagementFindUniqueOrThrowArgs} args - Arguments to find a Engagement
     * @example
     * // Get one Engagement
     * const engagement = await prisma.engagement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EngagementFindUniqueOrThrowArgs>(args: SelectSubset<T, EngagementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EngagementClient<$Result.GetResult<Prisma.$EngagementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Engagement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EngagementFindFirstArgs} args - Arguments to find a Engagement
     * @example
     * // Get one Engagement
     * const engagement = await prisma.engagement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EngagementFindFirstArgs>(args?: SelectSubset<T, EngagementFindFirstArgs<ExtArgs>>): Prisma__EngagementClient<$Result.GetResult<Prisma.$EngagementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Engagement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EngagementFindFirstOrThrowArgs} args - Arguments to find a Engagement
     * @example
     * // Get one Engagement
     * const engagement = await prisma.engagement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EngagementFindFirstOrThrowArgs>(args?: SelectSubset<T, EngagementFindFirstOrThrowArgs<ExtArgs>>): Prisma__EngagementClient<$Result.GetResult<Prisma.$EngagementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Engagements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EngagementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Engagements
     * const engagements = await prisma.engagement.findMany()
     * 
     * // Get first 10 Engagements
     * const engagements = await prisma.engagement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const engagementWithIdOnly = await prisma.engagement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EngagementFindManyArgs>(args?: SelectSubset<T, EngagementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EngagementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Engagement.
     * @param {EngagementCreateArgs} args - Arguments to create a Engagement.
     * @example
     * // Create one Engagement
     * const Engagement = await prisma.engagement.create({
     *   data: {
     *     // ... data to create a Engagement
     *   }
     * })
     * 
     */
    create<T extends EngagementCreateArgs>(args: SelectSubset<T, EngagementCreateArgs<ExtArgs>>): Prisma__EngagementClient<$Result.GetResult<Prisma.$EngagementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Engagements.
     * @param {EngagementCreateManyArgs} args - Arguments to create many Engagements.
     * @example
     * // Create many Engagements
     * const engagement = await prisma.engagement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EngagementCreateManyArgs>(args?: SelectSubset<T, EngagementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Engagement.
     * @param {EngagementDeleteArgs} args - Arguments to delete one Engagement.
     * @example
     * // Delete one Engagement
     * const Engagement = await prisma.engagement.delete({
     *   where: {
     *     // ... filter to delete one Engagement
     *   }
     * })
     * 
     */
    delete<T extends EngagementDeleteArgs>(args: SelectSubset<T, EngagementDeleteArgs<ExtArgs>>): Prisma__EngagementClient<$Result.GetResult<Prisma.$EngagementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Engagement.
     * @param {EngagementUpdateArgs} args - Arguments to update one Engagement.
     * @example
     * // Update one Engagement
     * const engagement = await prisma.engagement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EngagementUpdateArgs>(args: SelectSubset<T, EngagementUpdateArgs<ExtArgs>>): Prisma__EngagementClient<$Result.GetResult<Prisma.$EngagementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Engagements.
     * @param {EngagementDeleteManyArgs} args - Arguments to filter Engagements to delete.
     * @example
     * // Delete a few Engagements
     * const { count } = await prisma.engagement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EngagementDeleteManyArgs>(args?: SelectSubset<T, EngagementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Engagements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EngagementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Engagements
     * const engagement = await prisma.engagement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EngagementUpdateManyArgs>(args: SelectSubset<T, EngagementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Engagement.
     * @param {EngagementUpsertArgs} args - Arguments to update or create a Engagement.
     * @example
     * // Update or create a Engagement
     * const engagement = await prisma.engagement.upsert({
     *   create: {
     *     // ... data to create a Engagement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Engagement we want to update
     *   }
     * })
     */
    upsert<T extends EngagementUpsertArgs>(args: SelectSubset<T, EngagementUpsertArgs<ExtArgs>>): Prisma__EngagementClient<$Result.GetResult<Prisma.$EngagementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Engagements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EngagementCountArgs} args - Arguments to filter Engagements to count.
     * @example
     * // Count the number of Engagements
     * const count = await prisma.engagement.count({
     *   where: {
     *     // ... the filter for the Engagements we want to count
     *   }
     * })
    **/
    count<T extends EngagementCountArgs>(
      args?: Subset<T, EngagementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EngagementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Engagement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EngagementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EngagementAggregateArgs>(args: Subset<T, EngagementAggregateArgs>): Prisma.PrismaPromise<GetEngagementAggregateType<T>>

    /**
     * Group by Engagement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EngagementGroupByArgs} args - Group by arguments.
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
      T extends EngagementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EngagementGroupByArgs['orderBy'] }
        : { orderBy?: EngagementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EngagementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEngagementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Engagement model
   */
  readonly fields: EngagementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Engagement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EngagementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Engagement model
   */
  interface EngagementFieldRefs {
    readonly id: FieldRef<"Engagement", 'Int'>
    readonly userId: FieldRef<"Engagement", 'Int'>
    readonly categoryId: FieldRef<"Engagement", 'Int'>
    readonly viewCount: FieldRef<"Engagement", 'Int'>
    readonly createdAt: FieldRef<"Engagement", 'DateTime'>
    readonly updatedAt: FieldRef<"Engagement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Engagement findUnique
   */
  export type EngagementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engagement
     */
    select?: EngagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engagement
     */
    omit?: EngagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngagementInclude<ExtArgs> | null
    /**
     * Filter, which Engagement to fetch.
     */
    where: EngagementWhereUniqueInput
  }

  /**
   * Engagement findUniqueOrThrow
   */
  export type EngagementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engagement
     */
    select?: EngagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engagement
     */
    omit?: EngagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngagementInclude<ExtArgs> | null
    /**
     * Filter, which Engagement to fetch.
     */
    where: EngagementWhereUniqueInput
  }

  /**
   * Engagement findFirst
   */
  export type EngagementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engagement
     */
    select?: EngagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engagement
     */
    omit?: EngagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngagementInclude<ExtArgs> | null
    /**
     * Filter, which Engagement to fetch.
     */
    where?: EngagementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Engagements to fetch.
     */
    orderBy?: EngagementOrderByWithRelationInput | EngagementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Engagements.
     */
    cursor?: EngagementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Engagements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Engagements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Engagements.
     */
    distinct?: EngagementScalarFieldEnum | EngagementScalarFieldEnum[]
  }

  /**
   * Engagement findFirstOrThrow
   */
  export type EngagementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engagement
     */
    select?: EngagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engagement
     */
    omit?: EngagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngagementInclude<ExtArgs> | null
    /**
     * Filter, which Engagement to fetch.
     */
    where?: EngagementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Engagements to fetch.
     */
    orderBy?: EngagementOrderByWithRelationInput | EngagementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Engagements.
     */
    cursor?: EngagementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Engagements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Engagements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Engagements.
     */
    distinct?: EngagementScalarFieldEnum | EngagementScalarFieldEnum[]
  }

  /**
   * Engagement findMany
   */
  export type EngagementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engagement
     */
    select?: EngagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engagement
     */
    omit?: EngagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngagementInclude<ExtArgs> | null
    /**
     * Filter, which Engagements to fetch.
     */
    where?: EngagementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Engagements to fetch.
     */
    orderBy?: EngagementOrderByWithRelationInput | EngagementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Engagements.
     */
    cursor?: EngagementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Engagements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Engagements.
     */
    skip?: number
    distinct?: EngagementScalarFieldEnum | EngagementScalarFieldEnum[]
  }

  /**
   * Engagement create
   */
  export type EngagementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engagement
     */
    select?: EngagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engagement
     */
    omit?: EngagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngagementInclude<ExtArgs> | null
    /**
     * The data needed to create a Engagement.
     */
    data: XOR<EngagementCreateInput, EngagementUncheckedCreateInput>
  }

  /**
   * Engagement createMany
   */
  export type EngagementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Engagements.
     */
    data: EngagementCreateManyInput | EngagementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Engagement update
   */
  export type EngagementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engagement
     */
    select?: EngagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engagement
     */
    omit?: EngagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngagementInclude<ExtArgs> | null
    /**
     * The data needed to update a Engagement.
     */
    data: XOR<EngagementUpdateInput, EngagementUncheckedUpdateInput>
    /**
     * Choose, which Engagement to update.
     */
    where: EngagementWhereUniqueInput
  }

  /**
   * Engagement updateMany
   */
  export type EngagementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Engagements.
     */
    data: XOR<EngagementUpdateManyMutationInput, EngagementUncheckedUpdateManyInput>
    /**
     * Filter which Engagements to update
     */
    where?: EngagementWhereInput
    /**
     * Limit how many Engagements to update.
     */
    limit?: number
  }

  /**
   * Engagement upsert
   */
  export type EngagementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engagement
     */
    select?: EngagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engagement
     */
    omit?: EngagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngagementInclude<ExtArgs> | null
    /**
     * The filter to search for the Engagement to update in case it exists.
     */
    where: EngagementWhereUniqueInput
    /**
     * In case the Engagement found by the `where` argument doesn't exist, create a new Engagement with this data.
     */
    create: XOR<EngagementCreateInput, EngagementUncheckedCreateInput>
    /**
     * In case the Engagement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EngagementUpdateInput, EngagementUncheckedUpdateInput>
  }

  /**
   * Engagement delete
   */
  export type EngagementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engagement
     */
    select?: EngagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engagement
     */
    omit?: EngagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngagementInclude<ExtArgs> | null
    /**
     * Filter which Engagement to delete.
     */
    where: EngagementWhereUniqueInput
  }

  /**
   * Engagement deleteMany
   */
  export type EngagementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Engagements to delete
     */
    where?: EngagementWhereInput
    /**
     * Limit how many Engagements to delete.
     */
    limit?: number
  }

  /**
   * Engagement without action
   */
  export type EngagementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engagement
     */
    select?: EngagementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engagement
     */
    omit?: EngagementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngagementInclude<ExtArgs> | null
  }


  /**
   * Model PostsCategories
   */

  export type AggregatePostsCategories = {
    _count: PostsCategoriesCountAggregateOutputType | null
    _avg: PostsCategoriesAvgAggregateOutputType | null
    _sum: PostsCategoriesSumAggregateOutputType | null
    _min: PostsCategoriesMinAggregateOutputType | null
    _max: PostsCategoriesMaxAggregateOutputType | null
  }

  export type PostsCategoriesAvgAggregateOutputType = {
    id: number | null
    postId: number | null
    categoryId: number | null
  }

  export type PostsCategoriesSumAggregateOutputType = {
    id: number | null
    postId: number | null
    categoryId: number | null
  }

  export type PostsCategoriesMinAggregateOutputType = {
    id: number | null
    postId: number | null
    categoryId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostsCategoriesMaxAggregateOutputType = {
    id: number | null
    postId: number | null
    categoryId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostsCategoriesCountAggregateOutputType = {
    id: number
    postId: number
    categoryId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PostsCategoriesAvgAggregateInputType = {
    id?: true
    postId?: true
    categoryId?: true
  }

  export type PostsCategoriesSumAggregateInputType = {
    id?: true
    postId?: true
    categoryId?: true
  }

  export type PostsCategoriesMinAggregateInputType = {
    id?: true
    postId?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostsCategoriesMaxAggregateInputType = {
    id?: true
    postId?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostsCategoriesCountAggregateInputType = {
    id?: true
    postId?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PostsCategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostsCategories to aggregate.
     */
    where?: PostsCategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostsCategories to fetch.
     */
    orderBy?: PostsCategoriesOrderByWithRelationInput | PostsCategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostsCategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostsCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostsCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostsCategories
    **/
    _count?: true | PostsCategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostsCategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostsCategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostsCategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostsCategoriesMaxAggregateInputType
  }

  export type GetPostsCategoriesAggregateType<T extends PostsCategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregatePostsCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostsCategories[P]>
      : GetScalarType<T[P], AggregatePostsCategories[P]>
  }




  export type PostsCategoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostsCategoriesWhereInput
    orderBy?: PostsCategoriesOrderByWithAggregationInput | PostsCategoriesOrderByWithAggregationInput[]
    by: PostsCategoriesScalarFieldEnum[] | PostsCategoriesScalarFieldEnum
    having?: PostsCategoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostsCategoriesCountAggregateInputType | true
    _avg?: PostsCategoriesAvgAggregateInputType
    _sum?: PostsCategoriesSumAggregateInputType
    _min?: PostsCategoriesMinAggregateInputType
    _max?: PostsCategoriesMaxAggregateInputType
  }

  export type PostsCategoriesGroupByOutputType = {
    id: number
    postId: number
    categoryId: number
    createdAt: Date
    updatedAt: Date
    _count: PostsCategoriesCountAggregateOutputType | null
    _avg: PostsCategoriesAvgAggregateOutputType | null
    _sum: PostsCategoriesSumAggregateOutputType | null
    _min: PostsCategoriesMinAggregateOutputType | null
    _max: PostsCategoriesMaxAggregateOutputType | null
  }

  type GetPostsCategoriesGroupByPayload<T extends PostsCategoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostsCategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostsCategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostsCategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], PostsCategoriesGroupByOutputType[P]>
        }
      >
    >


  export type PostsCategoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postsCategories"]>



  export type PostsCategoriesSelectScalar = {
    id?: boolean
    postId?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PostsCategoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postId" | "categoryId" | "createdAt" | "updatedAt", ExtArgs["result"]["postsCategories"]>
  export type PostsCategoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $PostsCategoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostsCategories"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      postId: number
      categoryId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["postsCategories"]>
    composites: {}
  }

  type PostsCategoriesGetPayload<S extends boolean | null | undefined | PostsCategoriesDefaultArgs> = $Result.GetResult<Prisma.$PostsCategoriesPayload, S>

  type PostsCategoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostsCategoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostsCategoriesCountAggregateInputType | true
    }

  export interface PostsCategoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostsCategories'], meta: { name: 'PostsCategories' } }
    /**
     * Find zero or one PostsCategories that matches the filter.
     * @param {PostsCategoriesFindUniqueArgs} args - Arguments to find a PostsCategories
     * @example
     * // Get one PostsCategories
     * const postsCategories = await prisma.postsCategories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostsCategoriesFindUniqueArgs>(args: SelectSubset<T, PostsCategoriesFindUniqueArgs<ExtArgs>>): Prisma__PostsCategoriesClient<$Result.GetResult<Prisma.$PostsCategoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostsCategories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostsCategoriesFindUniqueOrThrowArgs} args - Arguments to find a PostsCategories
     * @example
     * // Get one PostsCategories
     * const postsCategories = await prisma.postsCategories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostsCategoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, PostsCategoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostsCategoriesClient<$Result.GetResult<Prisma.$PostsCategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostsCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsCategoriesFindFirstArgs} args - Arguments to find a PostsCategories
     * @example
     * // Get one PostsCategories
     * const postsCategories = await prisma.postsCategories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostsCategoriesFindFirstArgs>(args?: SelectSubset<T, PostsCategoriesFindFirstArgs<ExtArgs>>): Prisma__PostsCategoriesClient<$Result.GetResult<Prisma.$PostsCategoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostsCategories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsCategoriesFindFirstOrThrowArgs} args - Arguments to find a PostsCategories
     * @example
     * // Get one PostsCategories
     * const postsCategories = await prisma.postsCategories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostsCategoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, PostsCategoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostsCategoriesClient<$Result.GetResult<Prisma.$PostsCategoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostsCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsCategoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostsCategories
     * const postsCategories = await prisma.postsCategories.findMany()
     * 
     * // Get first 10 PostsCategories
     * const postsCategories = await prisma.postsCategories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postsCategoriesWithIdOnly = await prisma.postsCategories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostsCategoriesFindManyArgs>(args?: SelectSubset<T, PostsCategoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostsCategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostsCategories.
     * @param {PostsCategoriesCreateArgs} args - Arguments to create a PostsCategories.
     * @example
     * // Create one PostsCategories
     * const PostsCategories = await prisma.postsCategories.create({
     *   data: {
     *     // ... data to create a PostsCategories
     *   }
     * })
     * 
     */
    create<T extends PostsCategoriesCreateArgs>(args: SelectSubset<T, PostsCategoriesCreateArgs<ExtArgs>>): Prisma__PostsCategoriesClient<$Result.GetResult<Prisma.$PostsCategoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostsCategories.
     * @param {PostsCategoriesCreateManyArgs} args - Arguments to create many PostsCategories.
     * @example
     * // Create many PostsCategories
     * const postsCategories = await prisma.postsCategories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostsCategoriesCreateManyArgs>(args?: SelectSubset<T, PostsCategoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PostsCategories.
     * @param {PostsCategoriesDeleteArgs} args - Arguments to delete one PostsCategories.
     * @example
     * // Delete one PostsCategories
     * const PostsCategories = await prisma.postsCategories.delete({
     *   where: {
     *     // ... filter to delete one PostsCategories
     *   }
     * })
     * 
     */
    delete<T extends PostsCategoriesDeleteArgs>(args: SelectSubset<T, PostsCategoriesDeleteArgs<ExtArgs>>): Prisma__PostsCategoriesClient<$Result.GetResult<Prisma.$PostsCategoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostsCategories.
     * @param {PostsCategoriesUpdateArgs} args - Arguments to update one PostsCategories.
     * @example
     * // Update one PostsCategories
     * const postsCategories = await prisma.postsCategories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostsCategoriesUpdateArgs>(args: SelectSubset<T, PostsCategoriesUpdateArgs<ExtArgs>>): Prisma__PostsCategoriesClient<$Result.GetResult<Prisma.$PostsCategoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostsCategories.
     * @param {PostsCategoriesDeleteManyArgs} args - Arguments to filter PostsCategories to delete.
     * @example
     * // Delete a few PostsCategories
     * const { count } = await prisma.postsCategories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostsCategoriesDeleteManyArgs>(args?: SelectSubset<T, PostsCategoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostsCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsCategoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostsCategories
     * const postsCategories = await prisma.postsCategories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostsCategoriesUpdateManyArgs>(args: SelectSubset<T, PostsCategoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PostsCategories.
     * @param {PostsCategoriesUpsertArgs} args - Arguments to update or create a PostsCategories.
     * @example
     * // Update or create a PostsCategories
     * const postsCategories = await prisma.postsCategories.upsert({
     *   create: {
     *     // ... data to create a PostsCategories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostsCategories we want to update
     *   }
     * })
     */
    upsert<T extends PostsCategoriesUpsertArgs>(args: SelectSubset<T, PostsCategoriesUpsertArgs<ExtArgs>>): Prisma__PostsCategoriesClient<$Result.GetResult<Prisma.$PostsCategoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PostsCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsCategoriesCountArgs} args - Arguments to filter PostsCategories to count.
     * @example
     * // Count the number of PostsCategories
     * const count = await prisma.postsCategories.count({
     *   where: {
     *     // ... the filter for the PostsCategories we want to count
     *   }
     * })
    **/
    count<T extends PostsCategoriesCountArgs>(
      args?: Subset<T, PostsCategoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostsCategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostsCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsCategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostsCategoriesAggregateArgs>(args: Subset<T, PostsCategoriesAggregateArgs>): Prisma.PrismaPromise<GetPostsCategoriesAggregateType<T>>

    /**
     * Group by PostsCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsCategoriesGroupByArgs} args - Group by arguments.
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
      T extends PostsCategoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostsCategoriesGroupByArgs['orderBy'] }
        : { orderBy?: PostsCategoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostsCategoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostsCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostsCategories model
   */
  readonly fields: PostsCategoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostsCategories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostsCategoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PostsCategories model
   */
  interface PostsCategoriesFieldRefs {
    readonly id: FieldRef<"PostsCategories", 'Int'>
    readonly postId: FieldRef<"PostsCategories", 'Int'>
    readonly categoryId: FieldRef<"PostsCategories", 'Int'>
    readonly createdAt: FieldRef<"PostsCategories", 'DateTime'>
    readonly updatedAt: FieldRef<"PostsCategories", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PostsCategories findUnique
   */
  export type PostsCategoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostsCategories
     */
    select?: PostsCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostsCategories
     */
    omit?: PostsCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which PostsCategories to fetch.
     */
    where: PostsCategoriesWhereUniqueInput
  }

  /**
   * PostsCategories findUniqueOrThrow
   */
  export type PostsCategoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostsCategories
     */
    select?: PostsCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostsCategories
     */
    omit?: PostsCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which PostsCategories to fetch.
     */
    where: PostsCategoriesWhereUniqueInput
  }

  /**
   * PostsCategories findFirst
   */
  export type PostsCategoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostsCategories
     */
    select?: PostsCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostsCategories
     */
    omit?: PostsCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which PostsCategories to fetch.
     */
    where?: PostsCategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostsCategories to fetch.
     */
    orderBy?: PostsCategoriesOrderByWithRelationInput | PostsCategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostsCategories.
     */
    cursor?: PostsCategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostsCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostsCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostsCategories.
     */
    distinct?: PostsCategoriesScalarFieldEnum | PostsCategoriesScalarFieldEnum[]
  }

  /**
   * PostsCategories findFirstOrThrow
   */
  export type PostsCategoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostsCategories
     */
    select?: PostsCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostsCategories
     */
    omit?: PostsCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which PostsCategories to fetch.
     */
    where?: PostsCategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostsCategories to fetch.
     */
    orderBy?: PostsCategoriesOrderByWithRelationInput | PostsCategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostsCategories.
     */
    cursor?: PostsCategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostsCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostsCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostsCategories.
     */
    distinct?: PostsCategoriesScalarFieldEnum | PostsCategoriesScalarFieldEnum[]
  }

  /**
   * PostsCategories findMany
   */
  export type PostsCategoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostsCategories
     */
    select?: PostsCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostsCategories
     */
    omit?: PostsCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which PostsCategories to fetch.
     */
    where?: PostsCategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostsCategories to fetch.
     */
    orderBy?: PostsCategoriesOrderByWithRelationInput | PostsCategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostsCategories.
     */
    cursor?: PostsCategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostsCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostsCategories.
     */
    skip?: number
    distinct?: PostsCategoriesScalarFieldEnum | PostsCategoriesScalarFieldEnum[]
  }

  /**
   * PostsCategories create
   */
  export type PostsCategoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostsCategories
     */
    select?: PostsCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostsCategories
     */
    omit?: PostsCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsCategoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a PostsCategories.
     */
    data: XOR<PostsCategoriesCreateInput, PostsCategoriesUncheckedCreateInput>
  }

  /**
   * PostsCategories createMany
   */
  export type PostsCategoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostsCategories.
     */
    data: PostsCategoriesCreateManyInput | PostsCategoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostsCategories update
   */
  export type PostsCategoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostsCategories
     */
    select?: PostsCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostsCategories
     */
    omit?: PostsCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsCategoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a PostsCategories.
     */
    data: XOR<PostsCategoriesUpdateInput, PostsCategoriesUncheckedUpdateInput>
    /**
     * Choose, which PostsCategories to update.
     */
    where: PostsCategoriesWhereUniqueInput
  }

  /**
   * PostsCategories updateMany
   */
  export type PostsCategoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostsCategories.
     */
    data: XOR<PostsCategoriesUpdateManyMutationInput, PostsCategoriesUncheckedUpdateManyInput>
    /**
     * Filter which PostsCategories to update
     */
    where?: PostsCategoriesWhereInput
    /**
     * Limit how many PostsCategories to update.
     */
    limit?: number
  }

  /**
   * PostsCategories upsert
   */
  export type PostsCategoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostsCategories
     */
    select?: PostsCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostsCategories
     */
    omit?: PostsCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsCategoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the PostsCategories to update in case it exists.
     */
    where: PostsCategoriesWhereUniqueInput
    /**
     * In case the PostsCategories found by the `where` argument doesn't exist, create a new PostsCategories with this data.
     */
    create: XOR<PostsCategoriesCreateInput, PostsCategoriesUncheckedCreateInput>
    /**
     * In case the PostsCategories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostsCategoriesUpdateInput, PostsCategoriesUncheckedUpdateInput>
  }

  /**
   * PostsCategories delete
   */
  export type PostsCategoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostsCategories
     */
    select?: PostsCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostsCategories
     */
    omit?: PostsCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsCategoriesInclude<ExtArgs> | null
    /**
     * Filter which PostsCategories to delete.
     */
    where: PostsCategoriesWhereUniqueInput
  }

  /**
   * PostsCategories deleteMany
   */
  export type PostsCategoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostsCategories to delete
     */
    where?: PostsCategoriesWhereInput
    /**
     * Limit how many PostsCategories to delete.
     */
    limit?: number
  }

  /**
   * PostsCategories without action
   */
  export type PostsCategoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostsCategories
     */
    select?: PostsCategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostsCategories
     */
    omit?: PostsCategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsCategoriesInclude<ExtArgs> | null
  }


  /**
   * Model FeatureEvent
   */

  export type AggregateFeatureEvent = {
    _count: FeatureEventCountAggregateOutputType | null
    _avg: FeatureEventAvgAggregateOutputType | null
    _sum: FeatureEventSumAggregateOutputType | null
    _min: FeatureEventMinAggregateOutputType | null
    _max: FeatureEventMaxAggregateOutputType | null
  }

  export type FeatureEventAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type FeatureEventSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type FeatureEventMinAggregateOutputType = {
    id: number | null
    userId: number | null
    featureKey: string | null
    event: string | null
    enabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FeatureEventMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    featureKey: string | null
    event: string | null
    enabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FeatureEventCountAggregateOutputType = {
    id: number
    userId: number
    featureKey: number
    event: number
    enabled: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FeatureEventAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type FeatureEventSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type FeatureEventMinAggregateInputType = {
    id?: true
    userId?: true
    featureKey?: true
    event?: true
    enabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FeatureEventMaxAggregateInputType = {
    id?: true
    userId?: true
    featureKey?: true
    event?: true
    enabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FeatureEventCountAggregateInputType = {
    id?: true
    userId?: true
    featureKey?: true
    event?: true
    enabled?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FeatureEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeatureEvent to aggregate.
     */
    where?: FeatureEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeatureEvents to fetch.
     */
    orderBy?: FeatureEventOrderByWithRelationInput | FeatureEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeatureEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeatureEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeatureEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FeatureEvents
    **/
    _count?: true | FeatureEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeatureEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeatureEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeatureEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeatureEventMaxAggregateInputType
  }

  export type GetFeatureEventAggregateType<T extends FeatureEventAggregateArgs> = {
        [P in keyof T & keyof AggregateFeatureEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeatureEvent[P]>
      : GetScalarType<T[P], AggregateFeatureEvent[P]>
  }




  export type FeatureEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeatureEventWhereInput
    orderBy?: FeatureEventOrderByWithAggregationInput | FeatureEventOrderByWithAggregationInput[]
    by: FeatureEventScalarFieldEnum[] | FeatureEventScalarFieldEnum
    having?: FeatureEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeatureEventCountAggregateInputType | true
    _avg?: FeatureEventAvgAggregateInputType
    _sum?: FeatureEventSumAggregateInputType
    _min?: FeatureEventMinAggregateInputType
    _max?: FeatureEventMaxAggregateInputType
  }

  export type FeatureEventGroupByOutputType = {
    id: number
    userId: number
    featureKey: string
    event: string
    enabled: boolean
    createdAt: Date
    updatedAt: Date
    _count: FeatureEventCountAggregateOutputType | null
    _avg: FeatureEventAvgAggregateOutputType | null
    _sum: FeatureEventSumAggregateOutputType | null
    _min: FeatureEventMinAggregateOutputType | null
    _max: FeatureEventMaxAggregateOutputType | null
  }

  type GetFeatureEventGroupByPayload<T extends FeatureEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeatureEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeatureEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeatureEventGroupByOutputType[P]>
            : GetScalarType<T[P], FeatureEventGroupByOutputType[P]>
        }
      >
    >


  export type FeatureEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    featureKey?: boolean
    event?: boolean
    enabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["featureEvent"]>



  export type FeatureEventSelectScalar = {
    id?: boolean
    userId?: boolean
    featureKey?: boolean
    event?: boolean
    enabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FeatureEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "featureKey" | "event" | "enabled" | "createdAt" | "updatedAt", ExtArgs["result"]["featureEvent"]>
  export type FeatureEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FeatureEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FeatureEvent"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      featureKey: string
      event: string
      enabled: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["featureEvent"]>
    composites: {}
  }

  type FeatureEventGetPayload<S extends boolean | null | undefined | FeatureEventDefaultArgs> = $Result.GetResult<Prisma.$FeatureEventPayload, S>

  type FeatureEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeatureEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeatureEventCountAggregateInputType | true
    }

  export interface FeatureEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FeatureEvent'], meta: { name: 'FeatureEvent' } }
    /**
     * Find zero or one FeatureEvent that matches the filter.
     * @param {FeatureEventFindUniqueArgs} args - Arguments to find a FeatureEvent
     * @example
     * // Get one FeatureEvent
     * const featureEvent = await prisma.featureEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeatureEventFindUniqueArgs>(args: SelectSubset<T, FeatureEventFindUniqueArgs<ExtArgs>>): Prisma__FeatureEventClient<$Result.GetResult<Prisma.$FeatureEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FeatureEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeatureEventFindUniqueOrThrowArgs} args - Arguments to find a FeatureEvent
     * @example
     * // Get one FeatureEvent
     * const featureEvent = await prisma.featureEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeatureEventFindUniqueOrThrowArgs>(args: SelectSubset<T, FeatureEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeatureEventClient<$Result.GetResult<Prisma.$FeatureEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeatureEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureEventFindFirstArgs} args - Arguments to find a FeatureEvent
     * @example
     * // Get one FeatureEvent
     * const featureEvent = await prisma.featureEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeatureEventFindFirstArgs>(args?: SelectSubset<T, FeatureEventFindFirstArgs<ExtArgs>>): Prisma__FeatureEventClient<$Result.GetResult<Prisma.$FeatureEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeatureEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureEventFindFirstOrThrowArgs} args - Arguments to find a FeatureEvent
     * @example
     * // Get one FeatureEvent
     * const featureEvent = await prisma.featureEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeatureEventFindFirstOrThrowArgs>(args?: SelectSubset<T, FeatureEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeatureEventClient<$Result.GetResult<Prisma.$FeatureEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FeatureEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FeatureEvents
     * const featureEvents = await prisma.featureEvent.findMany()
     * 
     * // Get first 10 FeatureEvents
     * const featureEvents = await prisma.featureEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const featureEventWithIdOnly = await prisma.featureEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeatureEventFindManyArgs>(args?: SelectSubset<T, FeatureEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeatureEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FeatureEvent.
     * @param {FeatureEventCreateArgs} args - Arguments to create a FeatureEvent.
     * @example
     * // Create one FeatureEvent
     * const FeatureEvent = await prisma.featureEvent.create({
     *   data: {
     *     // ... data to create a FeatureEvent
     *   }
     * })
     * 
     */
    create<T extends FeatureEventCreateArgs>(args: SelectSubset<T, FeatureEventCreateArgs<ExtArgs>>): Prisma__FeatureEventClient<$Result.GetResult<Prisma.$FeatureEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FeatureEvents.
     * @param {FeatureEventCreateManyArgs} args - Arguments to create many FeatureEvents.
     * @example
     * // Create many FeatureEvents
     * const featureEvent = await prisma.featureEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeatureEventCreateManyArgs>(args?: SelectSubset<T, FeatureEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FeatureEvent.
     * @param {FeatureEventDeleteArgs} args - Arguments to delete one FeatureEvent.
     * @example
     * // Delete one FeatureEvent
     * const FeatureEvent = await prisma.featureEvent.delete({
     *   where: {
     *     // ... filter to delete one FeatureEvent
     *   }
     * })
     * 
     */
    delete<T extends FeatureEventDeleteArgs>(args: SelectSubset<T, FeatureEventDeleteArgs<ExtArgs>>): Prisma__FeatureEventClient<$Result.GetResult<Prisma.$FeatureEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FeatureEvent.
     * @param {FeatureEventUpdateArgs} args - Arguments to update one FeatureEvent.
     * @example
     * // Update one FeatureEvent
     * const featureEvent = await prisma.featureEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeatureEventUpdateArgs>(args: SelectSubset<T, FeatureEventUpdateArgs<ExtArgs>>): Prisma__FeatureEventClient<$Result.GetResult<Prisma.$FeatureEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FeatureEvents.
     * @param {FeatureEventDeleteManyArgs} args - Arguments to filter FeatureEvents to delete.
     * @example
     * // Delete a few FeatureEvents
     * const { count } = await prisma.featureEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeatureEventDeleteManyArgs>(args?: SelectSubset<T, FeatureEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeatureEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FeatureEvents
     * const featureEvent = await prisma.featureEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeatureEventUpdateManyArgs>(args: SelectSubset<T, FeatureEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FeatureEvent.
     * @param {FeatureEventUpsertArgs} args - Arguments to update or create a FeatureEvent.
     * @example
     * // Update or create a FeatureEvent
     * const featureEvent = await prisma.featureEvent.upsert({
     *   create: {
     *     // ... data to create a FeatureEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FeatureEvent we want to update
     *   }
     * })
     */
    upsert<T extends FeatureEventUpsertArgs>(args: SelectSubset<T, FeatureEventUpsertArgs<ExtArgs>>): Prisma__FeatureEventClient<$Result.GetResult<Prisma.$FeatureEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FeatureEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureEventCountArgs} args - Arguments to filter FeatureEvents to count.
     * @example
     * // Count the number of FeatureEvents
     * const count = await prisma.featureEvent.count({
     *   where: {
     *     // ... the filter for the FeatureEvents we want to count
     *   }
     * })
    **/
    count<T extends FeatureEventCountArgs>(
      args?: Subset<T, FeatureEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeatureEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FeatureEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeatureEventAggregateArgs>(args: Subset<T, FeatureEventAggregateArgs>): Prisma.PrismaPromise<GetFeatureEventAggregateType<T>>

    /**
     * Group by FeatureEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureEventGroupByArgs} args - Group by arguments.
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
      T extends FeatureEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeatureEventGroupByArgs['orderBy'] }
        : { orderBy?: FeatureEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FeatureEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeatureEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FeatureEvent model
   */
  readonly fields: FeatureEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FeatureEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeatureEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the FeatureEvent model
   */
  interface FeatureEventFieldRefs {
    readonly id: FieldRef<"FeatureEvent", 'Int'>
    readonly userId: FieldRef<"FeatureEvent", 'Int'>
    readonly featureKey: FieldRef<"FeatureEvent", 'String'>
    readonly event: FieldRef<"FeatureEvent", 'String'>
    readonly enabled: FieldRef<"FeatureEvent", 'Boolean'>
    readonly createdAt: FieldRef<"FeatureEvent", 'DateTime'>
    readonly updatedAt: FieldRef<"FeatureEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FeatureEvent findUnique
   */
  export type FeatureEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureEvent
     */
    select?: FeatureEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureEvent
     */
    omit?: FeatureEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureEventInclude<ExtArgs> | null
    /**
     * Filter, which FeatureEvent to fetch.
     */
    where: FeatureEventWhereUniqueInput
  }

  /**
   * FeatureEvent findUniqueOrThrow
   */
  export type FeatureEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureEvent
     */
    select?: FeatureEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureEvent
     */
    omit?: FeatureEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureEventInclude<ExtArgs> | null
    /**
     * Filter, which FeatureEvent to fetch.
     */
    where: FeatureEventWhereUniqueInput
  }

  /**
   * FeatureEvent findFirst
   */
  export type FeatureEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureEvent
     */
    select?: FeatureEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureEvent
     */
    omit?: FeatureEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureEventInclude<ExtArgs> | null
    /**
     * Filter, which FeatureEvent to fetch.
     */
    where?: FeatureEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeatureEvents to fetch.
     */
    orderBy?: FeatureEventOrderByWithRelationInput | FeatureEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeatureEvents.
     */
    cursor?: FeatureEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeatureEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeatureEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeatureEvents.
     */
    distinct?: FeatureEventScalarFieldEnum | FeatureEventScalarFieldEnum[]
  }

  /**
   * FeatureEvent findFirstOrThrow
   */
  export type FeatureEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureEvent
     */
    select?: FeatureEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureEvent
     */
    omit?: FeatureEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureEventInclude<ExtArgs> | null
    /**
     * Filter, which FeatureEvent to fetch.
     */
    where?: FeatureEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeatureEvents to fetch.
     */
    orderBy?: FeatureEventOrderByWithRelationInput | FeatureEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeatureEvents.
     */
    cursor?: FeatureEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeatureEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeatureEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeatureEvents.
     */
    distinct?: FeatureEventScalarFieldEnum | FeatureEventScalarFieldEnum[]
  }

  /**
   * FeatureEvent findMany
   */
  export type FeatureEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureEvent
     */
    select?: FeatureEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureEvent
     */
    omit?: FeatureEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureEventInclude<ExtArgs> | null
    /**
     * Filter, which FeatureEvents to fetch.
     */
    where?: FeatureEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeatureEvents to fetch.
     */
    orderBy?: FeatureEventOrderByWithRelationInput | FeatureEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FeatureEvents.
     */
    cursor?: FeatureEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeatureEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeatureEvents.
     */
    skip?: number
    distinct?: FeatureEventScalarFieldEnum | FeatureEventScalarFieldEnum[]
  }

  /**
   * FeatureEvent create
   */
  export type FeatureEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureEvent
     */
    select?: FeatureEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureEvent
     */
    omit?: FeatureEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureEventInclude<ExtArgs> | null
    /**
     * The data needed to create a FeatureEvent.
     */
    data: XOR<FeatureEventCreateInput, FeatureEventUncheckedCreateInput>
  }

  /**
   * FeatureEvent createMany
   */
  export type FeatureEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FeatureEvents.
     */
    data: FeatureEventCreateManyInput | FeatureEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FeatureEvent update
   */
  export type FeatureEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureEvent
     */
    select?: FeatureEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureEvent
     */
    omit?: FeatureEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureEventInclude<ExtArgs> | null
    /**
     * The data needed to update a FeatureEvent.
     */
    data: XOR<FeatureEventUpdateInput, FeatureEventUncheckedUpdateInput>
    /**
     * Choose, which FeatureEvent to update.
     */
    where: FeatureEventWhereUniqueInput
  }

  /**
   * FeatureEvent updateMany
   */
  export type FeatureEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FeatureEvents.
     */
    data: XOR<FeatureEventUpdateManyMutationInput, FeatureEventUncheckedUpdateManyInput>
    /**
     * Filter which FeatureEvents to update
     */
    where?: FeatureEventWhereInput
    /**
     * Limit how many FeatureEvents to update.
     */
    limit?: number
  }

  /**
   * FeatureEvent upsert
   */
  export type FeatureEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureEvent
     */
    select?: FeatureEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureEvent
     */
    omit?: FeatureEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureEventInclude<ExtArgs> | null
    /**
     * The filter to search for the FeatureEvent to update in case it exists.
     */
    where: FeatureEventWhereUniqueInput
    /**
     * In case the FeatureEvent found by the `where` argument doesn't exist, create a new FeatureEvent with this data.
     */
    create: XOR<FeatureEventCreateInput, FeatureEventUncheckedCreateInput>
    /**
     * In case the FeatureEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeatureEventUpdateInput, FeatureEventUncheckedUpdateInput>
  }

  /**
   * FeatureEvent delete
   */
  export type FeatureEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureEvent
     */
    select?: FeatureEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureEvent
     */
    omit?: FeatureEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureEventInclude<ExtArgs> | null
    /**
     * Filter which FeatureEvent to delete.
     */
    where: FeatureEventWhereUniqueInput
  }

  /**
   * FeatureEvent deleteMany
   */
  export type FeatureEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeatureEvents to delete
     */
    where?: FeatureEventWhereInput
    /**
     * Limit how many FeatureEvents to delete.
     */
    limit?: number
  }

  /**
   * FeatureEvent without action
   */
  export type FeatureEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureEvent
     */
    select?: FeatureEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureEvent
     */
    omit?: FeatureEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureEventInclude<ExtArgs> | null
  }


  /**
   * Model RefreshToken
   */

  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null
    _avg: RefreshTokenAvgAggregateOutputType | null
    _sum: RefreshTokenSumAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  export type RefreshTokenAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type RefreshTokenSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type RefreshTokenMinAggregateOutputType = {
    id: number | null
    userId: number | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RefreshTokenMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RefreshTokenCountAggregateOutputType = {
    id: number
    userId: number
    token: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RefreshTokenAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type RefreshTokenSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type RefreshTokenMinAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RefreshTokenMaxAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RefreshTokenCountAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RefreshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshToken to aggregate.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshTokens
    **/
    _count?: true | RefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RefreshTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RefreshTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type GetRefreshTokenAggregateType<T extends RefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>
  }




  export type RefreshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithAggregationInput | RefreshTokenOrderByWithAggregationInput[]
    by: RefreshTokenScalarFieldEnum[] | RefreshTokenScalarFieldEnum
    having?: RefreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshTokenCountAggregateInputType | true
    _avg?: RefreshTokenAvgAggregateInputType
    _sum?: RefreshTokenSumAggregateInputType
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type RefreshTokenGroupByOutputType = {
    id: number
    userId: number
    token: string
    createdAt: Date
    updatedAt: Date
    _count: RefreshTokenCountAggregateOutputType | null
    _avg: RefreshTokenAvgAggregateOutputType | null
    _sum: RefreshTokenSumAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type RefreshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>



  export type RefreshTokenSelectScalar = {
    id?: boolean
    userId?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RefreshTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "token" | "createdAt" | "updatedAt", ExtArgs["result"]["refreshToken"]>
  export type RefreshTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RefreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefreshToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      token: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["refreshToken"]>
    composites: {}
  }

  type RefreshTokenGetPayload<S extends boolean | null | undefined | RefreshTokenDefaultArgs> = $Result.GetResult<Prisma.$RefreshTokenPayload, S>

  type RefreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefreshTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefreshTokenCountAggregateInputType | true
    }

  export interface RefreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefreshToken'], meta: { name: 'RefreshToken' } }
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshTokenFindUniqueArgs>(args: SelectSubset<T, RefreshTokenFindUniqueArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RefreshToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshTokenFindFirstArgs>(args?: SelectSubset<T, RefreshTokenFindFirstArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     * 
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefreshTokenFindManyArgs>(args?: SelectSubset<T, RefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RefreshToken.
     * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     * 
     */
    create<T extends RefreshTokenCreateArgs>(args: SelectSubset<T, RefreshTokenCreateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RefreshTokens.
     * @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefreshTokenCreateManyArgs>(args?: SelectSubset<T, RefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RefreshToken.
     * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     * 
     */
    delete<T extends RefreshTokenDeleteArgs>(args: SelectSubset<T, RefreshTokenDeleteArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RefreshToken.
     * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefreshTokenUpdateArgs>(args: SelectSubset<T, RefreshTokenUpdateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefreshTokenDeleteManyArgs>(args?: SelectSubset<T, RefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefreshTokenUpdateManyArgs>(args: SelectSubset<T, RefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RefreshToken.
     * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends RefreshTokenUpsertArgs>(args: SelectSubset<T, RefreshTokenUpsertArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RefreshTokenAggregateArgs>(args: Subset<T, RefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenGroupByArgs} args - Group by arguments.
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
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RefreshTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefreshToken model
   */
  readonly fields: RefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the RefreshToken model
   */
  interface RefreshTokenFieldRefs {
    readonly id: FieldRef<"RefreshToken", 'Int'>
    readonly userId: FieldRef<"RefreshToken", 'Int'>
    readonly token: FieldRef<"RefreshToken", 'String'>
    readonly createdAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly updatedAt: FieldRef<"RefreshToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RefreshToken findUnique
   */
  export type RefreshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findUniqueOrThrow
   */
  export type RefreshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findFirst
   */
  export type RefreshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findFirstOrThrow
   */
  export type RefreshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findMany
   */
  export type RefreshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshTokens to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken create
   */
  export type RefreshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a RefreshToken.
     */
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
  }

  /**
   * RefreshToken createMany
   */
  export type RefreshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RefreshToken update
   */
  export type RefreshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a RefreshToken.
     */
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
    /**
     * Choose, which RefreshToken to update.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken updateMany
   */
  export type RefreshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
  }

  /**
   * RefreshToken upsert
   */
  export type RefreshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the RefreshToken to update in case it exists.
     */
    where: RefreshTokenWhereUniqueInput
    /**
     * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
     */
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
    /**
     * In case the RefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
  }

  /**
   * RefreshToken delete
   */
  export type RefreshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter which RefreshToken to delete.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken deleteMany
   */
  export type RefreshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshTokens to delete
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to delete.
     */
    limit?: number
  }

  /**
   * RefreshToken without action
   */
  export type RefreshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
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
    displayName: 'displayName',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    body: 'body',
    viewCount: 'viewCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    authorId: 'authorId'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const ViewScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    postId: 'postId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ViewScalarFieldEnum = (typeof ViewScalarFieldEnum)[keyof typeof ViewScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    label: 'label',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const EngagementScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    categoryId: 'categoryId',
    viewCount: 'viewCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EngagementScalarFieldEnum = (typeof EngagementScalarFieldEnum)[keyof typeof EngagementScalarFieldEnum]


  export const PostsCategoriesScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    categoryId: 'categoryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PostsCategoriesScalarFieldEnum = (typeof PostsCategoriesScalarFieldEnum)[keyof typeof PostsCategoriesScalarFieldEnum]


  export const FeatureEventScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    featureKey: 'featureKey',
    event: 'event',
    enabled: 'enabled',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FeatureEventScalarFieldEnum = (typeof FeatureEventScalarFieldEnum)[keyof typeof FeatureEventScalarFieldEnum]


  export const RefreshTokenScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    token: 'token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserOrderByRelevanceFieldEnum: {
    displayName: 'displayName',
    email: 'email',
    password: 'password'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const PostOrderByRelevanceFieldEnum: {
    title: 'title',
    body: 'body'
  };

  export type PostOrderByRelevanceFieldEnum = (typeof PostOrderByRelevanceFieldEnum)[keyof typeof PostOrderByRelevanceFieldEnum]


  export const CategoryOrderByRelevanceFieldEnum: {
    label: 'label'
  };

  export type CategoryOrderByRelevanceFieldEnum = (typeof CategoryOrderByRelevanceFieldEnum)[keyof typeof CategoryOrderByRelevanceFieldEnum]


  export const FeatureEventOrderByRelevanceFieldEnum: {
    featureKey: 'featureKey',
    event: 'event'
  };

  export type FeatureEventOrderByRelevanceFieldEnum = (typeof FeatureEventOrderByRelevanceFieldEnum)[keyof typeof FeatureEventOrderByRelevanceFieldEnum]


  export const RefreshTokenOrderByRelevanceFieldEnum: {
    token: 'token'
  };

  export type RefreshTokenOrderByRelevanceFieldEnum = (typeof RefreshTokenOrderByRelevanceFieldEnum)[keyof typeof RefreshTokenOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    displayName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    refreshToken?: XOR<RefreshTokenNullableScalarRelationFilter, RefreshTokenWhereInput> | null
    views?: ViewListRelationFilter
    engagements?: EngagementListRelationFilter
    featureEvents?: FeatureEventListRelationFilter
    posts?: PostListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    displayName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    refreshToken?: RefreshTokenOrderByWithRelationInput
    views?: ViewOrderByRelationAggregateInput
    engagements?: EngagementOrderByRelationAggregateInput
    featureEvents?: FeatureEventOrderByRelationAggregateInput
    posts?: PostOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    displayName?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    refreshToken?: XOR<RefreshTokenNullableScalarRelationFilter, RefreshTokenWhereInput> | null
    views?: ViewListRelationFilter
    engagements?: EngagementListRelationFilter
    featureEvents?: FeatureEventListRelationFilter
    posts?: PostListRelationFilter
  }, "id" | "displayName" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    displayName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
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
    id?: IntWithAggregatesFilter<"User"> | number
    displayName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: IntFilter<"Post"> | number
    title?: StringFilter<"Post"> | string
    body?: StringFilter<"Post"> | string
    viewCount?: IntFilter<"Post"> | number
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    authorId?: IntFilter<"Post"> | number
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    views?: ViewListRelationFilter
    categories?: PostsCategoriesListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    viewCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
    author?: UserOrderByWithRelationInput
    views?: ViewOrderByRelationAggregateInput
    categories?: PostsCategoriesOrderByRelationAggregateInput
    _relevance?: PostOrderByRelevanceInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    title?: StringFilter<"Post"> | string
    body?: StringFilter<"Post"> | string
    viewCount?: IntFilter<"Post"> | number
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    authorId?: IntFilter<"Post"> | number
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    views?: ViewListRelationFilter
    categories?: PostsCategoriesListRelationFilter
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    viewCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Post"> | number
    title?: StringWithAggregatesFilter<"Post"> | string
    body?: StringWithAggregatesFilter<"Post"> | string
    viewCount?: IntWithAggregatesFilter<"Post"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    authorId?: IntWithAggregatesFilter<"Post"> | number
  }

  export type ViewWhereInput = {
    AND?: ViewWhereInput | ViewWhereInput[]
    OR?: ViewWhereInput[]
    NOT?: ViewWhereInput | ViewWhereInput[]
    id?: IntFilter<"View"> | number
    userId?: IntFilter<"View"> | number
    postId?: IntFilter<"View"> | number
    createdAt?: DateTimeFilter<"View"> | Date | string
    updatedAt?: DateTimeFilter<"View"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }

  export type ViewOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    post?: PostOrderByWithRelationInput
  }

  export type ViewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_postId_createdAt?: ViewUserIdPostIdCreatedAtCompoundUniqueInput
    AND?: ViewWhereInput | ViewWhereInput[]
    OR?: ViewWhereInput[]
    NOT?: ViewWhereInput | ViewWhereInput[]
    userId?: IntFilter<"View"> | number
    postId?: IntFilter<"View"> | number
    createdAt?: DateTimeFilter<"View"> | Date | string
    updatedAt?: DateTimeFilter<"View"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }, "id" | "userId_postId_createdAt">

  export type ViewOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ViewCountOrderByAggregateInput
    _avg?: ViewAvgOrderByAggregateInput
    _max?: ViewMaxOrderByAggregateInput
    _min?: ViewMinOrderByAggregateInput
    _sum?: ViewSumOrderByAggregateInput
  }

  export type ViewScalarWhereWithAggregatesInput = {
    AND?: ViewScalarWhereWithAggregatesInput | ViewScalarWhereWithAggregatesInput[]
    OR?: ViewScalarWhereWithAggregatesInput[]
    NOT?: ViewScalarWhereWithAggregatesInput | ViewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"View"> | number
    userId?: IntWithAggregatesFilter<"View"> | number
    postId?: IntWithAggregatesFilter<"View"> | number
    createdAt?: DateTimeWithAggregatesFilter<"View"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"View"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    label?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    posts?: PostsCategoriesListRelationFilter
    engagements?: EngagementListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    posts?: PostsCategoriesOrderByRelationAggregateInput
    engagements?: EngagementOrderByRelationAggregateInput
    _relevance?: CategoryOrderByRelevanceInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    label?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    posts?: PostsCategoriesListRelationFilter
    engagements?: EngagementListRelationFilter
  }, "id" | "label">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    label?: StringWithAggregatesFilter<"Category"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type EngagementWhereInput = {
    AND?: EngagementWhereInput | EngagementWhereInput[]
    OR?: EngagementWhereInput[]
    NOT?: EngagementWhereInput | EngagementWhereInput[]
    id?: IntFilter<"Engagement"> | number
    userId?: IntFilter<"Engagement"> | number
    categoryId?: IntFilter<"Engagement"> | number
    viewCount?: IntFilter<"Engagement"> | number
    createdAt?: DateTimeFilter<"Engagement"> | Date | string
    updatedAt?: DateTimeFilter<"Engagement"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }

  export type EngagementOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    viewCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
  }

  export type EngagementWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_categoryId?: EngagementUserIdCategoryIdCompoundUniqueInput
    AND?: EngagementWhereInput | EngagementWhereInput[]
    OR?: EngagementWhereInput[]
    NOT?: EngagementWhereInput | EngagementWhereInput[]
    userId?: IntFilter<"Engagement"> | number
    categoryId?: IntFilter<"Engagement"> | number
    viewCount?: IntFilter<"Engagement"> | number
    createdAt?: DateTimeFilter<"Engagement"> | Date | string
    updatedAt?: DateTimeFilter<"Engagement"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }, "id" | "userId_categoryId">

  export type EngagementOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    viewCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EngagementCountOrderByAggregateInput
    _avg?: EngagementAvgOrderByAggregateInput
    _max?: EngagementMaxOrderByAggregateInput
    _min?: EngagementMinOrderByAggregateInput
    _sum?: EngagementSumOrderByAggregateInput
  }

  export type EngagementScalarWhereWithAggregatesInput = {
    AND?: EngagementScalarWhereWithAggregatesInput | EngagementScalarWhereWithAggregatesInput[]
    OR?: EngagementScalarWhereWithAggregatesInput[]
    NOT?: EngagementScalarWhereWithAggregatesInput | EngagementScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Engagement"> | number
    userId?: IntWithAggregatesFilter<"Engagement"> | number
    categoryId?: IntWithAggregatesFilter<"Engagement"> | number
    viewCount?: IntWithAggregatesFilter<"Engagement"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Engagement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Engagement"> | Date | string
  }

  export type PostsCategoriesWhereInput = {
    AND?: PostsCategoriesWhereInput | PostsCategoriesWhereInput[]
    OR?: PostsCategoriesWhereInput[]
    NOT?: PostsCategoriesWhereInput | PostsCategoriesWhereInput[]
    id?: IntFilter<"PostsCategories"> | number
    postId?: IntFilter<"PostsCategories"> | number
    categoryId?: IntFilter<"PostsCategories"> | number
    createdAt?: DateTimeFilter<"PostsCategories"> | Date | string
    updatedAt?: DateTimeFilter<"PostsCategories"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }

  export type PostsCategoriesOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    post?: PostOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
  }

  export type PostsCategoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    postId_categoryId?: PostsCategoriesPostIdCategoryIdCompoundUniqueInput
    AND?: PostsCategoriesWhereInput | PostsCategoriesWhereInput[]
    OR?: PostsCategoriesWhereInput[]
    NOT?: PostsCategoriesWhereInput | PostsCategoriesWhereInput[]
    postId?: IntFilter<"PostsCategories"> | number
    categoryId?: IntFilter<"PostsCategories"> | number
    createdAt?: DateTimeFilter<"PostsCategories"> | Date | string
    updatedAt?: DateTimeFilter<"PostsCategories"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }, "id" | "postId_categoryId">

  export type PostsCategoriesOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PostsCategoriesCountOrderByAggregateInput
    _avg?: PostsCategoriesAvgOrderByAggregateInput
    _max?: PostsCategoriesMaxOrderByAggregateInput
    _min?: PostsCategoriesMinOrderByAggregateInput
    _sum?: PostsCategoriesSumOrderByAggregateInput
  }

  export type PostsCategoriesScalarWhereWithAggregatesInput = {
    AND?: PostsCategoriesScalarWhereWithAggregatesInput | PostsCategoriesScalarWhereWithAggregatesInput[]
    OR?: PostsCategoriesScalarWhereWithAggregatesInput[]
    NOT?: PostsCategoriesScalarWhereWithAggregatesInput | PostsCategoriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PostsCategories"> | number
    postId?: IntWithAggregatesFilter<"PostsCategories"> | number
    categoryId?: IntWithAggregatesFilter<"PostsCategories"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PostsCategories"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PostsCategories"> | Date | string
  }

  export type FeatureEventWhereInput = {
    AND?: FeatureEventWhereInput | FeatureEventWhereInput[]
    OR?: FeatureEventWhereInput[]
    NOT?: FeatureEventWhereInput | FeatureEventWhereInput[]
    id?: IntFilter<"FeatureEvent"> | number
    userId?: IntFilter<"FeatureEvent"> | number
    featureKey?: StringFilter<"FeatureEvent"> | string
    event?: StringFilter<"FeatureEvent"> | string
    enabled?: BoolFilter<"FeatureEvent"> | boolean
    createdAt?: DateTimeFilter<"FeatureEvent"> | Date | string
    updatedAt?: DateTimeFilter<"FeatureEvent"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FeatureEventOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    featureKey?: SortOrder
    event?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: FeatureEventOrderByRelevanceInput
  }

  export type FeatureEventWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FeatureEventWhereInput | FeatureEventWhereInput[]
    OR?: FeatureEventWhereInput[]
    NOT?: FeatureEventWhereInput | FeatureEventWhereInput[]
    userId?: IntFilter<"FeatureEvent"> | number
    featureKey?: StringFilter<"FeatureEvent"> | string
    event?: StringFilter<"FeatureEvent"> | string
    enabled?: BoolFilter<"FeatureEvent"> | boolean
    createdAt?: DateTimeFilter<"FeatureEvent"> | Date | string
    updatedAt?: DateTimeFilter<"FeatureEvent"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type FeatureEventOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    featureKey?: SortOrder
    event?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FeatureEventCountOrderByAggregateInput
    _avg?: FeatureEventAvgOrderByAggregateInput
    _max?: FeatureEventMaxOrderByAggregateInput
    _min?: FeatureEventMinOrderByAggregateInput
    _sum?: FeatureEventSumOrderByAggregateInput
  }

  export type FeatureEventScalarWhereWithAggregatesInput = {
    AND?: FeatureEventScalarWhereWithAggregatesInput | FeatureEventScalarWhereWithAggregatesInput[]
    OR?: FeatureEventScalarWhereWithAggregatesInput[]
    NOT?: FeatureEventScalarWhereWithAggregatesInput | FeatureEventScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FeatureEvent"> | number
    userId?: IntWithAggregatesFilter<"FeatureEvent"> | number
    featureKey?: StringWithAggregatesFilter<"FeatureEvent"> | string
    event?: StringWithAggregatesFilter<"FeatureEvent"> | string
    enabled?: BoolWithAggregatesFilter<"FeatureEvent"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"FeatureEvent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FeatureEvent"> | Date | string
  }

  export type RefreshTokenWhereInput = {
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    id?: IntFilter<"RefreshToken"> | number
    userId?: IntFilter<"RefreshToken"> | number
    token?: StringFilter<"RefreshToken"> | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    updatedAt?: DateTimeFilter<"RefreshToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RefreshTokenOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: RefreshTokenOrderByRelevanceInput
  }

  export type RefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    token?: string
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    updatedAt?: DateTimeFilter<"RefreshToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId" | "token">

  export type RefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RefreshTokenCountOrderByAggregateInput
    _avg?: RefreshTokenAvgOrderByAggregateInput
    _max?: RefreshTokenMaxOrderByAggregateInput
    _min?: RefreshTokenMinOrderByAggregateInput
    _sum?: RefreshTokenSumOrderByAggregateInput
  }

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    OR?: RefreshTokenScalarWhereWithAggregatesInput[]
    NOT?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RefreshToken"> | number
    userId?: IntWithAggregatesFilter<"RefreshToken"> | number
    token?: StringWithAggregatesFilter<"RefreshToken"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
  }

  export type UserCreateInput = {
    displayName: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshToken?: RefreshTokenCreateNestedOneWithoutUserInput
    views?: ViewCreateNestedManyWithoutUserInput
    engagements?: EngagementCreateNestedManyWithoutUserInput
    featureEvents?: FeatureEventCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    displayName: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshToken?: RefreshTokenUncheckedCreateNestedOneWithoutUserInput
    views?: ViewUncheckedCreateNestedManyWithoutUserInput
    engagements?: EngagementUncheckedCreateNestedManyWithoutUserInput
    featureEvents?: FeatureEventUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserUpdateInput = {
    displayName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshToken?: RefreshTokenUpdateOneWithoutUserNestedInput
    views?: ViewUpdateManyWithoutUserNestedInput
    engagements?: EngagementUpdateManyWithoutUserNestedInput
    featureEvents?: FeatureEventUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    displayName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshToken?: RefreshTokenUncheckedUpdateOneWithoutUserNestedInput
    views?: ViewUncheckedUpdateManyWithoutUserNestedInput
    engagements?: EngagementUncheckedUpdateManyWithoutUserNestedInput
    featureEvents?: FeatureEventUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    displayName: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    displayName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    displayName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateInput = {
    title: string
    body: string
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutPostsInput
    views?: ViewCreateNestedManyWithoutPostInput
    categories?: PostsCategoriesCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: number
    title: string
    body: string
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: number
    views?: ViewUncheckedCreateNestedManyWithoutPostInput
    categories?: PostsCategoriesUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
    views?: ViewUpdateManyWithoutPostNestedInput
    categories?: PostsCategoriesUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
    views?: ViewUncheckedUpdateManyWithoutPostNestedInput
    categories?: PostsCategoriesUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    id?: number
    title: string
    body: string
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: number
  }

  export type PostUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type ViewCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutViewsInput
    post: PostCreateNestedOneWithoutViewsInput
  }

  export type ViewUncheckedCreateInput = {
    id?: number
    userId: number
    postId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ViewUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutViewsNestedInput
    post?: PostUpdateOneRequiredWithoutViewsNestedInput
  }

  export type ViewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewCreateManyInput = {
    id?: number
    userId: number
    postId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ViewUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    label: string
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostsCategoriesCreateNestedManyWithoutCategoryInput
    engagements?: EngagementCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    label: string
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostsCategoriesUncheckedCreateNestedManyWithoutCategoryInput
    engagements?: EngagementUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    label?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostsCategoriesUpdateManyWithoutCategoryNestedInput
    engagements?: EngagementUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostsCategoriesUncheckedUpdateManyWithoutCategoryNestedInput
    engagements?: EngagementUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    label: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    label?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EngagementCreateInput = {
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEngagementsInput
    category: CategoryCreateNestedOneWithoutEngagementsInput
  }

  export type EngagementUncheckedCreateInput = {
    id?: number
    userId: number
    categoryId: number
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EngagementUpdateInput = {
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEngagementsNestedInput
    category?: CategoryUpdateOneRequiredWithoutEngagementsNestedInput
  }

  export type EngagementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EngagementCreateManyInput = {
    id?: number
    userId: number
    categoryId: number
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EngagementUpdateManyMutationInput = {
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EngagementUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostsCategoriesCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    post: PostCreateNestedOneWithoutCategoriesInput
    category: CategoryCreateNestedOneWithoutPostsInput
  }

  export type PostsCategoriesUncheckedCreateInput = {
    id?: number
    postId: number
    categoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostsCategoriesUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutCategoriesNestedInput
    category?: CategoryUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostsCategoriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostsCategoriesCreateManyInput = {
    id?: number
    postId: number
    categoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostsCategoriesUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostsCategoriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureEventCreateInput = {
    featureKey: string
    event: string
    enabled: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFeatureEventsInput
  }

  export type FeatureEventUncheckedCreateInput = {
    id?: number
    userId: number
    featureKey: string
    event: string
    enabled: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeatureEventUpdateInput = {
    featureKey?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFeatureEventsNestedInput
  }

  export type FeatureEventUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    featureKey?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureEventCreateManyInput = {
    id?: number
    userId: number
    featureKey: string
    event: string
    enabled: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeatureEventUpdateManyMutationInput = {
    featureKey?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureEventUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    featureKey?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateInput = {
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRefreshTokenInput
  }

  export type RefreshTokenUncheckedCreateInput = {
    id?: number
    userId: number
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefreshTokenUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRefreshTokenNestedInput
  }

  export type RefreshTokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateManyInput = {
    id?: number
    userId: number
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefreshTokenUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type RefreshTokenNullableScalarRelationFilter = {
    is?: RefreshTokenWhereInput | null
    isNot?: RefreshTokenWhereInput | null
  }

  export type ViewListRelationFilter = {
    every?: ViewWhereInput
    some?: ViewWhereInput
    none?: ViewWhereInput
  }

  export type EngagementListRelationFilter = {
    every?: EngagementWhereInput
    some?: EngagementWhereInput
    none?: EngagementWhereInput
  }

  export type FeatureEventListRelationFilter = {
    every?: FeatureEventWhereInput
    some?: FeatureEventWhereInput
    none?: FeatureEventWhereInput
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type ViewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EngagementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FeatureEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    displayName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    displayName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    displayName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PostsCategoriesListRelationFilter = {
    every?: PostsCategoriesWhereInput
    some?: PostsCategoriesWhereInput
    none?: PostsCategoriesWhereInput
  }

  export type PostsCategoriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelevanceInput = {
    fields: PostOrderByRelevanceFieldEnum | PostOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    viewCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
    viewCount?: SortOrder
    authorId?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    viewCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    viewCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
    viewCount?: SortOrder
    authorId?: SortOrder
  }

  export type PostScalarRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type ViewUserIdPostIdCreatedAtCompoundUniqueInput = {
    userId: number
    postId: number
    createdAt: Date | string
  }

  export type ViewCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ViewAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type ViewMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ViewMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ViewSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type CategoryOrderByRelevanceInput = {
    fields: CategoryOrderByRelevanceFieldEnum | CategoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type EngagementUserIdCategoryIdCompoundUniqueInput = {
    userId: number
    categoryId: number
  }

  export type EngagementCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    viewCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EngagementAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    viewCount?: SortOrder
  }

  export type EngagementMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    viewCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EngagementMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    viewCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EngagementSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    viewCount?: SortOrder
  }

  export type PostsCategoriesPostIdCategoryIdCompoundUniqueInput = {
    postId: number
    categoryId: number
  }

  export type PostsCategoriesCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostsCategoriesAvgOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    categoryId?: SortOrder
  }

  export type PostsCategoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostsCategoriesMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostsCategoriesSumOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    categoryId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FeatureEventOrderByRelevanceInput = {
    fields: FeatureEventOrderByRelevanceFieldEnum | FeatureEventOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FeatureEventCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    featureKey?: SortOrder
    event?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FeatureEventAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type FeatureEventMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    featureKey?: SortOrder
    event?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FeatureEventMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    featureKey?: SortOrder
    event?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FeatureEventSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type RefreshTokenOrderByRelevanceInput = {
    fields: RefreshTokenOrderByRelevanceFieldEnum | RefreshTokenOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RefreshTokenAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type RefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RefreshTokenSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type RefreshTokenCreateNestedOneWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput
    connect?: RefreshTokenWhereUniqueInput
  }

  export type ViewCreateNestedManyWithoutUserInput = {
    create?: XOR<ViewCreateWithoutUserInput, ViewUncheckedCreateWithoutUserInput> | ViewCreateWithoutUserInput[] | ViewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ViewCreateOrConnectWithoutUserInput | ViewCreateOrConnectWithoutUserInput[]
    createMany?: ViewCreateManyUserInputEnvelope
    connect?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
  }

  export type EngagementCreateNestedManyWithoutUserInput = {
    create?: XOR<EngagementCreateWithoutUserInput, EngagementUncheckedCreateWithoutUserInput> | EngagementCreateWithoutUserInput[] | EngagementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EngagementCreateOrConnectWithoutUserInput | EngagementCreateOrConnectWithoutUserInput[]
    createMany?: EngagementCreateManyUserInputEnvelope
    connect?: EngagementWhereUniqueInput | EngagementWhereUniqueInput[]
  }

  export type FeatureEventCreateNestedManyWithoutUserInput = {
    create?: XOR<FeatureEventCreateWithoutUserInput, FeatureEventUncheckedCreateWithoutUserInput> | FeatureEventCreateWithoutUserInput[] | FeatureEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeatureEventCreateOrConnectWithoutUserInput | FeatureEventCreateOrConnectWithoutUserInput[]
    createMany?: FeatureEventCreateManyUserInputEnvelope
    connect?: FeatureEventWhereUniqueInput | FeatureEventWhereUniqueInput[]
  }

  export type PostCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type RefreshTokenUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput
    connect?: RefreshTokenWhereUniqueInput
  }

  export type ViewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ViewCreateWithoutUserInput, ViewUncheckedCreateWithoutUserInput> | ViewCreateWithoutUserInput[] | ViewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ViewCreateOrConnectWithoutUserInput | ViewCreateOrConnectWithoutUserInput[]
    createMany?: ViewCreateManyUserInputEnvelope
    connect?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
  }

  export type EngagementUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EngagementCreateWithoutUserInput, EngagementUncheckedCreateWithoutUserInput> | EngagementCreateWithoutUserInput[] | EngagementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EngagementCreateOrConnectWithoutUserInput | EngagementCreateOrConnectWithoutUserInput[]
    createMany?: EngagementCreateManyUserInputEnvelope
    connect?: EngagementWhereUniqueInput | EngagementWhereUniqueInput[]
  }

  export type FeatureEventUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FeatureEventCreateWithoutUserInput, FeatureEventUncheckedCreateWithoutUserInput> | FeatureEventCreateWithoutUserInput[] | FeatureEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeatureEventCreateOrConnectWithoutUserInput | FeatureEventCreateOrConnectWithoutUserInput[]
    createMany?: FeatureEventCreateManyUserInputEnvelope
    connect?: FeatureEventWhereUniqueInput | FeatureEventWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RefreshTokenUpdateOneWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput
    upsert?: RefreshTokenUpsertWithoutUserInput
    disconnect?: RefreshTokenWhereInput | boolean
    delete?: RefreshTokenWhereInput | boolean
    connect?: RefreshTokenWhereUniqueInput
    update?: XOR<XOR<RefreshTokenUpdateToOneWithWhereWithoutUserInput, RefreshTokenUpdateWithoutUserInput>, RefreshTokenUncheckedUpdateWithoutUserInput>
  }

  export type ViewUpdateManyWithoutUserNestedInput = {
    create?: XOR<ViewCreateWithoutUserInput, ViewUncheckedCreateWithoutUserInput> | ViewCreateWithoutUserInput[] | ViewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ViewCreateOrConnectWithoutUserInput | ViewCreateOrConnectWithoutUserInput[]
    upsert?: ViewUpsertWithWhereUniqueWithoutUserInput | ViewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ViewCreateManyUserInputEnvelope
    set?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    disconnect?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    delete?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    connect?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    update?: ViewUpdateWithWhereUniqueWithoutUserInput | ViewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ViewUpdateManyWithWhereWithoutUserInput | ViewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ViewScalarWhereInput | ViewScalarWhereInput[]
  }

  export type EngagementUpdateManyWithoutUserNestedInput = {
    create?: XOR<EngagementCreateWithoutUserInput, EngagementUncheckedCreateWithoutUserInput> | EngagementCreateWithoutUserInput[] | EngagementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EngagementCreateOrConnectWithoutUserInput | EngagementCreateOrConnectWithoutUserInput[]
    upsert?: EngagementUpsertWithWhereUniqueWithoutUserInput | EngagementUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EngagementCreateManyUserInputEnvelope
    set?: EngagementWhereUniqueInput | EngagementWhereUniqueInput[]
    disconnect?: EngagementWhereUniqueInput | EngagementWhereUniqueInput[]
    delete?: EngagementWhereUniqueInput | EngagementWhereUniqueInput[]
    connect?: EngagementWhereUniqueInput | EngagementWhereUniqueInput[]
    update?: EngagementUpdateWithWhereUniqueWithoutUserInput | EngagementUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EngagementUpdateManyWithWhereWithoutUserInput | EngagementUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EngagementScalarWhereInput | EngagementScalarWhereInput[]
  }

  export type FeatureEventUpdateManyWithoutUserNestedInput = {
    create?: XOR<FeatureEventCreateWithoutUserInput, FeatureEventUncheckedCreateWithoutUserInput> | FeatureEventCreateWithoutUserInput[] | FeatureEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeatureEventCreateOrConnectWithoutUserInput | FeatureEventCreateOrConnectWithoutUserInput[]
    upsert?: FeatureEventUpsertWithWhereUniqueWithoutUserInput | FeatureEventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FeatureEventCreateManyUserInputEnvelope
    set?: FeatureEventWhereUniqueInput | FeatureEventWhereUniqueInput[]
    disconnect?: FeatureEventWhereUniqueInput | FeatureEventWhereUniqueInput[]
    delete?: FeatureEventWhereUniqueInput | FeatureEventWhereUniqueInput[]
    connect?: FeatureEventWhereUniqueInput | FeatureEventWhereUniqueInput[]
    update?: FeatureEventUpdateWithWhereUniqueWithoutUserInput | FeatureEventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FeatureEventUpdateManyWithWhereWithoutUserInput | FeatureEventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FeatureEventScalarWhereInput | FeatureEventScalarWhereInput[]
  }

  export type PostUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAuthorInput | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAuthorInput | PostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RefreshTokenUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput
    upsert?: RefreshTokenUpsertWithoutUserInput
    disconnect?: RefreshTokenWhereInput | boolean
    delete?: RefreshTokenWhereInput | boolean
    connect?: RefreshTokenWhereUniqueInput
    update?: XOR<XOR<RefreshTokenUpdateToOneWithWhereWithoutUserInput, RefreshTokenUpdateWithoutUserInput>, RefreshTokenUncheckedUpdateWithoutUserInput>
  }

  export type ViewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ViewCreateWithoutUserInput, ViewUncheckedCreateWithoutUserInput> | ViewCreateWithoutUserInput[] | ViewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ViewCreateOrConnectWithoutUserInput | ViewCreateOrConnectWithoutUserInput[]
    upsert?: ViewUpsertWithWhereUniqueWithoutUserInput | ViewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ViewCreateManyUserInputEnvelope
    set?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    disconnect?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    delete?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    connect?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    update?: ViewUpdateWithWhereUniqueWithoutUserInput | ViewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ViewUpdateManyWithWhereWithoutUserInput | ViewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ViewScalarWhereInput | ViewScalarWhereInput[]
  }

  export type EngagementUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EngagementCreateWithoutUserInput, EngagementUncheckedCreateWithoutUserInput> | EngagementCreateWithoutUserInput[] | EngagementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EngagementCreateOrConnectWithoutUserInput | EngagementCreateOrConnectWithoutUserInput[]
    upsert?: EngagementUpsertWithWhereUniqueWithoutUserInput | EngagementUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EngagementCreateManyUserInputEnvelope
    set?: EngagementWhereUniqueInput | EngagementWhereUniqueInput[]
    disconnect?: EngagementWhereUniqueInput | EngagementWhereUniqueInput[]
    delete?: EngagementWhereUniqueInput | EngagementWhereUniqueInput[]
    connect?: EngagementWhereUniqueInput | EngagementWhereUniqueInput[]
    update?: EngagementUpdateWithWhereUniqueWithoutUserInput | EngagementUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EngagementUpdateManyWithWhereWithoutUserInput | EngagementUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EngagementScalarWhereInput | EngagementScalarWhereInput[]
  }

  export type FeatureEventUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FeatureEventCreateWithoutUserInput, FeatureEventUncheckedCreateWithoutUserInput> | FeatureEventCreateWithoutUserInput[] | FeatureEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeatureEventCreateOrConnectWithoutUserInput | FeatureEventCreateOrConnectWithoutUserInput[]
    upsert?: FeatureEventUpsertWithWhereUniqueWithoutUserInput | FeatureEventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FeatureEventCreateManyUserInputEnvelope
    set?: FeatureEventWhereUniqueInput | FeatureEventWhereUniqueInput[]
    disconnect?: FeatureEventWhereUniqueInput | FeatureEventWhereUniqueInput[]
    delete?: FeatureEventWhereUniqueInput | FeatureEventWhereUniqueInput[]
    connect?: FeatureEventWhereUniqueInput | FeatureEventWhereUniqueInput[]
    update?: FeatureEventUpdateWithWhereUniqueWithoutUserInput | FeatureEventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FeatureEventUpdateManyWithWhereWithoutUserInput | FeatureEventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FeatureEventScalarWhereInput | FeatureEventScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAuthorInput | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAuthorInput | PostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type ViewCreateNestedManyWithoutPostInput = {
    create?: XOR<ViewCreateWithoutPostInput, ViewUncheckedCreateWithoutPostInput> | ViewCreateWithoutPostInput[] | ViewUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ViewCreateOrConnectWithoutPostInput | ViewCreateOrConnectWithoutPostInput[]
    createMany?: ViewCreateManyPostInputEnvelope
    connect?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
  }

  export type PostsCategoriesCreateNestedManyWithoutPostInput = {
    create?: XOR<PostsCategoriesCreateWithoutPostInput, PostsCategoriesUncheckedCreateWithoutPostInput> | PostsCategoriesCreateWithoutPostInput[] | PostsCategoriesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostsCategoriesCreateOrConnectWithoutPostInput | PostsCategoriesCreateOrConnectWithoutPostInput[]
    createMany?: PostsCategoriesCreateManyPostInputEnvelope
    connect?: PostsCategoriesWhereUniqueInput | PostsCategoriesWhereUniqueInput[]
  }

  export type ViewUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<ViewCreateWithoutPostInput, ViewUncheckedCreateWithoutPostInput> | ViewCreateWithoutPostInput[] | ViewUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ViewCreateOrConnectWithoutPostInput | ViewCreateOrConnectWithoutPostInput[]
    createMany?: ViewCreateManyPostInputEnvelope
    connect?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
  }

  export type PostsCategoriesUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<PostsCategoriesCreateWithoutPostInput, PostsCategoriesUncheckedCreateWithoutPostInput> | PostsCategoriesCreateWithoutPostInput[] | PostsCategoriesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostsCategoriesCreateOrConnectWithoutPostInput | PostsCategoriesCreateOrConnectWithoutPostInput[]
    createMany?: PostsCategoriesCreateManyPostInputEnvelope
    connect?: PostsCategoriesWhereUniqueInput | PostsCategoriesWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type ViewUpdateManyWithoutPostNestedInput = {
    create?: XOR<ViewCreateWithoutPostInput, ViewUncheckedCreateWithoutPostInput> | ViewCreateWithoutPostInput[] | ViewUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ViewCreateOrConnectWithoutPostInput | ViewCreateOrConnectWithoutPostInput[]
    upsert?: ViewUpsertWithWhereUniqueWithoutPostInput | ViewUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ViewCreateManyPostInputEnvelope
    set?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    disconnect?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    delete?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    connect?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    update?: ViewUpdateWithWhereUniqueWithoutPostInput | ViewUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ViewUpdateManyWithWhereWithoutPostInput | ViewUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ViewScalarWhereInput | ViewScalarWhereInput[]
  }

  export type PostsCategoriesUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostsCategoriesCreateWithoutPostInput, PostsCategoriesUncheckedCreateWithoutPostInput> | PostsCategoriesCreateWithoutPostInput[] | PostsCategoriesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostsCategoriesCreateOrConnectWithoutPostInput | PostsCategoriesCreateOrConnectWithoutPostInput[]
    upsert?: PostsCategoriesUpsertWithWhereUniqueWithoutPostInput | PostsCategoriesUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostsCategoriesCreateManyPostInputEnvelope
    set?: PostsCategoriesWhereUniqueInput | PostsCategoriesWhereUniqueInput[]
    disconnect?: PostsCategoriesWhereUniqueInput | PostsCategoriesWhereUniqueInput[]
    delete?: PostsCategoriesWhereUniqueInput | PostsCategoriesWhereUniqueInput[]
    connect?: PostsCategoriesWhereUniqueInput | PostsCategoriesWhereUniqueInput[]
    update?: PostsCategoriesUpdateWithWhereUniqueWithoutPostInput | PostsCategoriesUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostsCategoriesUpdateManyWithWhereWithoutPostInput | PostsCategoriesUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostsCategoriesScalarWhereInput | PostsCategoriesScalarWhereInput[]
  }

  export type ViewUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<ViewCreateWithoutPostInput, ViewUncheckedCreateWithoutPostInput> | ViewCreateWithoutPostInput[] | ViewUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ViewCreateOrConnectWithoutPostInput | ViewCreateOrConnectWithoutPostInput[]
    upsert?: ViewUpsertWithWhereUniqueWithoutPostInput | ViewUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ViewCreateManyPostInputEnvelope
    set?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    disconnect?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    delete?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    connect?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    update?: ViewUpdateWithWhereUniqueWithoutPostInput | ViewUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ViewUpdateManyWithWhereWithoutPostInput | ViewUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ViewScalarWhereInput | ViewScalarWhereInput[]
  }

  export type PostsCategoriesUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostsCategoriesCreateWithoutPostInput, PostsCategoriesUncheckedCreateWithoutPostInput> | PostsCategoriesCreateWithoutPostInput[] | PostsCategoriesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostsCategoriesCreateOrConnectWithoutPostInput | PostsCategoriesCreateOrConnectWithoutPostInput[]
    upsert?: PostsCategoriesUpsertWithWhereUniqueWithoutPostInput | PostsCategoriesUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostsCategoriesCreateManyPostInputEnvelope
    set?: PostsCategoriesWhereUniqueInput | PostsCategoriesWhereUniqueInput[]
    disconnect?: PostsCategoriesWhereUniqueInput | PostsCategoriesWhereUniqueInput[]
    delete?: PostsCategoriesWhereUniqueInput | PostsCategoriesWhereUniqueInput[]
    connect?: PostsCategoriesWhereUniqueInput | PostsCategoriesWhereUniqueInput[]
    update?: PostsCategoriesUpdateWithWhereUniqueWithoutPostInput | PostsCategoriesUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostsCategoriesUpdateManyWithWhereWithoutPostInput | PostsCategoriesUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostsCategoriesScalarWhereInput | PostsCategoriesScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutViewsInput = {
    create?: XOR<UserCreateWithoutViewsInput, UserUncheckedCreateWithoutViewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutViewsInput
    connect?: UserWhereUniqueInput
  }

  export type PostCreateNestedOneWithoutViewsInput = {
    create?: XOR<PostCreateWithoutViewsInput, PostUncheckedCreateWithoutViewsInput>
    connectOrCreate?: PostCreateOrConnectWithoutViewsInput
    connect?: PostWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutViewsNestedInput = {
    create?: XOR<UserCreateWithoutViewsInput, UserUncheckedCreateWithoutViewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutViewsInput
    upsert?: UserUpsertWithoutViewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutViewsInput, UserUpdateWithoutViewsInput>, UserUncheckedUpdateWithoutViewsInput>
  }

  export type PostUpdateOneRequiredWithoutViewsNestedInput = {
    create?: XOR<PostCreateWithoutViewsInput, PostUncheckedCreateWithoutViewsInput>
    connectOrCreate?: PostCreateOrConnectWithoutViewsInput
    upsert?: PostUpsertWithoutViewsInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutViewsInput, PostUpdateWithoutViewsInput>, PostUncheckedUpdateWithoutViewsInput>
  }

  export type PostsCategoriesCreateNestedManyWithoutCategoryInput = {
    create?: XOR<PostsCategoriesCreateWithoutCategoryInput, PostsCategoriesUncheckedCreateWithoutCategoryInput> | PostsCategoriesCreateWithoutCategoryInput[] | PostsCategoriesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PostsCategoriesCreateOrConnectWithoutCategoryInput | PostsCategoriesCreateOrConnectWithoutCategoryInput[]
    createMany?: PostsCategoriesCreateManyCategoryInputEnvelope
    connect?: PostsCategoriesWhereUniqueInput | PostsCategoriesWhereUniqueInput[]
  }

  export type EngagementCreateNestedManyWithoutCategoryInput = {
    create?: XOR<EngagementCreateWithoutCategoryInput, EngagementUncheckedCreateWithoutCategoryInput> | EngagementCreateWithoutCategoryInput[] | EngagementUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: EngagementCreateOrConnectWithoutCategoryInput | EngagementCreateOrConnectWithoutCategoryInput[]
    createMany?: EngagementCreateManyCategoryInputEnvelope
    connect?: EngagementWhereUniqueInput | EngagementWhereUniqueInput[]
  }

  export type PostsCategoriesUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<PostsCategoriesCreateWithoutCategoryInput, PostsCategoriesUncheckedCreateWithoutCategoryInput> | PostsCategoriesCreateWithoutCategoryInput[] | PostsCategoriesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PostsCategoriesCreateOrConnectWithoutCategoryInput | PostsCategoriesCreateOrConnectWithoutCategoryInput[]
    createMany?: PostsCategoriesCreateManyCategoryInputEnvelope
    connect?: PostsCategoriesWhereUniqueInput | PostsCategoriesWhereUniqueInput[]
  }

  export type EngagementUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<EngagementCreateWithoutCategoryInput, EngagementUncheckedCreateWithoutCategoryInput> | EngagementCreateWithoutCategoryInput[] | EngagementUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: EngagementCreateOrConnectWithoutCategoryInput | EngagementCreateOrConnectWithoutCategoryInput[]
    createMany?: EngagementCreateManyCategoryInputEnvelope
    connect?: EngagementWhereUniqueInput | EngagementWhereUniqueInput[]
  }

  export type PostsCategoriesUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<PostsCategoriesCreateWithoutCategoryInput, PostsCategoriesUncheckedCreateWithoutCategoryInput> | PostsCategoriesCreateWithoutCategoryInput[] | PostsCategoriesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PostsCategoriesCreateOrConnectWithoutCategoryInput | PostsCategoriesCreateOrConnectWithoutCategoryInput[]
    upsert?: PostsCategoriesUpsertWithWhereUniqueWithoutCategoryInput | PostsCategoriesUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: PostsCategoriesCreateManyCategoryInputEnvelope
    set?: PostsCategoriesWhereUniqueInput | PostsCategoriesWhereUniqueInput[]
    disconnect?: PostsCategoriesWhereUniqueInput | PostsCategoriesWhereUniqueInput[]
    delete?: PostsCategoriesWhereUniqueInput | PostsCategoriesWhereUniqueInput[]
    connect?: PostsCategoriesWhereUniqueInput | PostsCategoriesWhereUniqueInput[]
    update?: PostsCategoriesUpdateWithWhereUniqueWithoutCategoryInput | PostsCategoriesUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: PostsCategoriesUpdateManyWithWhereWithoutCategoryInput | PostsCategoriesUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: PostsCategoriesScalarWhereInput | PostsCategoriesScalarWhereInput[]
  }

  export type EngagementUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<EngagementCreateWithoutCategoryInput, EngagementUncheckedCreateWithoutCategoryInput> | EngagementCreateWithoutCategoryInput[] | EngagementUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: EngagementCreateOrConnectWithoutCategoryInput | EngagementCreateOrConnectWithoutCategoryInput[]
    upsert?: EngagementUpsertWithWhereUniqueWithoutCategoryInput | EngagementUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: EngagementCreateManyCategoryInputEnvelope
    set?: EngagementWhereUniqueInput | EngagementWhereUniqueInput[]
    disconnect?: EngagementWhereUniqueInput | EngagementWhereUniqueInput[]
    delete?: EngagementWhereUniqueInput | EngagementWhereUniqueInput[]
    connect?: EngagementWhereUniqueInput | EngagementWhereUniqueInput[]
    update?: EngagementUpdateWithWhereUniqueWithoutCategoryInput | EngagementUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: EngagementUpdateManyWithWhereWithoutCategoryInput | EngagementUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: EngagementScalarWhereInput | EngagementScalarWhereInput[]
  }

  export type PostsCategoriesUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<PostsCategoriesCreateWithoutCategoryInput, PostsCategoriesUncheckedCreateWithoutCategoryInput> | PostsCategoriesCreateWithoutCategoryInput[] | PostsCategoriesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PostsCategoriesCreateOrConnectWithoutCategoryInput | PostsCategoriesCreateOrConnectWithoutCategoryInput[]
    upsert?: PostsCategoriesUpsertWithWhereUniqueWithoutCategoryInput | PostsCategoriesUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: PostsCategoriesCreateManyCategoryInputEnvelope
    set?: PostsCategoriesWhereUniqueInput | PostsCategoriesWhereUniqueInput[]
    disconnect?: PostsCategoriesWhereUniqueInput | PostsCategoriesWhereUniqueInput[]
    delete?: PostsCategoriesWhereUniqueInput | PostsCategoriesWhereUniqueInput[]
    connect?: PostsCategoriesWhereUniqueInput | PostsCategoriesWhereUniqueInput[]
    update?: PostsCategoriesUpdateWithWhereUniqueWithoutCategoryInput | PostsCategoriesUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: PostsCategoriesUpdateManyWithWhereWithoutCategoryInput | PostsCategoriesUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: PostsCategoriesScalarWhereInput | PostsCategoriesScalarWhereInput[]
  }

  export type EngagementUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<EngagementCreateWithoutCategoryInput, EngagementUncheckedCreateWithoutCategoryInput> | EngagementCreateWithoutCategoryInput[] | EngagementUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: EngagementCreateOrConnectWithoutCategoryInput | EngagementCreateOrConnectWithoutCategoryInput[]
    upsert?: EngagementUpsertWithWhereUniqueWithoutCategoryInput | EngagementUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: EngagementCreateManyCategoryInputEnvelope
    set?: EngagementWhereUniqueInput | EngagementWhereUniqueInput[]
    disconnect?: EngagementWhereUniqueInput | EngagementWhereUniqueInput[]
    delete?: EngagementWhereUniqueInput | EngagementWhereUniqueInput[]
    connect?: EngagementWhereUniqueInput | EngagementWhereUniqueInput[]
    update?: EngagementUpdateWithWhereUniqueWithoutCategoryInput | EngagementUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: EngagementUpdateManyWithWhereWithoutCategoryInput | EngagementUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: EngagementScalarWhereInput | EngagementScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutEngagementsInput = {
    create?: XOR<UserCreateWithoutEngagementsInput, UserUncheckedCreateWithoutEngagementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEngagementsInput
    connect?: UserWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutEngagementsInput = {
    create?: XOR<CategoryCreateWithoutEngagementsInput, CategoryUncheckedCreateWithoutEngagementsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutEngagementsInput
    connect?: CategoryWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutEngagementsNestedInput = {
    create?: XOR<UserCreateWithoutEngagementsInput, UserUncheckedCreateWithoutEngagementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEngagementsInput
    upsert?: UserUpsertWithoutEngagementsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEngagementsInput, UserUpdateWithoutEngagementsInput>, UserUncheckedUpdateWithoutEngagementsInput>
  }

  export type CategoryUpdateOneRequiredWithoutEngagementsNestedInput = {
    create?: XOR<CategoryCreateWithoutEngagementsInput, CategoryUncheckedCreateWithoutEngagementsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutEngagementsInput
    upsert?: CategoryUpsertWithoutEngagementsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutEngagementsInput, CategoryUpdateWithoutEngagementsInput>, CategoryUncheckedUpdateWithoutEngagementsInput>
  }

  export type PostCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<PostCreateWithoutCategoriesInput, PostUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: PostCreateOrConnectWithoutCategoriesInput
    connect?: PostWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutPostsInput = {
    create?: XOR<CategoryCreateWithoutPostsInput, CategoryUncheckedCreateWithoutPostsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutPostsInput
    connect?: CategoryWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<PostCreateWithoutCategoriesInput, PostUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: PostCreateOrConnectWithoutCategoriesInput
    upsert?: PostUpsertWithoutCategoriesInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutCategoriesInput, PostUpdateWithoutCategoriesInput>, PostUncheckedUpdateWithoutCategoriesInput>
  }

  export type CategoryUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<CategoryCreateWithoutPostsInput, CategoryUncheckedCreateWithoutPostsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutPostsInput
    upsert?: CategoryUpsertWithoutPostsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutPostsInput, CategoryUpdateWithoutPostsInput>, CategoryUncheckedUpdateWithoutPostsInput>
  }

  export type UserCreateNestedOneWithoutFeatureEventsInput = {
    create?: XOR<UserCreateWithoutFeatureEventsInput, UserUncheckedCreateWithoutFeatureEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeatureEventsInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutFeatureEventsNestedInput = {
    create?: XOR<UserCreateWithoutFeatureEventsInput, UserUncheckedCreateWithoutFeatureEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeatureEventsInput
    upsert?: UserUpsertWithoutFeatureEventsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFeatureEventsInput, UserUpdateWithoutFeatureEventsInput>, UserUncheckedUpdateWithoutFeatureEventsInput>
  }

  export type UserCreateNestedOneWithoutRefreshTokenInput = {
    create?: XOR<UserCreateWithoutRefreshTokenInput, UserUncheckedCreateWithoutRefreshTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokenInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRefreshTokenNestedInput = {
    create?: XOR<UserCreateWithoutRefreshTokenInput, UserUncheckedCreateWithoutRefreshTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokenInput
    upsert?: UserUpsertWithoutRefreshTokenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRefreshTokenInput, UserUpdateWithoutRefreshTokenInput>, UserUncheckedUpdateWithoutRefreshTokenInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type RefreshTokenCreateWithoutUserInput = {
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefreshTokenUncheckedCreateWithoutUserInput = {
    id?: number
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefreshTokenCreateOrConnectWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type ViewCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    post: PostCreateNestedOneWithoutViewsInput
  }

  export type ViewUncheckedCreateWithoutUserInput = {
    id?: number
    postId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ViewCreateOrConnectWithoutUserInput = {
    where: ViewWhereUniqueInput
    create: XOR<ViewCreateWithoutUserInput, ViewUncheckedCreateWithoutUserInput>
  }

  export type ViewCreateManyUserInputEnvelope = {
    data: ViewCreateManyUserInput | ViewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EngagementCreateWithoutUserInput = {
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutEngagementsInput
  }

  export type EngagementUncheckedCreateWithoutUserInput = {
    id?: number
    categoryId: number
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EngagementCreateOrConnectWithoutUserInput = {
    where: EngagementWhereUniqueInput
    create: XOR<EngagementCreateWithoutUserInput, EngagementUncheckedCreateWithoutUserInput>
  }

  export type EngagementCreateManyUserInputEnvelope = {
    data: EngagementCreateManyUserInput | EngagementCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FeatureEventCreateWithoutUserInput = {
    featureKey: string
    event: string
    enabled: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeatureEventUncheckedCreateWithoutUserInput = {
    id?: number
    featureKey: string
    event: string
    enabled: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeatureEventCreateOrConnectWithoutUserInput = {
    where: FeatureEventWhereUniqueInput
    create: XOR<FeatureEventCreateWithoutUserInput, FeatureEventUncheckedCreateWithoutUserInput>
  }

  export type FeatureEventCreateManyUserInputEnvelope = {
    data: FeatureEventCreateManyUserInput | FeatureEventCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostCreateWithoutAuthorInput = {
    title: string
    body: string
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    views?: ViewCreateNestedManyWithoutPostInput
    categories?: PostsCategoriesCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutAuthorInput = {
    id?: number
    title: string
    body: string
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    views?: ViewUncheckedCreateNestedManyWithoutPostInput
    categories?: PostsCategoriesUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutAuthorInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostCreateManyAuthorInputEnvelope = {
    data: PostCreateManyAuthorInput | PostCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type RefreshTokenUpsertWithoutUserInput = {
    update: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
    where?: RefreshTokenWhereInput
  }

  export type RefreshTokenUpdateToOneWithWhereWithoutUserInput = {
    where?: RefreshTokenWhereInput
    data: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
  }

  export type RefreshTokenUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewUpsertWithWhereUniqueWithoutUserInput = {
    where: ViewWhereUniqueInput
    update: XOR<ViewUpdateWithoutUserInput, ViewUncheckedUpdateWithoutUserInput>
    create: XOR<ViewCreateWithoutUserInput, ViewUncheckedCreateWithoutUserInput>
  }

  export type ViewUpdateWithWhereUniqueWithoutUserInput = {
    where: ViewWhereUniqueInput
    data: XOR<ViewUpdateWithoutUserInput, ViewUncheckedUpdateWithoutUserInput>
  }

  export type ViewUpdateManyWithWhereWithoutUserInput = {
    where: ViewScalarWhereInput
    data: XOR<ViewUpdateManyMutationInput, ViewUncheckedUpdateManyWithoutUserInput>
  }

  export type ViewScalarWhereInput = {
    AND?: ViewScalarWhereInput | ViewScalarWhereInput[]
    OR?: ViewScalarWhereInput[]
    NOT?: ViewScalarWhereInput | ViewScalarWhereInput[]
    id?: IntFilter<"View"> | number
    userId?: IntFilter<"View"> | number
    postId?: IntFilter<"View"> | number
    createdAt?: DateTimeFilter<"View"> | Date | string
    updatedAt?: DateTimeFilter<"View"> | Date | string
  }

  export type EngagementUpsertWithWhereUniqueWithoutUserInput = {
    where: EngagementWhereUniqueInput
    update: XOR<EngagementUpdateWithoutUserInput, EngagementUncheckedUpdateWithoutUserInput>
    create: XOR<EngagementCreateWithoutUserInput, EngagementUncheckedCreateWithoutUserInput>
  }

  export type EngagementUpdateWithWhereUniqueWithoutUserInput = {
    where: EngagementWhereUniqueInput
    data: XOR<EngagementUpdateWithoutUserInput, EngagementUncheckedUpdateWithoutUserInput>
  }

  export type EngagementUpdateManyWithWhereWithoutUserInput = {
    where: EngagementScalarWhereInput
    data: XOR<EngagementUpdateManyMutationInput, EngagementUncheckedUpdateManyWithoutUserInput>
  }

  export type EngagementScalarWhereInput = {
    AND?: EngagementScalarWhereInput | EngagementScalarWhereInput[]
    OR?: EngagementScalarWhereInput[]
    NOT?: EngagementScalarWhereInput | EngagementScalarWhereInput[]
    id?: IntFilter<"Engagement"> | number
    userId?: IntFilter<"Engagement"> | number
    categoryId?: IntFilter<"Engagement"> | number
    viewCount?: IntFilter<"Engagement"> | number
    createdAt?: DateTimeFilter<"Engagement"> | Date | string
    updatedAt?: DateTimeFilter<"Engagement"> | Date | string
  }

  export type FeatureEventUpsertWithWhereUniqueWithoutUserInput = {
    where: FeatureEventWhereUniqueInput
    update: XOR<FeatureEventUpdateWithoutUserInput, FeatureEventUncheckedUpdateWithoutUserInput>
    create: XOR<FeatureEventCreateWithoutUserInput, FeatureEventUncheckedCreateWithoutUserInput>
  }

  export type FeatureEventUpdateWithWhereUniqueWithoutUserInput = {
    where: FeatureEventWhereUniqueInput
    data: XOR<FeatureEventUpdateWithoutUserInput, FeatureEventUncheckedUpdateWithoutUserInput>
  }

  export type FeatureEventUpdateManyWithWhereWithoutUserInput = {
    where: FeatureEventScalarWhereInput
    data: XOR<FeatureEventUpdateManyMutationInput, FeatureEventUncheckedUpdateManyWithoutUserInput>
  }

  export type FeatureEventScalarWhereInput = {
    AND?: FeatureEventScalarWhereInput | FeatureEventScalarWhereInput[]
    OR?: FeatureEventScalarWhereInput[]
    NOT?: FeatureEventScalarWhereInput | FeatureEventScalarWhereInput[]
    id?: IntFilter<"FeatureEvent"> | number
    userId?: IntFilter<"FeatureEvent"> | number
    featureKey?: StringFilter<"FeatureEvent"> | string
    event?: StringFilter<"FeatureEvent"> | string
    enabled?: BoolFilter<"FeatureEvent"> | boolean
    createdAt?: DateTimeFilter<"FeatureEvent"> | Date | string
    updatedAt?: DateTimeFilter<"FeatureEvent"> | Date | string
  }

  export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
  }

  export type PostUpdateManyWithWhereWithoutAuthorInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutAuthorInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: IntFilter<"Post"> | number
    title?: StringFilter<"Post"> | string
    body?: StringFilter<"Post"> | string
    viewCount?: IntFilter<"Post"> | number
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    authorId?: IntFilter<"Post"> | number
  }

  export type UserCreateWithoutPostsInput = {
    displayName: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshToken?: RefreshTokenCreateNestedOneWithoutUserInput
    views?: ViewCreateNestedManyWithoutUserInput
    engagements?: EngagementCreateNestedManyWithoutUserInput
    featureEvents?: FeatureEventCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: number
    displayName: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshToken?: RefreshTokenUncheckedCreateNestedOneWithoutUserInput
    views?: ViewUncheckedCreateNestedManyWithoutUserInput
    engagements?: EngagementUncheckedCreateNestedManyWithoutUserInput
    featureEvents?: FeatureEventUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type ViewCreateWithoutPostInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutViewsInput
  }

  export type ViewUncheckedCreateWithoutPostInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ViewCreateOrConnectWithoutPostInput = {
    where: ViewWhereUniqueInput
    create: XOR<ViewCreateWithoutPostInput, ViewUncheckedCreateWithoutPostInput>
  }

  export type ViewCreateManyPostInputEnvelope = {
    data: ViewCreateManyPostInput | ViewCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type PostsCategoriesCreateWithoutPostInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutPostsInput
  }

  export type PostsCategoriesUncheckedCreateWithoutPostInput = {
    id?: number
    categoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostsCategoriesCreateOrConnectWithoutPostInput = {
    where: PostsCategoriesWhereUniqueInput
    create: XOR<PostsCategoriesCreateWithoutPostInput, PostsCategoriesUncheckedCreateWithoutPostInput>
  }

  export type PostsCategoriesCreateManyPostInputEnvelope = {
    data: PostsCategoriesCreateManyPostInput | PostsCategoriesCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    displayName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshToken?: RefreshTokenUpdateOneWithoutUserNestedInput
    views?: ViewUpdateManyWithoutUserNestedInput
    engagements?: EngagementUpdateManyWithoutUserNestedInput
    featureEvents?: FeatureEventUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    displayName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshToken?: RefreshTokenUncheckedUpdateOneWithoutUserNestedInput
    views?: ViewUncheckedUpdateManyWithoutUserNestedInput
    engagements?: EngagementUncheckedUpdateManyWithoutUserNestedInput
    featureEvents?: FeatureEventUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ViewUpsertWithWhereUniqueWithoutPostInput = {
    where: ViewWhereUniqueInput
    update: XOR<ViewUpdateWithoutPostInput, ViewUncheckedUpdateWithoutPostInput>
    create: XOR<ViewCreateWithoutPostInput, ViewUncheckedCreateWithoutPostInput>
  }

  export type ViewUpdateWithWhereUniqueWithoutPostInput = {
    where: ViewWhereUniqueInput
    data: XOR<ViewUpdateWithoutPostInput, ViewUncheckedUpdateWithoutPostInput>
  }

  export type ViewUpdateManyWithWhereWithoutPostInput = {
    where: ViewScalarWhereInput
    data: XOR<ViewUpdateManyMutationInput, ViewUncheckedUpdateManyWithoutPostInput>
  }

  export type PostsCategoriesUpsertWithWhereUniqueWithoutPostInput = {
    where: PostsCategoriesWhereUniqueInput
    update: XOR<PostsCategoriesUpdateWithoutPostInput, PostsCategoriesUncheckedUpdateWithoutPostInput>
    create: XOR<PostsCategoriesCreateWithoutPostInput, PostsCategoriesUncheckedCreateWithoutPostInput>
  }

  export type PostsCategoriesUpdateWithWhereUniqueWithoutPostInput = {
    where: PostsCategoriesWhereUniqueInput
    data: XOR<PostsCategoriesUpdateWithoutPostInput, PostsCategoriesUncheckedUpdateWithoutPostInput>
  }

  export type PostsCategoriesUpdateManyWithWhereWithoutPostInput = {
    where: PostsCategoriesScalarWhereInput
    data: XOR<PostsCategoriesUpdateManyMutationInput, PostsCategoriesUncheckedUpdateManyWithoutPostInput>
  }

  export type PostsCategoriesScalarWhereInput = {
    AND?: PostsCategoriesScalarWhereInput | PostsCategoriesScalarWhereInput[]
    OR?: PostsCategoriesScalarWhereInput[]
    NOT?: PostsCategoriesScalarWhereInput | PostsCategoriesScalarWhereInput[]
    id?: IntFilter<"PostsCategories"> | number
    postId?: IntFilter<"PostsCategories"> | number
    categoryId?: IntFilter<"PostsCategories"> | number
    createdAt?: DateTimeFilter<"PostsCategories"> | Date | string
    updatedAt?: DateTimeFilter<"PostsCategories"> | Date | string
  }

  export type UserCreateWithoutViewsInput = {
    displayName: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshToken?: RefreshTokenCreateNestedOneWithoutUserInput
    engagements?: EngagementCreateNestedManyWithoutUserInput
    featureEvents?: FeatureEventCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutViewsInput = {
    id?: number
    displayName: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshToken?: RefreshTokenUncheckedCreateNestedOneWithoutUserInput
    engagements?: EngagementUncheckedCreateNestedManyWithoutUserInput
    featureEvents?: FeatureEventUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutViewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutViewsInput, UserUncheckedCreateWithoutViewsInput>
  }

  export type PostCreateWithoutViewsInput = {
    title: string
    body: string
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutPostsInput
    categories?: PostsCategoriesCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutViewsInput = {
    id?: number
    title: string
    body: string
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: number
    categories?: PostsCategoriesUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutViewsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutViewsInput, PostUncheckedCreateWithoutViewsInput>
  }

  export type UserUpsertWithoutViewsInput = {
    update: XOR<UserUpdateWithoutViewsInput, UserUncheckedUpdateWithoutViewsInput>
    create: XOR<UserCreateWithoutViewsInput, UserUncheckedCreateWithoutViewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutViewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutViewsInput, UserUncheckedUpdateWithoutViewsInput>
  }

  export type UserUpdateWithoutViewsInput = {
    displayName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshToken?: RefreshTokenUpdateOneWithoutUserNestedInput
    engagements?: EngagementUpdateManyWithoutUserNestedInput
    featureEvents?: FeatureEventUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutViewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    displayName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshToken?: RefreshTokenUncheckedUpdateOneWithoutUserNestedInput
    engagements?: EngagementUncheckedUpdateManyWithoutUserNestedInput
    featureEvents?: FeatureEventUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type PostUpsertWithoutViewsInput = {
    update: XOR<PostUpdateWithoutViewsInput, PostUncheckedUpdateWithoutViewsInput>
    create: XOR<PostCreateWithoutViewsInput, PostUncheckedCreateWithoutViewsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutViewsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutViewsInput, PostUncheckedUpdateWithoutViewsInput>
  }

  export type PostUpdateWithoutViewsInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
    categories?: PostsCategoriesUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutViewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
    categories?: PostsCategoriesUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostsCategoriesCreateWithoutCategoryInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    post: PostCreateNestedOneWithoutCategoriesInput
  }

  export type PostsCategoriesUncheckedCreateWithoutCategoryInput = {
    id?: number
    postId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostsCategoriesCreateOrConnectWithoutCategoryInput = {
    where: PostsCategoriesWhereUniqueInput
    create: XOR<PostsCategoriesCreateWithoutCategoryInput, PostsCategoriesUncheckedCreateWithoutCategoryInput>
  }

  export type PostsCategoriesCreateManyCategoryInputEnvelope = {
    data: PostsCategoriesCreateManyCategoryInput | PostsCategoriesCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type EngagementCreateWithoutCategoryInput = {
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEngagementsInput
  }

  export type EngagementUncheckedCreateWithoutCategoryInput = {
    id?: number
    userId: number
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EngagementCreateOrConnectWithoutCategoryInput = {
    where: EngagementWhereUniqueInput
    create: XOR<EngagementCreateWithoutCategoryInput, EngagementUncheckedCreateWithoutCategoryInput>
  }

  export type EngagementCreateManyCategoryInputEnvelope = {
    data: EngagementCreateManyCategoryInput | EngagementCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type PostsCategoriesUpsertWithWhereUniqueWithoutCategoryInput = {
    where: PostsCategoriesWhereUniqueInput
    update: XOR<PostsCategoriesUpdateWithoutCategoryInput, PostsCategoriesUncheckedUpdateWithoutCategoryInput>
    create: XOR<PostsCategoriesCreateWithoutCategoryInput, PostsCategoriesUncheckedCreateWithoutCategoryInput>
  }

  export type PostsCategoriesUpdateWithWhereUniqueWithoutCategoryInput = {
    where: PostsCategoriesWhereUniqueInput
    data: XOR<PostsCategoriesUpdateWithoutCategoryInput, PostsCategoriesUncheckedUpdateWithoutCategoryInput>
  }

  export type PostsCategoriesUpdateManyWithWhereWithoutCategoryInput = {
    where: PostsCategoriesScalarWhereInput
    data: XOR<PostsCategoriesUpdateManyMutationInput, PostsCategoriesUncheckedUpdateManyWithoutCategoryInput>
  }

  export type EngagementUpsertWithWhereUniqueWithoutCategoryInput = {
    where: EngagementWhereUniqueInput
    update: XOR<EngagementUpdateWithoutCategoryInput, EngagementUncheckedUpdateWithoutCategoryInput>
    create: XOR<EngagementCreateWithoutCategoryInput, EngagementUncheckedCreateWithoutCategoryInput>
  }

  export type EngagementUpdateWithWhereUniqueWithoutCategoryInput = {
    where: EngagementWhereUniqueInput
    data: XOR<EngagementUpdateWithoutCategoryInput, EngagementUncheckedUpdateWithoutCategoryInput>
  }

  export type EngagementUpdateManyWithWhereWithoutCategoryInput = {
    where: EngagementScalarWhereInput
    data: XOR<EngagementUpdateManyMutationInput, EngagementUncheckedUpdateManyWithoutCategoryInput>
  }

  export type UserCreateWithoutEngagementsInput = {
    displayName: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshToken?: RefreshTokenCreateNestedOneWithoutUserInput
    views?: ViewCreateNestedManyWithoutUserInput
    featureEvents?: FeatureEventCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutEngagementsInput = {
    id?: number
    displayName: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshToken?: RefreshTokenUncheckedCreateNestedOneWithoutUserInput
    views?: ViewUncheckedCreateNestedManyWithoutUserInput
    featureEvents?: FeatureEventUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutEngagementsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEngagementsInput, UserUncheckedCreateWithoutEngagementsInput>
  }

  export type CategoryCreateWithoutEngagementsInput = {
    label: string
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostsCategoriesCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutEngagementsInput = {
    id?: number
    label: string
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostsCategoriesUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutEngagementsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutEngagementsInput, CategoryUncheckedCreateWithoutEngagementsInput>
  }

  export type UserUpsertWithoutEngagementsInput = {
    update: XOR<UserUpdateWithoutEngagementsInput, UserUncheckedUpdateWithoutEngagementsInput>
    create: XOR<UserCreateWithoutEngagementsInput, UserUncheckedCreateWithoutEngagementsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEngagementsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEngagementsInput, UserUncheckedUpdateWithoutEngagementsInput>
  }

  export type UserUpdateWithoutEngagementsInput = {
    displayName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshToken?: RefreshTokenUpdateOneWithoutUserNestedInput
    views?: ViewUpdateManyWithoutUserNestedInput
    featureEvents?: FeatureEventUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutEngagementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    displayName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshToken?: RefreshTokenUncheckedUpdateOneWithoutUserNestedInput
    views?: ViewUncheckedUpdateManyWithoutUserNestedInput
    featureEvents?: FeatureEventUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type CategoryUpsertWithoutEngagementsInput = {
    update: XOR<CategoryUpdateWithoutEngagementsInput, CategoryUncheckedUpdateWithoutEngagementsInput>
    create: XOR<CategoryCreateWithoutEngagementsInput, CategoryUncheckedCreateWithoutEngagementsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutEngagementsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutEngagementsInput, CategoryUncheckedUpdateWithoutEngagementsInput>
  }

  export type CategoryUpdateWithoutEngagementsInput = {
    label?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostsCategoriesUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutEngagementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostsCategoriesUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type PostCreateWithoutCategoriesInput = {
    title: string
    body: string
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutPostsInput
    views?: ViewCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutCategoriesInput = {
    id?: number
    title: string
    body: string
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: number
    views?: ViewUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutCategoriesInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCategoriesInput, PostUncheckedCreateWithoutCategoriesInput>
  }

  export type CategoryCreateWithoutPostsInput = {
    label: string
    createdAt?: Date | string
    updatedAt?: Date | string
    engagements?: EngagementCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutPostsInput = {
    id?: number
    label: string
    createdAt?: Date | string
    updatedAt?: Date | string
    engagements?: EngagementUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutPostsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutPostsInput, CategoryUncheckedCreateWithoutPostsInput>
  }

  export type PostUpsertWithoutCategoriesInput = {
    update: XOR<PostUpdateWithoutCategoriesInput, PostUncheckedUpdateWithoutCategoriesInput>
    create: XOR<PostCreateWithoutCategoriesInput, PostUncheckedCreateWithoutCategoriesInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutCategoriesInput, PostUncheckedUpdateWithoutCategoriesInput>
  }

  export type PostUpdateWithoutCategoriesInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
    views?: ViewUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
    views?: ViewUncheckedUpdateManyWithoutPostNestedInput
  }

  export type CategoryUpsertWithoutPostsInput = {
    update: XOR<CategoryUpdateWithoutPostsInput, CategoryUncheckedUpdateWithoutPostsInput>
    create: XOR<CategoryCreateWithoutPostsInput, CategoryUncheckedCreateWithoutPostsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutPostsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutPostsInput, CategoryUncheckedUpdateWithoutPostsInput>
  }

  export type CategoryUpdateWithoutPostsInput = {
    label?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    engagements?: EngagementUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    engagements?: EngagementUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type UserCreateWithoutFeatureEventsInput = {
    displayName: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshToken?: RefreshTokenCreateNestedOneWithoutUserInput
    views?: ViewCreateNestedManyWithoutUserInput
    engagements?: EngagementCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutFeatureEventsInput = {
    id?: number
    displayName: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshToken?: RefreshTokenUncheckedCreateNestedOneWithoutUserInput
    views?: ViewUncheckedCreateNestedManyWithoutUserInput
    engagements?: EngagementUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutFeatureEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFeatureEventsInput, UserUncheckedCreateWithoutFeatureEventsInput>
  }

  export type UserUpsertWithoutFeatureEventsInput = {
    update: XOR<UserUpdateWithoutFeatureEventsInput, UserUncheckedUpdateWithoutFeatureEventsInput>
    create: XOR<UserCreateWithoutFeatureEventsInput, UserUncheckedCreateWithoutFeatureEventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFeatureEventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFeatureEventsInput, UserUncheckedUpdateWithoutFeatureEventsInput>
  }

  export type UserUpdateWithoutFeatureEventsInput = {
    displayName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshToken?: RefreshTokenUpdateOneWithoutUserNestedInput
    views?: ViewUpdateManyWithoutUserNestedInput
    engagements?: EngagementUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutFeatureEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    displayName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshToken?: RefreshTokenUncheckedUpdateOneWithoutUserNestedInput
    views?: ViewUncheckedUpdateManyWithoutUserNestedInput
    engagements?: EngagementUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateWithoutRefreshTokenInput = {
    displayName: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    views?: ViewCreateNestedManyWithoutUserInput
    engagements?: EngagementCreateNestedManyWithoutUserInput
    featureEvents?: FeatureEventCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutRefreshTokenInput = {
    id?: number
    displayName: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    views?: ViewUncheckedCreateNestedManyWithoutUserInput
    engagements?: EngagementUncheckedCreateNestedManyWithoutUserInput
    featureEvents?: FeatureEventUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutRefreshTokenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRefreshTokenInput, UserUncheckedCreateWithoutRefreshTokenInput>
  }

  export type UserUpsertWithoutRefreshTokenInput = {
    update: XOR<UserUpdateWithoutRefreshTokenInput, UserUncheckedUpdateWithoutRefreshTokenInput>
    create: XOR<UserCreateWithoutRefreshTokenInput, UserUncheckedCreateWithoutRefreshTokenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRefreshTokenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRefreshTokenInput, UserUncheckedUpdateWithoutRefreshTokenInput>
  }

  export type UserUpdateWithoutRefreshTokenInput = {
    displayName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    views?: ViewUpdateManyWithoutUserNestedInput
    engagements?: EngagementUpdateManyWithoutUserNestedInput
    featureEvents?: FeatureEventUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutRefreshTokenInput = {
    id?: IntFieldUpdateOperationsInput | number
    displayName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    views?: ViewUncheckedUpdateManyWithoutUserNestedInput
    engagements?: EngagementUncheckedUpdateManyWithoutUserNestedInput
    featureEvents?: FeatureEventUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type ViewCreateManyUserInput = {
    id?: number
    postId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EngagementCreateManyUserInput = {
    id?: number
    categoryId: number
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeatureEventCreateManyUserInput = {
    id?: number
    featureKey: string
    event: string
    enabled: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCreateManyAuthorInput = {
    id?: number
    title: string
    body: string
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ViewUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutViewsNestedInput
  }

  export type ViewUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EngagementUpdateWithoutUserInput = {
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutEngagementsNestedInput
  }

  export type EngagementUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EngagementUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureEventUpdateWithoutUserInput = {
    featureKey?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureEventUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    featureKey?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureEventUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    featureKey?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    views?: ViewUpdateManyWithoutPostNestedInput
    categories?: PostsCategoriesUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    views?: ViewUncheckedUpdateManyWithoutPostNestedInput
    categories?: PostsCategoriesUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewCreateManyPostInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostsCategoriesCreateManyPostInput = {
    id?: number
    categoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ViewUpdateWithoutPostInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutViewsNestedInput
  }

  export type ViewUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostsCategoriesUpdateWithoutPostInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostsCategoriesUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostsCategoriesUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostsCategoriesCreateManyCategoryInput = {
    id?: number
    postId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EngagementCreateManyCategoryInput = {
    id?: number
    userId: number
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostsCategoriesUpdateWithoutCategoryInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type PostsCategoriesUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostsCategoriesUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EngagementUpdateWithoutCategoryInput = {
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEngagementsNestedInput
  }

  export type EngagementUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EngagementUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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