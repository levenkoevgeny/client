import BaseAPI from "@/api/baseAPIClass"

class SubdivisionAPI extends BaseAPI {}

export default function getSubdivisionAPIInstance() {
  return new SubdivisionAPI("subdivision", {})
}