import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _71e2163c = () => interopDefault(import('..\\pages\\admin\\approval.vue' /* webpackChunkName: "pages/admin/approval" */))
const _dc53197e = () => interopDefault(import('..\\pages\\admin\\approval\\blocked-list.vue' /* webpackChunkName: "pages/admin/approval/blocked-list" */))
const _ee0d8814 = () => interopDefault(import('..\\pages\\admin\\approval\\pending-list.vue' /* webpackChunkName: "pages/admin/approval/pending-list" */))
const _56bb6e91 = () => interopDefault(import('..\\pages\\admin\\approval\\verified-list.vue' /* webpackChunkName: "pages/admin/approval/verified-list" */))
const _50bd8694 = () => interopDefault(import('..\\pages\\admin\\companies\\index.vue' /* webpackChunkName: "pages/admin/companies/index" */))
const _5631c7b2 = () => interopDefault(import('..\\pages\\admin\\confirm-password.vue' /* webpackChunkName: "pages/admin/confirm-password" */))
const _4547852a = () => interopDefault(import('..\\pages\\admin\\course-applicant-lists\\index.vue' /* webpackChunkName: "pages/admin/course-applicant-lists/index" */))
const _7a471479 = () => interopDefault(import('..\\pages\\admin\\courses\\index.vue' /* webpackChunkName: "pages/admin/courses/index" */))
const _55332e85 = () => interopDefault(import('..\\pages\\admin\\dashboard.vue' /* webpackChunkName: "pages/admin/dashboard" */))
const _4a4a4b81 = () => interopDefault(import('..\\pages\\admin\\document-list.vue' /* webpackChunkName: "pages/admin/document-list" */))
const _1126d87d = () => interopDefault(import('..\\pages\\admin\\document-list\\achievements\\index.vue' /* webpackChunkName: "pages/admin/document-list/achievements/index" */))
const _2b582536 = () => interopDefault(import('..\\pages\\admin\\document-list\\educations\\index.vue' /* webpackChunkName: "pages/admin/document-list/educations/index" */))
const _55f6193e = () => interopDefault(import('..\\pages\\admin\\document-list\\personal\\index.vue' /* webpackChunkName: "pages/admin/document-list/personal/index" */))
const _ba6b8e32 = () => interopDefault(import('..\\pages\\admin\\document-list\\projects\\index.vue' /* webpackChunkName: "pages/admin/document-list/projects/index" */))
const _1eeaa059 = () => interopDefault(import('..\\pages\\admin\\document-list\\references\\index.vue' /* webpackChunkName: "pages/admin/document-list/references/index" */))
const _38d062ed = () => interopDefault(import('..\\pages\\admin\\document-list\\work-experience\\index.vue' /* webpackChunkName: "pages/admin/document-list/work-experience/index" */))
const _298feaba = () => interopDefault(import('..\\pages\\admin\\event-applicant-lists\\index.vue' /* webpackChunkName: "pages/admin/event-applicant-lists/index" */))
const _4e8e530a = () => interopDefault(import('..\\pages\\admin\\events\\index.vue' /* webpackChunkName: "pages/admin/events/index" */))
const _36a65b23 = () => interopDefault(import('..\\pages\\admin\\feedbacks\\index.vue' /* webpackChunkName: "pages/admin/feedbacks/index" */))
const _8f9f0d12 = () => interopDefault(import('..\\pages\\admin\\job-applicant-lists\\index.vue' /* webpackChunkName: "pages/admin/job-applicant-lists/index" */))
const _ec087c26 = () => interopDefault(import('..\\pages\\admin\\jobs\\index.vue' /* webpackChunkName: "pages/admin/jobs/index" */))
const _1f412f1f = () => interopDefault(import('..\\pages\\admin\\mentors\\index.vue' /* webpackChunkName: "pages/admin/mentors/index" */))
const _a101d960 = () => interopDefault(import('..\\pages\\admin\\news\\index.vue' /* webpackChunkName: "pages/admin/news/index" */))
const _1496006b = () => interopDefault(import('..\\pages\\admin\\old-organizations.vue' /* webpackChunkName: "pages/admin/old-organizations" */))
const _0789ac51 = () => interopDefault(import('..\\pages\\admin\\organizations\\index.vue' /* webpackChunkName: "pages/admin/organizations/index" */))
const _00003d5a = () => interopDefault(import('..\\pages\\admin\\profile.vue' /* webpackChunkName: "pages/admin/profile" */))
const _52b30b9f = () => interopDefault(import('..\\pages\\admin\\profile\\2fa\\index.vue' /* webpackChunkName: "pages/admin/profile/2fa/index" */))
const _3c183b7e = () => interopDefault(import('..\\pages\\admin\\profile\\general.vue' /* webpackChunkName: "pages/admin/profile/general" */))
const _db5fa81c = () => interopDefault(import('..\\pages\\admin\\profile\\invitations\\index.vue' /* webpackChunkName: "pages/admin/profile/invitations/index" */))
const _12daf375 = () => interopDefault(import('..\\pages\\admin\\profile\\password.vue' /* webpackChunkName: "pages/admin/profile/password" */))
const _4ce34a7c = () => interopDefault(import('..\\pages\\admin\\settings.vue' /* webpackChunkName: "pages/admin/settings" */))
const _2c874642 = () => interopDefault(import('..\\pages\\admin\\settings\\collections\\index.vue' /* webpackChunkName: "pages/admin/settings/collections/index" */))
const _bc90146c = () => interopDefault(import('..\\pages\\admin\\settings\\consultations\\index.vue' /* webpackChunkName: "pages/admin/settings/consultations/index" */))
const _64c836c8 = () => interopDefault(import('..\\pages\\admin\\settings\\products\\index.vue' /* webpackChunkName: "pages/admin/settings/products/index" */))
const _37f3f237 = () => interopDefault(import('..\\pages\\admin\\settings\\roles\\index.vue' /* webpackChunkName: "pages/admin/settings/roles/index" */))
const _071f2c72 = () => interopDefault(import('..\\pages\\admin\\settings\\tags\\index.vue' /* webpackChunkName: "pages/admin/settings/tags/index" */))
const _33ae060c = () => interopDefault(import('..\\pages\\admin\\settings\\users\\index.vue' /* webpackChunkName: "pages/admin/settings/users/index" */))
const _758389bf = () => interopDefault(import('..\\pages\\admin\\settings\\collections\\create.vue' /* webpackChunkName: "pages/admin/settings/collections/create" */))
const _8609e398 = () => interopDefault(import('..\\pages\\admin\\settings\\consultations\\create.vue' /* webpackChunkName: "pages/admin/settings/consultations/create" */))
const _0d94f9a2 = () => interopDefault(import('..\\pages\\admin\\settings\\products\\create.vue' /* webpackChunkName: "pages/admin/settings/products/create" */))
const _2382c132 = () => interopDefault(import('..\\pages\\admin\\settings\\roles\\create.vue' /* webpackChunkName: "pages/admin/settings/roles/create" */))
const _8d5dcc52 = () => interopDefault(import('..\\pages\\admin\\settings\\tags\\create.vue' /* webpackChunkName: "pages/admin/settings/tags/create" */))
const _c4567162 = () => interopDefault(import('..\\pages\\admin\\settings\\users\\invitation.vue' /* webpackChunkName: "pages/admin/settings/users/invitation" */))
const _1c2a0b07 = () => interopDefault(import('..\\pages\\admin\\settings\\collections\\_id.vue' /* webpackChunkName: "pages/admin/settings/collections/_id" */))
const _45846590 = () => interopDefault(import('..\\pages\\admin\\settings\\consultations\\_id\\index.vue' /* webpackChunkName: "pages/admin/settings/consultations/_id/index" */))
const _ee5b43f8 = () => interopDefault(import('..\\pages\\admin\\settings\\products\\_id.vue' /* webpackChunkName: "pages/admin/settings/products/_id" */))
const _ed11d342 = () => interopDefault(import('..\\pages\\admin\\settings\\roles\\_id.vue' /* webpackChunkName: "pages/admin/settings/roles/_id" */))
const _4ecc31ef = () => interopDefault(import('..\\pages\\admin\\settings\\tags\\_id.vue' /* webpackChunkName: "pages/admin/settings/tags/_id" */))
const _42de1b74 = () => interopDefault(import('..\\pages\\admin\\settings\\users\\_id.vue' /* webpackChunkName: "pages/admin/settings/users/_id" */))
const _728b7d76 = () => interopDefault(import('..\\pages\\admin\\settings\\consultations\\_id\\form.vue' /* webpackChunkName: "pages/admin/settings/consultations/_id/form" */))
const _40c0a6eb = () => interopDefault(import('..\\pages\\admin\\students\\index.vue' /* webpackChunkName: "pages/admin/students/index" */))
const _7eaf17ce = () => interopDefault(import('..\\pages\\admin\\auth\\forgot-password.vue' /* webpackChunkName: "pages/admin/auth/forgot-password" */))
const _3298871c = () => interopDefault(import('..\\pages\\admin\\auth\\login.vue' /* webpackChunkName: "pages/admin/auth/login" */))
const _60a160c0 = () => interopDefault(import('..\\pages\\admin\\auth\\reset-password.vue' /* webpackChunkName: "pages/admin/auth/reset-password" */))
const _3c1dbedf = () => interopDefault(import('..\\pages\\admin\\auth\\signup.vue' /* webpackChunkName: "pages/admin/auth/signup" */))
const _a7e22166 = () => interopDefault(import('..\\pages\\admin\\auth\\two-factor-challenge.vue' /* webpackChunkName: "pages/admin/auth/two-factor-challenge" */))
const _c45c7976 = () => interopDefault(import('..\\pages\\admin\\auth\\two-factor-challenge-recovery.vue' /* webpackChunkName: "pages/admin/auth/two-factor-challenge-recovery" */))
const _1f523dcd = () => interopDefault(import('..\\pages\\admin\\course-applicant-lists\\course-application-view.vue' /* webpackChunkName: "pages/admin/course-applicant-lists/course-application-view" */))
const _2faad20c = () => interopDefault(import('..\\pages\\admin\\course-applicant-lists\\course-application-view\\_id\\certifications\\index.vue' /* webpackChunkName: "pages/admin/course-applicant-lists/course-application-view/_id/certifications/index" */))
const _0933057a = () => interopDefault(import('..\\pages\\admin\\course-applicant-lists\\course-application-view\\_id\\educations\\index.vue' /* webpackChunkName: "pages/admin/course-applicant-lists/course-application-view/_id/educations/index" */))
const _3493ce7b = () => interopDefault(import('..\\pages\\admin\\course-applicant-lists\\course-application-view\\_id\\general.vue' /* webpackChunkName: "pages/admin/course-applicant-lists/course-application-view/_id/general" */))
const _1f08c8e4 = () => interopDefault(import('..\\pages\\admin\\course-applicant-lists\\course-application-view\\_id\\hobbies-and-list.vue' /* webpackChunkName: "pages/admin/course-applicant-lists/course-application-view/_id/hobbies-and-list" */))
const _3fa85a2b = () => interopDefault(import('..\\pages\\admin\\course-applicant-lists\\course-application-view\\_id\\projects\\index.vue' /* webpackChunkName: "pages/admin/course-applicant-lists/course-application-view/_id/projects/index" */))
const _bca162b8 = () => interopDefault(import('..\\pages\\admin\\course-applicant-lists\\course-application-view\\_id\\certifications\\_id\\general.vue' /* webpackChunkName: "pages/admin/course-applicant-lists/course-application-view/_id/certifications/_id/general" */))
const _044df914 = () => interopDefault(import('..\\pages\\admin\\course-applicant-lists\\course-application-view\\_id\\educations\\_id\\general.vue' /* webpackChunkName: "pages/admin/course-applicant-lists/course-application-view/_id/educations/_id/general" */))
const _3f2d35a5 = () => interopDefault(import('..\\pages\\admin\\course-applicant-lists\\course-application-view\\_id\\projects\\_id\\general.vue' /* webpackChunkName: "pages/admin/course-applicant-lists/course-application-view/_id/projects/_id/general" */))
const _0cb915b3 = () => interopDefault(import('..\\pages\\admin\\courses\\create-course.vue' /* webpackChunkName: "pages/admin/courses/create-course" */))
const _394a9176 = () => interopDefault(import('..\\pages\\admin\\courses\\create-course\\general.vue' /* webpackChunkName: "pages/admin/courses/create-course/general" */))
const _41077af1 = () => interopDefault(import('..\\pages\\admin\\courses\\create-course\\_id\\contents\\index.vue' /* webpackChunkName: "pages/admin/courses/create-course/_id/contents/index" */))
const _85f4d716 = () => interopDefault(import('..\\pages\\admin\\courses\\create-course\\_id\\description.vue' /* webpackChunkName: "pages/admin/courses/create-course/_id/description" */))
const _079c2ded = () => interopDefault(import('..\\pages\\admin\\courses\\create-course\\_id\\contents\\create.vue' /* webpackChunkName: "pages/admin/courses/create-course/_id/contents/create" */))
const _42b2ca1f = () => interopDefault(import('..\\pages\\admin\\courses\\create-course\\_id\\contents\\_id\\general.vue' /* webpackChunkName: "pages/admin/courses/create-course/_id/contents/_id/general" */))
const _af78a8b6 = () => interopDefault(import('..\\pages\\admin\\courses\\edit-course.vue' /* webpackChunkName: "pages/admin/courses/edit-course" */))
const _5c939f5a = () => interopDefault(import('..\\pages\\admin\\courses\\edit-course\\_id\\edit-contents\\index.vue' /* webpackChunkName: "pages/admin/courses/edit-course/_id/edit-contents/index" */))
const _01242253 = () => interopDefault(import('..\\pages\\admin\\courses\\edit-course\\_id\\general.vue' /* webpackChunkName: "pages/admin/courses/edit-course/_id/general" */))
const _f32853be = () => interopDefault(import('..\\pages\\admin\\courses\\edit-course\\_id\\student-applied-courses\\index.vue' /* webpackChunkName: "pages/admin/courses/edit-course/_id/student-applied-courses/index" */))
const _5d9496a4 = () => interopDefault(import('..\\pages\\admin\\courses\\edit-course\\_id\\edit-contents\\create.vue' /* webpackChunkName: "pages/admin/courses/edit-course/_id/edit-contents/create" */))
const _d15ce4d4 = () => interopDefault(import('..\\pages\\admin\\courses\\edit-course\\_id\\edit-contents\\_id\\general.vue' /* webpackChunkName: "pages/admin/courses/edit-course/_id/edit-contents/_id/general" */))
const _6469a59d = () => interopDefault(import('..\\pages\\admin\\event-applicant-lists\\event-application-view.vue' /* webpackChunkName: "pages/admin/event-applicant-lists/event-application-view" */))
const _321b61dc = () => interopDefault(import('..\\pages\\admin\\event-applicant-lists\\event-application-view\\_id\\certifications\\index.vue' /* webpackChunkName: "pages/admin/event-applicant-lists/event-application-view/_id/certifications/index" */))
const _0f83fd4a = () => interopDefault(import('..\\pages\\admin\\event-applicant-lists\\event-application-view\\_id\\educations\\index.vue' /* webpackChunkName: "pages/admin/event-applicant-lists/event-application-view/_id/educations/index" */))
const _e11d6b6a = () => interopDefault(import('..\\pages\\admin\\event-applicant-lists\\event-application-view\\_id\\general.vue' /* webpackChunkName: "pages/admin/event-applicant-lists/event-application-view/_id/general" */))
const _434469be = () => interopDefault(import('..\\pages\\admin\\event-applicant-lists\\event-application-view\\_id\\hobbies-and-list.vue' /* webpackChunkName: "pages/admin/event-applicant-lists/event-application-view/_id/hobbies-and-list" */))
const _7315f40a = () => interopDefault(import('..\\pages\\admin\\event-applicant-lists\\event-application-view\\_id\\projects\\index.vue' /* webpackChunkName: "pages/admin/event-applicant-lists/event-application-view/_id/projects/index" */))
const _304454d4 = () => interopDefault(import('..\\pages\\admin\\event-applicant-lists\\event-application-view\\_id\\certifications\\_id\\general.vue' /* webpackChunkName: "pages/admin/event-applicant-lists/event-application-view/_id/certifications/_id/general" */))
const _326ebcb4 = () => interopDefault(import('..\\pages\\admin\\event-applicant-lists\\event-application-view\\_id\\educations\\_id\\general.vue' /* webpackChunkName: "pages/admin/event-applicant-lists/event-application-view/_id/educations/_id/general" */))
const _ea62c056 = () => interopDefault(import('..\\pages\\admin\\event-applicant-lists\\event-application-view\\_id\\projects\\_id\\general.vue' /* webpackChunkName: "pages/admin/event-applicant-lists/event-application-view/_id/projects/_id/general" */))
const _aa1f4e18 = () => interopDefault(import('..\\pages\\admin\\events\\create.vue' /* webpackChunkName: "pages/admin/events/create" */))
const _b80cc7fe = () => interopDefault(import('..\\pages\\admin\\events\\create-event.vue' /* webpackChunkName: "pages/admin/events/create-event" */))
const _53b168b7 = () => interopDefault(import('..\\pages\\admin\\events\\create-event\\general.vue' /* webpackChunkName: "pages/admin/events/create-event/general" */))
const _454b397a = () => interopDefault(import('..\\pages\\admin\\events\\create-event\\_id\\description.vue' /* webpackChunkName: "pages/admin/events/create-event/_id/description" */))
const _40ec6806 = () => interopDefault(import('..\\pages\\admin\\job-applicant-lists\\job-application-view.vue' /* webpackChunkName: "pages/admin/job-applicant-lists/job-application-view" */))
const _171c383c = () => interopDefault(import('..\\pages\\admin\\job-applicant-lists\\job-application-view\\_id\\certifications\\index.vue' /* webpackChunkName: "pages/admin/job-applicant-lists/job-application-view/_id/certifications/index" */))
const _2fa1f8ac = () => interopDefault(import('..\\pages\\admin\\job-applicant-lists\\job-application-view\\_id\\educations\\index.vue' /* webpackChunkName: "pages/admin/job-applicant-lists/job-application-view/_id/educations/index" */))
const _569ec8ab = () => interopDefault(import('..\\pages\\admin\\job-applicant-lists\\job-application-view\\_id\\general.vue' /* webpackChunkName: "pages/admin/job-applicant-lists/job-application-view/_id/general" */))
const _0021d144 = () => interopDefault(import('..\\pages\\admin\\job-applicant-lists\\job-application-view\\_id\\hobbies-and-list.vue' /* webpackChunkName: "pages/admin/job-applicant-lists/job-application-view/_id/hobbies-and-list" */))
const _58ee245b = () => interopDefault(import('..\\pages\\admin\\job-applicant-lists\\job-application-view\\_id\\projects\\index.vue' /* webpackChunkName: "pages/admin/job-applicant-lists/job-application-view/_id/projects/index" */))
const _4990db18 = () => interopDefault(import('..\\pages\\admin\\job-applicant-lists\\job-application-view\\_id\\certifications\\_id\\general.vue' /* webpackChunkName: "pages/admin/job-applicant-lists/job-application-view/_id/certifications/_id/general" */))
const _433baf46 = () => interopDefault(import('..\\pages\\admin\\job-applicant-lists\\job-application-view\\_id\\educations\\_id\\general.vue' /* webpackChunkName: "pages/admin/job-applicant-lists/job-application-view/_id/educations/_id/general" */))
const _45e89575 = () => interopDefault(import('..\\pages\\admin\\job-applicant-lists\\job-application-view\\_id\\projects\\_id\\general.vue' /* webpackChunkName: "pages/admin/job-applicant-lists/job-application-view/_id/projects/_id/general" */))
const _91fe8220 = () => interopDefault(import('..\\pages\\admin\\mentors\\add-mentor.vue' /* webpackChunkName: "pages/admin/mentors/add-mentor" */))
const _1d915528 = () => interopDefault(import('..\\pages\\admin\\mentors\\add-mentor\\create.vue' /* webpackChunkName: "pages/admin/mentors/add-mentor/create" */))
const _60490d9d = () => interopDefault(import('..\\pages\\admin\\mentors\\add-mentor\\_id\\educations\\index.vue' /* webpackChunkName: "pages/admin/mentors/add-mentor/_id/educations/index" */))
const _2e1019ea = () => interopDefault(import('..\\pages\\admin\\mentors\\add-mentor\\_id\\sessions\\index.vue' /* webpackChunkName: "pages/admin/mentors/add-mentor/_id/sessions/index" */))
const _9c5d97ca = () => interopDefault(import('..\\pages\\admin\\mentors\\add-mentor\\_id\\work-experiences\\index.vue' /* webpackChunkName: "pages/admin/mentors/add-mentor/_id/work-experiences/index" */))
const _5ee61e7e = () => interopDefault(import('..\\pages\\admin\\mentors\\add-mentor\\_id\\educations\\create.vue' /* webpackChunkName: "pages/admin/mentors/add-mentor/_id/educations/create" */))
const _5dbab913 = () => interopDefault(import('..\\pages\\admin\\mentors\\add-mentor\\_id\\sessions\\create.vue' /* webpackChunkName: "pages/admin/mentors/add-mentor/_id/sessions/create" */))
const _9feccbfa = () => interopDefault(import('..\\pages\\admin\\mentors\\add-mentor\\_id\\work-experiences\\create.vue' /* webpackChunkName: "pages/admin/mentors/add-mentor/_id/work-experiences/create" */))
const _4199c41a = () => interopDefault(import('..\\pages\\admin\\mentors\\add-mentor\\_id\\educations\\_id\\general.vue' /* webpackChunkName: "pages/admin/mentors/add-mentor/_id/educations/_id/general" */))
const _32ac3e76 = () => interopDefault(import('..\\pages\\admin\\mentors\\add-mentor\\_id\\sessions\\_id\\general.vue' /* webpackChunkName: "pages/admin/mentors/add-mentor/_id/sessions/_id/general" */))
const _5baf6496 = () => interopDefault(import('..\\pages\\admin\\mentors\\add-mentor\\_id\\work-experiences\\_id\\general.vue' /* webpackChunkName: "pages/admin/mentors/add-mentor/_id/work-experiences/_id/general" */))
const _25c6d271 = () => interopDefault(import('..\\pages\\admin\\mentors\\edit-mentor.vue' /* webpackChunkName: "pages/admin/mentors/edit-mentor" */))
const _e1c623c4 = () => interopDefault(import('..\\pages\\admin\\mentors\\edit-mentor\\_id\\educations\\index.vue' /* webpackChunkName: "pages/admin/mentors/edit-mentor/_id/educations/index" */))
const _4a05741f = () => interopDefault(import('..\\pages\\admin\\mentors\\edit-mentor\\_id\\general.vue' /* webpackChunkName: "pages/admin/mentors/edit-mentor/_id/general" */))
const _709bffcc = () => interopDefault(import('..\\pages\\admin\\mentors\\edit-mentor\\_id\\sessions\\index.vue' /* webpackChunkName: "pages/admin/mentors/edit-mentor/_id/sessions/index" */))
const _5240efdc = () => interopDefault(import('..\\pages\\admin\\mentors\\edit-mentor\\_id\\work-experiences\\index.vue' /* webpackChunkName: "pages/admin/mentors/edit-mentor/_id/work-experiences/index" */))
const _7c352060 = () => interopDefault(import('..\\pages\\admin\\mentors\\edit-mentor\\_id\\educations\\create.vue' /* webpackChunkName: "pages/admin/mentors/edit-mentor/_id/educations/create" */))
const _6acf771c = () => interopDefault(import('..\\pages\\admin\\mentors\\edit-mentor\\_id\\sessions\\create.vue' /* webpackChunkName: "pages/admin/mentors/edit-mentor/_id/sessions/create" */))
const _1d915662 = () => interopDefault(import('..\\pages\\admin\\mentors\\edit-mentor\\_id\\work-experiences\\create.vue' /* webpackChunkName: "pages/admin/mentors/edit-mentor/_id/work-experiences/create" */))
const _4cbada52 = () => interopDefault(import('..\\pages\\admin\\mentors\\edit-mentor\\_id\\educations\\_id\\general.vue' /* webpackChunkName: "pages/admin/mentors/edit-mentor/_id/educations/_id/general" */))
const _1d6328e4 = () => interopDefault(import('..\\pages\\admin\\mentors\\edit-mentor\\_id\\sessions\\_id\\general.vue' /* webpackChunkName: "pages/admin/mentors/edit-mentor/_id/sessions/_id/general" */))
const _736306d4 = () => interopDefault(import('..\\pages\\admin\\mentors\\edit-mentor\\_id\\work-experiences\\_id\\general.vue' /* webpackChunkName: "pages/admin/mentors/edit-mentor/_id/work-experiences/_id/general" */))
const _75a5202d = () => interopDefault(import('..\\pages\\admin\\news\\create-news-test.vue' /* webpackChunkName: "pages/admin/news/create-news-test" */))
const _200e3029 = () => interopDefault(import('..\\pages\\admin\\organizations\\invitations\\index.vue' /* webpackChunkName: "pages/admin/organizations/invitations/index" */))
const _1d42ee9c = () => interopDefault(import('..\\pages\\admin\\students\\skills-and-hobbies\\index.vue' /* webpackChunkName: "pages/admin/students/skills-and-hobbies/index" */))
const _18a5fe6e = () => interopDefault(import('..\\pages\\admin\\students\\student-view.vue' /* webpackChunkName: "pages/admin/students/student-view" */))
const _b5c571a6 = () => interopDefault(import('..\\pages\\admin\\students\\student-view\\_id\\certifications\\index.vue' /* webpackChunkName: "pages/admin/students/student-view/_id/certifications/index" */))
const _55a7331b = () => interopDefault(import('..\\pages\\admin\\students\\student-view\\_id\\educations\\index.vue' /* webpackChunkName: "pages/admin/students/student-view/_id/educations/index" */))
const _19553d48 = () => interopDefault(import('..\\pages\\admin\\students\\student-view\\_id\\general.vue' /* webpackChunkName: "pages/admin/students/student-view/_id/general" */))
const _5c2a9466 = () => interopDefault(import('..\\pages\\admin\\students\\student-view\\_id\\hobbies-and-list.vue' /* webpackChunkName: "pages/admin/students/student-view/_id/hobbies-and-list" */))
const _04dd7c0c = () => interopDefault(import('..\\pages\\admin\\students\\student-view\\_id\\projects\\index.vue' /* webpackChunkName: "pages/admin/students/student-view/_id/projects/index" */))
const _54f3fb3a = () => interopDefault(import('..\\pages\\admin\\students\\student-view\\_id\\certifications\\_id\\general.vue' /* webpackChunkName: "pages/admin/students/student-view/_id/certifications/_id/general" */))
const _70656eb5 = () => interopDefault(import('..\\pages\\admin\\students\\student-view\\_id\\educations\\_id\\general.vue' /* webpackChunkName: "pages/admin/students/student-view/_id/educations/_id/general" */))
const _780964a4 = () => interopDefault(import('..\\pages\\admin\\students\\student-view\\_id\\projects\\_id\\general.vue' /* webpackChunkName: "pages/admin/students/student-view/_id/projects/_id/general" */))
const _bb7ea054 = () => interopDefault(import('..\\pages\\admin\\news\\create-news\\general.vue' /* webpackChunkName: "pages/admin/news/create-news/general" */))
const _9805c190 = () => interopDefault(import('..\\pages\\admin\\organizations\\company\\create.vue' /* webpackChunkName: "pages/admin/organizations/company/create" */))
const _3792553c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _6fc0a93b = () => interopDefault(import('..\\pages\\admin\\events\\edit-event\\_id.vue' /* webpackChunkName: "pages/admin/events/edit-event/_id" */))
const _43168751 = () => interopDefault(import('..\\pages\\admin\\events\\edit-event\\_id\\description.vue' /* webpackChunkName: "pages/admin/events/edit-event/_id/description" */))
const _29a6c686 = () => interopDefault(import('..\\pages\\admin\\events\\edit-event\\_id\\general.vue' /* webpackChunkName: "pages/admin/events/edit-event/_id/general" */))
const _21dda968 = () => interopDefault(import('..\\pages\\admin\\events\\edit-event\\_id\\student-applied-events\\index.vue' /* webpackChunkName: "pages/admin/events/edit-event/_id/student-applied-events/index" */))
const _2765f0f9 = () => interopDefault(import('..\\pages\\admin\\news\\edit-news\\_id-test.vue' /* webpackChunkName: "pages/admin/news/edit-news/_id-test" */))
const _2348102e = () => interopDefault(import('..\\pages\\admin\\organizations\\company\\_id.vue' /* webpackChunkName: "pages/admin/organizations/company/_id" */))
const _72efaf04 = () => interopDefault(import('..\\pages\\admin\\news\\create-news\\_id\\description.vue' /* webpackChunkName: "pages/admin/news/create-news/_id/description" */))
const _0fc2aab6 = () => interopDefault(import('..\\pages\\admin\\news\\edit-news\\_id\\description.vue' /* webpackChunkName: "pages/admin/news/edit-news/_id/description" */))
const _1b578abc = () => interopDefault(import('..\\pages\\admin\\news\\edit-news\\_id\\general.vue' /* webpackChunkName: "pages/admin/news/edit-news/_id/general" */))
const _899e67bc = () => interopDefault(import('..\\pages\\admin\\companies\\_id\\application.vue' /* webpackChunkName: "pages/admin/companies/_id/application" */))
const _354653e6 = () => interopDefault(import('..\\pages\\admin\\events\\_id\\general.vue' /* webpackChunkName: "pages/admin/events/_id/general" */))
const _4f105795 = () => interopDefault(import('..\\pages\\admin\\feedbacks\\_id\\application.vue' /* webpackChunkName: "pages/admin/feedbacks/_id/application" */))
const _42a8a2ea = () => interopDefault(import('..\\pages\\admin\\jobs\\_id\\application.vue' /* webpackChunkName: "pages/admin/jobs/_id/application" */))
const _2f8fd8e0 = () => interopDefault(import('..\\pages\\admin\\news\\_id\\general.vue' /* webpackChunkName: "pages/admin/news/_id/general" */))

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
    component: _71e2163c,
    name: "admin-approval",
    children: [{
      path: "blocked-list",
      component: _dc53197e,
      name: "admin-approval-blocked-list"
    }, {
      path: "pending-list",
      component: _ee0d8814,
      name: "admin-approval-pending-list"
    }, {
      path: "verified-list",
      component: _56bb6e91,
      name: "admin-approval-verified-list"
    }]
  }, {
    path: "/admin/companies",
    component: _50bd8694,
    name: "admin-companies"
  }, {
    path: "/admin/confirm-password",
    component: _5631c7b2,
    name: "admin-confirm-password"
  }, {
    path: "/admin/course-applicant-lists",
    component: _4547852a,
    name: "admin-course-applicant-lists"
  }, {
    path: "/admin/courses",
    component: _7a471479,
    name: "admin-courses"
  }, {
    path: "/admin/dashboard",
    component: _55332e85,
    name: "admin-dashboard"
  }, {
    path: "/admin/document-list",
    component: _4a4a4b81,
    name: "admin-document-list",
    children: [{
      path: "achievements",
      component: _1126d87d,
      name: "admin-document-list-achievements"
    }, {
      path: "educations",
      component: _2b582536,
      name: "admin-document-list-educations"
    }, {
      path: "personal",
      component: _55f6193e,
      name: "admin-document-list-personal"
    }, {
      path: "projects",
      component: _ba6b8e32,
      name: "admin-document-list-projects"
    }, {
      path: "references",
      component: _1eeaa059,
      name: "admin-document-list-references"
    }, {
      path: "work-experience",
      component: _38d062ed,
      name: "admin-document-list-work-experience"
    }]
  }, {
    path: "/admin/event-applicant-lists",
    component: _298feaba,
    name: "admin-event-applicant-lists"
  }, {
    path: "/admin/events",
    component: _4e8e530a,
    name: "admin-events"
  }, {
    path: "/admin/feedbacks",
    component: _36a65b23,
    name: "admin-feedbacks"
  }, {
    path: "/admin/job-applicant-lists",
    component: _8f9f0d12,
    name: "admin-job-applicant-lists"
  }, {
    path: "/admin/jobs",
    component: _ec087c26,
    name: "admin-jobs"
  }, {
    path: "/admin/mentors",
    component: _1f412f1f,
    name: "admin-mentors"
  }, {
    path: "/admin/news",
    component: _a101d960,
    name: "admin-news"
  }, {
    path: "/admin/old-organizations",
    component: _1496006b,
    name: "admin-old-organizations"
  }, {
    path: "/admin/organizations",
    component: _0789ac51,
    name: "admin-organizations"
  }, {
    path: "/admin/profile",
    component: _00003d5a,
    name: "admin-profile",
    children: [{
      path: "2fa",
      component: _52b30b9f,
      name: "admin-profile-2fa"
    }, {
      path: "general",
      component: _3c183b7e,
      name: "admin-profile-general"
    }, {
      path: "invitations",
      component: _db5fa81c,
      name: "admin-profile-invitations"
    }, {
      path: "password",
      component: _12daf375,
      name: "admin-profile-password"
    }]
  }, {
    path: "/admin/settings",
    component: _4ce34a7c,
    name: "admin-settings",
    children: [{
      path: "collections",
      component: _2c874642,
      name: "admin-settings-collections"
    }, {
      path: "consultations",
      component: _bc90146c,
      name: "admin-settings-consultations"
    }, {
      path: "products",
      component: _64c836c8,
      name: "admin-settings-products"
    }, {
      path: "roles",
      component: _37f3f237,
      name: "admin-settings-roles"
    }, {
      path: "tags",
      component: _071f2c72,
      name: "admin-settings-tags"
    }, {
      path: "users",
      component: _33ae060c,
      name: "admin-settings-users"
    }, {
      path: "collections/create",
      component: _758389bf,
      name: "admin-settings-collections-create"
    }, {
      path: "consultations/create",
      component: _8609e398,
      name: "admin-settings-consultations-create"
    }, {
      path: "products/create",
      component: _0d94f9a2,
      name: "admin-settings-products-create"
    }, {
      path: "roles/create",
      component: _2382c132,
      name: "admin-settings-roles-create"
    }, {
      path: "tags/create",
      component: _8d5dcc52,
      name: "admin-settings-tags-create"
    }, {
      path: "users/invitation",
      component: _c4567162,
      name: "admin-settings-users-invitation"
    }, {
      path: "collections/:id",
      component: _1c2a0b07,
      name: "admin-settings-collections-id"
    }, {
      path: "consultations/:id",
      component: _45846590,
      name: "admin-settings-consultations-id"
    }, {
      path: "products/:id",
      component: _ee5b43f8,
      name: "admin-settings-products-id"
    }, {
      path: "roles/:id",
      component: _ed11d342,
      name: "admin-settings-roles-id"
    }, {
      path: "tags/:id",
      component: _4ecc31ef,
      name: "admin-settings-tags-id"
    }, {
      path: "users/:id",
      component: _42de1b74,
      name: "admin-settings-users-id"
    }, {
      path: "consultations/:id/form",
      component: _728b7d76,
      name: "admin-settings-consultations-id-form"
    }]
  }, {
    path: "/admin/students",
    component: _40c0a6eb,
    name: "admin-students"
  }, {
    path: "/admin/auth/forgot-password",
    component: _7eaf17ce,
    name: "admin-auth-forgot-password"
  }, {
    path: "/admin/auth/login",
    component: _3298871c,
    name: "admin-auth-login"
  }, {
    path: "/admin/auth/reset-password",
    component: _60a160c0,
    name: "admin-auth-reset-password"
  }, {
    path: "/admin/auth/signup",
    component: _3c1dbedf,
    name: "admin-auth-signup"
  }, {
    path: "/admin/auth/two-factor-challenge",
    component: _a7e22166,
    name: "admin-auth-two-factor-challenge"
  }, {
    path: "/admin/auth/two-factor-challenge-recovery",
    component: _c45c7976,
    name: "admin-auth-two-factor-challenge-recovery"
  }, {
    path: "/admin/course-applicant-lists/course-application-view",
    component: _1f523dcd,
    name: "admin-course-applicant-lists-course-application-view",
    children: [{
      path: ":id?/certifications",
      component: _2faad20c,
      name: "admin-course-applicant-lists-course-application-view-id-certifications"
    }, {
      path: ":id?/educations",
      component: _0933057a,
      name: "admin-course-applicant-lists-course-application-view-id-educations"
    }, {
      path: ":id?/general",
      component: _3493ce7b,
      name: "admin-course-applicant-lists-course-application-view-id-general"
    }, {
      path: ":id?/hobbies-and-list",
      component: _1f08c8e4,
      name: "admin-course-applicant-lists-course-application-view-id-hobbies-and-list"
    }, {
      path: ":id?/projects",
      component: _3fa85a2b,
      name: "admin-course-applicant-lists-course-application-view-id-projects"
    }, {
      path: ":id?/certifications/:id/general",
      component: _bca162b8,
      name: "admin-course-applicant-lists-course-application-view-id-certifications-id-general"
    }, {
      path: ":id?/educations/:id/general",
      component: _044df914,
      name: "admin-course-applicant-lists-course-application-view-id-educations-id-general"
    }, {
      path: ":id?/projects/:id/general",
      component: _3f2d35a5,
      name: "admin-course-applicant-lists-course-application-view-id-projects-id-general"
    }]
  }, {
    path: "/admin/courses/create-course",
    component: _0cb915b3,
    name: "admin-courses-create-course",
    children: [{
      path: "general",
      component: _394a9176,
      name: "admin-courses-create-course-general"
    }, {
      path: ":id?/contents",
      component: _41077af1,
      name: "admin-courses-create-course-id-contents"
    }, {
      path: ":id?/description",
      component: _85f4d716,
      name: "admin-courses-create-course-id-description"
    }, {
      path: ":id?/contents/create",
      component: _079c2ded,
      name: "admin-courses-create-course-id-contents-create"
    }, {
      path: ":id?/contents/:id/general",
      component: _42b2ca1f,
      name: "admin-courses-create-course-id-contents-id-general"
    }]
  }, {
    path: "/admin/courses/edit-course",
    component: _af78a8b6,
    name: "admin-courses-edit-course",
    children: [{
      path: ":id?/edit-contents",
      component: _5c939f5a,
      name: "admin-courses-edit-course-id-edit-contents"
    }, {
      path: ":id?/general",
      component: _01242253,
      name: "admin-courses-edit-course-id-general"
    }, {
      path: ":id?/student-applied-courses",
      component: _f32853be,
      name: "admin-courses-edit-course-id-student-applied-courses"
    }, {
      path: ":id?/edit-contents/create",
      component: _5d9496a4,
      name: "admin-courses-edit-course-id-edit-contents-create"
    }, {
      path: ":id?/edit-contents/:id?/general",
      component: _d15ce4d4,
      name: "admin-courses-edit-course-id-edit-contents-id-general"
    }]
  }, {
    path: "/admin/event-applicant-lists/event-application-view",
    component: _6469a59d,
    name: "admin-event-applicant-lists-event-application-view",
    children: [{
      path: ":id?/certifications",
      component: _321b61dc,
      name: "admin-event-applicant-lists-event-application-view-id-certifications"
    }, {
      path: ":id?/educations",
      component: _0f83fd4a,
      name: "admin-event-applicant-lists-event-application-view-id-educations"
    }, {
      path: ":id?/general",
      component: _e11d6b6a,
      name: "admin-event-applicant-lists-event-application-view-id-general"
    }, {
      path: ":id?/hobbies-and-list",
      component: _434469be,
      name: "admin-event-applicant-lists-event-application-view-id-hobbies-and-list"
    }, {
      path: ":id?/projects",
      component: _7315f40a,
      name: "admin-event-applicant-lists-event-application-view-id-projects"
    }, {
      path: ":id?/certifications/:id/general",
      component: _304454d4,
      name: "admin-event-applicant-lists-event-application-view-id-certifications-id-general"
    }, {
      path: ":id?/educations/:id/general",
      component: _326ebcb4,
      name: "admin-event-applicant-lists-event-application-view-id-educations-id-general"
    }, {
      path: ":id?/projects/:id/general",
      component: _ea62c056,
      name: "admin-event-applicant-lists-event-application-view-id-projects-id-general"
    }]
  }, {
    path: "/admin/events/create",
    component: _aa1f4e18,
    name: "admin-events-create"
  }, {
    path: "/admin/events/create-event",
    component: _b80cc7fe,
    name: "admin-events-create-event",
    children: [{
      path: "general",
      component: _53b168b7,
      name: "admin-events-create-event-general"
    }, {
      path: ":id?/description",
      component: _454b397a,
      name: "admin-events-create-event-id-description"
    }]
  }, {
    path: "/admin/job-applicant-lists/job-application-view",
    component: _40ec6806,
    name: "admin-job-applicant-lists-job-application-view",
    children: [{
      path: ":id?/certifications",
      component: _171c383c,
      name: "admin-job-applicant-lists-job-application-view-id-certifications"
    }, {
      path: ":id?/educations",
      component: _2fa1f8ac,
      name: "admin-job-applicant-lists-job-application-view-id-educations"
    }, {
      path: ":id?/general",
      component: _569ec8ab,
      name: "admin-job-applicant-lists-job-application-view-id-general"
    }, {
      path: ":id?/hobbies-and-list",
      component: _0021d144,
      name: "admin-job-applicant-lists-job-application-view-id-hobbies-and-list"
    }, {
      path: ":id?/projects",
      component: _58ee245b,
      name: "admin-job-applicant-lists-job-application-view-id-projects"
    }, {
      path: ":id?/certifications/:id/general",
      component: _4990db18,
      name: "admin-job-applicant-lists-job-application-view-id-certifications-id-general"
    }, {
      path: ":id?/educations/:id/general",
      component: _433baf46,
      name: "admin-job-applicant-lists-job-application-view-id-educations-id-general"
    }, {
      path: ":id?/projects/:id/general",
      component: _45e89575,
      name: "admin-job-applicant-lists-job-application-view-id-projects-id-general"
    }]
  }, {
    path: "/admin/mentors/add-mentor",
    component: _91fe8220,
    name: "admin-mentors-add-mentor",
    children: [{
      path: "create",
      component: _1d915528,
      name: "admin-mentors-add-mentor-create"
    }, {
      path: ":id?/educations",
      component: _60490d9d,
      name: "admin-mentors-add-mentor-id-educations"
    }, {
      path: ":id?/sessions",
      component: _2e1019ea,
      name: "admin-mentors-add-mentor-id-sessions"
    }, {
      path: ":id?/work-experiences",
      component: _9c5d97ca,
      name: "admin-mentors-add-mentor-id-work-experiences"
    }, {
      path: ":id?/educations/create",
      component: _5ee61e7e,
      name: "admin-mentors-add-mentor-id-educations-create"
    }, {
      path: ":id?/sessions/create",
      component: _5dbab913,
      name: "admin-mentors-add-mentor-id-sessions-create"
    }, {
      path: ":id?/work-experiences/create",
      component: _9feccbfa,
      name: "admin-mentors-add-mentor-id-work-experiences-create"
    }, {
      path: ":id?/educations/:id/general",
      component: _4199c41a,
      name: "admin-mentors-add-mentor-id-educations-id-general"
    }, {
      path: ":id?/sessions/:id/general",
      component: _32ac3e76,
      name: "admin-mentors-add-mentor-id-sessions-id-general"
    }, {
      path: ":id?/work-experiences/:id?/general",
      component: _5baf6496,
      name: "admin-mentors-add-mentor-id-work-experiences-id-general"
    }]
  }, {
    path: "/admin/mentors/edit-mentor",
    component: _25c6d271,
    name: "admin-mentors-edit-mentor",
    children: [{
      path: ":id?/educations",
      component: _e1c623c4,
      name: "admin-mentors-edit-mentor-id-educations"
    }, {
      path: ":id?/general",
      component: _4a05741f,
      name: "admin-mentors-edit-mentor-id-general"
    }, {
      path: ":id?/sessions",
      component: _709bffcc,
      name: "admin-mentors-edit-mentor-id-sessions"
    }, {
      path: ":id?/work-experiences",
      component: _5240efdc,
      name: "admin-mentors-edit-mentor-id-work-experiences"
    }, {
      path: ":id?/educations/create",
      component: _7c352060,
      name: "admin-mentors-edit-mentor-id-educations-create"
    }, {
      path: ":id?/sessions/create",
      component: _6acf771c,
      name: "admin-mentors-edit-mentor-id-sessions-create"
    }, {
      path: ":id?/work-experiences/create",
      component: _1d915662,
      name: "admin-mentors-edit-mentor-id-work-experiences-create"
    }, {
      path: ":id?/educations/:id/general",
      component: _4cbada52,
      name: "admin-mentors-edit-mentor-id-educations-id-general"
    }, {
      path: ":id?/sessions/:id/general",
      component: _1d6328e4,
      name: "admin-mentors-edit-mentor-id-sessions-id-general"
    }, {
      path: ":id?/work-experiences/:id?/general",
      component: _736306d4,
      name: "admin-mentors-edit-mentor-id-work-experiences-id-general"
    }]
  }, {
    path: "/admin/news/create-news-test",
    component: _75a5202d,
    name: "admin-news-create-news-test"
  }, {
    path: "/admin/organizations/invitations",
    component: _200e3029,
    name: "admin-organizations-invitations"
  }, {
    path: "/admin/students/skills-and-hobbies",
    component: _1d42ee9c,
    name: "admin-students-skills-and-hobbies"
  }, {
    path: "/admin/students/student-view",
    component: _18a5fe6e,
    name: "admin-students-student-view",
    children: [{
      path: ":id?/certifications",
      component: _b5c571a6,
      name: "admin-students-student-view-id-certifications"
    }, {
      path: ":id?/educations",
      component: _55a7331b,
      name: "admin-students-student-view-id-educations"
    }, {
      path: ":id?/general",
      component: _19553d48,
      name: "admin-students-student-view-id-general"
    }, {
      path: ":id?/hobbies-and-list",
      component: _5c2a9466,
      name: "admin-students-student-view-id-hobbies-and-list"
    }, {
      path: ":id?/projects",
      component: _04dd7c0c,
      name: "admin-students-student-view-id-projects"
    }, {
      path: ":id?/certifications/:id/general",
      component: _54f3fb3a,
      name: "admin-students-student-view-id-certifications-id-general"
    }, {
      path: ":id?/educations/:id/general",
      component: _70656eb5,
      name: "admin-students-student-view-id-educations-id-general"
    }, {
      path: ":id?/projects/:id/general",
      component: _780964a4,
      name: "admin-students-student-view-id-projects-id-general"
    }]
  }, {
    path: "/admin/news/create-news/general",
    component: _bb7ea054,
    name: "admin-news-create-news-general"
  }, {
    path: "/admin/organizations/company/create",
    component: _9805c190,
    name: "admin-organizations-company-create"
  }, {
    path: "/",
    component: _3792553c,
    name: "index"
  }, {
    path: "/admin/events/edit-event/:id?",
    component: _6fc0a93b,
    name: "admin-events-edit-event-id",
    children: [{
      path: "description",
      component: _43168751,
      name: "admin-events-edit-event-id-description"
    }, {
      path: "general",
      component: _29a6c686,
      name: "admin-events-edit-event-id-general"
    }, {
      path: "student-applied-events",
      component: _21dda968,
      name: "admin-events-edit-event-id-student-applied-events"
    }]
  }, {
    path: "/admin/news/edit-news/:id-test?",
    component: _2765f0f9,
    name: "admin-news-edit-news-id-test"
  }, {
    path: "/admin/organizations/company/:id?",
    component: _2348102e,
    name: "admin-organizations-company-id"
  }, {
    path: "/admin/news/create-news/:id?/description",
    component: _72efaf04,
    name: "admin-news-create-news-id-description"
  }, {
    path: "/admin/news/edit-news/:id?/description",
    component: _0fc2aab6,
    name: "admin-news-edit-news-id-description"
  }, {
    path: "/admin/news/edit-news/:id?/general",
    component: _1b578abc,
    name: "admin-news-edit-news-id-general"
  }, {
    path: "/admin/companies/:id/application",
    component: _899e67bc,
    name: "admin-companies-id-application"
  }, {
    path: "/admin/events/:id/general",
    component: _354653e6,
    name: "admin-events-id-general"
  }, {
    path: "/admin/feedbacks/:id/application",
    component: _4f105795,
    name: "admin-feedbacks-id-application"
  }, {
    path: "/admin/jobs/:id/application",
    component: _42a8a2ea,
    name: "admin-jobs-id-application"
  }, {
    path: "/admin/news/:id/general",
    component: _2f8fd8e0,
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
