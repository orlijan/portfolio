import { StatusPill } from "./StatusPill";

export const COLUMNS = [
    {//header name accessor sql variable
        Header: 'Card name',
        accessor: 'name'
    },
    {
        Header: 'colors',
        accessor: 'colors'
    },
    {
        Header: 'rarity',
        accessor: 'rarity',
        Cell: StatusPill,
    },
    {
        Header: 'power',
        accessor: 'power'
    },
    {
        Header: 'toughness',
        accessor: 'toughness'
    },
    {
        Header: 'type',
        accessor: 'type'
        
    },
]

// export const COLUMNS = [
//     {//header name accessor sql variable
//         Header: 'Id',
//         accessor: 'id'
//     },
//     {
//         Header: 'First Name',
//         accessor: 'first_name'
//     },
//     {
//         Header: 'Last Name',
//         accessor: 'last_name'
//     },
//     {
//         Header: 'Date of Birth',
//         accessor: 'date_of_birth'
//     },
//     {
//         Header: 'Country',
//         accessor: 'country'
//     },
//     {
//         Header: 'Phone',
//         accessor: 'phone'
//     },
// ]
