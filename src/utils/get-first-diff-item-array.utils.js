export default function getFirstDiffItemArray(
  item: any, array: Array<any>, itemProp?: string): any {
  if (itemProp) {
    return array.find((arrItem) => (item[itemProp] !== arrItem[itemProp]));
  } else {
    return array.find((arrItem) => (item !== arrItem));
  }
}
