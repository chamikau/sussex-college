import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _612ab5d2 = () => interopDefault(import('..\\pages\\user\\applied-course-lists\\index.vue' /* webpackChunkName: "pages/user/applied-course-lists/index" */))
const _25c2bb7d = () => interopDefault(import('..\\pages\\user\\applied-event-lists\\index.vue' /* webpackChunkName: "pages/user/applied-event-lists/index" */))
const _5f6714c2 = () => interopDefault(import('..\\pages\\user\\approval\\index.vue' /* webpackChunkName: "pages/user/approval/index" */))
const _23257105 = () => interopDefault(import('..\\pages\\user\\confirm-password.vue' /* webpackChunkName: "pages/user/confirm-password" */))
const _5b3108d7 = () => interopDefault(import('..\\pages\\user\\courses\\index.vue' /* webpackChunkName: "pages/user/courses/index" */))
const _351d7767 = () => interopDefault(import('..\\pages\\user\\dashboard.vue' /* webpackChunkName: "pages/user/dashboard" */))
const _2c855aec = () => interopDefault(import('..\\pages\\user\\events\\index.vue' /* webpackChunkName: "pages/user/events/index" */))
const _7b95e632 = () => interopDefault(import('..\\pages\\user\\job\\index.vue' /* webpackChunkName: "pages/user/job/index" */))
const _3dfaabb2 = () => interopDefault(import('..\\pages\\user\\news\\index.vue' /* webpackChunkName: "pages/user/news/index" */))
const _09124af3 = () => interopDefault(import('..\\pages\\user\\organizations.vue' /* webpackChunkName: "pages/user/organizations" */))
const _0193f75a = () => interopDefault(import('..\\pages\\user\\organizations\\clinics\\index.vue' /* webpackChunkName: "pages/user/organizations/clinics/index" */))
const _ab7719ea = () => interopDefault(import('..\\pages\\user\\organizations\\invitations\\index.vue' /* webpackChunkName: "pages/user/organizations/invitations/index" */))
const _589f3ea4 = () => interopDefault(import('..\\pages\\user\\organizations\\clinics\\create.vue' /* webpackChunkName: "pages/user/organizations/clinics/create" */))
const _76e7ef7c = () => interopDefault(import('..\\pages\\user\\organizations\\clinics\\_id.vue' /* webpackChunkName: "pages/user/organizations/clinics/_id" */))
const _464b56bc = () => interopDefault(import('..\\pages\\user\\profile.vue' /* webpackChunkName: "pages/user/profile" */))
const _10173246 = () => interopDefault(import('..\\pages\\user\\profile\\index.vue' /* webpackChunkName: "pages/user/profile/index" */))
const _cb6dbbfe = () => interopDefault(import('..\\pages\\user\\profile\\2fa\\index.vue' /* webpackChunkName: "pages/user/profile/2fa/index" */))
const _0cd31694 = () => interopDefault(import('..\\pages\\user\\profile\\certification\\index.vue' /* webpackChunkName: "pages/user/profile/certification/index" */))
const _478cbbca = () => interopDefault(import('..\\pages\\user\\profile\\educations\\index.vue' /* webpackChunkName: "pages/user/profile/educations/index" */))
const _eb52df48 = () => interopDefault(import('..\\pages\\user\\profile\\general.vue' /* webpackChunkName: "pages/user/profile/general" */))
const _f0ba7f58 = () => interopDefault(import('..\\pages\\user\\profile\\invitations\\index.vue' /* webpackChunkName: "pages/user/profile/invitations/index" */))
const _e7318b52 = () => interopDefault(import('..\\pages\\user\\profile\\password.vue' /* webpackChunkName: "pages/user/profile/password" */))
const _c980a9e8 = () => interopDefault(import('..\\pages\\user\\profile\\projects\\index.vue' /* webpackChunkName: "pages/user/profile/projects/index" */))
const _6d453e77 = () => interopDefault(import('..\\pages\\user\\profile\\skills-and-hobbies\\index.vue' /* webpackChunkName: "pages/user/profile/skills-and-hobbies/index" */))
const _c5581bce = () => interopDefault(import('..\\pages\\user\\profile\\work-experiences\\index.vue' /* webpackChunkName: "pages/user/profile/work-experiences/index" */))
const _9577f2ac = () => interopDefault(import('..\\pages\\user\\profile\\certification\\create.vue' /* webpackChunkName: "pages/user/profile/certification/create" */))
const _5aa227fa = () => interopDefault(import('..\\pages\\user\\profile\\educations\\create.vue' /* webpackChunkName: "pages/user/profile/educations/create" */))
const _172bfd9c = () => interopDefault(import('..\\pages\\user\\profile\\projects\\create.vue' /* webpackChunkName: "pages/user/profile/projects/create" */))
const _34de9bc5 = () => interopDefault(import('..\\pages\\user\\profile\\work-experiences\\create.vue' /* webpackChunkName: "pages/user/profile/work-experiences/create" */))
const _2712611c = () => interopDefault(import('..\\pages\\user\\profile\\certification\\_id\\general.vue' /* webpackChunkName: "pages/user/profile/certification/_id/general" */))
const _64081fb5 = () => interopDefault(import('..\\pages\\user\\profile\\educations\\_id\\general.vue' /* webpackChunkName: "pages/user/profile/educations/_id/general" */))
const _b2b754b8 = () => interopDefault(import('..\\pages\\user\\profile\\projects\\_id\\general.vue' /* webpackChunkName: "pages/user/profile/projects/_id/general" */))
const _c01d1412 = () => interopDefault(import('..\\pages\\user\\profile\\work-experiences\\_id\\general.vue' /* webpackChunkName: "pages/user/profile/work-experiences/_id/general" */))
const _eb8de3a4 = () => interopDefault(import('..\\pages\\user\\profile\\_id.vue' /* webpackChunkName: "pages/user/profile/_id" */))
const _5ca66da0 = () => interopDefault(import('..\\pages\\user\\settings.vue' /* webpackChunkName: "pages/user/settings" */))
const _c2875686 = () => interopDefault(import('..\\pages\\user\\settings\\collections\\index.vue' /* webpackChunkName: "pages/user/settings/collections/index" */))
const _16996e28 = () => interopDefault(import('..\\pages\\user\\settings\\consultations\\index.vue' /* webpackChunkName: "pages/user/settings/consultations/index" */))
const _d427ad04 = () => interopDefault(import('..\\pages\\user\\settings\\products\\index.vue' /* webpackChunkName: "pages/user/settings/products/index" */))
const _6a6aaed6 = () => interopDefault(import('..\\pages\\user\\settings\\roles\\index.vue' /* webpackChunkName: "pages/user/settings/roles/index" */))
const _924b20ae = () => interopDefault(import('..\\pages\\user\\settings\\tags\\index.vue' /* webpackChunkName: "pages/user/settings/tags/index" */))
const _72f6872c = () => interopDefault(import('..\\pages\\user\\settings\\users\\index.vue' /* webpackChunkName: "pages/user/settings/users/index" */))
const _60828da1 = () => interopDefault(import('..\\pages\\user\\settings\\collections\\create.vue' /* webpackChunkName: "pages/user/settings/collections/create" */))
const _376ebcd4 = () => interopDefault(import('..\\pages\\user\\settings\\consultations\\create.vue' /* webpackChunkName: "pages/user/settings/consultations/create" */))
const _4f4d5100 = () => interopDefault(import('..\\pages\\user\\settings\\products\\create.vue' /* webpackChunkName: "pages/user/settings/products/create" */))
const _9382966e = () => interopDefault(import('..\\pages\\user\\settings\\roles\\create.vue' /* webpackChunkName: "pages/user/settings/roles/create" */))
const _4c27d035 = () => interopDefault(import('..\\pages\\user\\settings\\tags\\create.vue' /* webpackChunkName: "pages/user/settings/tags/create" */))
const _d9b1489e = () => interopDefault(import('..\\pages\\user\\settings\\users\\invitation.vue' /* webpackChunkName: "pages/user/settings/users/invitation" */))
const _5de26265 = () => interopDefault(import('..\\pages\\user\\settings\\collections\\_id.vue' /* webpackChunkName: "pages/user/settings/collections/_id" */))
const _1b3577f2 = () => interopDefault(import('..\\pages\\user\\settings\\consultations\\_id\\index.vue' /* webpackChunkName: "pages/user/settings/consultations/_id/index" */))
const _50d27366 = () => interopDefault(import('..\\pages\\user\\settings\\products\\_id.vue' /* webpackChunkName: "pages/user/settings/products/_id" */))
const _34a3cc3d = () => interopDefault(import('..\\pages\\user\\settings\\roles\\_id.vue' /* webpackChunkName: "pages/user/settings/roles/_id" */))
const _d33b6f5e = () => interopDefault(import('..\\pages\\user\\settings\\tags\\_id.vue' /* webpackChunkName: "pages/user/settings/tags/_id" */))
const _23ea5d5c = () => interopDefault(import('..\\pages\\user\\settings\\users\\_id.vue' /* webpackChunkName: "pages/user/settings/users/_id" */))
const _2f1d96d4 = () => interopDefault(import('..\\pages\\user\\settings\\consultations\\_id\\form.vue' /* webpackChunkName: "pages/user/settings/consultations/_id/form" */))
const _5dcc8a74 = () => interopDefault(import('..\\pages\\user\\student\\index.vue' /* webpackChunkName: "pages/user/student/index" */))
const _39191db0 = () => interopDefault(import('..\\pages\\user\\auth\\forgot-password.vue' /* webpackChunkName: "pages/user/auth/forgot-password" */))
const _752f54d4 = () => interopDefault(import('..\\pages\\user\\auth\\login.vue' /* webpackChunkName: "pages/user/auth/login" */))
const _7adc057e = () => interopDefault(import('..\\pages\\user\\auth\\reset-password.vue' /* webpackChunkName: "pages/user/auth/reset-password" */))
const _7d1532bd = () => interopDefault(import('..\\pages\\user\\auth\\signup.vue' /* webpackChunkName: "pages/user/auth/signup" */))
const _247172aa = () => interopDefault(import('..\\pages\\user\\auth\\two-factor-challenge.vue' /* webpackChunkName: "pages/user/auth/two-factor-challenge" */))
const _7382d5a7 = () => interopDefault(import('..\\pages\\user\\auth\\two-factor-challenge-recovery.vue' /* webpackChunkName: "pages/user/auth/two-factor-challenge-recovery" */))
const _e474b4be = () => interopDefault(import('..\\pages\\user\\student\\cv-print.vue' /* webpackChunkName: "pages/user/student/cv-print" */))
const _5ab99bd8 = () => interopDefault(import('..\\pages\\user\\auth\\registration\\education-steps.vue' /* webpackChunkName: "pages/user/auth/registration/education-steps" */))
const _026f5a50 = () => interopDefault(import('..\\pages\\user\\auth\\registration\\signup-steps.vue' /* webpackChunkName: "pages/user/auth/registration/signup-steps" */))
const _629f027d = () => interopDefault(import('..\\pages\\user\\auth\\registration\\skill-steps.vue' /* webpackChunkName: "pages/user/auth/registration/skill-steps" */))
const _d38d847e = () => interopDefault(import('..\\pages\\user\\auth\\registration\\student-steps-old.vue' /* webpackChunkName: "pages/user/auth/registration/student-steps-old" */))
const _7f7e9390 = () => interopDefault(import('..\\pages\\user\\auth\\registration\\welcome-page.vue' /* webpackChunkName: "pages/user/auth/registration/welcome-page" */))
const _054464d0 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _f3943db6 = () => interopDefault(import('..\\pages\\user\\mentors\\_id.vue' /* webpackChunkName: "pages/user/mentors/_id" */))
const _5ac6ac13 = () => interopDefault(import('..\\pages\\user\\mentors\\_id\\general.vue' /* webpackChunkName: "pages/user/mentors/_id/general" */))
const _3ec06cf4 = () => interopDefault(import('..\\pages\\user\\applied-course-lists\\_id\\application.vue' /* webpackChunkName: "pages/user/applied-course-lists/_id/application" */))
const _68ec1afb = () => interopDefault(import('..\\pages\\user\\applied-event-lists\\_id\\application.vue' /* webpackChunkName: "pages/user/applied-event-lists/_id/application" */))
const _45efd161 = () => interopDefault(import('..\\pages\\user\\courses\\_id\\application.vue' /* webpackChunkName: "pages/user/courses/_id/application" */))
const _beb25fa8 = () => interopDefault(import('..\\pages\\user\\events\\_id\\application.vue' /* webpackChunkName: "pages/user/events/_id/application" */))
const _096c8c25 = () => interopDefault(import('..\\pages\\user\\feedbacks\\_id\\create.vue' /* webpackChunkName: "pages/user/feedbacks/_id/create" */))
const _5216c5b4 = () => interopDefault(import('..\\pages\\user\\job\\_id\\application.vue' /* webpackChunkName: "pages/user/job/_id/application" */))
const _09b530b4 = () => interopDefault(import('..\\pages\\user\\news\\_id\\application.vue' /* webpackChunkName: "pages/user/news/_id/application" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/user/applied-course-lists",
    component: _612ab5d2,
    name: "user-applied-course-lists"
  }, {
    path: "/user/applied-event-lists",
    component: _25c2bb7d,
    name: "user-applied-event-lists"
  }, {
    path: "/user/approval",
    component: _5f6714c2,
    name: "user-approval"
  }, {
    path: "/user/confirm-password",
    component: _23257105,
    name: "user-confirm-password"
  }, {
    path: "/user/courses",
    component: _5b3108d7,
    name: "user-courses"
  }, {
    path: "/user/dashboard",
    component: _351d7767,
    name: "user-dashboard"
  }, {
    path: "/user/events",
    component: _2c855aec,
    name: "user-events"
  }, {
    path: "/user/job",
    component: _7b95e632,
    name: "user-job"
  }, {
    path: "/user/news",
    component: _3dfaabb2,
    name: "user-news"
  }, {
    path: "/user/organizations",
    component: _09124af3,
    name: "user-organizations",
    children: [{
      path: "clinics",
      component: _0193f75a,
      name: "user-organizations-clinics"
    }, {
      path: "invitations",
      component: _ab7719ea,
      name: "user-organizations-invitations"
    }, {
      path: "clinics/create",
      component: _589f3ea4,
      name: "user-organizations-clinics-create"
    }, {
      path: "clinics/:id",
      component: _76e7ef7c,
      name: "user-organizations-clinics-id"
    }]
  }, {
    path: "/user/profile",
    component: _464b56bc,
    children: [{
      path: "",
      component: _10173246,
      name: "user-profile"
    }, {
      path: "2fa",
      component: _cb6dbbfe,
      name: "user-profile-2fa"
    }, {
      path: "certification",
      component: _0cd31694,
      name: "user-profile-certification"
    }, {
      path: "educations",
      component: _478cbbca,
      name: "user-profile-educations"
    }, {
      path: "general",
      component: _eb52df48,
      name: "user-profile-general"
    }, {
      path: "invitations",
      component: _f0ba7f58,
      name: "user-profile-invitations"
    }, {
      path: "password",
      component: _e7318b52,
      name: "user-profile-password"
    }, {
      path: "projects",
      component: _c980a9e8,
      name: "user-profile-projects"
    }, {
      path: "skills-and-hobbies",
      component: _6d453e77,
      name: "user-profile-skills-and-hobbies"
    }, {
      path: "work-experiences",
      component: _c5581bce,
      name: "user-profile-work-experiences"
    }, {
      path: "certification/create",
      component: _9577f2ac,
      name: "user-profile-certification-create"
    }, {
      path: "educations/create",
      component: _5aa227fa,
      name: "user-profile-educations-create"
    }, {
      path: "projects/create",
      component: _172bfd9c,
      name: "user-profile-projects-create"
    }, {
      path: "work-experiences/create",
      component: _34de9bc5,
      name: "user-profile-work-experiences-create"
    }, {
      path: "certification/:id/general",
      component: _2712611c,
      name: "user-profile-certification-id-general"
    }, {
      path: "educations/:id/general",
      component: _64081fb5,
      name: "user-profile-educations-id-general"
    }, {
      path: "projects/:id/general",
      component: _b2b754b8,
      name: "user-profile-projects-id-general"
    }, {
      path: "work-experiences/:id?/general",
      component: _c01d1412,
      name: "user-profile-work-experiences-id-general"
    }, {
      path: ":id",
      component: _eb8de3a4,
      name: "user-profile-id"
    }]
  }, {
    path: "/user/settings",
    component: _5ca66da0,
    name: "user-settings",
    children: [{
      path: "collections",
      component: _c2875686,
      name: "user-settings-collections"
    }, {
      path: "consultations",
      component: _16996e28,
      name: "user-settings-consultations"
    }, {
      path: "products",
      component: _d427ad04,
      name: "user-settings-products"
    }, {
      path: "roles",
      component: _6a6aaed6,
      name: "user-settings-roles"
    }, {
      path: "tags",
      component: _924b20ae,
      name: "user-settings-tags"
    }, {
      path: "users",
      component: _72f6872c,
      name: "user-settings-users"
    }, {
      path: "collections/create",
      component: _60828da1,
      name: "user-settings-collections-create"
    }, {
      path: "consultations/create",
      component: _376ebcd4,
      name: "user-settings-consultations-create"
    }, {
      path: "products/create",
      component: _4f4d5100,
      name: "user-settings-products-create"
    }, {
      path: "roles/create",
      component: _9382966e,
      name: "user-settings-roles-create"
    }, {
      path: "tags/create",
      component: _4c27d035,
      name: "user-settings-tags-create"
    }, {
      path: "users/invitation",
      component: _d9b1489e,
      name: "user-settings-users-invitation"
    }, {
      path: "collections/:id",
      component: _5de26265,
      name: "user-settings-collections-id"
    }, {
      path: "consultations/:id",
      component: _1b3577f2,
      name: "user-settings-consultations-id"
    }, {
      path: "products/:id",
      component: _50d27366,
      name: "user-settings-products-id"
    }, {
      path: "roles/:id",
      component: _34a3cc3d,
      name: "user-settings-roles-id"
    }, {
      path: "tags/:id",
      component: _d33b6f5e,
      name: "user-settings-tags-id"
    }, {
      path: "users/:id",
      component: _23ea5d5c,
      name: "user-settings-users-id"
    }, {
      path: "consultations/:id/form",
      component: _2f1d96d4,
      name: "user-settings-consultations-id-form"
    }]
  }, {
    path: "/user/student",
    component: _5dcc8a74,
    name: "user-student"
  }, {
    path: "/user/auth/forgot-password",
    component: _39191db0,
    name: "user-auth-forgot-password"
  }, {
    path: "/user/auth/login",
    component: _752f54d4,
    name: "user-auth-login"
  }, {
    path: "/user/auth/reset-password",
    component: _7adc057e,
    name: "user-auth-reset-password"
  }, {
    path: "/user/auth/signup",
    component: _7d1532bd,
    name: "user-auth-signup"
  }, {
    path: "/user/auth/two-factor-challenge",
    component: _247172aa,
    name: "user-auth-two-factor-challenge"
  }, {
    path: "/user/auth/two-factor-challenge-recovery",
    component: _7382d5a7,
    name: "user-auth-two-factor-challenge-recovery"
  }, {
    path: "/user/student/cv-print",
    component: _e474b4be,
    name: "user-student-cv-print"
  }, {
    path: "/user/auth/registration/education-steps",
    component: _5ab99bd8,
    name: "user-auth-registration-education-steps"
  }, {
    path: "/user/auth/registration/signup-steps",
    component: _026f5a50,
    name: "user-auth-registration-signup-steps"
  }, {
    path: "/user/auth/registration/skill-steps",
    component: _629f027d,
    name: "user-auth-registration-skill-steps"
  }, {
    path: "/user/auth/registration/student-steps-old",
    component: _d38d847e,
    name: "user-auth-registration-student-steps-old"
  }, {
    path: "/user/auth/registration/welcome-page",
    component: _7f7e9390,
    name: "user-auth-registration-welcome-page"
  }, {
    path: "/",
    component: _054464d0,
    name: "index"
  }, {
    path: "/user/mentors/:id?",
    component: _f3943db6,
    name: "user-mentors-id",
    children: [{
      path: "general",
      component: _5ac6ac13,
      name: "user-mentors-id-general"
    }]
  }, {
    path: "/user/applied-course-lists/:id?/application",
    component: _3ec06cf4,
    name: "user-applied-course-lists-id-application"
  }, {
    path: "/user/applied-event-lists/:id?/application",
    component: _68ec1afb,
    name: "user-applied-event-lists-id-application"
  }, {
    path: "/user/courses/:id/application",
    component: _45efd161,
    name: "user-courses-id-application"
  }, {
    path: "/user/events/:id/application",
    component: _beb25fa8,
    name: "user-events-id-application"
  }, {
    path: "/user/feedbacks/:id?/create",
    component: _096c8c25,
    name: "user-feedbacks-id-create"
  }, {
    path: "/user/job/:id/application",
    component: _5216c5b4,
    name: "user-job-id-application"
  }, {
    path: "/user/news/:id/application",
    component: _09b530b4,
    name: "user-news-id-application"
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
