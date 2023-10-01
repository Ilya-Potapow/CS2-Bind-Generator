export interface IMainStore {
  selectedKey: string;
  selectedMouseKey: string;
  keyToBind: string;
  selectedEquip: string;
  usedKeys: string[];
  currentBind: string[];
  printedBind: string[];
  setSelectedKey: (key: string) => void;
  setSelectedMouseKey: (key: string) => void;
  setKeyToBind: (key: string) => void;
  setSetSelectedEquip: (equip: string) => void;
  setCurrentBind: (arr: string[]) => void;
  setPrintedBind: (arr: string[]) => void;
  setUsedKeys: (key: string) => void;
  reset: () => void;
}
export interface IUiStore {
  showHeavyWeapon: boolean;
  isSound: boolean;
  menuToRender: () => { title: string; value: string; img: string }[][];
  setShowHeavyWeapon: (flag: boolean) => void;
  setSound: (flag: boolean) => void;
}