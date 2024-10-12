import BaseAPI from "@/api/baseAPIClass"

class PositionHistoryAPI extends BaseAPI {}

export default function getPositionHistoryAPIInstance() {
  return new PositionHistoryAPI("position-history", {
    cadet: "",
    position: "",
    position_date__gte: "",
    position_date__lte: "",
    position_order_date__gte: "",
    position_order_date__lte: "",
    position_order_number__icontains: "",
    position_order_owner: "",
    position_extra_data__icontains: "",
  })
}
