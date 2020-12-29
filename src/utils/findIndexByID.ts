interface Item {
  id: string;
}
export const findIndexByID = <T extends Item>(items: T[], id: string) => {
  return items.findIndex((item: T) => item.id === id);
};
