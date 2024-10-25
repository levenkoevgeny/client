import BaseAPI from "@/api/baseAPIClass"

class SpecializationAPI extends BaseAPI {}

export default function getSpecializationAPIInstance() {
  return new SpecializationAPI("specialization", {})
}
