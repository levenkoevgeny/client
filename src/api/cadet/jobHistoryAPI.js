import BaseAPI from "@/api/baseAPIClass"

class jobHistoryAPI extends BaseAPI {}

export default function getJobHistoryAPIInstance() {
  return new jobHistoryAPI("job-history", {
    cadet: "",
    job_position__icontains: "",
    job_start_year__gte: "",
    job_start_year__lte: "",
    job_end_year__gte: "",
    job_end_year__lte: "",
    organisation_name__icontains: "",
  })
}