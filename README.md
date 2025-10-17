# 💰 Loans Service Challenge

A **Express** service written in **TypeScript** that determines **which loan products** a person is eligible for, based on **age**, **income**, and **location**.

---

## 📖 Table of Contents

- [Introduction](#introduction)  
- [Business Rules](#business-rules)  
- [Makefile Commands](#makefile-commands)  
- [Running the Service](#running-the-service)  
- [API Reference](#api-reference)  

---

## 🚀 Introduction
The service consumes customer data and returns a JSON containing an array of loan types the customer qualifies for, along with the corresponding interest rates.

This is my solution created as part of a loans technical challenge from the [`@backend-br`](https://github.com/backend-br/) community.

See the full problem statement here:  
👉 [backend-br/desafios – Loans Challenge](https://github.com/backend-br/desafios/blob/master/loans/PROBLEM.md)

---

## 🧠 Business Rules

Loan types and interest rates:

| Loan Type       | Interest Rate |
|-----------------|---------------|
| PERSONAL        | 4%            |
| CONSIGNMENT     | 2%            |
| GUARANTEED      | 3%            |

Rules for eligibility:

1. **Personal Loan (PERSONAL)**
   - `income ≤ R$ 3,000.00`  
   - **OR** `income > R$ 3,000.00 and income < R$ 5,000.00` **AND** `age < 30` **AND** `location === "SP"`

2. **Consignment Loan (CONSIGNMENT)**
   - `income ≥ R$ 5,000.00`

3. **Guaranteed Loan (GUARANTEED)**
   - Same conditions as the Personal Loan:
     - `income ≤ R$ 3,000.00`  
     - **OR** `income > R$ 3,000.00 and income < R$ 5,000.00` **AND** `age < 30` **AND** `location === "SP"`


---

## 🧩 Makefile Commands

The project includes a **Makefile** to help with common tasks.


Common commands available:

| Command         | Description |
|-----------------|-------------|
| `make env`      | Copy .env.example to .env |
| `make build`    | Build the Docker image using the project's Dockerfile |
| `make up`       | Start the `desafio-loans-service` container |
| `make down`     | Stop and remove containers |
| `make logs`     | View container logs |


---

## ▶️ Running the Service

### Prerequisites

- **Docker**
- **Make**

### Steps

 - Clone the repository:

```bash
git clone https://github.com/letabilis/desafio-loans-service.git
cd desafio-loans-service
```


- Set environment variables to your liking but first generate .env file with:
```bash
make env
```

 - Generate docker image:
```bash
make build
```

 - Run container:
```bash
make up
```


- By default, the service will be available at (unless you changed the port):

```
http://localhost:3000
```


---

## 🌐 API Reference

### **GET /health-check**

Health check endpoint.

**Example Request**

```bash
curl -X GET http://localhost:3000/health-check
```

**Example Response**

```json
{
	"timestamp": 1760712881505,
	"uptime": 950.280152456,
	"responseTime": [
		6755,
		621768812
	],
	"message": "OK"
}
```

---

### **POST /customer-loans**

Evaluate a customer and return the loans they qualify for.

**Request Body**

```json
{
  "age": 21,
  "cpf": "275.484.389-23",
  "name": "Vuxaywua Zukiagou",
  "income": 4000.00,
  "location": "SP"
}
```

**Response Rules**

- PERSONAL (4%) → (`3000 < income < 5000` AND `age < 30` AND `location === "SP"`)
- GUARANTEED (3%) → same conditions as PERSONAL

**Example Response**

```json
{
  "name": "Vuxaywua Zukiagou",
  "loans": [
	  {
		"type": "PERSONAL",
		"interest_rate": 4
	  },
	  {
		"type": "GUARANTEED",
		"interest_rate": 3
	  }
  ]
}
```

**Response Codes**

| Code | Description |
|------|--------------|
| 200  | Successful request |
| 400  | Invalid or missing data |
| 500  | Internal server error |

---

Made with ❤️ by **sDowlani**.

