$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("register_demo.feature");
formatter.feature({
  "line": 1,
  "name": "Registration",
  "description": "",
  "id": "registration",
  "keyword": "Feature"
});
formatter.background({
  "line": 2,
  "name": "User navigates to Demo Web Shop home page and click on Register link",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 31,
  "name": "Failure in registration on leaving the password blank",
  "description": "",
  "id": "registration;failure-in-registration-on-leaving-the-password-blank",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@password_field_validation"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "User is on registration page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "user leaves password blank and clicks the button",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "display password error message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefDemoCart.user_is_on_registration_page()"
});
formatter.result({
  "duration": 17925638200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefDemoCart.user_leaves_password_blank_and_clicks_the_button()"
});
formatter.result({
  "duration": 14831422700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefDemoCart.display_password_error_message()"
});
formatter.result({
  "duration": 366270300,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "User navigates to Demo Web Shop home page and click on Register link",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 36,
  "name": "Failure in registration on leaving the confirm password blank",
  "description": "",
  "id": "registration;failure-in-registration-on-leaving-the-confirm-password-blank",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@confirm_password_field_validation"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "User is on registration page",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "user leaves confirm password blank and clicks the button",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "display confirm password error message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefDemoCart.user_is_on_registration_page()"
});
formatter.result({
  "duration": 11800126300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefDemoCart.user_leaves_confirm_password_blank_and_clicks_the_button()"
});
formatter.result({
  "duration": 26761607400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefDemoCart.display_confirm_password_error_message()"
});
formatter.result({
  "duration": 1548786600,
  "status": "passed"
});
});