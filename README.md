**BOOK INVENTORY MANAGMENT API**

## Installation

Install my-project with npm 

```bash
  npm install 
  yarn
```

## SETUP .env FILE
```bash
 PORT = 8000
 DATABASE_URL = "mongodb://localhost:27017/bookinventorys"
```

## TO  EXICUTE CODE

```bash
  npm start
  yarn start
```
    


## API Reference

#### TO LOGIN

```http
  POST /auth/login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` `password` | `string` | this method helps you to login |

#### TO SIGNUP

```http
  POST /auth/signup
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `nothing`      | `string` | this method helps you to signup |

```http
  GET /store/all
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `role` `token`     | `string` | this method helps you get store book inventory details |


```http
  POST /store
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `role` `token`     | `string` | this method helps you create store (only for seller) |

```http
  PUT /store/:id/?value=
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `role` `token`     | `string` | this method helps you update inventory book (only for seller) |

```http
  DELETE /store/?id=
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `role` `token`     | `string` | this method helps you delete inventory (only for seller) |

  