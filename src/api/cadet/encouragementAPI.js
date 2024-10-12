import BaseAPI from "@/api/baseAPIClass"

class EncouragementAPI extends BaseAPI {}

export default function getEncouragementAPIInstance() {
  return new EncouragementAPI("encouragement", {
    encouragement_cadet: "",
    encouragement_kind: "",
    encouragement_date__gte: "",
    encouragement_date__lte: "",
    encouragement_order_date__gte: "",
    encouragement_order_date__lte: "",
    encouragement_order_number__icontains: "",
    encouragement_order_owner: "",
    encouragement_extra_data__icontains: "",
  })
}