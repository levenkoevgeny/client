import BaseAPI from "@/api/baseAPIClass"

class cadetCategoryAPI extends BaseAPI {}

export default function getCadetCategoryAPIInstance() {
  return new cadetCategoryAPI("cadet-categories", {
    category__icontains: "",
  })
}
