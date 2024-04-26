import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _78fe0bf4 = () => interopDefault(import('..\\pages\\admin\\approval.vue' /* webpackChunkName: "pages/admin/approval" */))
const _6a92ad36 = () => interopDefault(import('..\\pages\\admin\\approval\\blocked-list.vue' /* webpackChunkName: "pages/admin/approval/blocked-list" */))
const _7c4d1bcc = () => interopDefault(import('..\\pages\\admin\\approval\\pending-list.vue' /* webpackChunkName: "pages/admin/approval/pending-list" */))
const _39e1fced = () => interopDefault(import('..\\pages\\admin\\approval\\verified-list.vue' /* webpackChunkName: "pages/admin/approval/verified-list" */))
const _71ddddda = () => interopDefault(import('..\\pages\\admin\\companies\\index.vue' /* webpackChunkName: "pages/admin/companies/index" */))
const _6f23bd4b = () => interopDefault(import('..\\pages\\admin\\confirm-password.vue' /* webpackChunkName: "pages/admin/confirm-password" */))
const _039d96c7 = () => interopDefault(import('..\\pages\\admin\\course-applicant-lists\\index.vue' /* webpackChunkName: "pages/admin/course-applicant-lists/index" */))
const _6e7ca2c6 = () => interopDefault(import('..\\pages\\admin\\courses\\index.vue' /* webpackChunkName: "pages/admin/courses/index" */))
const _31fc643e = () => interopDefault(import('..\\pages\\admin\\dashboard.vue' /* webpackChunkName: "pages/admin/dashboard" */))
const _0ac1dcdd = () => interopDefault(import('..\\pages\\admin\\document-list.vue' /* webpackChunkName: "pages/admin/document-list" */))
const _27d2f8a1 = () => interopDefault(import('..\\pages\\admin\\document-list\\achievements\\index.vue' /* webpackChunkName: "pages/admin/document-list/achievements/index" */))
const _0bd4034c = () => interopDefault(import('..\\pages\\admin\\document-list\\educations\\index.vue' /* webpackChunkName: "pages/admin/document-list/educations/index" */))
const _76eec585 = () => interopDefault(import('..\\pages\\admin\\document-list\\personal\\index.vue' /* webpackChunkName: "pages/admin/document-list/personal/index" */))
const _44b40b0b = () => interopDefault(import('..\\pages\\admin\\document-list\\projects\\index.vue' /* webpackChunkName: "pages/admin/document-list/projects/index" */))
const _24af0d06 = () => interopDefault(import('..\\pages\\admin\\document-list\\references\\index.vue' /* webpackChunkName: "pages/admin/document-list/references/index" */))
const _bd7ebf6e = () => interopDefault(import('..\\pages\\admin\\document-list\\work-experience\\index.vue' /* webpackChunkName: "pages/admin/document-list/work-experience/index" */))
const _3b4ff5de = () => interopDefault(import('..\\pages\\admin\\event-applicant-lists\\index.vue' /* webpackChunkName: "pages/admin/event-applicant-lists/index" */))
const _0f05e466 = () => interopDefault(import('..\\pages\\admin\\events\\index.vue' /* webpackChunkName: "pages/admin/events/index" */))
const _5e3a0772 = () => interopDefault(import('..\\pages\\admin\\feedbacks\\index.vue' /* webpackChunkName: "pages/admin/feedbacks/index" */))
const _7c00fd9b = () => interopDefault(import('..\\pages\\admin\\job-applicant-lists\\index.vue' /* webpackChunkName: "pages/admin/job-applicant-lists/index" */))
const _3ac00b6e = () => interopDefault(import('..\\pages\\admin\\jobs\\index.vue' /* webpackChunkName: "pages/admin/jobs/index" */))
const _6dbbc943 = () => interopDefault(import('..\\pages\\admin\\mentors\\index.vue' /* webpackChunkName: "pages/admin/mentors/index" */))
const _08234bac = () => interopDefault(import('..\\pages\\admin\\news\\index.vue' /* webpackChunkName: "pages/admin/news/index" */))
const _7c24f872 = () => interopDefault(import('..\\pages\\admin\\old-organizations.vue' /* webpackChunkName: "pages/admin/old-organizations" */))
const _02891b75 = () => interopDefault(import('..\\pages\\admin\\organizations\\index.vue' /* webpackChunkName: "pages/admin/organizations/index" */))
const _106703b6 = () => interopDefault(import('..\\pages\\admin\\profile.vue' /* webpackChunkName: "pages/admin/profile" */))
const _083727fb = () => interopDefault(import('..\\pages\\admin\\profile\\2fa\\index.vue' /* webpackChunkName: "pages/admin/profile/2fa/index" */))
const _535646bc = () => interopDefault(import('..\\pages\\admin\\profile\\general.vue' /* webpackChunkName: "pages/admin/profile/general" */))
const _48902c4e = () => interopDefault(import('..\\pages\\admin\\profile\\invitations\\index.vue' /* webpackChunkName: "pages/admin/profile/invitations/index" */))
const _7f9b125e = () => interopDefault(import('..\\pages\\admin\\profile\\password.vue' /* webpackChunkName: "pages/admin/profile/password" */))
const _53ff4034 = () => interopDefault(import('..\\pages\\admin\\settings.vue' /* webpackChunkName: "pages/admin/settings" */))
const _09072ffa = () => interopDefault(import('..\\pages\\admin\\settings\\collections\\index.vue' /* webpackChunkName: "pages/admin/settings/collections/index" */))
const _43a1c7ee = () => interopDefault(import('..\\pages\\admin\\settings\\consultations\\index.vue' /* webpackChunkName: "pages/admin/settings/consultations/index" */))
const _fd4f6810 = () => interopDefault(import('..\\pages\\admin\\settings\\products\\index.vue' /* webpackChunkName: "pages/admin/settings/products/index" */))
const _70d4285b = () => interopDefault(import('..\\pages\\admin\\settings\\roles\\index.vue' /* webpackChunkName: "pages/admin/settings/roles/index" */))
const _615edf23 = () => interopDefault(import('..\\pages\\admin\\settings\\tags\\index.vue' /* webpackChunkName: "pages/admin/settings/tags/index" */))
const _6c8e3c30 = () => interopDefault(import('..\\pages\\admin\\settings\\users\\index.vue' /* webpackChunkName: "pages/admin/settings/users/index" */))
const _c87639ca = () => interopDefault(import('..\\pages\\admin\\settings\\collections\\create.vue' /* webpackChunkName: "pages/admin/settings/collections/create" */))
const _584b8090 = () => interopDefault(import('..\\pages\\admin\\settings\\consultations\\create.vue' /* webpackChunkName: "pages/admin/settings/consultations/create" */))
const _5d350474 = () => interopDefault(import('..\\pages\\admin\\settings\\products\\create.vue' /* webpackChunkName: "pages/admin/settings/products/create" */))
const _5d35a47a = () => interopDefault(import('..\\pages\\admin\\settings\\roles\\create.vue' /* webpackChunkName: "pages/admin/settings/roles/create" */))
const _1b9d600a = () => interopDefault(import('..\\pages\\admin\\settings\\tags\\create.vue' /* webpackChunkName: "pages/admin/settings/tags/create" */))
const _5414c7ab = () => interopDefault(import('..\\pages\\admin\\settings\\users\\invitation.vue' /* webpackChunkName: "pages/admin/settings/users/invitation" */))
const _400ae1aa = () => interopDefault(import('..\\pages\\admin\\settings\\collections\\_id.vue' /* webpackChunkName: "pages/admin/settings/collections/_id" */))
const _045c49ec = () => interopDefault(import('..\\pages\\admin\\settings\\consultations\\_id\\index.vue' /* webpackChunkName: "pages/admin/settings/consultations/_id/index" */))
const _6bf8ec60 = () => interopDefault(import('..\\pages\\admin\\settings\\products\\_id.vue' /* webpackChunkName: "pages/admin/settings/products/_id" */))
const _f712f4fa = () => interopDefault(import('..\\pages\\admin\\settings\\roles\\_id.vue' /* webpackChunkName: "pages/admin/settings/roles/_id" */))
const _04504e4b = () => interopDefault(import('..\\pages\\admin\\settings\\tags\\_id.vue' /* webpackChunkName: "pages/admin/settings/tags/_id" */))
const _3ddd8a98 = () => interopDefault(import('..\\pages\\admin\\settings\\users\\_id.vue' /* webpackChunkName: "pages/admin/settings/users/_id" */))
const _ed90c4cc = () => interopDefault(import('..\\pages\\admin\\settings\\consultations\\_id\\form.vue' /* webpackChunkName: "pages/admin/settings/consultations/_id/form" */))
const _7ccd5d72 = () => interopDefault(import('..\\pages\\admin\\students\\index.vue' /* webpackChunkName: "pages/admin/students/index" */))
const _38c4e5ac = () => interopDefault(import('..\\pages\\admin\\auth\\forgot-password.vue' /* webpackChunkName: "pages/admin/auth/forgot-password" */))
const _3f57f4ce = () => interopDefault(import('..\\pages\\admin\\auth\\login.vue' /* webpackChunkName: "pages/admin/auth/login" */))
const _6aa28278 = () => interopDefault(import('..\\pages\\admin\\auth\\reset-password.vue' /* webpackChunkName: "pages/admin/auth/reset-password" */))
const _0ffedbfa = () => interopDefault(import('..\\pages\\admin\\auth\\signup.vue' /* webpackChunkName: "pages/admin/auth/signup" */))
const _6fdf7371 = () => interopDefault(import('..\\pages\\admin\\auth\\two-factor-challenge.vue' /* webpackChunkName: "pages/admin/auth/two-factor-challenge" */))
const _5ca9a7a1 = () => interopDefault(import('..\\pages\\admin\\auth\\two-factor-challenge-recovery.vue' /* webpackChunkName: "pages/admin/auth/two-factor-challenge-recovery" */))
const _86eb0fae = () => interopDefault(import('..\\pages\\admin\\course-applicant-lists\\course-application-view.vue' /* webpackChunkName: "pages/admin/course-applicant-lists/course-application-view" */))
const _3b5e2a68 = () => interopDefault(import('..\\pages\\admin\\course-applicant-lists\\course-application-view\\_id\\certifications\\index.vue' /* webpackChunkName: "pages/admin/course-applicant-lists/course-application-view/_id/certifications/index" */))
const _1d8e2854 = () => interopDefault(import('..\\pages\\admin\\course-applicant-lists\\course-application-view\\_id\\educations\\index.vue' /* webpackChunkName: "pages/admin/course-applicant-lists/course-application-view/_id/educations/index" */))
const _50b8b7d7 = () => interopDefault(import('..\\pages\\admin\\course-applicant-lists\\course-application-view\\_id\\general.vue' /* webpackChunkName: "pages/admin/course-applicant-lists/course-application-view/_id/general" */))
const _419d0c9c = () => interopDefault(import('..\\pages\\admin\\course-applicant-lists\\course-application-view\\_id\\hobbies-and-list.vue' /* webpackChunkName: "pages/admin/course-applicant-lists/course-application-view/_id/hobbies-and-list" */))
const _ed27b0f2 = () => interopDefault(import('..\\pages\\admin\\course-applicant-lists\\course-application-view\\_id\\projects\\index.vue' /* webpackChunkName: "pages/admin/course-applicant-lists/course-application-view/_id/projects/index" */))
const _52f516c8 = () => interopDefault(import('..\\pages\\admin\\course-applicant-lists\\course-application-view\\_id\\certifications\\_id\\general.vue' /* webpackChunkName: "pages/admin/course-applicant-lists/course-application-view/_id/certifications/_id/general" */))
const _cd1f04cc = () => interopDefault(import('..\\pages\\admin\\course-applicant-lists\\course-application-view\\_id\\educations\\_id\\general.vue' /* webpackChunkName: "pages/admin/course-applicant-lists/course-application-view/_id/educations/_id/general" */))
const _ac362e6e = () => interopDefault(import('..\\pages\\admin\\course-applicant-lists\\course-application-view\\_id\\projects\\_id\\general.vue' /* webpackChunkName: "pages/admin/course-applicant-lists/course-application-view/_id/projects/_id/general" */))
const _45994bd7 = () => interopDefault(import('..\\pages\\admin\\courses\\create-course.vue' /* webpackChunkName: "pages/admin/courses/create-course" */))
const _7eab29a1 = () => interopDefault(import('..\\pages\\admin\\courses\\create-course\\general.vue' /* webpackChunkName: "pages/admin/courses/create-course/general" */))
const _7734be15 = () => interopDefault(import('..\\pages\\admin\\courses\\create-course\\_id\\contents\\index.vue' /* webpackChunkName: "pages/admin/courses/create-course/_id/contents/index" */))
const _5a7a0999 = () => interopDefault(import('..\\pages\\admin\\courses\\create-course\\_id\\description.vue' /* webpackChunkName: "pages/admin/courses/create-course/_id/description" */))
const _d1d1616e = () => interopDefault(import('..\\pages\\admin\\courses\\create-course\\_id\\contents\\create.vue' /* webpackChunkName: "pages/admin/courses/create-course/_id/contents/create" */))
const _8b63130a = () => interopDefault(import('..\\pages\\admin\\courses\\create-course\\_id\\contents\\_id\\general.vue' /* webpackChunkName: "pages/admin/courses/create-course/_id/contents/_id/general" */))
const _b979ca6e = () => interopDefault(import('..\\pages\\admin\\courses\\edit-course.vue' /* webpackChunkName: "pages/admin/courses/edit-course" */))
const _0c684c94 = () => interopDefault(import('..\\pages\\admin\\courses\\edit-course\\_id\\edit-contents\\index.vue' /* webpackChunkName: "pages/admin/courses/edit-course/_id/edit-contents/index" */))
const _17d04277 = () => interopDefault(import('..\\pages\\admin\\courses\\edit-course\\_id\\general.vue' /* webpackChunkName: "pages/admin/courses/edit-course/_id/general" */))
const _5053cd7d = () => interopDefault(import('..\\pages\\admin\\courses\\edit-course\\_id\\student-applied-courses\\index.vue' /* webpackChunkName: "pages/admin/courses/edit-course/_id/student-applied-courses/index" */))
const _6763a7c8 = () => interopDefault(import('..\\pages\\admin\\courses\\edit-course\\_id\\edit-contents\\create.vue' /* webpackChunkName: "pages/admin/courses/edit-course/_id/edit-contents/create" */))
const _f79f988c = () => interopDefault(import('..\\pages\\admin\\courses\\edit-course\\_id\\edit-contents\\_id\\general.vue' /* webpackChunkName: "pages/admin/courses/edit-course/_id/edit-contents/_id/general" */))
const _1836720e = () => interopDefault(import('..\\pages\\admin\\event-applicant-lists\\event-application-view.vue' /* webpackChunkName: "pages/admin/event-applicant-lists/event-application-view" */))
const _30412138 = () => interopDefault(import('..\\pages\\admin\\event-applicant-lists\\event-application-view\\_id\\certifications\\index.vue' /* webpackChunkName: "pages/admin/event-applicant-lists/event-application-view/_id/certifications/index" */))
const _5947caa6 = () => interopDefault(import('..\\pages\\admin\\event-applicant-lists\\event-application-view\\_id\\educations\\index.vue' /* webpackChunkName: "pages/admin/event-applicant-lists/event-application-view/_id/educations/index" */))
const _7f38daa7 = () => interopDefault(import('..\\pages\\admin\\event-applicant-lists\\event-application-view\\_id\\general.vue' /* webpackChunkName: "pages/admin/event-applicant-lists/event-application-view/_id/general" */))
const _3d6380e2 = () => interopDefault(import('..\\pages\\admin\\event-applicant-lists\\event-application-view\\_id\\hobbies-and-list.vue' /* webpackChunkName: "pages/admin/event-applicant-lists/event-application-view/_id/hobbies-and-list" */))
const _73770b52 = () => interopDefault(import('..\\pages\\admin\\event-applicant-lists\\event-application-view\\_id\\projects\\index.vue' /* webpackChunkName: "pages/admin/event-applicant-lists/event-application-view/_id/projects/index" */))
const _43e5d5f8 = () => interopDefault(import('..\\pages\\admin\\event-applicant-lists\\event-application-view\\_id\\certifications\\_id\\general.vue' /* webpackChunkName: "pages/admin/event-applicant-lists/event-application-view/_id/certifications/_id/general" */))
const _518054ca = () => interopDefault(import('..\\pages\\admin\\event-applicant-lists\\event-application-view\\_id\\educations\\_id\\general.vue' /* webpackChunkName: "pages/admin/event-applicant-lists/event-application-view/_id/educations/_id/general" */))
const _5160cbf9 = () => interopDefault(import('..\\pages\\admin\\event-applicant-lists\\event-application-view\\_id\\projects\\_id\\general.vue' /* webpackChunkName: "pages/admin/event-applicant-lists/event-application-view/_id/projects/_id/general" */))
const _0d2a19d0 = () => interopDefault(import('..\\pages\\admin\\events\\create.vue' /* webpackChunkName: "pages/admin/events/create" */))
const _c20de9b6 = () => interopDefault(import('..\\pages\\admin\\events\\create-event.vue' /* webpackChunkName: "pages/admin/events/create-event" */))
const _79f2c213 = () => interopDefault(import('..\\pages\\admin\\events\\create-event\\general.vue' /* webpackChunkName: "pages/admin/events/create-event/general" */))
const _fa1c5d32 = () => interopDefault(import('..\\pages\\admin\\events\\create-event\\_id\\description.vue' /* webpackChunkName: "pages/admin/events/create-event/_id/description" */))
const _1eb8094e = () => interopDefault(import('..\\pages\\admin\\job-applicant-lists\\job-application-view.vue' /* webpackChunkName: "pages/admin/job-applicant-lists/job-application-view" */))
const _60e00598 = () => interopDefault(import('..\\pages\\admin\\job-applicant-lists\\job-application-view\\_id\\certifications\\index.vue' /* webpackChunkName: "pages/admin/job-applicant-lists/job-application-view/_id/certifications/index" */))
const _2ac7df06 = () => interopDefault(import('..\\pages\\admin\\job-applicant-lists\\job-application-view\\_id\\educations\\index.vue' /* webpackChunkName: "pages/admin/job-applicant-lists/job-application-view/_id/educations/index" */))
const _0594e707 = () => interopDefault(import('..\\pages\\admin\\job-applicant-lists\\job-application-view\\_id\\general.vue' /* webpackChunkName: "pages/admin/job-applicant-lists/job-application-view/_id/general" */))
const _2b5f6082 = () => interopDefault(import('..\\pages\\admin\\job-applicant-lists\\job-application-view\\_id\\hobbies-and-list.vue' /* webpackChunkName: "pages/admin/job-applicant-lists/job-application-view/_id/hobbies-and-list" */))
const _0103b292 = () => interopDefault(import('..\\pages\\admin\\job-applicant-lists\\job-application-view\\_id\\projects\\index.vue' /* webpackChunkName: "pages/admin/job-applicant-lists/job-application-view/_id/projects/index" */))
const _45ef4598 = () => interopDefault(import('..\\pages\\admin\\job-applicant-lists\\job-application-view\\_id\\certifications\\_id\\general.vue' /* webpackChunkName: "pages/admin/job-applicant-lists/job-application-view/_id/certifications/_id/general" */))
const _5bf2946a = () => interopDefault(import('..\\pages\\admin\\job-applicant-lists\\job-application-view\\_id\\educations\\_id\\general.vue' /* webpackChunkName: "pages/admin/job-applicant-lists/job-application-view/_id/educations/_id/general" */))
const _349e7399 = () => interopDefault(import('..\\pages\\admin\\job-applicant-lists\\job-application-view\\_id\\projects\\_id\\general.vue' /* webpackChunkName: "pages/admin/job-applicant-lists/job-application-view/_id/projects/_id/general" */))
const _6c84db4c = () => interopDefault(import('..\\pages\\admin\\mentors\\add-mentor.vue' /* webpackChunkName: "pages/admin/mentors/add-mentor" */))
const _b1115470 = () => interopDefault(import('..\\pages\\admin\\mentors\\add-mentor\\create.vue' /* webpackChunkName: "pages/admin/mentors/add-mentor/create" */))
const _d8d6540e = () => interopDefault(import('..\\pages\\admin\\mentors\\add-mentor\\_id\\educations\\index.vue' /* webpackChunkName: "pages/admin/mentors/add-mentor/_id/educations/index" */))
const _0bdbbb32 = () => interopDefault(import('..\\pages\\admin\\mentors\\add-mentor\\_id\\sessions\\index.vue' /* webpackChunkName: "pages/admin/mentors/add-mentor/_id/sessions/index" */))
const _3c377112 = () => interopDefault(import('..\\pages\\admin\\mentors\\add-mentor\\_id\\work-experiences\\index.vue' /* webpackChunkName: "pages/admin/mentors/add-mentor/_id/work-experiences/index" */))
const _06ba33e5 = () => interopDefault(import('..\\pages\\admin\\mentors\\add-mentor\\_id\\educations\\create.vue' /* webpackChunkName: "pages/admin/mentors/add-mentor/_id/educations/create" */))
const _6fe67537 = () => interopDefault(import('..\\pages\\admin\\mentors\\add-mentor\\_id\\sessions\\create.vue' /* webpackChunkName: "pages/admin/mentors/add-mentor/_id/sessions/create" */))
const _fb4e1bb2 = () => interopDefault(import('..\\pages\\admin\\mentors\\add-mentor\\_id\\work-experiences\\create.vue' /* webpackChunkName: "pages/admin/mentors/add-mentor/_id/work-experiences/create" */))
const _9cfb13d2 = () => interopDefault(import('..\\pages\\admin\\mentors\\add-mentor\\_id\\educations\\_id\\general.vue' /* webpackChunkName: "pages/admin/mentors/add-mentor/_id/educations/_id/general" */))
const _1f0e1c2e = () => interopDefault(import('..\\pages\\admin\\mentors\\add-mentor\\_id\\sessions\\_id\\general.vue' /* webpackChunkName: "pages/admin/mentors/add-mentor/_id/sessions/_id/general" */))
const _01f5fad9 = () => interopDefault(import('..\\pages\\admin\\mentors\\add-mentor\\_id\\work-experiences\\_id\\general.vue' /* webpackChunkName: "pages/admin/mentors/add-mentor/_id/work-experiences/_id/general" */))
const _20c64195 = () => interopDefault(import('..\\pages\\admin\\mentors\\edit-mentor.vue' /* webpackChunkName: "pages/admin/mentors/edit-mentor" */))
const _756b9d7c = () => interopDefault(import('..\\pages\\admin\\mentors\\edit-mentor\\_id\\educations\\index.vue' /* webpackChunkName: "pages/admin/mentors/edit-mentor/_id/educations/index" */))
const _60b19443 = () => interopDefault(import('..\\pages\\admin\\mentors\\edit-mentor\\_id\\general.vue' /* webpackChunkName: "pages/admin/mentors/edit-mentor/_id/general" */))
const _fa708820 = () => interopDefault(import('..\\pages\\admin\\mentors\\edit-mentor\\_id\\sessions\\index.vue' /* webpackChunkName: "pages/admin/mentors/edit-mentor/_id/sessions/index" */))
const _24904800 = () => interopDefault(import('..\\pages\\admin\\mentors\\edit-mentor\\_id\\work-experiences\\index.vue' /* webpackChunkName: "pages/admin/mentors/edit-mentor/_id/work-experiences/index" */))
const _0bb041bc = () => interopDefault(import('..\\pages\\admin\\mentors\\edit-mentor\\_id\\educations\\create.vue' /* webpackChunkName: "pages/admin/mentors/edit-mentor/_id/educations/create" */))
const _0437e664 = () => interopDefault(import('..\\pages\\admin\\mentors\\edit-mentor\\_id\\sessions\\create.vue' /* webpackChunkName: "pages/admin/mentors/edit-mentor/_id/sessions/create" */))
const _d5a5fa84 = () => interopDefault(import('..\\pages\\admin\\mentors\\edit-mentor\\_id\\work-experiences\\create.vue' /* webpackChunkName: "pages/admin/mentors/edit-mentor/_id/work-experiences/create" */))
const _7752f2a4 = () => interopDefault(import('..\\pages\\admin\\mentors\\edit-mentor\\_id\\educations\\_id\\general.vue' /* webpackChunkName: "pages/admin/mentors/edit-mentor/_id/educations/_id/general" */))
const _4d763c40 = () => interopDefault(import('..\\pages\\admin\\mentors\\edit-mentor\\_id\\sessions\\_id\\general.vue' /* webpackChunkName: "pages/admin/mentors/edit-mentor/_id/sessions/_id/general" */))
const _3d4afe30 = () => interopDefault(import('..\\pages\\admin\\mentors\\edit-mentor\\_id\\work-experiences\\_id\\general.vue' /* webpackChunkName: "pages/admin/mentors/edit-mentor/_id/work-experiences/_id/general" */))
const _a2f5535e = () => interopDefault(import('..\\pages\\admin\\news\\create-news-test.vue' /* webpackChunkName: "pages/admin/news/create-news-test" */))
const _290b7b85 = () => interopDefault(import('..\\pages\\admin\\organizations\\invitations\\index.vue' /* webpackChunkName: "pages/admin/organizations/invitations/index" */))
const _47ca5a10 = () => interopDefault(import('..\\pages\\admin\\students\\skills-and-hobbies\\index.vue' /* webpackChunkName: "pages/admin/students/skills-and-hobbies/index" */))
const _51863492 = () => interopDefault(import('..\\pages\\admin\\students\\student-view.vue' /* webpackChunkName: "pages/admin/students/student-view" */))
const _776c9f51 = () => interopDefault(import('..\\pages\\admin\\students\\student-view\\_id\\certifications\\index.vue' /* webpackChunkName: "pages/admin/students/student-view/_id/certifications/index" */))
const _94df8582 = () => interopDefault(import('..\\pages\\admin\\students\\student-view\\_id\\educations\\index.vue' /* webpackChunkName: "pages/admin/students/student-view/_id/educations/index" */))
const _0f7a0880 = () => interopDefault(import('..\\pages\\admin\\students\\student-view\\_id\\general.vue' /* webpackChunkName: "pages/admin/students/student-view/_id/general" */))
const _6165d729 = () => interopDefault(import('..\\pages\\admin\\students\\student-view\\_id\\hobbies-and-list.vue' /* webpackChunkName: "pages/admin/students/student-view/_id/hobbies-and-list" */))
const _3b0abf30 = () => interopDefault(import('..\\pages\\admin\\students\\student-view\\_id\\projects\\index.vue' /* webpackChunkName: "pages/admin/students/student-view/_id/projects/index" */))
const _c1240c82 = () => interopDefault(import('..\\pages\\admin\\students\\student-view\\_id\\certifications\\_id\\general.vue' /* webpackChunkName: "pages/admin/students/student-view/_id/certifications/_id/general" */))
const _6fc77411 = () => interopDefault(import('..\\pages\\admin\\students\\student-view\\_id\\educations\\_id\\general.vue' /* webpackChunkName: "pages/admin/students/student-view/_id/educations/_id/general" */))
const _20b5de00 = () => interopDefault(import('..\\pages\\admin\\students\\student-view\\_id\\projects\\_id\\general.vue' /* webpackChunkName: "pages/admin/students/student-view/_id/projects/_id/general" */))
const _661133fa = () => interopDefault(import('..\\pages\\admin\\news\\create-news\\general.vue' /* webpackChunkName: "pages/admin/news/create-news/general" */))
const _55e6f15c = () => interopDefault(import('..\\pages\\admin\\organizations\\company\\create.vue' /* webpackChunkName: "pages/admin/organizations/company/create" */))
const _69d23786 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _52e73797 = () => interopDefault(import('..\\pages\\admin\\events\\edit-event\\_id.vue' /* webpackChunkName: "pages/admin/events/edit-event/_id" */))
const _5f3b2e75 = () => interopDefault(import('..\\pages\\admin\\events\\edit-event\\_id\\description.vue' /* webpackChunkName: "pages/admin/events/edit-event/_id/description" */))
const _8c2b143e = () => interopDefault(import('..\\pages\\admin\\events\\edit-event\\_id\\general.vue' /* webpackChunkName: "pages/admin/events/edit-event/_id/general" */))
const _48205d20 = () => interopDefault(import('..\\pages\\admin\\events\\edit-event\\_id\\student-applied-events\\index.vue' /* webpackChunkName: "pages/admin/events/edit-event/_id/student-applied-events/index" */))
const _49bb4f56 = () => interopDefault(import('..\\pages\\admin\\news\\edit-news\\_id-test.vue' /* webpackChunkName: "pages/admin/news/edit-news/_id-test" */))
const _4cefdeec = () => interopDefault(import('..\\pages\\admin\\organizations\\company\\_id.vue' /* webpackChunkName: "pages/admin/organizations/company/_id" */))
const _31c79360 = () => interopDefault(import('..\\pages\\admin\\news\\create-news\\_id\\description.vue' /* webpackChunkName: "pages/admin/news/create-news/_id/description" */))
const _18bff612 = () => interopDefault(import('..\\pages\\admin\\news\\edit-news\\_id\\description.vue' /* webpackChunkName: "pages/admin/news/edit-news/_id/description" */))
const _189593fe = () => interopDefault(import('..\\pages\\admin\\news\\edit-news\\_id\\general.vue' /* webpackChunkName: "pages/admin/news/edit-news/_id/general" */))
const _7170cc7e = () => interopDefault(import('..\\pages\\admin\\companies\\_id\\application.vue' /* webpackChunkName: "pages/admin/companies/_id/application" */))
const _3045c30a = () => interopDefault(import('..\\pages\\admin\\events\\_id\\general.vue' /* webpackChunkName: "pages/admin/events/_id/general" */))
const _055057f1 = () => interopDefault(import('..\\pages\\admin\\feedbacks\\_id\\application.vue' /* webpackChunkName: "pages/admin/feedbacks/_id/application" */))
const _178be4af = () => interopDefault(import('..\\pages\\admin\\jobs\\_id\\application.vue' /* webpackChunkName: "pages/admin/jobs/_id/application" */))
const _2d28c104 = () => interopDefault(import('..\\pages\\admin\\news\\_id\\general.vue' /* webpackChunkName: "pages/admin/news/_id/general" */))

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
    component: _78fe0bf4,
    name: "admin-approval",
    children: [{
      path: "blocked-list",
      component: _6a92ad36,
      name: "admin-approval-blocked-list"
    }, {
      path: "pending-list",
      component: _7c4d1bcc,
      name: "admin-approval-pending-list"
    }, {
      path: "verified-list",
      component: _39e1fced,
      name: "admin-approval-verified-list"
    }]
  }, {
    path: "/admin/companies",
    component: _71ddddda,
    name: "admin-companies"
  }, {
    path: "/admin/confirm-password",
    component: _6f23bd4b,
    name: "admin-confirm-password"
  }, {
    path: "/admin/course-applicant-lists",
    component: _039d96c7,
    name: "admin-course-applicant-lists"
  }, {
    path: "/admin/courses",
    component: _6e7ca2c6,
    name: "admin-courses"
  }, {
    path: "/admin/dashboard",
    component: _31fc643e,
    name: "admin-dashboard"
  }, {
    path: "/admin/document-list",
    component: _0ac1dcdd,
    name: "admin-document-list",
    children: [{
      path: "achievements",
      component: _27d2f8a1,
      name: "admin-document-list-achievements"
    }, {
      path: "educations",
      component: _0bd4034c,
      name: "admin-document-list-educations"
    }, {
      path: "personal",
      component: _76eec585,
      name: "admin-document-list-personal"
    }, {
      path: "projects",
      component: _44b40b0b,
      name: "admin-document-list-projects"
    }, {
      path: "references",
      component: _24af0d06,
      name: "admin-document-list-references"
    }, {
      path: "work-experience",
      component: _bd7ebf6e,
      name: "admin-document-list-work-experience"
    }]
  }, {
    path: "/admin/event-applicant-lists",
    component: _3b4ff5de,
    name: "admin-event-applicant-lists"
  }, {
    path: "/admin/events",
    component: _0f05e466,
    name: "admin-events"
  }, {
    path: "/admin/feedbacks",
    component: _5e3a0772,
    name: "admin-feedbacks"
  }, {
    path: "/admin/job-applicant-lists",
    component: _7c00fd9b,
    name: "admin-job-applicant-lists"
  }, {
    path: "/admin/jobs",
    component: _3ac00b6e,
    name: "admin-jobs"
  }, {
    path: "/admin/mentors",
    component: _6dbbc943,
    name: "admin-mentors"
  }, {
    path: "/admin/news",
    component: _08234bac,
    name: "admin-news"
  }, {
    path: "/admin/old-organizations",
    component: _7c24f872,
    name: "admin-old-organizations"
  }, {
    path: "/admin/organizations",
    component: _02891b75,
    name: "admin-organizations"
  }, {
    path: "/admin/profile",
    component: _106703b6,
    name: "admin-profile",
    children: [{
      path: "2fa",
      component: _083727fb,
      name: "admin-profile-2fa"
    }, {
      path: "general",
      component: _535646bc,
      name: "admin-profile-general"
    }, {
      path: "invitations",
      component: _48902c4e,
      name: "admin-profile-invitations"
    }, {
      path: "password",
      component: _7f9b125e,
      name: "admin-profile-password"
    }]
  }, {
    path: "/admin/settings",
    component: _53ff4034,
    name: "admin-settings",
    children: [{
      path: "collections",
      component: _09072ffa,
      name: "admin-settings-collections"
    }, {
      path: "consultations",
      component: _43a1c7ee,
      name: "admin-settings-consultations"
    }, {
      path: "products",
      component: _fd4f6810,
      name: "admin-settings-products"
    }, {
      path: "roles",
      component: _70d4285b,
      name: "admin-settings-roles"
    }, {
      path: "tags",
      component: _615edf23,
      name: "admin-settings-tags"
    }, {
      path: "users",
      component: _6c8e3c30,
      name: "admin-settings-users"
    }, {
      path: "collections/create",
      component: _c87639ca,
      name: "admin-settings-collections-create"
    }, {
      path: "consultations/create",
      component: _584b8090,
      name: "admin-settings-consultations-create"
    }, {
      path: "products/create",
      component: _5d350474,
      name: "admin-settings-products-create"
    }, {
      path: "roles/create",
      component: _5d35a47a,
      name: "admin-settings-roles-create"
    }, {
      path: "tags/create",
      component: _1b9d600a,
      name: "admin-settings-tags-create"
    }, {
      path: "users/invitation",
      component: _5414c7ab,
      name: "admin-settings-users-invitation"
    }, {
      path: "collections/:id",
      component: _400ae1aa,
      name: "admin-settings-collections-id"
    }, {
      path: "consultations/:id",
      component: _045c49ec,
      name: "admin-settings-consultations-id"
    }, {
      path: "products/:id",
      component: _6bf8ec60,
      name: "admin-settings-products-id"
    }, {
      path: "roles/:id",
      component: _f712f4fa,
      name: "admin-settings-roles-id"
    }, {
      path: "tags/:id",
      component: _04504e4b,
      name: "admin-settings-tags-id"
    }, {
      path: "users/:id",
      component: _3ddd8a98,
      name: "admin-settings-users-id"
    }, {
      path: "consultations/:id/form",
      component: _ed90c4cc,
      name: "admin-settings-consultations-id-form"
    }]
  }, {
    path: "/admin/students",
    component: _7ccd5d72,
    name: "admin-students"
  }, {
    path: "/admin/auth/forgot-password",
    component: _38c4e5ac,
    name: "admin-auth-forgot-password"
  }, {
    path: "/admin/auth/login",
    component: _3f57f4ce,
    name: "admin-auth-login"
  }, {
    path: "/admin/auth/reset-password",
    component: _6aa28278,
    name: "admin-auth-reset-password"
  }, {
    path: "/admin/auth/signup",
    component: _0ffedbfa,
    name: "admin-auth-signup"
  }, {
    path: "/admin/auth/two-factor-challenge",
    component: _6fdf7371,
    name: "admin-auth-two-factor-challenge"
  }, {
    path: "/admin/auth/two-factor-challenge-recovery",
    component: _5ca9a7a1,
    name: "admin-auth-two-factor-challenge-recovery"
  }, {
    path: "/admin/course-applicant-lists/course-application-view",
    component: _86eb0fae,
    name: "admin-course-applicant-lists-course-application-view",
    children: [{
      path: ":id?/certifications",
      component: _3b5e2a68,
      name: "admin-course-applicant-lists-course-application-view-id-certifications"
    }, {
      path: ":id?/educations",
      component: _1d8e2854,
      name: "admin-course-applicant-lists-course-application-view-id-educations"
    }, {
      path: ":id?/general",
      component: _50b8b7d7,
      name: "admin-course-applicant-lists-course-application-view-id-general"
    }, {
      path: ":id?/hobbies-and-list",
      component: _419d0c9c,
      name: "admin-course-applicant-lists-course-application-view-id-hobbies-and-list"
    }, {
      path: ":id?/projects",
      component: _ed27b0f2,
      name: "admin-course-applicant-lists-course-application-view-id-projects"
    }, {
      path: ":id?/certifications/:id/general",
      component: _52f516c8,
      name: "admin-course-applicant-lists-course-application-view-id-certifications-id-general"
    }, {
      path: ":id?/educations/:id/general",
      component: _cd1f04cc,
      name: "admin-course-applicant-lists-course-application-view-id-educations-id-general"
    }, {
      path: ":id?/projects/:id/general",
      component: _ac362e6e,
      name: "admin-course-applicant-lists-course-application-view-id-projects-id-general"
    }]
  }, {
    path: "/admin/courses/create-course",
    component: _45994bd7,
    name: "admin-courses-create-course",
    children: [{
      path: "general",
      component: _7eab29a1,
      name: "admin-courses-create-course-general"
    }, {
      path: ":id?/contents",
      component: _7734be15,
      name: "admin-courses-create-course-id-contents"
    }, {
      path: ":id?/description",
      component: _5a7a0999,
      name: "admin-courses-create-course-id-description"
    }, {
      path: ":id?/contents/create",
      component: _d1d1616e,
      name: "admin-courses-create-course-id-contents-create"
    }, {
      path: ":id?/contents/:id/general",
      component: _8b63130a,
      name: "admin-courses-create-course-id-contents-id-general"
    }]
  }, {
    path: "/admin/courses/edit-course",
    component: _b979ca6e,
    name: "admin-courses-edit-course",
    children: [{
      path: ":id?/edit-contents",
      component: _0c684c94,
      name: "admin-courses-edit-course-id-edit-contents"
    }, {
      path: ":id?/general",
      component: _17d04277,
      name: "admin-courses-edit-course-id-general"
    }, {
      path: ":id?/student-applied-courses",
      component: _5053cd7d,
      name: "admin-courses-edit-course-id-student-applied-courses"
    }, {
      path: ":id?/edit-contents/create",
      component: _6763a7c8,
      name: "admin-courses-edit-course-id-edit-contents-create"
    }, {
      path: ":id?/edit-contents/:id?/general",
      component: _f79f988c,
      name: "admin-courses-edit-course-id-edit-contents-id-general"
    }]
  }, {
    path: "/admin/event-applicant-lists/event-application-view",
    component: _1836720e,
    name: "admin-event-applicant-lists-event-application-view",
    children: [{
      path: ":id?/certifications",
      component: _30412138,
      name: "admin-event-applicant-lists-event-application-view-id-certifications"
    }, {
      path: ":id?/educations",
      component: _5947caa6,
      name: "admin-event-applicant-lists-event-application-view-id-educations"
    }, {
      path: ":id?/general",
      component: _7f38daa7,
      name: "admin-event-applicant-lists-event-application-view-id-general"
    }, {
      path: ":id?/hobbies-and-list",
      component: _3d6380e2,
      name: "admin-event-applicant-lists-event-application-view-id-hobbies-and-list"
    }, {
      path: ":id?/projects",
      component: _73770b52,
      name: "admin-event-applicant-lists-event-application-view-id-projects"
    }, {
      path: ":id?/certifications/:id/general",
      component: _43e5d5f8,
      name: "admin-event-applicant-lists-event-application-view-id-certifications-id-general"
    }, {
      path: ":id?/educations/:id/general",
      component: _518054ca,
      name: "admin-event-applicant-lists-event-application-view-id-educations-id-general"
    }, {
      path: ":id?/projects/:id/general",
      component: _5160cbf9,
      name: "admin-event-applicant-lists-event-application-view-id-projects-id-general"
    }]
  }, {
    path: "/admin/events/create",
    component: _0d2a19d0,
    name: "admin-events-create"
  }, {
    path: "/admin/events/create-event",
    component: _c20de9b6,
    name: "admin-events-create-event",
    children: [{
      path: "general",
      component: _79f2c213,
      name: "admin-events-create-event-general"
    }, {
      path: ":id?/description",
      component: _fa1c5d32,
      name: "admin-events-create-event-id-description"
    }]
  }, {
    path: "/admin/job-applicant-lists/job-application-view",
    component: _1eb8094e,
    name: "admin-job-applicant-lists-job-application-view",
    children: [{
      path: ":id?/certifications",
      component: _60e00598,
      name: "admin-job-applicant-lists-job-application-view-id-certifications"
    }, {
      path: ":id?/educations",
      component: _2ac7df06,
      name: "admin-job-applicant-lists-job-application-view-id-educations"
    }, {
      path: ":id?/general",
      component: _0594e707,
      name: "admin-job-applicant-lists-job-application-view-id-general"
    }, {
      path: ":id?/hobbies-and-list",
      component: _2b5f6082,
      name: "admin-job-applicant-lists-job-application-view-id-hobbies-and-list"
    }, {
      path: ":id?/projects",
      component: _0103b292,
      name: "admin-job-applicant-lists-job-application-view-id-projects"
    }, {
      path: ":id?/certifications/:id/general",
      component: _45ef4598,
      name: "admin-job-applicant-lists-job-application-view-id-certifications-id-general"
    }, {
      path: ":id?/educations/:id/general",
      component: _5bf2946a,
      name: "admin-job-applicant-lists-job-application-view-id-educations-id-general"
    }, {
      path: ":id?/projects/:id/general",
      component: _349e7399,
      name: "admin-job-applicant-lists-job-application-view-id-projects-id-general"
    }]
  }, {
    path: "/admin/mentors/add-mentor",
    component: _6c84db4c,
    name: "admin-mentors-add-mentor",
    children: [{
      path: "create",
      component: _b1115470,
      name: "admin-mentors-add-mentor-create"
    }, {
      path: ":id?/educations",
      component: _d8d6540e,
      name: "admin-mentors-add-mentor-id-educations"
    }, {
      path: ":id?/sessions",
      component: _0bdbbb32,
      name: "admin-mentors-add-mentor-id-sessions"
    }, {
      path: ":id?/work-experiences",
      component: _3c377112,
      name: "admin-mentors-add-mentor-id-work-experiences"
    }, {
      path: ":id?/educations/create",
      component: _06ba33e5,
      name: "admin-mentors-add-mentor-id-educations-create"
    }, {
      path: ":id?/sessions/create",
      component: _6fe67537,
      name: "admin-mentors-add-mentor-id-sessions-create"
    }, {
      path: ":id?/work-experiences/create",
      component: _fb4e1bb2,
      name: "admin-mentors-add-mentor-id-work-experiences-create"
    }, {
      path: ":id?/educations/:id/general",
      component: _9cfb13d2,
      name: "admin-mentors-add-mentor-id-educations-id-general"
    }, {
      path: ":id?/sessions/:id/general",
      component: _1f0e1c2e,
      name: "admin-mentors-add-mentor-id-sessions-id-general"
    }, {
      path: ":id?/work-experiences/:id?/general",
      component: _01f5fad9,
      name: "admin-mentors-add-mentor-id-work-experiences-id-general"
    }]
  }, {
    path: "/admin/mentors/edit-mentor",
    component: _20c64195,
    name: "admin-mentors-edit-mentor",
    children: [{
      path: ":id?/educations",
      component: _756b9d7c,
      name: "admin-mentors-edit-mentor-id-educations"
    }, {
      path: ":id?/general",
      component: _60b19443,
      name: "admin-mentors-edit-mentor-id-general"
    }, {
      path: ":id?/sessions",
      component: _fa708820,
      name: "admin-mentors-edit-mentor-id-sessions"
    }, {
      path: ":id?/work-experiences",
      component: _24904800,
      name: "admin-mentors-edit-mentor-id-work-experiences"
    }, {
      path: ":id?/educations/create",
      component: _0bb041bc,
      name: "admin-mentors-edit-mentor-id-educations-create"
    }, {
      path: ":id?/sessions/create",
      component: _0437e664,
      name: "admin-mentors-edit-mentor-id-sessions-create"
    }, {
      path: ":id?/work-experiences/create",
      component: _d5a5fa84,
      name: "admin-mentors-edit-mentor-id-work-experiences-create"
    }, {
      path: ":id?/educations/:id/general",
      component: _7752f2a4,
      name: "admin-mentors-edit-mentor-id-educations-id-general"
    }, {
      path: ":id?/sessions/:id/general",
      component: _4d763c40,
      name: "admin-mentors-edit-mentor-id-sessions-id-general"
    }, {
      path: ":id?/work-experiences/:id?/general",
      component: _3d4afe30,
      name: "admin-mentors-edit-mentor-id-work-experiences-id-general"
    }]
  }, {
    path: "/admin/news/create-news-test",
    component: _a2f5535e,
    name: "admin-news-create-news-test"
  }, {
    path: "/admin/organizations/invitations",
    component: _290b7b85,
    name: "admin-organizations-invitations"
  }, {
    path: "/admin/students/skills-and-hobbies",
    component: _47ca5a10,
    name: "admin-students-skills-and-hobbies"
  }, {
    path: "/admin/students/student-view",
    component: _51863492,
    name: "admin-students-student-view",
    children: [{
      path: ":id?/certifications",
      component: _776c9f51,
      name: "admin-students-student-view-id-certifications"
    }, {
      path: ":id?/educations",
      component: _94df8582,
      name: "admin-students-student-view-id-educations"
    }, {
      path: ":id?/general",
      component: _0f7a0880,
      name: "admin-students-student-view-id-general"
    }, {
      path: ":id?/hobbies-and-list",
      component: _6165d729,
      name: "admin-students-student-view-id-hobbies-and-list"
    }, {
      path: ":id?/projects",
      component: _3b0abf30,
      name: "admin-students-student-view-id-projects"
    }, {
      path: ":id?/certifications/:id/general",
      component: _c1240c82,
      name: "admin-students-student-view-id-certifications-id-general"
    }, {
      path: ":id?/educations/:id/general",
      component: _6fc77411,
      name: "admin-students-student-view-id-educations-id-general"
    }, {
      path: ":id?/projects/:id/general",
      component: _20b5de00,
      name: "admin-students-student-view-id-projects-id-general"
    }]
  }, {
    path: "/admin/news/create-news/general",
    component: _661133fa,
    name: "admin-news-create-news-general"
  }, {
    path: "/admin/organizations/company/create",
    component: _55e6f15c,
    name: "admin-organizations-company-create"
  }, {
    path: "/",
    component: _69d23786,
    name: "index"
  }, {
    path: "/admin/events/edit-event/:id?",
    component: _52e73797,
    name: "admin-events-edit-event-id",
    children: [{
      path: "description",
      component: _5f3b2e75,
      name: "admin-events-edit-event-id-description"
    }, {
      path: "general",
      component: _8c2b143e,
      name: "admin-events-edit-event-id-general"
    }, {
      path: "student-applied-events",
      component: _48205d20,
      name: "admin-events-edit-event-id-student-applied-events"
    }]
  }, {
    path: "/admin/news/edit-news/:id-test?",
    component: _49bb4f56,
    name: "admin-news-edit-news-id-test"
  }, {
    path: "/admin/organizations/company/:id?",
    component: _4cefdeec,
    name: "admin-organizations-company-id"
  }, {
    path: "/admin/news/create-news/:id?/description",
    component: _31c79360,
    name: "admin-news-create-news-id-description"
  }, {
    path: "/admin/news/edit-news/:id?/description",
    component: _18bff612,
    name: "admin-news-edit-news-id-description"
  }, {
    path: "/admin/news/edit-news/:id?/general",
    component: _189593fe,
    name: "admin-news-edit-news-id-general"
  }, {
    path: "/admin/companies/:id/application",
    component: _7170cc7e,
    name: "admin-companies-id-application"
  }, {
    path: "/admin/events/:id/general",
    component: _3045c30a,
    name: "admin-events-id-general"
  }, {
    path: "/admin/feedbacks/:id/application",
    component: _055057f1,
    name: "admin-feedbacks-id-application"
  }, {
    path: "/admin/jobs/:id/application",
    component: _178be4af,
    name: "admin-jobs-id-application"
  }, {
    path: "/admin/news/:id/general",
    component: _2d28c104,
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
