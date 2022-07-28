export enum SortPropertyEnum {
    RATING='rating',
    TITLE= 'title',
    PRICE_DESC='price',
    PRICE_ASC= '-price'
  }
  
  export type Sort = {
    name: string,
    sortProperty: SortPropertyEnum,
  }
  
  export interface FilterSliceState {
    categoryId: number,
    currentPage: number,
    searchValue: string,
    sort: Sort,
  }
  