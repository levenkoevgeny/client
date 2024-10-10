import BaseAPI from "@/api/baseAPIClass"

class EncouragementKindAPI extends BaseAPI {}

export default function getEncouragementKindAPIInstance() {
  return new EncouragementKindAPI("encouragement-kind", {})
}
