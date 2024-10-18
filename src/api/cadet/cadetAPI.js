import BaseAPI from "@/api/baseAPIClass"

class CadetAPI extends BaseAPI {}

export default function getCadetAPIInstance() {
  return new CadetAPI("cadet", {
    category: "",
    last_name_rus__icontains: "",
    first_name_rus__icontains: "",
    last_name_bel__icontains: "",
    first_name_bel__icontains: "",
    last_name_en__icontains: "",
    first_name_en__icontains: "",
    date_of_birth__gte: "",
    date_of_birth__lte: "",
    address__icontains: "",
    passport_number: "",
    passport_issue_date__gte: "",
    passport_issue_date__lte: "",
    passport_validity_period__gte: "",
    passport_validity_period__lte: "",
    passport_issue_authority: "",
    father_date_of_birth__gte: "",
    father_date_of_birth__lte: "",
    mother_date_of_birth__gte: "",
    mother_date_of_birth__lte: "",
    education_level: "",
    education_graduated__icontains: "",
    education_graduating_year__gte: "",
    education_graduating_year__lte: "",
    education_average_score__gte: "",
    education_average_score__lte: "",
    education_kind: "",
    education_location_kind: "",
    subdivision: "",
    academy_start_year__gte: "",
    academy_start_year__lte: "",
    academy_end_year__gte: "",
    academy_end_year__lte: "",
    component_organ: "",
    entrance_category: "",
    arrived_from_go_rovd: "",
    social_status: "",
    region_for_medical_examination: "",
    military_office: "",
    extra_data__icontains: "",
  })
}
