import BaseAPI from "@/api/baseAPIClass"

class CadetForeignLanguageLevelAPI extends BaseAPI {}

export default function getCadetForeignLanguageLevelAPIInstance() {
  return new CadetForeignLanguageLevelAPI("cadet-foreign-language-level", {
    cadet: "",
    foreign_language: "",
    foreign_language_level: "",
    extra_data__icontains: "",
  })
}
