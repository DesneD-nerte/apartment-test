export type SelectSort =
  | undefined
  | 'PriceHighToLow'
  | 'PriceLowToHigh'
  | 'AreaLowToHigh'
  | 'AreaHighToLow';

export interface PriceInput {
  priceStart: number;
  priceEnd: number;
}

export interface AreaInput {
  areaTotal: {
    totalStart: number;
    totalEnd: number;
  };
  areaLive: {
    liveStart: number;
    liveEnd: number;
  };
  areaKitchen: {
    kitchenStart: number;
    kitchenEnd: number;
  };
}
