import BaseAPI from "@/api/baseAPIClass"

class PositionAPI extends BaseAPI {}

export default function getPositionAPIInstance() {
  return new PositionAPI("position", {})
}