import BaseAPI from "@/api/baseAPIClass"

class SpecialityAPI extends BaseAPI {}

export default function getSpecialityAPIInstance() {
  return new SpecialityAPI("speciality", {})
}
