export const URL = {
    CONTEXT: 'http://localhost:8080/api',
    CONTEXT_PRODUCT: '/product',
    CONTEXT_STOCK: '/stock',
    CONTEXT_PURCHASE: '/purchase',
    CONTEXT_SALES: '/sale',
    CONTEXT_CATALOG: '/catalog',
    PRODUCTS: {
        SAVE : '/save',
        FIND_ALL : '/findall',
        DELETE : '/delete',
        GET_BY_ID : '/getbyid'
    },
    STOCK: {
        FIND_ALL : '/findall',
    },
    PURCHASES: {
        SAVE : '/save',
        FIND_ALL : '/findall',
        GET_BY_ID : '/getbyid'
    },
    SALES: {
        SAVE : '/save',
        FIND_ALL : '/findall',
        GET_BY_ID : '/getbyid'
    },
    CATALOG:{
        GET_BY_ID : '/getbyid',
        GET_CATALOG_PRODUCT : '/catalogProduct',
        GET_CATALOG_ALL_PRODUCT : '/catalogAllProduct',
        GET_CATALOG_All : '/findAllCatalogs',
        GET_CATALOG_BY_TYPE : '/findCatalogsByType'
    }
  };