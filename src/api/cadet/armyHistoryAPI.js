import BaseAPI from "@/api/baseAPIClass"

class armyHistoryAPI extends BaseAPI {}

export default function getArmyHistoryAPIInstance() {
  return new armyHistoryAPI("army-history", {
    cadet: "",
    mvd_organization__icontains: "",
    military_service_start__gte: "",
    military_service_start__lte: "",
    military_service_end__gte: "",
    military_service_end__lte: "",
    position__icontains: "",
    order_owner: "",
    order_date__gte: "",
    order_date__lte: "",
    order_number__icontains: "",
  })
}
