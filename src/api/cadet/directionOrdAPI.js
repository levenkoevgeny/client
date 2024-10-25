import BaseAPI from "@/api/baseAPIClass"

class DirectionOrdAPI extends BaseAPI {}

export default function getDirectionOrdAPIInstance() {
  return new DirectionOrdAPI("direction-ord", {})
}
