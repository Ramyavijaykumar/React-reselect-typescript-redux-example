export interface Inventory {
  id: string;
  label: string;
  value: string;
  isKey: boolean;
  mandatory: boolean;
  recommended: boolean;
  currentInventory: number;
}

export enum InventoryActionTypes {
  FETCH_REQUEST = "@@inventory/FETCH_REQUEST",
  FETCH_SUCCESS = "@@inventory/FETCH_SUCCESS",
  FETCH_ERROR = "@@inventory/FETCH_ERROR"
}

export interface InventoryState {
  readonly loading: boolean;
  readonly data: Inventory[];
  readonly errors?: string;
}
