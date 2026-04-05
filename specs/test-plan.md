# --Test Plan

## Test Scenarios

#### 1.1 Login and Verify

**Preconditions:**
- Application is accessible at https://www.saucedemo.com/
- Browser is open and ready
- User has valid credentials (standard_user/secret_sauce)

**Steps:**
1. Navigate to https://www.saucedemo.com/
2. Keyboard action -> Type Username as "standard_user" sequentially
3. Keyboard action -> Type Password as "secret_sauce" sequentially
4. Click login button
5. Wait until network is idle
6. Verify URL contains substring as inventory
7. Verify page contains text Products element is visible
8. Verify element text is "Products"

**Expected Results:**
- URL contains "inventory"
- Products heading is visible and attached to DOM
- Products element displays the text "Products"
