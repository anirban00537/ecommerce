// /products?category_id=1&order_by=average_rating&order=DESC&paginate=0
import request from "../utils/request";

export const getProducts = (cat_id, paginate = 0) => {
  return request.get(
    `/products?category_id=${cat_id}&order_by=average_rating&order=DESC&paginate=${paginate}`
  );
};

export const getProductDetails = (id) => {
  return request.get(`/product/${id}`);
};
