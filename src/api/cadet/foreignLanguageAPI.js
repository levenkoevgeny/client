import BaseAPI from "@/api/baseAPIClass"

class ForeignLanguageAPI extends BaseAPI {}

export default function getForeignLanguageAPIInstance() {
  return new ForeignLanguageAPI("foreign-language", {})
}
