import BaseAPI from "@/api/baseAPIClass"

class RankHistoryAPI extends BaseAPI {}

let rankHistoryAPIInstance = new RankHistoryAPI("rank-history", {
  cadet: "",
  rank: "",
  rank_date__gte: "",
  rank_date__lte: "",
  extra_data__icontains: "",
})

export default rankHistoryAPIInstance