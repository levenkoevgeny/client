import BaseAPI from "@/api/baseAPIClass"

class MaritalStatusAPI extends BaseAPI {}

export default function getMaritalStatusAPIInstance() {
  return new MaritalStatusAPI("marital-status", {})
}
