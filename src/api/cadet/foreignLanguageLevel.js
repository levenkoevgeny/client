import BaseAPI from "@/api/baseAPIClass"

class ForeignLanguageLevelAPI extends BaseAPI {}

export default function getForeignLanguageLevelAPIInstance() {
  return new ForeignLanguageLevelAPI("foreign-language-level", {})
}
