# ServiceNow Incident CRUD API Testing with Playwright and TypeScript

## Table of Contents

1.  Learning Objectives
2.  Theory and Fundamentals
3.  Playwright API Testing Concepts
4.  OAuth Token and Request Flow
5.  Standardized CRUD Example
6.  Code Walkthrough
7.  Assertions and Validation
8.  Troubleshooting
9.  Best Practices
10. Interview Questions and Answers

## 1. Learning Objectives

-   Explain REST API testing and the ServiceNow Table API.
-   Use Playwright's `request` fixture to send API requests.
-   Obtain an OAuth token and reuse it in subsequent requests.
-   Create, retrieve, update, and delete an incident.
-   Validate responses using Playwright assertions.
-   Understand serial execution, shared state, and test isolation.

## 2. Theory and Fundamentals

### What is API testing?

API testing checks the behavior of service endpoints directly, including
status codes, response bodies, headers, authentication, authorization,
and business rules. It does not require the browser UI.

### What is REST?

REST APIs expose resources through URLs and use HTTP methods to perform
operations. The ServiceNow Incident Table API provides access to
incident records.

### CRUD and HTTP methods

  Operation   Method      Purpose
  ----------- ----------- ----------------------
  Create      POST        Create an incident
  Read        GET         Retrieve an incident
  Update      PUT/PATCH   Change incident data
  Delete      DELETE      Delete an incident

### ServiceNow endpoints

-   OAuth token endpoint:
    `https://<instance>.service-now.com/oauth_token.do`
-   Incident collection:
    `https://<instance>.service-now.com/api/now/table/incident`
-   Single incident:
    `https://<instance>.service-now.com/api/now/table/incident/<sys_id>`

`sys_id` uniquely identifies the record. Capture it from the create
response and use it in retrieve, update, delete, and delete-verification
requests.

### Important status codes

-   `200`: successful request.
-   `201`: resource created in many APIs.
-   `204`: successful operation with no response body.
-   `400`: invalid request.
-   `401`: missing/invalid authentication.
-   `403`: insufficient permissions.
-   `404`: endpoint or record not found.
-   `5xx`: server-side error.

Check the response from your ServiceNow instance and assert the
documented expected behavior. Do not assume every successful POST must
return 201 or every successful DELETE must return 204.

## 3. Playwright API Testing Concepts

### `request` fixture

Playwright Test provides a `request` fixture that can send HTTP requests
without launching a browser:

``` typescript
test("API example", async ({ request }) => {
  const response = await request.get("https://example.com/api");
  console.log(response.status());
});
```

### `APIRequestContext`

The `request` fixture supplies an API request context. It supports
methods such as `get`, `post`, `put`, `patch`, and `delete`, along with
headers, query parameters, and request bodies.

### Request body formats

-   `form`: sends form fields, appropriate for a token endpoint
    expecting `application/x-www-form-urlencoded`.
-   `data`: sends structured request data, commonly an object serialized
    as JSON for REST APIs.
-   `headers`: sends metadata and authorization information.

### Response methods

-   `response.status()` returns the HTTP status code.
-   `response.ok()` indicates whether the status is in the 2xx range.
-   `response.json()` parses a JSON response body.
-   `response.headers()` returns response headers.

### Serial execution and shared variables

`test.describe.serial()` runs tests in the group sequentially and marks
later tests dependent on earlier tests. Shared variables such as `token`
and `id` can pass data between tests, but this creates order dependency.
For a learning demonstration, serial CRUD is understandable. In larger
suites, prefer a setup step or fixture that creates the data needed by
each test and avoids unnecessary cross-test state.

### OAuth 2.0

OAuth 2.0 issues access tokens to clients that can then call protected
APIs. The sample token request uses `grant_type=password`, which is a
legacy grant and may be disabled or disallowed. Use it only if the
instance explicitly supports it; use the approved OAuth flow for your
organization.

**Credential warning:** The original example includes credential-like
values. Rotate/revoke exposed client secrets and passwords, and never
store real secrets in code or source control. The example below uses
placeholders.

## 4. OAuth Token and Request Flow

