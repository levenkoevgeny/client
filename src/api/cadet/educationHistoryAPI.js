import BaseAPI from "@/api/baseAPIClass"

class educationHistoryAPI extends BaseAPI {}

export default function getEducationHistoryAPIInstance() {
  return new educationHistoryAPI(
    "education-history",
    {
      cadet: "",
      education_kind: "",
      education_level: "",
      education_graduated__icontains: "",
      education_graduating_start_year__gte: "",
      education_graduating_start_year__lte: "",
      education_graduating_end_year__gte: "",
      education_graduating_end_year__lte: "",
      education_average_score__gte: "",
      education_average_score__lte: "",
    },
    {
      cadet: "",
      education_kind: "",
      education_level: "",
      education_graduated: "",
      education_graduating_start_year: "",
      education_graduating_end_year: "",
      education_average_score: "",
      education_location_kind: "",
    },
  )
}
