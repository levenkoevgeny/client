import BaseAPI from "@/api/baseAPIClass"

class EmployeeAPI extends BaseAPI {}

export default function getEmployeeAPIInstance() {
  return new EmployeeAPI("employee", {
    employee_kind: "",
    employee_kind__in: "",
    last_name_rus__icontains: "",
    first_name_rus__icontains: "",
    patronymic_rus__icontains: "",
    last_name_bel__icontains: "",
    first_name_bel__icontains: "",
    last_name_en__icontains: "",
    first_name_en__icontains: "",
    date_of_birth__icontains: "",
    place_of_birth__icontains: "",
    phone_number__icontains: "",
    personal_number_mvd__icontains: "",
    passport_number__icontains: "",
    passport_issue_date__gte: "",
    passport_issue_date__lte: "",
    passport_validity_period__gte: "",
    passport_validity_period__lte: "",
    passport_issue_authority: "",
    passport_issue_authority__in: "",
    identification_number__icontains: "",
    subdivision: "",
    subdivision__in: "",
    current_rank: "",
    current_rank__in: "",
    current_position: "",
    current_position__in: "",
  })
}
export const globalEmployeeAPIInstance = getEmployeeAPIInstance()