1.  POST to `/oauth_token.do`.
2.  Send the expected form fields and content type.
3.  Parse the response JSON.
4.  Save `access_token` to `token`.
5.  Send `Authorization: Bearer ${token}` in the Incident Table API
    requests.
6.  Create the incident and capture `result.sys_id` in `id`.
7.  Reuse `id` for GET, update, DELETE, and verification.

## 5. Standardized CRUD Example

This example preserves the simple structure of the original serial test
flow while adding status and data assertions. Replace the placeholders
with values from a secure local configuration; do not commit real
credentials.

``` typescript
import { test, expect } from "@playwright/test";

let token: string;
let id: string;

const baseUrl = "https://<instance>.service-now.com";

test.describe.serial("Incident in ServiceNow", () => {
  // Generate OAuth Token
  test("Test to generate token", async ({ request }) => {
    const response = await request.post(`${baseUrl}/oauth_token.do`, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      form: {
        client_id: "<client-id>",
        client_secret: "<client-secret>",
        grant_type: "password",
        username: "<username>",
        password: "<password>"
      }
    });

    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody.access_token).toBeTruthy();

    token = responseBody.access_token;
  });

  // Create Incident
  test("Test to create incident", async ({ request }) => {
    const response = await request.post(
      `${baseUrl}/api/now/table/incident`,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        data: {
          short_description: "VDI issue generated by Playwright API"
        }
      }
    );

    expect([200, 201]).toContain(response.status());

    const responseBody = await response.json();
    expect(responseBody.result.sys_id).toBeTruthy();

    id = responseBody.result.sys_id;
  });

  // Retrieve Incident
  test("Test to retrieve incident", async ({ request }) => {
    const response = await request.get(
      `${baseUrl}/api/now/table/incident/${id}`,
      {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }
    );

    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody.result.sys_id).toBe(id);
    expect(responseBody.result.short_description)
      .toContain("VDI issue");
  });

  // Update Incident
  test("Test to update incident", async ({ request }) => {
    const response = await request.patch(
      `${baseUrl}/api/now/table/incident/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        data: {
          short_description:
            "VDI issue generated by Playwright API - updated"
        }
      }
    );

    expect([200, 204]).toContain(response.status());
  });

  // Verify Update
  test("Test to verify incident update", async ({ request }) => {
    const response = await request.get(
      `${baseUrl}/api/now/table/incident/${id}`,
      {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }
    );

    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody.result.short_description).toContain("updated");
  });

  // Delete Incident
  test("Test to delete incident", async ({ request }) => {
    const response = await request.delete(
      `${baseUrl}/api/now/table/incident/${id}`,
      {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }
    );

    expect([200, 204]).toContain(response.status());
  });

  // Verify Deleted Incident
  test("Test to retrieve the deleted incident", async ({ request }) => {
    const response = await request.get(
      `${baseUrl}/api/now/table/incident/${id}`,
      {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }
    );

    // Confirm the exact not-found behavior supported by your instance.
    expect(response.status()).toBe(404);
  });
});
```

**Important:** If your ServiceNow instance returns a different
documented response for deletion or missing records, update the final
assertion accordingly. If `PATCH` is not the method you want to
demonstrate, use `PUT` and follow the semantics expected by your API.
The example assumes the instance allows the configured OAuth grant and
the user has the required table/field permissions.

## 6. Code Walkthrough

### Imports

``` typescript
import { test, expect } from "@playwright/test";
```

-   `test` defines and runs test cases.
-   `expect` provides assertions so a failed API response causes the
    test to fail.

### Shared variables

``` typescript
let token: string;
let id: string;
```

-   `token` stores the OAuth access token.
-   `id` stores the created incident's `sys_id`.
-   `string` is more precise than `any` for these values.

### Generate token

The POST request sends URL-encoded form fields. The response JSON is
parsed and `access_token` is saved for later requests.

### Create incident

The POST request sends a JSON object in `data`. The response is parsed,
and `result.sys_id` is saved to `id`.

### Retrieve and update

The URL includes `id` to address the exact record. The test checks the
response status and validates the record's fields. The sample uses PATCH
to update only `short_description`.

### Delete and verify

The DELETE request removes the record if the user has permission. A
later GET checks that the record is no longer available. Verify your
instance's exact missing-record response before making the assertion
strict.

## 7. Assertions and Validation

A reliable API test should validate: - Status code. - Required response
properties. - The `sys_id` returned by create. - The record ID in the
GET response. - The updated value after a subsequent GET. - The expected
post-delete behavior.

Examples:

``` typescript
expect(response.status()).toBe(200);
expect(response.ok()).toBeTruthy();
expect(responseBody.result.sys_id).toBeTruthy();
expect(responseBody.result.short_description).toContain("updated");
```

`response.ok()` only confirms a 2xx response. Use a specific status
assertion when the API contract expects one status.

## 8. Troubleshooting

  ------------------------------------------------------------------------------
  Problem                 Likely cause            Check
  ----------------------- ----------------------- ------------------------------
  Token request returns   Invalid grant or form   Verify the grant type,
  400                     fields                  required fields, and OAuth app
                                                  configuration

  Token request returns   Invalid client/user     Verify client ID/secret and
  401                     credentials             user authentication

  Create returns 401      Missing, empty, or      Confirm token generation ran
                          expired token           first and `token` was assigned

  Create returns 403      Missing table/field     Check ServiceNow roles and
                          permissions             ACLs

  GET returns 404         Wrong URL or invalid    Print the ID after create and
                          `sys_id`                inspect the endpoint

  `id` is undefined       Create response was not Inspect
                          parsed or `sys_id` path `responseBody.result.sys_id`
                          is wrong                

  Later tests fail after  Serial dependency or    Fix the first failure; later
  token test              earlier test failure    tests depend on it

  Delete verification is  Instance-specific API   Inspect response body and
  not 404                 behavior                document expected behavior

  TypeScript reports      Response body is not    Start with narrow types or add
  `any`/type issues       typed                   a response interface after
                                                  learning the flow
  ------------------------------------------------------------------------------

## 9. Best Practices

-   Use a non-production ServiceNow instance for CRUD exercises.
-   Never hardcode real passwords or client secrets in committed source
    files.
-   Rotate credentials exposed in chat, logs, or source control.
-   Keep assertions close to the request that they validate.
-   Capture `sys_id` dynamically rather than hardcoding a record ID.
-   Avoid relying on test order when tests can be made independent.
-   Use a dedicated test user with the minimum required permissions.
-   Clean up test records even when a test fails; consider a
    `try/finally` or dedicated cleanup strategy in a mature suite.
-   Use `PATCH` for a partial update where supported; understand `PUT`
    semantics before using it.
-   Keep URLs and test data configurable when the suite grows.

## 10. Interview Questions and Answers

### Beginner

**1. Can Playwright test APIs without opening a browser?**\
Yes. The Playwright Test `request` fixture can send HTTP requests
directly, so browser launch is not required for API-only tests.

**2. What is the `request` fixture?**\
It provides an API request context that supports HTTP methods and
request options such as headers, form data, and JSON data.

**3. What is the ServiceNow Table API?**\
It is a REST interface for accessing records in ServiceNow tables,
including Incident, subject to the user's permissions.

**4. What does CRUD stand for?**\
Create, Read, Update, and Delete.

**5. Why do we use `sys_id`?**\
It uniquely identifies a ServiceNow record and lets the test target the
record created earlier.

**6. What is the purpose of `response.json()`?**\
It parses the JSON response body into a JavaScript/TypeScript value so
fields can be inspected.

**7. What does `response.status()` return?**\
The numeric HTTP status code returned by the server.

### Intermediate

**8. How do you generate an OAuth token in Playwright?**\
Send a POST request to the OAuth token endpoint with the required form
fields, parse the response JSON, and store the returned access token.

**9. Why use `form` for the token request and `data` for incident
creation?**\
The token endpoint expects URL-encoded form fields, while the Table API
incident request sends a JSON payload.

**10. How do you pass the token to the Table API?**\
Set the header to `Authorization: Bearer <access_token>`.

**11. How do you chain create and retrieve requests?**\
Read `result.sys_id` from the create response, save it in a variable,
and interpolate that value into the later GET URL.

**12. What is `test.describe.serial()`?**\
It configures tests in a group to run sequentially and treats later
tests as dependent on earlier ones. This is useful for a teaching demo
but can reduce isolation and resilience.

**13. What is the difference between
`expect(response.status()).toBe(200)` and
`expect(response.ok()).toBeTruthy()`?**\
The first requires exactly 200. The second accepts any 2xx status. Use
the assertion that matches the API contract.

**14. Why should the test verify the update with a GET request?**\
A successful update status alone does not prove the expected field
changed. A follow-up GET validates persisted state.

**15. Why can a token request succeed while a Table API request returns
403?**\
The token authenticates the caller, but the caller may not have
permission to access the table or fields.

### Scenario-based

**16. Token generation succeeds, but `token` is undefined in the create
test. What do you check?**\
Inspect the token response, confirm `access_token` exists, verify the
assignment, and ensure the token test completed before the create test.

**17. The create response returns an ID, but GET fails. What do you
check?**\
Confirm the exact value of `result.sys_id`, the base URL, endpoint path,
authorization header, and user permissions.

**18. The create request returns 201 in one environment and 200 in
another. Is that always a defect?**\
Not necessarily. Confirm the API contract and instance behavior, then
assert the documented accepted response codes.

**19. How would you validate a failed authentication scenario?**\
Send a request with a missing, invalid, or expired token and assert the
expected unauthorized response, commonly 401, according to the
instance's behavior.

**20. How would you test that an incident was deleted?**\
Check the DELETE response, then GET the same `sys_id` and assert the
documented not-found or empty-result behavior.

**21. Why might a valid token return 403?**\
The integration user may not have the required role, table access, field
access, or ACL permission.

**22. What happens if the create test fails but the retrieve test still
runs?**\
The later test may use an empty or stale ID. Serial mode marks dependent
tests as failed/skipped in relevant failure situations; the suite should
still make dependencies explicit and validate setup state.

### Advanced

**23. What are the risks of shared variables between tests?**\
They create hidden dependencies, can cause parallelization problems, and
may leave stale state. Prefer per-test setup, fixtures, or API helpers
for larger suites.

**24. How would you avoid hardcoding secrets?**\
Load credentials from approved environment/configuration mechanisms or a
secret manager, and ensure secrets are excluded from source control and
logs.

**25. Is OAuth password grant suitable for a new integration?**\
Usually not. It is a legacy grant and may be disabled. Follow the
approved OAuth flow supported by the organization's ServiceNow
configuration.

**26. How would you make this test suite more maintainable?**\
Move the base URL and credentials into configuration, create helper
functions or fixtures for token acquisition and common headers, use
typed response interfaces, and separate test data setup from assertions.

**27. How do you handle cleanup if an assertion fails?**\
Use a cleanup strategy such as `try/finally`, a teardown hook, or a
dedicated cleanup test/helper so test-created records do not accumulate.

**28. How does API testing complement UI testing?**\
API tests validate service behavior quickly and directly. UI tests
validate user workflows and presentation. Together they provide broader
coverage.

**29. How would you test API response time?**\
Measure elapsed time around requests and assert a reasonable threshold
for a functional check. For load and performance conclusions, use a
dedicated performance-testing approach.

**30. What would you include in a bug report for a failing API test?**\
Environment, endpoint, method, sanitized request payload, expected and
actual status/body, correlation/request identifiers where available,
reproduction steps, and relevant logs without secrets.

## Quick Revision

-   Use `request` for API-only tests.
-   Use `form` for URL-encoded token requests and `data` for JSON
    payloads.
-   Save `access_token` for authorization and `result.sys_id` for
    record-specific requests.
-   Use `expect` to validate status codes and response fields.
-   Serial CRUD is useful for learning; prefer isolated tests in larger
    suites.
-   Keep credentials secret and use an approved OAuth grant.

## References

-   Playwright API testing: https://playwright.dev/docs/api-testing
-   Playwright APIRequestContext:
    https://playwright.dev/docs/api/class-apirequestcontext
-   Playwright assertions: https://playwright.dev/docs/test-assertions
-   ServiceNow REST API reference:
    https://developer.servicenow.com/dev.do#!/reference/api
-   OAuth 2.0 overview (RFC 6749):
    https://www.rfc-editor.org/rfc/rfc6749
