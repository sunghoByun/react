import {atom, selector} from 'recoil';

export const counterAtom = atom({
    key: 'counterAtom',
    default: 0,
});

export const todoAtom = atom({
    key: 'todosAtom',
    default: [
        {
            id: 1,
            title: '우진이 사료 주문하기',
            isDone: false,
        }
    ]
})

export const todoLastIdSelector = selector({
    key: 'todoLastIdSelector',
    get: ({get}) => {
        const todo = get(todoAtom);
        return todo.at(-1)?.id ?? 0;
    },
})