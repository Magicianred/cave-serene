﻿namespace CaveSerene.Default {
    export interface AttoRow {
        Id?: number;
        NumAtto?: number;
        DataAtto?: string;
        IdPiano?: number;
        TipoAtto?: Modules.Default.Enums.TipoAtto;
    }

    export namespace AttoRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Default.Atto';
        export const lookupKey = 'Default.Atto';

        export function getLookup(): Q.Lookup<AttoRow> {
            return Q.getLookup<AttoRow>('Default.Atto');
        }

        export declare const enum Fields {
            Id = "Id",
            NumAtto = "NumAtto",
            DataAtto = "DataAtto",
            IdPiano = "IdPiano",
            TipoAtto = "TipoAtto"
        }
    }
}

