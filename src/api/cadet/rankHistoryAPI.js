import BaseAPI from "@/api/baseAPIClass"

class RankHistoryAPI extends BaseAPI {}

export default function getRankHistoryAPIInstance() {
  return new RankHistoryAPI("rank-history", {
    cadet: "",
    rank: "",
    rank_date__gte: "",
    rank_date__lte: "",
    rank_order_date__gte: "",
    rank_order_date__lte: "",
    rank_order_number__icontains: "",
    rank_order_owner: "",
    rank_extra_data__icontains: ""
  })
}
