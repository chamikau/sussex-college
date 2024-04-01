import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4de825aa = () => interopDefault(import('..\\pages\\admin\\approval.vue' /* webpackChunkName: "pages/admin/approval" */))
const _0046a609 = () => interopDefault(import('..\\pages\\admin\\approval\\blocked-list.vue' /* webpackChunkName: "pages/admin/approval/blocked-list" */))
const _112d2284 = () => interopDefault(import('..\\pages\\admin\\approval\\pending-list.vue' /* webpackChunkName: "pages/admin/approval/pending-list" */))
const _935cd66e = () => interopDefault(import('..\\pages\\admin\\approval\\verified-list.vue' /* webpackChunkName: "pages/admin/approval/verified-list" */))
const _1fc1257e = () => interopDefault(import('..\\pages\\admin\\companies\\index.vue' /* webpackChunkName: "pages/admin/companies/index" */))
const _1d0704ef = () => interopDefault(import('..\\pages\\admin\\confirm-password.vue' /* webpackChunkName: "pages/admin/confirm-password" */))
const _739ad9a3 = () => interopDefault(import('..\\pages\\admin\\course-applicant-lists\\index.vue' /* webpackChunkName: "pages/admin/course-applicant-lists/index" */))
const _395a8f41 = () => interopDefault(import('..\\pages\\admin\\courses\\index.vue' /* webpackChunkName: "pages/admin/courses/index" */))
const _acffd286 = () => interopDefault(import('..\\pages\\admin\\dashboard.vue' /* webpackChunkName: "pages/admin/dashboard" */))
const _60f857b9 = () => interopDefault(import('..\\pages\\admin\\document-list.vue' /* webpackChunkName: "pages/admin/document-list" */))
const _45391f45 = () => interopDefault(import('..\\pages\\admin\\document-list\\achievements\\index.vue' /* webpackChunkName: "pages/admin/document-list/achievements/index" */))
const _4b5d7dfe = () => interopDefault(import('..\\pages\\admin\\document-list\\educations\\index.vue' /* webpackChunkName: "pages/admin/document-list/educations/index" */))
const _0699de29 = () => interopDefault(import('..\\pages\\admin\\document-list\\personal\\index.vue' /* webpackChunkName: "pages/admin/document-list/personal/index" */))
const _5741b8a2 = () => interopDefault(import('..\\pages\\admin\\document-list\\projects\\index.vue' /* webpackChunkName: "pages/admin/document-list/projects/index" */))
const _3eeff921 = () => interopDefault(import('..\\pages\\admin\\document-list\\references\\index.vue' /* webpackChunkName: "pages/admin/document-list/references/index" */))
const _58a971b6 = () => interopDefault(import('..\\pages\\admin\\document-list\\work-experience\\index.vue' /* webpackChunkName: "pages/admin/document-list/work-experience/index" */))
const _4f70e782 = () => interopDefault(import('..\\pages\\admin\\event-applicant-lists\\index.vue' /* webpackChunkName: "pages/admin/event-applicant-lists/index" */))
const _653c5f42 = () => interopDefault(import('..\\pages\\admin\\events\\index.vue' /* webpackChunkName: "pages/admin/events/index" */))
const _7ec643eb = () => interopDefault(import('..\\pages\\admin\\feedbacks\\index.vue' /* webpackChunkName: "pages/admin/feedbacks/index" */))
const _3a3a083f = () => interopDefault(import('..\\pages\\admin\\job-applicant-lists\\index.vue' /* webpackChunkName: "pages/admin/job-applicant-lists/index" */))
const _02a107b6 = () => interopDefault(import('..\\pages\\admin\\jobs\\index.vue' /* webpackChunkName: "pages/admin/jobs/index" */))
const _4356ac32 = () => interopDefault(import('..\\pages\\admin\\mentors\\index.vue' /* webpackChunkName: "pages/admin/mentors/index" */))
const _2432cd88 = () => interopDefault(import('..\\pages\\admin\\news\\index.vue' /* webpackChunkName: "pages/admin/news/index" */))
const _5f199eba = () => interopDefault(import('..\\pages\\admin\\old-organizations.vue' /* webpackChunkName: "pages/admin/old-organizations" */))
const _0f101dce = () => interopDefault(import('..\\pages\\admin\\organizations\\index.vue' /* webpackChunkName: "pages/admin/organizations/index" */))
const _0459d392 = () => interopDefault(import('..\\pages\\admin\\profile.vue' /* webpackChunkName: "pages/admin/profile" */))
const _e7f5e452 = () => interopDefault(import('..\\pages\\admin\\profile\\2fa\\index.vue' /* webpackChunkName: "pages/admin/profile/2fa/index" */))
const _f78fb774 = () => interopDefault(import('..\\pages\\admin\\profile\\general.vue' /* webpackChunkName: "pages/admin/profile/general" */))
const _5178762a = () => interopDefault(import('..\\pages\\admin\\profile\\invitations\\index.vue' /* webpackChunkName: "pages/admin/profile/invitations/index" */))
const _628fb8a6 = () => interopDefault(import('..\\pages\\admin\\profile\\password.vue' /* webpackChunkName: "pages/admin/profile/password" */))
const _60678b8a = () => interopDefault(import('..\\pages\\admin\\settings.vue' /* webpackChunkName: "pages/admin/settings" */))
const _0f9d59a7 = () => interopDefault(import('..\\pages\\admin\\settings\\collections\\index.vue' /* webpackChunkName: "pages/admin/settings/collections/index" */))
const _59663edc = () => interopDefault(import('..\\pages\\admin\\settings\\consultations\\index.vue' /* webpackChunkName: "pages/admin/settings/consultations/index" */))
const _bf7d4658 = () => interopDefault(import('..\\pages\\admin\\settings\\products\\index.vue' /* webpackChunkName: "pages/admin/settings/products/index" */))
const _b337b602 = () => interopDefault(import('..\\pages\\admin\\settings\\roles\\index.vue' /* webpackChunkName: "pages/admin/settings/roles/index" */))
const _294abdff = () => interopDefault(import('..\\pages\\admin\\settings\\tags\\index.vue' /* webpackChunkName: "pages/admin/settings/tags/index" */))
const _bbc38e58 = () => interopDefault(import('..\\pages\\admin\\settings\\users\\index.vue' /* webpackChunkName: "pages/admin/settings/users/index" */))
const _0bc225f7 = () => interopDefault(import('..\\pages\\admin\\settings\\collections\\create.vue' /* webpackChunkName: "pages/admin/settings/collections/create" */))
const _83f90728 = () => interopDefault(import('..\\pages\\admin\\settings\\consultations\\create.vue' /* webpackChunkName: "pages/admin/settings/consultations/create" */))
const _e0c2ef2c = () => interopDefault(import('..\\pages\\admin\\settings\\products\\create.vue' /* webpackChunkName: "pages/admin/settings/products/create" */))
const _4dd4c59f = () => interopDefault(import('..\\pages\\admin\\settings\\roles\\create.vue' /* webpackChunkName: "pages/admin/settings/roles/create" */))
const _27c14c9f = () => interopDefault(import('..\\pages\\admin\\settings\\tags\\create.vue' /* webpackChunkName: "pages/admin/settings/tags/create" */))
const _5cfd1187 = () => interopDefault(import('..\\pages\\admin\\settings\\users\\invitation.vue' /* webpackChunkName: "pages/admin/settings/users/invitation" */))
const _c398cc62 = () => interopDefault(import('..\\pages\\admin\\settings\\collections\\_id.vue' /* webpackChunkName: "pages/admin/settings/collections/_id" */))
const _d88a1070 = () => interopDefault(import('..\\pages\\admin\\settings\\consultations\\_id\\index.vue' /* webpackChunkName: "pages/admin/settings/consultations/_id/index" */))
const _2f2ef788 = () => interopDefault(import('..\\pages\\admin\\settings\\products\\_id.vue' /* webpackChunkName: "pages/admin/settings/products/_id" */))
const _7a655b27 = () => interopDefault(import('..\\pages\\admin\\settings\\roles\\_id.vue' /* webpackChunkName: "pages/admin/settings/roles/_id" */))
const _efc397b2 = () => interopDefault(import('..\\pages\\admin\\settings\\tags\\_id.vue' /* webpackChunkName: "pages/admin/settings/tags/_id" */))
const _33cc603c = () => interopDefault(import('..\\pages\\admin\\settings\\users\\_id.vue' /* webpackChunkName: "pages/admin/settings/users/_id" */))
const _b2c47784 = () => interopDefault(import('..\\pages\\admin\\settings\\consultations\\_id\\form.vue' /* webpackChunkName: "pages/admin/settings/consultations/_id/form" */))
const _641c8523 = () => interopDefault(import('..\\pages\\admin\\students\\index.vue' /* webpackChunkName: "pages/admin/students/index" */))
const _a8ed27f4 = () => interopDefault(import('..\\pages\\admin\\auth\\forgot-password.vue' /* webpackChunkName: "pages/admin/auth/forgot-password" */))
const _5b6776aa = () => interopDefault(import('..\\pages\\admin\\auth\\login.vue' /* webpackChunkName: "pages/admin/auth/login" */))
const _7ec4d730 = () => interopDefault(import('..\\pages\\admin\\auth\\reset-password.vue' /* webpackChunkName: "pages/admin/auth/reset-password" */))
const _5de14ba7 = () => interopDefault(import('..\\pages\\admin\\auth\\signup.vue' /* webpackChunkName: "pages/admin/auth/signup" */))
const _2e187e15 = () => interopDefault(import('..\\pages\\admin\\auth\\two-factor-challenge.vue' /* webpackChunkName: "pages/admin/auth/two-factor-challenge" */))
const _27ef5506 = () => interopDefault(import('..\\pages\\admin\\auth\\two-factor-challenge-recovery.vue' /* webpackChunkName: "pages/admin/auth/two-factor-challenge-recovery" */))
const _9a3187f6 = () => interopDefault(import('..\\pages\\admin\\course-applicant-lists\\course-application-view.vue' /* webpackChunkName: "pages/admin/course-applicant-lists/course-application-view" */))
const _a91e6778 = () => interopDefault(import('..\\pages\\admin\\course-applicant-lists\\course-application-view\\_id\\certifications\\index.vue' /* webpackChunkName: "pages/admin/course-applicant-lists/course-application-view/_id/certifications/index" */))
const _1082489c = () => interopDefault(import('..\\pages\\admin\\course-applicant-lists\\course-application-view\\_id\\educations\\index.vue' /* webpackChunkName: "pages/admin/course-applicant-lists/course-application-view/_id/educations/index" */))
const _50938ab3 = () => interopDefault(import('..\\pages\\admin\\course-applicant-lists\\course-application-view\\_id\\general.vue' /* webpackChunkName: "pages/admin/course-applicant-lists/course-application-view/_id/general" */))
const _42801e56 = () => interopDefault(import('..\\pages\\admin\\course-applicant-lists\\course-application-view\\_id\\hobbies-and-list.vue' /* webpackChunkName: "pages/admin/course-applicant-lists/course-application-view/_id/hobbies-and-list" */))
const _c5b7433a = () => interopDefault(import('..\\pages\\admin\\course-applicant-lists\\course-application-view\\_id\\projects\\index.vue' /* webpackChunkName: "pages/admin/course-applicant-lists/course-application-view/_id/projects/index" */))
const _25443528 = () => interopDefault(import('..\\pages\\admin\\course-applicant-lists\\course-application-view\\_id\\certifications\\_id\\general.vue' /* webpackChunkName: "pages/admin/course-applicant-lists/course-application-view/_id/certifications/_id/general" */))
const _bc9b8384 = () => interopDefault(import('..\\pages\\admin\\course-applicant-lists\\course-application-view\\_id\\educations\\_id\\general.vue' /* webpackChunkName: "pages/admin/course-applicant-lists/course-application-view/_id/educations/_id/general" */))
const _3c26826d = () => interopDefault(import('..\\pages\\admin\\course-applicant-lists\\course-application-view\\_id\\projects\\_id\\general.vue' /* webpackChunkName: "pages/admin/course-applicant-lists/course-application-view/_id/projects/_id/general" */))
const _7b29487b = () => interopDefault(import('..\\pages\\admin\\courses\\create-course.vue' /* webpackChunkName: "pages/admin/courses/create-course" */))
const _3739b506 = () => interopDefault(import('..\\pages\\admin\\courses\\create-course\\general.vue' /* webpackChunkName: "pages/admin/courses/create-course/general" */))
const _3bb4308e = () => interopDefault(import('..\\pages\\admin\\courses\\create-course\\_id\\contents\\index.vue' /* webpackChunkName: "pages/admin/courses/create-course/_id/contents/index" */))
const _63a9a53d = () => interopDefault(import('..\\pages\\admin\\courses\\create-course\\_id\\description.vue' /* webpackChunkName: "pages/admin/courses/create-course/_id/description" */))
const _eb694bb6 = () => interopDefault(import('..\\pages\\admin\\courses\\create-course\\_id\\contents\\create.vue' /* webpackChunkName: "pages/admin/courses/create-course/_id/contents/create" */))
const _2aa42752 = () => interopDefault(import('..\\pages\\admin\\courses\\create-course\\_id\\contents\\_id\\general.vue' /* webpackChunkName: "pages/admin/courses/create-course/_id/contents/_id/general" */))
const _cd9c1f26 = () => interopDefault(import('..\\pages\\admin\\courses\\edit-course.vue' /* webpackChunkName: "pages/admin/courses/edit-course" */))
const _1faec4dc = () => interopDefault(import('..\\pages\\admin\\courses\\edit-course\\_id\\edit-contents\\index.vue' /* webpackChunkName: "pages/admin/courses/edit-course/_id/edit-contents/index" */))
const _3536691b = () => interopDefault(import('..\\pages\\admin\\courses\\edit-course\\_id\\general.vue' /* webpackChunkName: "pages/admin/courses/edit-course/_id/general" */))
const _2c626e59 = () => interopDefault(import('..\\pages\\admin\\courses\\edit-course\\_id\\student-applied-courses\\index.vue' /* webpackChunkName: "pages/admin/courses/edit-course/_id/student-applied-courses/index" */))
const _3c9f5f6c = () => interopDefault(import('..\\pages\\admin\\courses\\edit-course\\_id\\edit-contents\\create.vue' /* webpackChunkName: "pages/admin/courses/edit-course/_id/edit-contents/create" */))
const _8df6bf44 = () => interopDefault(import('..\\pages\\admin\\courses\\edit-course\\_id\\edit-contents\\_id\\general.vue' /* webpackChunkName: "pages/admin/courses/edit-course/_id/edit-contents/_id/general" */))
const _31ce5c56 = () => interopDefault(import('..\\pages\\admin\\event-applicant-lists\\event-application-view.vue' /* webpackChunkName: "pages/admin/event-applicant-lists/event-application-view" */))
const _a5eaebd8 = () => interopDefault(import('..\\pages\\admin\\event-applicant-lists\\event-application-view\\_id\\certifications\\index.vue' /* webpackChunkName: "pages/admin/event-applicant-lists/event-application-view/_id/certifications/index" */))
const _6d000182 = () => interopDefault(import('..\\pages\\admin\\event-applicant-lists\\event-application-view\\_id\\educations\\index.vue' /* webpackChunkName: "pages/admin/event-applicant-lists/event-application-view/_id/educations/index" */))
const _dbba96fa = () => interopDefault(import('..\\pages\\admin\\event-applicant-lists\\event-application-view\\_id\\general.vue' /* webpackChunkName: "pages/admin/event-applicant-lists/event-application-view/_id/general" */))
const _deca02f4 = () => interopDefault(import('..\\pages\\admin\\event-applicant-lists\\event-application-view\\_id\\hobbies-and-list.vue' /* webpackChunkName: "pages/admin/event-applicant-lists/event-application-view/_id/hobbies-and-list" */))
const _4d14b833 = () => interopDefault(import('..\\pages\\admin\\event-applicant-lists\\event-application-view\\_id\\projects\\index.vue' /* webpackChunkName: "pages/admin/event-applicant-lists/event-application-view/_id/projects/index" */))
const _42b9fd9c = () => interopDefault(import('..\\pages\\admin\\event-applicant-lists\\event-application-view\\_id\\certifications\\_id\\general.vue' /* webpackChunkName: "pages/admin/event-applicant-lists/event-application-view/_id/certifications/_id/general" */))
const _387c2324 = () => interopDefault(import('..\\pages\\admin\\event-applicant-lists\\event-application-view\\_id\\educations\\_id\\general.vue' /* webpackChunkName: "pages/admin/event-applicant-lists/event-application-view/_id/educations/_id/general" */))
const _6dc47e9d = () => interopDefault(import('..\\pages\\admin\\event-applicant-lists\\event-application-view\\_id\\projects\\_id\\general.vue' /* webpackChunkName: "pages/admin/event-applicant-lists/event-application-view/_id/projects/_id/general" */))
const _6a03d3bc = () => interopDefault(import('..\\pages\\admin\\events\\create.vue' /* webpackChunkName: "pages/admin/events/create" */))
const _d6303e6e = () => interopDefault(import('..\\pages\\admin\\events\\create-event.vue' /* webpackChunkName: "pages/admin/events/create-event" */))
const _2c1ff622 = () => interopDefault(import('..\\pages\\admin\\events\\create-event\\general.vue' /* webpackChunkName: "pages/admin/events/create-event/general" */))
const _c447f3ea = () => interopDefault(import('..\\pages\\admin\\events\\create-event\\_id\\description.vue' /* webpackChunkName: "pages/admin/events/create-event/_id/description" */))
const _0d67d435 = () => interopDefault(import('..\\pages\\admin\\job-applicant-lists\\job-application-view.vue' /* webpackChunkName: "pages/admin/job-applicant-lists/job-application-view" */))
const _74983c74 = () => interopDefault(import('..\\pages\\admin\\job-applicant-lists\\job-application-view\\_id\\certifications\\index.vue' /* webpackChunkName: "pages/admin/job-applicant-lists/job-application-view/_id/certifications/index" */))
const _4905e3e2 = () => interopDefault(import('..\\pages\\admin\\job-applicant-lists\\job-application-view\\_id\\educations\\index.vue' /* webpackChunkName: "pages/admin/job-applicant-lists/job-application-view/_id/educations/index" */))
const _6b4e0ee3 = () => interopDefault(import('..\\pages\\admin\\job-applicant-lists\\job-application-view\\_id\\general.vue' /* webpackChunkName: "pages/admin/job-applicant-lists/job-application-view/_id/general" */))
const _451f5026 = () => interopDefault(import('..\\pages\\admin\\job-applicant-lists\\job-application-view\\_id\\hobbies-and-list.vue' /* webpackChunkName: "pages/admin/job-applicant-lists/job-application-view/_id/hobbies-and-list" */))
const _73efb293 = () => interopDefault(import('..\\pages\\admin\\job-applicant-lists\\job-application-view\\_id\\projects\\index.vue' /* webpackChunkName: "pages/admin/job-applicant-lists/job-application-view/_id/projects/index" */))
const _4f9e4188 = () => interopDefault(import('..\\pages\\admin\\job-applicant-lists\\job-application-view\\_id\\certifications\\_id\\general.vue' /* webpackChunkName: "pages/admin/job-applicant-lists/job-application-view/_id/certifications/_id/general" */))
const _262aa00e = () => interopDefault(import('..\\pages\\admin\\job-applicant-lists\\job-application-view\\_id\\educations\\_id\\general.vue' /* webpackChunkName: "pages/admin/job-applicant-lists/job-application-view/_id/educations/_id/general" */))
const _d025cf86 = () => interopDefault(import('..\\pages\\admin\\job-applicant-lists\\job-application-view\\_id\\projects\\_id\\general.vue' /* webpackChunkName: "pages/admin/job-applicant-lists/job-application-view/_id/projects/_id/general" */))
const _1f5a7db0 = () => interopDefault(import('..\\pages\\admin\\mentors\\add-mentor.vue' /* webpackChunkName: "pages/admin/mentors/add-mentor" */))
const _9f40c0b8 = () => interopDefault(import('..\\pages\\admin\\mentors\\add-mentor\\create.vue' /* webpackChunkName: "pages/admin/mentors/add-mentor/create" */))
const _e2743056 = () => interopDefault(import('..\\pages\\admin\\mentors\\add-mentor\\_id\\educations\\index.vue' /* webpackChunkName: "pages/admin/mentors/add-mentor/_id/educations/index" */))
const _16d5fb43 = () => interopDefault(import('..\\pages\\admin\\mentors\\add-mentor\\_id\\sessions\\index.vue' /* webpackChunkName: "pages/admin/mentors/add-mentor/_id/sessions/index" */))
const _97c0f75a = () => interopDefault(import('..\\pages\\admin\\mentors\\add-mentor\\_id\\work-experiences\\index.vue' /* webpackChunkName: "pages/admin/mentors/add-mentor/_id/work-experiences/index" */))
const _71ab5d89 = () => interopDefault(import('..\\pages\\admin\\mentors\\add-mentor\\_id\\educations\\create.vue' /* webpackChunkName: "pages/admin/mentors/add-mentor/_id/educations/create" */))
const _28c4904a = () => interopDefault(import('..\\pages\\admin\\mentors\\add-mentor\\_id\\sessions\\create.vue' /* webpackChunkName: "pages/admin/mentors/add-mentor/_id/sessions/create" */))
const _10f55e6a = () => interopDefault(import('..\\pages\\admin\\mentors\\add-mentor\\_id\\work-experiences\\create.vue' /* webpackChunkName: "pages/admin/mentors/add-mentor/_id/work-experiences/create" */))
const _26aed4bb = () => interopDefault(import('..\\pages\\admin\\mentors\\add-mentor\\_id\\educations\\_id\\general.vue' /* webpackChunkName: "pages/admin/mentors/add-mentor/_id/educations/_id/general" */))
const _7496ace6 = () => interopDefault(import('..\\pages\\admin\\mentors\\add-mentor\\_id\\sessions\\_id\\general.vue' /* webpackChunkName: "pages/admin/mentors/add-mentor/_id/sessions/_id/general" */))
const _5361ce7d = () => interopDefault(import('..\\pages\\admin\\mentors\\add-mentor\\_id\\work-experiences\\_id\\general.vue' /* webpackChunkName: "pages/admin/mentors/add-mentor/_id/work-experiences/_id/general" */))
const _16b51739 = () => interopDefault(import('..\\pages\\admin\\mentors\\edit-mentor.vue' /* webpackChunkName: "pages/admin/mentors/edit-mentor" */))
const _303b5ae6 = () => interopDefault(import('..\\pages\\admin\\mentors\\edit-mentor\\_id\\educations\\index.vue' /* webpackChunkName: "pages/admin/mentors/edit-mentor/_id/educations/index" */))
const _7e17bae7 = () => interopDefault(import('..\\pages\\admin\\mentors\\edit-mentor\\_id\\general.vue' /* webpackChunkName: "pages/admin/mentors/edit-mentor/_id/general" */))
const _030202d8 = () => interopDefault(import('..\\pages\\admin\\mentors\\edit-mentor\\_id\\sessions\\index.vue' /* webpackChunkName: "pages/admin/mentors/edit-mentor/_id/sessions/index" */))
const _cc86b2b8 = () => interopDefault(import('..\\pages\\admin\\mentors\\edit-mentor\\_id\\work-experiences\\index.vue' /* webpackChunkName: "pages/admin/mentors/edit-mentor/_id/work-experiences/index" */))
const _023766d0 = () => interopDefault(import('..\\pages\\admin\\mentors\\edit-mentor\\_id\\educations\\create.vue' /* webpackChunkName: "pages/admin/mentors/edit-mentor/_id/educations/create" */))
const _0dd5c2ac = () => interopDefault(import('..\\pages\\admin\\mentors\\edit-mentor\\_id\\sessions\\create.vue' /* webpackChunkName: "pages/admin/mentors/edit-mentor/_id/sessions/create" */))
const _74e70ecc = () => interopDefault(import('..\\pages\\admin\\mentors\\edit-mentor\\_id\\work-experiences\\create.vue' /* webpackChunkName: "pages/admin/mentors/edit-mentor/_id/work-experiences/create" */))
const _169406ec = () => interopDefault(import('..\\pages\\admin\\mentors\\edit-mentor\\_id\\educations\\_id\\general.vue' /* webpackChunkName: "pages/admin/mentors/edit-mentor/_id/educations/_id/general" */))
const _1fb1791c = () => interopDefault(import('..\\pages\\admin\\mentors\\edit-mentor\\_id\\sessions\\_id\\general.vue' /* webpackChunkName: "pages/admin/mentors/edit-mentor/_id/sessions/_id/general" */))
const _19599f0c = () => interopDefault(import('..\\pages\\admin\\mentors\\edit-mentor\\_id\\work-experiences\\_id\\general.vue' /* webpackChunkName: "pages/admin/mentors/edit-mentor/_id/work-experiences/_id/general" */))
const _37d55a16 = () => interopDefault(import('..\\pages\\admin\\news\\create-news-test.vue' /* webpackChunkName: "pages/admin/news/create-news-test" */))
const _00b3f061 = () => interopDefault(import('..\\pages\\admin\\organizations\\invitations\\index.vue' /* webpackChunkName: "pages/admin/organizations/invitations/index" */))
const _6b7980d4 = () => interopDefault(import('..\\pages\\admin\\students\\skills-and-hobbies\\index.vue' /* webpackChunkName: "pages/admin/students/skills-and-hobbies/index" */))
const _f1d39d94 = () => interopDefault(import('..\\pages\\admin\\students\\student-view.vue' /* webpackChunkName: "pages/admin/students/student-view" */))
const _26ce0416 = () => interopDefault(import('..\\pages\\admin\\students\\student-view\\_id\\certifications\\index.vue' /* webpackChunkName: "pages/admin/students/student-view/_id/certifications/index" */))
const _28dd8de3 = () => interopDefault(import('..\\pages\\admin\\students\\student-view\\_id\\educations\\index.vue' /* webpackChunkName: "pages/admin/students/student-view/_id/educations/index" */))
const _6bf11624 = () => interopDefault(import('..\\pages\\admin\\students\\student-view\\_id\\general.vue' /* webpackChunkName: "pages/admin/students/student-view/_id/general" */))
const _5499e205 = () => interopDefault(import('..\\pages\\admin\\students\\student-view\\_id\\hobbies-and-list.vue' /* webpackChunkName: "pages/admin/students/student-view/_id/hobbies-and-list" */))
const _b4082e58 = () => interopDefault(import('..\\pages\\admin\\students\\student-view\\_id\\projects\\index.vue' /* webpackChunkName: "pages/admin/students/student-view/_id/projects/index" */))
const _7b7c9a9b = () => interopDefault(import('..\\pages\\admin\\students\\student-view\\_id\\certifications\\_id\\general.vue' /* webpackChunkName: "pages/admin/students/student-view/_id/certifications/_id/general" */))
const _0620e2ed = () => interopDefault(import('..\\pages\\admin\\students\\student-view\\_id\\educations\\_id\\general.vue' /* webpackChunkName: "pages/admin/students/student-view/_id/educations/_id/general" */))
const _200486dc = () => interopDefault(import('..\\pages\\admin\\students\\student-view\\_id\\projects\\_id\\general.vue' /* webpackChunkName: "pages/admin/students/student-view/_id/projects/_id/general" */))
const _244a3e9e = () => interopDefault(import('..\\pages\\admin\\news\\create-news\\general.vue' /* webpackChunkName: "pages/admin/news/create-news/general" */))
const _34dbec00 = () => interopDefault(import('..\\pages\\admin\\organizations\\company\\create.vue' /* webpackChunkName: "pages/admin/organizations/company/create" */))
const _c02e3fac = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _6152611a = () => interopDefault(import('..\\pages\\admin\\events\\edit-event\\_id.vue' /* webpackChunkName: "pages/admin/events/edit-event/_id" */))
const _889b87ce = () => interopDefault(import('..\\pages\\admin\\events\\edit-event\\_id\\description.vue' /* webpackChunkName: "pages/admin/events/edit-event/_id/description" */))
const _0b31f585 = () => interopDefault(import('..\\pages\\admin\\events\\edit-event\\_id\\general.vue' /* webpackChunkName: "pages/admin/events/edit-event/_id/general" */))
const _10c43e14 = () => interopDefault(import('..\\pages\\admin\\events\\edit-event\\_id\\student-applied-events\\index.vue' /* webpackChunkName: "pages/admin/events/edit-event/_id/student-applied-events/index" */))
const _0be92d9e = () => interopDefault(import('..\\pages\\admin\\news\\edit-news\\_id-test.vue' /* webpackChunkName: "pages/admin/news/edit-news/_id-test" */))
const _3b1f4b34 = () => interopDefault(import('..\\pages\\admin\\organizations\\company\\_id.vue' /* webpackChunkName: "pages/admin/organizations/company/_id" */))
const _7db37d88 = () => interopDefault(import('..\\pages\\admin\\news\\create-news\\_id\\description.vue' /* webpackChunkName: "pages/admin/news/create-news/_id/description" */))
const _1f2f2a24 = () => interopDefault(import('..\\pages\\admin\\news\\edit-news\\_id\\description.vue' /* webpackChunkName: "pages/admin/news/edit-news/_id/description" */))
const _eeda524c = () => interopDefault(import('..\\pages\\admin\\news\\edit-news\\_id\\general.vue' /* webpackChunkName: "pages/admin/news/edit-news/_id/general" */))
const _7a59165a = () => interopDefault(import('..\\pages\\admin\\companies\\_id\\application.vue' /* webpackChunkName: "pages/admin/companies/_id/application" */))
const _263498ae = () => interopDefault(import('..\\pages\\admin\\events\\_id\\general.vue' /* webpackChunkName: "pages/admin/events/_id/general" */))
const _0e38a1cd = () => interopDefault(import('..\\pages\\admin\\feedbacks\\_id\\application.vue' /* webpackChunkName: "pages/admin/feedbacks/_id/application" */))
const _4d1be153 = () => interopDefault(import('..\\pages\\admin\\jobs\\_id\\application.vue' /* webpackChunkName: "pages/admin/jobs/_id/application" */))
const _214ea0b0 = () => interopDefault(import('..\\pages\\admin\\news\\_id\\general.vue' /* webpackChunkName: "pages/admin/news/_id/general" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin/approval",
    component: _4de825aa,
    name: "admin-approval",
    children: [{
      path: "blocked-list",
      component: _0046a609,
      name: "admin-approval-blocked-list"
    }, {
      path: "pending-list",
      component: _112d2284,
      name: "admin-approval-pending-list"
    }, {
      path: "verified-list",
      component: _935cd66e,
      name: "admin-approval-verified-list"
    }]
  }, {
    path: "/admin/companies",
    component: _1fc1257e,
    name: "admin-companies"
  }, {
    path: "/admin/confirm-password",
    component: _1d0704ef,
    name: "admin-confirm-password"
  }, {
    path: "/admin/course-applicant-lists",
    component: _739ad9a3,
    name: "admin-course-applicant-lists"
  }, {
    path: "/admin/courses",
    component: _395a8f41,
    name: "admin-courses"
  }, {
    path: "/admin/dashboard",
    component: _acffd286,
    name: "admin-dashboard"
  }, {
    path: "/admin/document-list",
    component: _60f857b9,
    name: "admin-document-list",
    children: [{
      path: "achievements",
      component: _45391f45,
      name: "admin-document-list-achievements"
    }, {
      path: "educations",
      component: _4b5d7dfe,
      name: "admin-document-list-educations"
    }, {
      path: "personal",
      component: _0699de29,
      name: "admin-document-list-personal"
    }, {
      path: "projects",
      component: _5741b8a2,
      name: "admin-document-list-projects"
    }, {
      path: "references",
      component: _3eeff921,
      name: "admin-document-list-references"
    }, {
      path: "work-experience",
      component: _58a971b6,
      name: "admin-document-list-work-experience"
    }]
  }, {
    path: "/admin/event-applicant-lists",
    component: _4f70e782,
    name: "admin-event-applicant-lists"
  }, {
    path: "/admin/events",
    component: _653c5f42,
    name: "admin-events"
  }, {
    path: "/admin/feedbacks",
    component: _7ec643eb,
    name: "admin-feedbacks"
  }, {
    path: "/admin/job-applicant-lists",
    component: _3a3a083f,
    name: "admin-job-applicant-lists"
  }, {
    path: "/admin/jobs",
    component: _02a107b6,
    name: "admin-jobs"
  }, {
    path: "/admin/mentors",
    component: _4356ac32,
    name: "admin-mentors"
  }, {
    path: "/admin/news",
    component: _2432cd88,
    name: "admin-news"
  }, {
    path: "/admin/old-organizations",
    component: _5f199eba,
    name: "admin-old-organizations"
  }, {
    path: "/admin/organizations",
    component: _0f101dce,
    name: "admin-organizations"
  }, {
    path: "/admin/profile",
    component: _0459d392,
    name: "admin-profile",
    children: [{
      path: "2fa",
      component: _e7f5e452,
      name: "admin-profile-2fa"
    }, {
      path: "general",
      component: _f78fb774,
      name: "admin-profile-general"
    }, {
      path: "invitations",
      component: _5178762a,
      name: "admin-profile-invitations"
    }, {
      path: "password",
      component: _628fb8a6,
      name: "admin-profile-password"
    }]
  }, {
    path: "/admin/settings",
    component: _60678b8a,
    name: "admin-settings",
    children: [{
      path: "collections",
      component: _0f9d59a7,
      name: "admin-settings-collections"
    }, {
      path: "consultations",
      component: _59663edc,
      name: "admin-settings-consultations"
    }, {
      path: "products",
      component: _bf7d4658,
      name: "admin-settings-products"
    }, {
      path: "roles",
      component: _b337b602,
      name: "admin-settings-roles"
    }, {
      path: "tags",
      component: _294abdff,
      name: "admin-settings-tags"
    }, {
      path: "users",
      component: _bbc38e58,
      name: "admin-settings-users"
    }, {
      path: "collections/create",
      component: _0bc225f7,
      name: "admin-settings-collections-create"
    }, {
      path: "consultations/create",
      component: _83f90728,
      name: "admin-settings-consultations-create"
    }, {
      path: "products/create",
      component: _e0c2ef2c,
      name: "admin-settings-products-create"
    }, {
      path: "roles/create",
      component: _4dd4c59f,
      name: "admin-settings-roles-create"
    }, {
      path: "tags/create",
      component: _27c14c9f,
      name: "admin-settings-tags-create"
    }, {
      path: "users/invitation",
      component: _5cfd1187,
      name: "admin-settings-users-invitation"
    }, {
      path: "collections/:id",
      component: _c398cc62,
      name: "admin-settings-collections-id"
    }, {
      path: "consultations/:id",
      component: _d88a1070,
      name: "admin-settings-consultations-id"
    }, {
      path: "products/:id",
      component: _2f2ef788,
      name: "admin-settings-products-id"
    }, {
      path: "roles/:id",
      component: _7a655b27,
      name: "admin-settings-roles-id"
    }, {
      path: "tags/:id",
      component: _efc397b2,
      name: "admin-settings-tags-id"
    }, {
      path: "users/:id",
      component: _33cc603c,
      name: "admin-settings-users-id"
    }, {
      path: "consultations/:id/form",
      component: _b2c47784,
      name: "admin-settings-consultations-id-form"
    }]
  }, {
    path: "/admin/students",
    component: _641c8523,
    name: "admin-students"
  }, {
    path: "/admin/auth/forgot-password",
    component: _a8ed27f4,
    name: "admin-auth-forgot-password"
  }, {
    path: "/admin/auth/login",
    component: _5b6776aa,
    name: "admin-auth-login"
  }, {
    path: "/admin/auth/reset-password",
    component: _7ec4d730,
    name: "admin-auth-reset-password"
  }, {
    path: "/admin/auth/signup",
    component: _5de14ba7,
    name: "admin-auth-signup"
  }, {
    path: "/admin/auth/two-factor-challenge",
    component: _2e187e15,
    name: "admin-auth-two-factor-challenge"
  }, {
    path: "/admin/auth/two-factor-challenge-recovery",
    component: _27ef5506,
    name: "admin-auth-two-factor-challenge-recovery"
  }, {
    path: "/admin/course-applicant-lists/course-application-view",
    component: _9a3187f6,
    name: "admin-course-applicant-lists-course-application-view",
    children: [{
      path: ":id?/certifications",
      component: _a91e6778,
      name: "admin-course-applicant-lists-course-application-view-id-certifications"
    }, {
      path: ":id?/educations",
      component: _1082489c,
      name: "admin-course-applicant-lists-course-application-view-id-educations"
    }, {
      path: ":id?/general",
      component: _50938ab3,
      name: "admin-course-applicant-lists-course-application-view-id-general"
    }, {
      path: ":id?/hobbies-and-list",
      component: _42801e56,
      name: "admin-course-applicant-lists-course-application-view-id-hobbies-and-list"
    }, {
      path: ":id?/projects",
      component: _c5b7433a,
      name: "admin-course-applicant-lists-course-application-view-id-projects"
    }, {
      path: ":id?/certifications/:id/general",
      component: _25443528,
      name: "admin-course-applicant-lists-course-application-view-id-certifications-id-general"
    }, {
      path: ":id?/educations/:id/general",
      component: _bc9b8384,
      name: "admin-course-applicant-lists-course-application-view-id-educations-id-general"
    }, {
      path: ":id?/projects/:id/general",
      component: _3c26826d,
      name: "admin-course-applicant-lists-course-application-view-id-projects-id-general"
    }]
  }, {
    path: "/admin/courses/create-course",
    component: _7b29487b,
    name: "admin-courses-create-course",
    children: [{
      path: "general",
      component: _3739b506,
      name: "admin-courses-create-course-general"
    }, {
      path: ":id?/contents",
      component: _3bb4308e,
      name: "admin-courses-create-course-id-contents"
    }, {
      path: ":id?/description",
      component: _63a9a53d,
      name: "admin-courses-create-course-id-description"
    }, {
      path: ":id?/contents/create",
      component: _eb694bb6,
      name: "admin-courses-create-course-id-contents-create"
    }, {
      path: ":id?/contents/:id/general",
      component: _2aa42752,
      name: "admin-courses-create-course-id-contents-id-general"
    }]
  }, {
    path: "/admin/courses/edit-course",
    component: _cd9c1f26,
    name: "admin-courses-edit-course",
    children: [{
      path: ":id?/edit-contents",
      component: _1faec4dc,
      name: "admin-courses-edit-course-id-edit-contents"
    }, {
      path: ":id?/general",
      component: _3536691b,
      name: "admin-courses-edit-course-id-general"
    }, {
      path: ":id?/student-applied-courses",
      component: _2c626e59,
      name: "admin-courses-edit-course-id-student-applied-courses"
    }, {
      path: ":id?/edit-contents/create",
      component: _3c9f5f6c,
      name: "admin-courses-edit-course-id-edit-contents-create"
    }, {
      path: ":id?/edit-contents/:id?/general",
      component: _8df6bf44,
      name: "admin-courses-edit-course-id-edit-contents-id-general"
    }]
  }, {
    path: "/admin/event-applicant-lists/event-application-view",
    component: _31ce5c56,
    name: "admin-event-applicant-lists-event-application-view",
    children: [{
      path: ":id?/certifications",
      component: _a5eaebd8,
      name: "admin-event-applicant-lists-event-application-view-id-certifications"
    }, {
      path: ":id?/educations",
      component: _6d000182,
      name: "admin-event-applicant-lists-event-application-view-id-educations"
    }, {
      path: ":id?/general",
      component: _dbba96fa,
      name: "admin-event-applicant-lists-event-application-view-id-general"
    }, {
      path: ":id?/hobbies-and-list",
      component: _deca02f4,
      name: "admin-event-applicant-lists-event-application-view-id-hobbies-and-list"
    }, {
      path: ":id?/projects",
      component: _4d14b833,
      name: "admin-event-applicant-lists-event-application-view-id-projects"
    }, {
      path: ":id?/certifications/:id/general",
      component: _42b9fd9c,
      name: "admin-event-applicant-lists-event-application-view-id-certifications-id-general"
    }, {
      path: ":id?/educations/:id/general",
      component: _387c2324,
      name: "admin-event-applicant-lists-event-application-view-id-educations-id-general"
    }, {
      path: ":id?/projects/:id/general",
      component: _6dc47e9d,
      name: "admin-event-applicant-lists-event-application-view-id-projects-id-general"
    }]
  }, {
    path: "/admin/events/create",
    component: _6a03d3bc,
    name: "admin-events-create"
  }, {
    path: "/admin/events/create-event",
    component: _d6303e6e,
    name: "admin-events-create-event",
    children: [{
      path: "general",
      component: _2c1ff622,
      name: "admin-events-create-event-general"
    }, {
      path: ":id?/description",
      component: _c447f3ea,
      name: "admin-events-create-event-id-description"
    }]
  }, {
    path: "/admin/job-applicant-lists/job-application-view",
    component: _0d67d435,
    name: "admin-job-applicant-lists-job-application-view",
    children: [{
      path: ":id?/certifications",
      component: _74983c74,
      name: "admin-job-applicant-lists-job-application-view-id-certifications"
    }, {
      path: ":id?/educations",
      component: _4905e3e2,
      name: "admin-job-applicant-lists-job-application-view-id-educations"
    }, {
      path: ":id?/general",
      component: _6b4e0ee3,
      name: "admin-job-applicant-lists-job-application-view-id-general"
    }, {
      path: ":id?/hobbies-and-list",
      component: _451f5026,
      name: "admin-job-applicant-lists-job-application-view-id-hobbies-and-list"
    }, {
      path: ":id?/projects",
      component: _73efb293,
      name: "admin-job-applicant-lists-job-application-view-id-projects"
    }, {
      path: ":id?/certifications/:id/general",
      component: _4f9e4188,
      name: "admin-job-applicant-lists-job-application-view-id-certifications-id-general"
    }, {
      path: ":id?/educations/:id/general",
      component: _262aa00e,
      name: "admin-job-applicant-lists-job-application-view-id-educations-id-general"
    }, {
      path: ":id?/projects/:id/general",
      component: _d025cf86,
      name: "admin-job-applicant-lists-job-application-view-id-projects-id-general"
    }]
  }, {
    path: "/admin/mentors/add-mentor",
    component: _1f5a7db0,
    name: "admin-mentors-add-mentor",
    children: [{
      path: "create",
      component: _9f40c0b8,
      name: "admin-mentors-add-mentor-create"
    }, {
      path: ":id?/educations",
      component: _e2743056,
      name: "admin-mentors-add-mentor-id-educations"
    }, {
      path: ":id?/sessions",
      component: _16d5fb43,
      name: "admin-mentors-add-mentor-id-sessions"
    }, {
      path: ":id?/work-experiences",
      component: _97c0f75a,
      name: "admin-mentors-add-mentor-id-work-experiences"
    }, {
      path: ":id?/educations/create",
      component: _71ab5d89,
      name: "admin-mentors-add-mentor-id-educations-create"
    }, {
      path: ":id?/sessions/create",
      component: _28c4904a,
      name: "admin-mentors-add-mentor-id-sessions-create"
    }, {
      path: ":id?/work-experiences/create",
      component: _10f55e6a,
      name: "admin-mentors-add-mentor-id-work-experiences-create"
    }, {
      path: ":id?/educations/:id/general",
      component: _26aed4bb,
      name: "admin-mentors-add-mentor-id-educations-id-general"
    }, {
      path: ":id?/sessions/:id/general",
      component: _7496ace6,
      name: "admin-mentors-add-mentor-id-sessions-id-general"
    }, {
      path: ":id?/work-experiences/:id?/general",
      component: _5361ce7d,
      name: "admin-mentors-add-mentor-id-work-experiences-id-general"
    }]
  }, {
    path: "/admin/mentors/edit-mentor",
    component: _16b51739,
    name: "admin-mentors-edit-mentor",
    children: [{
      path: ":id?/educations",
      component: _303b5ae6,
      name: "admin-mentors-edit-mentor-id-educations"
    }, {
      path: ":id?/general",
      component: _7e17bae7,
      name: "admin-mentors-edit-mentor-id-general"
    }, {
      path: ":id?/sessions",
      component: _030202d8,
      name: "admin-mentors-edit-mentor-id-sessions"
    }, {
      path: ":id?/work-experiences",
      component: _cc86b2b8,
      name: "admin-mentors-edit-mentor-id-work-experiences"
    }, {
      path: ":id?/educations/create",
      component: _023766d0,
      name: "admin-mentors-edit-mentor-id-educations-create"
    }, {
      path: ":id?/sessions/create",
      component: _0dd5c2ac,
      name: "admin-mentors-edit-mentor-id-sessions-create"
    }, {
      path: ":id?/work-experiences/create",
      component: _74e70ecc,
      name: "admin-mentors-edit-mentor-id-work-experiences-create"
    }, {
      path: ":id?/educations/:id/general",
      component: _169406ec,
      name: "admin-mentors-edit-mentor-id-educations-id-general"
    }, {
      path: ":id?/sessions/:id/general",
      component: _1fb1791c,
      name: "admin-mentors-edit-mentor-id-sessions-id-general"
    }, {
      path: ":id?/work-experiences/:id?/general",
      component: _19599f0c,
      name: "admin-mentors-edit-mentor-id-work-experiences-id-general"
    }]
  }, {
    path: "/admin/news/create-news-test",
    component: _37d55a16,
    name: "admin-news-create-news-test"
  }, {
    path: "/admin/organizations/invitations",
    component: _00b3f061,
    name: "admin-organizations-invitations"
  }, {
    path: "/admin/students/skills-and-hobbies",
    component: _6b7980d4,
    name: "admin-students-skills-and-hobbies"
  }, {
    path: "/admin/students/student-view",
    component: _f1d39d94,
    name: "admin-students-student-view",
    children: [{
      path: ":id?/certifications",
      component: _26ce0416,
      name: "admin-students-student-view-id-certifications"
    }, {
      path: ":id?/educations",
      component: _28dd8de3,
      name: "admin-students-student-view-id-educations"
    }, {
      path: ":id?/general",
      component: _6bf11624,
      name: "admin-students-student-view-id-general"
    }, {
      path: ":id?/hobbies-and-list",
      component: _5499e205,
      name: "admin-students-student-view-id-hobbies-and-list"
    }, {
      path: ":id?/projects",
      component: _b4082e58,
      name: "admin-students-student-view-id-projects"
    }, {
      path: ":id?/certifications/:id/general",
      component: _7b7c9a9b,
      name: "admin-students-student-view-id-certifications-id-general"
    }, {
      path: ":id?/educations/:id/general",
      component: _0620e2ed,
      name: "admin-students-student-view-id-educations-id-general"
    }, {
      path: ":id?/projects/:id/general",
      component: _200486dc,
      name: "admin-students-student-view-id-projects-id-general"
    }]
  }, {
    path: "/admin/news/create-news/general",
    component: _244a3e9e,
    name: "admin-news-create-news-general"
  }, {
    path: "/admin/organizations/company/create",
    component: _34dbec00,
    name: "admin-organizations-company-create"
  }, {
    path: "/",
    component: _c02e3fac,
    name: "index"
  }, {
    path: "/admin/events/edit-event/:id?",
    component: _6152611a,
    name: "admin-events-edit-event-id",
    children: [{
      path: "description",
      component: _889b87ce,
      name: "admin-events-edit-event-id-description"
    }, {
      path: "general",
      component: _0b31f585,
      name: "admin-events-edit-event-id-general"
    }, {
      path: "student-applied-events",
      component: _10c43e14,
      name: "admin-events-edit-event-id-student-applied-events"
    }]
  }, {
    path: "/admin/news/edit-news/:id-test?",
    component: _0be92d9e,
    name: "admin-news-edit-news-id-test"
  }, {
    path: "/admin/organizations/company/:id?",
    component: _3b1f4b34,
    name: "admin-organizations-company-id"
  }, {
    path: "/admin/news/create-news/:id?/description",
    component: _7db37d88,
    name: "admin-news-create-news-id-description"
  }, {
    path: "/admin/news/edit-news/:id?/description",
    component: _1f2f2a24,
    name: "admin-news-edit-news-id-description"
  }, {
    path: "/admin/news/edit-news/:id?/general",
    component: _eeda524c,
    name: "admin-news-edit-news-id-general"
  }, {
    path: "/admin/companies/:id/application",
    component: _7a59165a,
    name: "admin-companies-id-application"
  }, {
    path: "/admin/events/:id/general",
    component: _263498ae,
    name: "admin-events-id-general"
  }, {
    path: "/admin/feedbacks/:id/application",
    component: _0e38a1cd,
    name: "admin-feedbacks-id-application"
  }, {
    path: "/admin/jobs/:id/application",
    component: _4d1be153,
    name: "admin-jobs-id-application"
  }, {
    path: "/admin/news/:id/general",
    component: _214ea0b0,
    name: "admin-news-id-general"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
