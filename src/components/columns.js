import { StatusPill } from "./StatusPill";
import { ColumnFilter } from "./ColumnFilter";
export const COLUMNS = [
    {//header name accessor sql variable
        Header: 'Card name',
        accessor: 'name',
        Filter: ColumnFilter,
    },
    {
        Header: 'Converted Mana Cost',
        accessor: 'convertedManaCost',
        Filter: ColumnFilter,
    },
    {
        Header: 'Rule text',
        accessor: 'text',
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
        
        Cell: (props) => (
            <>
            
              {/* <p className="">{(props.row.original.toughness +"/"+props.row.original.power) null}</p> */}
              
                {props.row.original.power > props.row.original.power === undefined ? '-': props.row.original.power}/
                
                {props.row.original.toughness > props.row.original.toughness === undefined ? '-': props.row.original.toughness}
              
            </>
          ),
        Filter: ColumnFilter,
    },
    // {
    //     Header: 'toughness',
    //     accessor: 'toughness',
    //     Filter: ColumnFilter,
    // },
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
