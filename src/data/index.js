import { uniqueId } from 'loadash';

export const initialTodos = [
    {
        id: uniqueId(),
        title: 'salam',
        done: true,
    },
    {
        id: uniqueId(),
        title: 'aleykum',
        done: false,
    },
    {
        id: uniqueId(),
        title: 'sagol',
        done: false,
    },
]

export const FilterState = {
    ALL: 'ALL',
    COMPLETED: 'COMPLETED',
    ACTIVE: 'ACTIVE',
}