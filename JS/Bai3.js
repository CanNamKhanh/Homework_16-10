const menus = [
  {
    id: 1,
    title: "Menu 1",
    parent: 0,
  },
  {
    id: 2,
    title: "Menu 2",
    parent: 0,
  },
  {
    id: 3,
    title: "Menu 3",
    parent: 0,
  },
  {
    id: 4,
    title: "Menu 2.1",
    parent: 2,
  },
  {
    id: 5,
    title: "Menu 2.2",
    parent: 2,
  },
  {
    id: 6,
    title: "Menu 2.3",
    parent: 2,
  },
  {
    id: 7,
    title: "Menu 2.2.1",
    parent: 5,
  },
  {
    id: 8,
    title: "Menu 2.2.2",
    parent: 5,
  },
];

const getMenuTree = function (menuData, parentId) {
  return menuData
    .filter(function (item) {
      // console.log(item);
      // const parentId = 0;
      return item.parent === parentId;
    })
    .map(function (item) {
      const itemExtended = { ...item };
      // console.log(itemExtended);
      const children = getMenuTree(menuData, item.id);
      if (children.length) {
        itemExtended.children = children;
      }
      return itemExtended;
    });
};
// const result = getMenuTree(menus);
// console.log(result);
console.log(getMenuTree(menus, 0));
