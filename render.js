let services = [
    {
        id: 1,
        head: null,
        name: "Проф.осмотр",
        node: 0,
        price: 100.0,
        sorthead: 20
    },
    {
        id: 2,
        head: null,
        name: "Хирургия",
        node: 1,
        price: 0.0,
        sorthead: 10
    },
    {
        id: 3,
        head: 2,
        name: "Удаление зубов",
        node: 1,
        price: 0.0,
        sorthead: 10
    },
    {
        id: 4,
        head: 3,
        name: "Удаление зуба",
        node: 0,
        price: 800.0,
        sorthead: 10
    },
    {
        id: 5,
        head: 3,
        name: "Удаление 8ого зуба",
        node: 0,
        price: 1000.0,
        sorthead: 30
    },
    {
        id: 6,
        head: 3,
        name: "Удаление осколка зуба",
        node: 0,
        price: 2000.0,
        sorthead: 20
    },
    {
        id: 7,
        head: 2,
        name: "Хирургические вмешательство",
        node: 0,
        price: 200.0,
        sorthead: 10
    },
    {
        id: 8,
        head: 2,
        name: "Имплантация зубов",
        node: 1,
        price: 0.0,
        sorthead: 20
    },
    {
        id: 9,
        head: 8,
        name: "Коронка",
        node: 0,
        price: 3000.0,
        sorthead: 10
    },
    {
        id: 10,
        head: 8,
        name: "Слепок челюсти",
        node: 0,
        price: 500.0,
        sorthead: 20
    }
]

const itemGroup = {
    item: {},
    parents: {}
}

services.forEach((e) => {
    itemGroup.item[e.id] = e;

    if (itemGroup.parents[e.head]) {
        itemGroup.parents[e.head].push(e.id)
    } else {
        itemGroup.parents[e.head] = [e.id]
    }
})

function buildTree(parentId, data) {
    let newData = []

    if (data.parents && data.parents[parentId]) {
        for (itemId of data.parents[parentId]) {
            let newObject = data.item[itemId]

            newObject.child = buildTree(itemId, data)

            newData.push(newObject)
        }
    }

    return newData
}

const result = buildTree(null, itemGroup)

function renderList(htmlStr, list) {
    list.forEach((item) => {
        htmlStr += `<li>
            <div class="listree-submenu-heading">${item.name} (${item.price})</div>`;
        if (item.child && item.child.length > 0) {
            htmlStr += `<ul class="listree-submenu-items">${renderList("", item.child)}</ul></li>`;
        }
    });

    return htmlStr;
}

function renderData(list) {
    let finalHtml = `<ul class="listree">${renderList(``, list)}</ul>`;
    let placeHolder = document.querySelector("#tree");
    placeHolder.innerHTML = finalHtml;
}

renderData(result); 
