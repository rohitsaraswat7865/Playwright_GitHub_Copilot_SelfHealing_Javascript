# TodoMVC Application - Basic Operations Test Plan

## Test Scenarios

### 1. Adding New Todos

**Seed:** `tests/seed.spec.ts`

#### 1.1 Login and Verify

**Preconditions:**
- Application is accessible at https://www.saucedemo.com/
- Browser is open and ready
- User has valid credentials (standard_user/secret_sauce)

**Steps:**
1. Navigate to https://www.saucedemo.com/
2. Enter Username as "standard_user"
3. Enter Password as "secret_sauce"
4. Click login button, use locator
5. Page loads, Wait until network is idle and url contains substring as inventory

**Expected Results:**
- page contains text Products and that element is attached to dom
