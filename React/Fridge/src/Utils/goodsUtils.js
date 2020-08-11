import { v4 as uuidv4 } from 'uuid';

export const newItemFromData = (data) => {
    return {
        id: uuidv4(),
        ...data,
        selected: false,
        isEdit: false
    }
}

export const addNewItem = (data, goods) => {
    return [...goods, newItemFromData(data)]
}

export const removeElementById = (id, goods) => {
    return goods.filter((e) => e.id !== id)
}

export const getTotal = (goods) => {
    return goods.reduce((acc, item) => {
        return acc + parseFloat(item.weight);
    }, 0)
}

// export const selectedRows = (id, goods) => {
//     const newArr = goods.map(el => {
//         if (el.id === id) {
//             return {...el, selected: true}
//         }
//         return el
//     })
//     return newArr.filter(el => el.selected === true)
// }

export const selectedRows = (ids, goods) => {
    const newArr = [];
    goods.forEach(el => {
        if(ids.includes(el.id)) {
            newArr.push(el)
        }
    })
    return newArr
}

export const editRow = (id, goods) => {
    return goods.find(el => el.id === id)
}