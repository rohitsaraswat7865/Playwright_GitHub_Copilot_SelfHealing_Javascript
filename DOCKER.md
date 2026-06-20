# Running Playwright Tests in Docker

This project includes Docker support for running Playwright tests in a containerized environment.

## Prerequisites

- Docker installed and running

## Quick Start

#### Build the image:
```bash
docker build -t playwright-tests .
```

#### Run tests:
```bash
docker run --rm playwright-tests
```

#### Run tests with output volumes:
```bash
docker run --rm \
  -v %cd%\test-results:/app/test-results \
  -v %cd%\playwright-report:/app/playwright-report \
  playwright-tests
```

## Available Commands

Run different test commands inside the container:

```bash
# Run all tests
docker run --rm playwright-tests npm test

# Run tests with UI
docker run --rm playwright-tests npm run test:ui

# Run tests in debug mode
docker run --rm playwright-tests npm run test:debug

# Run specific test file
docker run --rm playwright-tests npx playwright test tests/login-and-verify.spec.ts

# Run with verbose output
docker run --rm playwright-tests npx playwright test --verbose
```

## Viewing Test Reports

After running tests, view the HTML reports:

```bash
# On Windows
start .\playwright-report\index.html

# On macOS/Linux
open ./playwright-report/index.html
```

## Environment Variables

The Docker configuration sets `CI=true` by default, which:
- Runs tests sequentially (not in parallel)
- Retries failed tests twice
- Runs in headless mode

To override, add environment variables:

```bash
docker run --rm \
  -e CI=false \
  -e HEADED=true \
  playwright-tests
```

## Dockerfile Details

- **Base Image**: `mcr.microsoft.com/playwright:v1.59.1-jammy`
  - Includes all required system dependencies for Playwright
  - Pre-configured for running browsers in containerized environments
  
- **Key Steps**:
  1. Installs Node.js dependencies with `npm ci`
  2. Installs Playwright browsers
  3. Sets CI environment variable for optimized test execution
  4. Runs tests with `npm test`

## Troubleshooting

### Tests fail in Docker but pass locally

This usually indicates environment differences. Check:
- Playwright browser versions match
- System dependencies are properly installed
- Base URL or API endpoints are accessible from container

### Out of memory errors

Increase Docker memory limits:

```bash
docker run --rm -m 4g playwright-tests
```

### Permission issues with volumes

On Linux, you might need to match UID/GID:

```bash
docker run --rm -u $(id -u):$(id -g) \
  -v $(pwd)/test-results:/app/test-results \
  -v $(pwd)/playwright-report:/app/playwright-report \
  playwright-tests
```

## Development with Docker

For local development with test modification:

```bash
docker run --rm -it \
  -v %cd%\tests:/app/tests \
  -v %cd%\specs:/app/specs \
  -v %cd%\playwright-report:/app/playwright-report \
  playwright-tests /bin/bash
```

Then inside the container, run tests as needed.

## CI/CD Integration

For GitHub Actions, GitLab CI, or other CI platforms:

```yaml
# Example GitHub Actions
- name: Run Playwright tests in Docker
  run: |
    docker build -t playwright-tests .
    docker run --rm -v ${{ github.workspace }}/test-results:/app/test-results -v ${{ github.workspace }}/playwright-report:/app/playwright-report playwright-tests
  
- name: Upload test reports
  if: always()
  uses: actions/upload-artifact@v3
  with:
    name: playwright-report
    path: playwright-report/
```
