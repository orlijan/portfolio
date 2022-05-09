import { StatusPill } from "./StatusPill";
import { ColumnFilter } from "./ColumnFilter";
export const COLUMNS = [
    {//header name accessor sql variable
        Header: 'Card name',
        accessor: 'name',
        Filter: ColumnFilter,
    },
    {
        Header: 'colors',
        accessor: 'colors',
        Filter: ColumnFilter,
    },
    {
        Header: 'rarity',
        accessor: 'rarity',
        Cell: StatusPill,
        Filter: ColumnFilter,
    },
    {
        Header: 'power',
        accessor: 'power',
        Filter: ColumnFilter,
    },
    {
        Header: 'toughness',
        accessor: 'toughness',
        Filter: ColumnFilter,
    },
    {
        Header: 'type',
        accessor: 'type',
        Filter: ColumnFilter,
        
    },
    {
        Header: 'set',
        accessor: 'setCode',
        Filter: ColumnFilter,
    }
    
]
