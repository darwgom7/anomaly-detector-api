# Anomaly Detector API

An API to detect anomalies in a given bi-directional DNA matrix. An anomaly is identified if three or more identical letters appear consecutively in a row, column, or diagonal.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
   - [Validate Anomaly](#validate-anomaly)
   - [Stats](#stats)
3. [Running Tests](#running-tests)
4. [Development](#development)

---

## Installation

Before you start, make sure you have Node.js and npm installed on your machine. Then, follow these steps:

\`\`\`
# Clone the repository
git clone https://github.com/darwgom7/anomaly-detector-api.git

# Navigate into the project directory
cd anomaly-detector-api

# Install the dependencies
npm install
\`\`\`

---

## Usage

The API exposes two endpoints:

### Validate Anomaly

Validates if the given DNA matrix has any anomalies.

**Endpoint:** `POST /validate-anomaly`

**Request Body:**

\`\`\`
{
  "dna": [
    ["A", "C", "A", "D"],
    ["A", "B", "C", "D"],
    ["A", "C", "C", "A"],
    ["C", "B", "C", "D"]
  ]
}
\`\`\`

**Response:**

- `200 OK` if an anomaly is found.
- `403 Forbidden` if no anomaly is found.

### Stats

Provides statistics about the usage of the `POST /validate-anomaly` endpoint.

**Endpoint:** `GET /stats`

**Response:**

\`\`\`
{
  "count_anomalies": 30,
  "count_no_anomalies": 70,
  "ratio": 0.3
}
\`\`\`

---

## Running Tests

To run tests, execute the following command:

\`\`\`
npm test
\`\`\`

---

## Development

To start the development server:

\`\`\`
npm run dev
\`\`\`

This will start the development server, which will automatically reload when changes are detected in the `src` directory.

---