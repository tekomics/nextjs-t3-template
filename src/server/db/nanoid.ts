import { customType } from 'drizzle-orm/mysql-core';

import createId from '@/utils/createId';

const nanoid = customType<{ data: string | undefined; notNull: true }>({
  dataType() {
    return 'varchar(12)'; // match prisma
  },
  toDriver(value?: string) {
    return value || createId();
  },
});

export default nanoid;

// import {
//   Assume,
//   ColumnBaseConfig,
//   ColumnBuilderBaseConfig,
//   ColumnBuilderHKTBase,
//   ColumnHKTBase,
//   MakeColumnConfig,
// } from 'drizzle-orm';
// import {
//   AnyMySqlTable,
//   MySqlColumn,
//   MySqlColumnBuilder,
// } from 'drizzle-orm/mysql-core';
// // import type { ColumnBaseConfig, ColumnHKTBase } from '~/column';
// // import type {
// //   ColumnBuilderBaseConfig,
// //   ColumnBuilderHKTBase,
// //   MakeColumnConfig,
// // } from '~/column-builder';
// // import type { AnyMySqlTable } from '~/mysql-core/table';
// // import type { Assume } from '~/utils';
// // import { MySqlColumn, MySqlColumnBuilder } from './common';

// // const defaultLength = 21;
// // const defaultAlphabet =
// //   '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz-';

// import { customAlphabet } from 'nanoid';

// const defaultLength = 12;
// const defaultAlphabet = '0123456789abcdefghijklmnopqrstuvwxyz';

// export interface MySqlNanoidBuilderHKT extends ColumnBuilderHKTBase {
//   _type: MySqlNanoidBuilder<Assume<this['config'], ColumnBuilderBaseConfig>>;
//   _columnHKT: MySqlNanoidHKT;
// }

// export interface MySqlNanoidHKT extends ColumnHKTBase {
//   _type: MySqlNanoid<Assume<this['config'], ColumnBaseConfig>>;
// }

// export type MySqlNanoidBuilderInitial<TName extends string> =
//   MySqlNanoidBuilder<{
//     name: TName;
//     data: string;
//     driverParam: string;
//     notNull: false;
//     hasDefault: false;
//   }>;

// export class MySqlNanoidBuilder<
//   T extends ColumnBuilderBaseConfig
// > extends MySqlColumnBuilder<MySqlNanoidBuilderHKT, T, MySqlNanoidConfig> {
//   constructor(
//     name: T['name'],
//     length: number | undefined,
//     alphabet: string | undefined
//   ) {
//     super(name);
//     this.config.length = length || defaultLength;
//     this.config.alphabet = alphabet || defaultAlphabet;
//   }

//   build<TTableName extends string>(
//     table: AnyMySqlTable<{ name: TTableName }>
//   ): MySqlNanoid<MakeColumnConfig<T, TTableName>> {
//     return new MySqlNanoid<MakeColumnConfig<T, TTableName>>(table, this.config);
//   }
// }

// export class MySqlNanoid<T extends ColumnBaseConfig> extends MySqlColumn<
//   ColumnHKTBase,
//   T,
//   MySqlNanoidConfig
// > {
//   length: number | undefined = this.config.length;
//   alphabet: string | undefined = this.config.alphabet;

//   getSQLType(): string {
//     return `varchar(${this.length || defaultLength}})`;
//   }

//   mapToDriverValue(value: string | undefined): string {
//     if (value) return value;

//     const createId = customAlphabet(
//       this.alphabet || defaultAlphabet,
//       this.length || defaultLength
//     );

//     return createId();
//   }
// }

// export interface MySqlNanoidConfig {
//   length?: number;
//   alphabet?: string;
// }

// export default function nanoid<TName extends string>(
//   name: TName,
//   config: MySqlNanoidConfig = {}
// ): MySqlNanoidBuilderInitial<TName> {
//   return new MySqlNanoidBuilder(name, config.length, config.alphabet);
// }
